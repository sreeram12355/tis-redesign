export default function Marquee() {
  const item = <span className="mx-8 font-display text-4xl font-extrabold sm:text-6xl">LET'S DO it <span className="text-gold">with Tulas</span></span>
  return (
    <div className="overflow-hidden border-y border-(--line) py-6" aria-hidden>
      <div className="marquee flex w-max whitespace-nowrap">{[0, 1, 2, 3].map((k) => <span key={k}>{item}</span>)}</div>
    </div>
  )
}
