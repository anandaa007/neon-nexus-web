
import React from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleDayCardProps {
  day: string;
  date: string;
  description: string;
}

const ScheduleDayCard = ({ day, date, description }: ScheduleDayCardProps) => {
  return (
    <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border-l-4 border-neon-cyan">
      <div className="flex items-center gap-2 mb-3">
        <Calendar size={20} className="text-neon-cyan" />
        <h4 className="font-orbitron font-bold">{day}: {date}</h4>
      </div>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ScheduleDayCard;
