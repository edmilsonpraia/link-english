import React from 'react';
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import '../assets/css/StorySection.css';

function StorySection() {
  const { language } = useLanguage();
  const t = translations[language].story;

  return (
    <section className="story-section">
      <div className="story-container">
        <div>
          <h2 className="story-title">{t.title}</h2>
        </div>

        <div className="story-content">
          <p>
            {t.p1}
          </p>
          <p>
            {t.p2}
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
