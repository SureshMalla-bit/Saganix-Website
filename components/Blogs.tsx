
import React from 'react';

interface BlogPostProps {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ date, title, excerpt, tags }) => (
  <div className="loud-element group border-b border-white/10 py-12 cursor-pointer hover:bg-white/5 transition-colors px-4">
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
      <span className="font-minimal text-[10px] text-gold-muted tracking-[0.2em] mb-2 md:mb-0">{date}</span>
      <div className="flex space-x-4">
        {tags.map((tag, index) => (
          <span key={index} className="font-minimal text-[9px] text-white/40 border border-white/10 px-2 py-1 uppercase tracking-wider">{tag}</span>
        ))}
      </div>
    </div>
    <h3 className="font-loud text-3xl md:text-5xl text-white mb-6 group-hover:text-gold-metallic group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
      {title}
    </h3>
    <p className="font-minimal text-gray-400 text-sm max-w-2xl leading-relaxed">
      {excerpt}
    </p>
    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
      <span className="font-minimal text-xs text-gold-muted border-b border-gold-muted pb-1">READ TRANSMISSION</span>
    </div>
  </div>
);

export const Blogs: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 px-6 md:px-12 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-24 border-b border-gold-muted/30 pb-12">
          <span className="font-minimal text-[10px] text-gold-muted tracking-[0.4em] uppercase mb-4">
            Studio Intel
          </span>
          <h1 className="font-loud text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white">
            The <span className="text-outline">Log.</span>
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col">
          <BlogPost 
            date="10.24.2024"
            title="THE MATHEMATICS OF LIGHT"
            excerpt="Exploring the new ray-tracing algorithms utilized in the 'Neon Origin' project to achieve hyper-realism in low-light environments."
            tags={['Tech', 'R&D']}
          />
          <BlogPost 
            date="09.15.2024"
            title="NARRATIVE ARCHITECTURE"
            excerpt="How brutalist design principles influence our approach to digital set construction and environment storytelling."
            tags={['Design', 'Philosophy']}
          />
          <BlogPost 
            date="08.02.2024"
            title="BEYOND 8K RESOLUTION"
            excerpt="Preparing for the next generation of display technology. Why we are upscaling our entire pipeline for 2025."
            tags={['Hardware', 'Future']}
          />
        </div>
        
        <div className="mt-20 flex justify-center">
            <button className="loud-element font-minimal text-xs tracking-[0.3em] text-white/30 hover:text-white uppercase transition-colors">
                Load Archives
            </button>
        </div>

      </div>
    </div>
  );
};
