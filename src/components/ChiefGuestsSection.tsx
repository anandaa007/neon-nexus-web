
import React from 'react';
import { Briefcase, Award, Users, Code, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ChiefGuestsSection = () => {
  const chiefGuests = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Technology Officer",
      company: "Tech Innovations Ltd",
      icon: Code,
      expertise: "AI & Machine Learning",
      image: "/lovable-uploads/94236d43-1ed1-4b71-a66c-0517b0678074.png"
    },
    {
      name: "Ms. Priya Sharma",
      title: "VP of Engineering",
      company: "Digital Solutions Inc",
      icon: Zap,
      expertise: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mr. Arjun Patel",
      title: "Lead Product Manager",
      company: "Innovation Hub",
      icon: Users,
      expertise: "Product Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Singh",
      title: "Research Director",
      company: "Future Tech Labs",
      icon: Award,
      expertise: "Blockchain Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mr. Vikram Gupta",
      title: "Startup Founder",
      company: "NextGen Ventures",
      icon: Briefcase,
      expertise: "Entrepreneurship",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ms. Kavya Reddy",
      title: "Senior Architect",
      company: "Global Tech Systems",
      icon: Globe,
      expertise: "System Architecture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
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
            <Card 
              key={index}
              className="glass-panel rounded-lg border border-neon-violet border-opacity-30 hover:border-opacity-60 transition-all duration-300 group bg-transparent"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Avatar className="w-16 h-16 mr-4 border-2 border-neon-violet border-opacity-30 group-hover:border-opacity-60 transition-all duration-300">
                    <AvatarImage 
                      src={guest.image} 
                      alt={guest.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-cyber-medium bg-opacity-50 text-neon-violet font-orbitron font-bold">
                      {guest.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                      {guest.name}
                    </h3>
                    <p className="text-sm text-neon-violet font-semibold">
                      {guest.expertise}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyber-medium bg-opacity-50 flex items-center justify-center border border-neon-violet border-opacity-30">
                    <guest.icon className="text-neon-violet group-hover:scale-110 transition-transform duration-300" size={20} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-300 font-semibold">
                    {guest.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {guest.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestsSection;
