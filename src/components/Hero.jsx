import { motion, useScroll, useTransform } from 'framer-motion'

const title = 'Welcome to Tulas International School (TIS)'.split(' ')

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 120])
  const y2 = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <motion.div style={{ y: y1 }} className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">
          CBSE · Co-ed · Class 4 to 12 · Dehradun
        </motion.p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl">
          {title.map((w, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
              <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-8 max-w-2xl space-y-4 text-lg text-(--muted)">
          <p>TIS is one of India’s top boarding and day schools in Dehradun, India.</p>
          <p>Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://admission.tis.edu.in" className="rounded-full bg-gold px-7 py-3 font-semibold text-black">Apply Now</a>
            <a href="#enquire" className="rounded-full border border-(--line) px-7 py-3 font-semibold text-(--fg)">Enquire Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
