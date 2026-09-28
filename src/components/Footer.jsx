import { useState } from 'react'
import { Link } from 'react-router-dom'

const G900 = '#1a1a1a'
const G700 = '#4d4d4d'
const G500 = '#808080'
const G200 = '#e6e6e6'
const OFF  = '#f5f5f7'
const RED  = '#9b0d0c'

const PRODUCTS = [
  { label:'Fat Burners',      href:'https://shortcutx.co/collections/fat-burners' },
  { label:'Slimming Drinks',  href:'https://shortcutx.co/collections/slimming-drinks' },
  { label:'Meal Replacement', href:'https://shortcutx.co/collections/meal-replacement' },
  { label:'Wellness',         href:'https://shortcutx.co/collections/wellness' },
  { label:'Sleep',            href:'https://shortcutx.co/collections/sleep' },
]

const LEARN = [
  { label:'Find Your Fit',                href:'/pages/find-your-fit', internal:true },
  { label:'Reviews',                      href:'https://shortcutx.co/pages/reviews' },
  { label:'Quality & Standards',          href:'https://shortcutx.co/pages/quality-and-standards' },
  { label:'Ambassador Program',           href:'https://shortcutx.co/pages/ambassador-program' },
  { label:'About Us',                     href:'https://shortcutx.co/pages/about-us' },
  { label:'Our Collections',              href:'https://shortcutx.co/collections' },
  { label:'Daily Calorie Calculator',     href:'https://shortcutx.co/pages/calorie-counter' },
]

const SUPPORT = [
  { label:'FAQs',               href:'https://shortcutx.co/pages/faqs' },
  { label:'Track My Order',     href:'https://shortcutx.co/pages/track-my-order' },
  { label:'Returns / Exchange', href:'https://shortcutx.co/policies/refund-policy' },
  { label:'Contact Us',         href:'https://shortcutx.co/pages/contact' },
]

const INFO = [
  { label:'Retail Stores',  href:'https://shortcutx.co/pages/retail-stores' },
  { label:'Privacy Policy', href:'https://shortcutx.co/policies/privacy-policy' },
  { label:'Refund Policy',  href:'https://shortcutx.co/policies/refund-policy' },
  { label:'Disclaimer',     href:'https://shortcutx.co/pages/disclaimer' },
  { label:'Careers',        href:'https://shortcutx.co/pages/careers' },
]

const PAYMENTS = [
  { label:'Visa',       bg:'#1A1F71', color:'#fff', fw:700 },
  { label:'Mastercard', bg:'#EB001B', color:'#fff', fw:700 },
  { label:'Amex',       bg:'#2E77BC', color:'#fff', fw:700 },
  { label:'Apple Pay',  bg:'#000',    color:'#fff', fw:600 },
  { label:'GPay',       bg:'#fff',    color:'#333', fw:700, border:'#ddd' },
  { label:'Shop Pay',   bg:'#5A31F4', color:'#fff', fw:600 },
  { label:'Atome',      bg:'#B6F43F', color:'#1a1a1a', fw:700 },
]

const SOCIALS = [
  {
    href:'https://www.instagram.com/shortcutx.co/',
    label:'Instagram',
    icon:(
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href:'https://www.tiktok.com/@shortcutx.co',
    label:'TikTok',
    icon:(
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
      </svg>
    ),
  },
  {
    href:'https://www.facebook.com/shortcutx.co',
    label:'Facebook',
    icon:(
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ color:G500, textDecoration:'none', fontSize:14, lineHeight:1, display:'block', transition:'color .15s' }}
      onMouseEnter={e => e.currentTarget.style.color=G900}
      onMouseLeave={e => e.currentTarget.style.color=G500}>
      {children}
    </a>
  )
}

function ColHead({ children }) {
  return (
    <h5 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:12, letterSpacing:'.1em', textTransform:'uppercase', color:G900, margin:'0 0 18px' }}>
      {children}
    </h5>
  )
}

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [sent, setSent]     = useState(false)

  const handleSub = e => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <footer style={{ background:OFF, borderTop:`1px solid ${G200}` }}>
      {/* Main 5-col grid */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'64px 28px 48px', display:'grid', gridTemplateColumns:'1fr 1.1fr 0.85fr 0.85fr 1.2fr', gap:36 }}>

        {/* Products */}
        <div>
          <ColHead>Products</ColHead>
          <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:11 }}>
            {PRODUCTS.map(l => <li key={l.label}><ExtLink href={l.href}>{l.label}</ExtLink></li>)}
          </ul>
        </div>

        {/* Learn */}
        <div>
          <ColHead>Learn</ColHead>
          <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:11 }}>
            {LEARN.map(l => (
              <li key={l.label}>
                {l.internal
                  ? <Link to={l.href}
                      style={{ color:G500, textDecoration:'none', fontSize:14, lineHeight:1, display:'block', transition:'color .15s' }}
                      onMouseEnter={e => e.currentTarget.style.color=G900}
                      onMouseLeave={e => e.currentTarget.style.color=G500}>
                      {l.label}
                    </Link>
                  : <ExtLink href={l.href}>{l.label}</ExtLink>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <ColHead>Support</ColHead>
          <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:11 }}>
            {SUPPORT.map(l => <li key={l.label}><ExtLink href={l.href}>{l.label}</ExtLink></li>)}
          </ul>
        </div>

        {/* Information */}
        <div>
          <ColHead>Information</ColHead>
          <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:11 }}>
            {INFO.map(l => <li key={l.label}><ExtLink href={l.href}>{l.label}</ExtLink></li>)}
          </ul>
          <div style={{ marginTop:22, display:'flex', alignItems:'flex-start', gap:6 }}>
            <span style={{ fontSize:13, marginTop:2 }}>📍</span>
            <p style={{ margin:0, fontSize:12, color:G500, lineHeight:1.65 }}>2 Gambas Cres, #01-35<br />Nordcom II, Singapore</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <ColHead>Newsletter</ColHead>
          <p style={{ margin:'0 0 14px', fontSize:13, color:G500, lineHeight:1.65 }}>Sign up for the best deals, new drops, and wellness tips.</p>

          {sent
            ? <div style={{ background:'#edfaea', border:'1px solid #a8e6b8', borderRadius:10, padding:'12px 14px', fontSize:13, color:'#1a6630', fontWeight:600 }}>You're in! Check your inbox.</div>
            : <form onSubmit={handleSub} style={{ display:'flex', borderRadius:50, border:`1.5px solid ${G200}`, overflow:'hidden', background:'#fff', boxShadow:'0 1px 4px rgba(0,0,0,.06)' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required
                  style={{ flex:1, border:'none', outline:'none', padding:'11px 14px', fontSize:13, color:G900, background:'transparent', minWidth:0 }} />
                <button type="submit"
                  style={{ background:G900, color:'#fff', border:'none', borderRadius:50, padding:'0 18px', fontSize:12, fontWeight:700, cursor:'pointer', margin:3, whiteSpace:'nowrap', fontFamily:'Poppins,sans-serif', letterSpacing:'.03em', transition:'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background=RED}
                  onMouseLeave={e => e.currentTarget.style.background=G900}>
                  Subscribe
                </button>
              </form>
          }

          {/* Payment methods */}
          <div style={{ marginTop:22 }}>
            <p style={{ margin:'0 0 9px', fontSize:11, color:G500, letterSpacing:'.06em', textTransform:'uppercase', fontWeight:600 }}>We accept</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
              {PAYMENTS.map(p => (
                <span key={p.label} style={{ background:p.bg, color:p.color, border:p.border?`1px solid ${p.border}`:'none', borderRadius:5, padding:'3px 7px', fontSize:10, fontWeight:p.fw, letterSpacing:'.01em', lineHeight:1.5, fontFamily:'system-ui,sans-serif' }}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:`1px solid ${G200}`, maxWidth:1200, margin:'0 auto', padding:'14px 28px', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:12 }}>
        <Link to="/" style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:15, color:G900, textDecoration:'none', letterSpacing:'-.01em' }}>
          SHORTCUT<span style={{ color:RED }}>X</span>
        </Link>

        <span style={{ fontSize:12, color:G500 }}>© {new Date().getFullYear()} Shortcutx Pte Ltd · All rights reserved</span>

        {/* Social icons */}
        <div style={{ display:'flex', gap:8 }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{ width:34, height:34, border:`1.5px solid ${G200}`, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center', color:G500, textDecoration:'none', transition:'border-color .15s, color .15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=G900; e.currentTarget.style.color=G900 }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=G200; e.currentTarget.style.color=G500 }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* Legal links */}
        <div style={{ display:'flex', gap:18 }}>
          {[
            { label:'Privacy',  href:'https://shortcutx.co/policies/privacy-policy' },
            { label:'Refund',   href:'https://shortcutx.co/policies/refund-policy' },
            { label:'Terms',    href:'https://shortcutx.co/policies/terms-of-service' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize:12, color:G500, textDecoration:'none', transition:'color .15s' }}
              onMouseEnter={e => e.currentTarget.style.color=G900}
              onMouseLeave={e => e.currentTarget.style.color=G500}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
