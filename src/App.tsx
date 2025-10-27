import React, { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import RamCalculator from './components/RamCalculator';
import PricingPlans from './components/PricingPlans';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <RamCalculator />
          <PricingPlans />
          <Features />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;