
import React from 'react';
import { Logo } from './Logo';

interface ComingSoonProps {
  onBack: () => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-obsidian overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-gold-muted/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-muted/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent via-gold-muted/30 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="mb-12 opacity-50 grayscale scale-75">
          <Logo />
        </div>

        <span className="font-minimal text-[10px] tracking-[0.6em] text-gold-muted uppercase mb-4 animate-pulse">
          Initializing Knowledge Base
        </span>

        <h1 className="font-loud text-[10vw] md:text-[8vw] leading-none tracking-tighter uppercase mb-6">
          <span className="block text-outline-gold mb-2">Learning</span>
          <span className="block bg-gold-metallic bg-clip-text text-transparent">Portal.</span>
        </h1>

        <div className="max-w-md mb-16">
          <p className="font-minimal text-xs text-gray-400 tracking-widest leading-relaxed uppercase">
            We are curating a premium educational experience designed for the next generation of visual architects. 
            The curriculum is currently being compiled.
          </p>
        </div>

        <button 
          onClick={onBack}
          className="loud-element group relative px-12 py-4 bg-transparent border border-gold-muted/30 overflow-hidden transition-all duration-500 hover:border-gold-muted"
        >
          <div className="absolute inset-0 bg-gold-muted/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative font-minimal text-[10px] tracking-[0.4em] text-gold-muted uppercase group-hover:text-white transition-colors">
            Return to Hub
          </span>
        </button>
      </div>

      {/* Decorative Side Accents */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="font-minimal text-[8px] tracking-[0.5em] text-white/10 uppercase vertical-text transform -rotate-90 origin-center whitespace-nowrap">
          SYSTEM_STATUS: COMPILING_ASSETS
        </p>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="font-minimal text-[8px] tracking-[0.5em] text-white/10 uppercase vertical-text transform rotate-90 origin-center whitespace-nowrap">
          SAGANIX_CORE_V2 // LEARNING_MODULE
        </p>
      </div>
    </div>
  );
};
