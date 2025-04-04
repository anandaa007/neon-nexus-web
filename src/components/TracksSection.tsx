
import React from 'react';
import { 
  Brain, 
  VrHeadset, 
  Shield, 
  Cpu, 
  Workflow, 
  Bot 
} from 'lucide-react';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className={`glass-panel rounded-lg p-6 border border-opacity-30 transition-all duration-300 hover:transform hover:scale-105 group ${color}`}>
      <div className="relative mb-4 w-16 h-16 rounded-lg flex items-center justify-center bg-cyber-medium bg-opacity-50 border border-opacity-30 group-hover:animate-pulse-neon">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:neon-text">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
    </div>
  );
};

const trackData = [
  {
    title: "Artificial Intelligence",
    description: "Craft cutting-edge AI solutions that solve real-world problems through deep learning and cognitive computing.",
    icon: <Brain size={32} className="text-neon-violet" />,
    color: "border-neon-violet hover:border-neon-violet neon-violet"
  },
  {
    title: "Extended Reality",
    description: "Design immersive VR/AR experiences that blur the lines between physical and digital realities.",
    icon: <VrHeadset size={32} className="text-neon-blue" />,
    color: "border-neon-blue hover:border-neon-blue neon-blue"
  },
  {
    title: "Cybersecurity",
    description: "Build robust security solutions to protect digital assets in an increasingly vulnerable cyber landscape.",
    icon: <Shield size={32} className="text-neon-green" />,
    color: "border-neon-green hover:border-neon-green neon-green"
  },
  {
    title: "Quantum Computing",
    description: "Explore the frontiers of quantum algorithms and applications that transcend classical computing limits.",
    icon: <Cpu size={32} className="text-neon-cyan" />,
    color: "border-neon-cyan hover:border-neon-cyan neon-cyan"
  },
  {
    title: "Blockchain",
    description: "Develop decentralized applications and smart contracts that redefine digital trust and ownership.",
    icon: <Workflow size={32} className="text-neon-pink" />,
    color: "border-neon-pink hover:border-neon-pink neon-pink"
  },
  {
    title: "Robotic Automation",
    description: "Create intelligent robotic systems that enhance human capabilities and automate complex tasks.",
    icon: <Bot size={32} className="text-neon-violet" />,
    color: "border-neon-violet hover:border-neon-violet neon-violet"
  }
];

const TracksSection = () => {
  return (
    <section id="tracks" className="relative py-20 grid-bg">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-violet">HACKATHON TRACKS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your innovation path and push the boundaries of what's possible
            in these cutting-edge technological domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trackData.map((track, index) => (
            <TrackCard key={index} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
