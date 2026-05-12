
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onGoToHub?: () => void;
  onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoToHub, onNavigate }) => {
  return (
    <footer className="w-full pt-16 pb-10 border-t border-gold/10 bg-[#0c0804]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Top Section: Logo & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Logo Column (Span 4) */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <div 
              onClick={() => onNavigate ? onNavigate('home') : (onGoToHub && onGoToHub())}
              className="transform scale-100 origin-top-left cursor-pointer hover:opacity-80 transition-opacity"
            >
                <Logo className="flex-row items-center gap-3 [&>div:first-child]:mb-0 [&>div:first-child]:w-10 [&>div:first-child]:h-10 [&>span]:mt-0" />
            </div>
            <p className="font-body text-[#9D9483] text-sm max-w-xs leading-relaxed">
              Cinematic visual production studio merging generative workflows with traditional cinematic craft.
            </p>
          </div>

          {/* Setup / Structure (Span 2) */}
          <div className="md:col-span-2 flex flex-col space-y-4">
             <h4 className="font-mono text-[10px] text-[#D8B336] tracking-widest uppercase mb-2">Navigation</h4>
             <button onClick={() => onNavigate && onNavigate('home')} className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors text-left">Home</button>
             <button onClick={() => onNavigate && onNavigate('work')} className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors text-left">Work</button>
             <button onClick={() => onNavigate && onNavigate('services')} className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors text-left">Services</button>
             <button onClick={() => onNavigate && onNavigate('about')} className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors text-left">About</button>
             <button onClick={() => onNavigate && onNavigate('contact')} className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors text-left">Contact</button>
          </div>

          {/* Address Column (Span 3) */}
          <div className="md:col-span-3 flex flex-col space-y-8">
             <div>
                <h4 className="font-mono text-[10px] text-[#D8B336] tracking-widest uppercase mb-4">Headquarters</h4>
                <p className="font-body text-sm text-[#CFC7B2] leading-relaxed">
                  36/4, First Floor, GK Colony,<br />
                  Neredmet, Hyderabad,<br />
                  Telangana 500094
                </p>
             </div>
             <div>
                <h4 className="font-mono text-[10px] text-[#D8B336] tracking-widest uppercase mb-4">Inquiries</h4>
                <a href="mailto:support@saganixstudios.com" className="font-body text-ivory hover:text-gold transition-colors tracking-wide block text-sm">
                  support@saganixstudios.com
                </a>
             </div>
          </div>

          {/* Socials Column (Span 3) */}
          <div className="md:col-span-3 flex flex-col items-start">
             <h4 className="font-mono text-[10px] text-[#D8B336] tracking-widest uppercase mb-6 text-left w-full">Network</h4>
             <div className="flex flex-col space-y-4 items-start">
                <a href="https://www.instagram.com/saganixstudios" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/saganix-studios" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors">LinkedIn</a>
                <a href="https://wa.me/919032731155" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#CFC7B2] hover:text-ivory transition-colors">WhatsApp</a>
             </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="w-full text-center border-t border-gold/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] text-[#9D9483] tracking-widest uppercase">© 2026 SAGANIX STUDIOS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <button onClick={() => onNavigate && onNavigate('privacy')} className="font-mono text-[10px] text-[#9D9483] hover:text-ivory uppercase tracking-widest transition-colors">Privacy Policy</button>
              <button onClick={() => onNavigate && onNavigate('terms')} className="font-mono text-[10px] text-[#9D9483] hover:text-ivory uppercase tracking-widest transition-colors">Terms of Service</button>
            </div>
        </div>
      </div>
    </footer>
  );
};
