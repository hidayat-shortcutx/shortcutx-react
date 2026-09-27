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
  { name:'Advanced Fat Burner Bundle',          price:'Save up to 10%',        perDay:null,   confirmed:false, cat:'bundle', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=600' },
]

const catChips = [
  { tab:'burn',   label:'Burn Fat',         count:'6 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200' },
  { tab:'slim',   label:'Slimming Drinks',  count:'4 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=200' },
  { tab:'well',   label:'Wellness & Sleep', count:'2 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=200' },
  { tab:'bundle', label:'Bundles',          count:'Save up to 10%',        img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=200' },
]

const goalCards = [
  { tab:'burn',   title:'Burn Fat',         desc:'Max+ Fat Burner Juice, Berry Punch, Blackcurrant, Apple Cider, Lychee Lemon', count:'6 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500' },
  { tab:'slim',   title:'Slimming Drinks',  desc:'Detox Juice, De-Bloat White Grape, Flat Tummy Shakes',                        count:'4 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500' },
  { tab:'well',   title:'Wellness & Sleep', desc:'Night Hot Chocolate, Night Fat Burner Juice',                                  count:'2 formulas · from $22', img:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500' },
  { tab:'bundle', title:'Bundles',          desc:'Stack your goals, save on every pack',                                          count:'Save up to 10%',        img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=500' },
]

const heroSlides = [
  {
    bg: 'linear-gradient(135deg,#9b0d0c 0%,#6a0808 100%)',
    img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=700',
    eyebrow: "Rated 4.9 · Singapore's #1 Supplement",
    headline: "Singapore's #1\nBest-Selling\nWeight Management\nSupplements",
    sub: "Burn more calories with Singapore's most trusted weight management supplements.",
    cta: 'Shop All Products', ctaHref: '#catalog',
    cta2: 'Find Your Fit →', cta2Href: '/pages/find-your-fit',
  },
  {
    bg: 'linear-gradient(135deg,#082a1c 0%,#0a3322 100%)',
    img: 'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=700',
    eyebrow: 'NEW LAUNCH · Night-time Fat Burning',
    headline: 'Better sleep.\nBetter burns.',
    sub: 'Rich hot chocolate that burns fat while you rest. KSM-66® Ashwagandha for deep sleep & cortisol control.',
    cta: 'Shop Night Hot Chocolate', ctaHref: '/products/night-hot-chocolate',
  },
  {
    bg: 'linear-gradient(135deg,#1a0800 0%,#2e1200 100%)',
    img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=700',
    eyebrow: 'SPEND MORE SAVE MORE · Valid till 4 Oct 2026',
    headline: 'Stock up.\nSave more.',
    sub: 'Spend $60 save $5 · Spend $120 save $12 · Spend $180 save $25. No code needed — auto-applied at checkout.',
    cta: 'Shop All Products', ctaHref: '#catalog',
  },
]

const testimonials = [
  { name:'Wahidah I.',     initials:'WI', product:'Gas Relief', quote:"I've tried so many supplements but Shortcutx Max+ actually works. Lost 4kg in 6 weeks and I didn't have to starve myself. The taste is great too." },
  { name:'Noredahwati K.', initials:'NK', product:'Detox',      quote:"The Detox Juice is now a non-negotiable in my mornings. I feel lighter, less bloated, and my energy is up. My whole family has noticed the difference." },
  { name:'Melissa B.S.',   initials:'MB', product:'Immunity',   quote:"Immunity Plus has been a game changer. I used to fall sick every month — since starting, I've been consistent and my body just feels stronger." },
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
  const [shopActive, setShopActive] = useState(2)
  const shopRef = useRef(null)
  const { ref: statsRef, counts, barsOn } = useStatsAnimation()

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const el = shopRef.current
    if (!el) return
    const CARD_W = 196, GAP = 12
    const target = shopActive * (CARD_W + GAP) - (el.clientWidth / 2 - CARD_W / 2)
    el.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }, [shopActive])

  const visible = activeTab === 'all' ? products : products.filter(p => p.cat === activeTab)

  function toCatalog(tab) {
    setActiveTab(tab)
    document.getElementById('catalog')?.scrollIntoView({ behavior:'smooth' })
  }

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section id="top" style={{ position:'relative', overflow:'hidden', userSelect:'none' }}>

        {heroSlides.map((slide, i) => (
          <div key={i} style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            minHeight: 640,
            opacity: heroIdx === i ? 1 : 0,
            transition: 'opacity .7s ease',
            pointerEvents: heroIdx === i ? 'auto' : 'none',
            background: slide.bg,
          }}>
            {/* Product image — right side, anchored to bottom */}
            <img src={slide.img} alt=""
              style={{ position:'absolute', right:'3%', bottom:0, height:'95%', width:'46%', objectFit:'contain', objectPosition:'center bottom', display:'block', pointerEvents:'none' }} />
            {/* Left-to-transparent overlay for text legibility */}
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,rgba(0,0,0,.38) 0%,rgba(0,0,0,.18) 52%,rgba(0,0,0,0) 100%)', pointerEvents:'none' }} />
            {/* Content */}
            <div style={{ ...WRAP, position:'relative', zIndex:1, display:'flex', alignItems:'center', minHeight:640, padding:'80px 28px' }}>
              <div style={{ maxWidth:540 }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.6)', marginBottom:20, fontFamily:'Poppins,sans-serif' }}>
                  {slide.eyebrow}
                </div>
                <h1 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(40px,5.5vw,70px)', lineHeight:.97, letterSpacing:'-.03em', color:WHITE, marginBottom:22, margin:'0 0 22px' }}>
                  {slide.headline.split('\n').map((l, li, arr) => (
                    <span key={li}>{l}{li < arr.length - 1 && <br />}</span>
                  ))}
                </h1>
                <p style={{ fontSize:16, color:'rgba(255,255,255,.8)', marginBottom:34, lineHeight:1.65, maxWidth:420 }}>{slide.sub}</p>
                <div style={{ display:'flex', gap:14, flexWrap:'wrap', alignItems:'center' }}>
                  <a href={slide.ctaHref}
                    onClick={slide.ctaHref === '#catalog' ? e => { e.preventDefault(); toCatalog('all') } : undefined}
                    style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:14, padding:'15px 30px', borderRadius:6, background:WHITE, color:G900, border:'none', cursor:'pointer', textDecoration:'none', display:'inline-block', letterSpacing:'.01em', transition:'opacity .2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity='.88'}
                    onMouseLeave={e => e.currentTarget.style.opacity='1'}
                  >{slide.cta}</a>
                  {slide.cta2 && (
                    <Link to={slide.cta2Href}
                      style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:14, color:'rgba(255,255,255,.78)', textDecoration:'none', borderBottom:'1px solid rgba(255,255,255,.38)', paddingBottom:2 }}
                    >{slide.cta2}</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left arrow */}
        <button onClick={() => setHeroIdx(i => (i - 1 + heroSlides.length) % heroSlides.length)}
          style={{ position:'absolute', left:20, top:'50%', transform:'translateY(-50%)', zIndex:20, width:44, height:44, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'1.5px solid rgba(255,255,255,.3)', color:WHITE, fontSize:22, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)', transition:'background .2s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,.3)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,.15)'}
        >‹</button>

        {/* Right arrow */}
        <button onClick={() => setHeroIdx(i => (i + 1) % heroSlides.length)}
          style={{ position:'absolute', right:20, top:'50%', transform:'translateY(-50%)', zIndex:20, width:44, height:44, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'1.5px solid rgba(255,255,255,.3)', color:WHITE, fontSize:22, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)', transition:'background .2s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,.3)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,.15)'}
        >›</button>

        {/* Dot nav */}
        <div style={{ position:'absolute', bottom:22, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8, zIndex:20 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setHeroIdx(i)}
              style={{ width: heroIdx === i ? 28 : 8, height:8, borderRadius:4, border:'none', cursor:'pointer', transition:'all .3s ease', background: heroIdx === i ? WHITE : 'rgba(255,255,255,.4)', padding:0 }} />
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
            <span style={EYEBROW}>Why Shortcutx</span>
            <h2 style={{ ...H2, marginLeft:'auto', marginRight:'auto' }}>No shortcuts on ingredients.<br />Just on body fat.</h2>
            <p style={{ ...P_BODY, maxWidth:520, marginLeft:'auto', marginRight:'auto' }}>Real ingredients. Real results. We made it easy to stay consistent — so you actually do.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, textAlign:'center' }}>
            {[
              { img:'https://shortcutx.co/cdn/shop/files/max_studio.webp?v=1778207170&width=400',                              t:'Premium Ingredients', s:'Only the good stuff — no fillers, no fluff. Clinically studied ingredients that actually do something.' },
              { img:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-01.jpg?v=1779346704&width=400',                   t:'Easy to Use',          s:'One sachet, done. Toss it in your bag and stay on track wherever you are.' },
              { img:'https://shortcutx.co/cdn/shop/files/SSECONDARY_image_Max_-07.webp?v=1778207184&width=400',               t:'Made in the UK',       s:'Not some random factory. Formulated and manufactured in the UK — every batch.' },
              { img:'https://shortcutx.co/cdn/shop/files/4_6c92ed2f-6b45-4979-a5ea-13b56cf440ac.webp?v=1778207212&width=400', t:'Science-Backed',       s:"We don't just promise results — we show receipts. Tested, researched, proven." },
            ].map(item => (
              <div key={item.t}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform=''}
                style={{ transition:'transform .2s ease' }}>
                <img src={item.img} alt={item.t} style={{ width:'100%', height:180, objectFit:'cover', borderRadius:12, marginBottom:14, display:'block' }} />
                <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:G900 }}>{item.t}</div>
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
                {['Up to 10% off vs. buying separately','One checkout, one delivery','Best for full lifestyle resets'].map(li => (
                  <li key={li} style={{ listStyle:'none', fontSize:14, padding:'6px 0', borderBottom:`1px solid ${G200}`, display:'flex', gap:8 }}><span style={{ color:RED, fontWeight:800 }}>✓</span>{li}</li>
                ))}
              </ul>
              <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:26, color:G900 }}>Save 10%</span>
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

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ background:'#f7f4ef', padding:'70px 0' }}>
        <div style={WRAP}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:44, flexWrap:'wrap', gap:16 }}>
            <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(28px,3.5vw,44px)', lineHeight:1.1, color:G900, margin:0 }}>
              In their <em style={{ fontStyle:'italic', color:'#8c5e2a' }}>own words.</em>
            </h2>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ fontSize:14, color:G500, letterSpacing:'.04em' }}>1 — {testimonials.length}</span>
              <button style={{ width:40, height:40, borderRadius:'50%', border:`1.5px solid ${G300}`, background:WHITE, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, color:G700, transition:'border-color .2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=G700}
                onMouseLeave={e => e.currentTarget.style.borderColor=G300}>←</button>
              <button style={{ width:40, height:40, borderRadius:'50%', border:`1.5px solid ${G300}`, background:WHITE, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, color:G700, transition:'border-color .2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=G700}
                onMouseLeave={e => e.currentTarget.style.borderColor=G300}>→</button>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background:WHITE, border:'1px solid #e8e2da', borderRadius:14, padding:'28px 26px', display:'flex', flexDirection:'column', gap:18 }}>
                <div style={{ color:'#c17f3a', fontSize:18, letterSpacing:2 }}>★★★★★</div>
                <p style={{ fontSize:15, color:G700, lineHeight:1.7, margin:0, flex:1 }}>"{t.quote}"</p>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:44, height:44, borderRadius:'50%', background:'#e8e2da', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:13, color:G700, flexShrink:0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:14, color:G900 }}>{t.name}</div>
                    <div style={{ fontSize:12, color:G500, marginTop:2 }}>Verified Purchase · {t.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHORTCUTX IRL ===== */}
      <section style={{ background:'#0d0d0d', overflow:'hidden' }}>
        {/* Split: left image panel | right event card */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
          {/* Left panel */}
          <div style={{ position:'relative', background:'#111', overflow:'hidden', minHeight:460 }}>
            <img
              src="https://shortcutx.co/cdn/shop/files/efasha_irl.jpg"
              alt=""
              style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.65 }}
              onError={e => e.target.style.display='none'}
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,.75) 0%, rgba(0,0,0,.25) 100%)' }} />
            <div style={{ position:'relative', zIndex:1, padding:'48px 44px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', boxSizing:'border-box' }}>
              <div>
                <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(24px,2.8vw,38px)', textTransform:'uppercase', lineHeight:1.05, color:WHITE, marginBottom:18 }}>
                  DON'T JUST WATCH.<br /><span style={{ color:RED }}>STEP INTO IT.</span>
                </div>
                <p style={{ fontSize:14, color:'rgba(255,255,255,.7)', lineHeight:1.65, maxWidth:320, marginBottom:26 }}>
                  Train alongside athletes and a community that moves with purpose.
                </p>
                <a href="https://shortcutx.co/pages/irl"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, background:RED, color:WHITE, fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:14, padding:'13px 22px', borderRadius:6, textDecoration:'none' }}>
                  EXPLORE IRL →
                </a>
              </div>
              <div style={{ marginTop:32 }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:6 }}>FIRST UP:</div>
                <div style={{ fontSize:14, color:'rgba(255,255,255,.7)', fontWeight:600, lineHeight:1.4 }}>Boxing with Efasha "Fash The Face" Kamarudin</div>
              </div>
            </div>
          </div>
          {/* Right panel: event card */}
          <div style={{ background:WHITE, padding:'44px 44px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:RED_PALE, border:`1px solid ${RED_PALE2}`, color:RED, fontFamily:'Poppins,monospace', fontSize:12, fontWeight:700, letterSpacing:'.04em', padding:'6px 12px', borderRadius:20, marginBottom:16, width:'fit-content' }}>
              🔴 REGISTRATION OPEN
            </span>
            <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(22px,2.4vw,32px)', lineHeight:1.05, marginBottom:8, color:G900 }}>Boxing with Fash</h3>
            <p style={{ fontSize:14, color:G700, marginBottom:22, lineHeight:1.5 }}>WBC Female Asia Continental Champion Efasha "Fash The Face" Kamarudin</p>
            <div style={{ display:'grid', gap:11, marginBottom:18 }}>
              {[
                ['WHEN',  'Sat, 15 Aug 2026 · 9:30–11:00AM'],
                ['WHERE', 'Spartans Boxing Club, Joo Chiat'],
                ['PRICE', '$29 for 1 pax · $43.50 for 2 pax'],
              ].map(([lbl, val]) => (
                <div key={lbl} style={{ fontSize:14, color:G900, display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{ fontFamily:'Poppins,monospace', fontSize:12, textTransform:'uppercase', letterSpacing:'.06em', color:RED, minWidth:56, fontWeight:700, paddingTop:1 }}>{lbl}</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize:12, color:RED_DARK, marginBottom:22, fontWeight:600 }}>⚡ Limited slots priority by registration order</div>
            <a href="https://shortcutx.co/pages/irl"
              style={{ background:RED, color:WHITE, fontWeight:800, textAlign:'center', display:'block', padding:'16px 20px', borderRadius:6, textDecoration:'none', fontSize:14, transition:'.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity='.88'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}>
              Register for Boxing with Fash →
            </a>
          </div>
        </div>
        {/* Bottom 3-column info */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:'1px solid rgba(255,255,255,.08)' }}>
          {[
            { label:'WHAT IT IS',         title:'Real events.\nReal venues.',   body:'Shortcutx IRL is our in-person fitness series — workouts, classes, and community sessions held across Singapore with real sports facilities and credentialed coaches.' },
            { label:'WHO YOU TRAIN WITH',  title:'Athletes,\nnot influencers.', body:'Every session is led by a credentialed athlete — champions and professionals who actually compete. You get access to their training, not just their feed.' },
            { label:'HOW TO JOIN',         title:'Register.\nShow up. Train.',  body:'Sessions are ticketed and open to the Shortcutx community. Slots are limited — register early, bring a friend, and get moving alongside people who mean it.' },
          ].map((col, i) => (
            <div key={col.label} style={{ padding:'36px 40px', borderRight: i < 2 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:14 }}>{col.label}</div>
              <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(18px,1.8vw,23px)', color:WHITE, lineHeight:1.2, marginBottom:14 }}>
                {col.title.split('\n').map((l, li, arr) => <span key={li}>{l}{li < arr.length-1 && <br />}</span>)}
              </div>
              <p style={{ fontSize:14, color:'rgba(255,255,255,.5)', lineHeight:1.65, margin:0 }}>{col.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SHOPPABLE VIDEOS ===== */}
      <section style={{ background:WHITE, padding:'80px 0 72px', overflow:'hidden' }}>
        <div style={WRAP}>
          <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(28px,3.5vw,46px)', lineHeight:1.1, color:G900, margin:'0 0 48px', textAlign:'center' }}>
            Shop with <em style={{ fontStyle:'italic', color:RED }}>real results.</em>
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position:'relative' }}>
          {/* Prev arrow */}
          <button onClick={() => setShopActive(a => Math.max(0, a - 1))}
            style={{ position:'absolute', left:'clamp(8px,2vw,40px)', top:'50%', transform:'translateY(-50%)', zIndex:10, width:44, height:44, borderRadius:'50%', background:WHITE, border:`1.5px solid ${G300}`, boxShadow:'0 4px 14px rgba(0,0,0,.1)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, color:G700, transition:'background .2s, border-color .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background=G900; e.currentTarget.style.color=WHITE; e.currentTarget.style.borderColor=G900 }}
            onMouseLeave={e => { e.currentTarget.style.background=WHITE; e.currentTarget.style.color=G700; e.currentTarget.style.borderColor=G300 }}>
            ‹
          </button>
          {/* Next arrow */}
          <button onClick={() => setShopActive(a => Math.min(7, a + 1))}
            style={{ position:'absolute', right:'clamp(8px,2vw,40px)', top:'50%', transform:'translateY(-50%)', zIndex:10, width:44, height:44, borderRadius:'50%', background:WHITE, border:`1.5px solid ${G300}`, boxShadow:'0 4px 14px rgba(0,0,0,.1)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, color:G700, transition:'background .2s, border-color .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background=G900; e.currentTarget.style.color=WHITE; e.currentTarget.style.borderColor=G900 }}
            onMouseLeave={e => { e.currentTarget.style.background=WHITE; e.currentTarget.style.color=G700; e.currentTarget.style.borderColor=G300 }}>
            ›
          </button>

          {/* Track wrapper — hides scrollbar */}
          <div style={{ overflow:'hidden' }}>
            <div ref={shopRef} style={{ display:'flex', gap:12, padding:'28px 120px 48px', marginBottom:'-20px', paddingBottom:'48px', overflowX:'scroll', scrollbarWidth:'none', msOverflowStyle:'none' }}>
              {[
                { thumb:'https://shortcutx.co/cdn/shop/files/max_studio.webp?v=1778207170&width=600',                                                 chipImg:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200',                                           name:'Max+ Fat Burner',      price:'From $63.00', href:'https://shortcutx.co/products/max-fat-burner-juice'          },
                { thumb:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=600',                                      chipImg:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=200',                                      name:'Max Berry Punch',      price:'From $27.50', href:'https://shortcutx.co/products/max-fat-burner-berry-punch'  },
                { thumb:'https://shortcutx.co/cdn/shop/files/SSECONDARY_image_Max_-07.webp?v=1778207184&width=600',                                   chipImg:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200',                                           name:'Max+ Fat Burner',      price:'From $63.00', href:'https://shortcutx.co/products/max-fat-burner-juice'          },
                { thumb:'https://shortcutx.co/cdn/shop/files/4_6c92ed2f-6b45-4979-a5ea-13b56cf440ac.webp?v=1778207212&width=700',                     chipImg:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200',                                           name:'Max+ Fat Burner',      price:'From $63.00', href:'https://shortcutx.co/products/max-fat-burner-juice'          },
                { thumb:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=600',                      chipImg:'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=200',                      name:'Night Hot Chocolate',  price:'$45.00',      href:'https://shortcutx.co/products/night-hot-chocolate'            },
                { thumb:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=600',                                      chipImg:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-04.jpg?v=1779346704&width=200',                                      name:'Max Blackcurrant',     price:'From $27.50', href:'https://shortcutx.co/products/max-fat-burner-juice'          },
                { thumb:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=600',                                      chipImg:'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=200',                                      name:'Detox Juice',          price:'From $22.00', href:'https://shortcutx.co/products/detox-juice'                   },
                { thumb:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=600',                                         chipImg:'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=200',                                           name:'Max+ Fat Burner',      price:'From $63.00', href:'https://shortcutx.co/products/max-fat-burner-juice'          },
              ].map((v, i) => {
                const isAct = i === shopActive
                return (
                  <a key={i} href={v.href} onClick={e => { e.preventDefault(); setShopActive(i) }}
                    style={{ flex:'0 0 196px', aspectRatio:'3/4', borderRadius:18, overflow:'hidden', position:'relative', display:'block', textDecoration:'none', border:`3px solid ${WHITE}`, boxShadow:isAct?'0 24px 48px rgba(0,0,0,.18)':'0 4px 14px rgba(0,0,0,.07)', transform:isAct?'translateY(-16px) scale(1.07)':'translateY(0) scale(1)', filter:isAct?'none':'grayscale(.85)', transition:'transform .4s ease, box-shadow .4s ease, filter .4s ease', cursor:'pointer' }}>
                    <img src={v.thumb} alt={v.name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,.7) 100%)' }} />
                    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:44, height:44, borderRadius:'50%', background:'rgba(255,255,255,.18)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', opacity:isAct?1:.5, transition:'opacity .4s' }}>
                      <div style={{ width:0, height:0, borderTop:'8px solid transparent', borderBottom:'8px solid transparent', borderLeft:`14px solid ${WHITE}`, marginLeft:3 }} />
                    </div>
                    <div style={{ position:'absolute', bottom:10, left:8, right:8, background:'rgba(255,255,255,.93)', backdropFilter:'blur(10px)', borderRadius:10, padding:'7px 8px', display:'flex', alignItems:'center', gap:8 }}>
                      <img src={v.chipImg} alt="" style={{ width:34, height:34, borderRadius:6, objectFit:'cover', flexShrink:0 }} />
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:11, color:G900, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{v.name}</div>
                        <div style={{ fontSize:11, color:G700, marginTop:1 }}>{v.price}</div>
                      </div>
                      <div style={{ width:24, height:24, borderRadius:5, background:isAct?RED:G200, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:12, color:isAct?WHITE:G700, transition:'background .4s, color .4s' }}>↗</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots + social */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20, marginTop:4 }}>
          <div style={{ display:'flex', gap:7 }}>
            {Array.from({ length:8 }, (_, i) => (
              <button key={i} onClick={() => setShopActive(i)}
                style={{ width:i===shopActive?22:7, height:7, borderRadius:4, background:i===shopActive?RED:G300, border:'none', cursor:'pointer', padding:0, transition:'width .3s ease, background .3s ease' }} />
            ))}
          </div>
          <div style={{ display:'flex', gap:10 }}>
            {[{ href:'https://www.instagram.com/shortcutx.co/', label:'Instagram' }, { href:'https://www.tiktok.com/@shortcutx.co', label:'TikTok' }].map(s => (
              <a key={s.label} href={s.href}
                onMouseEnter={e => e.currentTarget.style.opacity='.72'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}
                style={{ display:'inline-flex', alignItems:'center', background:G900, color:WHITE, fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:700, padding:'9px 20px', borderRadius:20, textDecoration:'none', letterSpacing:'.04em', transition:'opacity .2s' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
