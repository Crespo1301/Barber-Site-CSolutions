import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end pb-14 lg:pb-20 border-b border-bone/10">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brass">CSolutions Template</div>
            <h3 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-bone text-balance">
              Like The Look
              <br />
              <span className="italic font-light text-bone/65">
                Built For Your Shop In Days, Not Months
              </span>
            </h3>
            <p className="mt-6 max-w-xl text-bone/70 leading-relaxed">
              This template is sold ready to deploy. Buyer brings their photos, services, and booking link;
              CSolutions ships the rest. Dark variants, branded variants, and custom builds are also on offer.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-4 lg:gap-5">
            <a
              href="https://carloscrespo.info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brass"
            >
              Get This For Your Shop
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn btn-ghost-on-ink"
            >
              Talk To CSolutions
            </a>
          </div>
        </div>

        <div className="pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="font-serif text-2xl tracking-tight text-bone">{site.brand}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-bone/55">
              Est. {site.established} · {site.cityTag}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-bone/45 mb-3">Visit</div>
            <p className="text-bone/85">{site.address.line1}</p>
            <p className="text-bone/55 text-sm">{site.address.line2}</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-bone/45 mb-3">Direct</div>
            <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="block text-bone/85 hover:text-brass">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-bone/55 text-sm hover:text-brass mt-1">
              {site.email}
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-bone/45 mb-3">Follow</div>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/85 hover:text-brass"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-bone/45">
          <span>&copy; {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>
            Site by{' '}
            <a href="https://carloscrespo.info" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-bone">
              CSolutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
