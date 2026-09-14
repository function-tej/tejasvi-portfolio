// React imports
import { useState, useEffect } from 'react';
import './Hero.css';
import { MdEmail } from './Icons';

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Hero = () => {
  const ROLES = ['Frontend Developer', 'UI/UX Enthusiast'];
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeRole = ROLES[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(activeRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 55);
    } else {
      timer = setTimeout(() => {
        setRoleText(activeRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 110);
    }

    if (!isDeleting && charIndex === activeRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="new-hero-section">
      <div className="hero-stars"></div>

      <div className="new-hero-grid">
        {/* Left Column */}
        <div className="new-hero-left">


          <h1 className="new-hero-title">
            Hi, I'm <span className="gradient-name-teal">Tejasvi</span><br />
            <span className="gradient-name-gold">Dhiman</span>
          </h1>

          <div className="new-hero-typing">
            <span className="gradient-typing">{roleText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="new-hero-desc">
            I build digital experiences that turn ambitious ideas into fast, scalable products—from seamless e-commerce platforms to intelligent dashboards, automated workflows, and cloud-powered systems.  </p>
        

          <div className="hero-stats-wrapper">
            <div className="hero-stats-grid">
              <div className="stat-box">
                <span className="stat-number">20+</span>
                <span className="stat-label">LIVE PROJECTS</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">3+</span>
                <span className="stat-label">YEARS<br/>EXPERIENCE</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">CLIENT<br/>SATISFACTION</span>
              </div>
             
            </div>
          </div>
        </div>
        {/* Right Column (3D Universe / Spiral Graphic) */}
        <div className="new-hero-right">
          <div className="universe-container">
            <div className="galaxy">
              <div className="orbit orbit-teal-1"></div>
              <div className="orbit orbit-gold-1"></div>
              <div className="orbit orbit-teal-2"></div>
              <div className="orbit orbit-gold-2"></div>
              <div className="orbit orbit-teal-3"></div>
              <div className="orbit orbit-gold-3"></div>
              <div className="core-star"></div>
            </div>

            {/* Existing Cards */}
            <div className="floating-glass-card top">
              <span className="glass-card-label">Backend</span>
              <span className="glass-card-tech">Node.js • Express</span>
            </div>
            
            <div className="floating-glass-card bottom">
              <span className="glass-card-label">Frontend</span>
              <span className="glass-card-tech">React • Next.js</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
