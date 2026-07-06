import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f8f8]/90 backdrop-blur-md py-4 border-b border-black'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="text-lg font-black tracking-wider cursor-pointer text-[#1a1a1a] flex items-center gap-2 group font-sans"
        >
          <span className="w-2.5 h-2.5 bg-black"></span>
          <span>HARSHAVARDHAN RAVULA</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-2 font-sans">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a]'
                }`}
              >
                {/* Clean editorial block backdrop for active state */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-black"
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
