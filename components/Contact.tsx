import React from 'react';
import { Navbar } from './Navbar';
import { GlassCard } from './ui/GlassCard';
import { Mail, MapPin, Phone, ArrowRight, Send } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gray-900">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Abstract Network"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-900/80"></div>
      </div>

      {/* Main Glass Container */}
      <GlassCard className="relative z-10 w-full h-full max-w-[1600px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col border-white/30 !p-0">

        {/* Navbar Section */}
        <div className="w-full px-4 py-4 sm:px-10 sm:py-8 flex-shrink-0">
            <Navbar currentPage="Contact" onNavigate={onNavigate} />
        </div>

        {/* Main Content Area - Scrollable Wrapper */}
        <div className="flex-1 w-full overflow-y-auto">
            {/* Inner Content - Centers if space available, flows if not */}
            <div className="min-h-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:pb-16">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-7xl">
                    
                    {/* Left Side: Text & Info */}
                    <div className="lg:w-1/2 flex flex-col justify-center pt-8 lg:pt-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                            Let's start a <br />
                            <span className="text-[#dfff5e]">conversation.</span>
                        </h1>
                        <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
                            Whether you're interested in residential solar, large-scale commercial projects, or just have a question about our technology, we're here to help.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4 text-white/80 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dfff5e] group-hover:text-black transition-colors duration-300 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="pt-2">
                                    <h4 className="font-semibold text-lg mb-1 text-white">Email Us</h4>
                                    <p className="text-sm opacity-70">hello@hulax.energy</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-white/80 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dfff5e] group-hover:text-black transition-colors duration-300 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div className="pt-2">
                                    <h4 className="font-semibold text-lg mb-1 text-white">Visit Us</h4>
                                    <p className="text-sm opacity-70">88 Solar Avenue, Green District<br/>Kyoto, Japan 604-8000</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4 text-white/80 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dfff5e] group-hover:text-black transition-colors duration-300 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div className="pt-2">
                                    <h4 className="font-semibold text-lg mb-1 text-white">Call Us</h4>
                                    <p className="text-sm opacity-70">+81 75 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-1/2">
                        <form className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 sm:p-10 w-full" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#dfff5e]/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                                 <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">Last Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Doe" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#dfff5e]/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-6">
                                <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#dfff5e]/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mb-8">
                                <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                                <textarea 
                                    rows={4}
                                    placeholder="Tell us about your project..." 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#dfff5e]/50 focus:bg-white/10 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-[#dfff5e] hover:bg-[#ccec4d] text-[#1a1a1a] font-semibold py-4 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </div>
      </GlassCard>
    </div>
  );
};