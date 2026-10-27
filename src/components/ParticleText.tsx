'use client'

import { useEffect, useRef, useState } from 'react'

type Particle = {
  x: number
  y: number
  originX: number
  originY: number
  velocityX: number
  velocityY: number
  color: string
}

type ParticleTextProps = {
  text: string
  className?: string
}

const PARTICLE_COLORS = ['#f8fafc', '#d9e1ec', '#aebaca']
const PARTICLE_GAP = 4

export default function ParticleText({ text, className = '' }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    let particles: Particle[] = []
    let animationFrame = 0
    let width = 1
    let height = 1
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let destroyed = false

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.globalCompositeOperation = 'source-over'

      for (const particle of particles) {
        context.fillStyle = particle.color
        context.fillRect(Math.round(particle.x), Math.round(particle.y), 2, 2)
      }
    }

    const animate = () => {
      let energy = 0

      for (const particle of particles) {
        particle.velocityX += (particle.originX - particle.x) * 0.075
        particle.velocityY += (particle.originY - particle.y) * 0.075
        particle.velocityX *= 0.74
        particle.velocityY *= 0.74
        particle.x += particle.velocityX
        particle.y += particle.velocityY
        energy += Math.abs(particle.velocityX) + Math.abs(particle.velocityY)
      }

      draw()
      animationFrame = energy > 0.45 && !destroyed ? requestAnimationFrame(animate) : 0
    }

    const wake = () => {
      if (!reducedMotion && !animationFrame) animationFrame = requestAnimationFrame(animate)
    }

    const buildParticles = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(bounds.width))
      height = Math.max(1, Math.floor(bounds.height))
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const sampler = document.createElement('canvas')
      sampler.width = width
      sampler.height = height
      const sampleContext = sampler.getContext('2d', { willReadFrequently: true })
      if (!sampleContext) return

      const fontSize = Math.max(16, Math.min(height * 0.86, width / Math.max(text.length * 0.59, 1)))
      sampleContext.clearRect(0, 0, width, height)
      sampleContext.font = `700 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`
      sampleContext.textBaseline = 'middle'
      sampleContext.fillStyle = '#ffffff'
      sampleContext.fillText(text, 0, height / 2)

      const pixels = sampleContext.getImageData(0, 0, width, height).data
      const nextParticles: Particle[] = []

      for (let y = 0; y < height; y += PARTICLE_GAP) {
        for (let x = 0; x < width; x += PARTICLE_GAP) {
          if (pixels[(y * width + x) * 4 + 3] < 120) continue

          nextParticles.push({
            x: x + (Math.random() - 0.5) * 74,
            y: y + (Math.random() - 0.5) * 54,
            originX: x,
            originY: y,
            velocityX: 0,
            velocityY: 0,
            color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          })
        }
      }

      particles = nextParticles
      setIsReady(nextParticles.length > 0)
      draw()
      wake()
    }

    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === 'touch') return

      const bounds = canvas.getBoundingClientRect()
      const pointerX = event.clientX - bounds.left
      const pointerY = event.clientY - bounds.top

      for (const particle of particles) {
        const distanceX = particle.x - pointerX
        const distanceY = particle.y - pointerY
        const distance = Math.hypot(distanceX, distanceY)

        if (distance > 86 || distance === 0) continue

        const force = (86 - distance) / 86
        particle.velocityX += (distanceX / distance) * force * 7
        particle.velocityY += (distanceY / distance) * force * 7
      }

      wake()
    }

    const observer = new ResizeObserver(buildParticles)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', onPointerMove)
    buildParticles()

    document.fonts?.ready.then(() => {
      if (!destroyed) buildParticles()
    })

    return () => {
      destroyed = true
      observer.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [text])

  return (
    <span className={`relative mt-1 block h-[1.12em] w-full ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute inset-0 whitespace-nowrap text-cream-50 transition-opacity duration-200 ${isReady ? 'opacity-0' : 'opacity-100'}`}
      >
        {text}
      </span>
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full cursor-default" />
      <span className="sr-only">{text}</span>
    </span>
  )
}
