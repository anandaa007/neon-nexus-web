
import React from 'react';
import { Download, FileText, Calendar, MapPin } from 'lucide-react';

const BrochureSection = () => {
  const handleDownloadBrochure = () => {
    // This would typically link to an actual brochure file
    console.log('Downloading brochure...');
    // For demo purposes, we'll show an alert
    alert('Brochure download will be available soon!');
  };

  return (
    <section className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-cyan">
              EVENT BROCHURE
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Download our comprehensive brochure for detailed information about NeoNexus Hackathon 2025.
            </p>
          </div>
          
          <div className="glass-panel rounded-lg p-8 border border-neon-cyan border-opacity-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="text-neon-cyan mr-3" size={32} />
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    Official Brochure
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="text-neon-cyan mr-3" size={20} />
                    <span>Complete event schedule and timeline</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="text-neon-cyan mr-3" size={20} />
                    <span>Venue details and campus map</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FileText className="text-neon-cyan mr-3" size={20} />
                    <span>Rules, regulations, and judging criteria</span>
                  </div>
                </div>
                
                <ul className="text-gray-300 space-y-2 mb-8">
                  <li>• Detailed track descriptions</li>
                  <li>• Mentor and guest information</li>
                  <li>• Prize breakdown and awards</li>
                  <li>• Accommodation and facility details</li>
                  <li>• Contact information and FAQs</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-cyber-medium bg-opacity-50 rounded-lg p-8 border border-neon-cyan border-opacity-30">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-neon-cyan bg-opacity-20 flex items-center justify-center">
                    <Download className="text-neon-cyan" size={48} />
                  </div>
                  
                  <h4 className="text-xl font-orbitron font-bold text-white mb-4">
                    Ready to Download
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-6">
                    PDF Format • 5.2 MB • Updated Dec 2024
                  </p>
                  
                  <button 
                    onClick={handleDownloadBrochure}
                    className="neon-button text-lg w-full group"
                  >
                    <Download className="inline mr-2 group-hover:animate-bounce" size={20} />
                    Download Brochure
                  </button>
                  
                  <p className="text-xs text-gray-400 mt-4">
                    By downloading, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
