import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log("Connection check:", err));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="portfolio-app">
        
        {/* 1. HERO SECTION */}
        <header className="hero-section">
          <div className="profile-container">
            <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          </div>
          
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          
          <p className="hero-subtitle">
            Specializing in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
          
          <div className="skill-pills-hero">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>Power BI</span>
            <span>SQL</span>
            <span>Machine Learning</span>
          </div>
        </header>

        {/* 2. SUMMARY SECTION */}
        <section className="about-section">
          <div className="about-card">
            <h2 className="section-accent">Technical Expertise</h2>
            <p className="about-text">
              As a <strong>2024 graduate</strong>, I build high-performance web applications using the <strong>MERN Stack</strong>, 
              focusing on scalable architecture and seamless user experiences. My development 
              workflow integrates <strong>modern JavaScript (ES6+)</strong> with robust backend 
              logic to deliver end-to-end digital solutions.
            </p>
            <p className="about-text" style={{ marginTop: '15px' }}>
              Beyond the web, I leverage <strong>Python</strong> and <strong>Data Science 
              libraries</strong> to extract actionable insights from complex datasets. From 
              developing interactive <strong>Power BI dashboards</strong> to implementing 
              <strong> Machine Learning models</strong>, I am driven by the power of data-led 
              decision making.
            </p>
          </div>
        </section>

        {/* 3. PROJECTS GRID */}
        <section className="projects-section">
          <h2 className="section-title">Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-container">
                    {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. GET IN TOUCH */}
        <footer className="contact-section">
          <div className="contact-card-main">
            <span className="status-badge">● Open for Technical Roles</span>
            <h2 className="contact-title">Let’s Work Together</h2>
            <p className="contact-desc">
              Looking for a developer who can handle both the <strong>Frontend</strong> and the 
              <strong> Data</strong>? Let's connect and discuss your next project.
            </p>
            <div className="contact-row">
              <a href="https://github.com/dinesh-kumar" target="_blank" rel="noreferrer" className="contact-btn github">GitHub</a>
              <a href="https://linkedin.com/in/dinesh-kumar" target="_blank" rel="noreferrer" className="contact-btn linkedin">LinkedIn</a>
              <a href="mailto:dinesh@email.com" className="contact-btn email">Send Email</a>
            </div>
            <p className="footer-copyright">Designed & Developed by Dinesh Kumar © 2026</p>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App