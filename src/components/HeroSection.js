import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import '../assets/css/HeroSection.css';

function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    // Criando animação de partículas no fundo
    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'bg-animation';
    document.body.appendChild(bgAnimation);

    for (let i = 0; i < 50; i++) {
      const span = document.createElement('span');
      span.style.width = `${Math.random() * 10 + 3}px`;
      span.style.height = span.style.width;
      span.style.left = `${Math.random() * 100}%`;
      span.style.bottom = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 15}s`;
      span.style.animationDuration = `${Math.random() * 10 + 15}s`;
      bgAnimation.appendChild(span);
    }

    return () => {
      document.body.removeChild(bgAnimation);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Círculos flutuantes decorativos */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      <div className="hero-container">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">
          {t.subtitle}
        </p>

        {/* Botão English Test */}
        <div className="hero-test-button">
          <Link to="/english-test" className="btn btn-test">
            <span className="test-icon">📋</span>
            {t.englishTest}
            <span className="btn-arrow">→</span>
          </Link>
        </div>

        <div className="service-cards">
          {/* Advance Card */}
          <div className="service-card">
            <h3>{t.advance}</h3>
            <p>
              {t.advanceDesc}
            </p>
            <Link to="/services" className="btn">
              {t.servicesBtn}
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          {/* Inspire Card */}
          <div className="service-card">
            <h3>{t.inspire}</h3>
            <p>
              {t.inspireDesc}
            </p>
            <Link to="/services" className="btn">
              {t.servicesBtn}
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          {/* Learn Card */}
          <div className="service-card">
            <h3>{t.learn}</h3>
            <p>
              {t.learnDesc}
            </p>
            <Link to="/services" className="btn">
              {t.servicesBtn}
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
