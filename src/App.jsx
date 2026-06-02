import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { CinematicFooter } from './components/ui/motion-footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-primary selection:text-background">
      <Navbar />
      <main className="relative z-10 w-full bg-background rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl overflow-hidden pb-12">
        <Hero />
        <About />
        <Projects />
      </main>
      <CinematicFooter />
    </div>
  );
}

export default App;
