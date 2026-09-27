import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/project_mockup.png';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: 'Furniture Studio',
      subtitle: 'SHOWCASE WEBSITE',
      description: 'Designed and developed a sleek, modern visiting and showcase web application for a furniture studio, focusing on aesthetic user interface design and responsive layout.',
      bullets: ['Fully responsive mobile-first UI', 'Reusable React components', 'Deployed on Vercel'],
      tags: ['React.js', 'Tailwind CSS', 'Vercel'],
      image: '/images/furitnure.jpeg',
      demoUrl: 'https://furniture-studio-two.vercel.app/',
      repoUrl: '#'
    },
    {
      title: 'Role-Based Access Control',
      subtitle: 'REACT DASHBOARD',
      description: 'Developed a secure, multi-role enterprise dashboard application tailored for organizational management, featuring distinct access levels and workflows for HR, Managers, and Employees.',
      bullets: [
        'Role-Based Auth: Implemented dynamic UI rendering and route protection based on user roles.',
        'Task & Leave Management: Interactive modules to assign tasks and track leave requests.',
        'Responsive UI/UX: Styled a clean, professional admin interface optimized for all viewports.'
      ],
      tags: ['React.js', 'Tailwind CSS', 'Vercel'],
      image: '/images/accesshub.jpeg',
      demoUrl: 'https://rbac-dashboard-three-rust.vercel.app/login',
      repoUrl: 'https://github.com/function-tej/rbac-dashboard'
    },
    {
      title: 'Travel Explorer',
      subtitle: 'FULL-STACK TRAVEL PLATFORM',
      description: 'Developed a dynamic, full-stack travel exploration and booking web application designed to help users discover curated global destinations, explore popular tour packages, and browse hotel data seamlessly.',
      bullets: [
        'Relational Database: Integrated Supabase (PostgreSQL) to fetch real-time structured data.',
        'Modern Frontend: Built responsive UI using Next.js App Router and Tailwind CSS.',
        'Secure Deployment: Configured automated CI/CD pipeline on Netlify for production.'
      ],
      tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Netlify'],
      image: '/images/travel.jpeg',
      demoUrl: 'https://travel-the-world-ttw.netlify.app/',
      repoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Background Watermark */}
      <div className="projects-watermark">Projects</div>

      {/* Header */}
      <div className="projects-header-wrapper">
        <span className="projects-small-label">PROJECTS</span>
        <h2 className="projects-main-title">
          Building Scalable Applications & Intuitive Interfaces
        </h2>
      </div>

      {/* Grid */}
      <div className="showcase-grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="showcase-card">
              <div className="showcase-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="showcase-image"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="showcase-image-fallback">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="showcase-details">
                <div className="showcase-subtitle">{project.subtitle}</div>
                <h3 className="showcase-title">{project.title}</h3>

                <p className="showcase-description">{project.description}</p>

                <ul className="showcase-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="showcase-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="showcase-tag">{tag}</span>
                  ))}
                </div>

                <div className="showcase-actions-bottom">
                  <Link to={project.demoUrl} target="_blank" rel="noreferrer" className="showcase-link">
                    Visit live site
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </Link>
                  <span className="showcase-display-url">{project.displayUrl}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
