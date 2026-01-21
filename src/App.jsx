import './App.css'
import Header from './components/header/Header.jsx'
import SectionHero from './components/sectionHero/SectionHero.jsx'
import Pizza from "./components/pizza/Pizza.jsx"
import SectionSobre from './components/sobre/SectionSobre.jsx'
import SectionCards from './components/sectionCards/SectionCards.jsx'

function App() {  
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionSobre />
      <SectionCards />
    </div>
  )
}

export default App
