import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#191C2C', 
      padding: '2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p>© All Rights Reserved. Link English</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ 
            width: '2.5rem', 
            height: '2.5rem', 
            backgroundColor: '#4F9EE8', 
            borderRadius: '0.375rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            textDecoration: 'none'
          }}>f</a>
          <a href="#" style={{ 
            width: '2.5rem', 
            height: '2.5rem', 
            backgroundColor: '#4F9EE8', 
            borderRadius: '0.375rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            textDecoration: 'none'
          }}>x</a>
          <a href="#" style={{ 
            width: '2.5rem', 
            height: '2.5rem', 
            backgroundColor: '#4F9EE8', 
            borderRadius: '0.375rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            textDecoration: 'none'
          }}>in</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;