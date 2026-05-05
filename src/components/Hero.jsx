import { site } from '../data/site'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-bone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 sm:pt-24 lg:pt-28 pb-12 sm:pb-14 lg:pb-18">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 fade-up text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="block w-12 h-px bg-brass" aria-hidden />
              <span className="text-[11px] uppercase tracking-[0.32em] text-brass">
                {site.cityTag} · Est. {site.established}
              </span>
            </div>

            <h1 className="font-serif text-[38px] sm:text-6xl lg:text-[72px] leading-[1.01] tracking-[-0.015em] text-balance">
              A Precision Haircut,
              <br />
              A Clean Shave,
              <br />
              <span className="italic font-light text-graphite-light">A Chair Worth Returning To</span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-[15px] sm:text-lg leading-relaxed text-bone/80">
              {site.intro}
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 items-center">
              <a href={site.bookingUrl} className="btn btn-brass">
                Book The Chair
              </a>
              <a href="#services" className="btn btn-ghost-on-ink">
                See Services
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 grid grid-cols-3 gap-4 pt-6 lg:pt-0 text-center lg:text-left fade-up" style={{ animationDelay: '180ms' }}>
            <Pillar label="Walk-In" value="Welcome" />
            <Pillar label="Booking" value="Fast Reply" />
            <Pillar label="Cash &amp; Card" value="Accepted" />
          </aside>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center justify-center lg:justify-between gap-4 text-[11px] uppercase tracking-[0.32em] text-bone/55 text-center">
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
