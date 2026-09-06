import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Global subtle cyber grid background */}
      <div className="fixed inset-0 cyber-grid opacity-25 pointer-events-none -z-20" />

      {/* Atmospheric ambient lighting blurs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none -z-20" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[180px] rounded-full pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
