import './App.css'
import Header from './components/header/Header.jsx'
import SectionHero from './components/sectionHero/SectionHero.jsx'
import Pizza from "./components/pizza/Pizza.jsx"
import SectionSobre from './components/sectionSobre/SectionSobre.jsx'
import SectionCards from './components/sectionCards/SectionCards.jsx'
import SectionPizza from './components/sectionPizza/SectionPizza.jsx'
import SectionDepoimentos from './components/sectionDepoimentos/SectionDepoimentos.jsx'

function App() {  
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionPizza />
      <SectionCards />
      <SectionSobre />
      <SectionDepoimentos />
    </div>
  )
}

export default App
