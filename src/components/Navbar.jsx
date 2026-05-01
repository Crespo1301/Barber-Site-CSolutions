import { useEffect, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#discount', label: 'Offer' },
  { href: '#contact', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur border-b border-ink-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full border border-brass-500 flex items-center justify-center text-brass-400 font-serif text-lg group-hover:bg-brass-500 group-hover:text-ink-950 transition">
            T
          </span>
          <span className="font-serif text-xl tracking-wide text-ink-100">{site.brand}</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-ink-200">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brass-400 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={site.bookingUrl}
          className="hidden md:inline-flex items-center px-5 py-2.5 border border-brass-500 text-brass-400 text-xs uppercase tracking-[0.25em] hover:bg-brass-500 hover:text-ink-950 transition"
        >
          Contact
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink-100 w-10 h-10 flex items-center justify-center"
        >
          <span className="block w-6 h-0.5 bg-current relative before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-current before:-translate-y-2 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-current after:translate-y-2" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur border-t border-ink-800">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.2em] text-ink-200">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-brass-400">
                {l.label}
              </a>
            ))}
            <a
              href={site.bookingUrl}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 border border-brass-500 text-brass-400 hover:bg-brass-500 hover:text-ink-950 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
