
import './App.css'
import Hero from './sections/Hero/Hero'
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';
import Parallax from './Parallax/Parallax';
import Contact from './Contact/Contact';
import Portfolio from './Skills/Portfolio/Portfolio';
function App() {
  
  return (
    <> <Hero />
       <Parallax type='services' />
       
       <Portfolio />
       <Parallax type='portfolio' />
       
       <Skills />
       <Contact />
       <Footer />
     </>
  )
}

export default App
