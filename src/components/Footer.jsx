import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12">
        <div className="border border-brass-500/30 bg-ink-900/80 px-6 py-8 lg:px-8 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-brass-400">CSolutions Template</p>
            <h3 className="mt-3 font-serif text-3xl text-ink-100">This design and others are available at carloscrespo.info.</h3>
            <p className="mt-3 text-sm text-ink-200/75 leading-relaxed">
              Like the direction? Reach out to get a version tailored to your business, brand, and local market.
            </p>
          </div>
          <a
            href="https://carloscrespo.info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-brass-500 text-ink-950 text-xs uppercase tracking-[0.24em] font-medium hover:bg-brass-400 transition"
          >
            Reach Out
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full border border-brass-500 flex items-center justify-center text-brass-400 font-serif">
            B
          </span>
          <span className="font-serif text-lg text-ink-100">{site.brand}</span>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-ink-200/60 text-center">
          &copy; {new Date().getFullYear()} {site.brand}. All rights reserved.
        </p>

        <p className="text-xs uppercase tracking-[0.25em] text-ink-200/50">
          Site by{' '}
          <a href="https://carloscrespo.info" target="_blank" rel="noopener noreferrer" className="text-brass-400 hover:text-brass-300">
            CSolutions
          </a>
        </p>
      </div>
    </footer>
  )
}
