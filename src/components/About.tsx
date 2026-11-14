'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bot, Briefcase, Code2, GraduationCap, MapPin, Sparkles, User, Workflow, type LucideIcon } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const nameTiles = [
  ['K', 'bg-[#d8b968] text-gray-950', '-rotate-3'],
  ['A', 'bg-cream-100 text-gray-950', 'rotate-2'],
  ['R', 'bg-slate-700 text-cream-100', '-rotate-2'],
  ['T', 'bg-gold-500 text-gray-950', 'rotate-3'],
  ['H', 'bg-gray-800 text-gold-300', '-rotate-1'],
  ['I', 'bg-cream-200 text-gray-950', 'rotate-3'],
  ['K', 'bg-[#d8b968] text-gray-950', '-rotate-3'],
  ['E', 'bg-slate-600 text-white', 'rotate-2'],
  ['Y', 'bg-gray-900 text-gold-300', '-rotate-2'],
  ['A', 'bg-cream-100 text-gray-950', 'rotate-3'],
] as const

type Note = {
  label: string
  title: string
  copy: string
  icon: LucideIcon
  tone: string
  rotate: string
}

const notes: Note[] = [
  {
    label: 'What I do',
    title: 'AI + Full-Stack Developer',
    copy: 'I build production-grade applications and intelligent systems that solve real business problems.',
    icon: Code2,
    tone: 'bg-[#f4df91] text-[#202024]',
    rotate: '-rotate-2',
  },
  {
    label: 'Founder',
    title: 'GoAutomate',
    copy: 'Helping teams eliminate manual work with n8n workflows, AI agents, and reliable API integrations.',
    icon: Briefcase,
    tone: 'bg-[#d8e6dc] text-[#18211c]',
    rotate: 'rotate-2',
  },
  {
    label: 'Education',
    title: 'IIT Guwahati',
    copy: 'B.Sc. (Hons.) in Computer Science and Artificial Intelligence.',
    icon: GraduationCap,
    tone: 'bg-[#d8ddea] text-[#181b24]',
    rotate: 'rotate-1',
  },
  {
    label: 'Automation',
    title: 'Systems that run quietly',
    copy: 'Hands-on with n8n, LLMs, Voice AI, WhatsApp APIs, databases, and business workflows.',
    icon: Workflow,
    tone: 'bg-[#edc8ad] text-[#241b17]',
    rotate: '-rotate-1',
  },
  {
    label: 'How I think',
    title: 'Choose the right tool',
    copy: 'I explore AI tools daily and focus on where each model or platform creates the strongest outcome.',
    icon: Bot,
    tone: 'bg-[#e8e0ca] text-[#211f19]',
    rotate: 'rotate-1',
  },
  {
    label: 'Based in',
    title: personalInfo.location,
    copy: 'Building products, automations, and founder-led ideas from Bengaluru.',
    icon: MapPin,
    tone: 'bg-[#cdd9d9] text-[#182020]',
    rotate: '-rotate-2',
  },
]

const About = () => (
  <section id="about" className="section-padding bg-transparent">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-7 text-center sm:mb-12"
      >
        <div className="mb-3 inline-flex items-center justify-center gap-3">
          <div className="rounded-xl border border-gold-400/30 bg-gold-400/15 p-2.5">
            <User className="h-6 w-6 text-gold-400" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">A little about me</span>
        </div>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          The person <span className="text-gray-400">behind the systems</span>
        </h2>
      </motion.div>

      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#090b10] px-4 py-8 shadow-2xl shadow-black/25 sm:px-7 md:min-h-[820px] md:p-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,.24) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.24) 1px,transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
        <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gold-400/[0.06] blur-[110px]" />

        <div className="relative z-20 flex cursor-default select-none justify-center gap-1 sm:gap-2 md:absolute md:left-1/2 md:top-9 md:w-full md:-translate-x-1/2">
          {nameTiles.map(([letter, tone, rotate], index) => (
            <span
              key={`${letter}-${index}`}
              className={`${tone} ${rotate} inline-flex h-9 w-7 items-center justify-center font-black shadow-[5px_6px_0_rgba(0,0,0,.42)] transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-0 hover:scale-[1.08] sm:h-14 sm:w-11 sm:text-2xl md:h-20 md:w-16 md:text-4xl lg:h-24 lg:w-[4.7rem] lg:text-5xl`}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 md:hidden">
          <div className="sm:col-span-2">
            <PixelPortrait />
          </div>
          {notes.map((note) => <StickyNote key={note.title} note={note} />)}
          <div className="sm:col-span-2">
            <ProcessCard />
          </div>
          <img src="/decor/about-car.svg" alt="Stylized gold line-art sports car" className="mx-auto w-full max-w-md sm:col-span-2" />
        </div>

        <div className="hidden md:block">
          <div className="absolute left-[4%] top-[27%] w-[27%]">
            <StickyNote note={notes[0]} />
          </div>
          <div className="absolute left-1/2 top-[23%] z-10 -translate-x-1/2">
            <PixelPortrait />
          </div>
          <div className="absolute right-[4%] top-[27%] w-[27%]">
            <StickyNote note={notes[1]} />
          </div>

          <div className="absolute left-[6%] top-[52%] w-[24%]">
            <StickyNote note={notes[2]} compact />
          </div>
          <div className="absolute left-[36%] top-[51%] w-[28%]">
            <StickyNote note={notes[3]} compact />
          </div>
          <div className="absolute right-[6%] top-[52%] w-[24%]">
            <StickyNote note={notes[4]} compact />
          </div>

          <div className="absolute bottom-[9%] left-[6%] w-[27%]">
            <StickyNote note={notes[5]} compact />
          </div>
          <div className="absolute bottom-[10%] left-[37%] w-[27%]">
            <ProcessCard />
          </div>
          <img src="/decor/about-car.svg" alt="Stylized gold line-art sports car" className="absolute bottom-[-1%] right-[1%] z-10 w-[32%]" />
        </div>
      </div>
    </div>
  </section>
)

const StickyNote = ({ note, compact = false }: { note: Note; compact?: boolean }) => {
  const Icon = note.icon
  return (
    <article className={`${note.tone} ${note.rotate} relative overflow-hidden rounded-sm ${compact ? 'min-h-[145px] p-4' : 'min-h-[185px] p-5'} shadow-[7px_9px_18px_rgba(0,0,0,.30)]`}>
      <span aria-hidden="true" className="absolute left-1/2 top-2 h-3 w-14 -translate-x-1/2 bg-white/35 shadow-sm" />
      <Icon className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} opacity-70`} />
      <p className={`${compact ? 'mt-4' : 'mt-5'} text-[9px] font-bold uppercase tracking-[0.2em] opacity-55`}>{note.label}</p>
      <h3 className={`${compact ? 'text-base' : 'text-lg'} mt-1 font-black leading-tight`}>{note.title}</h3>
      <p className={`${compact ? 'mt-2 text-xs' : 'mt-3 text-sm'} leading-relaxed opacity-80`}>{note.copy}</p>
    </article>
  )
}

const PixelPortrait = () => (
  <div className="mx-auto w-36 rotate-1 bg-cream-100 p-2 pb-9 shadow-[8px_10px_0_rgba(0,0,0,.38)] lg:w-40">
    <div className="relative aspect-square overflow-hidden bg-gray-800">
      <Image
        src={personalInfo.avatar}
        alt={`${personalInfo.name} portrait`}
        fill
        sizes="160px"
        className="object-cover object-center [image-rendering:pixelated]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 mix-blend-multiply"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.3) 1px,transparent 1px)',
          backgroundSize: '6px 6px',
        }}
      />
    </div>
    <p className="mt-2 cursor-default select-none text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gray-900">Karthikeya</p>
  </div>
)

const ProcessCard = () => (
  <div className="rounded-lg border border-white/10 bg-gray-950/90 p-4 shadow-xl">
    <div className="mb-3 flex items-center gap-2">
      <Sparkles className="h-4 w-4 text-gold-400" />
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-400">How I work</p>
    </div>
    <div className="grid grid-cols-4 gap-1 text-center text-[9px] font-semibold uppercase tracking-wide text-cream-200 lg:text-[10px]">
      {['Build', 'Connect', 'Automate', 'Optimize'].map((step) => (
        <span key={step} className="border-t border-gold-400/50 pt-2">{step}</span>
      ))}
    </div>
  </div>
)

export default About
