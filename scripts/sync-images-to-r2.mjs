import { createHash } from "node:crypto"
import { createReadStream, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { extname, join, relative, sep } from "node:path"
import nextEnv from "@next/env"
import {
  CreateBucketCommand,
  HeadBucketCommand,
  HeadObjectCommand,
  ListBucketsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3"

const { loadEnvConfig } = nextEnv
loadEnvConfig(process.cwd())

const requiredVariables = [
  "Access_Key_ID",
  "Secret_Access_Key",
  "Account_ID",
  "S3_API_endpoint",
  "Your_API_Token",
]

const missingVariables = requiredVariables.filter((name) => !process.env[name]?.trim())
if (missingVariables.length > 0) {
  throw new Error(`Missing environment variables: ${missingVariables.join(", ")}`)
}

const accountId = process.env.Account_ID.trim()
const apiToken = process.env.Your_API_Token.trim()
let bucketName = process.env.R2_BUCKET_NAME?.trim() || ""
const objectPrefix = (process.env.R2_OBJECT_PREFIX?.trim() || "Images").replace(/^\/+|\/+$/g, "")
const imagesDirectory = join(process.cwd(), "public", "Images")

const contentTypes = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
}

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.S3_API_endpoint.trim(),
  credentials: {
    accessKeyId: process.env.Access_Key_ID.trim(),
    secretAccessKey: process.env.Secret_Access_Key.trim(),
  },
})

async function ensureBucket() {
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucketName }))
    return false
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode
    if (status !== 404 && error?.name !== "NotFound" && error?.name !== "NoSuchBucket") {
      throw error
    }
  }

  await s3.send(new CreateBucketCommand({ Bucket: bucketName }))
  return true
}

async function selectBucket() {
  if (bucketName) return

  const preferredName = "karthikeya-portfolio-images"
  try {
    const result = await s3.send(new ListBucketsCommand({}))
    const availableNames = result.Buckets?.map((bucket) => bucket.Name).filter(Boolean) || []
    bucketName = availableNames.includes(preferredName)
      ? preferredName
      : availableNames.length === 1
        ? availableNames[0]
        : preferredName
  } catch {
    // Bucket-scoped credentials may not have permission to list every bucket.
    bucketName = preferredName
  }
}

function collectImages(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = join(directory, entry.name)
    if (entry.isDirectory()) return collectImages(absolutePath)
    return contentTypes[extname(entry.name).toLowerCase()] ? [absolutePath] : []
  })
}

async function uploadImage(filePath) {
  const pathWithinImages = relative(imagesDirectory, filePath).split(sep).join("/")
  const key = `${objectPrefix}/${pathWithinImages}`
  const size = statSync(filePath).size
  const checksum = createHash("md5").update(readFileSync(filePath)).digest("hex")

  try {
    const existing = await s3.send(new HeadObjectCommand({ Bucket: bucketName, Key: key }))
    const existingChecksum = existing.ETag?.replaceAll('"', "")
    if (existing.ContentLength === size && existingChecksum === checksum) return "skipped"
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode
    if (status !== 404 && error?.name !== "NotFound" && error?.name !== "NoSuchKey") {
      throw error
    }
  }

  await s3.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: createReadStream(filePath),
      ContentLength: size,
      ContentType: contentTypes[extname(filePath).toLowerCase()],
      CacheControl: "public, max-age=31536000, immutable",
    }),
  )
  return "uploaded"
}

async function cloudflareApi(path, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  })
  const payload = await response.json()
  if (!response.ok || !payload.success) {
    const message = payload.errors?.map((error) => error.message).join("; ") || response.statusText
    throw new Error(`Cloudflare API request failed: ${message}`)
  }
  return payload.result
}

async function enablePublicDevelopmentUrl() {
  const path = `/accounts/${encodeURIComponent(accountId)}/r2/buckets/${encodeURIComponent(bucketName)}/domains/managed`
  const result = await cloudflareApi(path, {
    method: "PUT",
    body: JSON.stringify({ enabled: true }),
  })
  return result?.domain ? `https://${result.domain}` : null
}

function upsertLocalEnvironment(values) {
  const envPath = join(process.cwd(), ".env.local")
  const lines = existsSync(envPath) ? readFileSync(envPath, "utf8").split(/\r?\n/) : []
  const pending = new Map(Object.entries(values))
  const nextLines = lines.map((line) => {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=/)
    if (!match || !pending.has(match[1])) return line
    const value = pending.get(match[1])
    pending.delete(match[1])
    return `${match[1]}=${value}`
  })

  for (const [name, value] of pending) nextLines.push(`${name}=${value}`)
  writeFileSync(envPath, `${nextLines.filter(Boolean).join("\n")}\n`, { mode: 0o600 })
}

await selectBucket()
const bucketCreated = await ensureBucket()
const files = collectImages(imagesDirectory)
let uploaded = 0
let skipped = 0

for (const file of files) {
  const result = await uploadImage(file)
  if (result === "uploaded") uploaded += 1
  else skipped += 1
}

const publicUrl = await enablePublicDevelopmentUrl()
if (!publicUrl) throw new Error("Cloudflare enabled public access but did not return a public URL")

upsertLocalEnvironment({
  R2_BUCKET_NAME: bucketName,
  R2_OBJECT_PREFIX: objectPrefix,
  NEXT_PUBLIC_R2_PUBLIC_URL: publicUrl,
})

console.log(`Bucket: ${bucketName}${bucketCreated ? " (created)" : ""}`)
console.log(`Images uploaded: ${uploaded}`)
console.log(`Images unchanged: ${skipped}`)
console.log(`Public URL: ${publicUrl}`)
console.log("Saved the public URL to .env.local; credentials remain server-side.")
