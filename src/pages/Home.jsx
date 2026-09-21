import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const RED       = '#9b0d0c'
const RED_DARK  = '#700a09'
const RED_LIGHT = '#c33d3c'
const RED_PALE  = '#fbebea'
const RED_PALE2 = '#f5d9d8'
const GOLD      = '#ffd479'
const G900      = '#333333'
const G700      = '#4d4d4d'
const G500      = '#808080'
const G300      = '#cccccc'
const G200      = '#e6e6e6'
const G100      = '#f2f2f2'
const OFF       = '#fafafa'
const WHITE     = '#ffffff'

const products = [
  { name:'Max+ Fat Burner Juice (15×35ml)',     price:'$63.00 – $126.00',      perDay:'4.20', confirmed:true,  cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=600',                              badge:'BEST SELLER' },
  { name:'Max Fat Burner Berry Punch',          price:'$27.50 – $110.00',      perDay:'3.93', confirmed:false, cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=600' },
  { name:'Max Fat Burner Blackcurrant (7×35ml)',price:'$27.50 – $110.00',      perDay:'3.93', confirmed:true,  cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=600' },
  { name:'Apple Cider Fat Burner Fruit Juice',  price:'$24.00 – $96.00',       perDay:'3.43', confirmed:false, cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-10.jpg?v=1779346704&width=600' },
  { name:'Lychee Lemon Fat Burner Juice',       price:'$24.00 – $96.00',       perDay:'3.43', confirmed:false, cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-07.jpg?v=1779346704&width=600' },
  { name:'Night Fat Burner Juice',              price:'$22.00 – $88.00',       perDay:'3.14', confirmed:false, cat:'burn',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-13.jpg?v=1779346704&width=600' },
  { name:'Detox Juice',                         price:'$22.00 – $66.00',       perDay:'3.14', confirmed:false, cat:'slim',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=600',                             badge:'BEST SELLER' },
  { name:'De-Bloat: White Grape',               price:'$24.00 – $96.00',       perDay:'3.43', confirmed:false, cat:'slim',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-01.jpg?v=1779346704&width=600' },
  { name:'Flat Tummy Shake',                    price:'See range',              perDay:null,   confirmed:false, cat:'slim',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=600' },
  { name:'Night Hot Chocolate (15 sachets)',    price:'$45.00',                 perDay:'3.00', confirmed:true,  cat:'well',   img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=600',             badge:'NEW' },
  { name:'Night Fat Burner Juice',              price:'$22.00 – $88.00',       perDay:'3.14', confirmed:false, cat:'well',   img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-13.jpg?v=1779346704&width=600' },
  { name:'Starter Fat Burner Bundle',           price:'Save up to 15%',        perDay:null,   confirmed:false, cat:'bundle', img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=600' },
  { name:'Build A Box: Reset Stack',            price:'$108.00 (illustrative)', perDay:null,   confirmed:false, cat:'bundle', img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=600' },
  { name:'Advanced Fat Burner Bundle',          price:'Save up to 20%',        perDay:null,   confirmed:false, cat:'bundle', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=600' },
]

const catChips = [
  { tab:'burn',   label:'Burn Fat',         count:'6 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200' },
  { tab:'slim',   label:'Slimming Drinks',  count:'4 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=200' },
  { tab:'well',   label:'Wellness & Sleep', count:'2 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=200' },
  { tab:'bundle', label:'Bundles',          count:'Save up to 20%',        img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=200' },
]

const goalCards = [
  { tab:'burn',   title:'Burn Fat',         desc:'Max+ Fat Burner Juice, Berry Punch, Blackcurrant, Apple Cider, Lychee Lemon', count:'6 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500' },
  { tab:'slim',   title:'Slimming Drinks',  desc:'Detox Juice, De-Bloat White Grape, Flat Tummy Shakes',                        count:'4 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500' },
  { tab:'well',   title:'Wellness & Sleep', desc:'Night Hot Chocolate, Night Fat Burner Juice',                                  count:'2 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500' },
  { tab:'bundle', title:'Bundles',          desc:'Stack your goals, save on every pack',                                          count:'Save up to 20%',        img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=500' },
]

const heroSlides = [
  {
    type: 'spend-tiers',
    leftBg: 'linear-gradient(135deg,#fff8f5 0%,#ffffff 100%)',
    rightBg: 'linear-gradient(135deg,#c40000 0%,#9b0d0c 45%,#6a0808 100%)',
    headline: ['Stock up.', 'Save more.'],
    tiers: [{spend:60,save:5},{spend:120,save:12},{spend:180,save:25}],
    validity: 'Valid till 4th October 2026.',
    note: 'No code needed. Offer is automatically applied at checkout.',
    rightImgs: [
      'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500',
      'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500',
      'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500',
    ],
  },
  {
    type: 'brand-hero',
    eyebrow: 'Rated 4.9 · Singapore\'s #1 Supplement',
    h1: "Singapore's #1\nBest-Selling",
    h1Gold: "Weight\nManagement",
    h1End: 'Supplements',
    sub: "Burn more calories with Singapore's #1 weight management supplements. Elevate your expectations with our meticulously crafted formula join others towards a healthier you.",
    cta1: 'Shop All Products', cta1Href: '#catalog',
    cta2: 'Find Your Fit →', cta2Href: '/pages/find-your-fit',
    badge1: '150,000+ boxes sold', badge2: '🇸🇬 Shopee #1 Ranked',
    img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=600',
  },
  {
    type: 'product-hero',
    leftBg: '#0d3d2a',
    rightBg: 'linear-gradient(135deg,#082a1c 0%,#0d3d2a 100%)',
    eyebrow: '🆕  NEW LAUNCH · Night-time Fat Burning',
    headline: ['Better sleep.', 'Better burns.'],
    sub: 'Rich hot chocolate that burns fat while you rest. KSM-66® Ashwagandha for deep sleep & cortisol control.',
    cta: 'Shop Night Hot Chocolate', ctaHref: '/products/night-hot-chocolate',
    badge1: 'Burns while you sleep', badge2: '☕ Zero guilt',
    img: 'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=700',
  },
  {
    type: 'spend-tiers',
    leftBg: 'linear-gradient(135deg,#1a0a00 0%,#2e1200 100%)',
    rightBg: 'linear-gradient(135deg,#700a09 0%,#9b0d0c 100%)',
    headline: ['Stack your goals.', 'Save up to 20%.'],
    headlineLight: true,
    tiers: [{spend:'Day',save:'Burn'},{spend:'Night',save:'Sleep'},{spend:'Bundle',save:'Save 20%'}],
    isBundleTiers: true,
    validity: 'Mix & match any products.',
    note: 'Free shipping on every bundle order.',
    rightImgs: [
      'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500',
      'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500',
      'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-01.jpg?v=1779346704&width=500',
    ],
  },
]

const ambassadors = [
  { name:'Efasha "Fash The Face" Kamarudin', role:'WBC Female Asia Continental Champion',         tag:'BRAND PARTNER',   emoji:'🥊', grad:'linear-gradient(150deg,#2b2523,#333333)' },
  { name:'Nadhra',                            role:'Content Creator & Brand Ambassador',            tag:'BRAND PARTNER',   emoji:'🎤', grad:'linear-gradient(150deg,#c9a227,#8a6a2f)' },
  { name:'Nurul Aini',                        role:'Actress & TV Presenter, Mediacorp Suria',      tag:'BRAND PARTNER',   emoji:'🎬', grad:'linear-gradient(150deg,#4a6fa5,#2d4870)' },
  { name:'Kyliee',                            role:'Skinfluencer & Golf Content Creator',           tag:'BRAND PARTNER',   emoji:'⭐', grad:'linear-gradient(150deg,#ff8a3d,#c9600f)' },
  { name:'[Add Doctor Name]',                role:'[Add credential, e.g. MBBS, clinic/hospital]', tag:'MEDICAL ADVISOR', emoji:'⚕️', grad:`linear-gradient(150deg,${RED_LIGHT},${RED_DARK})`, tbc:true },
]

const statsData = [
  { target:150, suffix:'K+', prefix:'',  label:'boxes sold across Singapore to date', barW:'88%' },
  { target:1,   suffix:'',   prefix:'#', label:'ranked on Shopee Singapore',          barW:'100%' },
  { target:4.9, suffix:'★',  prefix:'',  label:'average customer rating',             barW:'96%' },
  { target:0,   suffix:'',   prefix:'',  label:'happy customers',                     barW:'0%' },
]

function useStatsAnimation() {
  const ref = useRef(null)
  const [counts, setCounts] = useState(statsData.map(() => 0))
  const [barsOn, setBarsOn] = useState(false)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        setBarsOn(true)
        statsData.forEach((s, i) => {
          const steps = 60, dur = 1800
          let cur = 0
          const timer = setInterval(() => {
            cur = Math.min(cur + s.target / steps, s.target)
            setCounts(prev => { const n=[...prev]; n[i]=cur; return n })
            if (cur >= s.target) clearInterval(timer)
          }, dur / steps)
        })
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, counts, barsOn }
}

// shared style helpers
const WRAP = { maxWidth:1280, margin:'0 auto', padding:'0 28px' }
const EYEBROW = { fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'.1em', color:RED, display:'block', marginBottom:8 }
const H2 = { fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(26px,3vw,38px)', lineHeight:1.1, marginBottom:12, letterSpacing:'-.01em', color:G900 }
const P_BODY = { fontSize:14, color:G700, lineHeight:1.6 }
const BTN_PRIMARY = { fontWeight:700, fontSize:14, padding:'14px 26px', borderRadius:6, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer', background:RED, color:WHITE, border:`2px solid ${RED}`, transition:'.2s', textDecoration:'none' }
const BTN_GHOST   = { fontWeight:700, fontSize:14, padding:'14px 26px', borderRadius:6, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer', background:'transparent', color:G900, border:`2px solid ${G900}`, transition:'.2s', textDecoration:'none' }

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const [heroIdx, setHeroIdx] = useState(0)
  const { ref: statsRef, counts, barsOn } = useStatsAnimation()

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  const visible = activeTab === 'all' ? products : products.filter(p => p.cat === activeTab)

  function toCatalog(tab) {
    setActiveTab(tab)
    document.getElementById('catalog')?.scrollIntoView({ behavior:'smooth' })
  }

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section id="top" style={{ position:'relative', overflow:'hidden', userSelect:'none' }}>

        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div key={i} style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            opacity: heroIdx === i ? 1 : 0,
            transition: 'opacity .7s ease',
            pointerEvents: heroIdx === i ? 'auto' : 'none',
          }}>

            {/* ── BRAND-HERO: full-width red layout (matching original hero design) ── */}
            {slide.type === 'brand-hero' ? (
              <div style={{ position:'relative', background:RED, color:WHITE, padding:'52px 0 48px', overflow:'hidden', minHeight:480 }}>
                <div style={{ position:'absolute', width:420, height:420, borderRadius:'50%', background:'rgba(255,255,255,.08)', top:-160, right:-100, pointerEvents:'none' }} />
                <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%', background:'rgba(255,255,255,.06)', bottom:-100, left:-80, pointerEvents:'none' }} />
                <div style={WRAP}>
                  <div style={{ display:'grid', gridTemplateColumns:'1.05fr .95fr', gap:40, alignItems:'center', position:'relative', zIndex:1 }}>
                    <div>
                      <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:18 }}>
                        <span style={{ color:'#ffd4d2', letterSpacing:2 }}>★★★★★</span>
                        <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'.1em', color:'#ffd4d2' }}>{slide.eyebrow}</span>
                      </div>
                      <h1 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(34px,4vw,52px)', lineHeight:1.03, letterSpacing:'-.015em', marginBottom:14, color:WHITE }}>
                        {slide.h1.split('\n').map((l,li) => <span key={li}>{l}{li < slide.h1.split('\n').length-1 && <br/>}</span>)}{' '}
                        <span style={{ color:GOLD }}>{slide.h1Gold.split('\n').map((l,li,arr) => <span key={li}>{l}{li < arr.length-1 && <br/>}</span>)}</span>{' '}
                        {slide.h1End}
                      </h1>
                      <p style={{ fontSize:16, maxWidth:460, color:'rgba(255,255,255,.85)', marginBottom:22, lineHeight:1.55 }}>{slide.sub}</p>
                      <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href={slide.cta1Href}
                          onClick={slide.cta1Href === '#catalog' ? e => { e.preventDefault(); toCatalog('all') } : undefined}
                          style={{ ...BTN_PRIMARY, background:WHITE, color:RED, borderColor:WHITE }}>{slide.cta1}</a>
                        <Link to={slide.cta2Href} style={{ ...BTN_GHOST, color:WHITE, borderColor:'rgba(255,255,255,.6)' }}>{slide.cta2}</Link>
                      </div>
                    </div>
                    <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <img src={slide.img} alt="Max+ Fat Burner"
                        className="product-shot-float"
                        style={{ width:'100%', maxWidth:400, display:'block', objectFit:'contain', filter:'drop-shadow(0 30px 50px rgba(0,0,0,.3))' }} />
                      <div className="float-badge-b1"
                        style={{ position:'absolute', top:-14, left:-14, zIndex:2, background:WHITE, border:`1px solid ${G200}`, borderRadius:30, padding:'10px 16px', fontFamily:'Poppins,monospace', fontSize:14, fontWeight:600, boxShadow:'0 10px 24px rgba(0,0,0,.18)', display:'flex', alignItems:'center', gap:6, color:G900, whiteSpace:'nowrap' }}>
                        <span className="pulse-dot" style={{ width:7, height:7, borderRadius:'50%', background:RED, display:'inline-block', flexShrink:0 }} />
                        {slide.badge1}
                      </div>
                      <div className="float-badge-b2"
                        style={{ position:'absolute', bottom:-14, right:-14, zIndex:2, background:WHITE, border:`1px solid ${G200}`, borderRadius:30, padding:'10px 16px', fontFamily:'Poppins,monospace', fontSize:14, fontWeight:600, boxShadow:'0 10px 24px rgba(0,0,0,.18)', color:G900, whiteSpace:'nowrap' }}>
                        {slide.badge2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ) : (
              /* ── SPLIT-LAYOUT: spend-tiers and product-hero (50/50) ── */
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:480 }}>

                {/* LEFT */}
                {slide.type === 'spend-tiers' ? (
                  <div style={{ background: slide.leftBg, display:'flex', alignItems:'center', padding:'52px 5% 52px 6%' }}>
                    <div style={{ maxWidth: 520, width:'100%' }}>
                      <div style={{ filter: slide.headlineLight ? 'none' : 'drop-shadow(3px 5px 0 rgba(100,50,0,.35))' }}>
                        {slide.headline.map(line => (
                          <div key={line} style={{
                            fontFamily:'Poppins,sans-serif', fontWeight:900,
                            fontSize:'clamp(38px,5vw,76px)', lineHeight:0.92, letterSpacing:'-0.025em',
                            ...(slide.headlineLight
                              ? { color: WHITE }
                              : { background:'linear-gradient(180deg,#ffe87c 0%,#f5b820 40%,#c87800 78%,#a05000 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }
                            ),
                          }}>{line}</div>
                        ))}
                      </div>
                      <div style={{ display:'flex', gap:12, margin:'28px 0 18px', flexWrap:'wrap' }}>
                        {slide.tiers.map(t => (
                          slide.isBundleTiers ? (
                            <div key={t.spend} style={{
                              background:'linear-gradient(180deg,#ffe566 0%,#e8a800 60%,#c07800 100%)',
                              borderRadius:14, border:'2.5px solid rgba(255,240,100,.7)',
                              boxShadow:'0 6px 22px rgba(180,110,0,.45)', overflow:'hidden',
                              minWidth:90, textAlign:'center', flex:'1 1 80px',
                            }}>
                              <div style={{ padding:'10px 12px 6px', fontFamily:'Poppins,sans-serif' }}>
                                <div style={{ fontSize:13, fontWeight:900, color:'#1a0a00', lineHeight:1.1, letterSpacing:'-0.01em' }}>{t.spend}</div>
                              </div>
                              <div style={{ background:RED, padding:'6px 10px' }}>
                                <div style={{ fontSize:13, fontWeight:800, color:GOLD, lineHeight:1.1, fontFamily:'Poppins,sans-serif' }}>{t.save}</div>
                              </div>
                            </div>
                          ) : (
                            <div key={t.spend} style={{
                              background:'linear-gradient(180deg,#ffe566 0%,#e8a800 60%,#c07800 100%)',
                              borderRadius:14, border:'2.5px solid rgba(255,240,100,.7)',
                              boxShadow:'0 6px 22px rgba(180,110,0,.45), inset 0 1px 0 rgba(255,255,255,.35)',
                              overflow:'hidden', minWidth:100, textAlign:'center', flex:'1 1 90px',
                            }}>
                              <div style={{ padding:'12px 14px 8px', fontFamily:'Poppins,sans-serif' }}>
                                <div style={{ fontSize:10, fontWeight:800, letterSpacing:'.12em', color:'#3d1f00', textTransform:'uppercase' }}>SPEND</div>
                                <div style={{ fontSize:'clamp(34px,4vw,52px)', fontWeight:900, color:'#1a0a00', lineHeight:1.0, letterSpacing:'-0.025em' }}>${t.spend}</div>
                              </div>
                              <div style={{ background:RED, padding:'7px 10px' }}>
                                <div style={{ fontSize:10, fontWeight:800, letterSpacing:'.1em', color:'#ffb0ac', textTransform:'uppercase', fontFamily:'Poppins,sans-serif' }}>SAVE</div>
                                <div style={{ fontSize:'clamp(24px,3vw,36px)', fontWeight:900, color:GOLD, lineHeight:1.0, fontFamily:'Poppins,sans-serif', letterSpacing:'-0.02em' }}>${t.save}</div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                      <p style={{ fontSize:13, color: slide.headlineLight ? 'rgba(255,255,255,.6)' : G500, margin:'4px 0 2px', fontStyle:'italic' }}>{slide.validity}</p>
                      <p style={{ fontSize:13, color: slide.headlineLight ? 'rgba(255,255,255,.6)' : G500, margin:0 }}>{slide.note}</p>
                    </div>
                  </div>
                ) : (
                  <div style={{ background: slide.leftBg, display:'flex', alignItems:'center', padding:'52px 5% 52px 6%' }}>
                    <div style={{ maxWidth: 520 }}>
                      <div style={{ fontSize:12, fontWeight:700, color:'rgba(255,255,255,.7)', letterSpacing:'.06em', marginBottom:18, fontFamily:'Poppins,sans-serif' }}>{slide.eyebrow}</div>
                      <div>
                        {slide.headline.map((line, li) => (
                          <div key={li} style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(36px,4.5vw,64px)', lineHeight:1.0, letterSpacing:'-0.02em', color:WHITE }}>{line}</div>
                        ))}
                      </div>
                      <p style={{ fontSize:15, color:'rgba(255,255,255,.8)', margin:'18px 0 28px', lineHeight:1.6, maxWidth:420 }}>{slide.sub}</p>
                      <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:22 }}>
                        <Link to={slide.ctaHref} style={{ ...BTN_PRIMARY, background:WHITE, color:slide.leftBg, borderColor:WHITE, fontSize:14 }}>{slide.cta}</Link>
                      </div>
                      <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                        {[slide.badge1, slide.badge2].map(b => (
                          <span key={b} style={{ background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.25)', borderRadius:30, padding:'6px 14px', fontSize:13, color:WHITE, fontWeight:600 }}>{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* RIGHT */}
                <div style={{ background: slide.rightBg, position:'relative', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:'40px 5%' }}>
                  <div style={{ position:'absolute', width:360, height:360, borderRadius:'50%', background:'rgba(255,255,255,.06)', top:-80, right:-80, pointerEvents:'none' }} />
                  <div style={{ position:'absolute', width:240, height:240, borderRadius:'50%', background:'rgba(255,255,255,.04)', bottom:-60, left:-40, pointerEvents:'none' }} />
                  {slide.type === 'spend-tiers' ? (
                    <div style={{ position:'relative', width:'100%', maxWidth:480, height:360, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <img src={slide.rightImgs[0]} alt="" style={{ position:'absolute', width:'48%', maxWidth:200, objectFit:'contain', transform:'rotate(-12deg) translate(-90px,18px)', filter:'drop-shadow(0 20px 30px rgba(0,0,0,.5))', zIndex:1 }} />
                      <img src={slide.rightImgs[1]} alt="" style={{ position:'absolute', width:'54%', maxWidth:230, objectFit:'contain', transform:'rotate(3deg)', filter:'drop-shadow(0 24px 36px rgba(0,0,0,.5))', zIndex:3 }} />
                      <img src={slide.rightImgs[2]} alt="" style={{ position:'absolute', width:'46%', maxWidth:195, objectFit:'contain', transform:'rotate(16deg) translate(90px,12px)', filter:'drop-shadow(0 20px 30px rgba(0,0,0,.5))', zIndex:2 }} />
                      <div style={{ position:'absolute', top:20, left:'20%', width:60, height:3, background:'linear-gradient(90deg,#ffd47900,#ffd479,#ffd47900)', borderRadius:2, transform:'rotate(-30deg)', opacity:.7 }} />
                      <div style={{ position:'absolute', bottom:30, right:'18%', width:50, height:3, background:'linear-gradient(90deg,#ffd47900,#ffd479,#ffd47900)', borderRadius:2, transform:'rotate(20deg)', opacity:.6 }} />
                    </div>
                  ) : (
                    <img src={slide.img} alt={slide.headline[0]}
                      className="product-shot-float"
                      style={{ width:'80%', maxWidth:380, objectFit:'contain', filter:'drop-shadow(0 30px 50px rgba(0,0,0,.5))', position:'relative', zIndex:1 }} />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Left arrow */}
        <button onClick={() => setHeroIdx(i => (i - 1 + heroSlides.length) % heroSlides.length)}
          style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', zIndex:20, width:44, height:44, borderRadius:'50%', background:'rgba(0,0,0,.32)', border:'1.5px solid rgba(255,255,255,.25)', color:WHITE, fontSize:22, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1, backdropFilter:'blur(4px)', transition:'background .2s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(0,0,0,.55)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(0,0,0,.32)'}
        >‹</button>

        {/* Right arrow */}
        <button onClick={() => setHeroIdx(i => (i + 1) % heroSlides.length)}
          style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', zIndex:20, width:44, height:44, borderRadius:'50%', background:'rgba(0,0,0,.32)', border:'1.5px solid rgba(255,255,255,.25)', color:WHITE, fontSize:22, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1, backdropFilter:'blur(4px)', transition:'background .2s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(0,0,0,.55)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(0,0,0,.32)'}
        >›</button>

        {/* Dot nav */}
        <div style={{ position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)', display:'flex', gap:7, zIndex:20 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setHeroIdx(i)}
              style={{ width: heroIdx === i ? 26 : 8, height:8, borderRadius:4, border:'none', cursor:'pointer', transition:'all .3s ease', background: heroIdx === i ? WHITE : 'rgba(255,255,255,.45)', padding:0 }} />
          ))}
        </div>
      </section>

      {/* Cat-strip */}
      <section style={{ background:WHITE, borderBottom:`1px solid ${G200}`, padding:'16px 0' }}>
        <div style={WRAP}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
            {catChips.map(c => (
              <div key={c.tab} onClick={() => toCatalog(c.tab)}
                style={{ background:WHITE, border:`1px solid ${G200}`, borderRadius:10, padding:12, display:'flex', alignItems:'center', gap:14, cursor:'pointer', transition:'transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s ease, border-color .25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 20px 34px rgba(0,0,0,.1)'; e.currentTarget.style.borderColor=RED }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderColor=G200 }}
              >
                <img src={c.img} alt={c.label} style={{ width:76, height:76, minWidth:76, borderRadius:8, objectFit:'cover', display:'block' }} />
                <div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:16, color:G900 }}>{c.label}</div>
                  <div style={{ fontFamily:'Poppins,monospace', fontSize:12, color:G500, marginTop:3 }}>{c.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div style={{ background:G900, color:WHITE, overflow:'hidden', whiteSpace:'nowrap', padding:'13px 0' }}>
        <div className="marquee-track">
          {['SCIENCE BACKED SUPPLEMENTS','CLINICALLY STUDIED INGREDIENTS','BUNDLE & SAVE','FREE SHIPPING FOR ORDERS ABOVE $100',
            'SCIENCE BACKED SUPPLEMENTS','CLINICALLY STUDIED INGREDIENTS','BUNDLE & SAVE','FREE SHIPPING FOR ORDERS ABOVE $100'].map((txt, i) => (
            <span key={i}>
              <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:16, textTransform:'uppercase', margin:'0 24px', letterSpacing:'.02em' }}>{txt}</span>
              <span style={{ color:RED_LIGHT, margin:'0 24px', fontWeight:800, fontSize:16 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== TRUST ROW ===== */}
      <section style={{ padding:'38px 0', borderBottom:`1px solid ${G200}` }}>
        <div style={WRAP}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, textAlign:'center' }}>
            {[
              { ic:'🇬🇧', t:'Formulated & Manufactured in the UK', s:'Rigorously tested, researched & developed' },
              { ic:'🔬', t:'Clinically Studied Ingredients',        s:'KSM-66®, Morosil®, Satireal™' },
              { ic:'🕌', t:'Halal-Conscious Formulation',           s:'Made with halal dietary needs in mind' },
              { ic:'🚚', t:'Free Shipping S$100+',                   s:'Subscribe & save 15%, cancel anytime' },
            ].map(item => (
              <div key={item.t}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform=''}
                style={{ transition:'transform .2s ease' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{item.ic}</div>
                <div style={{ fontWeight:700, fontSize:14, marginBottom:3, color:G900 }}>{item.t}</div>
                <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:G500 }}>{item.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTLY FORMULATED ===== */}
      <section style={{ padding:'70px 0' }}>
        <div style={WRAP}>
          <div style={{ textAlign:'center', marginBottom:38 }}>
            <span style={EYEBROW}>Expertly Formulated</span>
            <h2 style={{ ...H2, marginLeft:'auto', marginRight:'auto' }}>Elevate your expectations<br />with our meticulously crafted formula.</h2>
            <p style={{ ...P_BODY, maxWidth:600, marginLeft:'auto', marginRight:'auto' }}>We spared no expense in sourcing the highest quality ingredients, ensuring an unparalleled experience of efficacy and indulgence.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, textAlign:'center' }}>
            {[
              { ic:'🏆', t:'Quality Ingredients', s:'We meticulously source and select only the finest, premium-grade components from around the world.' },
              { ic:'📦', t:'Convenient',           s:'Effortlessly incorporate it into your daily regimen for all your weight loss goals.' },
              { ic:'🏭', t:'UK Factory Tour',      s:'Formulated and manufactured all the way in the United Kingdom to make you feel full longer.' },
              { ic:'🧪', t:'Tested & Proven',      s:'Rigorous testing, research and development to ensure results can be seen, not just dreamed of.' },
            ].map(item => (
              <div key={item.t}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform=''}
                style={{ transition:'transform .2s ease' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{item.ic}</div>
                <div style={{ fontWeight:700, fontSize:14, marginBottom:3, color:G900 }}>{item.t}</div>
                <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:G500 }}>{item.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUIZ CTA ===== */}
      <section id="quiz" style={{ position:'relative', overflow:'hidden', background:RED, color:WHITE, padding:'64px 0' }}>
        <div style={{ position:'absolute', borderRadius:'50%', width:420, height:420, background:'rgba(255,255,255,.1)', top:-200, right:-150, opacity:.12, pointerEvents:'none' }} />
        <div style={WRAP}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:40, flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:280 }}>
              <span style={{ ...EYEBROW, color:'#ffd4d2' }}>Find Your Fit</span>
              <h2 style={{ ...H2, color:WHITE }}>Built with our<br />nutritionist. For you.</h2>
              <p style={{ color:'rgba(255,255,255,.85)', fontSize:14, lineHeight:1.6, marginBottom:22, maxWidth:480 }}>
                A few quick questions about your goals, your days, and your sleep under two minutes, no measuring tape required.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:14, background:'rgba(255,255,255,.1)', borderRadius:10, padding:'14px 18px', border:'1px solid rgba(255,255,255,.2)', width:'fit-content' }}>
                <div style={{ fontSize:32 }}>⚕️</div>
                <div>
                  <div style={{ fontWeight:800, fontSize:14, color:WHITE }}>[Nutritionist Name] <span style={{ color:GOLD }}>✓ Verified</span></div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.7)', marginTop:2 }}>[Credential e.g. Registered Dietitian, Singapore Nutrition and Dietetics Association]</div>
                </div>
              </div>
            </div>
            <Link to="/pages/find-your-fit"
              style={{ fontWeight:700, fontSize:14, padding:'14px 26px', borderRadius:6, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer', background:WHITE, color:RED, border:`2px solid ${WHITE}`, transition:'.2s', textDecoration:'none', whiteSpace:'nowrap' }}>
              Take the 2-Minute Quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SHOP BY GOAL ===== */}
      <section style={{ padding:'70px 0' }}>
        <div style={WRAP}>
          <div style={{ marginBottom:38 }}>
            <span style={EYEBROW}>01 Shop by Goal</span>
            <h2 style={H2}>Every goal,<br />one home page.</h2>
            <p style={{ ...P_BODY, maxWidth:540 }}>Tell us what's bothering you tonight and we'll point you to the right formula no scrolling through the whole catalog required.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18 }}>
            {goalCards.map(g => (
              <div key={g.title} onClick={() => toCatalog(g.tab)}
                style={{ background:WHITE, border:`1px solid ${G200}`, borderRadius:10, overflow:'hidden', cursor:'pointer', position:'relative', display:'flex', flexDirection:'column', transition:'transform .25s ease, box-shadow .25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 26px 40px rgba(0,0,0,.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
              >
                <div style={{ height:130, overflow:'hidden' }}>
                  <img src={g.img} alt={g.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ position:'absolute', top:12, right:12, width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,.9)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, zIndex:2 }}>→</div>
                <div style={{ padding:'18px 18px 20px', flex:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:19, marginBottom:6, color:G900 }}>{g.title}</h3>
                  <p style={{ fontSize:14, color:G700, marginBottom:10, flex:1, lineHeight:1.5 }}>{g.desc}</p>
                  <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:RED, fontWeight:600 }}>{g.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL CATALOG ===== */}
      <section id="catalog" style={{ background:OFF, padding:'70px 0' }}>
        <div style={WRAP}>
          <div style={{ marginBottom:38 }}>
            <span style={EYEBROW}>02 The Full Range</span>
            <h2 style={H2}>Everything<br />we sell, browsable.</h2>
            <p style={{ ...P_BODY, maxWidth:560 }}>Fat burners, slimming drinks, meal replacements, and wellness rituals everything we make, in one place, no digging required.</p>
          </div>
          <div style={{ display:'flex', gap:8, marginBottom:34, flexWrap:'wrap' }}>
            {[{k:'all',label:'All Products'},{k:'burn',label:'Fat Burners'},{k:'slim',label:'Slimming Drinks'},{k:'well',label:'Wellness'},{k:'bundle',label:'Bundles'}].map(t => (
              <button key={t.k} onClick={() => setActiveTab(t.k)}
                style={{ fontFamily:'Poppins,monospace', fontSize:14, textTransform:'uppercase', letterSpacing:'.04em', padding:'10px 18px', border:`1.5px solid ${activeTab===t.k ? G900 : G300}`, borderRadius:20, cursor:'pointer', background:activeTab===t.k ? G900 : 'transparent', color:activeTab===t.k ? WHITE : G900, transition:'.15s' }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18 }}>
            {visible.map((p, i) => (
              <div key={`${p.name}-${i}`}
                style={{ background:WHITE, border:`1px solid ${G200}`, borderRadius:10, overflow:'hidden', transition:'transform .25s ease, box-shadow .25s ease', position:'relative' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform='translateY(-8px)'
                  e.currentTarget.style.boxShadow='0 22px 36px rgba(0,0,0,.12)'
                  const q = e.currentTarget.querySelector('.quickadd')
                  if (q) { q.style.opacity=1; q.style.transform='translateY(0) scale(1)' }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform=''
                  e.currentTarget.style.boxShadow=''
                  const q = e.currentTarget.querySelector('.quickadd')
                  if (q) { q.style.opacity=0; q.style.transform='translateY(8px) scale(.8)' }
                }}
              >
                <div style={{ aspectRatio:'1/1', position:'relative', overflow:'hidden', background:OFF, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {p.badge && <div style={{ position:'absolute', top:10, left:10, background:RED, color:WHITE, fontFamily:'Poppins,monospace', fontSize:14, fontWeight:700, padding:'4px 9px', borderRadius:12, zIndex:2 }}>{p.badge}</div>}
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'contain', padding:14 }} />
                  <button className="quickadd" onClick={e => e.stopPropagation()}
                    style={{ position:'absolute', bottom:10, right:10, width:34, height:34, borderRadius:'50%', background:G900, color:WHITE, border:'none', fontSize:16, cursor:'pointer', opacity:0, transform:'translateY(8px) scale(.8)', transition:'.2s', zIndex:2 }}>
                    +
                  </button>
                </div>
                <div style={{ padding:'14px 16px 16px' }}>
                  <div style={{ fontWeight:700, fontSize:14, marginBottom:4, lineHeight:1.3, color:G900 }}>{p.name}</div>
                  <div style={{ fontSize:14, color:RED, marginBottom:6 }}>★★★★★</div>
                  {p.perDay ? (
                    <>
                      <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:16, color:RED }}>
                        From ${p.perDay}<span style={{ fontWeight:600, fontSize:12, color:G500 }}>/day</span>
                      </div>
                      <div style={{ fontFamily:'Poppins,monospace', fontSize:12, color:G500, marginTop:2 }}>
                        {p.price}{!p.confirmed && <span style={{ color:G300 }}> · est.</span>}
                      </div>
                    </>
                  ) : (
                    <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:G900, fontWeight:600 }}>{p.price}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop:18, color:G500, fontSize:14 }}>Per-day pricing is based on the pack's lowest listed price. Marked "est." where the exact daily serving count needs confirming.</p>
        </div>
      </section>

      {/* ===== TIERED BESTSELLERS ===== */}
      <section style={{ background:G900, padding:'70px 0' }}>
        <div style={WRAP}>
          <div style={{ textAlign:'center', marginBottom:38 }}>
            <span style={{ ...EYEBROW, color:'#ff8a86' }}>03 Start Here</span>
            <h2 style={{ ...H2, color:WHITE, marginLeft:'auto', marginRight:'auto' }}>New here?<br />Three ways to begin.</h2>
            <p style={{ ...P_BODY, color:'rgba(255,255,255,.65)', maxWidth:560, marginLeft:'auto', marginRight:'auto' }}>Whether you're just curious or ready to commit, there's a way in that fits try one, subscribe for less, or go all in with a bundle.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, alignItems:'start' }}>
            {/* Single Pack */}
            <div
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform=''}
              style={{ background:OFF, border:`1px solid ${G200}`, borderRadius:12, padding:26, position:'relative', transition:'transform .25s ease' }}>
              <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:RED, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8, fontWeight:600 }}>Just Getting Started</div>
              <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:22, marginBottom:10, color:G900 }}>Single Pack</h3>
              <p style={{ fontSize:14, color:G700, marginBottom:16, lineHeight:1.5 }}>Try one formula, no commitment. Perfect for a first-time buyer testing the waters.</p>
              <ul style={{ marginBottom:20, padding:0 }}>
                {['Any single product, one-time purchase','Full ingredient transparency','Free shipping above $100'].map(li => (
                  <li key={li} style={{ listStyle:'none', fontSize:14, padding:'6px 0', borderBottom:`1px solid ${G200}`, display:'flex', gap:8 }}><span style={{ color:RED, fontWeight:800 }}>✓</span>{li}</li>
                ))}
              </ul>
              <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:26, color:G900 }}>From $22</span>
              </div>
              <a href="#catalog" onClick={e=>{e.preventDefault();toCatalog('all')}}
                style={{ display:'block', textAlign:'center', background:G900, color:WHITE, fontWeight:700, padding:13, borderRadius:8, transition:'.2s', textDecoration:'none', fontSize:14 }}>Shop Singles</a>
            </div>
            {/* Monthly Ritual – featured */}
            <div
              onMouseEnter={e => e.currentTarget.style.transform='scale(1.03) translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform='scale(1.03)'}
              style={{ background:OFF, border:`2px solid ${RED}`, borderRadius:12, padding:26, position:'relative', transform:'scale(1.03)', transition:'transform .25s ease' }}>
              <div style={{ position:'absolute', top:-13, left:24, background:RED, color:WHITE, fontFamily:'Poppins,monospace', fontSize:14, fontWeight:700, padding:'5px 12px', borderRadius:14, letterSpacing:'.05em' }}>MOST POPULAR</div>
              <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:RED, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8, fontWeight:600 }}>Subscribe &amp; Save</div>
              <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:22, marginBottom:10, color:G900 }}>Monthly Ritual</h3>
              <p style={{ fontSize:14, color:G700, marginBottom:16, lineHeight:1.5 }}>Lock in 15% off and never run out. Pause, skip, or cancel anytime no phone calls.</p>
              <ul style={{ marginBottom:20, padding:0 }}>
                {['15% off every recurring order','Priority stock on new launches','Free shipping above $100'].map(li => (
                  <li key={li} style={{ listStyle:'none', fontSize:14, padding:'6px 0', borderBottom:`1px solid ${G200}`, display:'flex', gap:8 }}><span style={{ color:RED, fontWeight:800 }}>✓</span>{li}</li>
                ))}
              </ul>
              <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:26, color:G900 }}>Save 15%</span>
                <span style={{ fontSize:14, textDecoration:'line-through', color:G500 }}>vs. one-time</span>
              </div>
              <a href="#catalog" onClick={e=>{e.preventDefault();toCatalog('all')}}
                style={{ display:'block', textAlign:'center', background:RED, color:WHITE, fontWeight:700, padding:13, borderRadius:8, transition:'.2s', textDecoration:'none', fontSize:14 }}>Start Subscription</a>
            </div>
            {/* Goal Stack Bundle */}
            <div
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform=''}
              style={{ background:OFF, border:`1px solid ${G200}`, borderRadius:12, padding:26, position:'relative', transition:'transform .25s ease' }}>
              <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:RED, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8, fontWeight:600 }}>Go All In</div>
              <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:22, marginBottom:10, color:G900 }}>Goal Stack Bundle</h3>
              <p style={{ fontSize:14, color:G700, marginBottom:16, lineHeight:1.5 }}>Combine a Fat Burner + Slimming Drink + Wellness formula into one daily stack.</p>
              <ul style={{ marginBottom:20, padding:0 }}>
                {['Up to 20% off vs. buying separately','One checkout, one delivery','Best for full lifestyle resets'].map(li => (
                  <li key={li} style={{ listStyle:'none', fontSize:14, padding:'6px 0', borderBottom:`1px solid ${G200}`, display:'flex', gap:8 }}><span style={{ color:RED, fontWeight:800 }}>✓</span>{li}</li>
                ))}
              </ul>
              <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:26, color:G900 }}>Save 20%</span>
                <span style={{ fontSize:14, textDecoration:'line-through', color:G500 }}>on bundles</span>
              </div>
              <a href="#catalog" onClick={e=>{e.preventDefault();toCatalog('bundle')}}
                style={{ display:'block', textAlign:'center', background:G900, color:WHITE, fontWeight:700, padding:13, borderRadius:8, transition:'.2s', textDecoration:'none', fontSize:14 }}>Build My Stack</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INGREDIENTS ===== */}
      <section style={{ background:OFF, padding:'64px 0' }}>
        <div style={WRAP}>
          <div style={{ marginBottom:28 }}>
            <span style={EYEBROW}>04 What's Actually Inside</span>
            <h2 style={H2}>The actives<br />doing the work.</h2>
            <p style={{ ...P_BODY, maxWidth:480 }}>No proprietary blends, no hidden doses six of the actives across our range.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:14 }}>
            {[
              { ic:'🌿', n:'KSM-66® Ashwagandha', d:'Relaxation' },
              { ic:'🍊', n:'Morosil®',             d:'Fat metabolism' },
              { ic:'☕', n:'Green Coffee Extract', d:'Energy metabolism' },
              { ic:'🍵', n:'Chamomile Extract',    d:'Calm' },
              { ic:'🦠', n:'FOS Prebiotic',        d:'Gut health' },
              { ic:'🥤', n:'30+ Active Formulas',  d:'Across the range' },
            ].map(item => (
              <div key={item.n}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor=RED }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor=G200 }}
                style={{ background:WHITE, border:`1px solid ${G200}`, borderRadius:8, padding:'16px 10px', textAlign:'center', transition:'transform .2s ease, border-color .2s ease' }}>
                <div style={{ fontSize:24, marginBottom:8 }}>{item.ic}</div>
                <div style={{ fontWeight:700, fontSize:14, marginBottom:3, lineHeight:1.25, color:G900 }}>{item.n}</div>
                <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:G500 }}>{item.d}</div>
              </div>
            ))}
          </div>
          <a href="https://shortcutx.co/pages/the-product"
            style={{ ...BTN_GHOST, marginTop:26 }}>See the Full Ingredient List →</a>
        </div>
      </section>

      {/* ===== BRAND COMPARISON ===== */}
      <section style={{ background:OFF, padding:'64px 0', borderTop:`1px solid ${G200}` }}>
        <div style={WRAP}>
          <div style={{ marginBottom:28 }}>
            <span style={EYEBROW}>05 How We Compare</span>
            <h2 style={H2}>Not your average<br />supplement brand.</h2>
            <p style={{ ...P_BODY, maxWidth:560 }}>Here's what you're actually getting when you choose Shortcutx over a typical off-the-shelf supplement.</p>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', minWidth:640 }}>
              <thead>
                <tr>
                  <th style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, textAlign:'left', fontFamily:'Poppins,monospace', fontSize:14, textTransform:'uppercase', letterSpacing:'.06em', color:G700, fontWeight:600 }}>What matters to you</th>
                  <th style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, textAlign:'left', fontFamily:'Poppins,monospace', fontSize:14, textTransform:'uppercase', letterSpacing:'.06em', color:G700, fontWeight:600, background:RED_PALE }}>Shortcutx</th>
                  <th style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, textAlign:'left', fontFamily:'Poppins,monospace', fontSize:14, textTransform:'uppercase', letterSpacing:'.06em', color:G700, fontWeight:600 }}>Typical Supplement Brand</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q:"How it's developed",     yes:"No OEM an in-house R&D process spanning months, testing multiple formulas until efficacy and efficiency are right", no:"Often OEM/white-label, same formula relabelled across brands" },
                  { q:"Where it's made",        yes:"Formulated & manufactured in the UK", no:"Often unspecified origin" },
                  { q:"What's actually in it",  yes:"Clinically studied actives, listed in full KSM-66®, Morosil®, Satireal™", no:"Proprietary blends, doses often undisclosed" },
                  { q:"Choosing the right one", yes:"Free quiz built with a real nutritionist, matched to your goals", no:"Guess and hope, or read 40 reviews first" },
                  { q:"Proof, not just promises", yes:"150,000+ boxes sold, #1 on Shopee Singapore, Watsons Singapore award winner", no:"Marketing claims, rarely independently verified" },
                ].map(row => (
                  <tr key={row.q}>
                    <td style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, fontSize:14, color:G900 }}>{row.q}</td>
                    <td style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, fontSize:14, background:RED_PALE, color:RED, fontWeight:700 }}>{row.yes}</td>
                    <td style={{ padding:'16px 18px', borderBottom:`1px solid ${G200}`, fontSize:14, color:G500 }}>{row.no}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="https://shortcutx.co/pages/the-product" style={{ ...BTN_GHOST, marginTop:22 }}>See the Full Comparison →</a>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef} style={{ background:G900, color:WHITE, padding:'80px 0' }}>
        <div style={WRAP}>
          <span style={{ fontFamily:'Poppins,monospace', fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'.1em', color:'#ff6b66', display:'block', marginBottom:8 }}>06 Why Singapore Chooses Shortcutx</span>
          <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(26px,3.2vw,40px)', color:WHITE, marginTop:10, lineHeight:1.1 }}>Built to be felt,<br />not just claimed.</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:30, marginTop:44 }}>
            {statsData.map((s, i) => (
              <div key={s.label}>
                <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:48, color:'#ff6b66', lineHeight:1 }}>
                  {s.prefix}{s.target===4.9 ? counts[i].toFixed(1) : Math.floor(counts[i])}{s.suffix}
                </div>
                <div style={{ fontSize:14, color:'rgba(255,255,255,.65)', marginTop:8, maxWidth:190 }}>{s.label}</div>
                <div style={{ height:5, background:'rgba(255,255,255,.15)', borderRadius:4, marginTop:14, overflow:'hidden' }}>
                  <div className="stat-bar" style={{ width: barsOn ? s.barW : '0%' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily:'Poppins,monospace', fontSize:14, color:'rgba(255,255,255,.4)', marginTop:34, maxWidth:640 }}>
            Real numbers, always. If we can't stand behind a figure, we won't publish it.
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section style={{ background:`linear-gradient(180deg,${RED_DARK},${RED} 40%,${RED_DARK})`, padding:'80px 0 56px', overflow:'hidden' }}>
        <div style={WRAP}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <span style={{ display:'inline-block', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', color:WHITE, fontFamily:'Poppins,monospace', fontSize:12, fontWeight:700, letterSpacing:'.08em', padding:'8px 20px', borderRadius:20, marginBottom:22 }}>TRUSTED BY SINGAPORE</span>
            <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'clamp(24px,3vw,34px)', color:'rgba(255,255,255,.92)', lineHeight:1.35, maxWidth:720, margin:'0 auto' }}>
              150,000+ Boxes. #1 On Shopee.<br />
              <span style={{ display:'block', fontFamily:"Georgia,'Times New Roman',serif", fontStyle:'italic', fontWeight:400, color:GOLD, fontSize:'1.15em', marginTop:6 }}>Backed By The Best.</span>
            </h2>
          </div>
          <div style={{ display:'flex', gap:20, overflowX:'auto', scrollSnapType:'x mandatory', paddingBottom:20, scrollbarWidth:'none' }}>
            {ambassadors.map(a => (
              <div key={a.name}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform=''}
                style={{ flex:'0 0 240px', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', borderRadius:12, overflow:'hidden', transition:'transform .25s ease', scrollSnapAlign:'start' }}>
                <div style={{ aspectRatio:'1/1', display:'flex', alignItems:'center', justifyContent:'center', background:a.grad, fontSize:44 }}>{a.emoji}</div>
                <div style={{ padding:'18px 18px 20px' }}>
                  <div style={{ fontWeight:800, fontSize:16, color:a.tbc?'#ffb3b0':WHITE, marginBottom:5, lineHeight:1.3, fontStyle:a.tbc?'italic':'normal' }}>{a.name}</div>
                  <div style={{ fontSize:12, color:a.tbc?'#ffb3b0':'rgba(255,255,255,.65)', lineHeight:1.4, marginBottom:12, minHeight:32, fontStyle:a.tbc?'italic':'normal' }}>{a.role}</div>
                  <span style={{ display:'inline-block', fontFamily:'Poppins,monospace', fontSize:12, fontWeight:700, letterSpacing:'.05em', color:WHITE, border:'1px solid rgba(255,255,255,.3)', padding:'5px 10px', borderRadius:20 }}>{a.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED IN ===== */}
      <section style={{ padding:'36px 0', borderBottom:`1px solid ${G200}`, textAlign:'center' }}>
        <div style={WRAP}>
          <div style={{ fontFamily:'Poppins,monospace', fontSize:12, letterSpacing:'.12em', color:G500, fontWeight:600, marginBottom:20 }}>AS FEATURED IN &amp; SEEN ON</div>
          <img src="https://shortcutx.co/cdn/shop/files/featured_logos.png?width=900" alt="As featured in"
            style={{ width:'100%', maxWidth:900, height:'auto', margin:'0 auto', opacity:.88 }}
            onError={e => { e.target.style.display='none' }} />
        </div>
      </section>

      {/* ===== REAL RESULTS ===== */}
      <section style={{ background:OFF, padding:'64px 0' }}>
        <div style={WRAP}>
          <div style={{ marginBottom:28 }}>
            <span style={EYEBROW}>08 Real Results</span>
            <h2 style={H2}>Video stories from<br />actual customers.</h2>
            <p style={{ ...P_BODY, maxWidth:520 }}>Real people, real routines, on camera watch the full set on your Real Results page.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18 }}>
            {[0,1,2,3].map(i => (
              <a key={i} href="https://shortcutx.co/pages/real-results"
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 20px 34px rgba(0,0,0,.18)' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
                style={{ aspectRatio:'3/4', borderRadius:12, background:`linear-gradient(150deg,${G900},${RED_DARK})`, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', cursor:'pointer', transition:'transform .25s ease, box-shadow .25s ease', textDecoration:'none' }}>
                <span style={{ width:52, height:52, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'2px solid rgba(255,255,255,.4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, color:WHITE }}>▶</span>
              </a>
            ))}
          </div>
          <a href="https://shortcutx.co/pages/real-results" style={{ ...BTN_GHOST, marginTop:22 }}>Watch All Real Results →</a>
        </div>
      </section>

      {/* ===== SHORTCUTX IRL ===== */}
      <section style={{ position:'relative', overflow:'hidden', padding:'64px 0', background:`linear-gradient(155deg,${G900} 55%,${RED_DARK} 140%)`, color:WHITE }}>
        <div style={{ position:'absolute', width:420, height:420, borderRadius:'50%', background:RED_LIGHT, top:-180, right:-140, opacity:.14, pointerEvents:'none' }} />
        <div style={WRAP}>
          <div style={{ marginBottom:28 }}>
            <img src="https://shortcutx.co/cdn/shop/files/irl_logo.png?v=1783492137&width=300" alt="Shortcutx IRL"
              style={{ height:32, width:'auto', marginBottom:16, filter:'brightness(0) invert(1)' }}
              onError={e => e.target.style.display='none'} />
            <span style={{ ...EYEBROW, color:'#ff6b66' }}>09 Shortcutx IRL</span>
            <h2 style={{ ...H2, color:WHITE }}>Momentum,<br />multiplied.</h2>
            <p style={{ color:'rgba(255,255,255,.7)', fontSize:14, lineHeight:1.6, maxWidth:560 }}>From the screen to the streets this is Shortcutx, in real life. Train alongside real athletes, not just influencers on a screen.</p>
          </div>
          {/* Event card */}
          <div
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 24px 48px rgba(0,0,0,.3)'; e.currentTarget.style.borderColor='rgba(255,255,255,.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderColor='rgba(255,255,255,.15)' }}
            style={{ display:'grid', gridTemplateColumns:'380px 1fr', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.15)', borderRadius:14, overflow:'hidden', position:'relative', zIndex:1, transition:'transform .25s ease, box-shadow .25s ease, border-color .25s ease' }}>
            <div style={{ position:'relative', background:`linear-gradient(150deg,${RED},${RED_DARK})`, display:'flex', alignItems:'center', justifyContent:'center', minHeight:280, fontSize:64 }}>
              🥊
              <span style={{ position:'absolute', top:14, left:14, background:'rgba(255,255,255,.15)', backdropFilter:'blur(4px)', fontFamily:'Poppins,monospace', fontSize:12, fontWeight:600, letterSpacing:'.06em', padding:'6px 12px', borderRadius:20, color:WHITE }}>BOXING</span>
            </div>
            <div style={{ padding:'28px 30px', display:'flex', flexDirection:'column', justifyContent:'center', background:WHITE, color:G900 }}>
              <span className="live-pulse" style={{ display:'inline-flex', alignItems:'center', gap:6, background:RED_PALE, border:`1px solid ${RED_PALE2}`, color:RED, fontFamily:'Poppins,monospace', fontSize:12, fontWeight:700, letterSpacing:'.04em', padding:'6px 12px', borderRadius:20, marginBottom:14, width:'fit-content' }}>
                🔴 REGISTRATION OPEN
              </span>
              <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(24px,2.6vw,32px)', lineHeight:1.05, marginBottom:8, color:G900 }}>Boxing with Fash</div>
              <div style={{ fontSize:14, color:G700, marginBottom:18, lineHeight:1.5 }}>WBC Female Asia Continental Champion Efasha "Fash The Face" Kamarudin</div>
              <div style={{ display:'grid', gap:9, marginBottom:16 }}>
                {[
                  ['When', 'Sat, 15 Aug 2026 · 9:30–11:00AM'],
                  ['Where','Spartans Boxing Club, Joo Chiat'],
                  ['Price','$29 for 1 pax · $43.50 for 2 pax'],
                ].map(([lbl, val]) => (
                  <div key={lbl} style={{ fontSize:14, color:G900 }}>
                    <span style={{ display:'inline-block', fontFamily:'Poppins,monospace', fontSize:12, textTransform:'uppercase', letterSpacing:'.06em', color:RED, width:64 }}>{lbl}</span>{val}
                  </div>
                ))}
              </div>
              <div style={{ fontFamily:'Poppins,monospace', fontSize:12, color:RED_DARK, marginBottom:20, fontWeight:600 }}>⚡ Limited slots priority by registration order</div>
              <a href="https://shortcutx.co/pages/irl"
                style={{ background:RED, color:WHITE, fontWeight:800, textAlign:'center', display:'block', padding:'16px 20px', borderRadius:6, border:`2px solid ${RED}`, textDecoration:'none', fontSize:14, transition:'.2s' }}>
                Register for Boxing with Fash →
              </a>
            </div>
          </div>
          {/* Sports lineup */}
          <div style={{ marginTop:32, position:'relative', zIndex:1 }}>
            <div style={{ fontFamily:'Poppins,monospace', fontSize:12, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:20 }}>The Roadmap More Ways to Move</div>
            <div style={{ position:'relative', display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:12 }}>
              <div style={{ position:'absolute', top:26, left:'8%', right:'8%', height:2, background:'rgba(255,255,255,.15)', zIndex:0 }} />
              {[
                { ic:'🥊', name:'Boxing',    status:'Live Now',    live:true },
                { ic:'⚽', name:'Futsal',    status:'Next Up',     live:false },
                { ic:'🧘🏻‍♀️',name:'Pilates',  status:'Coming Soon', live:false },
                { ic:'🥋', name:'Muay Thai', status:'Coming Soon', live:false },
                { ic:'🏃', name:'Running',   status:'Coming Soon', live:false },
                { ic:'🧘', name:'Recovery',  status:'Coming Soon', live:false },
              ].map(s => (
                <div key={s.name}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(255,255,255,.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor=s.live?'rgba(255,107,102,.5)':'rgba(255,255,255,.12)' }}
                  style={{ position:'relative', zIndex:1, background:s.live?'rgba(255,107,102,.12)':'rgba(255,255,255,.05)', border:`1px solid ${s.live?'rgba(255,107,102,.5)':'rgba(255,255,255,.12)'}`, borderRadius:10, padding:'16px 10px', textAlign:'center', transition:'transform .2s ease, border-color .2s ease', boxShadow:s.live?'0 0 0 3px rgba(255,107,102,.1)':'none' }}>
                  <span style={{ fontSize:24, display:'block', marginBottom:8 }}>{s.ic}</span>
                  <div style={{ fontWeight:700, fontSize:14, color:WHITE, marginBottom:5 }}>{s.name}</div>
                  <div style={{ fontFamily:'Poppins,monospace', fontSize:12, color:s.live?'#ff8a86':'rgba(255,255,255,.45)', fontWeight:s.live?700:400 }}>{s.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY COLLAGE ===== */}
      <section style={{ background:RED, padding:'88px 0 0', overflow:'hidden' }}>
        <div style={WRAP}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(26px,4.4vw,50px)', lineHeight:1.08, textTransform:'uppercase', letterSpacing:'-.01em' }}>
              <span style={{ color:GOLD, display:'block' }}>150,000+ Boxes.</span>
              <span style={{ color:WHITE, display:'block' }}>We've Been Getting Around.</span>
            </h2>
            <div style={{ display:'flex', justifyContent:'center', gap:10, marginTop:20 }}>
              {[
                { href:'https://www.instagram.com/shortcutx.co/', label:'IG' },
                { href:'https://www.tiktok.com/@shortcutx.co',   label:'TT' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.background=G100; e.currentTarget.style.color=G900 }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='rgba(255,255,255,.12)'; e.currentTarget.style.color=WHITE }}
                  style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', color:WHITE, fontFamily:'Poppins,monospace', fontSize:12, fontWeight:700, padding:'8px 16px', borderRadius:20, textDecoration:'none', transition:'transform .2s ease, background .2s ease' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'flex-end', padding:'0 20px 40px', marginTop:6 }}>
          {[
            { src:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=500',                                alt:'Max Fat Burner Berry Punch', rot:'-9deg', mb:6,  z:1 },
            { src:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=500',                                alt:'Blackcurrant',              rot:'-4deg', mb:34, z:2 },
            { src:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500',                                   alt:'Max+ Fat Burner',           rot:'2deg',  mb:54, z:3 },
            { src:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500',                alt:'Night Hot Chocolate',        rot:'-3deg', mb:26, z:2 },
            { src:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500',                                alt:'Detox Juice',               rot:'8deg',  mb:0,  z:1 },
          ].map((img, i) => (
            <img key={i} src={img.src} alt={img.alt}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-16px) rotate(0deg) scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform=`rotate(${img.rot})`}
              style={{ width:220, height:270, objectFit:'cover', borderRadius:14, boxShadow:'0 22px 40px rgba(0,0,0,.18)', border:`6px solid ${WHITE}`, margin:'0 -22px', transition:'transform .3s ease', position:'relative', cursor:'default', transform:`rotate(${img.rot})`, zIndex:img.z, marginBottom:img.mb }} />
          ))}
        </div>
      </section>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden" style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:100, background:WHITE, borderTop:`1px solid ${G200}`, display:'flex', gap:10, padding:'12px 16px', boxShadow:'0 -4px 20px rgba(0,0,0,.08)' }}>
        <button onClick={() => toCatalog('all')}
          style={{ flex:1, fontWeight:700, fontSize:14, padding:'14px 26px', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer', background:'transparent', color:G900, border:`2px solid ${G900}`, transition:'.2s' }}>
          Shop Now
        </button>
        <Link to="/pages/find-your-fit"
          style={{ flex:1, fontWeight:700, fontSize:14, padding:'14px 26px', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer', background:RED, color:WHITE, border:`2px solid ${RED}`, transition:'.2s', textDecoration:'none' }}>
          Find Your Fit
        </Link>
      </div>
    </>
  )
}
