import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const HOVER = 'a, button, [data-hover]'

export default function Cursor() {
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 30 })
  const sy = useSpring(y, { stiffness: 400, damping: 30 })

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-cursor')
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setActive(!!e.target.closest?.(HOVER))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [enabled, x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: active ? 64 : 28, height: active ? 64 : 28, backgroundColor: active ? 'rgba(245,184,0,0.25)' : 'rgba(245,184,0,0)' }}
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border-2 border-gold"
    />
  )
}
