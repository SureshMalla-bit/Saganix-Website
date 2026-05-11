import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over a "loud" element or interactive element
      const target = e.target as HTMLElement;
      const isLoud = target.closest('.loud-element') !== null || 
                     target.tagName === 'BUTTON' || 
                     target.tagName === 'A';
      setIsHovering(isLoud);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-300 ease-out ${
          isHovering ? 'w-12 h-12 opacity-80' : 'w-6 h-6 opacity-100'
        }`}
      />
    </div>
  );
};