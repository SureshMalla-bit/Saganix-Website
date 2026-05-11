import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center relative select-none ${className}`}>
      {/* Mandala Icon Construction */}
      <div className="relative w-8 h-8 md:w-10 md:h-10 mb-1 flex items-center justify-center text-gold-muted">
         <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-[spin_60s_linear_infinite]">
            <circle cx="50" cy="50" r="45" stroke="url(#gold-grad)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="30" stroke="url(#gold-grad)" strokeWidth="0.5" />
            <path d="M50 0 L50 100 M0 50 L100 50" stroke="url(#gold-grad)" strokeWidth="1" />
            <path d="M15 15 L85 85 M85 15 L15 85" stroke="url(#gold-grad)" strokeWidth="1" />
            {/* Inner Geometry */}
            <rect x="34" y="34" width="32" height="32" stroke="url(#gold-grad)" strokeWidth="1" transform="rotate(45 50 50)" />
            <rect x="34" y="34" width="32" height="32" stroke="url(#gold-grad)" strokeWidth="1" />
            
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F5D061" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
         </svg>
         {/* Center dot */}
         <div className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
      </div>

      {/* Main Logotype */}
      <div className="relative">
        <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.1em] text-transparent bg-clip-text bg-gold-metallic relative z-10 leading-none">
          SAGANIX
        </h1>
        {/* Cinematic Lens Flare Slash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rotate-[-30deg] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-gold-muted/20 blur-xl rounded-full pointer-events-none"></div>
      </div>

      {/* Subtext */}
      <span className="font-loud text-[0.5rem] md:text-[0.6rem] tracking-[0.6em] text-gold-muted mt-1 ml-1 leading-none">
        STUDIOS
      </span>
    </div>
  );
};