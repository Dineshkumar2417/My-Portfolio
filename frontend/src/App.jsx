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
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: 'ease-out-quad' 
    });

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
      setStatus('Message Sent Successfully! ✅');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="main-wrapper" data-theme={theme}>
      <div className="portfolio-app">
        
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Hero Section */}
        <header className="hero-section" data-aos="fade-down">
          <div className="profile-wrapper">
            <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          </div>
          <h1 className="hero-title">
            Hey, I'm <span className="gradient-text">Dinesh</span>
          </h1>
          <p className="hero-subtitle">Data Scientist & Full-Stack Developer</p>
          <div className="skill-pills-hero">
            {["Python", "Machine Learning", "Power BI", "Pandas", "Scikit-Learn", "SQL", "React", "Node.js"].map((skill, i) => (
              <span key={skill} data-aos="zoom-in" data-aos-delay={i * 100}>{skill}</span>
            ))}
          </div>
        </header>

        {/* Professional Summary */}
        <section className="expertise-section" data-aos="fade-up">
          <div className="about-card">
            <h2 className="section-accent">Data Science & Technical Vision</h2>
            <p className="about-text">
              I am a passion-driven professional dedicated to transforming complex datasets into meaningful patterns and actionable insights. 
              My core expertise lies in developing <strong>Machine Learning models</strong> and enabling data-driven decision-making using tools like Scikit-Learn, Pandas, and Python. 
              I am proficient in the <strong>MERN stack</strong>, allowing me to build complete, data-driven web applications with analytical precision.
            </p>
          </div>
        </section>

        {/* NEW: Education & Certifications Section */}
        <section className="edu-cert-section">
          <div className="section-header-row">
            <h2 className="section-title" data-aos="fade-right">Education & Credentials</h2>
          </div>
          <div className="info-grid">
            {/* Education Card */}
            <div className="info-card bounce-card" data-aos="fade-up">
              <div className="card-icon">🎓</div>
              <h3>Academic Background</h3>
              <div className="card-item">
                <span className="item-year">2024</span>
                <h4>Bachelor of Arts in Computer Science & Economics</h4>
                <p>Punjabi University, Patiala</p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="info-card bounce-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">📜</div>
              <h3>Professional Training</h3>
              <div className="card-item">
                <h4>Advanced MERN Stack Development</h4>
                <p>Professional Certification Program</p>
              </div>
              <div className="card-item">
                <h4>Data Science & Machine Learning</h4>
                <p>Comprehensive Applied Science Training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
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

        {/* Contact Section */}
        <footer className="contact-section" data-aos="zoom-in">
          <div className="contact-card-main">
            <h2 className="contact-title">Let's Work Together</h2>
            <form className="advanced-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell me about your project..." rows="5" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="status-msg">{status}</p>}
            </form>
            <div className="contact-row">
              <a href="https://github.com/Dineshkumar2417" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/dinesh-kumar-ds/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
              <a href="mailto:maniveenu17@gmail.com" className="contact-btn email">Send Email</a>
            </div>
            <p className="footer-copyright">Developed by Dinesh Kumar © 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;