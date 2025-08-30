'use client'

import Header from '@/components/Header'
import N8nShowcase from '@/components/N8nShowcase'
import { motion } from 'framer-motion'
import { ArrowLeft, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function N8nPortfolio() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-cream-300 hover:text-gold-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-gold-400/20 to-burgundy-500/20 border border-gold-400/30 rounded-full">
                <Workflow className="w-8 h-8 text-gold-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-cream-100">n8n Automation Portfolio</h1>
                <p className="text-cream-300">Complete showcase of workflow automation projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <N8nShowcase />
    </main>
  )
}