
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SpeakerCardProps {
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  color: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  name, 
  title, 
  company, 
  bio, 
  image, 
  color,
  socials 
}) => {
  return (
    <div className={`glass-panel rounded-lg overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 ${color}`}>
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-orbitron font-bold group-hover:neon-text">{name}</h3>
          <p className="text-gray-300 text-sm">{title}</p>
          <p className="text-sm font-semibold text-gray-400">{company}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-400 mb-4 text-sm">{bio}</p>
        
        <div className="flex space-x-3">
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Twitter size={18} />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-violet transition-colors">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const speakersData = [
  {
    name: "Dr. Sophia Chen",
    title: "Chief AI Scientist",
    company: "QuantumMinds Inc.",
    bio: "Pioneering researcher in quantum machine learning with over 15 years of experience pushing the boundaries of AI technology.",
    image: "https://source.unsplash.com/random/600x800/?scientist,woman",
    color: "border-neon-violet neon-violet",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Weller",
    title: "VR/AR Innovation Lead",
    company: "Neuralink Technologies",
    bio: "Award-winning XR developer creating immersive experiences that blend physical and digital realities for medical applications.",
    image: "https://source.unsplash.com/random/600x800/?developer,man",
    color: "border-neon-blue neon-blue",
    socials: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Zara Rodriguez",
    title: "Blockchain Architect",
    company: "CryptoSphere",
    bio: "Visionary blockchain engineer who has designed decentralized systems for some of the world's largest financial institutions.",
    image: "https://source.unsplash.com/random/600x800/?engineer,woman",
    color: "border-neon-pink neon-pink",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. Hiroshi Nakamura",
    title: "Quantum Computing Director",
    company: "FutureTech Labs",
    bio: "Leading researcher in quantum computing algorithms with a focus on cryptographic applications and security protocols.",
    image: "https://source.unsplash.com/random/600x800/?professor,asian",
    color: "border-neon-cyan neon-cyan",
    socials: {
      twitter: "#",
      github: "#"
    }
  }
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="relative py-20 grid-bg">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-pink">FEATURED SPEAKERS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from the brightest minds and industry leaders who are shaping the future of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
