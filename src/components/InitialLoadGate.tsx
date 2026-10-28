'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import OrbitLoader from '@/components/reactbits/OrbitLoader'
import LightTunnel from '@/components/LightTunnel'

const INITIAL_LOAD_DURATION_MS = 3000

const InitialLoadGate = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [portalReady, setPortalReady] = useState(false)

  useEffect(() => {
    setPortalReady(true)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow
      setIsLoading(false)
    }, INITIAL_LOAD_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const loader = (
    <div
      id="initial-load-screen"
      className="fixed inset-0 z-[9999] grid h-[100dvh] w-screen place-items-center overflow-hidden px-6"
      style={{ backgroundColor: '#05070a' }}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#05070a' }} aria-hidden="true" />
      <div className="absolute inset-0 z-10" aria-hidden="true">
            <LightTunnel
              cableColor="#94a3b8"
              pulseColor="#f8fafc"
              tunnelColor="#1e293b"
              tunnelOpacity={0}
              speed={0.18}
              flowDirection="inward"
              pulseSpeed={2.5}
              pulseLength={0.3}
              pulseBlend={0.65}
              pulseWidth={1}
              pulseDensity={0.5}
              cableCount={56}
              thickness={0.32}
              rimWidth={0.18}
              waviness={0.35}
              sway={0.45}
              bend={0.34}
              size={1}
              centerY={-0.04}
              glow={1.1}
              fadeNear={0.45}
              fadeFar={2}
              brightness={1.15}
              colorVariance={false}
              grain={false}
              opacity={1}
              mouseInteraction={false}
              clickSurge={false}
              intro
              dpr={1}
            />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: 'radial-gradient(circle at center, rgba(5, 7, 10, 0.22), rgba(5, 7, 10, 0.52) 72%, rgba(5, 7, 10, 0.92))' }}
        aria-hidden="true"
      />
      <div className="relative z-30">
        <OrbitLoader label="Loading portfolio" />
      </div>
    </div>
  )

  return (
    <>
      {isLoading && (portalReady ? createPortal(loader, document.body) : loader)}
      <div className={isLoading ? 'invisible h-0 overflow-hidden' : undefined} aria-hidden={isLoading}>
        {children}
      </div>
    </>
  )
}

export default InitialLoadGate
