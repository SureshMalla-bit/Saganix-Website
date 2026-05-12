
import React, { useState, useRef, useEffect } from 'react';

export const Hero: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  const [heroVideos, setHeroVideos] = useState<string[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos/hero');
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setHeroVideos(data);
        }
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoEnd = () => {
    if (heroVideos.length > 0) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || heroVideos.length === 0) return;

    const playVideo = async () => {
      try {
        video.load();
        await video.play();
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error("Video play failed:", error);
        }
      }
    };

    playVideo();
  }, [currentVideoIndex, heroVideos]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
        {heroVideos.length > 0 ? (
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            playsInline 
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover opacity-60 contrast-110"
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          </video>
        ) : (
          <img src="/Images/Jai%20Kisan%20Poster.png" alt="Hero Background" className="w-full h-full object-cover opacity-40 contrast-110" />
        )}
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] mt-16 md:mt-0">
        {/* Main Title */}
        <h1 className="font-display font-black text-[14vw] md:text-[11vw] leading-[0.85] tracking-tighter mb-8 md:mb-10">
          <span className="block text-outline hover:text-ivory transition-colors duration-700">
            CINEMA.
          </span>
          <span className="block text-gold mt-2">
            ENGINEERED.
          </span>
        </h1>

        <div className="flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Secondary Heading */}
          <h2 className="font-mono text-[10px] md:text-xs text-ivory tracking-[0.25em] uppercase whitespace-nowrap mb-6">
            INDIA’S NEXT-GEN AI FILM & VISUAL PRODUCTION STUDIO
          </h2>
          
          <p className="font-mono text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-8">
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
