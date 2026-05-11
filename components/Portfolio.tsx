
import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image }) => (
  <div className="loud-element w-full group cursor-pointer">
    <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
      <div className="absolute inset-0 bg-gold-muted/10 mix-blend-overlay z-10 pointer-events-none"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
         <div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center">
             <span className="font-minimal text-xs tracking-widest">VIEW</span>
         </div>
      </div>
    </div>
    
    <div className="flex justify-between items-end mt-6 border-b border-white/10 pb-6">
      <h3 className="font-loud text-4xl md:text-6xl text-white group-hover:text-transparent group-hover:text-outline transition-all duration-300">
        {title}
      </h3>
      <span className="font-minimal text-xs text-gold-muted tracking-widest mb-2">
        {category}
      </span>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section className="w-full py-40 px-6 md:px-12">
      <div className="flex flex-col space-y-40 max-w-[1920px] mx-auto">
        
        {/* Section Label */}
        <div className="w-full flex justify-center">
            {/* Removed mb-20 to equalize spacing (160px top via py-40, 160px bottom via space-y-40) */}
            {/* Added mr-[-0.2em] to compensate for tracking and center visually */}
            <span className="font-minimal text-4xl md:text-5xl tracking-[0.2em] text-white/40 uppercase text-center mr-[-0.2em]">Selected Works</span>
        </div>

        <ProjectCard 
            title="NEON ORIGIN"
            category="AUTOMOTIVE / CGI"
            image="https://picsum.photos/1920/1080?random=1"
        />

        <ProjectCard 
            title="VOID WALKER"
            category="NARRATIVE / FILM"
            image="https://picsum.photos/1920/1080?random=2"
        />
        
      </div>
    </section>
  );
};
