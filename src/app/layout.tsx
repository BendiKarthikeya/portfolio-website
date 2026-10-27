import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LightRays from '@/components/LightRays'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://karthikeyabendi.tech'),
  title: 'Karthikeya Bendi - Full Stack Dev & Automation',
  description: 'AI & Full Stack Developer and Automation Specialist. Building production-grade applications and intelligent n8n automation workflows. Founder @ GoAutomate.',
  keywords: 'full stack developer, n8n, automation, AI, LLM, Voice AI, React, Next.js, GoAutomate',
  authors: [{ name: 'Karthikeya Bendi' }],
  openGraph: {
    title: 'Karthikeya Bendi - Full Stack Dev & Automation',
    description: 'AI & Full Stack Developer and Automation Specialist. Founder @ GoAutomate.',
    url: 'https://karthikeyabendi.tech',
    siteName: 'Karthikeya Bendi Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthikeya Bendi - Full Stack Dev & Automation',
    description: 'AI & Full Stack Developer and Automation Specialist. Founder @ GoAutomate.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/icon.svg' }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="relative scroll-smooth dark">
      <body className={`${inter.className} text-cream-100 min-h-screen`}>
        {/* Transparent rays over a guaranteed dark base; never paints an opaque field. */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-45" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#94a3b8"
            raysSpeed={0.34}
            lightSpread={0.68}
            rayLength={2.1}
            rayDensity={0.82}
            raySharpness={0.32}
            glow={0.5}
            haze={0.22}
            atmosphere={0.32}
            intensity={1.05}
            fadeDistance={1.2}
            saturation={0.12}
            followMouse
            mouseInfluence={0.06}
            cursorShadow={false}
            clickPulse={false}
            opacity={0.62}
            maxDevicePixelRatio={1.25}
          />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
