
import React from 'react';
import { 
  Brain, 
  Headset, 
  Shield, 
  Cpu, 
  Workflow, 
  Bot,
  FileText,
  Briefcase
} from 'lucide-react';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, color, category }) => {
  return (
    <div className={`glass-panel rounded-lg p-6 border border-opacity-30 transition-all duration-300 hover:transform hover:scale-105 group ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="relative w-16 h-16 rounded-lg flex items-center justify-center bg-cyber-medium bg-opacity-50 border border-opacity-30 group-hover:animate-pulse-neon">
          {icon}
        </div>
        <span className="bg-cyber-medium bg-opacity-40 px-3 py-1 rounded text-xs font-orbitron">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:neon-text">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
    </div>
  );
};

const trackData = [
  // Software Tracks
  {
    title: "Artificial Intelligence",
    description: "Craft cutting-edge AI solutions that solve real-world problems through deep learning and cognitive computing.",
    icon: <Brain size={32} className="text-neon-violet" />,
    color: "border-neon-violet hover:border-neon-violet neon-violet",
    category: "Software"
  },
  {
    title: "Blockchain",
    description: "Develop decentralized applications and smart contracts that redefine digital trust and ownership.",
    icon: <Workflow size={32} className="text-neon-pink" />,
    color: "border-neon-pink hover:border-neon-pink neon-pink",
    category: "Software"
  },
  {
    title: "Cybersecurity",
    description: "Build robust security solutions to protect digital assets in an increasingly vulnerable cyber landscape.",
    icon: <Shield size={32} className="text-neon-green" />,
    color: "border-neon-green hover:border-neon-green neon-green",
    category: "Software"
  },
  
  // Hardware Tracks
  {
    title: "Quantum Computing",
    description: "Explore the frontiers of quantum algorithms and applications that transcend classical computing limits.",
    icon: <Cpu size={32} className="text-neon-cyan" />,
    color: "border-neon-cyan hover:border-neon-cyan neon-cyan",
    category: "Hardware"
  },
  {
    title: "Extended Reality",
    description: "Design immersive VR/AR experiences with custom hardware that blur the lines between physical and digital realities.",
    icon: <Headset size={32} className="text-neon-blue" />,
    color: "border-neon-blue hover:border-neon-blue neon-blue",
    category: "Hardware"
  },
  {
    title: "Robotic Automation",
    description: "Create intelligent robotic systems and physical prototypes that enhance human capabilities and automate complex tasks.",
    icon: <Bot size={32} className="text-neon-violet" />,
    color: "border-neon-violet hover:border-neon-violet neon-violet",
    category: "Hardware"
  }
];

const TracksSection = () => {
  const softwareTracks = trackData.filter(track => track.category === "Software");
  const hardwareTracks = trackData.filter(track => track.category === "Hardware");

  return (
    <section id="tracks" className="relative py-20 grid-bg">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-violet">HACKATHON TRACKS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Choose your innovation path and push the boundaries of what's possible
            in these cutting-edge technological domains.
          </p>
          <p className="text-lg text-neon-cyan max-w-3xl mx-auto">
            Separate prizes for Software and Hardware categories!
          </p>
        </div>
        
        {/* Software Category */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 flex-grow bg-neon-violet opacity-30"></div>
            <h3 className="text-2xl font-orbitron font-bold neon-text neon-violet flex items-center gap-2">
              <FileText size={24} /> SOFTWARE CATEGORY
            </h3>
            <div className="h-0.5 flex-grow bg-neon-violet opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTracks.map((track, index) => (
              <TrackCard key={`software-${index}`} {...track} />
            ))}
          </div>
        </div>
        
        {/* Hardware Category */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 flex-grow bg-neon-cyan opacity-30"></div>
            <h3 className="text-2xl font-orbitron font-bold neon-text neon-cyan flex items-center gap-2">
              <Briefcase size={24} /> HARDWARE CATEGORY
            </h3>
            <div className="h-0.5 flex-grow bg-neon-cyan opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareTracks.map((track, index) => (
              <TrackCard key={`hardware-${index}`} {...track} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
