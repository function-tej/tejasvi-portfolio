import React from 'react';
import {
  MdReact,
  MdHtml,
  MdCss,
  MdJs,
  MdGit,
  MdApi,
  MdRedux,
  MdTesting,
  MdVite,
  MdRoute,
  MdQuery,
  MdLock
} from './Icons';

const About = () => {
  const coreSkills = [
    { name: 'React.js', icon: <MdReact /> },
    { name: 'HTML5', icon: <MdHtml /> },
    // { name: 'CSS3', icon: <MdCss /> },
    { name: 'JavaScript', icon: <MdJs /> },
    { name: 'Git & GitHub', icon: <MdGit /> },
    { name: 'REST APIs', icon: <MdApi /> },
    { name: 'Redux Toolkit', icon: <MdRedux /> },
    { name: 'TanStack Query', icon: <MdQuery /> },
    { name: 'Manual Testing', icon: <MdTesting /> },
    { name: 'Vite', icon: <MdVite /> },
    { name: 'React Router', icon: <MdRoute /> },
    // { name: 'Auth & OAuth', icon: <MdLock /> }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        {/* Left Column: Intro text */}
        <div className="about-intro">
          <span className="about-label">ABOUT ME</span>

          <h2 className="about-title">
            Passionate React Developer
          </h2>

          <p className="about-description">
            React.js Developer with 3+ years of experience building responsive web applications and admin dashboards. Skilled in React.js, JavaScript, HTML, CSS, REST APIs, authentication (Google & Facebook Login), API integration, and reusable component development.
          </p>

          <p className="about-description">
            Experienced in collaborating with backend teams to deliver scalable, high-quality applications. Currently expanding expertise in TanStack Query and modern React best practices.
          </p>

          <div className="about-badges-group">
            <span className="about-badge">3+ Years Experience</span>
            <span className="about-badge">React.js</span>
            <span className="about-badge">Git & GitHub</span>
            <span className="about-badge">Manual Testing</span>
            <span className="about-badge">REST API Integration</span>
          </div>
        </div>

        {/* Right Column: Skills Card */}
        <div className="about-skills-card-wrapper">
          <div className="about-skills-card">
            <h3 className="skills-card-title">CORE TECHNOLOGIES</h3>

            <div className="skills-grid">
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-box">
                  <div className="skill-box-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-box-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
