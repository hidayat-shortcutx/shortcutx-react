import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Section, Wrap, Eyebrow } from '../components/Section'

const ingredients = [
  {
    name: 'Green Tea Extract (EGCG)',
    dose: '500mg',
    category: 'Thermogenic',
    mechanism: 'EGCG inhibits the enzyme catechol-O-methyltransferase (COMT), which breaks down norepinephrine. Higher norepinephrine means more thermogenesis and fat oxidation.',
    evidence: 'Meta-analysis (2009, Hursel et al.) confirmed average 1.27 kg additional fat loss vs placebo over 12 weeks.',
  },
  {
    name: 'L-Carnitine L-Tartrate',
    dose: '300mg',
    category: 'Fat Transport',
    mechanism: 'L-Carnitine shuttles long-chain fatty acids through the inner mitochondrial membrane into the matrix where they\'re oxidised for energy. Without it, fat stays locked in adipose tissue.',
    evidence: 'Cochrane review (2016) found L-Carnitine supplementation resulted in significant reduction in body weight, BMI, and fat mass.',
  },
  {
    name: 'Garcinia Cambogia (60% HCA)',
    dose: '400mg',
    category: 'Appetite Control',
    mechanism: 'Hydroxycitric acid (HCA) inhibits ATP-citrate lyase, reducing fat synthesis, while increasing serotonin availability — which decreases appetite and emotional eating.',
    evidence: 'RCT (2011, Onakpoya et al.) showed 0.9 kg greater weight loss vs placebo, most pronounced for those with high baseline insulin resistance.',
  },
  {
    name: 'Chromium Picolinate',
    dose: '200mcg',
    category: 'Blood Sugar',
    mechanism: 'Chromium enhances insulin receptor binding, improving glucose uptake. Stable blood sugar reduces the spike-crash cycle that triggers cravings, particularly for refined carbohydrates.',
    evidence: 'JADA meta-analysis found chromium reduced fasting blood glucose and insulin, with greatest effect in insulin-resistant subjects.',
  },
  {
    name: 'Caffeine Anhydrous',
    dose: '100mg',
    category: 'Energy & Focus',
    mechanism: 'Adenosine receptor antagonism increases epinephrine secretion, stimulating lipolysis. Also enhances exercise performance by up to 11-12%, which compounds overall calorie expenditure.',
    evidence: 'IAAF consensus statement considers caffeine a proven ergogenic aid for endurance, strength, and cognitive performance.',
  },
]

const certifications = [
  { name: 'KKM Notified', desc: 'Registered with Malaysia\'s Ministry of Health under the Product Registration Scheme', logo: 'KKM' },
  { name: 'Halal Certified', desc: 'Certified by JAKIM — every ingredient and manufacturing process meets Halal requirements', logo: 'JAKIM' },
  { name: 'GMP Certified', desc: 'Manufactured in a GMP-certified facility with ISO 22000 food safety management', logo: 'GMP' },
  { name: 'Third-Party Tested', desc: 'Every production batch is independently tested for purity, potency, and heavy metals', logo: 'LAB' },
]

export default function TheScience() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-28">
        <Wrap className="max-w-3xl">
          <Eyebrow>The Science</Eyebrow>
          <h1 className="font-black text-[58px] md:text-[70px] leading-[1.02] text-g900 mb-6 text-balance">
            Every ingredient earns its place.
          </h1>
          <p className="text-g700 text-xl leading-relaxed max-w-2xl">
            We don't add ingredients for marketing purposes. Each active in our formulas
            is chosen because the clinical evidence says it works — at the dose we use.
          </p>
        </Wrap>
      </section>

      {/* Formulation philosophy */}
      <Section bg="off">
        <Wrap className="grid md:grid-cols-3 gap-8">
          {[
            { num: '01', title: 'No proprietary blends', body: 'Every dose is listed on the label. We\'d rather tell you what\'s inside than hide behind a "proprietary matrix."' },
            { num: '02', title: 'Research-first development', body: 'We build our formulas from the research up — not from what\'s cheap or trendy. Our nutritionist reviews every ingredient against the literature before it makes the cut.' },
            { num: '03', title: 'Clinical doses only', body: 'An ingredient at sub-clinical dosing is marketing, not nutrition. We match or exceed the doses shown effective in human clinical trials.' },
          ].map(p => (
            <div key={p.num}>
              <p className="font-black text-5xl text-brand-red-pale2 mb-4">{p.num}</p>
              <h3 className="font-bold text-xl text-g900 mb-3">{p.title}</h3>
              <p className="text-g700 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </Wrap>
      </Section>

      {/* Ingredients deep-dive */}
      <Section bg="white">
        <Wrap>
          <div className="mb-12">
            <Eyebrow>Ingredient Profiles</Eyebrow>
            <h2 className="font-black text-4xl text-g900 max-w-2xl text-balance">
              What's in Max Plus, and why.
            </h2>
          </div>
          <div className="space-y-6">
            {ingredients.map(ing => (
              <div key={ing.name} className="border border-g100 rounded-2xl p-7 hover:border-brand-red-pale2 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-black text-xl text-g900">{ing.name}</h3>
                    <p className="text-[12px] font-bold uppercase tracking-widest text-g500 mt-1">{ing.category}</p>
                  </div>
                  <div className="bg-brand-red-pale border border-brand-red-pale2 rounded-lg px-4 py-2 text-center shrink-0">
                    <p className="font-black text-brand-red">{ing.dose}</p>
                    <p className="text-[10px] text-brand-red/60 uppercase tracking-wide">per serving</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-g500 mb-2">Mechanism</p>
                    <p className="text-g700 text-sm leading-relaxed">{ing.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-g500 mb-2">Evidence</p>
                    <p className="text-g700 text-sm leading-relaxed">{ing.evidence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-g500 text-sm mt-6 text-center">
            Max Plus contains 17 total actives. Full ingredient list and Supplement Facts panel available on the product page.
          </p>
        </Wrap>
      </Section>

      {/* Certifications */}
      <Section bg="dark">
        <Wrap>
          <div className="text-center mb-12">
            <Eyebrow light>Quality Assurance</Eyebrow>
            <h2 className="font-black text-4xl text-white">Certifications you can trust.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map(c => (
              <div key={c.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-brand-red font-black text-[11px] tracking-wider">{c.logo}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{c.name}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Nutritionist CTA */}
      <Section bg="off">
        <Wrap className="max-w-3xl mx-auto text-center">
          <Eyebrow>Free Consultation</Eyebrow>
          <h2 className="font-black text-4xl text-g900 mb-5 text-balance">
            Science is one half. The other half is you.
          </h2>
          <p className="text-g700 text-lg leading-relaxed mb-8">
            The best formula in the world won't work without the right approach for your body and lifestyle.
            Our in-house nutritionist will map your goals to the right stack — for free.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pages/find-your-fit">
              <Button size="lg" variant="primary">Take the Quiz</Button>
            </Link>
            <Link to="/collections/fat-burners">
              <Button size="lg" variant="secondary">Shop Products</Button>
            </Link>
          </div>
        </Wrap>
      </Section>
    </>
  )
}
