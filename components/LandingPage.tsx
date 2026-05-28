import React from 'react';
import Hero from './Hero';
import GlobalFootprint from './GlobalFootprint';
import ProductsWeMade from './ProductsWeMade';
import AICapabilityOverview from './AICapabilityOverview';
import Contact from './Contact';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <GlobalFootprint />
      <ProductsWeMade />
      <AICapabilityOverview />
      <Contact />
    </>
  );
};

export default LandingPage;