
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker bg-opacity-80 backdrop-blur-md border-b border-neon-violet border-opacity-30">
      <div className="cyber-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/94236d43-1ed1-4b71-a66c-0517b0678074.png" 
              alt="NeoNexus Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-orbitron font-bold tracking-wider text-white neon-text neon-violet">
              NEONEXUS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-neon-violet transition duration-300">About</a>
            <a href="#tracks" className="text-gray-300 hover:text-neon-violet transition duration-300">Tracks</a>
            <a href="#schedule" className="text-gray-300 hover:text-neon-violet transition duration-300">Schedule</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-violet transition duration-300">FAQ</a>
            <button className="neon-button opacity-80 cursor-not-allowed">Opening Soon</button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-neon-violet focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cyber-darker bg-opacity-95 backdrop-blur-lg border-t border-neon-violet border-opacity-30">
          <div className="cyber-container py-4 space-y-4">
            <a href="#about" onClick={closeMenu} className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">About</a>
            <a href="#tracks" onClick={closeMenu} className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">Tracks</a>
            <a href="#schedule" onClick={closeMenu} className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">Schedule</a>
            <a href="#faq" onClick={closeMenu} className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">FAQ</a>
            <button className="block w-full neon-button text-center mt-6 opacity-80 cursor-not-allowed">Opening Soon</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
