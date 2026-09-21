const variants = {
  red:   'bg-brand-red-pale text-brand-red',
  dark:  'bg-g900 text-white',
  gold:  'bg-brand-gold text-g900',
  gray:  'bg-g100 text-g700',
}

export default function Badge({ children, variant = 'red', className = '' }) {
  return (
    <span className={`
      inline-block font-bold text-[11px] tracking-[0.12em] uppercase px-3 py-1 rounded-full
      ${variants[variant]} ${className}
    `}>
      {children}
    </span>
  )
}
