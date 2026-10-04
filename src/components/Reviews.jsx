import Reveal from './Reveal.jsx'
import { reviews } from '../data.js'

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><h2 className="mb-10 font-display text-3xl font-extrabold sm:text-5xl">From The Parents</h2></Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} i={i}>
            <figure data-hover className="h-full rounded-3xl border border-(--line) bg-(--card) p-7">
              <div className="font-display text-5xl leading-none text-gold">“</div>
              <blockquote className="mt-2 text-(--muted)">{r.text}</blockquote>
              <figcaption className="mt-6 font-semibold">{r.name}<span className="block text-sm font-normal text-(--muted)">{r.role}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
