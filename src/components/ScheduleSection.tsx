
import React from 'react';
import ScheduleHeader from './schedule/ScheduleHeader';
import ScheduleBody from './schedule/ScheduleBody';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <ScheduleHeader />
        <ScheduleBody />
      </div>
    </section>
  );
};

export default ScheduleSection;
