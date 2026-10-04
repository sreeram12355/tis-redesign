import Reveal from './Reveal.jsx'
import { ranks, people } from '../data.js'

export default function Recognition() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-4 md:grid-cols-2">
        {ranks.map((r, i) => (
          <Reveal key={r.by} i={i}>
            <div data-hover className="flex h-full items-center gap-6 rounded-3xl bg-[#10213f] p-7 text-white">
              <span className="font-display text-6xl font-extrabold text-gold">{r.rank}</span>
              <div><h3 className="font-semibold">{r.where}</h3><p className="mt-1 text-sm text-white/70">{r.by}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal><h2 className="mb-8 mt-24 font-display text-3xl font-extrabold sm:text-4xl">Influential Personalities On Campus</h2></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <Reveal key={p.name} i={i}>
            <div data-hover className="h-full rounded-3xl border border-(--line) bg-(--card) p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gold font-bold text-black">{p.name[0]}</div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-(--muted)">({p.note})</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
