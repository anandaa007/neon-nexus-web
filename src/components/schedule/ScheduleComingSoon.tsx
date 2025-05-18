
import React from 'react';
import { Info } from 'lucide-react';

const ScheduleComingSoon = () => {
  return (
    <div className="inline-flex items-center justify-center gap-3 mb-6 bg-cyber-medium bg-opacity-40 px-4 py-2 rounded-full">
      <Info size={24} className="text-neon-cyan" />
      <span className="font-orbitron text-neon-cyan">Coming Soon</span>
    </div>
  );
};

export default ScheduleComingSoon;
