type OrbitLoaderProps = {
  label?: string
}

/** ReactBits-inspired orbital route loader, kept CSS-only for instant startup. */
export default function OrbitLoader({ label = 'Assembling experience' }: OrbitLoaderProps) {
  return (
    <div className="flex flex-col items-center gap-6" role="status" aria-live="polite">
      <div className="relative h-20 w-20" aria-hidden="true">
        <span className="signal-orbit signal-orbit-one absolute inset-0 rounded-full border border-white/10" />
        <span className="signal-orbit signal-orbit-two absolute inset-[9px] rounded-full border border-slate-400/20" />
        <span className="absolute inset-[25px] rounded-full border border-white/20 bg-white/[0.06] shadow-[0_0_28px_rgba(226,232,240,0.12)]" />
        <span className="signal-pulse absolute inset-[34px] rounded-full bg-slate-100" />
      </div>
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">{label}</p>
        <span className="mt-3 block h-px w-36 overflow-hidden bg-white/10">
          <span className="signal-scan block h-full w-1/2 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        </span>
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}
