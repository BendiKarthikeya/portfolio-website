'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const DogCursor = () => {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dog lags further behind than the paw
  const dogX = useSpring(mouseX, { stiffness: 40, damping: 10, mass: 1 })
  const dogY = useSpring(mouseY, { stiffness: 40, damping: 10, mass: 1 })

  const isMobileRef = useRef(false)

  useEffect(() => {
    isMobileRef.current =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth <= 768

    if (isMobileRef.current) return

    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.style.cursor = ''
    }
  }, [mouseX, mouseY])

  if (typeof window !== 'undefined' && (
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768
  )) return null

  return (
    <>
      {/* Exact cursor position — paw print */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      >
        <span className="text-lg" style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.7))' }}>
          🐾
        </span>
      </motion.div>

      {/* Dog — lags behind with spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] select-none"
        style={{ x: dogX, y: dogY, translateX: '-50%', translateY: '-130%' }}
      >
        <motion.span
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          className="text-3xl block"
          style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))' }}
        >
          🐶
        </motion.span>
      </motion.div>
    </>
  )
}

export default DogCursor
