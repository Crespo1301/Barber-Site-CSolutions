import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="bg-ink-900 py-28 lg:py-36 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
          <span className="divider-rule mb-6">Visit & Book</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-100 leading-tight text-balance">
            Find the Chair
          </h2>
          <p className="mt-5 text-ink-200/85 max-w-xl leading-relaxed">
            Walk in if the chair is open. Call ahead if you are coming in from a distance. Text is the fastest
            way to lock in a time.
          </p>

          <form
            className="mt-10 grid sm:grid-cols-2 gap-5"
            onSubmit={(e) => {
              e.preventDefault()
              const name = e.target.name.value
              const phone = e.target.phone.value
              const message = e.target.message.value
              const body = `Name: ${name}%0APhone: ${phone}%0A%0A${message}`
              window.location.href = `mailto:${site.email}?subject=Booking%20Request&body=${body}`
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="bg-ink-950 border border-ink-800 px-4 py-3.5 text-ink-100 placeholder-ink-200/40 focus:border-brass-500 focus:outline-none"
            />
            <input
              name="phone"
              required
              placeholder="Phone number"
              className="bg-ink-950 border border-ink-800 px-4 py-3.5 text-ink-100 placeholder-ink-200/40 focus:border-brass-500 focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What service, and when works for you?"
              className="sm:col-span-2 bg-ink-950 border border-ink-800 px-4 py-3.5 text-ink-100 placeholder-ink-200/40 focus:border-brass-500 focus:outline-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex justify-center items-center px-8 py-4 bg-brass-500 text-ink-950 text-xs uppercase tracking-[0.3em] font-medium hover:bg-brass-400 transition"
            >
              Request Appointment
            </button>
          </form>
        </div>

        <aside className="lg:col-span-2 space-y-10">
          <Block title="Location">
            <p className="text-ink-100">{site.address.line1}</p>
            <p className="text-ink-200/75">{site.address.line2}</p>
          </Block>

          <Block title="Contact">
            <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="block text-ink-100 hover:text-brass-400">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-ink-200/85 hover:text-brass-400 mt-1">
              {site.email}
            </a>
          </Block>

          <Block title="Hours">
            <ul className="space-y-2">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-ink-200/85">
                  <span>{h.day}</span>
                  <span className="text-ink-100">{h.time}</span>
                </li>
              ))}
            </ul>
          </Block>
        </aside>
      </div>
    </section>
  )
}

function Block({ title, children }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-brass-400 mb-3">{title}</div>
      <div className="border-l border-brass-500/40 pl-5">{children}</div>
    </div>
  )
}
