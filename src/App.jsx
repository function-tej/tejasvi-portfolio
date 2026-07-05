import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Footer from './components/Footer';
import './portfolio.css';

function App() {
  return (
    <>
      <div className="bg-glow-container">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
      </div>
      <div className="grid-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        {/* <Project /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

