import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleProps {
  post: BlogPost | null;
  onNavigate: (page: string) => void;
}

export const Article: React.FC<ArticleProps> = ({ post, onNavigate }) => {
  if (!post) return null;

  // Placeholder content since we don't have a real CMS
  const fullContent = [
    `The transition to renewable energy is not just a technological shift; it's a fundamental reimagining of how our society interacts with the environment. ${post.title} represents a significant milestone in this journey. By leveraging cutting-edge innovations in materials science and grid management, we are unlocking efficiencies that were theoretically impossible just a decade ago.`,
    
    `One of the primary challenges has always been storage and distribution. However, with recent breakthroughs in battery density and smart grid algorithms, we can now ensure a stable power supply even during peak demand fluctuations. This reliability is crucial for industrial applications where downtime is not an option.`,
    
    `Furthermore, the economic implications are profound. As the cost per kilowatt-hour continues to drop, green energy is moving from a subsidized alternative to the most cost-effective solution on the market. This shift is driving massive investment into the sector, creating jobs and fostering a new era of sustainable economic growth.`,
    
    `In conclusion, while hurdles remain, the trajectory is clear. We are moving towards a future where clean, abundant energy is the standard, not the exception. It requires continued collaboration between policymakers, engineers, and communities, but the path forward has never been brighter.`
  ];

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">

      {/* Background Image Layer - Use post image blurred */}
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60 blur-sm"
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">

        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8 flex-shrink-0">
            <Navbar currentPage="Blog" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area - Scrollable Wrapper */}
        <div className="flex-1 w-full overflow-y-auto">
            {/* Inner Content Container */}
            <div className="min-h-full flex flex-col items-center px-6 sm:px-12 md:px-16 lg:px-40 py-10 sm:pb-20">

                {/* Back Button */}
                <div className="w-full max-w-4xl mb-8 flex-shrink-0">
                    <button 
                        onClick={() => onNavigate('Blog')}
                        className="flex items-center gap-2 text-white/60 hover:text-[#dfff5e] transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#dfff5e] group-hover:text-black transition-all">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="text-sm font-medium">Back to Blog</span>
                    </button>
                </div>

                {/* Article Header */}
                <div className="w-full max-w-4xl text-center mb-10 flex-shrink-0">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-[#dfff5e] text-[#1a1a1a] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <Tag size={10} />
                            {post.category}
                        </span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-white/50 text-sm font-medium uppercase tracking-wide">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                        <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{post.readTime} Read</span>
                        </div>
                    </div>
                </div>

                {/* Article Image */}
                <div className="w-full max-w-5xl h-[300px] sm:h-[450px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/10 flex-shrink-0">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Body */}
                <div className="w-full max-w-3xl text-white/80 leading-loose text-lg space-y-8 flex-shrink-0 font-light">
                    <p className="font-medium text-xl text-white">
                        {post.excerpt}
                    </p>
                    {fullContent.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                    
                    <div className="pt-10 mt-10 border-t border-white/10 flex items-center justify-between">
                        <span className="text-white/40 text-sm">Share this article</span>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </GlassCard>
    </div>
  );
};