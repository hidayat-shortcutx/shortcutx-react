import { useState } from 'react'
import { Link } from 'react-router-dom'

const G900 = '#1a1a1a'
const G700 = '#4d4d4d'
const G500 = '#808080'
const G200 = '#e6e6e6'
const OFF  = '#f5f5f7'
const RED  = '#9b0d0c'

const PRODUCTS = [
  { label: 'Fat Burners',       href: 'https://shortcutx.co/collections/fat-burners' },
  { label: 'Slimming Drinks',   href: 'https://shortcutx.co/collections/slimming-drinks' },
  { label: 'Meal Replacement',  href: 'https://shortcutx.co/collections/meal-replacement' },
  { label: 'Wellness',          href: 'https://shortcutx.co/collections/wellness' },
  { label: 'Sleep',             href: 'https://shortcutx.co/collections/sleep' },
]

const LEARN = [
  { label: 'Find Your Fit',           href: '/pages/find-your-fit', internal: true },
  { label: 'FAQs',                    href: 'https://shortcutx.co/pages/faqs' },
  { label: 'About Us',                href: 'https://shortcutx.co/pages/about-us' },
  { label: 'Our Collections',         href: 'https://shortcutx.co/collections' },
  { label: 'Daily Calorie Calculator',href: 'https://shortcutx.co/pages/calorie-counter' },
]

const INFO = [
  { label: 'Retail Stores',   href: 'https://shortcutx.co/pages/retail-stores' },
  { label: 'Privacy Policy',  href: 'https://shortcutx.co/policies/privacy-policy' },
  { label: 'Refund Policy',   href: 'https://shortcutx.co/policies/refund-policy' },
  { label: 'Disclaimer',      href: 'https://shortcutx.co/pages/disclaimer' },
  { label: 'Careers',         href: 'https://shortcutx.co/pages/careers' },
  { label: 'Contact Us',      href: 'https://shortcutx.co/pages/contact' },
]

const PAYMENTS = [
  { label: 'Visa',        bg: '#1A1F71', color: '#fff', fw: 700 },
  { label: 'Mastercard',  bg: '#EB001B', color: '#fff', fw: 700 },
  { label: 'Amex',        bg: '#2E77BC', color: '#fff', fw: 700 },
  { label: 'Apple Pay',   bg: '#000',    color: '#fff', fw: 600 },
  { label: 'GPay',        bg: '#fff',    color: '#333', fw: 700, border: '#ddd' },
  { label: 'Shop Pay',    bg: '#5A31F4', color: '#fff', fw: 600 },
  { label: 'Atome',       bg: '#B6F43F', color: '#1a1a1a', fw: 700 },
]

function ExternalLink({ href, children, style }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ color: G500, textDecoration: 'none', fontSize: 14, lineHeight: 1, display: 'block', transition: 'color .15s', ...style }}
      onMouseEnter={e => e.currentTarget.style.color = G900}
      onMouseLeave={e => e.currentTarget.style.color = G500}>
      {children}
    </a>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubscribe = e => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <footer style={{ background: OFF, borderTop: `1px solid ${G200}` }}>
      {/* Main grid */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 28px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>

        {/* Col 1 — Products */}
        <div>
          <h5 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: G900, marginBottom: 20 }}>Products</h5>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PRODUCTS.map(l => (
              <li key={l.label}>
                <ExternalLink href={l.href}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — Learn */}
        <div>
          <h5 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: G900, marginBottom: 20 }}>Learn</h5>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {LEARN.map(l => (
              <li key={l.label}>
                {l.internal
                  ? <Link to={l.href}
                      style={{ color: G500, textDecoration: 'none', fontSize: 14, lineHeight: 1, display: 'block', transition: 'color .15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = G900}
                      onMouseLeave={e => e.currentTarget.style.color = G500}>
                      {l.label}
                    </Link>
                  : <ExternalLink href={l.href}>{l.label}</ExternalLink>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Information */}
        <div>
          <h5 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: G900, marginBottom: 20 }}>Information</h5>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {INFO.map(l => (
              <li key={l.label}>
                <ExternalLink href={l.href}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
          {/* Address */}
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'flex-start', gap: 7 }}>
            <span style={{ fontSize: 14, marginTop: 1 }}>📍</span>
            <p style={{ margin: 0, fontSize: 13, color: G500, lineHeight: 1.6 }}>2 Gambas Cres, #01-35<br />Nordcom II, Singapore</p>
          </div>
          {/* Social icons */}
          <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
            {[
              { href: 'https://www.instagram.com/shortcutx.co/', icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              )},
              { href: 'https://www.tiktok.com/@shortcutx.co', icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                </svg>
              )},
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, border: `1.5px solid ${G200}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: G500, textDecoration: 'none', transition: 'border-color .15s, color .15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G900; e.currentTarget.style.color = G900 }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = G200; e.currentTarget.style.color = G500 }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <h5 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: G900, marginBottom: 8 }}>Newsletter</h5>
          <p style={{ margin: '0 0 16px', fontSize: 13, color: G500, lineHeight: 1.6 }}>Sign up for the best deals, new drops, and wellness tips. No spam.</p>

          {sent ? (
            <div style={{ background: '#edfaea', border: '1px solid #a8e6b8', borderRadius: 12, padding: '14px 16px', fontSize: 13, color: '#1a6630', fontWeight: 600 }}>
              You're in! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', borderRadius: 50, border: `1.5px solid ${G200}`, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{ flex: 1, border: 'none', outline: 'none', padding: '11px 16px', fontSize: 13, color: G900, background: 'transparent', minWidth: 0 }}
                />
                <button type="submit"
                  style={{ background: G900, color: '#fff', border: 'none', borderRadius: 50, padding: '0 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', margin: 3, whiteSpace: 'nowrap', fontFamily: 'Poppins,sans-serif', letterSpacing: '.02em', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = RED}
                  onMouseLeave={e => e.currentTarget.style.background = G900}>
                  Subscribe
                </button>
              </div>
            </form>
          )}

          {/* Payment methods */}
          <div style={{ marginTop: 24 }}>
            <p style={{ margin: '0 0 10px', fontSize: 12, color: G500, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 600 }}>We accept</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {PAYMENTS.map(p => (
                <span key={p.label}
                  style={{ background: p.bg, color: p.color, border: p.border ? `1px solid ${p.border}` : 'none', borderRadius: 6, padding: '4px 8px', fontSize: 11, fontWeight: p.fw, fontFamily: 'system-ui,sans-serif', letterSpacing: '.01em', lineHeight: 1.4 }}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${G200}`, maxWidth: 1160, margin: '0 auto', padding: '16px 28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <Link to="/" style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 15, color: G900, textDecoration: 'none', letterSpacing: '-.01em' }}>
          SHORTCUT<span style={{ color: RED }}>X</span>
        </Link>
        <span style={{ fontSize: 12, color: G500 }}>© {new Date().getFullYear()} Shortcutx Pte Ltd · All rights reserved</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'Privacy', href: 'https://shortcutx.co/policies/privacy-policy' },
            { label: 'Refund', href: 'https://shortcutx.co/policies/refund-policy' },
            { label: 'Terms', href: 'https://shortcutx.co/policies/terms-of-service' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: G500, textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => e.currentTarget.style.color = G900}
              onMouseLeave={e => e.currentTarget.style.color = G500}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
