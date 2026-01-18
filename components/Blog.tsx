import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const posts = [
    {
      id: 1,
      title: "The Future of Green Hydrogen",
      excerpt: "Exploring how hydrogen is set to revolutionize the heavy industry sector by 2030.",
      date: "Oct 12",
      readTime: "5 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Architecture 2024",
      excerpt: "How modern architects are integrating passive solar design into skyscrapers.",
      date: "Nov 08",
      readTime: "4 min",
      category: "Design",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Optimizing Urban Efficiency",
      excerpt: "New photovoltaic materials are making it possible to power cities from vertical surfaces.",
      date: "Dec 01",
      readTime: "6 min",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop"
          alt="Dark Nature"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">

        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8 flex-shrink-0">
            <Navbar currentPage="Blog" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area - Scrollable Wrapper */}
        <div className="flex-1 w-full overflow-y-auto">
            {/* Inner Content - Centers if space available, flows if not */}
            <div className="min-h-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:pb-16">

                <div className="mb-10 lg:mb-12 max-w-3xl flex-shrink-0 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-4 leading-[1.1]">
                        Latest <span className="text-[#dfff5e]">Insights</span> <br />
                        & Updates.
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Stay informed about the latest trends in renewable energy, sustainable design, and technology.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-shrink-0">
                    {posts.map((post) => (
                        <div key={post.id} className="group flex flex-col rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                            {/* Image Section */}
                            <div className="h-48 relative overflow-hidden">
                                 <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-[#dfff5e] text-[#1a1a1a] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                        <Tag size={10} />
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 text-white/50 text-xs font-medium mb-3 uppercase tracking-wide">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-white mb-3 leading-snug group-hover:text-[#dfff5e] transition-colors">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center text-[#dfff5e] font-medium text-sm gap-2 group/btn">
                                    <span>Read Article</span>
                                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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