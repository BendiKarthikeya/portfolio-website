'use client'

import Header from '@/components/Header'
import N8nShowcase from '@/components/N8nShowcase'
import GradualBlur from '@/components/GradualBlur'

export default function N8nPortfolio() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <div className="pt-16">
        <N8nShowcase />
      </div>
      <div className="hidden md:block">
        <GradualBlur
          target="page"
          position="bottom"
          height="8rem"
          strength={1.25}
          layers={7}
          curve="ease-out"
          tint="rgba(22, 25, 29, 0.42)"
          autoHide
          zIndex={40}
        />
      </div>
    </main>
  )
}
