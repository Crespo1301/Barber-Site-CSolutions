import { services, site } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="bg-ink-900 py-28 lg:py-36 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-rule mb-6">The Menu</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
            Services & Pricing
          </h2>
          <p className="mt-5 text-ink-200/80">
            Every service includes a consultation, hot towel, and styling. Walk-ins welcome when the chair is
            open. Appointments preferred.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.name}
              className="group relative bg-ink-950 border border-ink-800 p-8 hover:border-brass-500/60 transition"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl text-ink-100">{s.name}</h3>
                <span className="font-serif text-2xl text-brass-400">{s.price}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-200/60">{s.duration}</div>
              <p className="mt-5 text-ink-200/85 leading-relaxed">{s.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass-500/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={site.bookingUrl}
            className="inline-flex items-center px-8 py-4 bg-brass-500 text-ink-950 text-xs uppercase tracking-[0.3em] font-medium hover:bg-brass-400 transition"
          >
            Reserve Your Time
          </a>
        </div>
      </div>
    </section>
  )
}
