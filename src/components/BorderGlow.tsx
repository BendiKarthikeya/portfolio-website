'use client'

import { useCallback, useEffect, useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import './BorderGlow.css'

type BorderGlowProps = {
  children: ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
  fillOpacity?: number
}

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>

const DEFAULT_COLORS = ['#c084fc', '#f472b6', '#38bdf8']
const HSL_PATTERN = /([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/
const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%']
const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'] as const
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1]

const parseHSL = (value: string) => {
  const match = value.match(HSL_PATTERN)
  if (!match) return { h: 40, s: 80, l: 80 }
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) }
}

const buildGlowVars = (glowColor: string, intensity: number): GlowStyle => {
  const { h, s, l } = parseHSL(glowColor)
  const opacities = [100, 60, 50, 40, 30, 20, 10]
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10']
  return opacities.reduce<GlowStyle>((vars, opacity, index) => {
    const key = `--glow-color${keys[index]}` as `--${string}`
    vars[key] = `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacity * intensity, 100)}%)`
    return vars
  }, {})
}

const buildGradientVars = (colors: string[]): GlowStyle => {
  const palette = colors.length > 0 ? colors : DEFAULT_COLORS
  const vars = GRADIENT_KEYS.reduce<GlowStyle>((result, key, index) => {
    const color = palette[Math.min(COLOR_MAP[index], palette.length - 1)]
    result[key] = `radial-gradient(at ${GRADIENT_POSITIONS[index]}, ${color} 0px, transparent 50%)`
    return result
  }, {})
  vars['--gradient-base'] = `linear-gradient(${palette[0]} 0 100%)`
  return vars
}

const isLightColor = (color: string) => {
  const value = color.trim().replace('#', '')
  if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(value)) return false
  const hex = value.length === 3 ? value.split('').map(char => char + char).join('') : value
  const red = Number.parseInt(hex.slice(0, 2), 16)
  const green = Number.parseInt(hex.slice(2, 4), 16)
  const blue = Number.parseInt(hex.slice(4, 6), 16)
  return red * 0.2126 + green * 0.7152 + blue * 0.0722 > 180
}

const BorderGlow = ({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = DEFAULT_COLORS,
  fillOpacity = 0.5,
}: BorderGlowProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const dx = x - centerX
    const dy = y - centerY
    const kx = dx === 0 ? Number.POSITIVE_INFINITY : centerX / Math.abs(dx)
    const ky = dy === 0 ? Number.POSITIVE_INFINITY : centerY / Math.abs(dy)
    const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
    let angle = dx === 0 && dy === 0 ? 0 : Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360

    card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3))
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`)
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!animated || !card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const startedAt = performance.now()
    card.classList.add('sweep-active')

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 2200, 1)
      const proximity = Math.sin(progress * Math.PI) * 100
      card.style.setProperty('--edge-proximity', proximity.toFixed(3))
      card.style.setProperty('--cursor-angle', `${110 + progress * 355}deg`)
      if (progress < 1) frame = requestAnimationFrame(tick)
      else card.classList.remove('sweep-active')
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      card.classList.remove('sweep-active')
    }
  }, [animated])

  const style: GlowStyle = {
    '--card-bg': backgroundColor,
    '--edge-sensitivity': edgeSensitivity,
    '--border-radius': `${borderRadius}px`,
    '--glow-padding': `${glowRadius}px`,
    '--cone-spread': coneSpread,
    '--fill-opacity': fillOpacity,
    ...buildGlowVars(glowColor, glowIntensity),
    ...buildGradientVars(colors),
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`border-glow-card${isLightColor(backgroundColor) ? ' border-glow-card--light' : ''} ${className}`.trim()}
      style={style}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  )
}

export default BorderGlow
