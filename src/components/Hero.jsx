import { useState, useEffect } from 'react';
import { MdEmail, MdGithub, MdLinkedIn } from './Icons';
import developerAvatar from '../assets/developer_avatar.png';

const ROLES = ['React.js Developer', 'Frontend Engineer', 'UI/UX Specialist'];

const Hero = () => {
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
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid">
        {/* Left Column: Intro */}
        <div className="hero-intro">
          <span className="hero-location-tag">PORTFOLIO &mdash; REACT DEVELOPER</span>

          <h1 className="hero-name-heading">
            Tejasvi<br />
            Dhiman<span className="logo-dot">.</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-line"></span>
            <span className="hero-role-text">{roleText || '\u00A0'}<span className="role-cursor">|</span></span>
          </div>

          <p className="hero-description-text">
            React.js Developer with 3+ years of experience building responsive web applications and admin dashboards. Skilled in React.js, JavaScript, HTML, CSS, REST APIs, authentication (Google & Facebook Login), API integration, and reusable component development. Experienced in collaborating with backend teams to deliver scalable, high-quality applications. Currently expanding expertise in TanStack Query and modern React best practices.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="hero-primary-btn">Start a Conversation</a>
            <a href="https://github.com" className="hero-secondary-btn" target="_blank" rel="noopener noreferrer">
              <MdGithub style={{ marginRight: '8px', fontSize: '18px' }} />
              GitHub
            </a>
          </div>

          <div className="hero-social-links">
            <a href="https://www.linkedin.com/in/tejasvidhiman1/" className="social-icon-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <MdLinkedIn style={{ fontSize: '18px' }} />
            </a>
            <a href="mailto:tejasvidhiman98@gmail.com" className="social-icon-btn" title="Email">
              <MdEmail style={{ fontSize: '18px' }} />
            </a>
          </div>
        </div>

        {/* Right Column: Status Card with Avatar */}
        <div className="hero-status-card-wrapper">
          <div className="hero-status-card">
            
            <div className="card-profile-header">
              {/* <div className="avatar-frame">
                <img src={developerAvatar} alt="Tejasvi Dhiman" className="avatar-img" />
                <span className="status-pulse-dot"></span>
              </div> */}
              <div className="header-meta">
                <span className="meta-label">CURRENTLY</span>
                <h3 className="meta-title">React Developer</h3>
                <span className="status-pill-text">Open to work</span>
              </div>
            </div>

            <div className="card-divider"></div>

            <div className="card-stats">
              <div className="card-stat-item">
                <span className="card-stat-number">3+</span>
                <span className="card-stat-label">Years Experience</span>
              </div>
              <div className="card-stat-item">
                <span className="card-stat-number">25+</span>
                <span className="card-stat-label">Projects Built</span>
              </div>
              <div className="card-stat-item">
                <span className="card-stat-number">1</span>
                <span className="card-stat-label">Companies</span>
              </div>
            </div>

            <div className="card-divider"></div>

            <div className="card-expertise">
              <span className="expertise-label">EXPERTISE</span>
              <div className="expertise-tags">
                <span className="expertise-tag">React.js</span>
                <span className="expertise-tag">Git & GitHub</span>
                <span className="expertise-tag">Manual Testing</span>
                <span className="expertise-tag">REST API Integration</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
