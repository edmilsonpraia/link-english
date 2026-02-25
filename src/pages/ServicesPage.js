import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import '../assets/css/ServicesPage.css';

function ServicesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].services;

  useEffect(() => {
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
    handleScroll();
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const mainCourses = [
    {
      title: t.generalEnglish,
      description: t.generalEnglishDesc,
      level: t.begToAdv,
      duration: "16-24 weeks",
      features: [t.smallClasses, t.weeklyReports, t.regularSpeaking],
      icon: "📚",
      pricing: {
        group: { price: "$65", period: "per month" },
        individual: { price: "$155", period: "per month" },
        online: { price: "$255", period: "per month" }
      }
    },
    {
      title: t.businessEnglish,
      description: t.businessEnglishDesc,
      level: t.intToAdv,
      duration: "16-20 weeks",
      features: [t.industryVocab, t.businessCases, t.mockMeetings],
      icon: "💼",
      pricing: {
        group: { price: "$85", period: "per month" },
        individual: { price: "$175", period: "per month" },
        online: { price: "$299", period: "per month" }
      }
    },
    {
      title: t.pronunciationCourse,
      description: t.pronunciationCourseDesc,
      level: t.allLevels,
      duration: "8-12 weeks",
      features: [t.videoLessons, t.personalFeedback, t.soundsLibrary],
      icon: "🗣️",
      pricing: {
        group: { price: "$49", period: "per month" },
        individual: { price: "$99", period: "per month" },
        online: { price: "$129", period: "per month" }
      }
    },
    {
      title: t.conversationalEnglish,
      description: t.conversationalEnglishDesc,
      level: t.allLevels,
      duration: "10-14 weeks",
      features: [t.realWorldTopics, t.pronunciationWorkshops, t.culturalDiscussions],
      icon: "🗣️",
      pricing: {
        group: { price: "$55", period: "per month" },
        individual: { price: "$110", period: "per month" },
        online: { price: "$199", period: "per month" }
      }
    },
    {
      title: t.emailWriting,
      description: t.emailWritingDesc,
      level: t.intToAdv,
      duration: "12-16 weeks",
      features: [t.polishedEmails, t.cvsLetters],
      icon: "📝",
      pricing: {
        group: { price: "$55", period: "per month" },
        individual: { price: "$155", period: "per month" },
        online: { price: "$285", period: "per month" }
      }
    }
  ];

  const specialResources = [
    { title: t.speakingClub, description: t.speakingClubDesc, frequency: t.weekly },
    { title: t.grammarClub, description: t.grammarClubDesc, frequency: t.weekly },
    { title: t.consultCoaching, description: t.consultCoachingDesc, frequency: t.daily },
    { title: t.masterclassWorkshops, description: t.masterclassWorkshopsDesc, frequency: t.biWeekly }
  ];

  return (
    <div className="services-page-container">
      {/* Hero Section */}
      <section className="services-hero-section animate-section">
        <div className="services-container">
          <h1 className="gradient-text">{t.heroTitle}</h1>
          <p className="services-subtitle">{t.heroSubtitle}</p>
          <div className="hero-buttons">
            <a href="#courses" className="service-button primary">{t.exploreCourses}</a>
            <a href="#contact" className="service-button secondary">{t.getStarted}</a>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Main Courses Section */}
      <section id="courses" className="main-courses-section animate-section">
        <div className="services-container">
          <h2>{t.corePrograms}</h2>
          <p className="section-description">{t.coreProgramsDesc}</p>
          <div className="courses-grid">
            {mainCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <p><strong>{t.level}:</strong> {course.level}</p>
                  <p><strong>{t.duration}:</strong> {course.duration}</p>
                </div>
                <div className="course-features">
                  <h4>{t.keyFeatures}</h4>
                  <ul>
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => openModal(course)} className="course-button">
                  {t.learnMore}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Resources Section */}
      <section className="special-resources-section animate-section">
        <div className="services-container">
          <h2>{t.additionalResources}</h2>
          <p className="section-description">{t.additionalResourcesDesc}</p>
          <div className="resources-grid">
            {specialResources.map((resource, index) => (
              <div key={index} className="resource-card">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <p className="resource-frequency"><span>{t.availability}:</span> {resource.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section">
        <div className="services-container">
          <h2>{t.faqTitle}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t.faq1Q}</h3>
              <p>{t.faq1A}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq2Q}</h3>
              <p>{t.faq2A}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq3Q}</h3>
              <p>{t.faq3A}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="services-cta-section animate-section">
        <div className="services-container">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <Link to="/contact" className="cta-button">
            <span className="button-shine"></span>
            {t.ctaBtn}
          </Link>
        </div>
      </section>

      {/* Modal */}
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
                <h3>{t.courseOptions}</h3>
                <div className="pricing-options">
                  <div className="pricing-card-modal">
                    <h4>👥 {t.groupClasses}</h4>
                    <div className="price">{selectedCourse.pricing.group.price}</div>
                    <div className="period">{selectedCourse.pricing.group.period}</div>
                    <ul>
                      <li>{t.studentsPerClassGroup}</li>
                      <li>{t.interactiveLearning}</li>
                      <li>{t.dynamicDiscussions}</li>
                    </ul>
                  </div>
                  <div className="pricing-card-modal popular">
                    <div className="popular-badge">{t.mostPopular}</div>
                    <h4>👤 {t.pairLessons}</h4>
                    <div className="price">{selectedCourse.pricing.individual.price}</div>
                    <div className="period">{selectedCourse.pricing.individual.period}</div>
                    <ul>
                      <li>{t.studentsPerClassPair}</li>
                      <li>{t.interactivePractice}</li>
                      <li>{t.customizedCurriculum}</li>
                    </ul>
                  </div>
                  <div className="pricing-card-modal">
                    <h4>💻 {t.individualLessons}</h4>
                    <div className="price">{selectedCourse.pricing.online.price}</div>
                    <div className="period">{selectedCourse.pricing.online.period}</div>
                    <ul>
                      <li>{t.customizedCurriculum}</li>
                      <li>{t.flexibleScheduling}</li>
                      <li>{t.personalizedInstruction}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-section">
                <h3>{t.courseDetails}</h3>
                <div className="course-info-modal">
                  <p><strong>{t.level}:</strong> {selectedCourse.level}</p>
                  <p><strong>{t.duration}:</strong> {selectedCourse.duration}</p>
                  <p><strong>{t.description}:</strong> {selectedCourse.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to="/contact" className="modal-button primary" onClick={closeModal}>
                {t.contactUs}
              </Link>
              <Link to="/contact" className="modal-button secondary" onClick={closeModal}>
                {t.enrollNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;
