'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Workflow, Clock, Users, TrendingUp, Zap, Bot, Mail, FileText, Target } from 'lucide-react'
import Link from 'next/link'
import BorderGlow from '@/components/BorderGlow'

const stats = [
  { icon: <Workflow className="w-5 h-5" />, value: "50+", label: "Workflows Built" },
  { icon: <Clock className="w-5 h-5" />, value: "30+", label: "Nodes Used" },
  { icon: <Users className="w-5 h-5" />, value: "25+", label: "Orgs Helped" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "90%", label: "Efficiency Gain" },
]

const categories = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Data Analysis & AI",
    desc: "Business intelligence with AI-powered chatbot automation",
    highlights: [
      "AI Insights & Visual Graphs",
      "Interactive Dataset Q&A Chatbot",
      "Automated AWS S3 Data Storage"
    ],
    tags: ["OpenAI API", "AWS", "n8n"],
    accent: "from-blue-500/15 to-purple-500/15",
    border: "border-blue-400/25",
    projectId: 7
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Educational Automation",
    desc: "Daily communication and automated content distribution",
    highlights: [
      "Bulk PDF Certificate Generation",
      "Personalized Email Distribution",
      "Google Sheets Data Integration"
    ],
    tags: ["Google Sheets", "PDF API", "Gmail"],
    accent: "from-emerald-500/15 to-teal-500/15",
    border: "border-emerald-400/25",
    projectId: 9
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Business Process",
    desc: "End-to-end multi-platform business automation",
    highlights: [
      "Multi-Database Synchronization",
      "Automated Invoice & PDF Flow",
      "Real-Time Payment Reminders"
    ],
    tags: ["PostgreSQL", "Neon DB", "PDF API"],
    accent: "from-orange-500/15 to-red-500/15",
    border: "border-orange-400/25",
    projectId: 4
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Lead Generation",
    desc: "Restaurant industry marketing & outreach automation",
    highlights: [
      "Google Maps Lead Scraping",
      "Smart Email Verification & Dedup",
      "Personalized Outreach Sequences"
    ],
    tags: ["Apify", "Google Maps", "n8n"],
    accent: "from-purple-500/15 to-pink-500/15",
    border: "border-purple-400/25",
    projectId: 8
  },
]

const capabilities = [
  "API Integrations & Webhooks",
  "Database Automation & Sync",
  "Email Marketing Workflows",
  "Data Processing & Analysis",
  "Multi-platform Integrations",
  "Custom Business Logic",
]

const N8nPreview = () => {
  return (
    <section id="n8n-preview" className="section-padding overflow-hidden bg-transparent">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <Workflow className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            n8n Automation{' '}
            <span className="text-gray-400">Expertise</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-sm sm:text-lg">
            Transforming business operations through intelligent workflow automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <BorderGlow className="h-full" backgroundColor="transparent" borderRadius={20}>
              <div className="h-full rounded-[20px] border border-white/10 bg-gradient-to-b from-[#171a1f] to-[#0e1014] p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400">Measured impact</p>
                <h3 className="mt-1 text-base font-semibold text-cream-100">Automation at scale</h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                      <div className="text-cream-300">{stat.icon}</div>
                      <div className="mt-2 text-xl font-bold text-white sm:text-2xl">{stat.value}</div>
                      <div className="mt-0.5 text-[10px] leading-snug text-cream-400 sm:text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <BorderGlow className="h-full" backgroundColor="transparent" borderRadius={20}>
              <div className="h-full rounded-[20px] border border-white/10 bg-gradient-to-b from-[#171a1f] to-[#0e1014] p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400">Core capabilities</p>
                <h3 className="mt-1 text-base font-semibold text-cream-100">From trigger to measurable outcome</h3>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div key={capability} className="flex min-w-0 items-center gap-2.5 rounded-lg bg-white/[0.035] px-3 py-2.5 text-xs text-cream-300 sm:text-sm">
                      <Zap className="h-3.5 w-3.5 flex-shrink-0 text-cream-100" />
                      <span className="min-w-0 leading-snug">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <BorderGlow className="h-full" backgroundColor="transparent" borderRadius={20}>
                <Link
                  href={`/n8n-portfolio?projectId=${category.projectId}`}
                  className="group flex h-full min-w-0 flex-col rounded-[20px] border border-white/10 bg-gradient-to-b from-[#171a1f] to-[#0e1014] p-4 transition-colors hover:border-white/20 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5 text-cream-100">
                      {category.icon}
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-cream-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="mt-4 min-w-0">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{category.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-cream-400 sm:text-sm">{category.desc}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.tags.map((tag) => (
                      <span key={tag} className="max-w-full rounded-full border border-white/10 bg-black/15 px-2.5 py-1 text-[10px] leading-tight text-cream-300 sm:text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <BorderGlow backgroundColor="transparent" borderRadius={16}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cream-100/10 to-cream-600/10 border border-cream-400/25 rounded-2xl px-8 py-6">
          <div>
            <h3 className="text-xl font-bold text-gold-400">Explore My Complete n8n Portfolio</h3>
            <p className="text-cream-300 text-sm mt-1">Detailed case studies, workflow diagrams, and real implementations</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <Link
              href="/n8n-portfolio"
              className="inline-flex items-center justify-center bg-gold-400 text-gray-900 px-5 py-2.5 rounded-xl font-semibold hover:bg-gold-500 transition-colors text-sm whitespace-nowrap w-full sm:w-auto"
            >
              View Portfolio <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 px-5 py-2.5 rounded-xl font-semibold transition-colors text-sm whitespace-nowrap w-full sm:w-auto"
            >
              Discuss Project
            </a>
          </div>
            </div>
          </BorderGlow>
        </motion.div>

      </div>
    </section>
  )
}

export default N8nPreview
