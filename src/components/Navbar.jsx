import { useEffect, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Work' },
  { href: '#discount', label: 'Offer' },
  { href: '#contact', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,height] duration-300 ${
        scrolled
          ? 'bg-bone/95 border-b border-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-[height] duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <a href="#top" className="flex items-baseline gap-3 group" aria-label={`${site.brand} home`}>
          <span className="font-serif text-2xl tracking-tight text-ink leading-none">
            {site.brand}
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.32em] text-graphite-light leading-none translate-y-[-2px]">
            Est. {site.established}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[12px] uppercase tracking-[0.24em] text-graphite">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors hover:text-ink focus-visible:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href={site.bookingUrl} className="hidden lg:inline-flex btn btn-primary py-3 px-6">
          Book
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-[5px] text-ink"
        >
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-bone border-b border-rule transition-[max-height,opacity] duration-400 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-base uppercase tracking-[0.22em] text-graphite">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
