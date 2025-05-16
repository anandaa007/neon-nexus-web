
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  location: string;
  isKeyEvent?: boolean;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ 
  time, 
  title, 
  description, 
  location, 
  isKeyEvent = false 
}) => {
  return (
    <div className={`
      relative glass-panel rounded-lg p-6 mb-8 border border-opacity-30
      ${isKeyEvent ? 'border-neon-pink neon-pink' : 'border-neon-violet neon-violet'}
      transition-all duration-300 hover:transform hover:translate-x-2
    `}>
      {/* Timeline connector */}
      <div className="absolute top-0 -left-10 bottom-0 flex flex-col items-center">
        <div className={`
          w-4 h-4 rounded-full mt-8 
          ${isKeyEvent ? 'bg-neon-pink' : 'bg-neon-violet'}
          animate-pulse-neon
        `}></div>
        <div className="w-0.5 h-full bg-gray-700 -mt-2 ml-0.5"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span className="font-orbitron">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          <h3 className={`
            text-xl font-orbitron font-bold mb-2
            ${isKeyEvent ? 'neon-text neon-pink' : ''}
          `}>
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Day tabs component
const DayTabs: React.FC<{ activeDay: number; setActiveDay: (day: number) => void }> = ({ 
  activeDay, 
  setActiveDay 
}) => {
  const days = ["DAY 1 (SEP 6)", "DAY 2 (SEP 7)"];
  
  return (
    <div className="flex justify-center mb-12">
      <div className="flex bg-cyber-medium bg-opacity-50 rounded-lg overflow-hidden border border-neon-violet border-opacity-30">
        {days.map((day, index) => (
          <button
            key={index}
            className={`
              px-8 py-3 font-orbitron font-semibold transition-all duration-300
              ${activeDay === index 
                ? 'bg-neon-violet bg-opacity-30 text-white' 
                : 'text-gray-400 hover:text-gray-200'}
            `}
            onClick={() => setActiveDay(index)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const scheduleData = [
  // Day 1 - September 6th
  [
    {
      time: "09:00 - 10:00",
      title: "Registration & Welcome Coffee",
      description: "Check in at the registration desk, get your badges and welcome kit.",
      location: "Main Lobby"
    },
    {
      time: "10:00 - 11:00",
      title: "Opening Ceremony",
      description: "Kickoff of NeoNexus with keynote speeches from industry leaders and organizers.",
      location: "Nexus Auditorium",
      isKeyEvent: true
    },
    {
      time: "11:00 - 12:00",
      title: "Team Formation & Networking",
      description: "Find your perfect team members and discuss preliminary ideas.",
      location: "Collaboration Hall"
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch Break",
      description: "Recharge with a tech-themed buffet lunch.",
      location: "Cyber Canteen"
    },
    {
      time: "13:00 - 14:00",
      title: "Hackathon Starts",
      description: "Official start of the hacking period. Let the innovation begin!",
      location: "All Venues",
      isKeyEvent: true
    },
    {
      time: "18:00 - 19:00",
      title: "Workshop: AI Ethics",
      description: "Interactive workshop on ethical considerations in AI development.",
      location: "Workshop Pod A"
    },
    {
      time: "22:00 - 23:00",
      title: "Late Night Networking",
      description: "Casual networking session with snacks and refreshments.",
      location: "Lounge Zone"
    }
  ],
  // Day 2 - September 7th
  [
    {
      time: "08:00 - 09:00",
      title: "Breakfast",
      description: "Final day breakfast to fuel your coding sprint.",
      location: "Cyber Canteen"
    },
    {
      time: "10:00 - 11:00",
      title: "Mentor Sessions",
      description: "Last chance for one-on-one mentoring with industry experts.",
      location: "Mentoring Booths"
    },
    {
      time: "13:00 - 14:00",
      title: "Hacking Ends",
      description: "Put the final touches on your projects. Coding period officially ends.",
      location: "All Venues",
      isKeyEvent: true
    },
    {
      time: "14:00 - 16:00",
      title: "Project Presentations",
      description: "Teams present their innovations to judges and fellow participants.",
      location: "Nexus Auditorium",
      isKeyEvent: true
    },
    {
      time: "16:00 - 17:00",
      title: "Judges Deliberation",
      description: "Judges evaluate projects while participants network and relax.",
      location: "Restricted Area"
    },
    {
      time: "17:00 - 18:00",
      title: "Awards Ceremony",
      description: "Celebration of the best projects with prizes and recognition.",
      location: "Main Stage",
      isKeyEvent: true
    },
    {
      time: "18:00 - 20:00",
      title: "Closing Party",
      description: "Celebrate the end of an amazing hackathon with food, drinks, and music.",
      location: "Celebration Hall"
    }
  ]
];

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = React.useState(0);
  
  return (
    <section id="schedule" className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-cyan">EVENT SCHEDULE</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            September 6 & 7, 2025: Two days of innovation, collaboration, and technological advancement.
            Our 36-hour hackathon is packed with exciting activities and challenges.
          </p>
        </div>
        
        <DayTabs activeDay={activeDay} setActiveDay={setActiveDay} />
        
        <div className="relative max-w-4xl mx-auto pl-10">
          {scheduleData[activeDay].map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
          
          {/* Bottom time marker */}
          <div className="absolute top-0 -left-10 flex items-center">
            <Calendar className="text-neon-violet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
