
import React from 'react';
import { Logo } from './Logo';

interface HubProps {
  onEnterProduction: () => void;
  onEnterLearning: () => void;
}

export const Hub: React.FC<HubProps> = ({ onEnterProduction, onEnterLearning }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-obsidian overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gold-muted/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-gold-muted/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-6">
        {/* Centered Logo with enhanced scale */}
        <div className="mb-24 transform scale-150 animate-in fade-in zoom-in duration-1000">
          <Logo />
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Production Path */}
          <button 
            onClick={onEnterProduction}
            className="loud-element group relative flex flex-col items-center justify-center p-12 bg-transparent border border-white/5 hover:border-gold-muted/40 transition-all duration-700 overflow-hidden"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gold-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <span className="font-minimal text-[10px] tracking-[0.4em] text-gold-muted uppercase mb-4 transition-colors">Sector 01</span>
            <h2 className="font-loud text-3xl md:text-4xl tracking-tighter uppercase mb-2">Production</h2>
            <div className="w-12 h-[1px] bg-gold-muted/30 group-hover:w-24 transition-all duration-700 mb-6" />
            <p className="font-minimal text-[10px] tracking-widest text-gold-muted uppercase group-hover:text-white transition-colors">Enter Creative Studio</p>
            
            {/* Animated Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-gold-muted/40 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-gold-muted/40 transition-all duration-700" />
          </button>

          {/* Learning Portal Path */}
          <button 
            onClick={onEnterLearning}
            className="loud-element group relative flex flex-col items-center justify-center p-12 bg-transparent border border-white/5 hover:border-gold-muted/40 transition-all duration-700 overflow-hidden"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gold-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <span className="font-minimal text-[10px] tracking-[0.4em] text-gold-muted uppercase mb-4 transition-colors">Sector 02</span>
            <h2 className="font-loud text-3xl md:text-4xl tracking-tighter uppercase mb-2">Learning</h2>
            <div className="w-12 h-[1px] bg-gold-muted/30 group-hover:w-24 transition-all duration-700 mb-6" />
            
            {/* Status Label - Removed bounding box */}
            <div className="mt-2 transition-colors">
                <span className="font-minimal text-[10px] tracking-[0.3em] text-gold-muted uppercase group-hover:text-white transition-colors">Accessing portal</span>
            </div>

            {/* Animated Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-gold-muted/40 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-gold-muted/40 transition-all duration-700" />
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center w-full pointer-events-none">
          <p className="font-minimal text-[9px] tracking-[0.5em] text-white/20 uppercase">
              Saganix Studios Unified Interface
          </p>
      </div>
    </div>
  );
};
