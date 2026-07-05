import React from 'react';
import projectImg from '../assets/project_mockup.png';

const Project = () => {
  const projects = [
    {
      title: 'CryptoSphere Dashboard',
      description: 'A real-time cryptocurrency tracking dashboard featuring live charts, interactive indicators, portfolio management, and news feed integration.',
      image: projectImg,
      tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'WebSockets'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Apex Analytics Platform',
      description: 'A premium SaaS analytics dashboard that aggregates user behavior metrics, sales data, and custom tracking nodes with complex visualization graphs.',
      image: projectImg,
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'D3.js'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Synthetix AI Chat Room',
      description: 'An advanced conversational interface connecting custom LLMs with real-time text formatting, streaming response UI, and dynamic user avatars.',
      image: projectImg,
      tags: ['React', 'FastAPI', 'MongoDB', 'OpenAI API', 'TailwindCSS'],
      demoUrl: '#',
      repoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section portfolio-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.repoUrl} className="project-link-btn" title="View Repository" target="_blank" rel="noopener noreferrer">
                    ⚙️
                  </a>
                  <a href={project.demoUrl} className="project-link-btn" title="Live Demo" target="_blank" rel="noopener noreferrer">
                    🔗
                  </a>
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
