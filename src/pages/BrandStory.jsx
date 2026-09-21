import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Section, Wrap, Eyebrow } from '../components/Section'

const milestones = [
  { year: '2019', title: 'The Problem', body: 'Founder Hidayat spent years buying supplements that didn\'t work. Overpriced, underdosed, full of fillers — built for marketing, not results.' },
  { year: '2020', title: 'The Research', body: 'One year spent with a licensed nutritionist studying what actually works — at the doses the research requires. No shortcuts on the science.' },
  { year: '2021', title: 'Max Plus Launches', body: 'Our flagship fat burner launched with 17 research-backed actives. Sold out in the first week. The rest is history.' },
  { year: '2023', title: 'KKM & Halal Certified', body: 'After two years of compliance work, every Shortcutx product earned full KKM and Halal certification. Non-negotiable for our customers.' },
  { year: '2024', title: '10,000 Customers', body: 'Word of mouth did what advertising couldn\'t. Real results spread faster than any campaign. We hit 10,000 happy customers without a single paid spokesperson.' },
]

const values = [
  {
    icon: '◈',
    title: 'Transparency First',
    body: 'We list every active ingredient with its exact dose on the label. No proprietary blends hiding underdosed actives.',
  },
  {
    icon: '◎',
    title: 'Evidence-Backed Only',
    body: 'If there\'s no peer-reviewed evidence for an ingredient at our dose, it doesn\'t make the formula. No exceptions.',
  },
  {
    icon: '◉',
    title: 'Built for Southeast Asia',
    body: 'We\'re not adapting Western formulas. Our products are developed for the Southeast Asian body, climate, and lifestyle.',
  },
  {
    icon: '◐',
    title: 'Nutritionist on Call',
    body: 'Every customer gets free access to our in-house nutritionist. Because a pill without a plan is just a pill.',
  },
]

export default function BrandStory() {
  return (
    <>
      {/* Hero */}
      <section className="bg-g900 py-32">
        <Wrap className="max-w-3xl">
          <Eyebrow light>Our Story</Eyebrow>
          <h1 className="font-black text-[60px] md:text-[72px] leading-[1.02] text-white mb-8 text-balance">
            Built for people who are tired of being sold to.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            We started Shortcutx because we were customers first — and we were frustrated.
            Frustrated by supplements that promised everything, delivered nothing, and laughed
            all the way to the bank.
          </p>
        </Wrap>
      </section>

      {/* Founder quote */}
      <Section bg="off">
        <Wrap className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-brand-red pl-8 py-2">
            <p className="font-black text-3xl text-g900 leading-snug text-balance mb-6">
              "I spent S$3,000 on supplements before I found anything that worked. I decided
              to make the thing I wished existed."
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg">H</span>
              </div>
              <div>
                <p className="font-bold text-g900">Hidayat</p>
                <p className="text-g500 text-sm">Founder, Shortcutx</p>
              </div>
            </footer>
          </blockquote>
        </Wrap>
      </Section>

      {/* Timeline */}
      <Section bg="white">
        <Wrap className="max-w-3xl mx-auto">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 className="font-black text-4xl text-g900 mb-12">How we got here.</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-8 pb-10 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shrink-0 z-10">
                    <span className="text-white font-black text-[11px]">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-g200 mt-2" />
                  )}
                </div>
                <div className="pt-2.5 pb-2">
                  <h3 className="font-bold text-xl text-g900 mb-2">{m.title}</h3>
                  <p className="text-g700 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Values */}
      <Section bg="dark">
        <Wrap>
          <div className="text-center mb-12">
            <Eyebrow light>What We Stand For</Eyebrow>
            <h2 className="font-black text-4xl text-white">Our non-negotiables.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <p className="text-brand-red text-3xl mb-4">{v.icon}</p>
                <h3 className="font-bold text-white text-xl mb-3">{v.title}</h3>
                <p className="text-white/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Press / Social proof */}
      <Section bg="off">
        <Wrap className="text-center">
          <Eyebrow>As Seen In</Eyebrow>
          <h2 className="font-black text-3xl text-g900 mb-10">Singapore's most talked-about supplement brand.</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['CNA938', 'Her World', 'Men\'s Health SG', 'Mothership', 'The Straits Times'].map(p => (
              <span key={p} className="text-g400 font-black text-lg tracking-tight opacity-50 hover:opacity-100 transition-opacity">
                {p}
              </span>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* CTA */}
      <Section bg="red">
        <Wrap className="text-center">
          <h2 className="font-black text-4xl text-white mb-4 text-balance">Ready to see the difference?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Start with our nutritionist quiz — it takes 2 minutes and we'll match you with exactly what you need.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pages/find-your-fit">
              <Button size="lg" variant="white">Take the Quiz</Button>
            </Link>
            <Link to="/collections/fat-burners">
              <Button size="lg" variant="ghost" className="border-white/40 text-white hover:border-white">Shop Products</Button>
            </Link>
          </div>
        </Wrap>
      </Section>
    </>
  )
}
