import './App.css'
import Header from './components/header/Header.jsx'
import SectionHero from './components/sectionHero/SectionHero.jsx'
import Pizza from "./components/pizza/Pizza.jsx"
import SectionSobre from './components/sobre/SectionSobre.jsx'

function App() {  
  return (
    <div>
      <Pizza />
      <Header />
      <SectionHero />
      <SectionSobre />
    </div>
  )
}

export default App
