export default function Discount() {
  return (
    <section id="discount" className="relative py-28 lg:py-36 overflow-hidden border-y border-ink-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/template-placeholder.svg)' }}
      />
      <div className="absolute inset-0 bg-ink-950/85" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="divider-rule mb-6">Offer Section</span>
        <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
          Highlight one local offer, loyalty perk, or signature promotion.
        </h2>
        <p className="mt-6 text-lg text-ink-200/90 leading-relaxed max-w-2xl mx-auto">
          Keep this area flexible. It can be used for a first-visit offer, neighborhood promotion, military
          discount, or a premium upsell depending on the business.
        </p>
        <div className="mt-10 inline-flex flex-col items-center">
          <div className="font-serif text-6xl text-brass-400">Offer Here</div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-200/70">Replace With Final Terms</div>
        </div>
      </div>
    </section>
  )
}
