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
      <section id="home" className="min-h-screen flex items-center bg-black-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold">Hello.</span>
                <div className="w-3 h-3 bg-purple-light rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold">
                I'm <span className="text-purple-light">Chamika</span>
              </h1>
              <p className="text-3xl md:text-4xl text-gray-300">
                Full Stack Developer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Got a project?
              </button>
              <button
                onClick={() => window.open('mailto:chamikasrajaguru@gmail.com')}
                className="border-2 border-purple-light text-purple-light px-8 py-4 rounded-lg font-semibold hover:bg-purple-light hover:text-white transition-all duration-300"
              >
                My resume
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Decorative chevrons */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-purple-light opacity-60">
                <FaChevronLeft className="text-4xl" />
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-light opacity-60">
                <FaChevronRight className="text-4xl" />
              </div>
              
              {/* Profile image with glowing ring */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-dark to-purple-light p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-black-dark flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/300x300/6B46C1/FFFFFF?text=CR" 
                      alt="Chamika Rajaguru" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-purple-light opacity-20 blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-black-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            {['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB', 'Express.js', 'Tailwind CSS'].map((skill, index) => (
              <span key={index} className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Services */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black-light transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-light rounded-lg flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Website Development</h3>
                  <p className="text-gray-400">Custom web applications</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black-light transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-light rounded-lg flex items-center justify-center">
                  <FaServer className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">App Development</h3>
                  <p className="text-gray-400">Full-stack applications</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black-light transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-light rounded-lg flex items-center justify-center">
                  <FaDatabase className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Database Management</h3>
                  <p className="text-gray-400">MongoDB & SQL databases</p>
                </div>
              </div>
            </div>

            {/* Right Column - About Me */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white">About me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
                I love creating efficient, scalable applications that provide great user experiences. 
                With a strong foundation in both frontend and backend development, I enjoy the entire 
                process of bringing ideas to life through code.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-light mb-2">50+</div>
                  <div className="text-sm text-gray-400">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-light mb-2">100%</div>
                  <div className="text-sm text-gray-400">Client satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-light mb-2">3+</div>
                  <div className="text-sm text-gray-400">Years of experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce application with React frontend and Node.js backend',
                tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
                image: 'https://via.placeholder.com/400x250/6B46C1/FFFFFF?text=E-Commerce'
              },
              {
                title: 'Task Management App',
                description: 'Real-time task management application with user authentication',
                tech: ['React', 'MongoDB', 'Express.js', 'Socket.io'],
                image: 'https://via.placeholder.com/400x250/A855F7/FFFFFF?text=Task+Manager'
              },
              {
                title: 'Portfolio Website',
                description: 'Responsive portfolio website with modern design and animations',
                tech: ['React', 'Tailwind CSS', 'JavaScript'],
                image: 'https://via.placeholder.com/400x250/6B46C1/FFFFFF?text=Portfolio'
              }
            ].map((project, index) => (
              <div key={index} className="bg-black-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-dark/20 transition-all duration-300 transform hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-light">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-dark/20 text-purple-light px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-purple-dark text-white px-4 py-2 rounded-lg hover:bg-purple-light transition-colors duration-300">
                      View Project
                    </button>
                    <button className="border border-purple-light text-purple-light px-4 py-2 rounded-lg hover:bg-purple-light hover:text-white transition-colors duration-300">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Contact</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          
          <div className="bg-black-light rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-dark rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:chamikasrajaguru@gmail.com" 
                    className="text-purple-light hover:text-purple-dark transition-colors duration-300"
                  >
                    chamikasrajaguru@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/chamika-rajaguru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black-light rounded-full flex items-center justify-center text-purple-light hover:bg-purple-light hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://linkedin.com/in/chamika-rajaguru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black-light rounded-full flex items-center justify-center text-purple-light hover:bg-purple-light hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.open('mailto:chamikasrajaguru@gmail.com')}
              className="bg-gradient-to-r from-purple-dark to-purple-light px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-dark/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Me an Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black-light py-8 border-t border-purple-dark/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Chamika Rajaguru. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
