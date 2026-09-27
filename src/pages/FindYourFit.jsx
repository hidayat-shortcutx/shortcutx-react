import { useState } from 'react'

const RED     = '#9b0d0c'
const G900    = '#333333'
const G700    = '#4d4d4d'
const G500    = '#808080'
const G300    = '#cccccc'
const G200    = '#e6e6e6'
const WHITE   = '#ffffff'
const OFF     = '#fafafa'
const RED_PALE = '#fbebea'

const steps = [
  {
    id: 'gender',
    question: 'How do you identify?',
    type: 'single',
    options: [
      { value: 'male',               label: 'Male' },
      { value: 'female',             label: 'Female' },
      { value: 'prefer-not-to-say',  label: 'Prefer not to say' },
    ],
  },
  {
    id: 'goals',
    question: 'What are your main goals?',
    subtext: 'Pick all that apply.',
    type: 'multi',
    options: [
      { value: 'fat-loss',   label: 'Lose body fat' },
      { value: 'energy',     label: 'More energy' },
      { value: 'muscle',     label: 'Build muscle' },
      { value: 'digestion',  label: 'Better digestion' },
      { value: 'sleep',      label: 'Better sleep' },
      { value: 'immunity',   label: 'Stronger immunity' },
    ],
  },
  {
    id: 'rhythm',
    question: 'How would you describe your daily rhythm?',
    type: 'single',
    options: [
      { value: 'early',     label: 'Early bird — up before 7am, in bed by 10pm' },
      { value: 'regular',   label: 'Regular — 7–9am wake, 11pm sleep' },
      { value: 'night-owl', label: 'Night owl — sleep past midnight' },
      { value: 'irregular', label: 'Varies — shift work or irregular schedule' },
    ],
  },
  {
    id: 'eating',
    question: 'How would you describe your eating habits?',
    type: 'single',
    options: [
      { value: 'healthy', label: 'Generally clean — mostly home-cooked' },
      { value: 'mixed',   label: 'Mixed — healthy some days, not others' },
      { value: 'busy',    label: 'Busy lifestyle — lots of hawker food or takeaways' },
      { value: 'social',  label: 'Social eater — often eating out or late nights' },
    ],
  },
  {
    id: 'considerations',
    question: 'Any health considerations we should know?',
    subtext: 'This helps us keep recommendations safe for you.',
    type: 'multi',
    options: [
      { value: 'none',         label: "None — I'm generally healthy" },
      { value: 'hypertension', label: 'High blood pressure' },
      { value: 'diabetes',     label: 'Diabetes or blood sugar issues' },
      { value: 'thyroid',      label: 'Thyroid condition' },
      { value: 'heart',        label: 'Heart condition' },
      { value: 'pregnancy',    label: 'Pregnant or breastfeeding' },
    ],
  },
]

const QUIZ_PRODUCTS = [
  {
    name:  'Max+ Fat Burner Juice',
    price: 'From $63.00',
    tags:  ['fat-loss', 'energy', 'muscle'],
    whyMap: {
      'fat-loss': "Singapore's #1 best-selling fat burner — clinically studied formula that works.",
      'energy':   'Metabolic boost for sustained energy without the crash.',
      'muscle':   'Burn fat while you build — supports body composition.',
    },
    img:  'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=400',
    href: 'https://shortcutx.co/products/max-fat-burner-juice',
    rhythmBoost: ['early', 'regular'],
  },
  {
    name:  'Night Hot Chocolate',
    price: '$45.00',
    tags:  ['sleep', 'fat-loss', 'immunity'],
    whyMap: {
      'sleep':    'KSM-66® Ashwagandha for deep rest — burns fat while you sleep.',
      'fat-loss': 'Round-the-clock fat burn — covers the hours you can\'t train.',
      'immunity': 'KSM-66® supports cortisol balance and immune resilience.',
    },
    img:  'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=400',
    href: 'https://shortcutx.co/products/night-hot-chocolate',
    rhythmBoost: ['night-owl', 'irregular'],
  },
  {
    name:  'Detox Juice',
    price: 'From $22.00',
    tags:  ['digestion'],
    whyMap: {
      'digestion': 'Reduces bloating and supports gut health — feel lighter from day one.',
    },
    img:  'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=400',
    href: 'https://shortcutx.co/products/detox-juice',
    rhythmBoost: [],
  },
  {
    name:  'De-Bloat: White Grape',
    price: 'From $24.00',
    tags:  ['digestion'],
    whyMap: {
      'digestion': 'Targets water retention for a flatter stomach.',
    },
    img:  'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-01.jpg?v=1779346704&width=400',
    href: 'https://shortcutx.co/products/de-bloat',
    rhythmBoost: [],
  },
  {
    name:  'Lychee Lemon Fat Burner',
    price: 'From $24.00',
    tags:  ['fat-loss', 'energy'],
    whyMap: {
      'fat-loss': 'A lighter daily option — great for variety in your fat-burn routine.',
      'energy':   'Light, refreshing energy boost — perfect for busy days.',
    },
    img:  'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-07.jpg?v=1779346704&width=400',
    href: 'https://shortcutx.co/products/lychee-lemon-fat-burner',
    rhythmBoost: [],
  },
]

function getRecommendations(answers) {
  const goals  = answers.goals  || []
  const rhythm = answers.rhythm || ''

  const scores  = {}
  const whyText = {}

  QUIZ_PRODUCTS.forEach(p => {
    let score = 0
    let why   = null

    goals.forEach(goal => {
      if (p.tags.includes(goal)) {
        score += 2
        if (!why && p.whyMap[goal]) why = p.whyMap[goal]
      }
    })

    if (p.rhythmBoost.includes(rhythm)) {
      score += 1
      if (!why) why = `A good match for your schedule.`
    }

    if (score > 0) {
      scores[p.name]  = score
      whyText[p.name] = why
    }
  })

  return QUIZ_PRODUCTS
    .filter(p  => scores[p.name] > 0)
    .sort((a, b) => scores[b.name] - scores[a.name])
    .slice(0, 3)
    .map(p => ({ ...p, why: whyText[p.name] }))
}

export default function FindYourFit() {
  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState({})
  const [done,    setDone]    = useState(false)

  const current  = steps[step]
  const progress = (step / steps.length) * 100

  function toggle(id, value, multi) {
    setAnswers(prev => {
      if (!multi) return { ...prev, [id]: value }
      const arr     = prev[id] || []
      if (value === 'none') return { ...prev, [id]: ['none'] }
      const without = arr.filter(v => v !== 'none')
      return {
        ...prev,
        [id]: without.includes(value) ? without.filter(v => v !== value) : [...without, value],
      }
    })
  }

  function isSelected(id, value) {
    const a = answers[id]
    if (!a) return false
    return Array.isArray(a) ? a.includes(value) : a === value
  }

  function canAdvance() {
    const a = answers[current.id]
    if (!a) return false
    if (Array.isArray(a)) return a.length > 0
    return true
  }

  // ===== RESULTS =====
  if (done) {
    const hasMedical = (answers.considerations || []).some(c =>
      ['hypertension', 'diabetes', 'thyroid', 'heart', 'pregnancy'].includes(c))
    const recs = getRecommendations(answers)

    return (
      <div style={{ minHeight:'80vh', background:OFF, padding:'64px 0 80px' }}>
        <div style={{ maxWidth:820, margin:'0 auto', padding:'0 24px' }}>
          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <div style={{ width:54, height:54, borderRadius:'50%', background:RED_PALE, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', fontSize:22 }}>✓</div>
            <div style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:RED, marginBottom:10 }}>Your Results</div>
            <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(24px,3.5vw,38px)', color:G900, lineHeight:1.1, marginBottom:14 }}>
              Here's what we recommend<br />for you.
            </h2>
            {hasMedical && (
              <div style={{ background:'#fffbe6', border:'1px solid #f5d87a', borderRadius:8, padding:'12px 18px', maxWidth:540, margin:'0 auto 8px', fontSize:14, color:'#7a5c00', lineHeight:1.55 }}>
                Based on your health notes, we recommend checking with your doctor before starting any supplement.
              </div>
            )}
          </div>

          {/* Product cards */}
          {recs.length > 0 ? (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:20, marginBottom:44 }}>
              {recs.map((p, i) => (
                <div key={p.name}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 18px 36px rgba(0,0,0,.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
                  style={{ background:WHITE, border:`1px solid ${G200}`, borderRadius:12, overflow:'hidden', transition:'transform .22s ease, box-shadow .22s ease' }}>
                  {i === 0 && (
                    <div style={{ background:RED, color:WHITE, fontFamily:'Poppins,monospace', fontSize:11, fontWeight:700, letterSpacing:'.06em', textAlign:'center', padding:'8px 0' }}>
                      TOP PICK FOR YOU
                    </div>
                  )}
                  <img src={p.img} alt={p.name}
                    style={{ width:'100%', height:180, objectFit:'contain', background:'#f9f9f9', padding:'16px 0', display:'block' }} />
                  <div style={{ padding:'18px 20px 22px' }}>
                    <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:15, color:G900, marginBottom:7, lineHeight:1.3 }}>{p.name}</div>
                    <div style={{ fontSize:13, color:G700, lineHeight:1.6, marginBottom:14 }}>{p.why}</div>
                    <div style={{ fontSize:12, color:G500, marginBottom:14 }}>{p.price}</div>
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      style={{ display:'block', textAlign:'center', background: i === 0 ? RED : G900, color:WHITE, fontWeight:700, fontSize:13, padding:'12px 0', borderRadius:6, textDecoration:'none', transition:'opacity .2s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity='.86'}
                      onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                      Shop Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign:'center', marginBottom:44 }}>
              <p style={{ fontSize:16, color:G700 }}>Let's explore all products to find your perfect fit.</p>
            </div>
          )}

          {/* Footer CTAs */}
          <div style={{ textAlign:'center' }}>
            <a href="https://shortcutx.co/collections/all"
              style={{ display:'inline-flex', alignItems:'center', gap:8, border:`2px solid ${G900}`, color:G900, fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:14, padding:'14px 28px', borderRadius:6, textDecoration:'none', transition:'opacity .2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity='.75'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}>
              Explore All Products →
            </a>
            <button
              onClick={() => { setDone(false); setStep(0); setAnswers({}) }}
              style={{ display:'block', margin:'16px auto 0', fontSize:13, color:G500, background:'none', border:'none', cursor:'pointer', textDecoration:'underline' }}>
              Retake the quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ===== QUIZ =====
  return (
    <div style={{ minHeight:'80vh', background:WHITE }}>
      {/* Progress bar */}
      <div style={{ height:3, background:G200 }}>
        <div style={{ height:'100%', background:RED, width:`${progress}%`, transition:'width .5s ease' }} />
      </div>

      <div style={{ maxWidth:640, margin:'0 auto', padding:'64px 24px' }}>
        {/* Step counter */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:32 }}>
          <p style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:G500, margin:0 }}>
            Step {step + 1} of {steps.length}
          </p>
          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              style={{ fontSize:13, color:G500, background:'none', border:'none', cursor:'pointer' }}>
              ← Back
            </button>
          )}
        </div>

        {/* Question */}
        <div style={{ marginBottom:8 }}>
          <div style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:RED, marginBottom:10 }}>Find Your Fit</div>
          <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(24px,3.5vw,36px)', color:G900, lineHeight:1.15, margin:'0 0 6px' }}>
            {current.question}
          </h2>
          {current.subtext && (
            <p style={{ fontSize:14, color:G500, margin:0 }}>{current.subtext}</p>
          )}
        </div>

        {/* Options */}
        <div style={{ marginTop:28, display:'flex', flexDirection:'column', gap:10 }}>
          {current.options.map(opt => {
            const sel = isSelected(current.id, opt.value)
            return (
              <button
                key={opt.value}
                onClick={() => toggle(current.id, opt.value, current.type === 'multi')}
                style={{
                  width:'100%', textAlign:'left', padding:'16px 20px', borderRadius:12,
                  border: `2px solid ${sel ? RED : G200}`,
                  background: sel ? RED_PALE : WHITE,
                  color: sel ? RED : G900,
                  fontWeight:600, fontSize:15, cursor:'pointer',
                  transition:'border-color .15s, background .15s, color .15s',
                  display:'flex', alignItems:'center', gap:14,
                }}>
                <div style={{
                  width:20, height:20, borderRadius:'50%',
                  border: `2px solid ${sel ? RED : G300}`,
                  background: sel ? RED : 'transparent',
                  flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center',
                  transition:'border-color .15s, background .15s',
                }}>
                  {sel && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                {opt.label}
              </button>
            )
          })}
        </div>

        {/* Next button */}
        <div style={{ marginTop:36 }}>
          <button
            disabled={!canAdvance()}
            onClick={() => {
              if (!canAdvance()) return
              if (step < steps.length - 1) setStep(s => s + 1)
              else setDone(true)
            }}
            style={{
              width:'100%', fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:15,
              padding:'16px 28px', borderRadius:8, cursor: canAdvance() ? 'pointer' : 'not-allowed',
              background: canAdvance() ? RED : G200, color: canAdvance() ? WHITE : G500,
              border:'none', transition:'opacity .2s, background .2s',
              opacity: canAdvance() ? 1 : .5,
            }}
            onMouseEnter={e => { if (canAdvance()) e.currentTarget.style.opacity='.88' }}
            onMouseLeave={e => e.currentTarget.style.opacity = canAdvance() ? '1' : '.5'}
          >
            {step < steps.length - 1 ? 'Continue' : 'See My Results'}
          </button>
          <p style={{ textAlign:'center', fontSize:12, color:G500, marginTop:12 }}>
            2 min · Your answers are private
          </p>
        </div>
      </div>
    </div>
  )
}
