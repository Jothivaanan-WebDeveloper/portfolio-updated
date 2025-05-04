import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Trivia from './components/Trivia'
import Footer from './components/Footer'
import FloatingActionButton from './components/Helpers/FloatingActionButton'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Journey />
      <Trivia />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
