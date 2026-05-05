import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Discount from './components/Discount'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bone text-ink min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Discount />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
