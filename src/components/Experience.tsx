'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Rocket, Globe, Linkedin } from 'lucide-react'
import { experiences } from '@/data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-transparent">
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
              <Briefcase className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Career Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Work{' '}
            <span className="text-gray-400">Experience</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-lg">
            Building products and automation across startups and international teams
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cream-300/40 via-cream-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    isLeft ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  {/* Node dot */}
                  <span
                    className={`absolute top-6 h-3 w-3 rounded-full bg-gold-400 ring-4 ring-gold-400/20 ${
                      isLeft
                        ? 'left-4 -translate-x-1/2 md:left-auto md:right-[-6px] md:translate-x-0'
                        : 'left-4 -translate-x-1/2 md:left-[-6px] md:right-auto md:translate-x-0'
                    }`}
                  />

                  <div className="cursor-target bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gold-400/60 hover:shadow-lg hover:shadow-gold-400/10 transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-gold-400/15 text-gold-400 border border-gold-400/30">
                        {exp.type === 'Founder' ? <Rocket className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-cream-100">{exp.role}</h3>
                    <div className={`flex items-center gap-2.5 mt-1 mb-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                      <p className="text-gold-400 font-semibold">{exp.company}</p>
                      {('website' in exp && exp.website) && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cream-400 hover:text-gold-400 transition-colors"
                          title="Visit Website"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {('linkedin' in exp && exp.linkedin) && (
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cream-400 hover:text-gold-400 transition-colors"
                          title="View LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cream-400 mt-1 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span>{exp.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-cream-200 text-sm leading-relaxed">{exp.description}</p>

                    <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-700/60 text-cream-300 border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
