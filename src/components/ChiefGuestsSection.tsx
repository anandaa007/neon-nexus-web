
import React from 'react';
import { Briefcase, Award, Users, Code, Zap, Globe } from 'lucide-react';

const ChiefGuestsSection = () => {
  const chiefGuests = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Technology Officer",
      company: "Tech Innovations Ltd",
      icon: Code,
      expertise: "AI & Machine Learning"
    },
    {
      name: "Ms. Priya Sharma",
      title: "VP of Engineering",
      company: "Digital Solutions Inc",
      icon: Zap,
      expertise: "Cloud Computing"
    },
    {
      name: "Mr. Arjun Patel",
      title: "Lead Product Manager",
      company: "Innovation Hub",
      icon: Users,
      expertise: "Product Strategy"
    },
    {
      name: "Dr. Meera Singh",
      title: "Research Director",
      company: "Future Tech Labs",
      icon: Award,
      expertise: "Blockchain Technology"
    },
    {
      name: "Mr. Vikram Gupta",
      title: "Startup Founder",
      company: "NextGen Ventures",
      icon: Briefcase,
      expertise: "Entrepreneurship"
    },
    {
      name: "Ms. Kavya Reddy",
      title: "Senior Architect",
      company: "Global Tech Systems",
      icon: Globe,
      expertise: "System Architecture"
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-violet">
            CHIEF GUESTS
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet our distinguished industry leaders who will guide and inspire participants throughout the hackathon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chiefGuests.map((guest, index) => (
            <div 
              key={index}
              className="glass-panel rounded-lg p-6 border border-neon-violet border-opacity-30 hover:border-opacity-60 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cyber-medium bg-opacity-50 flex items-center justify-center border border-neon-violet border-opacity-30 mr-4">
                  <guest.icon className="text-neon-violet group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                    {guest.name}
                  </h3>
                  <p className="text-sm text-neon-violet">
                    {guest.expertise}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-2 font-semibold">
                {guest.title}
              </p>
              <p className="text-gray-400 text-sm">
                {guest.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestsSection;
