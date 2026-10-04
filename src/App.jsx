import useTheme from './hooks/useTheme.js'
import ScrollProgress from './components/ScrollProgress.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import Sports from './components/Sports.jsx'
import Recognition from './components/Recognition.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [dark, toggleTheme] = useTheme()
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Navbar dark={dark} onToggle={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Sports />
        <Recognition />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
