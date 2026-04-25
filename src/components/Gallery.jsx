import { useState } from 'react'
import { cuts } from '../data/site'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-rule mb-6">Before & After</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
            The Work Speaks
          </h2>
          <p className="mt-5 text-ink-200/80">
            Drag the slider on each cut to see the transformation. Real clients, real chairs, no filters.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuts.map((c) => (
            <BeforeAfter key={c.label} before={c.before} after={c.after} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfter({ before, after, label }) {
  const [pos, setPos] = useState(50)

  return (
    <figure className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-ink-900 border border-ink-800">
        <img src={after} alt={`After: ${label}`} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={before} alt={`Before: ${label}`} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div
          className="absolute inset-y-0 w-0.5 bg-brass-400 pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-brass-400 bg-ink-950/80 flex items-center justify-center text-brass-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2 L1 7 L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 2 L13 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="absolute top-3 left-3 px-2 py-1 bg-ink-950/80 text-ink-100 text-[10px] uppercase tracking-[0.2em]">
          Before
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-brass-500 text-ink-950 text-[10px] uppercase tracking-[0.2em]">
          After
        </div>

        <input
          aria-label={`Compare before and after for ${label}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink-200/80 tracking-wide">{label}</figcaption>
    </figure>
  )
}
