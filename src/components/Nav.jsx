import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const links = [
  { label: 'Fat Burners',         href: '/collections/fat-burners' },
  { label: 'Slimming & Wellness', href: '/collections/slimming-wellness' },
  { label: 'The Science',         href: '/pages/the-science' },
  { label: 'Our Story',           href: '/pages/our-story' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'}`}>
      {/* Announce bar */}
      <div className="bg-brand-red text-white text-center text-xs font-semibold tracking-widest uppercase py-2 px-4">
        Free shipping on orders above S$100
      </div>

      <div className="max-w-[1120px] mx-auto px-7 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-black text-xl tracking-tight text-g900">
          SHORTCUT<span className="text-brand-red">X</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[14px] font-semibold transition-colors ${location.pathname === l.href ? 'text-brand-red' : 'text-g700 hover:text-brand-red'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/pages/find-your-fit" className="text-[14px] font-semibold text-g700 hover:text-brand-red transition-colors">
            Find Your Fit
          </Link>
          <Link to="/collections/fat-burners">
            <Button size="sm">Shop Now</Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-g900 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-g900 mt-1 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-g900 mt-1 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-g200 px-7 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.label} to={l.href} className="text-[15px] font-semibold text-g900">{l.label}</Link>
          ))}
          <Link to="/pages/find-your-fit" className="text-[15px] font-semibold text-g900">Find Your Fit</Link>
          <Link to="/collections/fat-burners">
            <Button className="w-full justify-center mt-2">Shop Now</Button>
          </Link>
        </div>
      )}
    </header>
  )
}
