import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './Hero';
import { FinalCTA } from './FinalCTA';

export const HomeContent: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background">
      
      <Hero />

      {/* 2. Premium Intro Boxes */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-10 md:pb-16 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#030303] border border-[#D8B336]/20 bg-grain relative shadow-2xl">
          {[
            {
              num: "01",
              title: "Cinematic Intelligence",
              desc: "Story comes before software. Every frame is designed with narrative intent, emotional pacing, camera grammar, scale, and cinematic language.",
              borderClass: "border-b md:border-b-0 md:border-r border-[#D8B336]/20"
            },
            {
              num: "02",
              title: "End-to-End AI Film Pipelines",
              desc: "We build full-length AI movies, short films, trailers, pre-visualisation, AI VFX, and AI brand commercials through structured generative production workflows.",
              borderClass: "border-b md:border-b-0 md:border-r border-[#D8B336]/20"
            },
            {
              num: "03",
              title: "Studio-Grade Delivery",
              desc: "From story and character systems to VFX, edit direction, sound direction, and final formats — every output is prepared for real production use.",
              borderClass: ""
            }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col p-10 md:p-12 lg:p-16 ${item.borderClass}`}>
              <span className="font-mono text-xs text-[#D8B336] tracking-widest uppercase mb-8">
                {item.num}
              </span>
              <h3 className="font-display font-black text-2xl lg:text-3xl text-[#F5EAD2] uppercase tracking-tight leading-[1.1] mb-6">
                {item.title}
              </h3>
              <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Selected Works */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-ivory">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {[
            { 
              num: "01",
              title: "Full-Length AI Movie Pipeline", 
              desc: "Feature-length cinematic development from story to final visual delivery.",
              img: "/Images/bg1.png"
            },
            { 
              num: "02",
              title: "Short Film / Trailer System", 
              desc: "High-impact short films, teasers, trailers, and cinematic sequences.",
              img: "/Images/bg2.png"
            },
            { 
              num: "03",
              title: "Pre-Visualisation", 
              desc: "Storyboards, shot design, scene blocking, and production-ready visual planning.",
              img: "/Images/bg3.png"
            },
            { 
              num: "04",
              title: "AI VFX / Brand Commercials", 
              desc: "Scene extensions, impossible visuals, product films, and campaign-ready commercials.",
              img: "/Images/bg1.png"
            }
          ].map((work, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col gap-6 cursor-pointer" 
              onClick={() => onNavigate('work')}
            >
              <div className="w-full aspect-[4/3] md:aspect-video border border-gold/10 overflow-hidden relative bg-warm-black">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 z-20" />
                
                {/* Temporary placeholder image */}
                <img src={work.img} alt={work.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </div>
              
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">
                  {work.num}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-ivory group-hover:text-[#D8B336] transition-colors mb-2">
                  {work.title}
                </h3>
                <p className="font-body text-[#9D9483] text-sm md:text-base leading-relaxed">
                  {work.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('work')} 
            className="inline-flex items-center font-mono text-xs font-bold text-gold hover:text-ivory tracking-widest uppercase transition-colors group"
          >
            View All Work
            <span className="ml-3 w-8 h-[1px] bg-gold group-hover:bg-ivory transition-colors" />
          </button>
        </div>
      </section>

      {/* 4. Final CTA */}
      <FinalCTA onNavigate={onNavigate} />

    </div>
  );
};
