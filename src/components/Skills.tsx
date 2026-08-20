'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { skills } from '@/data/portfolio'

const categories = [
  {
    title: 'n8n & Automation',
    skills: skills.n8nSpecialist,
    accent: 'from-sky-400 to-blue-600',
    border: 'border-sky-500/40',
    bg: 'bg-sky-500/5',
    textColor: 'text-sky-300',
    pillBg: 'bg-sky-500/10 border-sky-500/25 hover:bg-sky-500/20 hover:border-sky-400/50',
    span: 'lg:col-span-2',
    size: 'large',
  },
  {
    title: 'AI Integrations',
    skills: skills.automation,
    accent: 'from-indigo-400 to-violet-500',
    border: 'border-indigo-400/40',
    bg: 'bg-indigo-400/5',
    textColor: 'text-indigo-300',
    pillBg: 'bg-indigo-400/10 border-indigo-400/25 hover:bg-indigo-400/20 hover:border-indigo-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'Languages',
    skills: skills.programming,
    accent: 'from-cyan-400 to-teal-500',
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-400/5',
    textColor: 'text-cyan-300',
    pillBg: 'bg-cyan-400/10 border-cyan-400/25 hover:bg-cyan-400/20 hover:border-cyan-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'Web / Full Stack',
    skills: skills.webDev,
    accent: 'from-blue-300 to-sky-500',
    border: 'border-blue-400/40',
    bg: 'bg-blue-400/5',
    textColor: 'text-blue-300',
    pillBg: 'bg-blue-400/10 border-blue-400/25 hover:bg-blue-400/20 hover:border-blue-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'AI Stack',
    skills: skills.aiStack,
    accent: 'from-purple-400 to-pink-500',
    border: 'border-purple-400/40',
    bg: 'bg-purple-400/5',
    textColor: 'text-purple-300',
    pillBg: 'bg-purple-400/10 border-purple-400/25 hover:bg-purple-400/20 hover:border-purple-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'Databases & BI',
    skills: skills.dataScience,
    accent: 'from-teal-300 to-cyan-600',
    border: 'border-teal-400/40',
    bg: 'bg-teal-400/5',
    textColor: 'text-teal-300',
    pillBg: 'bg-teal-400/10 border-teal-400/25 hover:bg-teal-400/20 hover:border-teal-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'AI Tools',
    skills: skills.design,
    accent: 'from-violet-300 to-indigo-500',
    border: 'border-violet-400/40',
    bg: 'bg-violet-400/5',
    textColor: 'text-violet-300',
    pillBg: 'bg-violet-400/10 border-violet-400/25 hover:bg-violet-400/20 hover:border-violet-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
  {
    title: 'DevOps & Tools',
    skills: skills.tools,
    accent: 'from-slate-300 to-blue-400',
    border: 'border-slate-400/40',
    bg: 'bg-slate-400/5',
    textColor: 'text-slate-300',
    pillBg: 'bg-slate-400/10 border-slate-400/25 hover:bg-slate-400/20 hover:border-slate-400/50',
    span: 'lg:col-span-1',
    size: 'normal',
  },
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <Code2 className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Technical{' '}
            <span className="text-gray-400">Skills</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-lg">
            Comprehensive expertise in automation, development, and integration technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className={`relative rounded-2xl border ${cat.border} ${cat.bg} p-5 backdrop-blur-sm overflow-hidden group ${cat.span}`}
            >
              {/* Glowing top line */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${cat.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              <h3 className={`text-sm font-semibold tracking-widest uppercase mb-4 ${cat.textColor}`}>
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ci * 0.07 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium text-cream-200 cursor-default transition-all duration-200 ${cat.pillBg}`}
                  >
                    <span className="text-sm leading-none">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
