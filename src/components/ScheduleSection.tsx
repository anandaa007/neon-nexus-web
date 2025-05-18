
import React from 'react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-cyan">EVENT SCHEDULE</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            September 6 & 7, 2025: Two days of innovation, collaboration, and technological advancement.
            Our 36-hour hackathon will be packed with exciting activities and challenges.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel rounded-lg p-8 border border-neon-cyan border-opacity-30 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6 bg-cyber-medium bg-opacity-40 px-4 py-2 rounded-full">
            <Info size={24} className="text-neon-cyan" />
            <span className="font-orbitron text-neon-cyan">Coming Soon</span>
          </div>
          
          <h3 className="text-2xl font-orbitron font-bold mb-6">Full Schedule Under Development</h3>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is crafting an exciting lineup of workshops, tech talks, networking sessions, and more for NeoNexus.
            The detailed schedule will be revealed closer to the event date.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-cyan">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={20} className="text-neon-cyan" />
                <h4 className="font-orbitron font-bold">Day 1: September 6, 2025</h4>
              </div>
              <p className="text-gray-400">
                Opening ceremony, team formations, workshops, and start of the hackathon.
              </p>
            </div>
            
            <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-cyan">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={20} className="text-neon-cyan" />
                <h4 className="font-orbitron font-bold">Day 2: September 7, 2025</h4>
              </div>
              <p className="text-gray-400">
                Final submissions, project presentations, judging, and awards ceremony.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neon-cyan font-orbitron">
              Stay tuned for the complete schedule!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
