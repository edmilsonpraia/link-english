import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import '../assets/css/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', program: 'general-english', message: '', preferredContact: 'email'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();
  const t = translations[language].contact;

  const FORMSPREE_URL = "https://formspree.io/f/xkgzvkwb";

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) { section.classList.add('visible'); }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, email: formData.email, phone: formData.phone,
          program: formData.program, message: formData.message, preferredContact: formData.preferredContact,
          _subject: `New contact from Link English - ${formData.name}`, _replyto: formData.email
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', program: 'general-english', message: '', preferredContact: 'email' });
        }, 5000);
      } else { throw new Error('Failed to send message'); }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(t.sending === 'Enviando...' ? 'Falha ao enviar mensagem. Por favor, tente novamente.' : 'Failed to send message. Please try again.');
    } finally { setLoading(false); }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, type: 'newsletter', _subject: 'Newsletter Subscription - Link English' }),
      });
      if (response.ok) { alert(t.successSubscribe); e.target.reset(); }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert(t.failSubscribe);
    }
  };

  const contactInfo = [
    { icon: '📱', title: t.phone, details: ['+7 996 580 64 20'], hours: t.monFri },
    { icon: '✉️', title: t.emailTitle, details: ['linkenglishru@gmail.com'], hours: t.respond24h },
    { icon: '📍', title: t.location, details: ['Bakalinskaya 25', 'Ufa', 'Russia'], hours: t.campusOpen }
  ];

  const faqs = [
    { question: t.faq1Q, answer: t.faq1A },
    { question: t.faq2Q, answer: t.faq2A },
    { question: t.faq3Q, answer: t.faq3A }
  ];

  return (
    <div className="contact-page-container">
      <section className="contact-hero-section animate-section">
        <div className="contact-container">
          <h1 className="gradient-text">{t.heroTitle}</h1>
          <p className="contact-subtitle">{t.heroSubtitle}</p>
        </div>
        <div className="hero-pattern"></div>
      </section>

      <section className="main-contact-section animate-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>{t.contactUs}</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>{t.thankYou}</h3>
                  <p>{t.msgSent}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="error-message" style={{ background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                      {error}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">{t.fullName}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t.fullNamePlaceholder} required disabled={loading} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t.email}</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.emailPlaceholder} required disabled={loading} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t.phoneOptional}</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.phonePlaceholder} disabled={loading} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="program">{t.interestedIn}</label>
                    <select id="program" name="program" value={formData.program} onChange={handleChange} disabled={loading}>
                      <option value="general-english">{t.generalEnglish}</option>
                      <option value="business-english">{t.businessEnglish}</option>
                      <option value="speaking-club">{t.speakingClub}</option>
                      <option value="grammar-club">{t.grammarClub}</option>
                      <option value="conversation">{t.conversationClasses}</option>
                      <option value="private-lessons">{t.individualLessons}</option>
                      <option value="consultation-coaching">{t.consultCoaching}</option>
                      <option value="email-writing">{t.emailWriting}</option>
                      <option value="other">{t.others}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{t.message}</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} rows="5" required disabled={loading}></textarea>
                  </div>
                  <div className="form-group">
                    <label>{t.preferredContact}</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input type="radio" name="preferredContact" value="email" checked={formData.preferredContact === 'email'} onChange={handleChange} disabled={loading} />
                        <span>{t.emailOption}</span>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="preferredContact" value="phone" checked={formData.preferredContact === 'phone'} onChange={handleChange} disabled={loading} />
                        <span>{t.phoneOption}</span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="submit-button" disabled={loading}>
                    <span className="button-text">{loading ? t.sending : t.sendMessage}</span>
                    <span className="button-icon">→</span>
                  </button>
                </form>
              )}
            </div>
            <div className="contact-info-container">
              <h2>{t.contactInfo}</h2>
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <div className="contact-details">
                      {info.details.map((detail, i) => (<p key={i}>{detail}</p>))}
                    </div>
                    <p className="contact-hours">{info.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section animate-section">
        <div className="contact-container">
          <h2>{t.faqTitle}</h2>
          <p className="section-description">{t.faqSubtitle}</p>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section animate-section">
        <div className="contact-container">
          <div className="newsletter-content">
            <h2>{t.newsletterTitle}</h2>
            <p>{t.newsletterSubtitle}</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="email" placeholder={t.newsletterPlaceholder} required />
              <button type="submit">{t.subscribe}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
