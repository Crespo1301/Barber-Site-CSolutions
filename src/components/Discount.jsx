export default function Discount() {
  return (
    <section id="discount" className="relative py-28 lg:py-36 overflow-hidden border-y border-ink-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/military-discount.jpg)' }}
      />
      <div className="absolute inset-0 bg-ink-950/85" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="divider-rule mb-6">Service Honored</span>
        <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
          A Standing Discount for Military, Veterans, and First Responders
        </h2>
        <p className="mt-6 text-lg text-ink-200/90 leading-relaxed max-w-2xl mx-auto">
          Active duty, veterans, police, fire, and EMS receive a year-round discount on every service. No
          paperwork, no hoops. Just show your ID at the chair.
        </p>
        <div className="mt-10 inline-flex flex-col items-center">
          <div className="font-serif text-6xl text-brass-400">25% Off</div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-200/70">Every Visit, Every Service</div>
        </div>
      </div>
    </section>
  )
}
