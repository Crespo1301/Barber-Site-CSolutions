import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800">
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
