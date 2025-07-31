import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/TestimonialsPage.css';

// Dados dos depoimentos em destaque - movido para fora do componente
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
  },
  {
    name: "Zongo Armando",
    role: "Geocientista",
    country: "Angola",
    image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1753175635/photo_2025-07-22_12-17-35_zlwq34.jpg",
    text: "I have only praise for Link English. It is a serious and professional institution that uses excellent methodologies for teaching the English language, with dynamic methods. In a short time, you can clearly notice the progress, fluency, and improvement in listening skills. The strategy of bringing native speakers to interact with us is excellent, as it allows us to experience the language beyond the formalism of textbooks and also creates opportunities for debates. It is the right place for anyone who wants to speak English like a native. "
  },
  {
    name: "Maria Estrela",
    role: "Engenheira Agrônoma",
    country: "França",
    image: "https://res.cloudinary.com/dzmeorljk/image/upload/v1753175531/photo_2025-07-22_13-06-04_savcwx.jpg",
    text: "A professora Pérola revolucionou minha jornada no aprendizado de inglês com uma abordagem única que combina excelência pedagógica e acolhimento. Suas aulas interativas, repletas de recursos visuais e oportunidades para prática oral, criaram um ambiente perfeito para meu desenvolvimento. O diferencial está na maneira como ela equilibra teoria e prática, tornando cada aula produtiva. Em pouco tempo, pude notar avanços significativos não apenas na minha fluência, mas também na confiança para usar o inglês no dia a dia. "
  }
];

function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  useEffect(() => {
    // Animações baseadas em scroll APENAS
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
    handleScroll(); // Para itens visíveis inicialmente
    
    // Cleanup apenas para scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array de dependências vazio para executar apenas uma vez

  // Dados de todos os depoimentos
  const allTestimonials = [
    {
      name: "Zongo Armando",
      program: "Business English",
      country: "Angola",
      text: "A Link English é uma instituição séria e profissional, com metodologias eficazes e dinâmicas para o ensino do inglês. Em pouco tempo, os alunos notam evolução na fluência e na compreensão auditiva. A estratégia de interação com nativos é excelente, pois aproxima o idioma do contexto real e promove debates. É a escolha certa para quem deseja falar inglês como um nativo.",
      rating: 5
    },
    {
      name: "Elvira",
      program: "General English",
      country: "Russia",
      text: "Искали репетитора — нашли лучшего. Цель: Подтянуть уровень языка у ребенка (школьная программа + разговорная практика) Остановились на этом преподавателе по рекомендации друзей— и не зря! Совет другим родителям: Если хотите реальных результатов без зубрежки — вам сюда!.",
      rating: 5
    },
    {
      name: "Laura Albuquerque",
      program: "General English",
      country: "Moçambique",
      text: "O que mais gosto nas aulas da Link English é a imersão no inglês – mesmo cometendo erros, falamos apenas inglês, e a professora corrige, o que acelera o aprendizado. Antes, eu era tímida e tinha medo de errar, mas agora já me pego conversando naturalmente. Em apenas três meses, a evolução é clara. Recomendo a Link English para quem quer aprender inglês rápido e com confiança.",
      rating: 5
    },
    {
      name: "Uvarova Kira",
      program: "General English",
      country: "Russia",
      text: "Занимаемся с преподавателем около 1,5 месяцев. Заранее обсудили стоимость и график. После тестирования уровня подобрали учебник. 70% урока проходит на английском, чтобы ребёнок привыкал говорить без страха. Много игровых заданий — кроссворды, песни и т.д. Дочке очень нравится: она с удовольствием занимается на уроках и делает домашку. Уже виден прогресс в словарном запасе и разговорной речи.",
      rating: 5
    },
    {
      name: "Angelo Ferreira",
      program: "Business English",
      country: "Mozambique",
      text: "I am businessman and you know businessman without English you can not go ahead. When I started my English lesson I didn't know the many secret to learn English but today I am speaking not perfect but I have seen that my English is improving day by day and until end of the year my English will be another thing grace the English lesson I have been receiving.",
      rating: 5
    },
    {
      name: "Tomane",
      program: "English Speaking Club",
      country: "Mozambique",
      text: "Actually it was my first time attending and I'd like to have more sections like this. I really loved the methodology used and I was able to connect with partners from different parts of the world, in a nutshell, it was very insightful.",
      rating: 5
    },
  ];

  // Dados de resultados e conquistas
  const successStories = [
  
    {
      category: "Career Advancement",
      stats: "82%",
      description: "of business English students reported career advancement within a year"
    },
    {
      category: "Global Community",
      stats: "2000+",
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

  // Funções para navegação manual do carrossel - SEM AUTOMAÇÃO
  const nextSlide = () => {
    console.log('Next slide clicked - current index:', activeIndex); // Debug
    setActiveIndex((prev) => {
      const newIndex = (prev + 1) % featuredTestimonials.length;
      console.log('New index:', newIndex); // Debug
      return newIndex;
    });
  };

  const prevSlide = () => {
    console.log('Previous slide clicked - current index:', activeIndex); // Debug
    setActiveIndex((prev) => {
      const newIndex = (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length;
      console.log('New index:', newIndex); // Debug
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    console.log('Dot clicked - going to index:', index); // Debug
    setActiveIndex(index);
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
            {/* Botão Anterior */}
            <button className="carousel-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Slides do Carrossel */}
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

            {/* Botão Próximo */}
            <button className="carousel-nav next" onClick={nextSlide} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
            {/* Indicadores (Dots) */}
            <div className="carousel-indicators">
              {featuredTestimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
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
            Schedule Your Free Trial Lesson
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsPage;