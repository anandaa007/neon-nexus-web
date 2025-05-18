
import React from 'react';
import { 
  Github, 
  Facebook,
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 bg-cyber-darker border-t border-neon-violet border-opacity-30">
      <div className="cyber-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-violet animate-pulse-neon neon-violet flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-xl">N</span>
              </div>
              <h3 className="text-2xl font-orbitron font-bold tracking-wider text-white neon-text neon-violet">
                NEONEXUS
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Bridging reality and digital frontiers. Join the next generation hackathon 
              where innovation meets the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-cyber-medium flex items-center justify-center text-gray-400 hover:text-neon-violet transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cyber-medium flex items-center justify-center text-gray-400 hover:text-neon-violet transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cyber-medium flex items-center justify-center text-gray-400 hover:text-neon-violet transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cyber-medium flex items-center justify-center text-gray-400 hover:text-neon-violet transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cyber-medium flex items-center justify-center text-gray-400 hover:text-neon-violet transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-violet transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-gray-400 hover:text-neon-violet transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Tracks
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-neon-violet transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Schedule
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-violet transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-2 mt-1 text-neon-violet" />
                <span>Ballari Institute of Technology & Management<br />"Jnana Gangotri" Campus, Hospet Rd<br />near Allipura, Ballari, 583104</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2 text-neon-violet" />
                <span>+1 (888) NEO-NEXS</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2 text-neon-violet" />
                <span>info@neonexus.tech</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-6 text-white">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates and announcements about NeoNexus Hackathon.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-neon-violet"
              />
              <button className="bg-neon-violet px-4 py-2 rounded-r-md text-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center mb-4">
            © {new Date().getFullYear()} NeoNexus Hackathon. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center">
            Designed and developed by A Ananda Dept. of EEE and Aaftabzohara Dept. of AIML
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
