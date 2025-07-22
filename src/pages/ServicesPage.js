import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ServicesPage.css';

function ServicesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Ativando animações baseadas em scroll
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
    
    window.addEventListener('scroll', handleScroll);
    // Iniciar com os elementos visíveis na tela
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para abrir o modal
  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Previne scroll da página
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restaura scroll da página
  };

  // Cursos principais
  const mainCourses = [
    {
      title: "General English",
      description: "Develop well-rounded language skills with our comprehensive program covering speaking, listening, reading, and writing.",
      level: "Beginner to Advanced",
      duration: "16-24 weeks",
      features: ["Small class sizes", "Weekly progress reports", "Regular speaking practice"],
      icon: "📚",
      pricing: {
        group: { price: "$65", period: "per month" },
        individual: { price: "$155", period: "per month" },
        online: { price: "$255", period: "per month" }
      }
    },
    {
      title: "Business English",
      description: "Master professional communication for international business settings, including presentations, negotiations, and correspondence.",
      level: "Intermediate to Advanced",
      duration: "16-20 weeks",
      features: ["Industry-specific vocabulary", "Business case studies", "Mock meetings"],
      icon: "💼",
      pricing: {
        group: { price: "$85", period: "per month" },
        individual: { price: "$175", period: "per month" },
        online: { price: "$299", period: "per month" }
      }
    },
    {
      title: "Pronunciation Course",
      description: "Sound clear and confident, not lost in translation. Speak naturally with stress/intonation like a native.",
      level: "All Levels",
      duration: "8-12 weeks",
      features: ["Video Lessons", "Personalized feedback", "Access to our Sounds Library"],
      icon: "🗣️",
      pricing: {
        group: { price: "$49", period: "per month" },
        individual: { price: "$99", period: "per month" },
        online: { price: "$129", period: "per month" }
       
      }
    },
    {
      title: "Conversational English",
      description: "Focus on speaking fluency and listening comprehension in a supportive environment with native speakers.",
      level: "All Levels",
      duration: "10-14 weeks",
      features: ["Real-world topics", "Pronunciation workshops", "Cultural discussions"],
      icon: "🗣️",
      pricing: {
        group: { price: "$55", period: "per month" },
        individual: { price: "$110", period: "per month" },
        online: { price: "$199", period: "per month" }
      }
    },
    {
      title: "Email Writing",
      description: "Write Clear, Polished Emails in Minutes.  Avoid confusing or rude tones with natural-sounding phrases. Master professional etiquette",
      level: "Intermediate to Advanced",
      duration: "12-16 weeks",
      features: ["Polished emails", "CVs and cover letters"],
      icon: "📝",
      pricing: {
        group: { price: "$55", period: "per month" },
        individual: { price: "$155", period: "per month" },
        online: { price: "$285", period: "per month" }
      }
    }
  ];

  // Tipos de aulas
  const classTypes = [
    {
      title: "Group Classes",
      description: "Learn collaboratively in our interactive group setting. Perfect for building confidence and practicing with peers.",
      schedule: "Morning, afternoon, and evening sessions",
      size: "6-12 students per class",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Private Tutoring",
      description: "Personalized one-on-one instruction tailored to your specific goals, learning style, and pace.",
      schedule: "Flexible scheduling",
      size: "Individual instruction",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Online Learning",
      description: "Access our quality instruction from anywhere with our interactive virtual classroom experience.",
      schedule: "24/7 platform access with scheduled live sessions",
      size: "Various options available",
      image: "https://via.placeholder.com/400x300"
    }
  ];

  // Recursos especiais
  const specialResources = [
    {
      title: "Speaking Club",
      description: "Weekly sessions where students practice English in a relaxed social setting with various discussion topics.",
      frequency: "Weekly"
    },
    {
      title: "Grammar Club",
      description: "Master tricky English grammar in a fun, supportive group! Each week, we tackle a new topic through clear explanations, interactive exercises, and real-life practice",
      frequency: "Weekly"
    },
    {
      title: "Consultation & Coaching",
      description: "Elevate your teaching skills with personalized guidance! Whether you're new to teaching or looking to refine your methods, we offer one-on-one consultations to help you",
      frequency: "Daily"
    },
    {
      title: "Masterclass & Workshops",
      description: "Whether you're a student, professional, or lifelong learner, our classes and workshops are designed to help you speak, write, and think in English with ease.",
      frequency: "Bi-weekly"
    }
  ];

  // Planos e preços
  const pricingPlans = [
    {
      name: "Basic",
      price: "$199",
      period: "per month",
      features: [
        "2 group classes per week",
        "Basic learning materials",
        "Monthly progress assessment",
        "Access to online resources"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "$349",
      period: "per month",
      features: [
        "4 group classes per week",
        "Complete learning materials",
        "Bi-weekly progress assessment",
        "Full access to online resources",
        "Weekly conversation club"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "$499",
      period: "per month",
      features: [
        "5 group classes per week",
        "2 private sessions per month",
        "Complete learning materials",
        "Weekly progress assessment",
        "Priority access to all resources",
        "All special events included"
      ],
      recommended: false
    }
  ];

  return (
    <div className="services-page-container">
      {/* Hero Section */}
      <section className="services-hero-section animate-section">
        <div className="services-container">
          <h1 className="gradient-text">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive English learning programs designed to help you achieve fluency with confidence
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="service-button primary">Explore Courses</a>
            <a href="#contact" className="service-button secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Main Courses Section */}
      <section id="courses" className="main-courses-section animate-section">
        <div className="services-container">
          <h2>Core Programs</h2>
          <p className="section-description">
            Our carefully designed courses cater to various goals and proficiency levels
          </p>

          <div className="courses-grid">
            {mainCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <p><strong>Level:</strong> {course.level}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                </div>
                <div className="course-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => openModal(course)} 
                  className="course-button"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Resources Section */}
      <section className="special-resources-section animate-section">
        <div className="services-container">
          <h2>Additional Resources</h2>
          <p className="section-description">
            Enhance your learning experience with our supplementary programs and facilities
          </p>

          <div className="resources-grid">
            {specialResources.map((resource, index) => (
              <div key={index} className="resource-card">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <p className="resource-frequency"><span>Availability:</span> {resource.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section">
        <div className="services-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I determine my current English level?</h3>
              <p>We offer a complimentary placement test to all new students. This assessment evaluates your speaking, listening, reading, and writing skills to determine the most appropriate starting level.</p>
            </div>
            <div className="faq-item">
              <h3>How long will it take to become fluent?</h3>
              <p>Progress varies based on several factors including starting level, study intensity, and individual aptitude. Generally, students advance one proficiency level every 8-12 weeks with consistent practice.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer specialized industry vocabulary?</h3>
              <p>Yes, we offer specialized modules for various industries including medical, legal, technological, and financial sectors. These can be incorporated into private lessons or as add-ons to regular programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="services-cta-section animate-section">
        <div className="services-container">
          <h2>Ready to Elevate Your English Skills?</h2>
          <p>Schedule your free placement test and consultation with our academic team</p>
          <Link to="/contact" className="cta-button">
            <span className="button-shine"></span>
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Modal para detalhes do curso */}
      {isModalOpen && selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedCourse.icon}</div>
              <h2>{selectedCourse.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Course Options & Pricing</h3>
                <div className="pricing-options">
                  <div className="pricing-card-modal">
                    <h4>👥 Group Classes</h4>
                    <div className="price">{selectedCourse.pricing.group.price}</div>
                    <div className="period">{selectedCourse.pricing.group.period}</div>
                    <ul>
                      <li>6-10 students per class</li>
                      <li>Interactive learning environment</li>
                      <li>Dynamic discussions</li>
                    </ul>
                  </div>
                  
                  <div className="pricing-card-modal popular">
                    <div className="popular-badge">Most Popular</div>
                    <h4>👤 Pair Lessons </h4>
                    <div className="price">{selectedCourse.pricing.individual.price}</div>
                    <div className="period">{selectedCourse.pricing.individual.period}</div>
                    <ul>
                      <li>2 Students per class</li>
                      <li>Interactive practice</li>
                      <li>Customized curriculum</li>
                    </ul>
                  </div>
                  
                  <div className="pricing-card-modal">
                    <h4>💻 Individual Lessons</h4>
                    <div className="price">{selectedCourse.pricing.online.price}</div>
                    <div className="period">{selectedCourse.pricing.online.period}</div>
                    <ul>
                      <li>Customized curriculum</li>
                      <li>Flexible scheduling</li>
                      <li>Personalized instruction and feedback</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Course Details</h3>
                <div className="course-info-modal">
                  <p><strong>Level:</strong> {selectedCourse.level}</p>
                  <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                  <p><strong>Description:</strong> {selectedCourse.description}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link to="/contact" className="modal-button primary" onClick={closeModal}>
                Contact Us
              </Link>
              <Link to="/contact" className="modal-button secondary" onClick={closeModal}>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;