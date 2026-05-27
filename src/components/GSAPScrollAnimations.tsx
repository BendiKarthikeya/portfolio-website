'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GSAPScrollAnimations = () => {
  useEffect(() => {
    // Small delay so DOM is fully painted before we query elements
    const timer = setTimeout(() => {
      // Animate every section heading
      gsap.utils.toArray<HTMLElement>('section h2').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Animate cards / grid children
      gsap.utils.toArray<HTMLElement>('[data-gsap="card"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Staggered children inside [data-gsap="stagger"]
      gsap.utils.toArray<HTMLElement>('[data-gsap="stagger"]').forEach((parent) => {
        const children = parent.children
        gsap.fromTo(
          children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: parent,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Slide-in from left
      gsap.utils.toArray<HTMLElement>('[data-gsap="slide-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Slide-in from right
      gsap.utils.toArray<HTMLElement>('[data-gsap="slide-right"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, 300)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}

export default GSAPScrollAnimations
