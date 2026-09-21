import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { Section, Wrap, Eyebrow } from '../components/Section'

const ingredients = [
  { name: 'Green Tea Extract', dose: '500mg', benefit: 'Thermogenesis & antioxidant protection' },
  { name: 'L-Carnitine', dose: '300mg', benefit: 'Transports fatty acids into cells for energy' },
  { name: 'Garcinia Cambogia', dose: '400mg', benefit: 'Appetite suppression via HCA' },
  { name: 'Chromium Picolinate', dose: '200mcg', benefit: 'Regulates blood sugar & reduces cravings' },
  { name: 'Caffeine Anhydrous', dose: '100mg', benefit: 'Clean energy & metabolic boost' },
  { name: 'Black Pepper Extract', dose: '5mg', benefit: 'Enhances absorption of all actives' },
]

const reviews = [
  { name: 'Sarah T.', stars: 5, text: 'Down 6kg in 6 weeks. Genuinely the best supplement I\'ve ever tried. Energy is consistent — no crash.' },
  { name: 'Ahmad R.', stars: 5, text: 'I was skeptical but my waistline doesn\'t lie. Combined with my gym routine, this has been a gamechanger.' },
  { name: 'Priya M.', stars: 4, text: 'Great product. Slight tingle from the thermogenics but nothing uncomfortable. Already on my 3rd bottle.' },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 fill-current ${i < count ? 'text-brand-gold' : 'text-g200'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductMaxPlus() {
  return (
    <>
      {/* PDP Hero */}
      <Section bg="white">
        <Wrap>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Product image */}
            <div className="sticky top-28">
              <div className="bg-brand-red-pale rounded-3xl aspect-square flex items-center justify-center">
                <div className="w-40 h-56 bg-brand-red rounded-2xl flex flex-col items-center justify-between py-6">
                  <span className="text-white font-black text-base tracking-widest">SCX</span>
                  <div className="text-center">
                    <p className="text-white font-black text-2xl leading-tight">MAX</p>
                    <p className="text-white font-black text-2xl leading-tight">PLUS</p>
                  </div>
                  <span className="text-white/60 text-xs uppercase tracking-wider">60 capsules</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-16 h-16 rounded-xl bg-brand-red-pale flex items-center justify-center border-2 ${i === 1 ? 'border-brand-red' : 'border-transparent'}`}>
                    <div className="w-7 h-10 bg-brand-red rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="red">Best Seller</Badge>
                <Badge variant="gold">4.9 ★</Badge>
              </div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-g500 mb-2">Advanced Fat Burner</p>
              <h1 className="font-black text-5xl text-g900 mb-2">Max Plus</h1>
              <p className="text-g500 text-sm mb-5">60 Capsules · 30-day supply</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-black text-3xl text-g900">S$79</span>
                <span className="text-g500 line-through text-lg">S$99</span>
                <Badge variant="red">Save S$20</Badge>
              </div>

              <ul className="space-y-2 mb-8">
                {['Accelerates fat metabolism by up to 33%', 'Suppresses appetite without crashes', 'Clean thermogenic energy all day', 'KKM approved · Halal certified · GMP made'].map(b => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-g700">
                    <svg className="w-5 h-5 text-brand-red fill-current shrink-0 mt-0.5" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mb-8">
                <Button size="lg" variant="primary" className="w-full justify-center">Add to Cart — S$79</Button>
                <Button size="lg" variant="secondary" className="w-full justify-center">Buy Now</Button>
              </div>

              <div className="bg-brand-red-pale rounded-2xl p-4 border border-brand-red-pale2">
                <p className="text-[13px] text-brand-red font-semibold">
                  Free shipping on orders above S$100 · 30-day money-back guarantee
                </p>
              </div>

              {/* Directions */}
              <div className="mt-8 pt-8 border-t border-g100">
                <h3 className="font-bold text-g900 mb-3">How to Take</h3>
                <p className="text-[14px] text-g700 leading-relaxed">
                  Take 2 capsules with a large glass of water before breakfast or before your first meal.
                  For best results, use alongside a balanced diet and regular exercise. Do not exceed 2 capsules per day.
                </p>
              </div>
            </div>
          </div>
        </Wrap>
      </Section>

      {/* Ingredients */}
      <Section bg="off">
        <Wrap>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Eyebrow>What's Inside</Eyebrow>
              <h2 className="font-black text-3xl text-g900">Every ingredient has a job.</h2>
            </div>
            <div className="space-y-4">
              {ingredients.map(ing => (
                <div key={ing.name} className="bg-white rounded-xl p-5 border border-g100 flex items-center gap-5">
                  <div className="bg-brand-red-pale rounded-lg px-3 py-2 text-center shrink-0">
                    <p className="font-black text-brand-red text-sm">{ing.dose}</p>
                  </div>
                  <div>
                    <p className="font-bold text-g900 text-sm">{ing.name}</p>
                    <p className="text-[13px] text-g500">{ing.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[12px] text-g500 mt-5">+ 11 more supporting nutrients. Full list on label.</p>
          </div>
        </Wrap>
      </Section>

      {/* Reviews */}
      <Section bg="white">
        <Wrap>
          <div className="text-center mb-10">
            <Eyebrow>Customer Reviews</Eyebrow>
            <h2 className="font-black text-3xl text-g900 mb-2">2,400+ verified reviews</h2>
            <div className="flex items-center justify-center gap-2">
              <Stars count={5} />
              <span className="font-bold text-g900">4.9</span>
              <span className="text-g500 text-sm">out of 5</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-brand-off rounded-2xl p-6 border border-g100">
                <Stars count={r.stars} />
                <p className="text-g700 text-sm leading-relaxed mt-3 mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-g900 text-sm">{r.name}</p>
                  <Badge variant="gray">Verified</Badge>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Quiz CTA */}
      <Section bg="red">
        <Wrap className="text-center">
          <Eyebrow light>Free Consultation</Eyebrow>
          <h2 className="font-black text-4xl text-white mb-4">Talk to our nutritionist — for free.</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Not sure if Max Plus is right for you? Take our quiz and book a free 15-minute call with our in-house nutritionist.</p>
          <Link to="/pages/find-your-fit">
            <Button size="lg" variant="white">Take the Quiz</Button>
          </Link>
        </Wrap>
      </Section>
    </>
  )
}
