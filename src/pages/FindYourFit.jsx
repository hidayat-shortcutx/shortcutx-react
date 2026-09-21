import { useState } from 'react'
import Button from '../components/Button'
import { Wrap, Eyebrow } from '../components/Section'

const steps = [
  {
    id: 'gender',
    question: 'How do you identify?',
    type: 'single',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'prefer-not-to-say', label: 'Prefer not to say' },
    ],
  },
  {
    id: 'goals',
    question: 'What are your main goals?',
    subtext: 'Pick all that apply.',
    type: 'multi',
    options: [
      { value: 'fat-loss', label: 'Lose body fat' },
      { value: 'energy', label: 'More energy' },
      { value: 'muscle', label: 'Build muscle' },
      { value: 'digestion', label: 'Better digestion' },
      { value: 'sleep', label: 'Better sleep' },
      { value: 'immunity', label: 'Stronger immunity' },
    ],
  },
  {
    id: 'rhythm',
    question: 'How would you describe your daily rhythm?',
    type: 'single',
    options: [
      { value: 'early', label: 'Early bird — up before 7am, in bed by 10pm' },
      { value: 'regular', label: 'Regular — 7–9am wake, 11pm sleep' },
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
      { value: 'mixed', label: 'Mixed — healthy some days, not others' },
      { value: 'busy', label: 'Busy lifestyle — lots of hawker food or takeaways' },
      { value: 'social', label: 'Social eater — often eating out or late nights' },
    ],
  },
  {
    id: 'considerations',
    question: 'Any health considerations we should know?',
    subtext: 'This helps us keep recommendations safe for you.',
    type: 'multi',
    options: [
      { value: 'none', label: 'None — I\'m generally healthy' },
      { value: 'hypertension', label: 'High blood pressure' },
      { value: 'diabetes', label: 'Diabetes or blood sugar issues' },
      { value: 'thyroid', label: 'Thyroid condition' },
      { value: 'heart', label: 'Heart condition' },
      { value: 'pregnancy', label: 'Pregnant or breastfeeding' },
    ],
  },
]

export default function FindYourFit() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const current = steps[step]
  const progress = ((step) / steps.length) * 100

  function toggle(id, value, multi) {
    setAnswers(prev => {
      if (!multi) return { ...prev, [id]: value }
      const arr = prev[id] || []
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

  function buildCalendlyUrl() {
    const g = answers.gender || ''
    const goals = (answers.goals || []).join(', ')
    const rhythm = answers.rhythm || ''
    const eating = answers.eating || ''
    const considerations = (answers.considerations || []).join(', ')

    const lines = []
    if (g) lines.push(`Gender: ${g.charAt(0).toUpperCase() + g.slice(1)}`)
    if (goals) lines.push(`Goals: ${goals}`)
    if (rhythm) lines.push(`Daily rhythm: ${rhythm}`)
    if (eating) lines.push(`Eating habits: ${eating}`)
    if (considerations) lines.push(`Health notes: ${considerations}`)

    const params = new URLSearchParams()
    params.set('a1', lines.join('\n'))
    return `https://calendly.com/nutritionist-consult-shortcutx/10min?${params.toString()}`
  }

  if (done) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-lg mx-auto px-6">
          <div className="w-16 h-16 bg-brand-red-pale rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <Eyebrow className="text-center">Your Results</Eyebrow>
          <h2 className="font-black text-4xl text-g900 mb-4 text-balance">
            Congratulations on showing up for yourself.
          </h2>
          <p className="text-g700 text-lg leading-relaxed mb-8">
            We're proud of you for taking this step. Your answers are ready — now let's match you
            with the exact supplements and plan that fit your life.
          </p>
          <a
            href={buildCalendlyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" variant="primary">Choose a Time Slot</Button>
          </a>
          <p className="text-g500 text-sm mt-4">15 minutes · Free · No obligation to purchase</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-white">
      {/* Progress bar */}
      <div className="h-1 bg-g100">
        <div
          className="h-full bg-brand-red transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Step counter */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[12px] font-bold uppercase tracking-widest text-g500">
            Step {step + 1} of {steps.length}
          </p>
          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="text-[13px] text-g500 hover:text-g900 transition-colors"
            >
              ← Back
            </button>
          )}
        </div>

        {/* Question */}
        <div className="mb-2">
          <Eyebrow>Find Your Fit</Eyebrow>
          <h2 className="font-black text-3xl md:text-4xl text-g900 mb-2 text-balance">
            {current.question}
          </h2>
          {current.subtext && (
            <p className="text-g500 text-sm">{current.subtext}</p>
          )}
        </div>

        {/* Options */}
        <div className="mt-8 space-y-3">
          {current.options.map(opt => {
            const selected = isSelected(current.id, opt.value)
            return (
              <button
                key={opt.value}
                onClick={() => toggle(current.id, opt.value, current.type === 'multi')}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-semibold text-[15px] ${
                  selected
                    ? 'border-brand-red bg-brand-red-pale text-brand-red'
                    : 'border-g200 bg-white text-g900 hover:border-brand-red-light'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selected ? 'border-brand-red bg-brand-red' : 'border-g300'
                  }`}>
                    {selected && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {opt.label}
                </div>
              </button>
            )
          })}
        </div>

        {/* Next button */}
        <div className="mt-10">
          <Button
            size="lg"
            variant={canAdvance() ? 'primary' : 'ghost'}
            disabled={!canAdvance()}
            onClick={() => {
              if (!canAdvance()) return
              if (step < steps.length - 1) setStep(s => s + 1)
              else setDone(true)
            }}
            className={`w-full justify-center ${!canAdvance() ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            {step < steps.length - 1 ? 'Continue' : 'See My Results'}
          </Button>
          <p className="text-center text-[12px] text-g500 mt-3">
            2 min · Your answers are private · Free nutritionist call included
          </p>
        </div>
      </div>
    </div>
  )
}
