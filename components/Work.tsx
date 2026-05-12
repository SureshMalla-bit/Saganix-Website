import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { FinalCTA } from './FinalCTA';

export const Work: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28">
      <Helmet>
        <title>Our Films & Work | Award-Winning AI Film Portfolio — Saganix Studios Hyderabad</title>
        <meta name="description" content="Explore Saganix Studios' AI film portfolio — Lieutenant Norman: Bhairava, Sardar Sarvai Papanna, and Jai Kisaan (9x international award winner). AI film production studio based in Hyderabad, India." />
        <link rel="canonical" href="https://saganixstudios.com/work" />
        <meta property="og:title" content="Our Films & Work | AI Film Portfolio — Saganix Studios" />
        <meta property="og:description" content="Award-winning AI films by Saganix Studios — Hyderabad's leading AI film production studio. View our portfolio of feature films, short films, and cinematic AI productions." />
        <meta property="og:url" content="https://saganixstudios.com/work" />
      </Helmet>

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
            num: "01",
            title: "Lieutenant Norman: Bhairava",
            tags: "AI Feature Film",
            credits: "Generative AI Visuals & VFX — SagaNix Studios\nAI Cinematography — Suresh Malla & Aishyani N Malla",
            badge: "From Amazon Bestseller Novel",
            desc: "Full-length AI feature film based on the Amazon Bestseller Novel by Goutham Kool Monkk. SagaNix handled generative AI visuals, cinematography, VFX, sound designing, and complete post-production for Pings Cineworks.",
            img: "/Images/Norman%20Poster.png"
          },
          {
            num: "02",
            title: "Sardar Sarvai Papanna",
            tags: "AI Historical Epic",
            credits: "AI Powered — SagaNix Studios\nAI Lead Visual Artists — Suresh Malla & Aishyani N Malla",
            badge: "The Rebel King of Telangana",
            desc: "Epic historical AI film about the Rebel King of Telangana. SagaNix Studios led AI visual production for VG Movie Makers, with Story, Screenplay & Direction by Venkatesh Goud Lingampally.",
            img: "/Images/Papanna%20Poster.png"
          },
          {
            num: "03",
            title: "Jai Kisaan",
            tags: "Award-Winning AI Short Film",
            credits: "AI Animation — Suresh Malla / SagaNix Studios\nMusic & Arrangements — Kool Monkk",
            badge: "9x International Award Winner",
            desc: "Winner at Buddha International Film Festival 2026, Dada Saheb Phalke Film Festival-26, Asian Talent International Film Festival, Jaipur International Film Festival, Global Cineverse Film Festival, and more.",
            img: "/Images/Jai%20Kisan%20Poster.png"
          }
        ].map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            <div className={`md:col-span-8 w-full aspect-video border border-gold/20 overflow-hidden relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-700 z-20" />
            </div>

            <div className={`md:col-span-4 flex flex-col ${i % 2 === 1 ? 'md:order-1 items-start md:items-end md:text-right' : 'items-start text-left'}`}>
              <span className="font-mono text-[9px] text-gold/50 uppercase tracking-widest border border-gold/20 px-2 py-0.5 mb-4">
                {project.badge}
              </span>
              <p className="font-mono text-[10px] md:text-xs text-gold uppercase tracking-widest mb-3">
                {project.num} — {project.tags}
              </p>
              <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-ivory mb-4 group-hover:text-[#D8B336] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-body text-[#CFC7B2] text-sm leading-relaxed mb-4">
                {project.desc}
              </p>
              <p className="font-mono text-[9px] text-[#9D9483] uppercase tracking-widest leading-relaxed mb-8 whitespace-pre-line">
                {project.credits}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Showreel / Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
