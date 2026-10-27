import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import DepthText from '@/components/DepthText'
import Ribbons from '@/components/reactbits/Ribbons'

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-[#0b0d10] px-6 py-16 text-center">
      <div className="absolute inset-0 -z-20 opacity-60 [background:radial-gradient(circle_at_50%_42%,rgba(148,163,184,0.11),transparent_30%),repeating-linear-gradient(90deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_20px)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <Ribbons
          colors={['#f8fafc', '#b7a17a', '#64748b']}
          baseSpring={0.022}
          baseFriction={0.91}
          baseThickness={8}
          offsetFactor={0.035}
          maxAge={650}
          pointCount={38}
          speedMultiplier={0.42}
          enableFade
        />
      </div>

      <section className="relative mx-auto max-w-3xl">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Lost signal / route unavailable</p>
        <h1 className="text-[7rem] font-black leading-none tracking-[-0.08em] sm:text-[11rem]">
          <DepthText text="404" />
        </h1>
        <h2 className="mt-7 text-2xl font-semibold text-white sm:text-4xl">This route drifted out of orbit.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
          The page may have moved, but the portfolio is still transmitting. Return to the main experience and continue exploring.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
        >
          Return home
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </main>
  )
}
