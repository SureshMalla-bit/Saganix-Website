
import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { FinalCTA } from './FinalCTA';

export const About: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28">
      {/* 1. About Hero */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-4xl">
            <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
              ABOUT SAGANIX
            </p>
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
              <span className="text-ivory block mb-2">BUILT FOR THE NEXT ERA</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '1px #CFC7B2' }}>OF VISUAL PRODUCTION.</span>
            </h1>
            <p className="font-body text-[#CFC7B2] text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              SagaNix Studios is built for end-to-end AI film and visual production. We create full-length AI movies, short films, trailers, pre-visualisation, AI VFX, and AI brand commercials through cinematic generative pipelines.
            </p>
            <p className="font-body text-[#CFC7B2] text-base md:text-lg max-w-2xl leading-relaxed">
              Our work combines story, camera grammar, character continuity, world-building, AI cinematography, VFX, edit direction, and delivery systems — so every project feels directed, not randomly generated.
            </p>
          </div>
          
          <div className="hidden md:block opacity-20 hover:opacity-40 transition-opacity duration-700">
             <div className="w-32 h-32">
                <Logo />
             </div>
          </div>
        </div>
      </section>

      {/* 2. Studio Philosophy */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full border-t border-gold/10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/2">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-ivory mb-6 leading-[1.1]">
              AI is not the director.<br />
              <span className="text-gold">It is the infrastructure.</span>
            </h2>
            <p className="font-body text-[#CFC7B2] text-base md:text-lg leading-relaxed max-w-lg mb-8">
              We use AI to accelerate production, but every frame is guided by story, taste, structure, and cinematic intent.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 gap-12">
            {[
              { num: "01", title: "Story", text: "Every project starts with narrative clarity." },
              { num: "02", title: "Design", text: "Worlds, characters, frames, and color are built with visual discipline." },
              { num: "03", title: "Execution", text: "Outputs are structured for real campaigns, films, and digital distribution." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <span className="font-mono text-gold text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity mt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-ivory mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#9D9483] text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Founders */}
      <section className="py-16 md:py-24 bg-warm-black border-y border-gold/10 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto w-full">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-ivory mb-16 text-center">
            Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
            {[
              {
                name: "Suresh Malla",
                title: "Co-Founder & Chief Executive Officer",
                bio: "Leads creative direction, AI workflows, cinematic systems, and business strategy at SagaNix Studios.",
                tags: ["Creative Direction", "AI Production", "Business Strategy"],
                img: "/Images/sureshMalla.png"
              },
              {
                name: "Aishyani N Malla",
                title: "Co-Founder & Chief Operating Officer",
                bio: "Leads operations, brand development, execution systems, and studio growth.",
                tags: ["Operations", "Brand Strategy", "Execution"],
                img: "/Images/aishyani.png"
              }
            ].map((founder, i) => (
              <div key={i} className="group flex flex-col gap-8 bg-background border border-gold/10 p-6 md:p-8 hover:border-gold/30 transition-all duration-500">
                <div className="w-full aspect-[4/5] md:aspect-square overflow-hidden bg-black/50 relative">
                  <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img src={founder.img} alt={founder.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-ivory mb-2">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-6 pb-6 border-b border-gold/10">
                    {founder.title}
                  </p>
                  <p className="font-body text-[#9D9483] text-sm leading-relaxed mb-6 h-[60px]">
                    {founder.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.tags.map((tag, j) => (
                      <span key={j} className="font-mono text-[10px] text-ivory/60 bg-white/5 px-3 py-1 uppercase border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What makes us different */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        {/* Subtle grid/background element */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#D8B336]/5 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 border-[1px] border-[#D8B336]/10 rounded-full blur-[2px] opacity-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-12">
              <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
                DIFFERENCE
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-8">
                <span className="text-[#F5EAD2] block mb-2">WHAT MAKES</span>
                <span className="block text-transparent" style={{ WebkitTextStroke: '1px #A67C1F' }}>SAGANIX DIFFERENT</span>
              </h2>
              <p className="font-body text-[#CFC7B2] text-sm md:text-base max-w-sm leading-relaxed">
                We combine cinematic taste, character continuity, Indian world-building, and repeatable production workflows to create visuals that feel directed — not randomly generated.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                title: "Cinematic taste before tool usage",
                desc: "Tools create images. Direction creates cinema."
              },
              {
                title: "Character consistency across shots",
                desc: "Faces, costumes, worlds, and visual tone remain consistent across frames."
              },
              {
                title: "Indian mythology and world-building strength",
                desc: "We build with scale, symbolism, atmosphere, and Indian cinematic imagination."
              },
              {
                title: "Repeatable AI production workflows",
                desc: "Every project follows a structured workflow from concept to delivery."
              },
              {
                title: "Output formats for social, ads, films, and campaigns",
                desc: "Assets are prepared for campaigns, films, reels, pitch decks, and brand rollouts."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative flex items-start gap-6 p-6 md:p-8 bg-white/[0.025] border border-[#D8B336]/10 hover:border-[#D8B336]/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle hover glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8B336]/0 to-[#D8B336]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <span className="font-mono text-[#D8B336]/50 group-hover:text-[#D8B336] group-hover:drop-shadow-[0_0_8px_rgba(216,179,54,0.5)] text-xl font-bold transition-all mt-1">
                  0{i + 1}
                </span>
                <div className="flex flex-col relative z-10">
                  <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-[#F5EAD2] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#9D9483] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Studio Values */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full border-t border-[#D8B336]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
          
          <div className="lg:col-span-5 flex flex-col relative z-10">
            <p className="font-mono text-[10px] text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
              CORE PRINCIPLES
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight uppercase leading-[1.1] mb-8">
              <span className="text-[#F5EAD2] block mb-2">HOW SAGANIX</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '1px #A67C1F' }}>OPERATES</span>
            </h2>
            <p className="font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed max-w-sm">
              From narrative intent to scalable world-building, every project is designed with structure, taste, and production readiness.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
             {/* Decorative element */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D8B336]/5 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>

            {[
              { title: "Story", desc: "Every frame starts with narrative purpose." },
              { title: "Scale", desc: "We build worlds, not isolated visuals." },
              { title: "Discipline", desc: "AI outputs are guided by structure and taste." },
              { title: "Delivery", desc: "Every asset is prepared for real use." }
            ].map((val, i) => (
              <div key={i} className="group relative flex flex-col bg-white/[0.02] border border-[#D8B336]/10 p-8 hover:border-[#D8B336]/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Subtle hover glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8B336]/0 to-[#D8B336]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <span className="font-mono text-[10px] text-[#D8B336]/50 group-hover:text-[#D8B336] group-hover:drop-shadow-[0_0_8px_rgba(216,179,54,0.5)] font-bold transition-all mb-6 tracking-widest relative z-10">
                  0{i + 1}
                </span>
                
                <h3 className="font-display font-bold text-xl uppercase tracking-widest text-[#F5EAD2] mb-4 group-hover:text-[#D8B336] transition-colors relative z-10">
                  {val.title}
                </h3>
                <p className="font-body text-[#9D9483] text-sm leading-relaxed relative z-10">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA */}
      <FinalCTA onNavigate={onNavigate} />

    </div>
  );
};
