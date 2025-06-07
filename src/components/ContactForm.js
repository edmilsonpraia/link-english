import React, { useState } from 'react';
import flagsImage from '../assets/images/flags.png';

function ContactForm() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você adicionaria a lógica para enviar o formulário
    alert('Thanks for your message! We will get back to you soon.');
    setState({ name: '', email: '', message: '' });
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
              support@hello.com
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
              646-675-5974
            </p>
          </div>
          
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
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
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
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
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
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(79, 158, 232, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical',
                  transition: 'all 0.3s ease'
                }} 
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              style={{ 
                background: 'linear-gradient(90deg, #4F9EE8, #3B7BC0)',
                color: 'white', 
                padding: '0.9rem 2rem', 
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 8px 20px rgba(79, 158, 232, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;