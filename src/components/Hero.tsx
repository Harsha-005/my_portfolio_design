import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Brain, Sparkles } from 'lucide-react';
import TechBackground from './TechBackground';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#f8f8f8]"
    >
      {/* Background visual components */}
      <div className="absolute inset-0 bg-editorial-dot-matrix opacity-60 z-0"></div>
      
      {/* Technical trace lines in background */}
      <TechBackground />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-[#1a1a1a] uppercase leading-[0.9] mb-6"
          >
            Hi, I'm <span className="underline decoration-2 underline-offset-8">Harshavardhan Ravula</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl sm:text-2xl font-medium text-[#1a1a1a]/80 font-serif italic tracking-tight mb-8"
          >
            AI/ML Engineer & Gen AI Specialist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed max-w-xl mb-12"
          >
            Aspiring to innovate in Artificial Intelligence, Data Analytics, and Python development. Skilled in NLP, visualization, and building data-driven solutions at the intersection of digital efficiency and tactile reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-black hover:bg-black/90 text-white font-sans text-xs uppercase font-bold tracking-widest rounded-none transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <Brain size={14} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white text-black font-sans text-xs uppercase font-bold tracking-widest rounded-none transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Direct</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side - Editorial Geometric Visual Box (matches the SHIFT cover feature) */}
        <div className="lg:col-span-4 hidden lg:block relative h-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full relative p-1 bg-[#e5e5e5] border-2 border-black overflow-hidden flex flex-col justify-between"
          >
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5"></div>

            {/* Inset content */}
            <div className="relative z-10 p-6 flex justify-between items-start">
              <div className="text-[10px] font-mono tracking-widest bg-black text-white px-2 py-1 uppercase font-bold">
                Batch-2026
              </div>
              <div className="text-right">
                <span className="block text-xs uppercase font-bold tracking-wider font-sans">Sathyabama</span>
                <span className="text-[10px] uppercase text-black/50 font-sans">CS / AI DEPT</span>
              </div>
            </div>

            <div className="relative z-10 p-6">
              <h3 className="text-5xl font-black font-display leading-[0.8] tracking-tighter text-black mb-3">
                INTELLIGENT<br/>AGENT.
              </h3>
              <p className="text-[11px] font-sans leading-snug text-black/70 max-w-[220px]">
                Developing semantic pipelines and agentic automation blocks that optimize real-world decision loops.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity z-10 cursor-pointer">
        <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-black">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={12} className="text-black" />
        </motion.div>
      </div>
    </section>
  );
}
