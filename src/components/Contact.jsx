import { useState } from 'react'
import { site } from '../data/site'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const message = form.message.value.trim()
    const body = `Name: ${name}%0APhone: ${phone}%0A%0A${message}`
    window.location.href = `mailto:${site.email}?subject=Booking%20Request&body=${body}`
    setTimeout(() => setStatus('idle'), 1200)
  }

  return (
    <section id="contact" className="bg-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="eyebrow">Visit & Book</span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink">
            Find The Chair
          </h2>
          <p className="mt-6 text-graphite leading-relaxed max-w-xl">
            Walk in if the chair is open. Call ahead if you&apos;re coming from a distance. Text is the fastest
            way to lock in a time.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
            <Field
              label="Service & ideal time"
              name="message"
              placeholder="Skin fade + beard, Saturday afternoon"
              textarea
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2 mt-6 flex flex-wrap items-center justify-between gap-5">
              <p className="text-[12px] uppercase tracking-[0.24em] text-graphite-light">
                We Reply By Text Within The Day
              </p>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Opening Mail' : 'Request Appointment'}
              </button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-12">
          <Block title="Location">
            <p className="text-ink text-lg font-serif leading-tight">{site.address.line1}</p>
            <p className="text-graphite mt-1">{site.address.line2}</p>
          </Block>

          <Block title="Direct">
            <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="block text-ink text-lg font-serif leading-tight hover:text-brass-deep transition-colors">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-graphite mt-1 hover:text-ink transition-colors">
              {site.email}
            </a>
          </Block>

          <Block title="Hours">
            <ul className="space-y-2.5">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between gap-4 text-graphite">
                  <span>{h.day}</span>
                  <span className="font-mono text-[13px] text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </Block>
        </aside>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, textarea, className = '' }) {
  return (
    <label className={`flex flex-col ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.24em] text-graphite mt-6">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={3}
          placeholder={placeholder}
          className="input-line resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="input-line"
        />
      )}
    </label>
  )
}

function Block({ title, children }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.28em] text-graphite-light mb-4">{title}</div>
      {children}
    </div>
  )
}
