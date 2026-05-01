export default function About() {
  return (
    <section id="about" className="bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 border border-brass-500/40" aria-hidden />
          <img
            src="/images/template-placeholder.svg"
            alt="Template owner placeholder"
            className="relative w-full h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="divider-rule mb-6">Owner Story</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
            Replace this section with the barber&apos;s actual story.
          </h2>
          <p className="mt-6 text-ink-200 leading-relaxed text-lg">
            This placeholder is meant for the owner background, approach to the craft, and the kind of experience
            clients should expect in the chair. Keep it personal, direct, and local when this template is reused.
          </p>
          <p className="mt-5 text-ink-200 leading-relaxed">
            Add trust markers that are actually true for the business: years of experience, specialties,
            atmosphere, neighborhood credibility, and what makes the shop worth choosing.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat number="10+" label="Years Experience" />
            <Stat number="2K+" label="Appointments Served" />
            <Stat number="5 Star" label="Review Rating Slot" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="border-l border-brass-500/50 pl-4">
      <div className="font-serif text-3xl text-brass-400">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-200/70 leading-snug">{label}</div>
    </div>
  )
}
