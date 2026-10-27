'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Video, FolderGit2 } from 'lucide-react'
import DepthCarousel from '@/components/DepthCarousel'
import GlareHover from '@/components/GlareHover'
import { projects, socialLinks } from '@/data/portfolio'

const PROJECT_TRANSITION_MS = 560

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const previousIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageDirection, setPageDirection] = useState(1)
  const active = projects[activeIndex]
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const carouselItems = useMemo(
    () => projects.map((project) => ({ image: project.image, alt: project.title })),
    []
  )

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length))
    if (nextIndex === previousIndexRef.current) return
    setPageDirection(nextIndex > previousIndexRef.current ? 1 : -1)
    previousIndexRef.current = nextIndex
    setActiveIndex(nextIndex)
  })

  const handleCarouselChange = useCallback((index: number) => {
    if (index === activeIndex) return
    const section = sectionRef.current
    if (!section) return
    const travel = Math.max(0, section.offsetHeight - window.innerHeight)
    const targetProgress = (index + 0.5) / projects.length
    window.scrollTo({
      top: section.offsetTop + travel * targetProgress,
      behavior: 'smooth',
    })
  }, [activeIndex])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-transparent"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-4 sm:py-6">
        <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 sm:mb-5"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <FolderGit2 className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Featured <span className="text-gray-400">Projects</span>
          </h2>
          <p className="text-cream-300 mt-2 max-w-2xl mx-auto text-xs sm:text-base">
            Keep scrolling anywhere — this section completes every project before continuing
          </p>
        </motion.div>

        <div className="relative h-[clamp(290px,36vh,410px)]">
          <DepthCarousel
            items={carouselItems}
            activeIndex={activeIndex}
            wheelEnabled={false}
            cardWidth={720}
            cardHeight={360}
            radius={24}
            tint="#15191e"
            depth={230}
            spread={135}
            tilt={10}
            tiltDirection="right"
            perspective={1450}
            visibleCards={3}
            falloff={0.2}
            blur={4}
            duration={PROJECT_TRANSITION_MS}
            loop={false}
            showControls
            showIndicators
            onChange={handleCarouselChange}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl">
          <AnimatePresence initial={false} mode="sync">
        <motion.article
          key={active.id}
          initial={{ opacity: 0.2, x: pageDirection * 26, rotateY: pageDirection * -2.5, scale: 0.98, filter: 'blur(5px)' }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: pageDirection * -26, rotateY: pageDirection * 2.5, scale: 0.98, filter: 'blur(5px)' }}
          transition={{ duration: PROJECT_TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-start-1 row-start-1 [transform-style:preserve-3d] will-change-[transform,opacity,filter]"
        >
          <GlareHover className="micro-slats min-h-[250px] overflow-hidden rounded-[28px] border border-slate-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_26px_70px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <img
                src="/decor/project-car-background.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center grayscale saturate-0 contrast-125 opacity-35 sm:opacity-45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,12,0.99)_0%,rgba(7,9,12,0.96)_48%,rgba(7,9,12,0.56)_78%,rgba(7,9,12,0.7)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(226,232,240,0.09),transparent_30%)]" />
            </div>

            <div className="relative z-10 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div className="max-w-3xl">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-cream-400 sm:text-xs">
                    Project {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white sm:text-3xl">{active.title}</h3>
                  <p className="mt-3 line-clamp-2 max-w-3xl text-xs leading-relaxed text-cream-300 sm:text-sm">{active.description}</p>
                </div>

                <div className="flex flex-shrink-0 gap-2">
                  {active.live && (
                    <a href={active.live} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 bg-white/[0.06] p-2.5 text-cream-100 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10" aria-label="Open live project">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {'video' in active && active.video && (
                    <a href={active.video} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 bg-white/[0.06] p-2.5 text-cream-100 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10" aria-label="Watch project video">
                      <Video className="h-4 w-4" />
                    </a>
                  )}
                  {active.github && (
                    <a href={active.github} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 bg-white/[0.06] p-2.5 text-cream-100 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10" aria-label="Open project code">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-5 hidden gap-6 border-t border-white/10 pt-5 sm:grid md:grid-cols-[1.25fr_1fr]">
                <ul className="space-y-2.5">
                  {active.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-cream-300 sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cream-100 shadow-[0_0_10px_rgba(248,250,252,0.35)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap content-start gap-2">
                  {active.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs text-cream-200 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlareHover>
        </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 text-center sm:mt-6">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-cream-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300">
            More on GitHub <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
