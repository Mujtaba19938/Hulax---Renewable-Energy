import React from 'react';
import { Navbar } from './Navbar';
import { Button } from './ui/Button';
import { FeatureCard } from './FeatureCard';
import { GlassCard } from './ui/GlassCard';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
          alt="Green Landscape with Wind Turbines" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </div>

      {/* Main Glass Container - Floating Window */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">
        
        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8">
            <Navbar currentPage="Home" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col justify-end pb-10 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-20 relative">
          
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-0">
            
            {/* Left Side: Headline & CTA */}
            <div className="max-w-3xl z-10">
              <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-white sm:leading-[0.95] tracking-tight mb-8 sm:mb-10">
                Power the future <br />
                with Hulax
              </h1>
              
              <div className="flex items-center gap-4">
                <Button variant="primary" onClick={() => onNavigate('About')}>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Right Side: Feature Card */}
            <div className="w-full max-w-sm lg:max-w-md lg:mb-1">
              <FeatureCard />
            </div>

          </div>

        </div>
      </GlassCard>
    </div>
  );
};