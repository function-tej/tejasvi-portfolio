import React from 'react';
import {
  MdReact,
  MdDevices,
  MdLink,
  MdDatabase,
  MdClipboard,
  MdSchool
} from './Icons';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <MdDevices />,
      description: 'Building responsive and modern user interfaces with React and modern web technologies.',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'Redux Toolkit', 'Sass/SCSS', 'Bootstrap']
    },
    {
      title: 'React Ecosystem',
      icon: <MdReact />,
      description: 'Using powerful React tools and patterns to build scalable and maintainable applications.',
      skills: ['React Router', 'Context API', 'TanStack Query', 'Custom Hooks', 'Reusable Components', 'Axios']
    },
    {
      title: 'APIs & Authentication',
      icon: <MdLink />,
      description: 'Integrating APIs and implementing secure authentication in web applications.',
      skills: ['REST APIs', 'Axios / Fetch API', 'Google Login', 'Facebook Login']
    },
    {
      title: 'Tools',
      icon: <MdDatabase />,
      description: 'Tools and utilities that help in efficient development and collaboration.',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm / yarn', 'ESLint', 'Prettier']
    },
    {
      title: 'Testing & Quality',
      icon: <MdClipboard />,
      description: 'Ensuring the quality and reliability of applications through testing practices.',
      skills: ['Manual Testing', 'Bug Reporting']
    },
    {
      title: 'Learning & Growth',
      icon: <MdSchool />,
      description: 'Continuously learning new technologies and improving development skills.',
      skills: ['Prompt Engineering (Learning)', 'AI Productivity Tools', 'Modern React Best Practices']
    }
  ];

  return (
    <section id="skills" className="section skills-section-layout">
      <div className="portfolio-container">
        <span className="skills-section-label">EXPERTISE</span>

        <h2 className="skills-section-title">
          Technical Skills
        </h2>

        <p className="skills-section-subtitle">
          A versatile toolkit spanning frontend development, backend systems, and workflow automation.
        </p>

        <div className="skills-cards-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-column-card">
              <div className="skills-column-card-header">
                <div className="skills-column-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skills-column-title">{category.title}</h3>
              </div>

              <p className="skills-column-desc">{category.description}</p>

              <div className="skills-pills-container">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skills-pill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
