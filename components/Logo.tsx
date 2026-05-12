import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`select-none ${className}`}>
      <img
        src="/Images/Saganix%20Logo.png"
        alt="Saganix Studios"
        className="h-14 md:h-16 w-auto object-contain"
      />
    </div>
  );
};