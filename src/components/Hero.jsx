import { site } from '../data/site'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-bone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-7 fade-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-12 h-px bg-brass" aria-hidden />
              <span className="text-[11px] uppercase tracking-[0.32em] text-brass">
                {site.cityTag} · Est. {site.established}
              </span>
            </div>

            <h1 className="font-serif text-[44px] sm:text-6xl lg:text-[80px] leading-[1.02] tracking-[-0.015em] text-balance">
              A Precision Haircut,
              <br />
              A Clean Shave,
              <br />
              <span className="italic font-light text-graphite-light">A Chair Worth Returning To</span>
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-bone/80">
              {site.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href={site.bookingUrl} className="btn btn-brass">
                Book The Chair
              </a>
              <a href="#services" className="btn btn-ghost-on-ink">
                See Services
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 grid grid-cols-3 gap-5 pt-8 lg:pt-0 fade-up" style={{ animationDelay: '180ms' }}>
            <Pillar label="Walk-In" value="Welcome" />
            <Pillar label="Booking" value="Texts back" />
            <Pillar label="Cash &amp; Card" value="Accepted" />
          </aside>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.32em] text-bone/55">
          <span>Tue – Sat By Appointment</span>
          <span aria-hidden>· · ·</span>
          <span>{site.phone}</span>
          <span aria-hidden>· · ·</span>
          <span>Walk-Ins Welcome</span>
        </div>
      </div>
    </section>
  )
}

function Pillar({ label, value }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.32em] text-bone/55">{label}</div>
      <div className="mt-2 font-serif text-xl text-bone leading-tight">{value}</div>
    </div>
  )
}
