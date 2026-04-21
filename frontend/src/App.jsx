import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("Data fetch error:", err));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="portfolio-app">
        
        {/* 1. HERO SECTION */}
        <header className="hero-section">
          <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          <p className="hero-subtitle">
            Specialize in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map(s => <span key={s}>{s}</span>)}
          </div>
        </header>

        {/* 2. TECHNICAL EXPERTISE SECTION */}
        <section className="expertise-section">
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

        {/* 3. PROJECTS SECTION */}
        <section style={{ width: '100%', marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* Creative Text Logo Placeholder */}
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

        {/* 4. BOXED CONTACT SECTION */}
        <footer className="contact-section">
          <div className="contact-card-main">
            <span style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '700' }}>● AVAILABLE FOR WORK</span>
            <h2 className="contact-title">Let's Work Together</h2>
            <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
              Looking for a developer who can handle both the <strong>Frontend</strong> and the <strong>Data</strong>? Let's connect.
            </p>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
            <p style={{ marginTop: '50px', color: '#475569', fontSize: '0.8rem' }}>Designed & Developed by Dinesh Kumar © 2026</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;