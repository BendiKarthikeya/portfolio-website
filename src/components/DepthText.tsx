'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type DepthTextProps = {
  text: string
  className?: string
}

type DepthLayerProps = {
  text: string
  depth: number
  x: ReturnType<typeof useSpring>
  y: ReturnType<typeof useSpring>
}

const DepthLayer = ({ text, depth, x, y }: DepthLayerProps) => {
  const offsetX = useTransform(x, value => value * depth * -0.72)
  const offsetY = useTransform(y, value => value * depth * -0.72)

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none text-slate-700"
      style={{
        x: offsetX,
        y: offsetY,
        zIndex: -depth,
        opacity: 0.74 - depth * 0.09,
        textShadow: `${depth * 1.1}px ${depth * 1.3}px 0 rgba(2, 6, 23, 0.72)`,
      }}
    >
      {text}
    </motion.span>
  )
}

/** ReactBits-inspired layered text with a small, springy pointer parallax. */
const DepthText = ({ text, className = '' }: DepthTextProps) => {
  const rootRef = useRef<HTMLSpanElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 180, damping: 18, mass: 0.35 })
  const springY = useSpring(pointerY, { stiffness: 180, damping: 18, mass: 0.35 })

  const handlePointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === 'touch') return
    const rect = rootRef.current?.getBoundingClientRect()
    if (!rect) return
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 10)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 7)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <span
      ref={rootRef}
      className={`relative isolate inline-grid cursor-default [transform-style:preserve-3d] ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      {[5, 4, 3, 2, 1].map(depth => (
        <DepthLayer key={depth} text={text} depth={depth} x={springX} y={springY} />
      ))}
      <span className="relative z-10 text-cream-50 [text-shadow:0_1px_0_rgba(255,255,255,0.1)]">{text}</span>
    </span>
  )
}

export default DepthText
