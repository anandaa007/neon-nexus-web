
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between glass-panel rounded-lg p-4 text-left transition-all duration-300 border border-opacity-30 border-neon-violet group"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-orbitron font-semibold group-hover:text-neon-violet transition-colors">
          {question}
        </h3>
        <span className="text-neon-violet">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      
      {isOpen && (
        <div className="bg-cyber-medium bg-opacity-40 rounded-b-lg p-4 mt-1 text-gray-300 border-l-2 border-neon-violet">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: "What is NeoNexus Hackathon?",
    answer: "NeoNexus is a cutting-edge hackathon that brings together tech enthusiasts, innovators, and problem solvers to develop solutions in fields like AI, blockchain, XR, and more. Participants work in teams to build functional prototypes over a 36-hour period with separate tracks for software and hardware categories."
  },
  {
    question: "Do I need to have a team before registering?",
    answer: "You cannot participate individually. Each team must consist of 3-4 members. You can register with your existing team or form a team during the team formation session at the event."
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "You should bring your laptop, charger, any specialized hardware for your project, and a valid ID. We'll provide food, drinks, workspace, internet, and plenty of caffeine."
  },
  {
    question: "Are there prizes for the winners?",
    answer: "Yes! The total prize pool is over $50,000, with separate prizes for software and hardware categories, including cash prizes, high-tech gadgets, cloud credits, and opportunities for funding or incubation for exceptional projects."
  },
  {
    question: "Can I work on a pre-existing project?",
    answer: "All projects must be started during the hackathon. You can come with ideas and plans, but the actual development work should begin once the hackathon starts. Pre-existing code or projects are not allowed."
  },
  {
    question: "Will there be mentors available during the hackathon?",
    answer: "Absolutely! We'll have industry experts and experienced developers available throughout the event to provide guidance, technical assistance, and feedback."
  },
  {
    question: "Do I retain the intellectual property rights to my project?",
    answer: "Yes, participants retain full ownership of their intellectual property. However, we encourage open source development and sharing innovations with the community."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="relative py-20 bg-cyber-darker">
      <div className="absolute inset-0 bg-neon-glow opacity-20"></div>
      
      <div className="cyber-container">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-cyber-medium mb-6">
            <MessageSquare className="text-neon-green" size={30} />
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 neon-text neon-green">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about the NeoNexus Hackathon.
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="glass-panel rounded-lg p-6 max-w-3xl mx-auto border border-neon-green border-opacity-30">
            <h3 className="text-xl font-orbitron font-bold mb-4 neon-text neon-green">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Our team is ready to help you with any additional questions or concerns.
            </p>
            <a href="mailto:abdulbitm@ieee.org" className="neon-button">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
