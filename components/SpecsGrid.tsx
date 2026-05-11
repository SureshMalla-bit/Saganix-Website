
import React from 'react';

interface SpecItemProps {
  title: React.ReactNode;
  number: string;
  description: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ title, number, description }) => (
  <div className="loud-element relative flex flex-col h-full p-8 md:p-12 border-b md:border-b-0 md:border-r border-gold-muted/30 last:border-r-0 hover:bg-white/5 transition-colors duration-500 group">
    <div className="mb-12 md:mb-20">
      <span className="font-minimal text-xs text-gold-muted tracking-[0.2em]">{number}</span>
    </div>
    <div className="flex flex-col flex-grow">
        {/* Title Container: Fixed height + Bottom Alignment */}
        <div className="min-h-[5rem] flex items-end mb-6">
            <h3 className="font-loud text-2xl md:text-3xl text-white group-hover:text-transparent group-hover:bg-gold-metallic group-hover:bg-clip-text transition-all duration-300">
                {title}
            </h3>
        </div>
        <p className="font-minimal text-gray-400 text-sm leading-relaxed max-w-xs whitespace-pre-line">
            {description}
        </p>
    </div>
  </div>
);

export const SpecsGrid: React.FC = () => {
  return (
    <section className="w-full border-t border-b border-gold-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[30vh]">
        <SpecItem 
            number="01"
            title={<>CINEMATIC<br />INTELLIGENCE</>} 
            description={`Story comes before software.
Every frame is designed with narrative intent, emotional pacing, and cinematic language.
Camera grammar, scale, and spectacle are engineered. Not guessed.`}
        />
        <SpecItem 
            number="02"
            title={<>AI-DRIVEN<br />PRODUCTION PIPELINES</>} 
            description={`We use generative AI as infrastructure.
Custom pipelines power concept art, shot design, sequences, and full cinematic narratives.
This allows speed, scale, and iteration that traditional studios cannot match.
Quality is never compromised.`}
        />
        <SpecItem 
            number="03"
            title={<>STUDIO-GRADE<br />DELIVERY</>} 
            description={`Clear scope. Defined timelines. No ambiguity.
Outputs are formatted for global cinema, OTT platforms, and premium brand distribution standards.
We deliver like a studio. Because we are one.`}
        />
      </div>
    </section>
  );
};
