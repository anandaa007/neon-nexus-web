
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Mail, 
  Briefcase, 
  Server, 
  Github, 
  Linkedin, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    experience: '',
    trackInterest: '',
    github: '',
    linkedin: '',
    teamStatus: '',
    termsAgreed: false
  });
  
  const [step, setStep] = useState(1);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.organization || !formData.role) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required fields",
          variant: "destructive"
        });
        return false;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address",
          variant: "destructive"
        });
        return false;
      }
    }
    
    if (step === 2) {
      if (!formData.experience || !formData.trackInterest || !formData.teamStatus) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required fields",
          variant: "destructive"
        });
        return false;
      }
    }
    
    if (step === 3 && !formData.termsAgreed) {
      toast({
        title: "Agreement Required",
        description: "You must agree to the terms and code of conduct",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep()) {
      toast({
        title: "Registration Successful!",
        description: "We've received your application. Check your email for confirmation.",
      });
      
      // Simulate backend integration
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };
  
  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-orbitron font-bold neon-text neon-violet">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Full Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-violet transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                  <User className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Email Address *</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-violet transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Organization/University *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-violet transition-colors"
                    placeholder="Company or university name"
                    required
                  />
                  <Briefcase className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Role/Position *</label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-violet transition-colors appearance-none"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Student">Student</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Other">Other</option>
                  </select>
                  <Server className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-orbitron font-bold neon-text neon-cyan">Hackathon Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Experience Level *</label>
                <div className="relative">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-4 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-cyan transition-colors appearance-none"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="Beginner">Beginner (0-1 years)</option>
                    <option value="Intermediate">Intermediate (1-3 years)</option>
                    <option value="Advanced">Advanced (3-5 years)</option>
                    <option value="Expert">Expert (5+ years)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Track Interest *</label>
                <div className="relative">
                  <select
                    name="trackInterest"
                    value={formData.trackInterest}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-4 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-cyan transition-colors appearance-none"
                    required
                  >
                    <option value="">Select a track</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="XR">Extended Reality</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Quantum">Quantum Computing</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Robotics">Robotic Automation</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">GitHub Profile (Optional)</label>
                <div className="relative">
                  <input
                    type="text"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="https://github.com/yourusername"
                  />
                  <Github className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">LinkedIn Profile (Optional)</label>
                <div className="relative">
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="https://linkedin.com/in/yourusername"
                  />
                  <Linkedin className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 font-semibold">Team Status *</label>
                <div className="relative">
                  <select
                    name="teamStatus"
                    value={formData.teamStatus}
                    onChange={handleChange}
                    className="bg-cyber-medium bg-opacity-70 border border-gray-700 text-gray-300 pl-4 pr-4 py-2 rounded-md w-full focus:outline-none focus:border-neon-cyan transition-colors appearance-none"
                    required
                  >
                    <option value="">Select your team status</option>
                    <option value="Looking">Looking for a team</option>
                    <option value="Forming">Forming a team</option>
                    <option value="Complete">Have a complete team</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-orbitron font-bold neon-text neon-pink">Final Steps</h3>
            
            <div className="glass-panel p-6 rounded-lg">
              <h4 className="font-orbitron font-bold mb-4">Participant Agreement</h4>
              <div className="h-40 overflow-y-auto mb-4 text-sm text-gray-400 bg-cyber-darker p-4 rounded">
                <p className="mb-3">
                  By participating in the NeoNexus Hackathon, you agree to abide by the following terms and conditions:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>All projects must be created during the hackathon period.</li>
                  <li>You maintain ownership of what you build, but grant organizers right to showcase your project.</li>
                  <li>Follow the code of conduct, maintaining a respectful and inclusive environment for all participants.</li>
                  <li>Any form of plagiarism or unauthorized use of code is strictly prohibited.</li>
                  <li>You may use open source libraries and APIs, but must disclose their usage.</li>
                  <li>Decisions of the judges are final and binding.</li>
                </ol>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsAgreed"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="termsAgreed" className="text-gray-300">
                  I agree to the terms and conditions and the code of conduct
                </label>
              </div>
            </div>
            
            <div className="bg-cyber-medium bg-opacity-30 p-6 rounded-lg border border-neon-pink border-opacity-30">
              <h4 className="font-orbitron font-bold mb-4 flex items-center">
                <AlertCircle size={18} className="text-neon-pink mr-2" />
                Important Information
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-neon-pink mr-2 mt-1" />
                  <span>You will receive a confirmation email after submission.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-neon-pink mr-2 mt-1" />
                  <span>Applications are reviewed within 48 hours. Space is limited.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-neon-pink mr-2 mt-1" />
                  <span>Once accepted, you'll receive details about the event logistics and preparation guidelines.</span>
                </li>
              </ul>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <>
      <NavBar />
      
      <section className="pt-24 pb-20 min-h-screen grid-bg">
        <div className="scanline"></div>
        <div className="absolute inset-0 bg-neon-glow opacity-30"></div>
        
        <div className="cyber-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="neon-text neon-violet">JOIN</span>{" "}
              <span className="neon-text neon-cyan">NEONEXUS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Register for the most futuristic hackathon experience. Space is limited, so secure your spot today.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-lg p-8 border border-neon-violet border-opacity-30 mb-8">
              <div className="flex justify-between mb-10">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center relative">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold
                      ${step === stepNumber 
                        ? 'bg-neon-violet text-white' 
                        : step > stepNumber 
                          ? 'bg-neon-violet bg-opacity-30 text-white' 
                          : 'bg-cyber-medium text-gray-400'}
                    `}>
                      {stepNumber}
                    </div>
                    <span className={`
                      text-xs mt-2 font-orbitron
                      ${step === stepNumber 
                        ? 'text-white' 
                        : 'text-gray-500'}
                    `}>
                      {stepNumber === 1 ? 'Personal' : stepNumber === 2 ? 'Details' : 'Confirm'}
                    </span>
                    
                    {stepNumber < 3 && (
                      <div className={`
                        absolute top-5 left-10 w-[100%] h-0.5
                        ${step > stepNumber ? 'bg-neon-violet' : 'bg-gray-700'}
                      `}></div>
                    )}
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit}>
                {renderFormStep()}
                
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-600 rounded-md text-gray-300 hover:border-neon-violet hover:text-neon-violet transition-colors"
                    >
                      Back
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-8 py-2 bg-neon-violet bg-opacity-20 border border-neon-violet rounded-md text-white hover:bg-opacity-30 transition-all"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto neon-button"
                    >
                      Submit Registration
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Register;
