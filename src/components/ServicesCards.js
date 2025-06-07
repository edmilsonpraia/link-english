import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ServicesPage.css';

function ServicesPage() {
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

  // Cursos principais
  const mainCourses = [
    {
      title: "General English",
      description: "Develop well-rounded language skills with our comprehensive program covering speaking, listening, reading, and writing.",
      level: "Beginner to Advanced",
      duration: "10-48 weeks",
      features: ["Small class sizes", "Weekly progress reports", "Regular speaking practice"],
      icon: "📚"
    },
    {
      title: "Business English",
      description: "Master professional communication for international business settings, including presentations, negotiations, and correspondence.",
      level: "Intermediate to Advanced",
      duration: "8-24 weeks",
      features: ["Industry-specific vocabulary", "Business case studies", "Mock meetings"],
      icon: "💼"
    },
    {
      title: "Exam Preparation",
      description: "Targeted preparation for TOEFL, IELTS, Cambridge, and other internationally recognized English proficiency exams.",
      level: "Intermediate to Advanced",
      duration: "6-16 weeks",
      features: ["Practice tests", "Exam strategies", "One-on-one feedback"],
      icon: "📝"
    },
    {
      title: "Conversational English",
      description: "Focus on speaking fluency and listening comprehension in a supportive environment with native speakers.",
      level: "All Levels",
      duration: "4-24 weeks",
      features: ["Real-world topics", "Pronunciation workshops", "Cultural discussions"],
      icon: "🗣️"
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
      title: "Conversation Club",
      description: "Weekly sessions where students practice English in a relaxed social setting with various discussion topics.",
      frequency: "Weekly"
    },
    {
      title: "Language Lab",
      description: "State-of-the-art facility with audio-visual resources for pronunciation practice and listening skills.",
      frequency: "Open daily"
    },
    {
      title: "Cultural Excursions",
      description: "Monthly outings to local points of interest with guided discussions in English.",
      frequency: "Monthly"
    },
    {
      title: "Writing Workshops",
      description: "Specialized sessions focusing on different writing styles and formats with personalized feedback.",
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
                <a href="#contact" className="course-button">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="class-types-section animate-section">
        <div className="services-container">
          <h2>Learning Formats</h2>
          <p className="section-description">
            Choose the learning environment that best suits your schedule and learning style
          </p>

          <div className="class-types-grid">
            {classTypes.map((type, index) => (
              <div key={index} className="class-type-card">
                <div className="class-type-image">
                  <img src={type.image} alt={type.title} />
                </div>
                <div className="class-type-content">
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  <div className="class-type-details">
                    <p><span>Schedule:</span> {type.schedule}</p>
                    <p><span>Class Size:</span> {type.size}</p>
                  </div>
                  <a href="#contact" className="class-type-button">Select This Format</a>
                </div>
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

      {/* Pricing Section */}
      <section className="pricing-section animate-section">
        <div className="services-container">
          <h2>Pricing Plans</h2>
          <p className="section-description">
            Flexible options to accommodate different learning needs and budgets
          </p>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              >
                {plan.recommended && <div className="recommended-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="pricing-amount">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="pricing-button">Select Plan</a>
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
              <h3>Can I switch between online and in-person classes?</h3>
              <p>Yes, our flexible program allows students to choose hybrid learning options. You can discuss your preferences with your coordinator to create a schedule that works for you.</p>
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
    </div>
  );
}

export default ServicesPage;