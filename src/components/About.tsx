'use client'

import { motion } from 'framer-motion'
import { User, Code, Zap, Heart, Target } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import GlareHover from '@/components/GlareHover'

const About = () => {
  const process = ['Build', 'Connect', 'Automate', 'Optimize']

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI & Automation Expert",
      description: "Specializing in n8n workflows, business automation, and building autonomous agents using Agentic AI"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "Continuously exploring new technologies and automation possibilities"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable improvements and efficiency gains"
    }
  ]

  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <User className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            About{' '}
            <span className="text-gray-400">Me</span>
          </h2>
          <p className="text-cream-300 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            Passionate about transforming complex business processes into streamlined, automated workflows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
            }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7"
            >
              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-300 via-gold-400/70 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                The person behind the systems
              </p>
              <h3 className="max-w-xl text-xl font-semibold leading-snug text-cream-100 sm:text-3xl">
                I turn ambitious ideas into intelligent products that work quietly in the background.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-cream-200 sm:text-base">
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream-400">How I work</p>
              <div className="relative grid grid-cols-4 gap-2 pt-3">
                <div className="absolute left-[7%] right-[7%] top-[1.1rem] h-px bg-white/10" aria-hidden="true" />
                <motion.div
                  className="absolute left-[7%] right-[7%] top-[1.1rem] h-px origin-left bg-gradient-to-r from-gold-400 via-amber-200 to-slate-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.25, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
                {process.map((step, index) => (
                  <motion.div
                    key={step}
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.16 }}
                  >
                    <motion.span
                      className="mx-auto block h-3 w-3 rounded-full border-2 border-gold-300 bg-gray-950 shadow-[0_0_14px_rgba(251,191,36,0.7)]"
                      animate={{ scale: [1, 1.28, 1] }}
                      transition={{ duration: 2.4, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                      aria-hidden="true"
                    />
                    <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.08em] text-cream-200 sm:text-xs sm:tracking-[0.16em]">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -7, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
                className="h-full"
              >
                <GlareHover borderRadius={12} className="h-full rounded-xl border border-white/10 bg-gray-900 p-3 transition-colors duration-300 hover:border-slate-300/35 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <motion.div
                      className="p-2 sm:p-3 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-lg"
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold sm:mb-2 text-cream-100 leading-snug">{feature.title}</h3>
                  <p className="hidden sm:block text-cream-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlareHover>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default About
