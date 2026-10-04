import { motion } from 'framer-motion'

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button onClick={onToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} aria-pressed={dark}
      className="flex h-8 w-14 items-center rounded-full border border-(--line) bg-(--card) p-1">
      <motion.span layout transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`grid h-6 w-6 place-items-center rounded-full bg-gold text-xs ${dark ? 'ml-auto' : ''}`}>
        {dark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
