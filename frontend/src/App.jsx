import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className={`main-wrapper ${selectedProject ? 'modal-open' : ''}`}>
      <div className="portfolio-app">
        
        {/* HERO SECTION */}
        <header className="hero-section" data-aos="fade-down">
          <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          <p className="hero-subtitle">Specializing in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.</p>
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map((skill, i) => (
              <span key={skill} data-aos="zoom-in" data-aos-delay={i * 100}>{skill}</span>
            ))}
          </div>
        </header>

        {/* TECHNICAL EXPERTISE */}
        <section className="expertise-section" data-aos="fade-up">
          <div className="about-card">
            <h2 className="section-accent">Technical Expertise</h2>
            <p className="about-text">
              As a <strong>2024 graduate</strong>, I build high-performance web applications using the <strong>MERN Stack</strong>.
              I leverage <strong>Python</strong> and <strong>Data Science libraries</strong> to extract actionable insights.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="projects-section">
          <h2 className="section-title" data-aos="fade-right">Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-container">
                  <div className="text-logo">Dev<span className="blue-part">Sync</span></div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <span className="view-more">View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT DETAILS MODAL */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-body">
                <p className="modal-desc">{selectedProject.description}</p>
                <div className="modal-tech-box">
                  <h4>Technologies Used:</h4>
                  <div className="tech-container">
                    {(selectedProject.techStack || selectedProject.tech || []).map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-links">
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="contact-btn">View Code</a>
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="contact-btn email">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT FOOTER */}
        <footer className="contact-section" data-aos="zoom-in">
          <div className="contact-card-main">
            <h2 className="contact-title">Let's Work Together</h2>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;