import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aurora from '@/components/reactbits/Aurora'
import ClickSpark from '@/components/reactbits/ClickSpark'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://karthikeyabendi.vercel.app'),
  title: 'Karthikeya Bendi - Full Stack Dev & Automation',
  description: 'AI & Full Stack Developer and Automation Specialist. Building production-grade applications and intelligent n8n automation workflows. Founder @ GoAutomate.',
  keywords: 'full stack developer, n8n, automation, AI, LLM, Voice AI, React, Next.js, GoAutomate',
  authors: [{ name: 'Karthikeya Bendi' }],
  openGraph: {
    title: 'Karthikeya Bendi - Full Stack Dev & Automation',
    description: 'AI & Full Stack Developer and Automation Specialist. Founder @ GoAutomate.',
    url: 'https://karthikeyabendi.vercel.app',
    siteName: 'Karthikeya Bendi Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthikeya Bendi - Full Stack Dev & Automation',
    description: 'AI & Full Stack Developer and Automation Specialist. Founder @ GoAutomate.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} text-cream-100 min-h-screen`} style={{ backgroundColor: '#212529' }}>
        {/* Ambient animated aurora background */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
          <Aurora
            colorStops={['#f8f9fa', '#adb5bd', '#495057']}
            amplitude={0.8}
            blend={0.4}
            speed={0.4}
          />
        </div>

        {/* Click spark feedback across the whole app */}
        <ClickSpark sparkColor="#f8f9fa" sparkSize={11} sparkRadius={22} sparkCount={8} duration={500}>
          {children}
        </ClickSpark>
      </body>
    </html>
  )
}
