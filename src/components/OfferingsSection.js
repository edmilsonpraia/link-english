import React from 'react';
import '../assets/css/OfferingsSection.css';

function OfferingsSection() {
  const offerings = [
    {
      title: "Individual lessons",
      description: "Tailored sessions with experienced instructors focusing on your specific learning needs and goals."
    },
    {
      title: "Group classes",
      description: "Engaging lessons led by passionate teachers in a collaborative environment that promotes conversation and cultural exchange."
    },
    {
      title: "Conversation practice",
      description: "Interactive sessions to boost your speaking skills through real-world scenarios and confidence-building exercises."
    },
    {
      title: "Masterclass",
      description: "Focused training on specific language topics such as business English, academic writing, and pronunciation."
    },
    {
      title: "Online courses",
      description: "Flexible learning options to fit your schedule with multimedia resources and regular feedback from instructors."
    },
    {
      title: "Language resources",
      description: "Access to a wealth of materials to aid your studies, including digital libraries, practice tests, and study guides."
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
                  {/* Você pode adicionar ícones específicos para cada card aqui */}
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