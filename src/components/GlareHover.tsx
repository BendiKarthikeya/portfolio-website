import type { ReactNode } from 'react'
import BorderGlow from '@/components/BorderGlow'

type GlareHoverProps = {
  children: ReactNode
  className?: string
  borderRadius?: number
}

const GlareHover = ({ children, className = '', borderRadius = 28 }: GlareHoverProps) => {
  return (
    <BorderGlow
      className={`h-full ${className}`.trim()}
      backgroundColor="transparent"
      borderRadius={borderRadius}
      glowColor="40 85 75"
      glowIntensity={0.8}
      fillOpacity={0.28}
    >
      <div className="relative z-[1] h-full">{children}</div>
    </BorderGlow>
  )
}

export default GlareHover
