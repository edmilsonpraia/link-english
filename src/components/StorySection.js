import React from 'react';
import '../assets/css/StorySection.css';

function StorySection() {
  return (
    <section className="story-section">
      <div className="story-container">
        <div>
          <h2 className="story-title">Our story</h2>
        </div>
        
        <div className="story-content">
          <p>
            Link English is more than just a language school; it's a dynamic community dedicated to helping learners excel in English. With a focus on providing top-notch resources, personalized instruction from skilled educators, and a positive atmosphere, our aim is to support you in achieving your language goals and surpassing your expectations. 
          </p>
          <p>
            Whether you're just starting out or looking to refine your skills, we invite you to join us on the path to mastering English.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;