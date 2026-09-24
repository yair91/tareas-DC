import About from './components/About'
import Contacto from './components/Contacto'
import Educacion from './components/Educacion'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Hobbies from './components/Hobbies'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'

function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Proyectos />
        <Tecnologias />
        <Educacion />
        <Hobbies />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
