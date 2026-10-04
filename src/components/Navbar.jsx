import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle.jsx'
import { links } from '../data.js'

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-1 z-50 mx-auto max-w-7xl px-4 pt-3">
      <nav className="flex items-center justify-between rounded-full border border-(--line) bg-(--card)/80 px-5 py-2.5 backdrop-blur-md">
        <a href="#top" className="font-display text-xl font-extrabold">TIS<span className="text-gold">.</span></a>
        <ul className="hidden gap-6 text-sm text-(--muted) lg:flex">
          {links.map((l) => <li key={l}><a href="#top" className="hover:text-(--fg)">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <a href="https://admission.tis.edu.in" className="hidden rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-black sm:block">Apply Now</a>
          <button className="lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mt-2 space-y-3 rounded-3xl border border-(--line) bg-(--card) p-5 lg:hidden">
            {links.map((l) => <li key={l}><a href="#top" onClick={() => setOpen(false)}>{l}</a></li>)}
            <li><a href="https://admission.tis.edu.in" className="font-semibold text-gold">Apply Now →</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
