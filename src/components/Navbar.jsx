import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isScrolling = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
    
    // Smooth scroll manually since react-router-dom Link doesn't do it for hashes automatically
    const el = document.getElementById(linkName);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Temporarily disable scroll spy while smooth scrolling
    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // 1s is enough for native smooth scroll to finish
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll Spy Effect
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'academics', 'contact'];

    const handleScroll = () => {
      if (isScrolling.current) return;
      
      let currentActive = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is within 200px of the top of the viewport, consider it active
          if (rect.top <= 200) {
            currentActive = sectionId;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="custom-navbar"
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` }}
    >
      {/* Left: Logo Section */}
      <Link to="#home" className="custom-nav-brand" onClick={() => handleLinkClick('home')}>
        <div className="custom-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
        </div>
        <div className="custom-logo-text-wrapper">
          <span className="custom-logo-name">Tejasvi Dhiman</span>
          <span className="custom-logo-role">FRONTEND DEVELOPER</span>
        </div>
      </Link>

      {/* Center: Navigation Links */}
      <div className={`custom-nav-links ${isOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Academics', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`#${item.toLowerCase()}`}
            className={`custom-nav-link ${activeLink === item.toLowerCase() ? 'active' : ''}`}
            onClick={() => handleLinkClick(item.toLowerCase())}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="custom-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

    </nav>
  );
};

export default Navbar;

