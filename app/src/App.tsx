import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Works from './sections/Works';
import Experience from './sections/Experience';
import About from './sections/About';
import Photography from './sections/Photography';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <div className="editorial-shell min-h-screen bg-cream">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Works />
        <Experience />
        <About />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
