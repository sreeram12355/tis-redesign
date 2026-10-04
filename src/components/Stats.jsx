import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { stats } from '../data.js'

function Count({ n, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, n, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => { ref.current.textContent = Math.round(v) + suffix } })
    return () => controls.stop()
  }, [inView, n, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="mb-12 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">At Tulas, we always ask, “What’s the secret to making school awesome?”</h2></Reveal>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i}>
            <div data-hover className="h-full rounded-3xl border border-(--line) bg-(--card) p-6 transition-transform hover:-translate-y-2">
              <div className="font-display text-5xl font-extrabold text-gold"><Count n={s.n} suffix={s.suffix} /></div>
              <p className="mt-3 text-sm uppercase tracking-wide text-(--muted)">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
