
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid-bg bg-cyber-dark text-white">
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="scanline"></div>
        <div className="absolute inset-0 bg-neon-glow opacity-30"></div>
        
        <div className="cyber-container text-center">
          <h1 className="text-8xl md:text-9xl font-orbitron font-bold mb-6 neon-text neon-pink animate-glitch">404</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-orbitron">
            REALITY <span className="text-neon-violet">BREACH</span> DETECTED
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto">
            The digital coordinates you're searching for have been corrupted or exist in an alternate dimension.
          </p>
          <Link 
            to="/" 
            className="neon-button inline-flex items-center"
          >
            <Home className="mr-2" size={18} />
            Return to Base Reality
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
