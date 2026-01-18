import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { Globe, Users, Zap, Leaf } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '2.3M+' },
    { icon: Globe, label: 'Countries', value: '50+' },
    { icon: Zap, label: 'Energy Gen', value: '1.2GW' },
    { icon: Leaf, label: 'CO2 Saved', value: '850k T' },
  ];

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">
      
      {/* Background Image Layer - Keeping consistent with Hero for seamless feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
          alt="Green Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">
        
        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8">
            <Navbar currentPage="About" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col justify-center pb-10 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-20 relative">
          
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Side: Text Content */}
            <div className="max-w-2xl z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#dfff5e]/10 border border-[#dfff5e]/20 text-[#dfff5e] text-sm font-semibold mb-6 backdrop-blur-sm">
                Our Mission
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Redefining how the world <br className="hidden sm:block" />
                <span className="text-[#dfff5e]">generates power.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
                Hulax was founded on a simple belief: that clean energy should be accessible, beautiful, and effortless. We combine cutting-edge solar technology with human-centric design to create a sustainable future for everyone.
              </p>
            </div>

            {/* Right Side: Stats Grid */}
            <div className="w-full max-w-lg grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#dfff5e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="text-[#1a1a1a]" size={20} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </GlassCard>
    </div>
  );
};