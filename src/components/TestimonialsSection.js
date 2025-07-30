import React from 'react';

function TestimonialsSection() {
  return (
    <section style={{ padding: '4rem 0', background: '#191C2C' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <p>Edmilson Delfim Praia</p>
        </div>
        <p style={{ 
          fontSize: '1.5rem', 
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '2rem' 
        }}>
          Link English transformed my communication skills! The instructors are fantastic, encouraging me to speak confidently. The classes are interactive and enjoyable, making learning fun.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <span style={{ 
            width: '0.5rem', 
            height: '0.5rem', 
            borderRadius: '50%', 
            backgroundColor: '#4F9EE8',
            display: 'block'
          }}></span>
          <span style={{ 
            width: '0.5rem', 
            height: '0.5rem', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            display: 'block'
          }}></span>
          <span style={{ 
            width: '0.5rem', 
            height: '0.5rem', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            display: 'block'
          }}></span>
        </div>
      </div>
      <div style={{
        marginTop: '2rem',
        width: '100%',
        padding: '0.5rem 0',
        background: 'linear-gradient(90deg, #4F9EE8, #4F9EE8)',
        overflow: 'hidden'
      }}>
        <div style={{
          whiteSpace: 'nowrap',
          animation: 'marquee 20s linear infinite'
        }}>
          <span style={{ padding: '0 1rem' }}>Your journey to fluency begins here</span>
          <span style={{ padding: '0 1rem' }}>Your journey to fluency begins here</span>
          <span style={{ padding: '0 1rem' }}>Your journey to fluency begins here</span>
          <span style={{ padding: '0 1rem' }}>Your journey to fluency begins here</span>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;