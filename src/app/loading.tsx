import OrbitLoader from '@/components/reactbits/OrbitLoader'

export default function Loading() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#0b0d10] px-6">
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_42%,rgba(148,163,184,0.12),transparent_32%),repeating-linear-gradient(90deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_18px)]" aria-hidden="true" />
      <div className="relative z-10">
        <OrbitLoader />
      </div>
    </main>
  )
}
