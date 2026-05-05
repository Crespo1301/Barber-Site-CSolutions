import { stats } from '../data/site'

export default function About() {
  return (
    <section id="about" className="bg-bone py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <span className="eyebrow">The Owner</span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink">
            Behind The Chair, A Craft Taken Seriously
          </h2>
        </div>

        <div className="lg:col-span-7 lg:pt-3">
          <p className="font-serif text-2xl sm:text-3xl leading-snug text-pretty text-ink">
            This section should make the barber feel real. Use it to build trust, show personality, and explain
            why someone should feel confident booking their first visit.
          </p>
          <p className="mt-8 text-graphite leading-relaxed max-w-prose">
            Fill this with the owner&apos;s actual background: years of experience, specialties, training, and the
            kind of experience they want to create in the shop. This is where customers decide whether the
            business feels skilled, local, and worth trusting.
          </p>
          <p className="mt-5 text-graphite leading-relaxed max-w-prose">
            Add a second paragraph for atmosphere and expectations: walk-ins, music, family-friendly details,
            appointment flow, or anything else that lowers hesitation before that first booking.
          </p>

          <hr className="hairline my-12" />

          <dl className="grid grid-cols-3 gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-[0.28em] text-graphite-light leading-snug">
                  {s.label}
                </dt>
                <dd className="mt-3 font-serif text-4xl sm:text-5xl text-ink leading-none">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
