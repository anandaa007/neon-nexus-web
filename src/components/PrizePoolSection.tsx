
import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const PrizePoolSection = () => {
  const prizes = [
    {
      position: "1st",
      amount: "₹25,000",
      icon: Trophy,
      color: "neon-green",
      bgGradient: "from-yellow-400 to-yellow-600",
      description: "Winner of each category"
    },
    {
      position: "2nd",
      amount: "₹15,000",
      icon: Medal,
      color: "neon-cyan",
      bgGradient: "from-gray-300 to-gray-500",
      description: "Runner-up of each category"
    },
    {
      position: "3rd",
      amount: "₹10,000",
      icon: Award,
      color: "neon-pink",
      bgGradient: "from-amber-600 to-amber-800",
      description: "Second runner-up of each category"
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-dark">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-green">
            PRIZE POOL
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Compete for exciting prizes in both Software and Hardware categories!
          </p>
          <div className="text-2xl font-orbitron font-bold neon-text neon-green">
            Total Prize Pool: ₹1,00,000+
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className={`glass-panel rounded-lg p-8 border border-${prize.color} border-opacity-30 hover:border-opacity-60 transition-all duration-300 text-center group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${prize.bgGradient} flex items-center justify-center shadow-lg`}>
                  <prize.icon className="text-white" size={40} />
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">
                  {prize.position} PRIZE
                </h3>
                
                <div className={`text-3xl font-orbitron font-bold mb-4 neon-text ${prize.color}`}>
                  {prize.amount}
                </div>
                
                <p className="text-gray-300 text-sm">
                  {prize.description}
                </p>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.bgGradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="glass-panel rounded-lg p-6 max-w-2xl mx-auto border border-neon-violet border-opacity-30">
            <p className="text-gray-300 mb-2">
              <span className="font-orbitron font-bold text-neon-violet">Note:</span> Separate prize pools for Software and Hardware categories
            </p>
            <p className="text-sm text-gray-400">
              Additional sponsor prizes and goodies will be announced soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePoolSection;
