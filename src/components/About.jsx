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
            This is where the owner&apos;s story goes, how they learned the trade, what they care about, who they
            cut for, and what a client should expect the moment they sit down.
          </p>
          <p className="mt-8 text-graphite leading-relaxed max-w-prose">
            Replace this paragraph with the real background. Years in the chair, where they apprenticed, the
            specialties (skin fades, beards, classic shaves), and the kind of room they want to run. Keep it
            personal and direct. Local credibility beats corporate polish.
          </p>
          <p className="mt-5 text-graphite leading-relaxed max-w-prose">
            A second paragraph for atmosphere: walk-in policy, music, whether kids are welcome, whether the
            client should book online or call. Anything that lowers the barrier to that first visit.
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
