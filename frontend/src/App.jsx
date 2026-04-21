import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("Database connection issue:", err));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="portfolio-app">
        
        {/* HERO SECTION */}
        <header className="hero-section">
          <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          <div className="hero-intro">
            <span className="wave-emoji">👋</span>
            <h1 className="hero-title">Hey, I'm Dinesh</h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
            Specialize in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map(s => <span key={s}>{s}</span>)}
          </div>
        </header>

        {/* PROJECTS SECTION */}
        <section style={{ width: '100%', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  {/* It uses project.image from your MongoDB. If empty, it shows a placeholder */}
                  <img src={project.image || 'https://via.placeholder.com/400x200/0f172a/38bdf8?text=Project+Preview'} className="project-image" alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
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

        {/* BOXED CONTACT SECTION */}
        <footer className="contact-section">
          <div className="contact-card-main">
            <span style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '700' }}>● AVAILABLE FOR WORK</span>
            <h2 style={{ fontSize: '3rem', margin: '15px 0' }}>Let's Work Together</h2>
            <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
              Currently looking for new opportunities in <strong>Data Science</strong> and <strong>Full-Stack</strong>.
            </p>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
            <p style={{ marginTop: '40px', color: '#475569', fontSize: '0.8rem' }}>Designed by Dinesh Kumar © 2026</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;