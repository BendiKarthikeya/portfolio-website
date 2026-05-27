'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy } from 'lucide-react'
import { education, certifications, achievements } from '@/data/portfolio'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-transparent">
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
              <GraduationCap className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Background</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-cream-100 leading-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-gold-400 to-burgundy-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
        </motion.div>

        {/* Top row: Education timeline + Stats */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-gray-900/60 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-6">Academic Timeline</h3>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/40 via-burgundy-500/30 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="pl-12 relative"
                  >
                    {/* dot */}
                    <div className={`absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      edu.level === 'undergraduate'
                        ? 'bg-gold-400/20 border-gold-400'
                        : 'bg-gray-800 border-white/20'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${edu.level === 'undergraduate' ? 'bg-gold-400' : 'bg-gray-500'}`} />
                    </div>

                    <div className={`rounded-xl p-4 ${
                      edu.level === 'undergraduate'
                        ? 'bg-gradient-to-br from-gold-400/10 to-burgundy-500/10 border border-gold-400/25'
                        : 'bg-gray-800/40 border border-white/10'
                    }`}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className={`font-bold text-base ${edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-100'}`}>
                            {edu.degree}
                          </h4>
                          <p className="text-cream-300 text-sm">{edu.institution}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className={`text-sm font-semibold ${edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-300'}`}>
                            {edu.year}
                          </div>
                          {edu.grade && (
                            <div className="text-xs text-cream-400">GPA: {edu.grade}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.achievements.slice(0, 3).map((a, idx) => (
                          <span key={idx} className={`text-xs px-2.5 py-1 rounded-full ${
                            edu.level === 'undergraduate'
                              ? 'bg-gold-400/10 text-gold-400 border border-gold-400/20'
                              : 'bg-white/5 text-cream-300 border border-white/10'
                          }`}>
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats + Achievements column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '8.68', label: 'CGPA', color: 'text-gold-400' },
                { value: '3+', label: 'Certs', color: 'text-burgundy-500' },
                { value: '50+', label: 'Projects', color: 'text-gold-400' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-900/60 border border-white/10 rounded-xl p-3 text-center">
                  <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-cream-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gold-400/10 to-burgundy-500/10 border border-gold-400/20 rounded-2xl p-5 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-gold-400" />
                <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-400">Professional Achievements</h4>
              </div>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-cream-300 text-sm leading-relaxed">{a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-gold-400" />
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-400">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 bg-gray-800/50 border border-white/10 hover:border-gold-400/30 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400/15 to-burgundy-500/15 border border-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={cert.badge} alt={cert.name} className="w-9 h-9 object-contain" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-cream-100 truncate">{cert.name}</h4>
                  <p className="text-gold-400 text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-cream-400 text-xs">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Education
