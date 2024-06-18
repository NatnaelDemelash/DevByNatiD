import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] ">
        <div className="max-w-7xl mx-auto p-6">
          <Navbar />
          <Hero />
        </div>

        <div className="absolute h-10 xl:h-32 bg-gradient-to-t from-black -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
