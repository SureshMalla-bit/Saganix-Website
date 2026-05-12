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
            badge: "A Tale of Unspoken Valor",
            desc: "Beyond the frontlines lies a story of loyalty that words cannot capture. Lieutenant Norman: Bhairava is a cinematic tribute to the silent guardians of the Indian Army — the K9 units. Currently in post-production, this film utilizes a 100% AI-powered visual pipeline to render the raw emotion and grit of the battlefield. It's more than a war movie; it's a deep dive into the bond between a soldier and his most faithful ally, crafted with a Future-Noir sensibility.",
            img: "/Images/Norman%20Poster.png"
          },
          {
            num: "02",
            title: "Sardar Sarvai Papanna",
            tags: "AI Historical Epic",
            credits: "AI Powered — SagaNix Studios\nAI Lead Visual Artists — Suresh Malla & Aishyani N Malla",
            badge: "The Rebel Lion of Telangana",
            desc: "A relentless pursuit of cinematic perfection. Saganix Studios led the AI visual production for Sardar Sarvai Papanna Goud. From relentless character consistency to sprawling historical landscapes, our team pushed the boundaries of AI cinematography to create a visceral, high-stakes experience. Witness the rise of a warrior who defied an empire, rendered in stunning 4K detail.",
            img: "/Images/Papanna%20Poster.png"
          },
          {
            num: "03",
            title: "Jai Kisaan: Laut Aya Beta",
            tags: "Award-Winning AI Short Film",
            credits: "AI Animation — Suresh Malla / SagaNix Studios\nDirected by — Goutham Kool Monk",
            badge: "An Award-Winning AI Odyssey",
            desc: "A global triumph in AI-driven storytelling. Jai Kisaan: Laut Aya Beta, directed by Goutham Kool Monk, is a multi-award-winning short film that has captivated international film festivals. Saganix Studios spearheaded the animation and post-production, utilizing a bespoke AI workflow to translate deep human emotions into a high-fidelity visual experience. From the soil of the heartland to the global stage, this film proves that technology, when guided by vision, can touch the soul.",
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
