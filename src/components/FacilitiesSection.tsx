
import React from 'react';
import { Users, Home, UtensilsCrossed, Wifi } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Users,
      title: "INDUSTRY MENTORS",
      description: "Get mentored by leaders with hands-on experience.",
      color: "neon-violet"
    },
    {
      icon: Home,
      title: "ACCOMMODATION",
      description: "Accommodation facility within the campus",
      color: "neon-cyan"
    },
    {
      icon: UtensilsCrossed,
      title: "FOOD ACCESSIBILITY",
      description: "Daily 3 meals (Breakfast, Lunch, Dinner) available within campus",
      color: "neon-pink"
    },
    {
      icon: Wifi,
      title: "INTERNET FACILITY",
      description: "Reliable internet connectivity throughout the event.",
      color: "neon-green"
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-dark">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-blue">
            FACILITIES & AMENITIES
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide world-class facilities to ensure your hackathon experience is comfortable and productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="glass-panel rounded-lg p-8 border border-opacity-30 hover:border-opacity-60 transition-all duration-300 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-cyber-medium bg-opacity-50 flex items-center justify-center border border-${facility.color} border-opacity-30 group-hover:border-opacity-60 transition-all duration-300`}>
                <facility.icon className={`text-${facility.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
              </div>
              
              <h3 className={`text-xl font-orbitron font-bold mb-4 neon-text ${facility.color}`}>
                {facility.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
