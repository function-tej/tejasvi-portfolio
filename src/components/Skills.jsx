import React, { useState } from 'react';
import './Skills.css';
import {
  MdReact,
  MdDevices,
  MdLink,
  MdDatabase,
  MdClipboard,
  MdSchool
} from './Icons';

// Helper to generate SVG path for a donut slice
const createDonutSlice = (cx, cy, rIn, rOut, startAngle, endAngle) => {
  const startRad = (startAngle - 90) * (Math.PI / 180);
  const endRad = (endAngle - 90) * (Math.PI / 180);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  const x1_out = cx + rOut * Math.cos(startRad);
  const y1_out = cy + rOut * Math.sin(startRad);
  const x2_out = cx + rOut * Math.cos(endRad);
  const y2_out = cy + rOut * Math.sin(endRad);

  const x1_in = cx + rIn * Math.cos(endRad);
  const y1_in = cy + rIn * Math.sin(endRad);
  const x2_in = cx + rIn * Math.cos(startRad);
  const y2_in = cy + rIn * Math.sin(startRad);

  return `M ${x1_out} ${y1_out} A ${rOut} ${rOut} 0 ${largeArc} 1 ${x2_out} ${y2_out} L ${x1_in} ${y1_in} A ${rIn} ${rIn} 0 ${largeArc} 0 ${x2_in} ${y2_in} Z`;
};

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredSkillName, setHoveredSkillName] = useState(null);
  const [activeSkillName, setActiveSkillName] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      dotColor: '#2dd4bf', // Teal
      barGradient: 'linear-gradient(90deg, #0f766e, #2dd4bf)',
      skills: [
        { name: 'React.js', percentage: 95, icon: <MdReact />, subSkills: ['Hooks', 'Context API', 'Redux'], projects: ['E-Commerce Platform', 'Portfolio Website'] },
        { name: 'Next.js', percentage: 90, icon: <MdReact />, subSkills: ['App Router', 'SSR/SSG', 'API Routes'], projects: ['Company Blog', 'SEO Landing Page'] },
        { name: 'JavaScript', percentage: 94, icon: <MdDevices />, subSkills: ['ES6+', 'Async/Await', 'DOM'], projects: ['Interactive Dashboard'] },
        { name: 'Tailwind CSS', percentage: 92, icon: <MdDevices />, subSkills: ['Flexbox/Grid', 'Responsive', 'Config'], projects: ['Modern Landing Page'] },
      ]
    },
    {
      title: 'State & Data',
      dotColor: '#fbbf24', // Gold
      barGradient: 'linear-gradient(90deg, #b45309, #fbbf24)',
      skills: [
        { name: 'Redux Toolkit', percentage: 88, icon: <MdDatabase />, subSkills: ['Slices', 'RTK Query', 'Middleware'], projects: ['Global State App'] },
        { name: 'TanStack Query', percentage: 85, icon: <MdDatabase />, subSkills: ['Data Fetching', 'Caching', 'Mutations'], projects: ['Live Data Dashboard'] },
        { name: 'REST API', percentage: 92, icon: <MdLink />, subSkills: ['Fetch API', 'Axios', 'Endpoints'], projects: ['Weather App', 'Task Manager'] },
      ]
    },
    {
      title: 'Testing',
      dotColor: '#34d399', // Green
      barGradient: 'linear-gradient(90deg, #047857, #34d399)',
      skills: [
        { name: 'Manual Testing', percentage: 90, icon: <MdClipboard />, subSkills: ['Test Cases', 'User Flows', 'Edge Cases'], projects: ['QA Reports'] },
        { name: 'Bug Reporting', percentage: 95, icon: <MdClipboard />, subSkills: ['Jira', 'Reproducibility', 'Priority'], projects: ['Issue Tracking'] },
        { name: 'Bug Fixing', percentage: 88, icon: <MdClipboard />, subSkills: ['Debugging', 'Hotfixes', 'Patching'], projects: ['Code Maintenance'] },
      ]
    },
    {
      title: 'Tools & Deployment',
      dotColor: '#fcd34d', // Light Gold
      barGradient: 'linear-gradient(90deg, #d97706, #fcd34d)',
      skills: [
        { name: 'Git', percentage: 92, icon: <MdLink />, subSkills: ['Branching', 'Merging', 'Rebase'], projects: ['Version Control'] },
        { name: 'GitHub', percentage: 95, icon: <MdLink />, subSkills: ['Actions', 'PRs', 'Code Review'], projects: ['Open Source Contributions'] },
        { name: 'Docker', percentage: 80, icon: <MdDatabase />, subSkills: ['Containers', 'Docker Compose', 'Images'], projects: ['Microservices Setup'] },
        { name: 'Vercel', percentage: 90, icon: <MdLink />, subSkills: ['CI/CD', 'Serverless', 'Analytics'], projects: ['Frontend Deployments'] },
        { name: 'Netlify', percentage: 90, icon: <MdLink />, subSkills: ['Forms', 'Identity', 'Functions'], projects: ['Static Sites'] },
        { name: 'Vite', percentage: 88, icon: <MdReact />, subSkills: ['HMR', 'Build Optimization', 'Plugins'], projects: ['Fast Dev Environments'] },
      ]
    }
  ];

  const numSlices = skillCategories.length;
  const sliceAngle = 360 / numSlices;

  return (
    <section id="skills" className="skills-dark-wrapper">
      {/* Background Glow Effects */}
      <div className="skills-glow-orb teal-orb"></div>
      <div className="skills-glow-orb gold-orb"></div>
      <div className="skills-stars-overlay"></div>

      <div className="skills-new-section">
        <div className="skills-section-header">
          <span className="skills-pill-badge">SKILLS</span>
          <h2 className="skills-main-title">
            My Technical <span className="skills-gradient-text">Skill</span>
          </h2>
          <p className="skills-subtitle">
            A versatile toolkit spanning frontend development, backend systems, and workflow automation. </p>
        </div>

        <div className="skills-hybrid-container">
          {/* Left: SVG Chart */}
          <div className="skills-chart-wrapper">
            <svg viewBox="0 0 400 400" className="donut-chart">
              {skillCategories.map((category, index) => {
                const startAngle = index * sliceAngle;
                const endAngle = startAngle + sliceAngle - 2.5; // -2.5 for a clean gap
                const isActive = activeIndex === index;
                const isHovered = hoverIndex === index;

                // Pop out effect logic
                const midRad = (startAngle + (sliceAngle - 2.5) / 2 - 90) * (Math.PI / 180);
                const popDistance = isActive ? 18 : (isHovered ? 8 : 0);
                const translateX = Math.cos(midRad) * popDistance;
                const translateY = Math.sin(midRad) * popDistance;

                const pathData = createDonutSlice(200, 200, 110, 175, startAngle, endAngle);

                const textRadius = 142.5; // Midpoint between 110 and 175
                const textX = 200 + Math.cos(midRad) * textRadius;
                const textY = 200 + Math.sin(midRad) * textRadius;

                // Shorten the title to fit nicely inside the slice (e.g., "Frontend & UI" -> "Frontend")
                const shortTitle = category.title.split(' ')[0];

                return (
                  <g
                    key={index}
                    className={`donut-slice-group ${isActive ? 'active' : ''}`}
                    style={{
                      transform: `translate(${translateX}px, ${translateY}px)`,
                      cursor: 'pointer',
                      transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <path
                      d={pathData}
                      fill={category.dotColor}
                    />
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#050505"
                      style={{
                        fontSize: '13px',
                        fontWeight: '800',
                        pointerEvents: 'none',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {shortTitle}
                    </text>
                  </g>
                );
              })}

              {/* Center Text (Dynamic based on hover/active state) */}
              <text x="200" y="195" textAnchor="middle" className="donut-center-value">
                {hoverIndex !== null ? skillCategories[hoverIndex].skills.length : skillCategories[activeIndex].skills.length}
              </text>
              <text x="200" y="225" textAnchor="middle" className="donut-center-label">
                {hoverIndex !== null ? skillCategories[hoverIndex].title : skillCategories[activeIndex].title}
              </text>
            </svg>
          </div>

          {/* Right: Active Category Details */}
          <div className="skills-details-wrapper">
            <div className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-card-title">{skillCategories[activeIndex].title}</h3>
              </div>

              <div className="skill-list" style={{ '--dot-color': skillCategories[activeIndex].dotColor }}>
                {skillCategories[activeIndex].skills.map((skill, sIdx) => {
                  const isHovered = hoveredSkillName === skill.name;
                  const isActive = activeSkillName === skill.name;

                  return (
                    <div
                      key={sIdx}
                      className={`skill-item ${isActive ? 'skill-item-active' : ''}`}
                      onMouseEnter={() => setHoveredSkillName(skill.name)}
                      onMouseLeave={() => setHoveredSkillName(null)}
                      onClick={() => setActiveSkillName(isActive ? null : skill.name)}
                    >
                      <div className="skill-item-header">
                        <span className="skill-name">
                          <span className="skill-item-icon">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{
                            '--bar-gradient': skillCategories[activeIndex].barGradient,
                            '--dot-color': skillCategories[activeIndex].dotColor,
                            width: `${skill.percentage}%`,
                            animationDelay: `${sIdx * 0.1}s`
                          }}
                        ></div>
                      </div>

                      {/* Sub-skills (Hover Expansion) */}
                      <div className={`skill-expansion-area ${(isHovered || isActive) ? 'expanded' : ''}`}>
                        <div className="skill-expansion-content">
                          {skill.subSkills && (
                            <div className="sub-skills-container">
                              {skill.subSkills.map((sub, i) => (
                                <span key={i} className="sub-skill-pill" style={{ '--dot-color': skillCategories[activeIndex].dotColor }}>
                                  {sub}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Projects (Click Expansion) */}
                          <div className={`projects-expansion-area ${isActive ? 'expanded' : ''}`}>
                            <div className="projects-content">
                              <div className="projects-header">Featured Projects</div>
                              <div className="projects-list">
                                {skill.projects && skill.projects.map((proj, i) => (
                                  <div key={i} className="project-link">
                                    <span className="project-bullet" style={{ backgroundColor: skillCategories[activeIndex].dotColor }}></span>
                                    {proj}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
