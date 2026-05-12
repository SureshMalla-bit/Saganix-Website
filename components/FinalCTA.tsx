import React from 'react';

export const FinalCTA: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative py-16 md:py-24 px-6 w-full border-t border-gold/10 overflow-hidden bg-[#030303] bg-grain">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030303] via-[#0C0804]/30 to-[#030303]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto border border-gold/10 bg-white/[0.015] p-8 md:p-16 lg:p-24 rounded-sm flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 overflow-hidden">
        
        {/* Subtle glow/gradient inside the border container */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 relative z-10">
          <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
            START A PROJECT
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
            <span className="text-[#F5EAD2] block mb-2">BUILD YOUR NEXT</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #A67C1F' }}>AI FILM PIPELINE.</span>
          </h2>
          <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed max-w-md mb-12">
            Bring us your story, script, product, or cinematic universe. We’ll shape it into a production roadmap for a full-length AI movie, short film, trailer, pre-vis, VFX sequence, or brand commercial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button onClick={() => onNavigate('contact')} className="px-8 py-4 bg-[#D8B336] hover:bg-[#D8B336]/90 text-black font-mono text-xs font-bold tracking-widest uppercase transition-colors">
              Book a call
            </button>
            <button onClick={() => onNavigate('work')} className="px-8 py-4 bg-transparent border border-[#D8B336]/30 hover:border-[#D8B336]/50 hover:bg-white/[0.02] text-[#F5EAD2] font-mono text-xs font-bold tracking-widest uppercase transition-colors">
              View Work
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-[#D8B336]/10 w-full hidden md:block">
             <p className="font-mono text-[9px] text-[#9D9483] tracking-[0.3em] uppercase">SAGANIX STUDIOS / VISUAL ARCHITECTURE / EST. 2024</p>
          </div>
        </div>

        {/* Right side cinematic placeholder */}
        <div className="w-full lg:w-96 aspect-square lg:aspect-[4/5] bg-gradient-to-br from-[#0c0804] to-[#030303] border border-[#D8B336]/10 relative flex items-center justify-center overflow-hidden bg-grain shadow-inner">
           {/* Abstract symbol / overlay */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
           <div className="absolute w-[200%] h-[200%] border-[1px] border-gold/5 rounded-full blur-[2px]"></div>
           <div className="absolute w-[150%] h-[150%] border-[1px] border-gold/10 rounded-full blur-[1px]"></div>
           <div className="flex flex-col items-center text-center z-10 px-4">
             <p className="font-mono text-[10px] text-[#D8B336] tracking-widest uppercase mb-2">VISUAL WORLD PREVIEW</p>
             <p className="font-mono text-[9px] text-[#9D9483] tracking-widest uppercase md:tracking-[0.2em]">CINEMATIC PRODUCTION SYSTEM</p>
           </div>
        </div>

         {/* Mobile metadata */}
        <div className="mt-8 pt-8 border-t border-[#D8B336]/10 w-full md:hidden text-center">
             <p className="font-mono text-[9px] text-[#9D9483] tracking-[0.2em] uppercase">SAGANIX STUDIOS / VISUAL ARCHITECTURE / EST. 2024</p>
        </div>

      </div>
    </section>
  );
};
