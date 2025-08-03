import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/HeroSection.css';

function HeroSection() {
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
        <h1 className="hero-title">Link English</h1>
        <p className="hero-subtitle">
          Elevate your language skills and unlock a world of opportunities through immersive learning
        </p>

        {/* Botão English Test */}
        <div className="hero-test-button">
          <Link to="/english-test" className="btn btn-test">
            <span className="test-icon">📋</span>
            English Test
            <span className="btn-arrow">→</span>
          </Link>
        </div>
        
        <div className="service-cards">
          {/* Advance Card */}
          <div className="service-card">
            <h3>Advance</h3>
            <p>
              Elevate your English skills with our modern courses designed for every level, from beginner to advanced.
            </p>
            <Link to="/services" className="btn">
              Services
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          
          {/* Inspire Card */}
          <div className="service-card">
            <h3>Inspire</h3>
            <p>
              Discover your language potential in a nurturing environment that encourages growth and confidence.
            </p>
            <Link to="/services" className="btn">
              Services
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          
          {/* Learn Card */}
          <div className="service-card">
            <h3>Learn</h3>
            <p>
              Immerse yourself in a comprehensive learning experience that strengthens both your speaking and comprehension abilities.
            </p>
            <Link to="/services" className="btn">
              Services
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;