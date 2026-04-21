import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Initialize Scroll Animations
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out'
    });

    // Fetch Project Data
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="portfolio-app">
        
        {/* HERO SECTION */}
        <header className="hero-section" data-aos="fade-down">
          <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          <p className="hero-subtitle">
            Specializing in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map((skill, i) => (
              <span key={skill} data-aos="zoom-in" data-aos-delay={i * 100}>
                {skill}
              </span>
            ))}
          </div>
        </header>

        {/* TECHNICAL EXPERTISE SECTION */}
        <section className="expertise-section" data-aos="fade-up">
          <div className="about-card">
            <h2 className="section-accent">Technical Expertise</h2>
            <p className="about-text">
              As a <strong>2024 graduate</strong>, I build high-performance web applications using the <strong>MERN Stack</strong>, 
              focusing on scalable architecture and seamless user experiences.
            </p>
            <p className="about-text" style={{ marginTop: '20px' }}>
              Beyond the web, I leverage <strong>Python</strong> and <strong>Data Science libraries</strong> to extract actionable insights. 
              From interactive <strong>Power BI dashboards</strong> to <strong>Machine Learning models</strong>, 
              I am driven by data-led decision making.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <h2 className="section-title" data-aos="fade-right">Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
              >
                <div className="project-image-container">
                  <div className="text-logo">
                    Dev<span className="blue-part">Sync</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-container">
                    {(project.techStack || project.tech || []).map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOXED CONTACT FOOTER */}
        <footer className="contact-section" data-aos="zoom-in">
          <div className="contact-card-main">
            <span className="status-badge">● AVAILABLE FOR WORK</span>
            <h2 className="contact-title">Let's Work Together</h2>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
            <p className="footer-copyright">Designed & Developed by Dinesh Kumar © 2026</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;