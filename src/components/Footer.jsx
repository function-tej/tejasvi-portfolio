import { Link } from 'react-router-dom';
import { MdLinkedIn, MdGithub, MdEmail, MdPhone } from './Icons';

const Footer = () => {
  return (
    <footer id="contact" className="footer-dark-theme">
      <div className="portfolio-container">
        <div className="footer-grid">
          {/* Column 1: About & Socials */}
          <div className="footer-col-about">
            <Link to="#home" className="footer-logo">
              Tejasvi<span className="logo-dot">.</span>
            </Link>
            <p className="footer-desc">
              React Developer building responsive web applications, admin dashboards, and custom API integrations.
            </p>
            <div className="footer-social-icons">
              <Link to="https://www.linkedin.com/in/tejasvidhiman1/" className="footer-social-icon-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <MdLinkedIn />
              </Link>
              <Link to="https://github.com/function-tej" className="footer-social-icon-btn" target="_blank" rel="noopener noreferrer" title="GitHub">
                <MdGithub />
              </Link>
              <Link to="mailto:tejasvidhiman98@gmail.com" className="footer-social-icon-btn" title="Email">
                <MdEmail />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col-nav">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-nav-columns">
              <ul className="footer-nav-links">
                <li className="footer-nav-link-item"><Link to="#home">Home</Link></li>
                <li className="footer-nav-link-item"><Link to="#about">About</Link></li>
                <li className="footer-nav-link-item"><Link to="#skills">Skills</Link></li>
                <li className="footer-nav-link-item"><Link to="#experience">Experience</Link></li>
              </ul>
              <ul className="footer-nav-links">
                <li className="footer-nav-link-item"><Link to="#projects">Projects</Link></li>
                <li className="footer-nav-link-item"><Link to="#education">Academics</Link></li>
                <li className="footer-nav-link-item"><Link to="#contact">Contact</Link></li>
                <li className="footer-nav-link-item"><Link to="https://github.com/function-tej" target="_blank" rel="noreferrer">GitHub</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col-contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-info">
              <Link to="mailto:tejasvidhiman98@gmail.com" className="footer-contact-item">
                <span className="footer-contact-icon"><MdEmail /></span>
                <span>tejasvidhiman98@gmail.com</span>
              </Link>
              <Link to="tel:+918218512192" className="footer-contact-item">
                <span className="footer-contact-icon"><MdPhone /></span>
                <span>+91 9027579223</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Tejasvi Dhiman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
