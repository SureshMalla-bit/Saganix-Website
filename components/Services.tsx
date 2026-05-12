
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FinalCTA } from './FinalCTA';

export const Services: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28">
      <Helmet>
        <title>AI Film Production Services — Movies, VFX, Brand Commercials | Saganix Studios Hyderabad</title>
        <meta name="description" content="Saganix Studios offers end-to-end AI film production services in India — full-length AI movies, short films, trailers, pre-visualisation, AI VFX, and AI brand commercials. Based in Hyderabad, serving clients across India." />
        <link rel="canonical" href="https://saganixstudios.com/services" />
        <meta property="og:title" content="AI Film Production Services | Saganix Studios Hyderabad" />
        <meta property="og:description" content="End-to-end AI film production — movies, short films, VFX, trailers, and brand commercials. India's leading AI studio based in Hyderabad." />
        <meta property="og:url" content="https://saganixstudios.com/services" />
      </Helmet>

      {/* 1. Services Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
            CAPABILITIES
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
            <span className="text-ivory block mb-2">END-TO-END AI FILM</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #CFC7B2' }}>PRODUCTION.</span>
          </h1>
          <p className="font-body text-[#CFC7B2] text-base md:text-xl max-w-2xl leading-relaxed mb-12">
            We create full-length AI movies, short films, trailers, pre-visualisation, AI VFX, and AI brand commercials using cinematic generative production pipelines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => onNavigate('contact')} className="px-8 py-4 bg-gold hover:bg-gold/90 text-background font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300">
              Start a project
            </button>
            <button onClick={() => onNavigate('work')} className="px-8 py-4 border border-gold/50 hover:bg-gold/10 text-gold font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300">
              View Work
            </button>
          </div>
        </div>
      </section>

      {/* 2. Service Index */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D8B336]/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

          {[
            { 
              num: "01", 
              title: "Full-Length AI Movies", 
              desc: "End-to-end AI-powered movie production support for feature-length films — from story, screenplay direction, character and world design to pre-visualisation, AI cinematography, VFX, edit direction, and final delivery.",
              tags: ["Story concept", "Screenplay direction", "Character bible", "World bible", "Shot breakdown", "Pre-visualisation", "AI cinematography", "AI VFX", "Edit direction", "Sound direction", "Final delivery formats"],
              span: "md:col-span-2"
            },
            { 
              num: "02", 
              title: "Short Films & Trailers", 
              desc: "Cinematic short films, teasers, trailers, proof-of-concept films, and music-led visual sequences built with structured AI production workflows.",
              tags: ["Concept development", "Trailer structure", "Shot design", "Cinematic keyframes", "AI video sequences", "Scene generation", "Motion prompts", "Edit pacing", "Final exports"],
              span: "lg:col-span-1"
            },
            { 
              num: "03", 
              title: "Pre-Visualisation", 
              desc: "Production-ready visual planning for films, trailers, commercials, and cinematic worlds before full production begins.",
              tags: ["Storyboards", "Scene blocking", "Shot breakdowns", "Look development", "Production design references", "Camera language", "Moodboards", "Proof-of-concept frames"],
              span: "lg:col-span-1"
            },
            { 
              num: "04", 
              title: "AI VFX", 
              desc: "AI-enhanced VFX workflows for world extension, impossible visuals, atmospheric effects, character continuity, clean plates, and cinematic enhancement.",
              tags: ["Scene extensions", "Atmospheric FX", "Clean-plate generation", "Face and character locking", "Digital doubles", "Lighting re-projection", "Background replacement", "Impossible shots"],
              span: "lg:col-span-1"
            },
            { 
              num: "05", 
              title: "AI Brand Commercials", 
              desc: "Cinematic AI commercials for brands, products, campaigns, launches, and social-first advertising.",
              tags: ["Product films", "Brand films", "Launch commercials", "Campaign visuals", "AI UGC-style videos", "Product keyframes", "Social video exports", "Ad creative variations"],
              span: "lg:col-span-1"
            }
          ].map((srv, i) => (
            <div key={i} className={`group flex flex-col justify-between border border-[#D8B336]/10 bg-white/[0.015] p-8 md:p-12 min-h-[380px] hover:border-[#D8B336]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden relative cursor-default ${srv.span || ''}`}>
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D8B336]/0 to-[#D8B336]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                   <span className="font-mono text-[#D8B336]/60 group-hover:text-[#D8B336] text-sm md:text-base font-bold transition-colors">{srv.num}</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tighter text-[#F5EAD2] mb-4 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all">
                  {srv.title}
                </h3>
                <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed max-w-xl mb-12">
                  {srv.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 pt-6 mt-auto">
                <p className="w-full font-mono text-[9px] text-[#D8B336] tracking-widest uppercase mb-3">Includes</p>
                {srv.tags.map((tag, idx) => (
                   <span key={idx} className="font-body text-[11px] text-[#9D9483] bg-black/20 border border-white/5 py-1 px-3 rounded-sm group-hover:border-[#D8B336]/20 group-hover:text-[#CFC7B2] transition-colors">
                     {tag}
                   </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Capabilities Module */}
      <div className="flex flex-col gap-0 border-y border-[#D8B336]/10 overflow-hidden">
        
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-5 flex flex-col">
              <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-4 border-l border-[#D8B336] pl-4">
                PIPELINE CAPABILITIES
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-ivory tracking-tight uppercase mb-6 leading-[1.1]">
                FROM STORY TO FINAL DELIVERY.
              </h2>
              <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed max-w-md">
                Every SagaNix production is supported by a modular pipeline that can be used for movies, trailers, pre-visualisation, VFX, and brand commercials.
              </p>
            </div>
            
            {/* Right Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  num: "01",
                  title: "Story & Development", 
                  items: ["Story concept", "Logline", "Screenplay direction", "Narrative structure", "Mood and genre direction"]
                },
                { 
                  num: "02",
                  title: "Visual World Building", 
                  items: ["Character design", "Character bible", "World bible", "Costume references", "Props and environments"]
                },
                { 
                  num: "03",
                  title: "AI Production", 
                  items: ["Shot breakdowns", "Storyboards", "Cinematic keyframes", "AI cinematography", "Scene generation", "Motion prompts"]
                },
                { 
                  num: "04",
                  title: "Post & Delivery", 
                  items: ["AI VFX", "Edit direction", "Sound direction", "Color and mood direction", "Final delivery formats"]
                }
              ].map((category, i) => (
                 <div key={i} className="flex flex-col p-6 bg-white/[0.015] border border-[#D8B336]/10">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="font-mono text-[#D8B336]/50 text-sm font-bold">{category.num}</span>
                     <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5EAD2]">
                       {category.title}
                     </h3>
                   </div>
                   <div className="flex flex-col gap-3">
                     {category.items.map((item, idx) => (
                       <div key={idx} className="flex items-start gap-3">
                         <span className="w-1 h-1 bg-[#D8B336]/30 mt-1.5 shrink-0 rounded-full"></span>
                         <span className="font-body text-sm text-[#CFC7B2]">
                           {item}
                         </span>
                       </div>
                     ))}
                   </div>
                 </div>
              ))}
            </div>
            
          </div>
        </section>

      </div>

      {/* Deliverables & Best For */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
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
                  title: "Film Packages",
                  items: ["Full-length AI movie pipeline", "Short film pipeline", "Trailer package", "Proof-of-concept film"]
                },
                {
                  title: "Pre-Production Assets",
                  items: ["Storyboards", "Shot breakdowns", "Character bible", "World bible", "Look development frames"]
                },
                {
                  title: "Production Assets",
                  items: ["Cinematic keyframes", "AI video sequences", "Motion prompts", "VFX frames", "Scene variations"]
                },
                {
                  title: "Commercial Assets",
                  items: ["Brand films", "Product commercials", "Campaign visuals", "Social exports", "Ad variations"]
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
                  "Film producers", 
                  "Directors", 
                  "Writers", 
                  "Production houses", 
                  "Music labels", 
                  "Brand teams", 
                  "Agencies", 
                  "DTC brands", 
                  "Mythology / fantasy projects", 
                  "Cinematic IP creators"
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
