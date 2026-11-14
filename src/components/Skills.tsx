'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { skills } from '@/data/portfolio'
import BorderGlow from '@/components/BorderGlow'

const categories = [
  { title: 'n8n & Automation', label: 'Core specialty', skills: skills.n8nSpecialist },
  { title: 'AI Integrations', label: 'Intelligence', skills: skills.automation },
  { title: 'Languages', label: 'Engineering', skills: skills.programming },
  { title: 'Web / Full Stack', label: 'Product development', skills: skills.webDev },
  { title: 'AI Stack', label: 'Applied AI', skills: skills.aiStack },
  { title: 'Databases & BI', label: 'Data layer', skills: skills.dataScience },
  { title: 'AI Tools', label: 'Daily toolkit', skills: skills.design },
  { title: 'DevOps & Tools', label: 'Delivery', skills: skills.tools },
]

const Skills = () => {
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="min-w-0"
            >
              <BorderGlow className="h-full" backgroundColor="transparent" borderRadius={20}>
                <div className="h-full rounded-[20px] border border-white/10 bg-gradient-to-b from-[#171a1f] to-[#0e1014] p-5 shadow-[0_18px_36px_-28px_rgba(0,0,0,.9)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400">{category.label}</p>
                  <h3 className="mt-1 text-base font-semibold text-cream-100">{category.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[11px] leading-tight text-cream-200"
                      >
                        <span aria-hidden="true">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
