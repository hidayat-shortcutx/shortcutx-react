import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { Section, Wrap, Eyebrow } from '../components/Section'

const products = [
  {
    slug: 'max-plus',
    name: 'Max Plus',
    subtitle: 'Advanced Fat Burner',
    capsules: '60 Capsules',
    price: 'S$79',
    originalPrice: 'S$99',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 2400,
    benefits: ['Thermogenic formula', 'Appetite control', 'Clean energy'],
    color: '#9b0d0c',
  },
  {
    slug: 'max-lite',
    name: 'Max Lite',
    subtitle: 'Gentle Fat Burner',
    capsules: '60 Capsules',
    price: 'S$65',
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 890,
    benefits: ['Stimulant-free formula', 'Mild appetite support', 'Night-time friendly'],
    color: '#c33d3c',
  },
  {
    slug: 'max-stack',
    name: 'Max Stack',
    subtitle: 'Fat Burner Bundle',
    capsules: '2 × 60 Capsules',
    price: 'S$139',
    originalPrice: 'S$158',
    badge: 'Save S$19',
    rating: 4.9,
    reviews: 340,
    benefits: ['Max Plus + Max Lite', 'Day & night coverage', 'Best value'],
    color: '#4d0706',
  },
]

function Stars({ rating }) {
  const full = Math.floor(rating)
  return (
    <div className="flex gap-0.5 items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 fill-current ${i < full ? 'text-brand-gold' : 'text-g200'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[12px] text-g700 font-semibold ml-1">{rating}</span>
    </div>
  )
}

export default function CategoryFatBurners() {
  return (
    <>
      {/* Category hero */}
      <Section bg="dark">
        <Wrap className="text-center">
          <Eyebrow light>Collections</Eyebrow>
          <h1 className="font-black text-5xl md:text-6xl text-white mb-5 text-balance">Fat Burners</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Thermogenic formulas built for the Singapore climate — engineered to work
            with your metabolism, not against it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[13px]">
            {['KKM Approved', 'Halal Certified', 'GMP Made', 'Lab Tested'].map(t => (
              <span key={t} className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 font-medium">
                {t}
              </span>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Filter bar */}
      <div className="bg-white border-b border-g100 py-4 sticky top-[88px] z-30">
        <Wrap className="flex items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {['All', 'Best Sellers', 'With Stimulants', 'Stimulant-Free', 'Bundles'].map((f, i) => (
              <button
                key={f}
                className={`px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'bg-brand-red text-white'
                    : 'bg-g100 text-g700 hover:bg-g200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-[13px] text-g500 shrink-0">{products.length} products</p>
        </Wrap>
      </div>

      {/* Products grid */}
      <Section bg="off">
        <Wrap>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(p => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden border border-g200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <div
                    className="aspect-[4/3] flex items-center justify-center relative"
                    style={{ background: `${p.color}10` }}
                  >
                    {p.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="red">{p.badge}</Badge>
                      </div>
                    )}
                    <div
                      className="w-20 h-28 rounded-xl flex flex-col items-center justify-between py-3"
                      style={{ background: p.color }}
                    >
                      <span className="text-white text-[9px] font-bold tracking-wider uppercase opacity-80">SCX</span>
                      <p className="text-white font-black text-[11px] leading-tight text-center px-1">{p.name.toUpperCase()}</p>
                      <span className="text-white/50 text-[9px]">caps</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-g500 mb-1">{p.subtitle}</p>
                    <h3 className="font-black text-xl text-g900 mb-1">{p.name}</h3>
                    <p className="text-[12px] text-g500 mb-2">{p.capsules}</p>
                    <Stars rating={p.rating} />
                    <p className="text-[11px] text-g500 mb-3">{p.reviews.toLocaleString()} reviews</p>

                    <ul className="space-y-1 mb-5">
                      {p.benefits.map(b => (
                        <li key={b} className="flex items-center gap-2 text-[12px] text-g700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-black text-xl text-g900">{p.price}</span>
                        {p.originalPrice && (
                          <span className="text-g500 line-through text-sm ml-2">{p.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Educational content */}
      <Section bg="white">
        <Wrap className="max-w-3xl mx-auto">
          <Eyebrow>How They Work</Eyebrow>
          <h2 className="font-black text-3xl text-g900 mb-8">The science behind fat burners.</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Thermogenesis',
                body: 'Thermogenic compounds raise your core temperature slightly, causing your body to burn more calories throughout the day — even at rest. Our formulas use clinically-dosed green tea extract and caffeine anhydrous for this effect.',
              },
              {
                title: 'Appetite Control',
                body: 'Garcinia Cambogia\'s hydroxycitric acid (HCA) suppresses appetite by increasing serotonin levels. At 400mg per serving, our dose aligns with the research-backed threshold.',
              },
              {
                title: 'Fat Mobilisation',
                body: 'L-Carnitine is essential for transporting long-chain fatty acids into the mitochondria for energy. Without adequate L-Carnitine, fat stays in storage — our 300mg dose ensures this pathway stays open.',
              },
            ].map(item => (
              <div key={item.title} className="border-l-4 border-brand-red pl-6">
                <h3 className="font-bold text-g900 text-lg mb-2">{item.title}</h3>
                <p className="text-g700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Quiz CTA */}
      <Section bg="red">
        <Wrap className="text-center">
          <Eyebrow light>Not Sure Which One?</Eyebrow>
          <h2 className="font-black text-4xl text-white mb-4">Let our nutritionist guide you.</h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">Take a 2-minute quiz and get a personalised recommendation — free, with no obligation to buy.</p>
          <Link to="/pages/find-your-fit">
            <Button size="lg" variant="white">Take the Quiz</Button>
          </Link>
        </Wrap>
      </Section>
    </>
  )
}
