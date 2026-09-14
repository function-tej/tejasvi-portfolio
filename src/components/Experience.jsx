import React, { useState } from 'react';
import './Experience.css';

const experiences = [
    {
        id: 'toxsl-job',
        company: 'ToXSL Technologies',
        role: 'Software Developer',
        duration: 'JAN 2023 - PRESENT',
        category: 'Frontend Developer',
        location: 'Mohali, Punjab',
        summary: 'Worked as a full-time software developer focusing on scalable enterprise solutions.',
        contributions: [
            'Developed and maintained responsive, scalable user interfaces using React.js, JavaScript, HTML/CSS, Bootstrap, and modern frontend practices.',
            'Implemented features such as social login, Stripe payments, real-time chat, live tracking, and interactive dashboards across multiple projects',
            'Worked with Redux/Redux Toolkit, React Router, and API integration to build maintainable and scalable frontend applications.',
            'Developed and maintained admin panels and role-based interfaces for different business workflows and user types.',
            'Optimized application performance and improved user experience through component optimization, efficient state management, and responsive design.'
        ],
        impact: {
            areas: ['React.js', 'Next.js', 'Redux Toolkit', 'JavaScript', 'REST APIs', 'Socket.io', 'Stripe', 'RBAC', 'Git']
        }
    },
    {
        id: 'toxsl-training',
        company: 'ToXSL Technologies',
        role: 'Trainee',
        duration: 'SEP 2022 - DEC 2022',
        category: 'Training & Development',
        location: 'Mohali, Punjab',
        summary: 'Intensive training program focusing on modern web development practices.',
        contributions: [
            'Completed rigorous training in React.js.',
            'Built multiple internal tools and proof-of-concept applications under senior mentorship.',
            'Learned industry best practices for version control, code reviews, and agile methodologies.'
        ],
        impact: {
            areas: ['React.js', 'Agile']
        }
    }
];

const Experience = () => {
    const [activeId, setActiveId] = useState(experiences[0].id);

    const activeExp = experiences.find(exp => exp.id === activeId);

    return (
        <section id="experience" className="section exp-section">
            <div className="portfolio-container exp-container">

                {/* Header Section */}
                <div className="exp-header">
                    <h2 className="exp-title">
                        Professional <span className="exp-highlight">Path</span>
                    </h2>
                    <p className="exp-subtitle">
                        Building scalable products across SaaS, CRM, AI-powered platforms, and desktop applications.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="exp-content">

                    {/* Left Timeline */}
                    <div className="exp-timeline-wrapper">
                        <div className="exp-timeline-line"></div>

                        <div className="exp-timeline-list">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    className={`exp-timeline-item ${activeId === exp.id ? 'active' : ''}`}
                                    onClick={() => setActiveId(exp.id)}
                                >
                                    <div className="exp-timeline-dot"></div>

                                    <div className="exp-card-mini">
                                        <div className="exp-card-header">
                                            <h4 className="exp-card-company">{exp.company}</h4>
                                            {activeId === exp.id && <span className="exp-badge-mini">CURRENT</span>}
                                        </div>
                                        <p className="exp-card-role">{exp.role}</p>
                                        <p className="exp-card-date">{exp.duration}</p>
                                        <p className="exp-card-cat">{exp.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Detail View */}
                    <div className="exp-detail-wrapper">
                        {/* The key prop forces a re-render and re-triggers the CSS animation */}
                        <div key={activeExp.id} className="exp-detail-card animate-fade-slide">

                            <div className="exp-detail-top">
                                <div className="exp-detail-badges">
                                    <div className="exp-icon-box">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg>
                                    </div>
                                    <span className="exp-badge">{activeExp.category}</span>
                                    {activeId === experiences[0].id && (
                                        <span className="exp-badge exp-badge-teal">CURRENT ROLE</span>
                                    )}
                                </div>
                                <div className="exp-detail-date">{activeExp.duration}</div>
                            </div>

                            <h3 className="exp-detail-role">{activeExp.role}</h3>
                            <p className="exp-detail-company">{activeExp.company}</p>
                            <p className="exp-detail-location">{activeExp.location}</p>

                            <p className="exp-detail-summary">{activeExp.summary}</p>

                            <div className="exp-contributions-section">
                                <h5 className="exp-contributions-title">KEY CONTRIBUTIONS</h5>
                                <ul className="exp-contributions-list">
                                    {activeExp.contributions.map((point, index) => (
                                        <li key={index} className="exp-contribution-item">
                                            <span className="exp-bullet-icon">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {activeExp?.impact && (
                                <div className="exp-impact-section">
                                    <div className="exp-divider"></div>
                                    <h5 className="exp-impact-title">IMPACT</h5>
                                    
                                    <div className="exp-impact-areas">
                                        {activeExp?.impact?.areas?.map(area => (
                                            <span key={area} className="exp-impact-pill-area">{area}</span>
                                        ))}
                                    </div>
                                    
                                    
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
