import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Inline Icons for the new layout
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const WhatsAppFabIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`new-about-section ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="new-about-container">

        {/* Header Section */}
        <div className="new-about-header">
          <span className="about-pill">ABOUT ME</span>
          <Link to="/images/resume.pdf" download="Tejasvi_Dhiman_Resume.pdf" target="_blank" className="btn-resume">
            <DownloadIcon /> Download Resume
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="new-about-grid">

          {/* Left Column: Photo Card */}
          <div className="about-photo-card">
            <img src="/images/teji.jpg" alt="Tejasvi Dhiman" className="about-photo" loading="lazy" decoding="async" />
            <div className="about-photo-overlay">
              <h3 className="about-photo-name">Tejasvi Dhiman</h3>
              <span className="about-photo-role">Frontend Developer</span>
            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className="about-content-right">
            <h3 className="about-content-title">
              Frontend Developer building <span className="gradient-text-cyan">scalable</span><br />
              <span className="gradient-text-cyan">digital platforms</span>
            </h3>

            <p className="about-content-desc">
              Frontend Developer with 3+ years of experience building responsive and scalable web applications using React.js, Next.js, JavaScript, Tailwind CSS, Redux, React Router, and TanStack Query. Experienced in REST API integration and implementing real-world features including social authentication, Stripe payments, real-time chat, live tracking, and manual testing. Skilled in developing user-friendly interfaces, managing application state, integrating APIs, and debugging frontend issues. </p>



            {/* Bullet Points */}
            <div className="about-bullet-grid">
              <div className="about-bullet">
                <CheckCircleIcon />
                <span className="bullet-text">Frontend delivery: React.js, JavaScript, UI/UX, responsive design</span>
              </div>
              <div className="about-bullet">
                <CheckCircleIcon />
                <span className="bullet-text">State & Data Management: Redux Toolkit, React Router, TanStack Query, REST API integration, API data handling</span>
              </div>
              <div className="about-bullet">
                <CheckCircleIcon />
                <span className="bullet-text">Advanced Features & Integrations: Social Login, Stripe Payment Integration, Live Tracking, Real-Time Chat using Socket.</span>
              </div>
              <div className="about-bullet">
                <CheckCircleIcon />
                <span className="bullet-text">Development & Testing: Manual Testing, debugging, bug fixing, performance optimization, Git/GitHub, reusable component development.</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="about-contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><EmailIcon /></div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">tejasvidhiman98@gmail.com</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-info">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+91 9027579223</span>
                </div>
              </div>
              
            </div>

            {/* Actions removed (moved to header) */}
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
