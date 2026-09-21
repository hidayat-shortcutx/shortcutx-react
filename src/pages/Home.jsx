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
    badge: 'Best Seller',
    color: '#9b0d0c',
    benefits: ['Accelerates metabolism', 'Suppresses appetite', 'Boosts energy'],
  },
  {
    slug: 'detox-plus',
    name: 'Detox Plus',
    subtitle: 'Deep Cleanse Formula',
    capsules: '60 Capsules',
    price: 'S$69',
    badge: null,
    color: '#2d6a4f',
    benefits: ['Removes toxins', 'Supports digestion', 'Reduces bloating'],
  },
  {
    slug: 'immunity-shield',
    name: 'Immunity Shield',
    subtitle: 'Daily Defence Complex',
    capsules: '60 Capsules',
    price: 'S$65',
    badge: null,
    color: '#1a4a7a',
    benefits: ['Strengthens immunity', 'Rich in antioxidants', 'Vitamin C & Zinc'],
  },
]

const testimonials = [
  {
    name: 'Wahidah I.',
    product: 'Gas Relief',
    stars: 5,
    text: "I've been using this for 3 weeks now and the difference is night and day. No more bloating after meals. Highly recommend to anyone who struggles with digestive issues.",
  },
  {
    name: 'Noredahwati K.',
    product: 'Detox Plus',
    stars: 5,
    text: 'Lost 4kg in a month alongside my diet. Feels clean, no jitters. The detox formula really works — skin looks clearer too. Will definitely repurchase.',
  },
  {
    name: 'Melissa B.S.',
    product: 'Immunity Shield',
    stars: 5,
    text: "Haven't fallen sick since I started taking this. My energy levels are also much better throughout the day. My whole family is on it now.",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-g200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
        {/* Product image placeholder */}
        <div
          className="aspect-square flex items-center justify-center relative"
          style={{ background: `${product.color}12` }}
        >
          {product.badge && (
            <div className="absolute top-4 left-4">
              <Badge variant="red">{product.badge}</Badge>
            </div>
          )}
          <div
            className="w-24 h-32 rounded-xl flex items-end justify-center pb-3"
            style={{ background: product.color }}
          >
            <span className="text-white text-[10px] font-bold tracking-wider uppercase opacity-80">
              SCX
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-g500 mb-1">{product.subtitle}</p>
          <h3 className="font-black text-xl text-g900 mb-1">{product.name}</h3>
          <p className="text-[12px] text-g500 mb-4">{product.capsules}</p>
          <ul className="space-y-1 mb-5">
            {product.benefits.map(b => (
              <li key={b} className="flex items-center gap-2 text-[13px] text-g700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <span className="font-black text-xl text-g900">{product.price}</span>
            <Button size="sm" variant="primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white min-h-[88vh] flex items-center">
        <Wrap className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="gold" className="mb-6">Singapore's #1 Fat Burner</Badge>
            <h1 className="font-black text-[56px] md:text-[68px] leading-[1.02] text-g900 mb-6 text-balance">
              Burn Fat.<br />Feel Good.
            </h1>
            <p className="text-[17px] text-g700 leading-relaxed mb-8 max-w-md">
              Science-backed supplements formulated for the Southeast Asian lifestyle.
              Real results. No compromises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/collections/fat-burners">
                <Button size="lg" variant="primary">Shop Max Plus</Button>
              </Link>
              <Link to="/pages/find-your-fit">
                <Button size="lg" variant="ghost">Find Your Fit</Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div>
                <p className="font-black text-2xl text-g900">10,000+</p>
                <p className="text-[12px] text-g500 uppercase tracking-wider">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-g200" />
              <div>
                <p className="font-black text-2xl text-g900">4.9★</p>
                <p className="text-[12px] text-g500 uppercase tracking-wider">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-g200" />
              <div>
                <p className="font-black text-2xl text-g900">KKM</p>
                <p className="text-[12px] text-g500 uppercase tracking-wider">Approved</p>
              </div>
            </div>
          </div>

          {/* Hero product visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 bg-brand-red-pale rounded-3xl flex items-center justify-center">
                <div className="w-28 h-44 bg-brand-red rounded-2xl flex flex-col items-center justify-between py-5">
                  <span className="text-white font-black text-sm tracking-widest">SCX</span>
                  <div className="text-center">
                    <p className="text-white font-black text-lg leading-tight">MAX</p>
                    <p className="text-white font-black text-lg leading-tight">PLUS</p>
                  </div>
                  <span className="text-white/60 text-[10px] uppercase tracking-wider">60 caps</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-g100">
                <p className="font-black text-brand-red text-lg">−4.2 kg</p>
                <p className="text-[11px] text-g500">avg in 30 days</p>
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-g100">
                <Stars count={5} />
                <p className="text-[11px] text-g500 -mt-1">2,400+ reviews</p>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* Trust bar */}
      <section className="bg-g900 py-5">
        <Wrap>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-white/70 text-[13px] font-semibold tracking-wide uppercase">
            {['KKM Approved', 'GMP Certified', 'Halal Certified', 'Free Shipping over S$100', '30-Day Guarantee'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-gold" />
                {t}
              </span>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Products */}
      <Section bg="off">
        <Wrap>
          <div className="text-center mb-12">
            <Eyebrow>Our Products</Eyebrow>
            <h2 className="font-black text-4xl text-g900 text-balance">Built with our nutritionist. For you.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </Wrap>
      </Section>

      {/* Find Your Fit CTA */}
      <Section bg="red">
        <Wrap>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow light>Free Nutritionist Consultation</Eyebrow>
            <h2 className="font-black text-4xl md:text-5xl text-white mb-5 text-balance">
              Not sure where to start?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Take our 2-minute quiz and speak with our in-house nutritionist — for free.
              We'll match you with the right products for your body and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/pages/find-your-fit">
                <Button size="lg" variant="white">Take the Quiz</Button>
              </Link>
            </div>
          </div>
        </Wrap>
      </Section>

      {/* Science teaser */}
      <Section bg="white">
        <Wrap className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>The Science</Eyebrow>
            <h2 className="font-black text-4xl text-g900 mb-5 text-balance">
              Every ingredient earns its place.
            </h2>
            <p className="text-g700 leading-relaxed mb-4">
              We don't fill capsules with fillers. Every active in our formulas is chosen
              for a specific, evidence-backed reason — at doses that actually work.
            </p>
            <p className="text-g700 leading-relaxed mb-8">
              Our formulas are developed in Singapore with licensed nutritionists and reviewed
              against peer-reviewed studies before a single capsule is made.
            </p>
            <Link to="/pages/the-science">
              <Button variant="primary">Read the Research</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '17', unit: 'actives', label: 'in Max Plus alone' },
              { stat: '100%', unit: '', label: 'Halal & KKM certified' },
              { stat: '3rd', unit: 'party', label: 'lab tested every batch' },
              { stat: '6+', unit: 'years', label: 'formulation research' },
            ].map(item => (
              <div key={item.stat} className="bg-brand-red-pale rounded-2xl p-5">
                <p className="font-black text-3xl text-brand-red">
                  {item.stat}<span className="text-xl ml-0.5">{item.unit}</span>
                </p>
                <p className="text-[13px] text-g700 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Testimonials */}
      <Section bg="off">
        <Wrap>
          <div className="text-center mb-12">
            <Eyebrow>Real Results</Eyebrow>
            <h2 className="font-black text-4xl text-g900">10,000+ happy customers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-g100">
                <Stars count={t.stars} />
                <p className="text-g700 leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-g900 text-sm">{t.name}</p>
                    <p className="text-[12px] text-g500">{t.product}</p>
                  </div>
                  <Badge variant="gray">Verified</Badge>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Brand story teaser */}
      <Section bg="dark">
        <Wrap className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow light>Our Story</Eyebrow>
            <h2 className="font-black text-4xl text-white mb-5 text-balance">
              Born in Singapore.<br />Built for real people.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Shortcutx started because we were tired of supplements that promised the world
              and delivered nothing. We decided to fix it — starting with transparency,
              real doses, and a nutritionist on call.
            </p>
            <Link to="/pages/our-story">
              <Button variant="white">Meet the Team</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 col-span-2">
              <p className="text-white/50 text-[12px] uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-white font-bold text-lg leading-snug">
                "If you don't see results in 30 days, we'll make it right — no questions asked."
              </p>
            </div>
            <div className="bg-brand-red/20 border border-brand-red/30 rounded-2xl p-5">
              <p className="font-black text-3xl text-white">2019</p>
              <p className="text-white/60 text-[13px] mt-1">Founded in Singapore</p>
            </div>
            <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-5">
              <p className="font-black text-3xl text-brand-gold">S$2M+</p>
              <p className="text-white/60 text-[13px] mt-1">In products sold</p>
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  )
}
