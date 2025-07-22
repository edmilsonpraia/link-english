import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/TestimonialsPage.css';

function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Animações baseadas em scroll
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
    
    // Carrossel automático
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % featuredTestimonials.length);
    }, 8000);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para itens visíveis inicialmente
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Dados dos depoimentos em destaque
  const featuredTestimonials = [
    {
      name: "Gertrudes Massango",
      role: "Inspectora",
      country: "Moçambique",
      image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1745255621/01_ytr4uk.jpg",
      text: "O que mais agrada-me no Link English, é a didáctica da Professora ao leccionar e traz conteúdos muito interessantes que permite dentro de pouco tempo falar e escrever Inglês. Eu recomendo a qualquer pessoa até para quem quer aprender o idioma com urgência."
    },
    {
      name: "Justina Tembe",
      role: "Inspectora",
      country: "Moçambique",
      image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1745256298/02_w0y960.jpg",
      text: " O que eu mais gosto nas aulas é de escutar a pronúncia da professora, porque é encantadora e um factor bastante motivador para quem deseja aprender a língua inglesa, pois é muito importante pronunciar correctamente e de forma que os demais consigam perceber e isso ela tem de sobra. Para quem está a pensar em estudar na Link English, eu diria para apostar, pois os conteúdos programáticos das aulas, bem como a forma de abordagem são excelentes para quem deseja ser fluente em inglês, tanto na fala como escrita."
    },
    {
      name: "Moniz Langa",
      role: "MEAL Officer",
      country: "Mozambique",
      image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1745256518/03_uyxnha.jpg",
      text: "Os ⁠conteúdos são relevantes para as minhas necessidades e objetivos. Método de ensino: prático, interativo com possibilidades de ajustar os períodos das aulas. Interação em sala de aulas: boa no que diz respeito as possibilidades e aprender e ao mesmo tempo trazer experiências do dia-à-dia."
    },
    {
      name: "Bruna da Glória",
      role: "Estudante",
      country: "Mozambique",
      image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1745256966/04_ezcmdw.jpg",
      text: "O que eu mais gosto nas aulas é que são 100% em inglês desde o primeiro dia, o que me ajudou a me acostumar rápido com o idioma e pensar diretamente em inglês, sem ficar a traduzir. As atividades de conversação são superdinâmicas e, com temas do dia a dia que realmente me facilitam  falar de vários temas com naturalidade. Além disso, a plataforma digital é ótima porque posso revisar o material das aulas e fazer o TPC quando for mais conveniente para mim – sem pressão. "
    }
  ];

  // Dados de todos os depoimentos
  const allTestimonials = [
    {
      name: "Carlos Rodriguez",
      program: "Business English",
      country: "Mexico",
      text: "The business English program helped me secure a promotion at my international company. The negotiation and presentation skills I learned are used daily in my work.",
      rating: 5
    },
    {
      name: "Emma Watson",
      program: "TOEFL Preparation",
      country: "France",
      text: "I needed a high TOEFL score for my master's application, and Link English delivered. Their practice tests were almost identical to the actual exam.",
      rating: 5
    },
    {
      name: "Liu Wei",
      program: "Conversational English",
      country: "China",
      text: "The conversation classes with native speakers helped me overcome my fear of speaking English. Now I can communicate clearly during my business trips.",
      rating: 4
    },
    {
      name: "Priya Patel",
      program: "Online Group Classes",
      country: "India",
      text: "Despite the time difference, Link English's flexible schedule allowed me to attend classes after work. The online platform is intuitive and interactive.",
      rating: 5
    },
    {
      name: "Olaf Svensson",
      program: "Private Lessons",
      country: "Sweden",
      text: "My instructor tailored each lesson to my specific needs in medical English. Now I can communicate effectively with international patients.",
      rating: 5
    },
    {
      name: "Ana Costa",
      program: "Intensive Course",
      country: "Portugal",
      text: "The 4-week intensive course was challenging but incredibly effective. My English improved more in one month than in years of traditional classes.",
      rating: 4
    },
    {
      name: "Ibrahim Al-Farsi",
      program: "Business English",
      country: "UAE",
      text: "The specialized finance vocabulary module was exactly what I needed for my banking career. The role-playing exercises prepared me well for real-world situations.",
      rating: 5
    },
    {
      name: "Sophie Müller",
      program: "Academic English",
      country: "Germany",
      text: "The academic writing course helped me publish my research in English-language journals. The instructor's feedback was precise and constructive.",
      rating: 5
    }
  ];

  // Dados de resultados e conquistas
  const successStories = [
    {
      category: "Academic Success",
      stats: "94%",
      description: "of our IELTS/TOEFL students achieve or exceed their target scores"
    },
    {
      category: "Career Advancement",
      stats: "78%",
      description: "of business English students reported career advancement within a year"
    },
    {
      category: "Global Community",
      stats: "10,000+",
      description: "students from over 45 countries have completed our programs"
    },
    {
      category: "Speaking Confidence",
      stats: "89%",
      description: "increase in speaking confidence reported by conversation class students"
    }
  ];

  // Renderizar estrelas baseadas na avaliação
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>★</span>
    ));
  };

  return (
    <div className="testimonials-page-container">
      {/* Hero Section */}
      <section className="testimonials-hero-section animate-section">
        <div className="hero-background"></div>
        <div className="testimonials-container">
          <h1 className="gradient-text">Student Success Stories</h1>
          <p className="testimonials-subtitle">
            Hear from our global community of English learners about their transformative experiences
          </p>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="featured-testimonials-section animate-section">
        <div className="testimonials-container">
          <h2>Featured Testimonials</h2>
          
          <div className="testimonial-carousel">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card featured">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-info">{testimonial.role} • {testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-indicators">
            {featuredTestimonials.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories-section animate-section">
        <div className="testimonials-container">
          <h2>The Link English Impact</h2>
          <p className="section-description">
            Our students achieve remarkable results through our proven teaching methodology
          </p>
          
          <div className="success-grid">
            {successStories.map((story, index) => (
              <div key={index} className="success-card">
                <div className="success-stats">{story.stats}</div>
                <h3>{story.category}</h3>
                <p>{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="all-testimonials-section animate-section">
        <div className="testimonials-container">
          <h2>More From Our Students</h2>
          <p className="section-description">
            Students from around the world share their experiences with Link English
          </p>
          
          <div className="testimonials-grid">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-program">{testimonial.program}</p>
                  <p className="testimonial-country">{testimonial.country}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="testimonials-cta-section animate-section">
        <div className="testimonials-container">
          <h2>Start Your Success Story Today</h2>
          <p>Join thousands of satisfied students on their journey to English fluency</p>
          <Link to="/contact" className="cta-button">
            <span className="button-shine"></span>
            Schedule Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsPage;