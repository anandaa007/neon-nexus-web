
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const HeroSection = () => {
  // Set hackathon date to September 6, 2025
  const hackathonDate = new Date('2025-09-06T09:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Live Updates state
  const [scrollIndex, setScrollIndex] = useState(0);
  const liveUpdates = [
    "REGISTRATION OPENING SOON! STAY TUNED FOR UPDATES",
    "NEONEXUS HACKATHON • SEPTEMBER 6-7, 2025 • 36 HOURS OF CODING",
    "NATIONAL LEVEL EVENT • $50,000+ IN PRIZES • SEPARATE AWARDS FOR HARDWARE & SOFTWARE",
    "BRINGING TOGETHER THE BEST INNOVATORS FROM ACROSS THE COUNTRY"
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +hackathonDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [hackathonDate]);

  // Live Updates effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % liveUpdates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="relative min-h-screen pt-20 grid-bg overflow-hidden">
      <div className="scanline"></div>
      <div className="absolute inset-0 bg-neon-glow opacity-30"></div>
      
      <div className="cyber-container relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/94236d43-1ed1-4b71-a66c-0517b0678074.png" 
              alt="NeoNexus Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 animate-float">
            <span className="neon-text neon-violet">NEO</span>
            <span className="neon-text neon-cyan">NEXUS</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Bridging reality and digital frontiers. Join us on September 6-7, 2025 for a 
            36-hour hackathon where innovation meets the future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="neon-button text-lg opacity-80 cursor-not-allowed">
              Registration Opening Soon
            </button>
            <a 
              href="#about" 
              className="px-8 py-3 text-lg font-orbitron font-semibold tracking-wider text-white 
                       border border-white border-opacity-30 rounded-md transition-all duration-300
                       hover:border-neon-cyan hover:text-neon-cyan"
            >
              Learn More
            </a>
          </div>
          
          <div className="glass-panel rounded-xl p-6 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4 gap-2">
              <Clock className="text-neon-cyan" />
              <h3 className="text-xl font-orbitron text-gray-200">HACKATHON COUNTDOWN</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeBlocks.map((block, index) => (
                <div 
                  key={index}
                  className="bg-cyber-medium bg-opacity-50 rounded-lg p-4 border border-neon-violet border-opacity-30"
                >
                  <div className="text-3xl md:text-4xl font-orbitron font-bold neon-text neon-violet mb-2">
                    {String(block.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-orbitron">
                    {block.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Live Updates Section - Now right after the countdown */}
          <div className="max-w-3xl mx-auto glass-panel rounded-lg p-4 border border-neon-cyan border-opacity-30">
            <div className="flex items-center justify-center mb-2 gap-2">
              <h3 className="text-lg font-orbitron text-neon-cyan">LIVE UPDATES</h3>
            </div>
            
            <div className="overflow-hidden border border-neon-cyan border-opacity-40 rounded-lg bg-black bg-opacity-30">
              <div className="relative h-12">
                {liveUpdates.map((update, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                      index === scrollIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-center px-4 w-full">
                      <p className="font-orbitron text-neon-cyan truncate">
                        {update}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
