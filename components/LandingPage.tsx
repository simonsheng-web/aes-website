import React from 'react';
import Hero from './Hero';
import AboutUsOverview from './AboutUsOverview';
import GlobalFootprint from './GlobalFootprint';
import ProductsWeMade from './ProductsWeMade';
import AICapabilityOverview from './AICapabilityOverview';
import Contact from './Contact';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUsOverview />
      <GlobalFootprint />
      <ProductsWeMade />
      <AICapabilityOverview />
      <Contact />
    </>
  );
};

export default LandingPage;