import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/studio-vertical.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-2xl fade-up">
          <span className="divider-rule mb-8">Established Craft</span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink-100 leading-[1.05] text-balance">
            {site.tagline}
          </h1>
          <p className="mt-8 text-lg text-ink-200 max-w-xl leading-relaxed">
            A focused barbershop built around the details. Sharp lines, hot towels, and the kind of conversation
            that makes the chair feel like the best seat in town.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.bookingUrl}
              className="inline-flex items-center px-8 py-4 bg-brass-500 text-ink-950 text-xs uppercase tracking-[0.3em] font-medium hover:bg-brass-400 transition"
            >
              Book Your Chair
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 border border-ink-200/30 text-ink-100 text-xs uppercase tracking-[0.3em] hover:border-brass-400 hover:text-brass-400 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-ink-200/60 text-xs uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="mt-2 w-px h-10 bg-brass-500/60" />
      </div>
    </section>
  )
}
