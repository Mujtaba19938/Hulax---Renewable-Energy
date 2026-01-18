import React from 'react';
import { Plus } from 'lucide-react';

export const FeatureCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-4 flex flex-col xs:flex-row gap-5 w-full shadow-2xl transition-transform hover:scale-[1.02] duration-300">
      {/* Image Side - Square aspect ratio */}
      <div className="w-full xs:w-[140px] shrink-0 rounded-[1.5rem] overflow-hidden relative h-40 xs:h-[140px]">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=300&h=400&auto=format&fit=crop" 
          alt="Solar Panels" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="flex flex-col justify-between py-1 text-white flex-1 min-w-0">
        {/* Header with Avatars */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex -space-x-3 items-center">
            <img 
              className="w-9 h-9 rounded-full border-2 border-white/40 object-cover" 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" 
              alt="User 1" 
            />
            <img 
              className="w-9 h-9 rounded-full border-2 border-white/40 object-cover" 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces" 
              alt="User 2" 
            />
            <div className="w-9 h-9 rounded-full border-2 border-white/40 bg-[#dfff5e] flex items-center justify-center text-black">
              <Plus size={16} />
            </div>
          </div>
          <span className="text-xl font-medium tracking-wide">2.3M+</span>
        </div>

        {/* Text */}
        <p className="text-[15px] text-white/80 font-normal leading-relaxed">
          Eco-friendly solar solutions for a cleaner, greener tomorrow.
        </p>
      </div>
    </div>
  );
};