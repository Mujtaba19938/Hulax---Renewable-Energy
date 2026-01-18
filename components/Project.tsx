import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { MapPin, Zap, ArrowUpRight, Calendar } from 'lucide-react';

interface ProjectProps {
  onNavigate: (page: string) => void;
}

export const Project: React.FC<ProjectProps> = ({ onNavigate }) => {
  const projects = [
    {
      title: "Nevada Desert Farm",
      location: "Nevada, USA",
      capacity: "150 MW",
      year: "2023",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
      category: "Solar Farm"
    },
    {
      title: "Nordic Wind Park",
      location: "Bergen, Norway",
      capacity: "85 MW",
      year: "2022",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      category: "Wind Energy"
    },
    {
      title: "Kyoto Urban Grid",
      location: "Kyoto, Japan",
      capacity: "42 MW",
      year: "2024",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
      category: "Urban Solar"
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
          alt="Dark Solar Panels"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">

        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8 flex-shrink-0">
            <Navbar currentPage="Project" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area - Scrollable Wrapper */}
        <div className="flex-1 w-full overflow-y-auto">
            {/* Inner Content - Centers if space available, flows if not */}
            <div className="min-h-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:pb-16">

                <div className="flex flex-col items-center text-center mb-10 lg:mb-12 gap-4 flex-shrink-0 max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                        Building a <span className="text-[#dfff5e]">Greener</span> <br />
                        legacy.
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Explore our portfolio of groundbreaking renewable energy installations across the globe.
                    </p>
                     <span className="text-white/40 text-sm font-mono uppercase tracking-widest mt-2">Selected Works (03)</span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-shrink-0">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative rounded-[2rem] overflow-hidden border border-white/20 bg-gray-900/40 cursor-pointer h-[400px] md:h-[500px]">
                            
                            {/* Background Image */}
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                
                                {/* Top Row */}
                                <div className="flex justify-between items-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                                        {project.category}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-[#dfff5e] flex items-center justify-center text-black shadow-lg">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                {/* Bottom Row */}
                                <div>
                                    <div className="flex items-center gap-4 text-white/70 text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-[#dfff5e]" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-[#dfff5e]" />
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-2xl font-semibold text-white mb-1 leading-tight group-hover:text-[#dfff5e] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="text-2xl font-bold text-white">{project.capacity}</span>
                                            <span className="text-xs text-white/50 uppercase tracking-wider">Capacity</span>
                                        </div>
                                    </div>
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