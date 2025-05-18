
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TracksSection from '@/components/TracksSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="relative py-20 bg-cyber-darker">
        <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
        
        <div className="cyber-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-blue">ABOUT NEONEXUS</h2>
            </div>
            
            <div className="glass-panel rounded-lg p-8 border border-neon-blue border-opacity-30">
              <p className="text-lg text-gray-300 mb-6">
                NeoNexus is not just a hackathon—it's a journey into the future of technology. 
                For 36 adrenaline-fueled hours spanning September 6-7, 2025, participants from around the globe will converge to 
                ideate, innovate, and create solutions that push the boundaries of what's possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-violet">
                  <h3 className="font-orbitron font-bold text-xl mb-2">Registration</h3>
                  <p className="text-gray-400">Opening soon - stay tuned for announcements</p>
                </div>
                
                <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-cyan">
                  <h3 className="font-orbitron font-bold text-xl mb-2">2</h3>
                  <p className="text-gray-400">Categories: Software and Hardware</p>
                </div>
                
                <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-pink">
                  <h3 className="font-orbitron font-bold text-xl mb-2">$50K+</h3>
                  <p className="text-gray-400">In prizes, separate awards for both categories</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300">
                Our mission is to foster innovation at the intersection of emerging technologies, 
                bringing together diverse perspectives to solve real-world challenges. Join us for 
                an unforgettable experience of collaboration, learning, and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TracksSection />
      <ScheduleSection />
      <SpeakersSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
