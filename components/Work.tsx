import React from 'react';
import { motion } from 'motion/react';
import { FinalCTA } from './FinalCTA';

export const Work: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28">
      {/* 1. Work Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
            SELECTED WORKS
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
            <span className="text-ivory block mb-2">VISUAL WORLDS,</span>
            <span className="text-ivory block mb-2">FILM SEQUENCES</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #CFC7B2' }}>& PRODUCTION SYSTEMS.</span>
          </h1>
          <p className="font-body text-[#CFC7B2] text-base md:text-lg max-w-2xl leading-relaxed">
            A curated look at SagaNix projects across mythology, brand films, AI characters, product campaigns, and cinematic experiments.
          </p>
        </div>
      </section>

      {/* 2. Featured Projects */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full flex flex-col gap-12 md:gap-24">
        {[
          { 
            title: "Ravana: The AI Mythology Sequence", 
            tags: "Mythological Worlds / Short Films",
            desc: "A cinematic visual system built around scale, devotion, divine atmosphere, and character continuity.",
            img: "/Images/bg1.png"
          },
          { 
            title: "Brand Film System", 
            tags: "AI Brand Commercials",
            desc: "Luxury product visuals and campaign-ready cinematic assets built for high-end conversion.",
            img: "/Images/bg2.png"
          },
          { 
            title: "Character Design System", 
            tags: "Character & World Bibles",
            desc: "Consistent AI characters, costume sheets, expressions, and production-ready references.",
            img: "/Images/bg3.png"
          },
          { 
            title: "Dark Fantasy World Concept", 
            tags: "Pre-Visualisation",
            desc: "High-impact world designs, shot concepts, and early visual planning for a feature film.",
            img: "/Images/bg1.png"
          }
        ].map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center cursor-pointer"
          >
            <div className={`md:col-span-8 w-full aspect-video border border-gold/20 overflow-hidden relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-border duration-700 z-20" />
            </div>
            
            <div className={`md:col-span-4 flex flex-col ${i % 2 === 1 ? 'md:order-1 items-start md:items-end md:text-right' : 'items-start text-left'}`}>
              <p className="font-mono text-[10px] md:text-xs text-gold uppercase tracking-widest mb-4">
                {project.tags}
              </p>
              <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-ivory mb-6 group-hover:text-[#D8B336] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-body text-[#CFC7B2] text-sm leading-relaxed mb-8">
                {project.desc}
              </p>
              <button className="font-mono text-xs border border-gold/30 group-hover:bg-gold group-hover:text-black px-6 py-3 tracking-widest uppercase transition-all whitespace-nowrap bg-glass">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Showreel / Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
