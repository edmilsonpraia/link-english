import React from 'react';
import '../assets/css/OfferingsSection.css';

function OfferingsSection() {
  const offerings = [
    {
      title: "Individual lessons",
      description: "Tailored sessions with experienced instructors focusing on your specific learning needs and goals.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      title: "Group classes",
      description: "Engaging lessons led by passionate teachers in a collaborative environment that promotes conversation and cultural exchange.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Conversation practice",
      description: "Interactive sessions to boost your speaking skills through real-world scenarios and confidence-building exercises.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 9h8"/>
          <path d="M8 13h6"/>
        </svg>
      )
    },
    {
      title: "Masterclass",
      description: "Focused training on specific language topics such as business English, academic writing, and pronunciation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      )
    },
    {
      title: "Online courses",
      description: "Flexible learning options to fit your schedule with multimedia resources and regular feedback from instructors.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M7 11l3 3 6-6"/>
        </svg>
      )
    },
    {
      title: "Language resources",
      description: "Access to a wealth of materials to aid your studies, including digital libraries, practice tests, and study guides.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <path d="M8 7h6"/>
          <path d="M8 11h8"/>
          <path d="M8 15h6"/>
        </svg>
      )
    }
  ];

  return (
    <section className="offerings-section">
      {/* Background elements */}
      <div className="offerings-bg-element bg-element-1"></div>
      <div className="offerings-bg-element bg-element-2"></div>
      
      <div className="offerings-container">
        <h2 className="offerings-title">Our offerings</h2>
        <p className="offerings-subtitle">
          Customized programs to enhance your English learning journey, designed to meet your unique needs and goals
        </p>
        
        <div className="offerings-buttons">
          <a href="#contact" className="btn-primary">
            Contact
          </a>
          <a href="#reviews" className="btn-secondary">
            Reviews
          </a>
        </div>
        
        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <div key={index} className="offering-card">
              <div className="offering-header">
                <div className="offering-icon">
                  {offering.icon}
                </div>
                <h3 className="offering-title">
                  {offering.title}
                </h3>
              </div>
              <p className="offering-description">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferingsSection;