
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenForm: () => void;
  onGoToHub: () => void;
  onNavigate: (view: 'home' | 'work' | 'about' | 'services' | 'contact') => void;
  currentView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm, onGoToHub, onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', view: 'home' },
    { name: 'WORK', view: 'work' },
    { name: 'SERVICES', view: 'services' },
    { name: 'ABOUT', view: 'about' },
    { name: 'CONTACT', view: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-gold/20 h-24' : 'bg-transparent h-28'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between transition-all duration-500">
        
        {/* Left: Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300 flex items-center"
        >
          <Logo />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => onNavigate(link.view as any)}
                    className={`font-mono text-xs font-semibold tracking-widest transition-all duration-300 relative group uppercase ${
                        currentView === link.view ? 'text-ivory' : 'text-steel hover:text-ivory'
                    }`}
                >
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${
                        currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </button>
            ))}
        </div>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6">
            <button 
                onClick={onOpenForm}
                className="hidden md:block px-6 py-3 bg-gold hover:bg-gold/90 text-background font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 "
            >
                Book a call
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden group flex items-center justify-center z-[70] "
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <span className={`absolute w-6 h-[1px] bg-ivory transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span className={`absolute w-6 h-[1px] bg-ivory transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </div>
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col justify-between px-6 pt-32 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
                {navLinks.map((link, index) => (
                  <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                          onNavigate(link.view as any);
                          setMobileMenuOpen(false);
                      }}
                      className="font-display font-black text-4xl text-left tracking-tight text-outline hover:text-ivory transition-colors duration-300"
                  >
                      {link.name}
                  </motion.button>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <button 
                  onClick={() => {
                    onOpenForm();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-4 bg-gold text-background font-mono text-sm font-bold tracking-widest uppercase text-center"
              >
                  Book a call
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

