
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker bg-opacity-80 backdrop-blur-md border-b border-neon-violet border-opacity-30">
      <div className="cyber-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-neon-violet animate-pulse-neon neon-violet flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-xl">N</span>
            </div>
            <h1 className="text-2xl font-orbitron font-bold tracking-wider text-white neon-text neon-violet">
              NEONEXUS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="text-gray-300 hover:text-neon-violet transition duration-300">About</Link>
            <Link to="/#tracks" className="text-gray-300 hover:text-neon-violet transition duration-300">Tracks</Link>
            <Link to="/#schedule" className="text-gray-300 hover:text-neon-violet transition duration-300">Schedule</Link>
            <Link to="/#speakers" className="text-gray-300 hover:text-neon-violet transition duration-300">Speakers</Link>
            <Link to="/#faq" className="text-gray-300 hover:text-neon-violet transition duration-300">FAQ</Link>
            <Link to="/register" className="neon-button">Register</Link>
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
            <Link to="/#about" className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">About</Link>
            <Link to="/#tracks" className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">Tracks</Link>
            <Link to="/#schedule" className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">Schedule</Link>
            <Link to="/#speakers" className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">Speakers</Link>
            <Link to="/#faq" className="block text-gray-300 hover:text-neon-violet transition duration-300 py-2">FAQ</Link>
            <Link to="/register" className="block neon-button text-center mt-6">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
