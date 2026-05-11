import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './Hero';
import { FinalCTA } from './FinalCTA';

export const HomeContent: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background">
      
      <Hero />

      {/* 2. Studio Positioning Line */}
      <section className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto w-full text-center">
        <p className="font-mono text-sm md:text-lg text-[#9D9483] uppercase tracking-[0.15em] md:tracking-[0.25em] leading-loose md:leading-loose">
          We create cinematic IPs, feature-grade films, and high-impact brand visuals using advanced generative production pipelines.
        </p>
      </section>

      {/* 3. Selected Works */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-ivory">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {[
            { 
              title: "Ravana: The AI Mythology Sequence", 
              tags: "Mythological AI Film / World Building",
              img: "/Images/bg1.png"
            },
            { 
              title: "Brand Visual System", 
              tags: "AI Commercial Visuals / Product Campaign",
              img: "/Images/bg2.png"
            },
            { 
              title: "Character Design System", 
              tags: "Consistent AI Characters / Reference Sheets",
              img: "/Images/bg3.png"
            },
            { 
              title: "Music Video Worlds", 
              tags: "Cinematic Concepts / Visual Sequences",
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
                  {work.tags}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-ivory group-hover:text-[#D8B336] transition-colors">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
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
