'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Rocket, Globe, Linkedin } from 'lucide-react'
import GlareHover from '@/components/GlareHover'
import { experiences } from '@/data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-2 inline-flex items-center justify-center gap-2.5">
            <div className="rounded-xl border border-slate-400/20 bg-slate-300/[0.06] p-2">
              <Briefcase className="h-5 w-5 text-slate-200" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Career Journey</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Work <span className="text-gray-400">Experience</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-cream-300 sm:text-base">
            Roles, responsibilities, and the systems I have built along the way.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }}
            >
              <GlareHover className="micro-slats min-h-[390px] overflow-hidden rounded-[30px] border border-slate-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_rgba(0,0,0,0.28)]">
                <article className="relative flex min-h-[390px] overflow-hidden p-6 text-left sm:p-8 lg:p-10">
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <Image
                      src="/decor/circuit-botanical.webp"
                      alt=""
                      width={470}
                      height={730}
                      sizes="(min-width: 1024px) 440px, 280px"
                      className="absolute -bottom-28 -right-20 h-[125%] w-auto select-none object-contain grayscale saturate-0 brightness-75 contrast-150 opacity-[0.12] sm:-right-6 sm:opacity-[0.19] lg:-bottom-36 lg:right-8 lg:h-[145%] lg:opacity-[0.3]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,9,0.99)_0%,rgba(6,7,9,0.94)_52%,rgba(6,7,9,0.42)_78%,rgba(6,7,9,0.68)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(226,232,240,0.1),transparent_30%)]" />
                  </div>

                  <div className="relative z-10 flex w-full max-w-3xl flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-cream-100 backdrop-blur-sm sm:text-xs">
                        {experience.type === 'Founder' ? <Rocket className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />}
                        {experience.type}
                      </span>
                      <span className="text-xs tabular-nums tracking-[0.16em] text-cream-400">
                        {String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.24em] text-cream-400 sm:text-sm">{experience.company}</p>
                      <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl">{experience.role}</h3>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-300 sm:text-sm">
                        <span>{experience.period}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-cream-200 sm:text-base">{experience.description}</p>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span key={skill} className="rounded-lg border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-cream-300 backdrop-blur-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex gap-5">
                        {'website' in experience && experience.website && (
                          <a href={experience.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-cream-300">
                            <Globe className="h-4 w-4" /> Website
                          </a>
                        )}
                        {'linkedin' in experience && experience.linkedin && (
                          <a href={experience.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-cream-300">
                            <Linkedin className="h-4 w-4" /> LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-9 right-9 z-10 hidden border-r border-white/10 pr-4 text-right lg:block">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Craft / systems</p>
                    <p className="mt-2 text-xs text-slate-400">AI · automation · product</p>
                  </div>
                </article>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
