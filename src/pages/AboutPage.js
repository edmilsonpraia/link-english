import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AboutPage.css';
import teacherImage1 from '../assets/images/01.jpg';
import teacherImage2 from '../assets/images/02.jpg';
import teacherImage3 from '../assets/images/3.jpg';
import teacherImage4 from '../assets/images/4.jpg';
import teacherImage5 from '../assets/images/5.jpg';
import teacherImage7 from '../assets/images/7.jpg';

function AboutPage() {
  useEffect(() => {
    // Criando animação de partículas no fundo - CONTROLADA
    const createParticles = () => {
      // Verificar se já existe para evitar duplicação
      const existing = document.querySelector('.about-bg-animation');
      if (existing) return;

      const bgAnimation = document.createElement('div');
      bgAnimation.className = 'about-bg-animation';
      
      const container = document.querySelector('.about-page-container');
      if (container) {
        container.appendChild(bgAnimation);
        
        // Menos partículas para melhor performance
        for (let i = 0; i < 30; i++) {
          const span = document.createElement('span');
          span.style.width = `${Math.random() * 8 + 2}px`;
          span.style.height = span.style.width;
          span.style.left = `${Math.random() * 100}%`;
          span.style.bottom = '0px'; // Começar de baixo
          span.style.animationDelay = `${Math.random() * 15}s`;
          span.style.animationDuration = `${Math.random() * 8 + 12}s`;
          bgAnimation.appendChild(span);
        }
      }
    };
    
    // Adicionando classes para animações baseadas em scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    
    createParticles();
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para itens visíveis inicialmente
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup das partículas se necessário
      const bgAnimation = document.querySelector('.about-bg-animation');
      if (bgAnimation) {
        bgAnimation.remove();
      }
    };
  }, []);

  // Dados dos professores atualizados com bandeiras
  const teachers = [
    {
      name: "Pérola da Beauty",
      flag: "https://flagcdn.com/16x12/mz.png", // Moçambique
      flagAlt: "Moçambique",
      role: "Certified TEFL Teacher",
      experience: "6 years",
      specialty: "Business English, General English, Grammar & Academic writing",
      image: teacherImage1
    },
    {
      name: "Boamah Eric Fiifi",
      flag: "https://flagcdn.com/16x12/gh.png", // Gana
      flagAlt: "Ghana",
      role: "Conversation Specialist",
      experience: "3 years",
      specialty: "Pronunciation, General English & Speaking",
      image: teacherImage2
    },
    {
      name: "Christabel Awako",
      flag: "https://flagcdn.com/16x12/gh.png", // Gana
      flagAlt: "Ghana",
      role: "Conversation Specialist",
      experience: "2 years",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage3
    },
    {
      name: "Ednaldo Neto",
      flag: "https://flagcdn.com/16x12/br.png", // Brasil
      flagAlt: "Brasil",
      role: "English Teacher",
      experience: "1 year",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage4
    },
    {
      name: "Tanyaradzwa Dean",
      flag: "https://flagcdn.com/16x12/zw.png", // Zimbábue
      flagAlt: "Zimbabwe",
      role: "English Teacher",
      experience: "4 years",
      specialty: "American Accent Speaking and Grammar",
      image: teacherImage5
    },
    {
      name: "Felesberto Boleke",
      flag: "https://flagcdn.com/16x12/za.png", // África do Sul
      flagAlt: "South Africa",
      role: "English Teacher",
      experience: "1 year",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage7
    }
  ];

  // Dados das metodologias
  const methodologies = [
    {
      title: "Immersive Learning",
      description: "Our immersive approach creates an English-only environment that accelerates language acquisition naturally.",
      icon: "🌍"
    },
    {
      title: "Personalized Paths",
      description: "We create custom learning paths based on your goals, whether for travel, business, or academic purposes.",
      icon: "🛤️"
    },
    {
      title: "Practical Application",
      description: "Theory meets practice in our real-world scenarios, helping you apply what you learn immediately.",
      icon: "🔄"
    },
    {
      title: "Cultural Integration",
      description: "Language and culture are inseparable - we teach both to ensure complete communication competence.",
      icon: "🤝"
    },
    {
      title: "Feedback Driven",
      description: "Continuous feedback loops help students identify areas for improvement and track progress.",
      icon: "🔄"
    },
    {
      title: "Technology Enhanced",
      description: "We leverage cutting-edge tools to make learning interactive and engaging.",
      icon: "💻"
    }
  ];

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section animate-section">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        
        <div className="about-container">
          <h1 className="gradient-text">Our Story</h1>
          <p className="about-subtitle">
            Discover how Link English has transformed language learning since 2023
          </p>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="about-container mission-vision-grid">
          <div className="mission-box animate-section">
            <h2>Our Mission</h2>
            <p>
              At Link English, our mission is to empower students of all levels to communicate confidently in English, 
              breaking down language barriers and opening doors to new opportunities across the globe.
            </p>
            <p>
              We believe that language learning should be engaging, practical, and tailored to each student's unique needs and goals.
            </p>
          </div>
          
          <div className="vision-box animate-section">
            <h2>Our Vision</h2>
            <p>
              We envision a world where language is no longer a barrier but a bridge connecting cultures and opportunities.
            </p>
            <p>
              By 2030, we aim to have helped over 50,000 students achieve fluency and confidence in English, 
              using innovative teaching methods and technology to make quality language education accessible to all.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="about-journey-section">
        <div className="about-container">
          <h2>Our Journey</h2>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item left animate-section" id="timeline-2023">
              <div className="timeline-content">
                <h3>2023</h3>
                <p>
                  Link English was founded by a passionate and experienced language teacher 
                  who believed that there was a better way to teach English.
                </p>
              </div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-item right animate-section" id="timeline-2024">
              <div className="timeline-content">
                <h3>2024</h3>
                <p>
                  Expanded our services to include online courses, reaching students across 15 countries
                  and introducing our signature immersive learning methodology.
                </p>
              </div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-item left animate-section" id="timeline-2025">
              <div className="timeline-content">
                <h3>2025</h3>
                <p>
                  Launched our advanced digital platform with AI-assisted learning
                  and celebrated reaching 1500 successful students.
                </p>
              </div>
              <div className="timeline-marker"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Methodology */}
      <section className="about-methodology-section animate-section">
        <div className="about-container">
          <h2>Our Methodology</h2>
          <p className="section-description">
            We've developed a proven approach to language learning that combines theory, 
            practice, and real-world application
          </p>
          
          <div className="methods-grid">
            {methodologies.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Teachers */}
      <section className="about-teachers-section animate-section">
        <div className="about-container">
          <h2>Meet Our Teachers</h2>
          <p className="section-description">
            Our expert instructors bring years of experience and passion to their teaching
          </p>
          
          <div className="teachers-grid">
            {teachers.map((teacher, index) => (
              <div key={index} className="teacher-card">
                <div className="teacher-image-container">
                  <img src={teacher.image} alt={teacher.name} />
                </div>
                <div className="teacher-name-container">
                  <h3>{teacher.name}</h3>
                  <img 
                    src={teacher.flag} 
                    alt={teacher.flagAlt} 
                    className="teacher-flag"
                    width="24"
                    height="18"
                    loading="lazy"
                  />
                </div>
                <p className="teacher-role">{teacher.role}</p>
                <p className="teacher-detail"><strong>Experience:</strong> {teacher.experience}</p>
                <p className="teacher-detail"><strong>Specialty:</strong> {teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="about-cta-section animate-section">
        <div className="about-container">
          <h2>Ready to Begin Your English Journey?</h2>
          <p>
            Join thousands of satisfied students who have transformed their 
            English skills with our personalized approach
          </p>
          <Link to="/contact" className="cta-button">
            <span className="button-shine"></span>
            Start Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;