import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaServer, FaPalette, FaChevronRight, FaChevronLeft, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  return (
    <div className="min-h-screen bg-black-dark text-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black-dark/95 backdrop-blur-md z-50 border-b border-purple-dark/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold text-purple-light hover:text-purple-dark transition-colors duration-300"
              >
                Chamika Rajaguru
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === section
                      ? 'text-purple-light bg-purple-light/10 border-b-2 border-purple-light'
                      : 'text-gray-300 hover:text-purple-light hover:bg-purple-light/5'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-purple-light hover:text-purple-dark transition-colors duration-300 p-2"
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black-dark/95 backdrop-blur-md border-t border-purple-dark/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left capitalize transition-all duration-300 px-3 py-2 rounded-lg ${
                      activeSection === section
                        ? 'text-purple-light bg-purple-light/10'
                        : 'text-gray-300 hover:text-purple-light hover:bg-purple-light/5'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I am <br />
                <span className="hero-name">Chamika,</span>
              </h1>
              <p className="hero-description">
                Welcome to my portfolio! Chamika Rajaguru is an Experienced Full Stack Developer with a passion for creating visually stunning and intuitive web experiences. With a unique blend of technical skills and creative flair, there's confidence in the ability to deliver custom solutions to various project requirements.
              </p>
              <div className="hero-buttons">
                <button className="hero-button primary" onClick={() => window.open('mailto:chamikasrajaguru@gmail.com')}>
                  Resume
                </button>
                <button className="hero-button secondary" onClick={() => scrollToSection('contact')}>
                  Contact Me
                </button>
              </div>
              <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="scroll-arrow">↓</div>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="intro-image">
                <img 
                  src="https://via.placeholder.com/400x500/6B46C1/FFFFFF?text=CR" 
                  alt="Chamika Rajaguru" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Programming Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Tools & Other Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">DevOps</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Communication Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Sinhala</span>
                <span className="skill-tag">English</span>
                <span className="skill-tag">Tamil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Me</h2>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">💼</div>
                <div className="stat-content">
                  <div className="stat-number">02</div>
                  <div className="stat-label">Years Job Experience</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <div className="stat-number">08+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">What are my strongest sides and skills?</h3>
              <p className="about-description">
                One of my strongest qualities as a full stack developer is my ability to think critically and solve problems. I excel at breaking down complex projects into manageable chunks and coming up with innovative solutions to problems that arise. I am also very organized and detail-oriented, which allows me to complete assignments on time and to the highest standards.
              </p>
              <p className="about-description">
                As a full stack developer, I am proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and Python. I have experience working with popular technologies such as MongoDB, Express, React, and Node.js, and am skilled in UI/UX development as well as I have the ability to quickly adapt to new technologies and frameworks. I have a wide range of knowledge about technologies beyond those mentioned.
              </p>
              <p className="about-description">
                I am also a strong communicator and able to effectively collaborate with clients and team members to understand their needs and translate them into functional specifications. Overall, I am confident in my ability to deliver high-quality web solutions that meet the needs of my clients and exceed their expectations.
              </p>
            </div>
            
            <div className="about-bio">
              <h3 className="bio-title">Biography, a few words</h3>
              <div className="bio-content">
                <div className="bio-image">
                  <img 
                    src="https://via.placeholder.com/200x250/6B46C1/FFFFFF?text=CR" 
                    alt="Chamika Rajaguru" 
                    className="photo-bio"
                  />
                </div>
                <div className="bio-text">
                  <p>
                    Hi, I'm Chamika Rajaguru, a full-stack developer from Sri Lanka. I am currently an undergraduate at NSBM Green University, where I am developing a solid foundation in software engineering and a passion for building aesthetically attractive and intuitive web experiences. With a strong track record of achievement, I am committed to using my skills and expertise to create innovative and effective solutions for my clients.
                  </p>
                  <p>
                    I am an active member of the FOSS community and Media club of NSBM and am known for my broad range of knowledge and interests. I am constantly seeking out new opportunities to improve my skills and knowledge.
                  </p>
                  <p>
                    In my free time, I enjoy hobbies such as photography, watching movies, and traveling. I am also an avid learner and am always looking for ways to improve my skills and knowledge. In addition to my technical skills, I am a reliable and team-oriented individual who is always ready to collaborate with team members and clients to ensure that projects are delivered to the highest standards. I am excited to work with you and create something amazing together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce application with React frontend and Node.js backend'
              },
              {
                title: 'Task Management App',
                description: 'Real-time task management application with user authentication'
              },
              {
                title: 'Portfolio Website',
                description: 'Responsive portfolio website with modern design and animations'
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="milestones-section">
        <div className="milestones-container">
          <h2 className="milestones-title">Special Milestones</h2>
          
          <div className="milestones-timeline">
            <div className="milestone-item">
              <div className="milestone-date">13th February, 2024</div>
              <div className="milestone-content">
                <h3 className="milestone-title">Full Stack Developer</h3>
                <p className="milestone-company">HashX</p>
                <p className="milestone-description">
                  HashX is dedicated to offering robust cybersecurity capabilities, safeguarding digital assets with advanced technologies. Moreover, HashX proudly presents Sri Lanka's No #1 CTF platform, providing a space to host competitive inter university CTF competitions.
                </p>
              </div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-date">13th October, 2022</div>
              <div className="milestone-content">
                <h3 className="milestone-title">BSc (Hons) in Software Engineering (Undergraduate)</h3>
                <p className="milestone-company">NSBM Green University</p>
                <p className="milestone-description">
                  Pursuing BSc (Hons) in Software Engineering at NSBM Green University, Chamika Rajaguru focuses on mastering front-end and back-end technologies blending theoretical knowledge with a strong emphasis on key software development principles.
                </p>
              </div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-date">October, 2020</div>
              <div className="milestone-content">
                <h3 className="milestone-title">G.C.E. (A/L) Examination</h3>
                <p className="milestone-company">School : V/Agrabodhi M.V</p>
                <p className="milestone-description">
                  Passed the Sri Lankan Advanced Level (A-Level) Examination. This qualification, similar to the British Advanced Level and this is a gateway to Sri Lankan state universities, offered in Sinhala, Tamil, and English. Conducted by the Ministry of Education Sri Lanka.
                </p>
              </div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-date">December, 2017</div>
              <div className="milestone-content">
                <h3 className="milestone-title">G.C.E. (O/L) Examination</h3>
                <p className="milestone-company">School : V/Agrabodhi M.V</p>
                <p className="milestone-description">
                  Passed the Sri Lankan Ordinary Level (O-Level) Examination at V/Agrabodhi M.V, a GCE qualification similar to the Cambridge University Ordinary Level and proof of completion Secondary Education. Conducted by the Ministry of Education Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact</h2>
          <h3 className="contact-subtitle">Call or write anytime</h3>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-Mail Address" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" className="form-textarea" rows="5"></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li><a href="#milestones" onClick={() => scrollToSection('milestones')}>Milestones</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookie preferences</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Get in touch</h4>
              <div className="footer-contact">
                <p>chamikasrajaguru@gmail.com</p>
                <div className="footer-social">
                  <a href="https://github.com/chamika-rajaguru" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/chamika-rajaguru" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Copyright © 2020-2024 | All rights reserved. Made with❤ by Chamika Rajaguru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
