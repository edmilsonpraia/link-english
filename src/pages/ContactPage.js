import React, { useEffect, useState } from 'react';
import '../assets/css/ContactPage.css';

function ContactPage() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'general-english',
    message: '',
    preferredContact: 'email'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // URL do Formspree para Link English Contact Form
  const FORMSPREE_URL = "https://formspree.io/f/xkgzvkwb";

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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para itens visíveis inicialmente
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
          preferredContact: formData.preferredContact,
          // Campos extras para organização no Formspree
          _subject: `New contact from Link English - ${formData.name}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset do formulário após alguns segundos
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            program: 'general-english',
            message: '',
            preferredContact: 'email'
          });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Newsletter form handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter',
          _subject: 'Newsletter Subscription - Link English'
        }),
      });

      if (response.ok) {
        alert('Successfully subscribed to newsletter!');
        e.target.reset();
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  // Informações de contato
  const contactInfo = [
    {
      icon: '📱',
      title: 'Phone',
      details: ['+7 996 580 64 20'],
      hours: 'Monday - Friday: 8am - 8pm'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['linkenglishru@gmail.com'],
      hours: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Location',
      details: ['Bakalinskaya 25', 'Ufa', 'Russia'],
      hours: 'Campus open: 7am - 10pm daily'
    }
  ];

  // Perguntas frequentes
  const faqs = [
    {
      question: "How do I know which program is right for me?",
      answer: "We offer a complimentary placement test and consultation to assess your current level and discuss your goals. Our academic advisors will then recommend the most suitable program tailored to your needs."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept various payment methods including bank transfers (Sber, T-Bank, Millennium Bim, BCI, Bai,BPI), and others, such as: M-pesa, E-mola and Paypal."
    },
    {
      question: "How quickly can I expect to see improvement?",
      answer: "Progress varies based on several factors including starting level, program intensity, and individual dedication. Most students report noticeable improvement within 4-6 weeks of consistent study."
    }
  ];

  return (
    <div className="contact-page-container">
      {/* Hero Section */}
      <section className="contact-hero-section animate-section">
        <div className="contact-container">
          <h1 className="gradient-text">Get in Touch</h1>
          <p className="contact-subtitle">
            We're here to answer your questions and help you start your English learning journey
          </p>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section animate-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Contact Us</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="error-message" style={{
                      background: '#ffebee',
                      color: '#c62828',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      {error}
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="program">I'm interested in</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="general-english">General English</option>
                      <option value="business-english">Business English</option>
                      <option value="speaking-club">Speaking Club</option>
                      <option value="grammar-club">Grammar Club</option>
                      <option value="conversation">Conversation Classes</option>
                      <option value="private-lessons">Individual Lessons</option>
                      <option value="consultation-coaching">Consultation & Coaching</option>
                      <option value="email-writing">Email Writing</option>
                      <option value="other">Others</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you"
                      rows="5"
                      required
                      disabled={loading}
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label>Preferred contact method</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          disabled={loading}
                        />
                        <span>Email</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          disabled={loading}
                        />
                        <span>Phone</span>
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className="submit-button" disabled={loading}>
                    <span className="button-text">
                      {loading ? 'Sending...' : 'Send Message'}
                    </span>
                    <span className="button-icon">→</span>
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <div className="contact-details">
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                    <p className="contact-hours">{info.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section">
        <div className="contact-container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-description">
            Find quick answers to common questions about our programs and enrollment process
          </p>
          
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

      {/* Newsletter Section */}
      <section className="newsletter-section animate-section">
        <div className="contact-container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest courses, events, and language learning tips</p>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;