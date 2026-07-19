import { MdLinkedIn, MdGithub, MdEmail, MdPhone } from './Icons';

const Footer = () => {
  return (
    <footer id="contact" className="footer-dark-theme">
      <div className="portfolio-container">
        <div className="footer-grid">
          {/* Column 1: About & Socials */}
          <div className="footer-col-about">
            <a href="#home" className="footer-logo">
              Tejasvi<span className="logo-dot">.</span>
            </a>
            <p className="footer-desc">
              React Developer building responsive web applications, admin dashboards, and custom API integrations.
            </p>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/tejasvidhiman1/" className="footer-social-icon-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <MdLinkedIn />
              </a>
              <a href="https://github.com" className="footer-social-icon-btn" target="_blank" rel="noopener noreferrer" title="GitHub">
                <MdGithub />
              </a>
              <a href="mailto:tejasvidhiman98@gmail.com" className="footer-social-icon-btn" title="Email">
                <MdEmail />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col-nav">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-links">
              <li className="footer-nav-link-item"><a href="#home">Home</a></li>
              <li className="footer-nav-link-item"><a href="#about">About</a></li>
              <li className="footer-nav-link-item"><a href="#skills">Skills</a></li>
              <li className="footer-nav-link-item"><a href="#education">Education</a></li>
              <li className="footer-nav-link-item"><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col-contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-info">
              <a href="mailto:tejasvidhiman98@gmail.com" className="footer-contact-item">
                <span className="footer-contact-icon"><MdEmail /></span>
                <span>tejasvidhiman98@gmail.com</span>
              </a>
              <a href="tel:+918218512192" className="footer-contact-item">
                <span className="footer-contact-icon"><MdPhone /></span>
                <span>+91 9027579223</span>
              </a>
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
