import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { Home, Building2, Battery, ArrowUpRight } from 'lucide-react';

interface SolarSolutionsProps {
  onNavigate: (page: string) => void;
}

export const SolarSolutions: React.FC<SolarSolutionsProps> = ({ onNavigate }) => {
  const solutions = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete home energy systems designed to reduce bills and carbon footprint.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      description: "Scalable power solutions for businesses looking to optimize operational costs.",
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Battery,
      title: "Smart Storage",
      description: "Advanced battery systems to store excess energy for night use or grid backup.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
          alt="Solar Roof Abstract"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black/30"></div> 
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">

        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8 flex-shrink-0">
            <Navbar currentPage="Solar Solutions" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area - Scrollable Wrapper */}
        <div className="flex-1 w-full overflow-y-auto">
            {/* Inner Content - Centers if space available, flows if not */}
            <div className="min-h-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:pb-16">
                
                <div className="mb-10 lg:mb-16 max-w-4xl text-center flex-shrink-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.2]">
                        Intelligent <span className="text-[#dfff5e]">Energy</span> <br />
                        for every space.
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                        From cozy homes to sprawling industrial complexes, we provide tailored solar architectures that maximize efficiency and ROI.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-shrink-0">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="group relative h-[320px] rounded-[2rem] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer">
                            {/* Hover Background Image */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale mix-blend-luminosity" />
                            </div>
                            
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#ffffff15] border border-white/10 flex items-center justify-center text-[#dfff5e]">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/0 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 group-hover:bg-[#dfff5e] group-hover:text-black group-hover:border-[#dfff5e]">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
      </GlassCard>
    </div>
  );
};