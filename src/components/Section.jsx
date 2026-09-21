export function Section({ children, className = '', bg = 'white', ...props }) {
  const bgs = {
    white:  'bg-white',
    off:    'bg-brand-off',
    red:    'bg-brand-red text-white',
    dark:   'bg-g900 text-white',
  }
  return (
    <section className={`py-16 md:py-24 ${bgs[bg]} ${className}`} {...props}>
      {children}
    </section>
  )
}

export function Wrap({ children, className = '' }) {
  return (
    <div className={`max-w-[1120px] mx-auto px-7 ${className}`}>
      {children}
    </div>
  )
}

export function Eyebrow({ children, className = '', light = false }) {
  return (
    <p className={`font-bold text-[13px] tracking-[0.16em] uppercase mb-4 ${light ? 'text-white/60' : 'text-brand-red'} ${className}`}>
      {children}
    </p>
  )
}
