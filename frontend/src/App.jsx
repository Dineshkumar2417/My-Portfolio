import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-quad' });
    axios.get('https://dinesh-portfolio-backend.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error("Data Fetch Error:", err));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message Sent! ✅');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="main-wrapper" data-theme={theme}>
      <div className="portfolio-app">
        
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* HERO SECTION */}
        <header className="hero-section" data-aos="fade-down">
          <div className="profile-wrapper">
            <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          </div>
          <h1 className="hero-title">Hey, I'm <span className="gradient-text">Dinesh</span></h1>
          <p className="hero-subtitle">Full-Stack Developer & Data Science Aspirant</p>
          <div className="skill-pills-hero">
            {["MongoDB", "Express", "React", "Node.js", "Python", "Power BI", "SQL", "Machine Learning"].map((skill, i) => (
              <span key={skill} data-aos="zoom-in" data-aos-delay={i * 100}>{skill}</span>
            ))}
          </div>
        </header>

        {/* EXPERTISE SECTION */}
        <section className="expertise-section" data-aos="fade-up">
          <div className="about-card">
            <h2 className="section-accent">Technical Expertise</h2>
            <p className="about-text">
              As a <strong>2024 graduate</strong> from Chandigarh, I build high-performance web applications using the <strong>MERN Stack</strong>. 
              I also leverage <strong>Python</strong> for <strong>Data Science</strong> and <strong>ML</strong> projects.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <h2 className="section-title" data-aos="fade-right">Technical Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="project-header">
                  <span className="folder-icon">📂</span>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="link-btn live">Live</a>}
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="tech-stack">
                    {(project.techStack || []).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION - FIXED SIZE & HOVER */}
        <footer className="contact-section" data-aos="zoom-in">
          <div className="contact-card-main">
            <h2 className="contact-title">Let's Work Together</h2>
            <form className="advanced-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="5" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="status-msg">{status}</p>}
            </form>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
            </div>
            <p className="footer-copyright">Developed by Dinesh Kumar © 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;