import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import '../assets/css/AboutPage.css';
import teacherImage1 from '../assets/images/01.jpg';
import teacherImage2 from '../assets/images/02.jpg';
import teacherImage3 from '../assets/images/3.jpg';
import teacherImage4 from '../assets/images/4.jpg';
import teacherImage5 from '../assets/images/5.jpg';
import teacherImage7 from '../assets/images/7.jpg';

function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  useEffect(() => {
    const createParticles = () => {
      const existing = document.querySelector('.about-bg-animation');
      if (existing) return;

      const bgAnimation = document.createElement('div');
      bgAnimation.className = 'about-bg-animation';

      const container = document.querySelector('.about-page-container');
      if (container) {
        container.appendChild(bgAnimation);

        for (let i = 0; i < 30; i++) {
          const span = document.createElement('span');
          span.style.width = `${Math.random() * 8 + 2}px`;
          span.style.height = span.style.width;
          span.style.left = `${Math.random() * 100}%`;
          span.style.bottom = '0px';
          span.style.animationDelay = `${Math.random() * 15}s`;
          span.style.animationDuration = `${Math.random() * 8 + 12}s`;
          bgAnimation.appendChild(span);
        }
      }
    };

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      const bgAnimation = document.querySelector('.about-bg-animation');
      if (bgAnimation) {
        bgAnimation.remove();
      }
    };
  }, []);

  const teachers = [
    {
      name: "Pérola da Beauty",
      flag: "https://flagcdn.com/16x12/mz.png",
      flagAlt: "Moçambique",
      role: t.certifiedTeacher,
      experience: "6 years",
      specialty: "Business English, General English, Grammar & Academic writing",
      image: teacherImage1
    },
    {
      name: "Boamah Eric Fiifi",
      flag: "https://flagcdn.com/16x12/gh.png",
      flagAlt: "Ghana",
      role: t.conversationSpecialist,
      experience: "3 years",
      specialty: "Pronunciation, General English & Speaking",
      image: teacherImage2
    },
    {
      name: "Christabel Awako",
      flag: "https://flagcdn.com/16x12/gh.png",
      flagAlt: "Ghana",
      role: t.conversationSpecialist,
      experience: "2 years",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage3
    },
    {
      name: "Ednaldo Neto",
      flag: "https://flagcdn.com/16x12/br.png",
      flagAlt: "Brasil",
      role: t.englishTeacher,
      experience: "1 year",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage4
    },
    {
      name: "Tanyaradzwa Dean",
      flag: "https://flagcdn.com/16x12/zw.png",
      flagAlt: "Zimbabwe",
      role: t.englishTeacher,
      experience: "4 years",
      specialty: "American Accent Speaking and Grammar",
      image: teacherImage5
    },
    {
      name: "Felesberto Boleke",
      flag: "https://flagcdn.com/16x12/za.png",
      flagAlt: "South Africa",
      role: t.englishTeacher,
      experience: "1 year",
      specialty: "Grammar, General English & Speaking",
      image: teacherImage7
    }
  ];

  const methodologies = [
    { title: t.immersiveLearning, description: t.immersiveLearningDesc, icon: "🌍" },
    { title: t.personalizedPaths, description: t.personalizedPathsDesc, icon: "🛤️" },
    { title: t.practicalApplication, description: t.practicalApplicationDesc, icon: "🔄" },
    { title: t.culturalIntegration, description: t.culturalIntegrationDesc, icon: "🤝" },
    { title: t.feedbackDriven, description: t.feedbackDrivenDesc, icon: "🔄" },
    { title: t.technologyEnhanced, description: t.technologyEnhancedDesc, icon: "💻" }
  ];

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section animate-section">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>

        <div className="about-container">
          <h1 className="gradient-text">{t.heroTitle}</h1>
          <p className="about-subtitle">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="about-container mission-vision-grid">
          <div className="mission-box animate-section">
            <h2>{t.missionTitle}</h2>
            <p>{t.missionP1}</p>
            <p>{t.missionP2}</p>
          </div>

          <div className="vision-box animate-section">
            <h2>{t.visionTitle}</h2>
            <p>{t.visionP1}</p>
            <p>{t.visionP2}</p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="about-journey-section">
        <div className="about-container">
          <h2>{t.journeyTitle}</h2>

          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item left animate-section" id="timeline-2023">
              <div className="timeline-content">
                <h3>2023</h3>
                <p>{t.year2023}</p>
              </div>
              <div className="timeline-marker"></div>
            </div>

            <div className="timeline-item right animate-section" id="timeline-2024">
              <div className="timeline-content">
                <h3>2024</h3>
                <p>{t.year2024}</p>
              </div>
              <div className="timeline-marker"></div>
            </div>

            <div className="timeline-item left animate-section" id="timeline-2025">
              <div className="timeline-content">
                <h3>2025</h3>
                <p>{t.year2025}</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="about-methodology-section animate-section">
        <div className="about-container">
          <h2>{t.methodologyTitle}</h2>
          <p className="section-description">
            {t.methodologySubtitle}
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
          <h2>{t.teachersTitle}</h2>
          <p className="section-description">
            {t.teachersSubtitle}
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
                <p className="teacher-detail"><strong>{t.experience}:</strong> {teacher.experience}</p>
                <p className="teacher-detail"><strong>{t.specialty}:</strong> {teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section animate-section">
        <div className="about-container">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <Link to="/contact" className="cta-button">
            <span className="button-shine"></span>
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
