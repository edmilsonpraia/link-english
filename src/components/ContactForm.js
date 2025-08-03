import React, { useState } from 'react';
import flagsImage from '../assets/images/flags.png';

function ContactForm() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // URL do Formspree para Link English Contact Form
  const FORMSPREE_URL = "https://formspree.io/f/xkgzvkwb";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
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
          message: formData.message,
          // Campos extras para organização no Formspree
          _subject: `New contact from Link English - ${formData.name}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setState({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
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

  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #151933 0%, #1d2040 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos de fundo */}
      <div style={{ 
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 158, 232, 0.1) 0%, rgba(59, 123, 192, 0.05) 70%, transparent 100%)',
        filter: 'blur(50px)',
        top: '-100px',
        right: '-50px',
        zIndex: '0'
      }}></div>
      
      <div style={{ 
        position: 'absolute',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 158, 232, 0.1) 0%, rgba(59, 123, 192, 0.05) 70%, transparent 100%)',
        filter: 'blur(50px)',
        bottom: '-100px',
        left: '-50px',
        zIndex: '0'
      }}></div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          transform: 'perspective(1000px) rotateY(-5deg)',
          transition: 'transform 0.5s ease',
          animation: 'fadeIn 1s ease-out'
        }}>
          <img 
            src={flagsImage} 
            alt="UK and US flags" 
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </div>
        
        <div style={{
          animation: 'fadeIn 1s ease-out 0.3s backwards'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #4F9EE8, #6DB9FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Get in touch with us
          </h2>
          <p style={{ 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.1rem'
          }}>
            Don't hesitate to contact us for further details.
          </p>
          
          <div style={{ 
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <p style={{ 
              display: 'flex', 
              alignItems: 'center', 
              fontSize: '1.1rem',
              color: '#4F9EE8'
            }}>
              <span style={{ 
                marginRight: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(79, 158, 232, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>✉️</span>
              linkenglishru@gmail.com
            </p>
            <p style={{ 
              display: 'flex', 
              alignItems: 'center',
              fontSize: '1.1rem',
              color: '#4F9EE8'
            }}>
              <span style={{ 
                marginRight: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(79, 158, 232, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>📞</span>
              +7 996 580 64 20
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div style={{
              background: 'rgba(76, 175, 80, 0.1)',
              border: '1px solid rgba(76, 175, 80, 0.3)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#4caf50'
            }}>
              ✓ Thanks for your message! We will get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div style={{
              background: 'rgba(244, 67, 54, 0.1)',
              border: '1px solid rgba(244, 67, 54, 0.3)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#f44336'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem'
              }}>
                Name
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name here" 
                required
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.6 : 1
                }} 
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem'
              }}>
                Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email here" 
                required
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.6 : 1
                }} 
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem'
              }}>
                Message
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here" 
                rows="5" 
                required
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.6 : 1
                }} 
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                background: loading 
                  ? 'rgba(79, 158, 232, 0.5)' 
                  : 'linear-gradient(90deg, #4F9EE8, #3B7BC0)',
                color: 'white', 
                padding: '0.9rem 2rem', 
                borderRadius: '0.5rem',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: loading 
                  ? 'none' 
                  : '0 8px 20px rgba(79, 158, 232, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;