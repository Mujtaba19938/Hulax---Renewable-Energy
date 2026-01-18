import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  padding = "p-6" 
}) => {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl ${padding} ${className}`}>
      {children}
    </div>
  );
};