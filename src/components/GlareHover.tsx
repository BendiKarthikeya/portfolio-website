import type { ReactNode } from 'react'

type GlareHoverProps = {
  children: ReactNode
  className?: string
}

/** Structural wrapper retained for card layout without a cursor-following colour effect. */
const GlareHover = ({ children, className = '' }: GlareHoverProps) => {
  return (
    <div className={`relative isolate overflow-hidden ${className}`.trim()}>
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  )
}

export default GlareHover
