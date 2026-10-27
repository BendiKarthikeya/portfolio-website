'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import MagicBento from '@/components/MagicBento'
import { skills } from '@/data/portfolio'

const categories = [
  { title: 'n8n & Automation', label: 'Core specialty', skills: skills.n8nSpecialist, colSpan: 2 },
  { title: 'AI Integrations', label: 'Intelligence', skills: skills.automation, colSpan: 1 },
  { title: 'Languages', label: 'Engineering', skills: skills.programming, colSpan: 1 },
  { title: 'Web / Full Stack', label: 'Product development', skills: skills.webDev, colSpan: 1 },
  { title: 'AI Stack', label: 'Applied AI', skills: skills.aiStack, colSpan: 1 },
  { title: 'Databases & BI', label: 'Data layer', skills: skills.dataScience, colSpan: 1 },
  { title: 'AI Tools', label: 'Daily toolkit', skills: skills.design, colSpan: 2 },
  { title: 'DevOps & Tools', label: 'Delivery', skills: skills.tools, colSpan: 1 },
]

const Skills = () => {
  const items = categories.map((category) => ({
    id: category.title,
    colSpan: category.colSpan,
    content: (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400">{category.label}</p>
            <h3 className="text-sm sm:text-base font-semibold text-cream-100 mt-1">{category.title}</h3>
          </div>
          <ArrowRight className="h-5 w-5 text-slate-300" aria-hidden="true" />
        </div>

        <div className="flex flex-wrap content-start gap-2 mt-auto">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[11px] text-cream-200"
            >
              <span aria-hidden="true">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    ),
  }))

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <Code2 className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Technical <span className="text-gray-400">Skills</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-sm sm:text-lg">
            My automation, AI, full-stack, and data toolkit
          </p>
        </motion.div>

        <MagicBento
          items={items}
          columns={3}
          rowHeight={190}
          gap={14}
          radius={20}
          theme="dark"
          glowColor="#94a3b8"
          textAutoHide={false}
          enableBorderGlow={false}
          enableSpotlight={false}
          spotlightRadius={290}
          enableStars={false}
          particleCount={4}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          intro
        />
      </div>
    </section>
  )
}

export default Skills
