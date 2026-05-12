
import React, { useState, useRef, useEffect } from 'react';

const HERO_VIDEOS = [
  '/Videos/heroPage/hero1.mp4',
  '/Videos/heroPage/hero2.mp4',
  '/Videos/heroPage/hero3.mp4',
];

export const Hero: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playVideo = async () => {
      try {
        video.load();
        await video.play();
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error('Video play failed:', error);
        }
      }
    };
    playVideo();
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black">

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover opacity-60"
        >
          <source src={HERO_VIDEOS[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
      </div>

      {/* Content — padded below fixed navbar */}
      <div className="relative z-10 flex flex-col items-center text-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] pt-28 md:pt-32">
        <h1 className="font-display font-black text-[14vw] md:text-[11vw] leading-[0.85] tracking-tighter mb-8 md:mb-10">
          <span className="block text-outline hover:text-ivory transition-colors duration-700">
            CINEMA.
          </span>
          <span className="block text-gold mt-2">
            ENGINEERED.
          </span>
        </h1>

        <div className="flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h2 className="font-mono text-xs md:text-sm text-ivory tracking-[0.25em] uppercase whitespace-nowrap mb-6">
            INDIA'S NEXT-GEN AI FILM & VISUAL PRODUCTION STUDIO
          </h2>

          <p className="font-mono text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8">
            Visual Architecture — Est. 2024
          </p>

          <button
            onClick={onOpenForm}
            className="px-8 py-4 bg-gold hover:bg-gold/90 text-background font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};
