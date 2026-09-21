import { Link } from 'react-router-dom'

const cols = [
  {
    heading: 'Fat Burners',
    links: [
      { label: 'Max Plus', href: '/products/max-plus' },
      { label: 'Max Lite', href: '/collections/fat-burners' },
      { label: 'Max Stack', href: '/collections/fat-burners' },
    ],
  },
  {
    heading: 'Slimming & Wellness',
    links: [
      { label: 'Night Fat Burner', href: '#' },
      { label: 'De-Bloat', href: '#' },
      { label: 'Detox', href: '#' },
      { label: 'Meal Replacement', href: '#' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'The Science', href: '/pages/the-science' },
      { label: 'Our Story', href: '/pages/our-story' },
      { label: 'Find Your Fit', href: '/pages/find-your-fit' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'About Us', href: '/pages/our-story' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-g900 text-white/60 pt-16 pb-7 text-sm">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 mb-11">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-black text-xl text-white tracking-tight mb-4 block">
              SHORTCUT<span className="text-brand-red">X</span>
            </Link>
            <p className="text-[13px] leading-relaxed mb-5">Singapore&apos;s #1 weight management supplement brand.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-[13px] text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors"
              />
              <button className="bg-brand-red text-white text-[13px] font-bold py-2.5 rounded-md hover:bg-brand-red-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <h5 className="text-white font-bold text-[13px] tracking-[0.1em] uppercase mb-4">{col.heading}</h5>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between items-center gap-3 text-[13px] font-mono">
          <span>© {new Date().getFullYear()} Shortcutx · All rights reserved</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
