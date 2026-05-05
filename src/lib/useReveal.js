import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const optionsRef = useRef(options)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible')
            io.unobserve(node)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12, ...optionsRef.current },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return ref
}
