import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karthikeya Bendi - n8n Automation Specialist',
  description: 'Expert n8n automation specialist and full-stack developer. Specializing in workflow automation, AI integration, and scalable web solutions.',
  keywords: 'n8n, automation, workflow, developer, AI, machine learning, React, Next.js',
  authors: [{ name: 'Karthikeya Bendi' }],
  openGraph: {
    title: 'Karthikeya Bendi - n8n Automation Specialist',
    description: 'Expert n8n automation specialist and full-stack developer',
    url: 'https://karthikeyabendi.vercel.app',
    siteName: 'Karthikeya Bendi Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthikeya Bendi - n8n Automation Specialist',
    description: 'Expert n8n automation specialist and full-stack developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-900 text-cream-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}