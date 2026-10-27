'use client';

import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

const SIZES: Record<SpecularButtonSize, string> = {
  sm: 'px-5 py-2.5 text-[0.875rem]',
  md: 'px-7 py-3.5 text-[1rem]',
  lg: 'px-[38px] py-[18px] text-[1.125rem]'
};

const BUTTON =
  'group relative isolate m-0 inline-flex min-w-fit cursor-pointer items-center justify-center gap-[0.5em] overflow-hidden border [font-family:inherit] font-medium leading-none tracking-[0.01em] text-[color:var(--sb-text-color)] [border-color:color-mix(in_srgb,var(--sb-line-color)_28%,transparent)] [border-radius:var(--sb-radius)] [background:color-mix(in_srgb,var(--sb-tint)_calc(var(--sb-tint-opacity)*100%),#0d1014)] shadow-[0_12px_32px_-18px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] outline-none [-webkit-tap-highlight-color:transparent] transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:[border-color:color-mix(in_srgb,var(--sb-line-color)_52%,transparent)] hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.14)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:[outline-color:color-mix(in_srgb,var(--sb-line-color)_60%,transparent)] disabled:cursor-default disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100';

export type SpecularButtonSize = 'sm' | 'md' | 'lg';

export interface SpecularButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  children?: ReactNode;
  size?: SpecularButtonSize;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * GPU-independent specular button. The props match the previous
 * ReactBits-inspired version, but the shine is CSS so a lost WebGL context
 * cannot create an oversized white error surface.
 */
const SpecularButton = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#171b20',
  tintOpacity = 0.92,
  blur = 0,
  textColor = '#f5f5f5',
  lineColor = '#ffffff',
  baseColor = '#525252',
  intensity = 1,
  idleIntensity: _idleIntensity,
  shineSize: _shineSize,
  shineFade: _shineFade,
  thickness: _thickness,
  glow = 1,
  speed: _speed,
  followMouse: _followMouse,
  proximity: _proximity,
  autoAnimate: _autoAnimate,
  disabled = false,
  className = '',
  type = 'button',
  style,
  ...rest
}: SpecularButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={`${BUTTON} ${SIZES[size] ?? SIZES.lg}${className ? ` ${className}` : ''}`}
    style={
      {
        '--sb-radius': `${radius}px`,
        '--sb-tint': tint,
        '--sb-tint-opacity': tintOpacity,
        '--sb-blur': `${blur}px`,
        '--sb-text-color': textColor,
        '--sb-line-color': lineColor,
        '--sb-base-color': baseColor,
        '--sb-intensity': intensity,
        '--sb-glow': glow,
        ...style
      } as CSSProperties
    }
    {...rest}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-70 [background:radial-gradient(circle_at_18%_0%,color-mix(in_srgb,var(--sb-line-color)_16%,transparent),transparent_44%),linear-gradient(115deg,transparent_25%,color-mix(in_srgb,var(--sb-line-color)_10%,transparent)_46%,transparent_68%)] transition-opacity duration-300 group-hover:opacity-100"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-y-3 -left-1/2 z-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-sm transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[430%] group-hover:opacity-100 motion-reduce:hidden"
    />
    <span className="relative z-[1] inline-flex items-center gap-[inherit] whitespace-nowrap">{children}</span>
  </button>
);

export default SpecularButton;
