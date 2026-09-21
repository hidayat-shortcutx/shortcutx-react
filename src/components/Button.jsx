const variants = {
  primary:   'bg-brand-red text-white border-brand-red hover:bg-brand-red-dark hover:border-brand-red-dark hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(155,13,12,0.25)]',
  secondary: 'bg-transparent text-g900 border-g900 hover:bg-g900 hover:text-white',
  ghost:     'bg-transparent text-brand-red border-brand-red hover:bg-brand-red-pale',
  white:     'bg-white text-brand-red border-white hover:bg-brand-red-pale',
}

const sizes = {
  sm: 'text-sm px-5 py-3',
  md: 'text-[15px] px-7 py-4',
  lg: 'text-base px-9 py-5',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center gap-2 font-bold rounded-lg border-2
        transition-all duration-200 cursor-pointer
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
