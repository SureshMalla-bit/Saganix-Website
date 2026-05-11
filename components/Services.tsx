
import React from 'react';
import { FinalCTA } from './FinalCTA';

export const Services: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-28">
      {/* 1. Services Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
            Capabilities
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
            <span className="text-ivory block mb-2">SERVICE</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #CFC7B2' }}>SUITE.</span>
          </h1>
          <p className="font-body text-[#CFC7B2] text-base md:text-xl max-w-2xl leading-relaxed mb-12">
            Production-ready visual services for films, brands, creators, agencies, and cinematic world-building projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-gold hover:bg-gold/90 text-background font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300">
              Start a project
            </button>
            <button onClick={() => onNavigate('work')} className="px-8 py-4 border border-gold/50 hover:bg-gold/10 text-gold font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300">
              View Work
            </button>
          </div>
        </div>
      </section>

      {/* 2. Service Index */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D8B336]/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

          {[
            { 
              num: "01", 
              title: "AI Film Production", 
              desc: "Cinematic AI sequences, trailers, music videos, short films, and social-first film assets.",
              tags: ["Trailers", "Music Videos", "Film Assets"]
            },
            { 
              num: "02", 
              title: "Pre-Visualisation", 
              desc: "Storyboards, concept frames, production looks, and execution-ready visual plans.",
              tags: ["Storyboards", "Concept Frames", "Look Development"]
            },
            { 
              num: "03", 
              title: "Character & World Design", 
              desc: "Consistent characters, divine figures, costumes, props, environments, and world-building systems.",
              tags: ["Character Sheets", "Costume Systems", "World Concepts"]
            },
            { 
              num: "04", 
              title: "AI VFX & Post Visuals", 
              desc: "Scene extensions, clean plates, atmosphere, lighting, impossible visuals, and cinematic enhancement.",
              tags: ["Clean Plates", "Scene Extension", "Lighting FX"]
            }
          ].map((srv, i) => (
            <div key={i} className="group flex flex-col justify-between border border-[#D8B336]/10 bg-white/[0.015] p-8 md:p-12 min-h-[340px] hover:border-[#D8B336]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden relative cursor-pointer">
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D8B336]/0 to-[#D8B336]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                   <span className="font-mono text-[#D8B336]/60 group-hover:text-[#D8B336] text-sm md:text-base font-bold transition-colors">{srv.num}</span>
                   <span className="font-mono text-[10px] text-[#D8B336]/0 group-hover:text-[#D8B336]/60 tracking-widest uppercase transition-colors duration-300 translate-x-2 group-hover:translate-x-0">
                     Explore Service →
                   </span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tighter text-[#F5EAD2] mb-4 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all">
                  {srv.title}
                </h3>
                <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed max-w-sm mb-12">
                  {srv.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10 border-t border-[#D8B336]/10 pt-6 mt-auto">
                {srv.tags.map((tag, idx) => (
                   <span key={idx} className="font-mono text-[9px] text-[#9D9483] tracking-widest uppercase bg-black/20 border border-white/5 py-1.5 px-3 rounded-sm group-hover:border-[#D8B336]/20 group-hover:text-[#CFC7B2] transition-colors">
                     {tag}
                   </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Service Showcase Module */}
      <div className="flex flex-col gap-0 border-y border-[#D8B336]/10 overflow-hidden">
        
        {/* Showcase: AI-Aided VFX */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Visual Area */}
            <div className="lg:col-span-5 w-full aspect-square md:aspect-[4/5] bg-gradient-to-br from-[#0c0804] to-black border border-[#D8B336]/20 relative flex items-center justify-center bg-grain overflow-hidden group">
               {/* Abstract lighting and grid */}
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#D8B336]/20 via-transparent to-transparent"></div>
               <div className="absolute w-[200%] h-[200%] border-[0.5px] border-[#D8B336]/10 rounded-full blur-[1px] -translate-x-1/4 -translate-y-1/4"></div>
               <div className="absolute w-[150%] h-[150%] border-[0.5px] border-[#D8B336]/5 rounded-full blur-[2px] translate-x-1/4 translate-y-1/4"></div>
               
               <div className="absolute top-6 left-6 flex flex-col gap-1 z-10">
                 <p className="font-mono text-[9px] text-[#D8B336] tracking-widest uppercase">VISUAL PREVIEW</p>
                 <p className="font-mono text-xs text-white/70 tracking-widest uppercase">AI-AIDED VFX</p>
               </div>

               {/* Simulated focal points / tracking markers */}
               <div className="absolute top-1/4 right-1/4 w-2 h-2 border border-[#D8B336] rounded-full flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-[#D8B336]"></div>
               </div>
               <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border border-[#D8B336]/50 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#D8B336]/50"></div>
               </div>
               <div className="absolute top-[45%] left-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#D8B336]/30 to-transparent -translate-x-1/2"></div>
               <div className="absolute top-1/2 left-[45%] w-[1px] h-64 bg-gradient-to-b from-transparent via-[#D8B336]/30 to-transparent -translate-y-1/2"></div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-7 flex flex-col">
              <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-4 border-l border-[#D8B336] pl-4">
                SERVICE 04
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-ivory tracking-tight uppercase mb-6">
                AI-Aided VFX
              </h2>
              <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed mb-12 max-w-xl">
                We use AI-enhanced VFX workflows to create impossible shots, extend worlds, clean plates, generate effects, and support high-impact cinematic visuals.
              </p>
              
              <div className="flex flex-col gap-4 max-w-2xl">
                {[
                  { title: "Neural scene extensions for world building" },
                  { title: "Atmospheric FX synthesis" },
                  { title: "Face and character locking" },
                  { title: "Digital body doubles" },
                  { title: "Automated clean-plate generation" },
                  { title: "Dynamic lighting re-projection" }
                ].map((item, i) => (
                   <div key={i} className="group relative flex items-center gap-6 py-4 px-6 bg-white/[0.015] border border-[#D8B336]/10 hover:border-[#D8B336]/40 hover:bg-white/[0.03] transition-all duration-300">
                     <span className="font-mono text-[9px] text-[#D8B336]/50 group-hover:text-[#D8B336] transition-colors font-bold w-4">
                       {i + 1}
                     </span>
                     <span className="font-mono text-xs uppercase tracking-widest text-[#CFC7B2] group-hover:text-white transition-colors">
                       {item.title}
                     </span>
                   </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>

      </div>

      {/* Deliverables & Best For */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Deliverables Column */}
          <div className="flex flex-col">
            <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-4 border-l border-[#D8B336] pl-4">
              DELIVERABLES
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#F5EAD2] tracking-tight uppercase mb-4">
              WHAT YOU RECEIVE
            </h2>
            <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Assets built for production, campaigns, storytelling, and scalable brand systems.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Visual Development",
                  items: ["Cinematic keyframes", "Character sheets", "Storyboard decks", "World-building decks", "Reference packs"]
                },
                {
                  title: "Motion & Sequence",
                  items: ["Video sequences", "Shot lists", "Motion prompts", "Social video exports"]
                },
                {
                  title: "Campaign & Brand",
                  items: ["Campaign visuals", "Ad creatives", "Pitch visuals"]
                }
              ].map((cluster, i) => (
                 <div key={i} className="flex flex-col bg-white/[0.015] border border-[#D8B336]/10 p-6 hover:border-[#D8B336]/30 transition-colors">
                   <h3 className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-6">
                     {cluster.title}
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {cluster.items.map((item, idx) => (
                       <span key={idx} className="font-body text-xs text-[#CFC7B2] bg-white/[0.02] border border-white/5 px-3 py-1.5 hover:text-white transition-colors">
                         {item}
                       </span>
                     ))}
                   </div>
                 </div>
              ))}
            </div>
          </div>
          
          {/* Best For Column */}
          <div className="flex flex-col">
            <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-4 border-l border-[#D8B336] pl-4">
              BEST FOR
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#F5EAD2] tracking-tight uppercase mb-4">
              WHO THIS IS FOR
            </h2>
            <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed mb-12 max-w-md opacity-0 select-none">
              Spacer line to keep headings aligned correctly between columns.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                {[
                  "Film teams", 
                  "Music labels", 
                  "Agencies", 
                  "Creators", 
                  "Fashion brands", 
                  "DTC brands", 
                  "Product companies", 
                  "Mythology / fantasy projects", 
                  "Product campaigns", 
                  "Social-first brands"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 border border-[#D8B336]/20 bg-white/[0.01] hover:bg-[#D8B336]/5 hover:border-[#D8B336]/40 transition-all cursor-default group">
                     <span className="w-1 h-1 bg-[#D8B336]/30 group-hover:bg-[#D8B336] transition-colors rounded-full"></span>
                     <span className="font-mono text-[10px] md:text-xs text-[#F5EAD2] uppercase tracking-widest group-hover:drop-shadow-[0_0_8px_rgba(216,179,54,0.3)] transition-all">
                       {item}
                     </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 8. CTA */}
      <FinalCTA onNavigate={onNavigate} />

    </div>
  );
};
