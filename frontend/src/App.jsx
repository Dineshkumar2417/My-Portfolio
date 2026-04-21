import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Note: Ensure your backend link is correct!
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="portfolio-app">
        
        {/* HERO SECTION */}
        <header className="hero-section">
          <img src="/me.jpg" className="profile-img" alt="Dinesh" />
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          <p className="hero-subtitle">
            Specializing in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
          
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </header>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-container">
                  {/* Make sure your MongoDB field is called 'techStack' or 'tech' */}
                  {(project.techStack || project.tech || []).map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <footer className="contact-section">
          <div className="contact-card-main">
            <span style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: '600' }}>● Open for Technical Roles</span>
            <h2 className="hero-title" style={{ fontSize: '3rem', marginTop: '20px' }}>Let's Work Together</h2>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
            <p style={{ marginTop: '50px', color: '#475569', fontSize: '0.9rem' }}>
              Designed & Developed by Dinesh Kumar © 2026
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;