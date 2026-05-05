import { offer, site } from '../data/site'

export default function Discount() {
  return (
    <section id="discount" className="bg-bone py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">{offer.eyebrow}</span>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink">
              {offer.headline}
            </h2>
            <p className="mt-7 text-graphite leading-relaxed max-w-xl">
              {offer.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href={site.bookingUrl} className="btn btn-primary">
                Claim The Offer
              </a>
              <span className="text-[11px] uppercase tracking-[0.28em] text-graphite-light">
                {offer.fineprint}
              </span>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative bg-ink text-bone p-10 sm:p-12">
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-bone/55">
                <span>House offer</span>
                <span className="font-mono">No. 01</span>
              </div>

              <div className="pt-10 pb-2">
                <div className="font-serif text-[68px] sm:text-[88px] leading-[0.95] tracking-[-0.02em] text-brass">
                  {offer.badge}
                </div>
                <div className="mt-4 text-[12px] uppercase tracking-[0.32em] text-bone/75">
                  {offer.badgeLabel}
                </div>
              </div>

              <hr className="my-7 border-0 h-px bg-bone/15" />

              <ul className="space-y-2 text-bone/80 text-sm leading-relaxed">
                <li className="flex justify-between gap-4">
                  <span>Keep One Offer Live</span>
                  <span className="text-bone/55">Easy To Understand</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Use It To Convert</span>
                  <span className="text-bone/55">First-Time Visitors</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Swap As Needed</span>
                  <span className="text-bone/55">Seasonal Or Referral</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
