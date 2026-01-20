import { useState, useEffect } from 'react';
import { IntroAnimation } from '@/app/components/IntroAnimation';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { FoundersSection } from '@/app/components/FoundersSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { PortfolioSection } from '@/app/components/PortfolioSection';
import { PricingSection } from '@/app/components/PricingSection';
import { ContactSection } from '@/app/components/ContactSection'; // 👈 ADDED IMPORT
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay before showing navbar for smooth transition
    setTimeout(() => {
      setNavbarVisible(true);
    }, 100);
  };

  // Prevent scrolling during intro animation
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  return (
    <div className="relative min-h-screen bg-[#020617]">
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {!showIntro && (
        <>
          <Navbar isVisible={navbarVisible} />
          <main>
            <Hero />
            <FoundersSection />
            <ServicesSection />
            <PortfolioSection />
            <PricingSection />
            
            {/* 👇 ADDED CONTACT SECTION HERE */}
            <ContactSection /> 
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}