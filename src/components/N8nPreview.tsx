'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Workflow, Clock, Users, TrendingUp, Zap, Bot, Mail, FileText, Target } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: <Workflow className="w-5 h-5" />, value: "50+", label: "Workflows Built" },
  { icon: <Clock className="w-5 h-5" />, value: "30+", label: "Nodes Used" },
  { icon: <Users className="w-5 h-5" />, value: "25+", label: "Orgs Helped" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "90%", label: "Efficiency Gain" },
]

const categories = [
  { icon: <Bot className="w-6 h-6" />, title: "Data Analysis & AI", desc: "Business intelligence with chatbot automation", accent: "from-blue-500/15 to-purple-500/15", border: "border-blue-400/25" },
  { icon: <FileText className="w-6 h-6" />, title: "Educational Automation", desc: "Daily communication and content management", accent: "from-emerald-500/15 to-teal-500/15", border: "border-emerald-400/25" },
  { icon: <Target className="w-6 h-6" />, title: "Business Process", desc: "End-to-end platform automation", accent: "from-orange-500/15 to-red-500/15", border: "border-orange-400/25" },
  { icon: <Mail className="w-6 h-6" />, title: "Lead Generation", desc: "Restaurant industry marketing automation", accent: "from-purple-500/15 to-pink-500/15", border: "border-purple-400/25" },
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
    <section id="n8n-preview" className="section-padding bg-transparent">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <Workflow className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Automation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-cream-100 leading-tight">
            n8n Automation<br />
            <span className="bg-gradient-to-r from-gold-400 to-burgundy-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-xl">
            Transforming business operations through intelligent workflow automation
          </p>
        </motion.div>

        {/* Main bento grid */}
        <div className="grid lg:grid-cols-3 gap-5">

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-gray-900/60 border border-white/10 rounded-2xl px-5 py-4 hover:border-gold-400/30 transition-colors"
              >
                <div className="p-2 bg-gold-400/10 border border-gold-400/20 rounded-lg text-gold-400 flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold-400 leading-none">{s.value}</div>
                  <div className="text-xs text-cream-400 mt-0.5">{s.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 flex-1"
            >
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">Core Capabilities</h4>
              <div className="space-y-2.5">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Zap className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="text-cream-300 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Categories 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-gradient-to-br ${cat.accent} border ${cat.border} rounded-2xl p-6 hover:border-gold-400/40 transition-all duration-300 flex flex-col`}
              >
                <div className="p-2.5 bg-black/20 rounded-xl w-fit mb-4 text-gold-400">
                  {cat.icon}
                </div>
                <h4 className="text-base font-bold text-cream-100 mb-1.5">{cat.title}</h4>
                <p className="text-cream-400 text-sm leading-relaxed flex-1">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/25 rounded-2xl px-8 py-6"
        >
          <div>
            <h3 className="text-xl font-bold text-gold-400">Explore My Complete n8n Portfolio</h3>
            <p className="text-cream-300 text-sm mt-1">Detailed case studies, workflow diagrams, and real implementations</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/n8n-portfolio"
              className="inline-flex items-center bg-gold-400 text-gray-900 px-5 py-2.5 rounded-xl font-semibold hover:bg-gold-500 transition-colors text-sm whitespace-nowrap"
            >
              View Portfolio <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 px-5 py-2.5 rounded-xl font-semibold transition-colors text-sm whitespace-nowrap"
            >
              Discuss Project
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default N8nPreview
