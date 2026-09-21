import Button from '../components/Button'
import Badge from '../components/Badge'
import { Eyebrow, Wrap } from '../components/Section'

const tokens = [
  { name: 'brand-red',       hex: '#9b0d0c', label: 'Primary Red' },
  { name: 'brand-red-dark',  hex: '#700a09', label: 'Red Dark' },
  { name: 'brand-red-pale',  hex: '#fbebea', label: 'Red Pale' },
  { name: 'brand-gold',      hex: '#ffd479', label: 'Gold' },
  { name: 'g900',            hex: '#333333', label: 'Charcoal' },
  { name: 'g700',            hex: '#4d4d4d', label: 'Gray 700' },
  { name: 'g500',            hex: '#808080', label: 'Gray 500' },
  { name: 'g200',            hex: '#e6e6e6', label: 'Gray 200' },
  { name: 'g100',            hex: '#f2f2f2', label: 'Gray 100' },
]

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-brand-off py-20">
      <Wrap className="space-y-20">

        {/* Header */}
        <div>
          <Eyebrow>Design System</Eyebrow>
          <h1 className="font-black text-5xl text-g900 mb-3">Shortcutx UI</h1>
          <p className="text-g700 text-lg">Tokens, components and patterns for the Shortcutx website.</p>
        </div>

        {/* Colours */}
        <div>
          <h2 className="font-bold text-2xl text-g900 mb-6 pb-3 border-b border-g200">Colours</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {tokens.map(t => (
              <div key={t.name}>
                <div
                  className="w-full aspect-square rounded-xl mb-2 border border-g200"
                  style={{ background: t.hex }}
                />
                <p className="text-[11px] font-bold text-g900">{t.label}</p>
                <p className="text-[11px] text-g500 font-mono">{t.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 className="font-bold text-2xl text-g900 mb-6 pb-3 border-b border-g200">Typography</h2>
          <div className="space-y-5">
            {[
              { label: 'Display / Hero',  cls: 'font-black text-[52px] leading-[1.03]', sample: 'Burn Fat. Feel Good.' },
              { label: 'H1',              cls: 'font-black text-4xl',                    sample: 'Singapore\'s #1 Brand' },
              { label: 'H2',              cls: 'font-bold text-3xl',                     sample: 'The Science Behind It' },
              { label: 'H3',              cls: 'font-bold text-xl',                      sample: 'Max Plus — 60 Capsules' },
              { label: 'Body large',      cls: 'text-[16.5px] text-g700 leading-relaxed', sample: 'A few honest questions about your goals, your days, and your sleep.' },
              { label: 'Body',            cls: 'text-sm text-g700 leading-relaxed',      sample: 'Free shipping on orders above S$100. Singapore\'s most trusted formula.' },
              { label: 'Eyebrow',         cls: 'text-[13px] font-bold tracking-[0.16em] uppercase text-brand-red', sample: 'Find Your Fit' },
              { label: 'Mono / Label',    cls: 'text-[12px] font-semibold tracking-wider uppercase text-g500', sample: '15 minutes · No obligation' },
            ].map(t => (
              <div key={t.label} className="flex gap-8 items-baseline">
                <span className="text-[11px] text-g500 w-28 shrink-0">{t.label}</span>
                <span className={t.cls}>{t.sample}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div>
          <h2 className="font-bold text-2xl text-g900 mb-6 pb-3 border-b border-g200">Buttons</h2>
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-g500 mb-3">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Shop Now</Button>
                <Button variant="secondary">Learn More</Button>
                <Button variant="ghost">Find Your Fit</Button>
                <div className="bg-g900 p-3 rounded-lg">
                  <Button variant="white">Book Free Call</Button>
                </div>
              </div>
            </div>
            {/* Sizes */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-g500 mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h2 className="font-bold text-2xl text-g900 mb-6 pb-3 border-g200 border-b">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="red">Best Seller</Badge>
            <Badge variant="dark">New</Badge>
            <Badge variant="gold">Free Gift</Badge>
            <Badge variant="gray">Out of Stock</Badge>
          </div>
        </div>

        {/* Spacing */}
        <div>
          <h2 className="font-bold text-2xl text-g900 mb-6 pb-3 border-b border-g200">Spacing Scale</h2>
          <div className="flex flex-col gap-3">
            {[2,4,6,8,12,16,20,24].map(s => (
              <div key={s} className="flex items-center gap-4">
                <span className="text-[11px] text-g500 font-mono w-8">{s*4}px</span>
                <div className="bg-brand-red-pale border border-brand-red-pale2 rounded" style={{ width: s * 4, height: 16 }} />
              </div>
            ))}
          </div>
        </div>

      </Wrap>
    </div>
  )
}
