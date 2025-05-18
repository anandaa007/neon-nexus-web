
import React from 'react';
import ScheduleComingSoon from './ScheduleComingSoon';
import ScheduleDayCard from './ScheduleDayCard';

const ScheduleBody = () => {
  return (
    <div className="max-w-4xl mx-auto glass-panel rounded-lg p-8 border border-neon-cyan border-opacity-30 text-center">
      <ScheduleComingSoon />
      
      <h3 className="text-2xl font-orbitron font-bold mb-6">Full Schedule Under Development</h3>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Our team is crafting an exciting lineup of workshops, tech talks, networking sessions, and more for NeoNexus.
        The detailed schedule will be revealed closer to the event date.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
        <ScheduleDayCard 
          day="Day 1" 
          date="September 6, 2025" 
          description="Opening ceremony, team formations, workshops, and start of the hackathon."
        />
        
        <ScheduleDayCard 
          day="Day 2" 
          date="September 7, 2025" 
          description="Final submissions, project presentations, judging, and awards ceremony."
        />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-neon-cyan font-orbitron">
          Stay tuned for the complete schedule!
        </p>
      </div>
    </div>
  );
};

export default ScheduleBody;
