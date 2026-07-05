import { MdSchool, MdWork } from './Icons';

const Education = () => {
  const educationData = [
    {
      type: 'internship',
      title: 'ToXSL Technologies',
      subtitle: 'Web Development Intern (React.js)',
      badge: 'Internship',
      duration: 'Sept – Dec 2022'
    },
    {
      type: 'education',
      title: 'Shri Guru Ram Rai University',
      subtitle: 'Bachelor of Science – Information Technology',
      badge: '8.65 CGPA',
      duration: 'April 2019 – July 2022'
    }
  ];

  return (
    <section id="education" className="section education-section-layout">
      <div className="portfolio-container">
        <span className="education-section-label">ACADEMICS</span>
        
        <h2 className="education-section-title">
          Education
        </h2>
        
        <p className="education-section-subtitle">
          Strong academic foundation in computer applications and information technology.
        </p>

        <div className="education-cards-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon-wrapper">
                {edu.type === 'internship' ? <MdWork /> : <MdSchool />}
              </div>
              <div className="education-details">
                <h3 className="education-university">{edu.title}</h3>
                <p className="education-degree">{edu.subtitle}</p>
                <div className="education-meta">
                  <span className="education-cgpa">{edu.badge}</span>
                  <span className="education-duration">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
