import Reveal from './Reveal.jsx'
import { sports } from '../data.js'

export default function Sports() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Sports?</h2>
        <p className="mt-4 max-w-xl text-(--muted)">It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life.</p>
      </Reveal>
      <ul className="mt-10 flex flex-wrap gap-3">
        {sports.map((s, i) => (
          <Reveal key={s} i={(i % 8) * 0.4}>
            <li data-hover className="rounded-full border border-(--line) bg-(--card) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-gold hover:text-black">{s}</li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
