import ChatBox from './components/ChatBox';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="bg-customBackground">
        <div className="max-w-7xl mx-auto p-6">
          <Navbar />
          <Hero />
        </div>

        <div className="absolute h-10 xl:h-32 bg-gradient-to-t from-black -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 mt-20">
        <Skills />
        <Work />
        <Experience />
        <Footer />
      </div>

      <div className='hidden md:block fixed right-10 bottom-14 z-50'>
          <ChatBox />
      </div>
    </div>
  );
}
