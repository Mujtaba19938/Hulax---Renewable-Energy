import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon = true
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 flex items-center gap-3 group";
  
  const variants = {
    // Updated primary to match slim design: Reduced padding and cleaner sizing
    primary: "bg-[#dfff5e] text-[#1a1a1a] hover:bg-[#ccec4d] pl-6 pr-1.5 py-1.5 shadow-lg hover:shadow-xl hover:scale-[1.02]", 
    secondary: "bg-white/20 text-white hover:bg-white/30 px-6 py-3 text-sm backdrop-blur-sm border border-white/10",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className={variant === 'primary' ? 'font-semibold text-[15px] pl-1' : ''}>{children}</span>
      {icon && (
        <span className={`rounded-full flex items-center justify-center transition-transform duration-300 ${
            variant === 'primary' 
                ? "bg-[#1a1a1a] w-10 h-10 group-hover:rotate-[-45deg]" 
                : "bg-white/20 p-1 group-hover:translate-x-1"
        }`}>
            <ArrowRight 
                size={variant === 'primary' ? 18 : 16} 
                className={variant === 'primary' ? "text-white" : "text-white"} 
            />
        </span>
      )}
    </button>
  );
};