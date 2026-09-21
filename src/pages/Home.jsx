import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, Wrap, Eyebrow } from '../components/Section'

const goalCategories = [
  {
    label: 'Burn Fat',
    desc: 'Max+ Fat Burner Juice, Berry Punch, Blackcurrant, Apple Cider, Lychee Lemon',
    count: '6 formulas · from $22',
    tab: 'burn',
    img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500',
  },
  {
    label: 'Slimming Drinks',
    desc: 'Detox Juice, De-Bloat White Grape, Flat Tummy Shakes',
    count: '4 formulas · from $22',
    tab: 'slim',
    img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500',
  },
  {
    label: 'Wellness & Sleep',
    desc: 'Night Hot Chocolate, Night Fat Burner Juice',
    count: '2 formulas · from $22',
    tab: 'well',
    img: 'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500',
  },
  {
    label: 'Bundles',
    desc: 'Stack your goals, save on every pack',
    count: 'Save up to 20%',
    tab: 'bundle',
    img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=500',
  },
]

const tabs = ['All Products', 'Fat Burners', 'Slimming Drinks', 'Wellness', 'Bundles']

const ingredients = [
  { icon: '🌿', name: 'KSM-66® Ashwagandha', benefit: 'Relaxation' },
  { icon: '🍊', name: 'Morosil®', benefit: 'Fat metabolism' },
  { icon: '☕', name: 'Green Coffee Extract', benefit: 'Energy metabolism' },
  { icon: '🍵', name: 'Chamomile Extract', benefit: 'Calm' },
  { icon: '🦠', name: 'FOS Prebiotic', benefit: 'Gut health' },
  { icon: '🥤', name: '30+ Active Formulas', benefit: 'Across the range' },
]

const compareRows = [
  { feature: 'How it\'s developed', scx: 'No OEM — in-house R&D spanning months, testing multiple formulas until right', other: 'Often OEM/white-label, same formula relabelled across brands' },
  { feature: 'Where it\'s made', scx: 'Formulated & manufactured in the UK', other: 'Often unspecified origin' },
  { feature: "What's actually in it", scx: 'Clinically studied actives, listed in full — KSM-66®, Morosil®, Satireal™', other: 'Proprietary blends, doses often undisclosed' },
  { feature: 'Choosing the right one', scx: 'Free quiz built with a real nutritionist, matched to your goals', other: 'Guess and hope, or read 40 reviews first' },
  { feature: 'Proof, not just promises', scx: '150,000+ boxes sold, #1 on Shopee Singapore, Watsons Singapore award winner', other: 'Marketing claims, rarely independently verified' },
]

const stats = [
  { num: '150K+', label: 'boxes sold across Singapore to date' },
  { num: '#1', label: 'ranked on Shopee Singapore' },
  { num: '4.9★', label: 'average customer rating' },
  { num: '2019', label: 'founded in Singapore' },
]

const ambassadors = [
  { emoji: '🥊', name: 'Efasha "Fash The Face" Kamarudin', role: 'WBC Female Asia Continental Champion', bg: 'linear-gradient(150deg,#2b2523,#333)' },
  { emoji: '🎤', name: 'Nadhra', role: 'Content Creator & Brand Ambassador', bg: 'linear-gradient(150deg,#c9a227,#8a6a2f)' },
  { emoji: '🎬', name: 'Nurul Aini', role: 'Actress & TV Presenter, Mediacorp Suria', bg: 'linear-gradient(150deg,#4a6fa5,#2d4870)' },
  { emoji: '⭐', name: 'Kyliee', role: 'Lifestyle Creator & Brand Partner', bg: 'linear-gradient(150deg,#ff8a3d,#c9600f)' },
]

const testimonials = [
  { name: 'Wahidah I.', product: 'Gas Relief', stars: 5, text: "I've been using this for 3 weeks now and the difference is night and day. No more bloating after meals. Highly recommend to anyone who struggles with digestive issues." },
  { name: 'Noredahwati K.', product: 'Detox Plus', stars: 5, text: 'Lost 4kg in a month alongside my diet. Feels clean, no jitters. The detox formula really works — skin looks clearer too. Will definitely repurchase.' },
  { name: 'Melissa B.S.', product: 'Immunity Shield', stars: 5, text: "Haven't fallen sick since I started taking this. My energy levels are also much better throughout the day. My whole family is on it now." },
]

function Stars({ count = 5 }) {
  return (
    <span className="text-brand-gold">{'★'.repeat(count)}</span>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('All Products')

  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-red overflow-hidden py-12 md:py-16">
        {/* Decorative blobs */}
        <div className="absolute w-[520px] h-[520px] rounded-full opacity-30 pointer-events-none" style={{ background: '#700a09', filter: 'blur(80px)', top: '-120px', right: '-80px' }} />
        <div className="absolute w-[380px] h-[380px] rounded-full opacity-25 pointer-events-none" style={{ background: '#4d0706', filter: 'blur(60px)', bottom: '-60px', left: '10%' }} />

        <Wrap className="relative z-10">
          <div className="grid md:grid-cols-[1.05fr_.95fr] gap-10 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-brand-gold text-sm">★★★★★</span>
                <span className="text-white/80 text-xs font-semibold tracking-[.12em] uppercase">Rated 4.9 · Singapore's #1 Supplement</span>
              </div>
              <h1 className="font-black text-[clamp(34px,4vw,52px)] leading-[1.03] tracking-tight text-white mb-4">
                Singapore's #1<br />
                Best-Selling <span className="text-brand-gold">Weight<br className="hidden md:block" />
                Management</span> Supplements
              </h1>
              <p className="text-white/85 text-base leading-relaxed mb-6 max-w-[460px]">
                Burn more calories with Singapore's #1 weight management supplements. Elevate your expectations with our meticulously crafted formula — join others towards a healthier you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#catalog" className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-bold text-sm px-6 py-3 rounded-full border-2 border-white hover:bg-g100 transition-all">
                  Shop All Products
                </a>
                <Link to="/pages/find-your-fit" className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full border-2 border-white/60 hover:bg-white hover:text-brand-red transition-all">
                  Find Your Fit →
                </Link>
              </div>

              {/* Social proof pills */}
              <div className="flex flex-wrap gap-3 mt-7">
                <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">🏆 150,000+ Boxes Sold</span>
                <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">🛒 Shopee #1 Ranked</span>
              </div>
            </div>

            {/* Right — product visual */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-[240px] h-[300px] md:w-[300px] md:h-[380px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/10 flex items-center justify-center">
                  <img
                    src="https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500"
                    alt="Shortcutx Max+ Fat Burner"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-4 bg-white rounded-2xl shadow-lg px-3 py-2 border border-g100">
                  <p className="font-black text-brand-red text-base leading-tight">−4.2 kg</p>
                  <p className="text-[11px] text-g500">avg in 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* TRUST BAR */}
      <section className="bg-g900 py-4">
        <Wrap>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-white/75 text-[12px] font-semibold tracking-[.1em] uppercase">
            {[
              { icon: '🇬🇧', label: 'UK Manufacturing' },
              { icon: '🔬', label: 'Clinically Studied' },
              { icon: '🕌', label: 'Halal-Conscious' },
              { icon: '🚚', label: 'Free Shipping Over $100' },
            ].map(item => (
              <span key={item.label} className="flex items-center gap-2">
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </Wrap>
      </section>

      {/* EXPERTLY FORMULATED */}
      <section className="py-16 bg-white">
        <Wrap className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Expertly Formulated</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] leading-[1.04] text-g900 mt-2 mb-4">
              Elevate your expectations<br />with our meticulously<br />crafted formula.
            </h2>
            <p className="text-g700 text-base leading-relaxed mb-6">
              No proprietary blends, no hidden doses. Every active in our formulas is chosen for a specific, evidence-backed reason — at doses that actually work. Our formulas are developed in Singapore with licensed nutritionists and reviewed against peer-reviewed studies.
            </p>
            <Link to="/pages/the-science" className="inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:underline">
              See the Full Ingredient List →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '17+', label: 'Active ingredients in Max Plus' },
              { stat: '100%', label: 'Halal & UK manufactured' },
              { stat: '4.9★', label: 'Average customer rating' },
              { stat: '150K+', label: 'Boxes sold in Singapore' },
            ].map(item => (
              <div key={item.stat} className="bg-brand-red-pale rounded-2xl p-5">
                <p className="font-black text-3xl text-brand-red">{item.stat}</p>
                <p className="text-[13px] text-g700 mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* QUIZ CTA */}
      <section className="bg-g900 py-16">
        <Wrap className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[13px] font-bold tracking-[.16em] uppercase text-white/50 mb-3 block">Free Nutritionist Quiz</span>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-white leading-[1.04] mb-4">
              Built with our nutritionist.<br />For you.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-7 max-w-[440px]">
              Not sure where to start? Take our 2-minute quiz and speak with our in-house nutritionist — for free. We'll match you with the right products for your body and goals.
            </p>
            <Link to="/pages/find-your-fit" className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-brand-red-dark transition-all">
              Take the Quiz →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['Lose Weight', 'Feel Energised', 'Better Sleep', 'Reduce Bloating', 'Build Muscle', 'Full Detox'].map(goal => (
              <div key={goal} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-white/80 text-[13px] font-semibold leading-snug">{goal}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* SHOP BY GOAL */}
      <section className="py-16 bg-white">
        <Wrap>
          <div className="mb-10">
            <Eyebrow>01 Shop by Goal</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04] mt-2">
              Every goal,<br />one home page.
            </h2>
            <p className="text-g700 text-base mt-3 max-w-[520px]">
              Tell us what's bothering you tonight and we'll point you to the right formula — no scrolling through the whole catalog required.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {goalCategories.map(cat => (
              <a
                key={cat.tab}
                href="#catalog"
                onClick={() => setActiveTab(cat.label)}
                className="group block bg-g100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-g200">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-black text-g900 text-base">{cat.label}</h3>
                    <span className="text-brand-red font-bold">→</span>
                  </div>
                  <p className="text-g500 text-[13px] leading-snug mb-2">{cat.desc}</p>
                  <span className="text-[12px] font-semibold text-brand-red">{cat.count}</span>
                </div>
              </a>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FULL CATALOG */}
      <section id="catalog" className="py-16 bg-brand-off">
        <Wrap>
          <div className="mb-8">
            <Eyebrow>02 The Full Range</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04] mt-2">
              Everything<br />we sell, browsable.
            </h2>
            <p className="text-g700 text-base mt-3 max-w-[520px]">
              Fat burners, slimming drinks, meal replacements, and wellness rituals — everything we make, in one place, no digging required.
            </p>
          </div>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === tab ? 'bg-brand-red text-white' : 'bg-white text-g700 border border-g200 hover:border-brand-red hover:text-brand-red'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Product grid placeholder */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Max+ Fat Burner Juice', subtitle: 'Berry Punch', price: '$34', badge: 'Best Seller', img: 'https://shortcutx.co/cdn/shop/files/max_podium_clear_bg.png?v=1782269359&width=500' },
              { name: 'Max Fat Burner', subtitle: 'Blackcurrant Flavour', price: '$34', badge: null, img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-08.jpg?v=1779346704&width=500' },
              { name: 'Night Hot Chocolate', subtitle: 'Wellness & Sleep', price: '$34', badge: 'NEW', img: 'https://shortcutx.co/cdn/shop/files/1_c7caffba-6ebe-4bb7-bf67-f5628d6df608.png?v=1779688031&width=500' },
              { name: 'Goal Stack Bundle', subtitle: 'Fat Burner + Slimming', price: '$89', badge: 'Save 20%', img: 'https://shortcutx.co/cdn/shop/files/Listing_Image-Cover-12.jpg?v=1779346704&width=500' },
            ].map(product => (
              <div key={product.name} className="bg-white rounded-2xl overflow-hidden border border-g200 hover:shadow-md transition-all group">
                <div className="relative aspect-square overflow-hidden bg-g100">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-g500 font-semibold uppercase tracking-wider mb-1">{product.subtitle}</p>
                  <h3 className="font-black text-g900 text-base leading-snug mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl text-g900">{product.price}</span>
                    <button className="bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-brand-red-dark transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TIERED BESTSELLERS */}
      <section className="py-16 bg-g900">
        <Wrap>
          <div className="text-center mb-12">
            <span className="text-[13px] font-bold tracking-[.16em] uppercase text-[#ff8a86] mb-3 block">03 Start Here</span>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-white leading-[1.04]">
              New here?<br />Three ways to begin.
            </h2>
            <p className="text-white/65 text-base mt-4 max-w-[480px] mx-auto">
              Whether you're just curious or ready to commit, there's a way in that fits — try one, subscribe for less, or go all in with a bundle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: 'Just Getting Started',
                heading: 'Single Pack',
                desc: 'Try one formula, no commitment. Perfect for a first-time buyer testing the waters.',
                items: ['Any single product, one-time purchase', 'Full ingredient transparency', 'Free shipping above $100'],
                price: 'From $22',
                featured: false,
              },
              {
                tier: 'Subscribe & Save',
                heading: 'Monthly Ritual',
                desc: 'Lock in 15% off and never run out. Pause, skip, or cancel anytime — no phone calls.',
                items: ['15% off every recurring order', 'Priority stock on new launches', 'Free shipping above $100'],
                price: 'Save 15%',
                featured: true,
                tag: 'MOST POPULAR',
              },
              {
                tier: 'Go All In',
                heading: 'Goal Stack Bundle',
                desc: 'Combine a Fat Burner + Slimming Drink + Wellness formula into one daily stack.',
                items: ['Up to 20% off vs. buying separately', 'One checkout, one delivery', 'Best for full lifestyle resets'],
                price: 'Save 20%',
                featured: false,
              },
            ].map(card => (
              <div key={card.heading} className={`rounded-2xl p-6 flex flex-col relative ${card.featured ? 'bg-brand-red' : 'bg-white/5 border border-white/10'}`}>
                {card.tag && (
                  <span className="absolute -top-3 left-6 bg-brand-gold text-g900 text-[11px] font-black px-3 py-1 rounded-full tracking-widest">
                    {card.tag}
                  </span>
                )}
                <p className={`text-[12px] font-bold tracking-[.12em] uppercase mb-2 ${card.featured ? 'text-white/70' : 'text-white/50'}`}>{card.tier}</p>
                <h3 className="font-black text-white text-2xl mb-3">{card.heading}</h3>
                <p className={`text-[14px] leading-relaxed mb-4 ${card.featured ? 'text-white/80' : 'text-white/60'}`}>{card.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {card.items.map(item => (
                    <li key={item} className={`flex items-start gap-2 text-[13px] ${card.featured ? 'text-white/90' : 'text-white/70'}`}>
                      <span className="text-brand-gold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className={`font-black text-2xl ${card.featured ? 'text-white' : 'text-white'}`}>{card.price}</span>
                </div>
                <a href="#catalog" className={`text-center py-3 rounded-full font-bold text-sm transition-all ${card.featured ? 'bg-white text-brand-red hover:bg-g100' : 'border border-white/30 text-white hover:bg-white/10'}`}>
                  {card.heading === 'Single Pack' ? 'Shop Singles' : card.heading === 'Monthly Ritual' ? 'Start Subscription' : 'Build My Stack'}
                </a>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* INGREDIENTS TEASER */}
      <Section bg="off">
        <Wrap>
          <div className="mb-8">
            <Eyebrow>04 What's Actually Inside</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04] mt-2">
              The actives<br />doing the work.
            </h2>
            <p className="text-g700 text-base mt-3">
              No proprietary blends, no hidden doses — six of the actives across our range.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ingredients.map(ing => (
              <div key={ing.name} className="bg-white rounded-xl p-5 border border-g200 flex items-center gap-4">
                <span className="text-3xl shrink-0">{ing.icon}</span>
                <div>
                  <p className="font-black text-g900 text-sm">{ing.name}</p>
                  <p className="text-g500 text-[13px]">{ing.benefit}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/pages/the-science" className="inline-flex items-center gap-2 mt-7 font-bold text-sm text-g900 border border-g900 px-6 py-3 rounded-full hover:bg-g900 hover:text-white transition-all">
            See the Full Ingredient List →
          </Link>
        </Wrap>
      </Section>

      {/* BRAND COMPARISON */}
      <Section bg="off">
        <Wrap>
          <div className="mb-8">
            <Eyebrow>05 How We Compare</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04] mt-2">
              Not your average<br />supplement brand.
            </h2>
            <p className="text-g700 text-base mt-3">
              Here's what you're actually getting when you choose Shortcutx over a typical off-the-shelf supplement.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[13px] font-bold text-g500 uppercase tracking-wider border-b border-g200 w-[30%]">What matters to you</th>
                  <th className="py-3 px-4 text-[13px] font-bold uppercase tracking-wider border-b border-g200 bg-brand-red-pale text-brand-red w-[35%]">Shortcutx</th>
                  <th className="py-3 px-4 text-[13px] font-bold text-g500 uppercase tracking-wider border-b border-g200 w-[35%]">Typical Brand</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-g100/50'}>
                    <td className="py-3 px-4 text-[14px] font-semibold text-g700 border-b border-g200">{row.feature}</td>
                    <td className="py-3 px-4 text-[13px] text-g900 border-b border-g200 bg-brand-red-pale/40">
                      <span className="text-green-600 font-bold mr-1">✓</span>{row.scx}
                    </td>
                    <td className="py-3 px-4 text-[13px] text-g500 border-b border-g200">
                      <span className="text-g300 font-bold mr-1">✗</span>{row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/pages/the-science" className="inline-flex items-center gap-2 mt-6 font-bold text-sm text-g900 border border-g900 px-6 py-3 rounded-full hover:bg-g900 hover:text-white transition-all">
            See the Full Comparison →
          </Link>
        </Wrap>
      </Section>

      {/* STATS */}
      <section className="bg-g900 py-16">
        <Wrap>
          <span className="text-[13px] font-bold tracking-[.16em] uppercase text-[#ff6b66] mb-3 block">06 Why Singapore Chooses Shortcutx</span>
          <h2 className="font-black text-[clamp(26px,3.2vw,40px)] text-white leading-[1.04] mb-10">
            Built to be felt,<br />not just claimed.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.num} className="border border-white/10 rounded-xl p-5">
                <p className="font-black text-4xl text-white mb-2">{stat.num}</p>
                <p className="text-white/60 text-[14px] leading-snug">{stat.label}</p>
                <div className="mt-4 h-1 rounded-full bg-white/10">
                  <div className="h-1 rounded-full bg-brand-red" style={{ width: stat.num === '#1' ? '100%' : stat.num === '150K+' ? '88%' : stat.num === '4.9★' ? '96%' : '60%' }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-[13px] mt-6">Real numbers, always. If we can't stand behind a figure, we won't publish it.</p>
        </Wrap>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-white">
        <Wrap>
          <div className="text-center mb-10">
            <span className="inline-block bg-brand-red text-white text-[11px] font-black tracking-[.16em] uppercase px-4 py-2 rounded-full mb-5">TRUSTED BY SINGAPORE</span>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04]">
              150,000+ Boxes. #1 On Shopee.<br />
              <em className="not-italic text-brand-red">Backed By The Best.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {ambassadors.map(amb => (
              <div key={amb.name} className="rounded-2xl overflow-hidden border border-g200">
                <div className="h-36 flex items-center justify-center text-5xl" style={{ background: amb.bg }}>
                  {amb.emoji}
                </div>
                <div className="p-4">
                  <p className="font-black text-g900 text-sm leading-snug mb-1">{amb.name}</p>
                  <p className="text-g500 text-[12px] leading-snug mb-2">{amb.role}</p>
                  <span className="bg-g100 text-g700 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">BRAND PARTNER</span>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* REAL RESULTS / TESTIMONIALS */}
      <Section bg="off">
        <Wrap>
          <div className="text-center mb-10">
            <Eyebrow>Real Results</Eyebrow>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-g900 leading-[1.04] mt-2">
              10,000+ happy customers.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-g200">
                <div className="text-brand-gold text-lg mb-3"><Stars count={t.stars} /></div>
                <p className="text-g700 leading-relaxed mb-5 text-[15px]">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-g900 text-sm">{t.name}</p>
                    <p className="text-[12px] text-g500">{t.product}</p>
                  </div>
                  <span className="bg-g100 text-g500 text-[11px] font-bold px-2.5 py-1 rounded-full">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* BRAND STORY TEASER */}
      <section className="py-16 bg-g900">
        <Wrap className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[13px] font-bold tracking-[.16em] uppercase text-white/50 mb-3 block">Our Story</span>
            <h2 className="font-black text-[clamp(28px,3.6vw,44px)] text-white leading-[1.04] mb-5">
              Born in Singapore.<br />Built for real people.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Shortcutx started because we were tired of supplements that promised the world and delivered nothing. We decided to fix it — starting with transparency, real doses, and a nutritionist on call.
            </p>
            <Link to="/pages/our-story" className="inline-flex items-center justify-center bg-white text-g900 font-bold text-sm px-7 py-3 rounded-full hover:bg-g100 transition-all">
              Meet the Team
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
              <p className="font-black text-3xl text-brand-gold">$2M+</p>
              <p className="text-white/60 text-[13px] mt-1">In products sold</p>
            </div>
          </div>
        </Wrap>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-g200 p-4 flex gap-3">
        <a href="#catalog" className="flex-1 text-center bg-brand-red text-white font-bold text-sm py-3 rounded-full">
          Shop All Products
        </a>
        <Link to="/pages/find-your-fit" className="flex-1 text-center border-2 border-brand-red text-brand-red font-bold text-sm py-3 rounded-full">
          Find Your Fit
        </Link>
      </div>
    </>
  )
}
