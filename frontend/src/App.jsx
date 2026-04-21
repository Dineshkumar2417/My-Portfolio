import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  // Form State
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

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API Call
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

        {/* HERO SECTION */}
        <header className="hero-section" data-aos="fade-down">
          <div className="profile-wrapper">
            <img src="/me.jpg" className="profile-img" alt="Dinesh Kumar" />
          </div>
          <div className="hero-intro">
            <h1 className="hero-title">Hey, I'm <span className="gradient-text">Dinesh</span></h1>
          </div>
          <p className="hero-subtitle">
            Specializing in <strong>Full-Stack Development</strong> & <strong>Data Analytics</strong>.
          </p>
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
              As a <strong>2024 graduate</strong> from Chandigarh, I build high-performance web applications using the <strong>MERN Stack</strong>. 
              I also leverage <strong>Python</strong> to extract actionable insights via <strong>Machine Learning</strong> and <strong>Data Visualization</strong>.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <h2 className="section-title" data-aos="fade-right">Technical Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="project-image-container">
                  <div className="text-logo">Dev<span className="blue-part">Sync</span></div>
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

        {/* CONTACT SECTION WITH FORM AND ORIGINAL BUTTONS */}
        <footer className="contact-section" data-aos="zoom-in">
          <div className="contact-card-main">
            <h2 className="contact-title">Let's Work Together</h2>
            
            {/* Form added above the buttons */}
            <form className="advanced-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input 
                  type="text" name="name" placeholder="Your Name" 
                  value={formData.name} onChange={handleFormChange} required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" name="email" placeholder="Email Address" 
                  value={formData.email} onChange={handleFormChange} required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" placeholder="Your Message" rows="4"
                  value={formData.message} onChange={handleFormChange} required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </form>

            {/* Original Buttons Kept Exactly the Same */}
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