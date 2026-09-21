import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const shopBestSellers = [
  { name: 'Max+ Fat Burner', price: 'From $4.20/day', href: '/products/max-plus', img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=300' },
  { name: 'Night Hot Chocolate', price: 'From $3.00/day', href: '/products/night-hot-chocolate', img: 'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=300' },
  { name: 'De-Bloat White Grape', price: 'From $3.43/day', href: '/products/de-bloat-white-grape', img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-01.jpg?v=1779346704&width=300' },
  { name: 'Detox Juice', price: 'From $3.14/day', href: '/products/detox-juice', img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=300' },
  { name: 'Night Fat Burner Juice', price: 'From $3.14/day', href: '/products/night-fat-burner-juice', img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=300' },
  { name: 'Lychee Lemon Fat Burner', price: 'From $4.20/day', href: '/products/lychee-lemon', img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=300' },
]

const bundles = [
  { name: '30-Days Pack', sub: 'Great for starting your journey', href: '/collections/bundles' },
  { name: 'Complete Day & Night Bundle', sub: 'Burn by day, rest by night', href: '/collections/bundles' },
  { name: 'Complete Transformation Bundle', sub: 'The full range, one box', href: '/collections/bundles' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [bundlesOpen, setBundlesOpen] = useState(false)
  const location = useLocation()
  const shopRef = useRef(null)
  const bundlesRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setShopOpen(false)
    setBundlesOpen(false)
  }, [location])

  // Close megas on outside click
  useEffect(() => {
    const handler = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false)
      if (bundlesRef.current && !bundlesRef.current.contains(e.target)) setBundlesOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_6px_20px_rgba(0,0,0,.06)]' : ''}`}>
      {/* Announce bar */}
      <div className="bg-g900 text-white text-center text-[13px] tracking-[.04em] py-[9px] px-3">
        🔥 <strong className="text-[#ffb3b0] font-semibold">NEW: NIGHT HOT CHOCOLATE</strong> now live · subscribe &amp; save 15% · free shipping over $100
      </div>

      {/* Main nav */}
      <div className={`bg-white/92 backdrop-blur-[10px] border-b border-g200`}>
        <div className="max-w-[1280px] mx-auto px-7 flex items-center justify-between" style={{ padding: scrolled ? '9px 28px' : '14px 28px', transition: 'padding .25s ease' }}>

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="https://shortcutx.co/cdn/shop/files/Logo_2023-02_copy.png?v=1709877786&width=240"
              alt="Shortcutx"
              style={{ height: 30 }}
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
            />
            <span style={{ display: 'none' }} className="font-black text-2xl tracking-tight text-g900">
              SHORTCUT<span className="text-brand-red">X</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">

            {/* SHOP mega */}
            <div className="relative" ref={shopRef}>
              <button
                className="relative font-semibold text-[14px] px-[14px] py-[10px] text-g900 hover:text-brand-red transition-colors group"
                onMouseEnter={() => { setShopOpen(true); setBundlesOpen(false) }}
                onClick={() => setShopOpen(v => !v)}
              >
                Shop
                <span className="absolute left-[14px] right-[14px] bottom-[5px] h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 block" />
              </button>

              {shopOpen && (
                <div
                  className="absolute top-[calc(100%+1px)] left-0 min-w-[680px] bg-white border border-g200 shadow-[0_24px_48px_rgba(0,0,0,.12)] rounded-lg p-[26px] grid gap-[26px] z-50"
                  style={{ gridTemplateColumns: 'auto auto' }}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  {/* Goals */}
                  <div>
                    <h4 className="text-[12px] font-bold tracking-[.1em] uppercase text-g500 mb-3">Shop by Goal</h4>
                    <div className="flex flex-col">
                      {[
                        { label: 'Burn Fat →', href: '/#catalog' },
                        { label: 'Slimming Drinks →', href: '/#catalog' },
                        { label: 'Wellness & Sleep →', href: '/#catalog' },
                        { label: 'Bundles →', href: '/collections/bundles' },
                      ].map(item => (
                        <Link key={item.label} to={item.href} className="flex justify-between py-[9px] border-b border-g200 font-semibold text-[14px] whitespace-nowrap gap-6 hover:text-brand-red transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Best Sellers grid */}
                  <div>
                    <h4 className="text-[12px] font-bold tracking-[.1em] uppercase text-g500 mb-3">Best Sellers</h4>
                    <div className="grid gap-[10px]" style={{ gridTemplateColumns: 'repeat(3,1fr)', minWidth: 360 }}>
                      {shopBestSellers.map(p => (
                        <Link
                          key={p.name}
                          to={p.href}
                          className="border border-g200 rounded-[6px] p-2 bg-brand-off hover:shadow-md hover:-translate-y-1 transition-all block"
                        >
                          <img src={p.img} alt={p.name} className="h-14 w-full object-contain mb-1.5" />
                          <p className="font-bold text-[14px] text-g900 leading-snug">{p.name}</p>
                          <p className="text-[12px] text-g500">{p.price}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Find Your Fit */}
            <Link
              to="/pages/find-your-fit"
              className="relative font-semibold text-[14px] px-[14px] py-[10px] text-g900 hover:text-brand-red transition-colors group"
            >
              Find Your Fit →
              <span className="absolute left-[14px] right-[14px] bottom-[5px] h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 block" />
            </Link>

            {/* BUNDLES mega */}
            <div className="relative" ref={bundlesRef}>
              <button
                className="relative font-semibold text-[14px] px-[14px] py-[10px] text-g900 hover:text-brand-red transition-colors group"
                onMouseEnter={() => { setBundlesOpen(true); setShopOpen(false) }}
                onClick={() => setBundlesOpen(v => !v)}
              >
                Bundles
                <span className="absolute left-[14px] right-[14px] bottom-[5px] h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 block" />
              </button>

              {bundlesOpen && (
                <div
                  className="absolute top-[calc(100%+1px)] left-0 w-[320px] bg-white border border-g200 shadow-[0_24px_48px_rgba(0,0,0,.12)] rounded-lg p-[26px] z-50"
                  onMouseLeave={() => setBundlesOpen(false)}
                >
                  <h4 className="text-[12px] font-bold tracking-[.1em] uppercase text-g500 mb-3">Bundles</h4>
                  <div className="flex flex-col gap-2.5">
                    {bundles.map(b => (
                      <Link key={b.name} to={b.href} className="flex items-center gap-3 border border-g200 rounded-lg p-3 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-red transition-all">
                        <div className="w-14 h-14 min-w-[56px] bg-g100 rounded-md flex items-center justify-center text-2xl">📦</div>
                        <div>
                          <p className="font-bold text-[14px] text-g900 leading-snug">{b.name}</p>
                          <p className="text-[12px] text-g500 mt-0.5">{b.sub}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to="/collections/bundles" className="block text-center text-brand-red font-semibold text-[14px] mt-4 hover:underline">
                    See All Bundles →
                  </Link>
                </div>
              )}
            </div>

            {/* The Science */}
            <Link
              to="/pages/the-science"
              className="relative font-semibold text-[14px] px-[14px] py-[10px] text-g900 hover:text-brand-red transition-colors group"
            >
              The Science
              <span className="absolute left-[14px] right-[14px] bottom-[5px] h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 block" />
            </Link>

            {/* Real Results */}
            <Link
              to="/pages/our-story"
              className="relative font-semibold text-[14px] px-[14px] py-[10px] text-g900 hover:text-brand-red transition-colors group"
            >
              Real Results
              <span className="absolute left-[14px] right-[14px] bottom-[5px] h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 block" />
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="hidden md:block text-lg text-g900 hover:text-brand-red transition-colors" aria-label="Search">🔍</button>
            {/* Cart */}
            <button className="hidden md:flex items-center gap-1.5 text-[14px] font-semibold border-[1.5px] border-g900 rounded-full px-3 py-[6px] hover:bg-g900 hover:text-white transition-all">
              🛒 <span>0 · $0.00</span>
            </button>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-[34px] h-[34px] p-0 bg-transparent border-0 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block w-full h-[2px] bg-g900 transition-transform duration-250 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-full h-[2px] bg-g900 transition-opacity duration-250 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-g900 transition-transform duration-250 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-g200 flex flex-col">
            <Link to="/#catalog" className="px-7 py-4 border-b border-g200 font-semibold text-[14px] text-g900">Shop All Products</Link>
            <Link to="/collections/fat-burners" className="px-7 py-4 border-b border-g200 font-semibold text-[14px] text-g900">Fat Burners</Link>
            <Link to="/collections/slimming-drinks" className="px-7 py-4 border-b border-g200 font-semibold text-[14px] text-g900">Slimming Drinks</Link>
            <Link to="/collections/wellness" className="px-7 py-4 border-b border-g200 font-semibold text-[14px] text-g900">Wellness & Sleep</Link>
            <Link to="/collections/bundles" className="px-7 py-4 border-b border-g200 font-semibold text-[14px] text-g900">Bundles</Link>
            <Link to="/pages/find-your-fit" className="px-7 py-4 text-center font-bold text-[14px] text-white bg-brand-red">Find Your Fit →</Link>
            <Link to="/pages/the-science" className="px-7 py-4 border-t border-g200 font-semibold text-[14px] text-g900">The Science</Link>
            <Link to="/pages/our-story" className="px-7 py-4 border-t border-g200 font-semibold text-[14px] text-g900">Real Results</Link>
          </div>
        )}
      </div>
    </header>
  )
}
