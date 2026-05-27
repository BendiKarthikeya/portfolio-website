'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import N8nPreview from '@/components/N8nPreview'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import GSAPScrollAnimations from '@/components/GSAPScrollAnimations'

export default function Home() {
  return (
    <main className="min-h-screen">
      <GSAPScrollAnimations />
      <Header />
      <Hero />
      <About />
      <Experience />
      <N8nPreview />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
