'use client'

import Header from '@/components/Header'
import N8nShowcase from '@/components/N8nShowcase'

export default function N8nPortfolio() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <N8nShowcase />
      </div>
    </main>
  )
}