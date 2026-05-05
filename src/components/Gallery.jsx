import { useState } from 'react'
import { cuts } from '../data/site'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink text-bone py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <header className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-on-ink">The Work</span>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Before, After
              <br />
              <span className="italic font-light text-bone/60">No Filters, No Flexing</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-bone/70 leading-relaxed">
            This is where the haircut quality should sell the shop. Replace these placeholders with strong
            before-and-after photos so customers can quickly see range, consistency, and finished results.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {cuts.map((c, i) => (
            <BeforeAfter
              key={c.label}
              index={i}
              before={c.before}
              after={c.after}
              label={c.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfter({ before, after, label, index }) {
  const [pos, setPos] = useState(50)

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
        <img
          src={after}
          alt={`${label}, after`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label}, before`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 w-px bg-bone pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-bone/20 bg-bone text-ink flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 2 L1 7 L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 2 L13 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.32em] text-bone/85">
          Before
        </span>
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.32em] text-brass">
          After
        </span>

        <input
          aria-label={`Compare before and after, ${label}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-[12px] uppercase tracking-[0.24em]">
        <span className="text-bone/85">{label}</span>
        <span className="font-mono text-bone/45">No. {String(index + 1).padStart(2, '0')}</span>
      </figcaption>
    </figure>
  )
}
