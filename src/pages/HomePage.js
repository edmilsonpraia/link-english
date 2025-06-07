import React from 'react';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import OfferingsSection from '../components/OfferingsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <OfferingsSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}

export default HomePage;