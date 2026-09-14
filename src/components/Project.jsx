import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/project_mockup.png';
// TODO: Replace placeholders below with actual imports
// import accessHubImg from '../assets/accesshub.png';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: 'Role-Based Access Control',
      subtitle: 'REACT DASHBOARD',
      description: 'A frontend Role-Based Access Control (RBAC) admin dashboard built with React. Features secure role-based navigation and protected routes.',
      bullets: ['Dynamic sidebar', 'Role-based navigation', 'User management interface'],
      tags: ['React', 'TailwindCSS', 'Router', 'Vite'],
      image: projectImg,
      demoUrl: 'https://rbac-dashboard-three-rust.vercel.app/',
      displayUrl: 'rbac-dashboard.vercel.app',
      repoUrl: 'https://github.com/function-tej/rbac-dashboard'
    },
    {
      title: 'Hiczone.services',
      subtitle: 'SERVICE PROVIDER PLATFORM',
      description: 'On-demand service marketplace connecting customers with verified professionals — booking, scheduling, quotes and provider ratings.',
      bullets: ['Provider verification', 'Booking & scheduling', 'Reviews & ratings'],
      tags: ['Laravel', 'MySQL', 'JavaScript', 'REST API'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      demoUrl: '#',
      displayUrl: 'hiczone.services',
      repoUrl: '#'
    },
    {
      title: 'AI Chat Interface',
      subtitle: 'REAL-TIME APPLICATION',
      description: 'Real-time AI conversational interface with context-aware memory, streaming responses, and intuitive chat management.',
      bullets: ['Streaming responses', 'Context memory', 'Real-time updates'],
      tags: ['Next.js', 'Socket.io', 'OpenAI API', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      demoUrl: '#',
      displayUrl: 'ai-chat.app',
      repoUrl: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Rotates every 4 seconds
    
    return () => clearInterval(timer);
  }, [projects.length, isPaused]);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'active';
    
    // Calculate prev and next taking wrapping into account
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';

    return 'hidden';
  };

  return (
    <section id="projects" className="projects-3d-section">
      {/* Background Watermark */}
      <div className="projects-watermark">Projects</div>

      {/* Header */}
      <div className="projects-header-wrapper">
        <span className="projects-small-label">PROJECTS</span>
        <h2 className="projects-main-title">
          Building Scalable Applications & Intuitive Interfaces
        </h2>
      </div>

      {/* Carousel */}
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="carousel-arrow prev-arrow" onClick={handlePrev} aria-label="Previous project">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {projects.map((project, index) => {
          const positionClass = getPositionClass(index);
          const projectNum = String(index + 1).padStart(2, '0');

          return (
            <div 
              key={index} 
              className={`carousel-item ${positionClass}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="carousel-number">{projectNum}</div>
              
              <div className="carousel-image-wrapper">
                {/* Fallback box if image is missing, matching the screenshot's sharp edges */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="carousel-image" 
                    loading="lazy" 
                    decoding="async" 
                  />
                ) : (
                  <div style={{width: '100%', height: '100%', backgroundColor: '#222', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <span style={{color: '#555'}}>{project.title}</span>
                  </div>
                )}
              </div>

              {/* Details shown only when active */}
              <div className="carousel-details">
                <div className="carousel-subtitle">{project.subtitle}</div>
                <h3 className="carousel-title">{project.title}</h3>
                
                <p className="carousel-description">{project.description}</p>
                
                <ul className="carousel-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="carousel-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="carousel-tag">{tag}</span>
                  ))}
                </div>

                <div className="carousel-actions-bottom">
                  <Link to={project.demoUrl} target="_blank" rel="noreferrer" className="carousel-link">
                    Visit live site
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </Link>
                  <span className="carousel-display-url">{project.displayUrl}</span>
                </div>
              </div>
              
            </div>
          );
        })}
        
        <button className="carousel-arrow next-arrow" onClick={handleNext} aria-label="Next project">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  );
};

export default Project;
