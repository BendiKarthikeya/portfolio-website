'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { Briefcase, MapPin, Rocket, Globe, Linkedin } from 'lucide-react'
import GlareHover from '@/components/GlareHover'
import { experiences } from '@/data/portfolio'

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const previousIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const active = experiences[activeIndex]
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextIndex = Math.min(experiences.length - 1, Math.floor(progress * experiences.length))
    if (nextIndex === previousIndexRef.current) return
    setDirection(nextIndex > previousIndexRef.current ? 1 : -1)
    previousIndexRef.current = nextIndex
    setActiveIndex(nextIndex)
  })

  const goToExperience = useCallback((index: number) => {
    const section = sectionRef.current
    if (!section) return
    const travel = Math.max(0, section.offsetHeight - window.innerHeight)
    const targetProgress = (index + 0.5) / experiences.length
    window.scrollTo({
      top: section.offsetTop + travel * targetProgress,
      behavior: 'smooth',
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-transparent"
      style={{ height: `${(experiences.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-3 sm:py-5">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center sm:mb-4"
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
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-cream-300 sm:text-sm">
              Scroll to bring each role forward
            </p>
          </motion.div>

          <nav className="mx-auto mb-4 max-w-5xl px-3 sm:mb-5" aria-label="Work experience progress">
            <div className="relative">
              <div className="absolute left-0 right-0 top-3.5 h-px bg-slate-600/45" aria-hidden="true" />
              <motion.div
                className="absolute left-0 right-0 top-3.5 h-px origin-left bg-slate-100 will-change-transform"
                style={{ scaleX: lineScaleX }}
                aria-hidden="true"
              />
              <ol className="relative flex items-start justify-between">
                {experiences.map((experience, index) => {
                  const isActive = index === activeIndex
                  const isComplete = index < activeIndex
                  return (
                    <li key={`${experience.company}-${experience.role}`} className="flex min-w-0 flex-col items-center">
                      <button
                        type="button"
                        onClick={() => goToExperience(index)}
                        aria-label={`Show ${experience.role} at ${experience.company}`}
                        aria-current={isActive ? 'step' : undefined}
                        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-semibold tabular-nums transition-all duration-300 sm:h-8 sm:w-8 ${
                          isActive
                            ? 'scale-110 border-white bg-white text-gray-950 shadow-[0_0_0_5px_rgba(255,255,255,0.08)]'
                            : isComplete
                              ? 'border-slate-200 bg-slate-300 text-gray-950'
                              : 'border-slate-600 bg-[#101318] text-slate-400'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </button>
                      <span className={`mt-2 hidden max-w-24 truncate text-center text-[10px] transition-colors sm:block ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {experience.company}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </nav>

          <div
            className="relative mx-auto h-[clamp(420px,58vh,520px)] w-full max-w-6xl"
            style={{ perspective: '1600px' }}
          >
            <div className="pointer-events-none absolute inset-x-5 inset-y-0 translate-y-5 scale-[0.965] rounded-[30px] border border-white/[0.07] bg-[#0a0c10]/80 opacity-70" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-10 inset-y-0 translate-y-9 scale-[0.925] rounded-[30px] border border-white/[0.04] bg-[#080a0d]/65 opacity-50" aria-hidden="true" />

            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={`${active.company}-${active.role}`}
                custom={direction}
                variants={{
                  enter: (travelDirection: number) =>
                    travelDirection > 0
                      ? { opacity: 0, scale: 0.76, y: -34, z: -460, rotateX: 7, filter: 'blur(10px)' }
                      : { opacity: 0, scale: 1.055, y: 34, z: 100, rotateX: -3, filter: 'blur(7px)' },
                  center: { opacity: 1, scale: 1, y: 0, z: 0, rotateX: 0, filter: 'blur(0px)' },
                  exit: (travelDirection: number) =>
                    travelDirection > 0
                      ? { opacity: 0, scale: 1.055, y: 38, z: 120, rotateX: -3, filter: 'blur(8px)' }
                      : { opacity: 0, scale: 0.76, y: -34, z: -460, rotateX: 7, filter: 'blur(10px)' },
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 origin-center [transform-style:preserve-3d] will-change-transform"
              >
                <GlareHover className="micro-slats h-full overflow-hidden rounded-[30px] border border-slate-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_34px_100px_rgba(0,0,0,0.42)]">
                  <article className="relative flex h-full overflow-hidden p-6 text-left sm:p-8 lg:p-10">
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
                          {active.type === 'Founder' ? <Rocket className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />}
                          {active.type}
                        </span>
                        <span className="text-xs tabular-nums tracking-[0.16em] text-cream-400">
                          {String(activeIndex + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="mt-5 sm:mt-7">
                        <p className="text-xs uppercase tracking-[0.24em] text-cream-400 sm:text-sm">{active.company}</p>
                        <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl">{active.role}</h3>
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-300 sm:text-sm">
                          <span>{active.period}</span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {active.location}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 line-clamp-3 max-w-2xl text-xs leading-6 text-cream-200 sm:line-clamp-4 sm:text-sm sm:leading-7 lg:text-base">{active.description}</p>

                      <div className="mt-auto pt-5">
                        <div className="flex flex-wrap gap-2">
                          {active.skills.slice(0, 6).map((skill) => (
                            <span key={skill} className="rounded-lg border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] text-cream-300 backdrop-blur-sm sm:text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex gap-5">
                          {'website' in active && active.website && (
                            <a href={active.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white transition-colors hover:text-cream-300 sm:text-sm">
                              <Globe className="h-4 w-4" /> Website
                            </a>
                          )}
                          {'linkedin' in active && active.linkedin && (
                            <a href={active.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white transition-colors hover:text-cream-300 sm:text-sm">
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
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
