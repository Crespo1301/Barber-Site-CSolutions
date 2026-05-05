import { services, site } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <header className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">The Menu</span>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink">
              Six Services, No Upsell
            </h2>
          </div>
          <p className="lg:col-span-5 text-graphite leading-relaxed">
            Every service includes a consultation, hot towel, and styling. Walk-ins welcome when the chair is
            open; appointments preferred. Prices are flat, no surprises at the register.
          </p>
        </header>

        <ol className="border-t border-rule">
          {services.map((s, i) => (
            <li
              key={s.name}
              className="group grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[2.5rem_1fr_auto] gap-x-5 gap-y-2 items-baseline border-b border-rule py-7 sm:py-9 transition-colors hover:bg-bone"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite-light pt-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                  {s.name}
                </h3>
                <p className="mt-2 text-graphite leading-relaxed max-w-prose">
                  {s.description}
                </p>
                <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-graphite-light">
                  {s.duration}
                </div>
              </div>
              <div className="text-right pt-2">
                <span className="font-serif text-3xl sm:text-4xl text-ink leading-none">
                  <span className="text-graphite-light text-xl align-top mr-0.5">$</span>
                  {s.price}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-graphite max-w-md leading-relaxed">
            Can&apos;t find what you need? Ask. Custom requests are welcome, text the shop and we&apos;ll work it out.
          </p>
          <a href={site.bookingUrl} className="btn btn-primary self-start sm:self-auto">
            Reserve Your Time
          </a>
        </div>
      </div>
    </section>
  )
}
