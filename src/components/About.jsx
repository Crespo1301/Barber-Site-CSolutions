export default function About() {
  return (
    <section id="about" className="bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 border border-brass-500/40" aria-hidden />
          <img
            src="/images/headshot-owner.jpg"
            alt="Owner of The Barber Studio"
            className="relative w-full h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="divider-rule mb-6">The Barber</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
            Built on craft, sharpened by every cut.
          </h2>
          <p className="mt-6 text-ink-200 leading-relaxed text-lg">
            What started as a passion for clean lines and timeless style turned into a chair people drive across
            town for. Every appointment gets a real consultation, full attention, and the patience to do the
            small stuff right. No assembly line, no rushing the finish.
          </p>
          <p className="mt-5 text-ink-200 leading-relaxed">
            The chair is open to first-time clients, regulars, fathers and sons, and anyone who has been
            chasing a barber who actually listens. Walk in once. The rest takes care of itself.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat number="10+" label="Years Behind the Chair" />
            <Stat number="2K+" label="Cuts and Counting" />
            <Stat number="5★" label="Client Reviews" />
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
