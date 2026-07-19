import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll Spy & Scroll Effect
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'education', 'projects'];

    const handleScroll = () => {
      // Toggle scrolled class
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy
      const scrollPosition = window.scrollY + 120; // Offset by header height
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Execute once on mount to highlight correct link

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('home')}>
          Tejasvi<span className="logo-dot">.</span>
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>

        <div className={`navbar-links-container ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}>
              <a href="#home" onClick={() => handleLinkClick('home')}>Home</a>
            </li>
            <li className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}>
              <a href="#about" onClick={() => handleLinkClick('about')}>About</a>
            </li>
            <li className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`}>
              <a href="#skills" onClick={() => handleLinkClick('skills')}>Skills</a>
            </li>
            <li className={`navbar-link ${activeLink === 'education' ? 'active' : ''}`}>
              <a href="#education" onClick={() => handleLinkClick('education')}>Education</a>
            </li>
            <li className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`}>
              <a href="#projects" onClick={() => handleLinkClick('projects')}>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
