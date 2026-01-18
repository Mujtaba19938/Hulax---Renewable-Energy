import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Solar Solutions', href: '#' },
  { label: 'Project', href: '#' },
  { label: 'Blog', href: '#' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'Home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(label);
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    if (onNavigate) {
        onNavigate('Contact');
    }
    setIsOpen(false);
  }

  return (
    <div className="w-full relative z-50">
      <div className="w-full bg-white/20 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-1.5 py-1.5 flex items-center justify-between shadow-sm relative z-50 min-h-[52px]">
        {/* Logo Section */}
        <div 
            className="flex items-center gap-2.5 pl-2 cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'Home')}
        >
          <div className="w-9 h-9 rounded-full bg-[#1a1a1a] text-[#dfff5e] flex items-center justify-center shadow-md group shrink-0">
              <span className="font-bold text-xl pb-0.5 leading-none font-sans group-hover:scale-110 transition-transform">h</span>
          </div>
          <span className="text-[#1a1a1a] font-semibold text-2xl tracking-tight hidden sm:block">hulax</span>
        </div>

        {/* Navigation Links - Desktop - Absolutely Centered */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-[#1a1a1a] font-medium text-[15px]">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={(e) => handleNavClick(e, item.label)}
              className={`relative transition-all py-2 hover:opacity-60 ${
                currentPage === item.label ? 'opacity-100 font-semibold' : 'opacity-70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* CTA Button - Desktop/Tablet - Slimmer version */}
          <button 
            onClick={handleContactClick}
            className="hidden sm:flex bg-[#dfff5e] hover:bg-[#d2f54e] transition-all rounded-full pl-5 pr-1.5 py-1.5 items-center gap-3 group shadow-sm"
          >
            <span className="font-semibold text-[#1a1a1a] text-sm sm:text-[15px]">Contact us</span>
            <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ArrowRight className="text-white w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-[120%] left-0 w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform origin-top ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100 visible' 
            : 'opacity-0 -translate-y-4 scale-95 invisible'
        }`}
      >
        <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <button 
                key={item.label} 
                onClick={(e) => handleNavClick(e, item.label)}
                className={`text-white/80 hover:text-[#dfff5e] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium text-lg flex items-center justify-between group w-full text-left ${
                    currentPage === item.label ? 'bg-white/10 text-[#dfff5e]' : ''
                }`}
                style={{ transitionDelay: `${isOpen ? idx * 50 : 0}ms` }}
              >
                {item.label}
                <ArrowRight size={16} className={`transition-all text-[#dfff5e] ${currentPage === item.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
            
            {/* Mobile CTA inside menu */}
            <div className="mt-6 pt-6 border-t border-white/10 sm:hidden">
               <button 
                onClick={handleContactClick}
                className="w-full bg-[#dfff5e] hover:bg-[#d2f54e] transition-all rounded-full pl-6 pr-2 py-2 flex items-center justify-between group shadow-lg"
               >
                  <span className="font-semibold text-[#1a1a1a] text-lg pl-2">Contact Us</span>
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <ArrowRight className="text-white w-6 h-6 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
               </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};