import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/header/Header.jsx'
import SectionHero from './components/sectionHero/SectionHero.jsx'
import Pizza from "./components/pizza/Pizza.jsx"
import SectionSobre from './components/sectionSobre/SectionSobre.jsx'
import SectionCards from './components/sectionCards/SectionCards.jsx'
import SectionPizza from './components/sectionPizza/SectionPizza.jsx'
import SectionDepoimentos from './components/sectionDepoimentos/SectionDepoimentos.jsx'
import Footer from './components/footer/Footer.jsx'
import Loader from './components/loader/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function handleLoad() {
      setLoading(false)
    }

    if (document.readyState === 'complete') {
      const t = setTimeout(() => setLoading(false), 2000)
      return () => clearTimeout(t)
    }

    window.addEventListener('load', handleLoad)
    // fallback: garante que o loader suma mesmo que o evento load não dispare
    const fallback = setTimeout(() => setLoading(false), 4000)
    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div>
      <Loader loading={loading} />
      <Pizza />
      <Header />
      <SectionHero />
      <SectionPizza />
      <SectionCards />
      <SectionSobre />
      <SectionDepoimentos />
      <Footer />
    </div>
  )
}

export default App
