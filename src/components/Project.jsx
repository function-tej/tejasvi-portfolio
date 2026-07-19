import React from 'react';
import projectImg from '../assets/project_mockup.png';
// TODO: Once you save the image you shared to your assets folder, uncomment the line below and use it for the AccessHub project!
// import accessHubImg from '../assets/accesshub.png';

const Project = () => {
  const projects = [
    {
      title: 'AccessHub',
      type: 'FULL-STACK PLATFORM',
      description: "A frontend Role-Based Access Control (RBAC) admin dashboard built with React. Features secure role-based navigation, protected routes, dynamic sidebar, and a responsive user management interface.",
      image: projectImg, // Change this to accessHubImg once you import it
      tags: ['React', 'TailwindCSS', 'Router', 'Vite'],
      demoUrl: 'https://rbac-dashboard-three-rust.vercel.app/',
      repoUrl: 'https://github.com/function-tej/rbac-dashboard'
    }
  ];

  return (
    <section id="projects" className="section portfolio-container">
      <div className="skills-section-label" style={{ textAlign: "center", marginBottom: "16px" }}>My Work</div>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-showcase-grid">
        {projects.map((project, index) => (
          <div key={index} className="premium-project-card">
            {/* Top Image Area */}
            <div className="project-image-showcase">
              <button className="nav-arrow left-arrow" aria-label="Previous image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="image-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '100px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                  A
                </span>
              </div>

              <button className="nav-arrow right-arrow" aria-label="Next image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* Bottom Content Area */}
            <div className="project-details">
              <div className="project-meta-top">
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <h3 className="project-title-main">{project.title}</h3>
              <p className="project-desc-main">{project.description}</p>

              <div className="project-tags-group">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links-row">
                <a href={project.demoUrl} className="project-link-action" target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href={project.repoUrl} className="project-link-action" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>

              <div className="carousel-indicators">
                <span className="indicator active"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
