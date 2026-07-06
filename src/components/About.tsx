import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Database, Code } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      title: "Education",
      desc: "Computer Science (AI Specialization)"
    },
    {
      icon: <Database className="w-5 h-5 text-black" />,
      title: "Focus Areas",
      desc: "Data Analytics, NLP, ML & Gen AI"
    },
    {
      icon: <Code className="w-5 h-5 text-black" />,
      title: "Core Stack",
      desc: "Python, SQL"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f8f8] relative overflow-hidden border-t border-black/10">
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#1a1a1a]/50 mb-2 block">Personal Context</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-[#1a1a1a] uppercase tracking-tighter mb-4">
            About Me
          </h2>
          <div className="h-[2px] w-12 bg-black mx-auto"></div>
        </motion.div>

        {/* Central Card: Elegant box with solid black border and sharp square edges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white border-2 border-black p-8 sm:p-12 rounded-none shadow-[4px_4px_0px_#1a1a1a] max-w-3xl mx-auto relative group"
        >
          <p className="text-[#1a1a1a] text-lg sm:text-2xl leading-relaxed font-serif italic mb-10 text-center">
            "I am a Computer Science undergraduate at <span className="font-bold underline decoration-black decoration-1">Sathyabama University</span>, specializing in AI with a strong foundation in Data Analytics and Python. I seek opportunities in AI, Data Science, and Software Development to apply my expertise in real-world problem solving."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/10">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-5 rounded-none bg-[#f8f8f8] border border-black/5 hover:border-black/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-none bg-white border border-black/10 mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-black text-sm font-bold uppercase tracking-wider mb-2 font-sans">{item.title}</h4>
                <p className="text-slate-600 text-xs text-center leading-relaxed font-serif">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] bg-black/20 flex-grow"></span>
            <h3 className="text-[10px] uppercase font-sans tracking-[0.4em] text-black font-black shrink-0">
              Certifications & Credentials
            </h3>
            <span className="h-[1px] bg-black/20 flex-grow"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Generative AI Internship",
                issuer: "NeubAItics Research Hub",
                badge: "Gen AI"
              },
              {
                title: "Machine Learning Internship",
                issuer: "Cognibot",
                badge: "ML"
              },
              {
                title: "Data Analytics Certificate",
                issuer: "Deloitte",
                badge: "Analytics"
              },
              {
                title: "GEN AI Powered Data Analytics",
                issuer: "TATA",
                badge: "Data & AI"
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-black p-5 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300 shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] group"
              >
                <div>
                  <div className="text-[9px] font-mono tracking-wider font-bold uppercase text-slate-500 group-hover:text-slate-300 mb-1">
                    {cert.issuer}
                  </div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-tight leading-tight">
                    {cert.title}
                  </h4>
                </div>
                <div className="mt-4 flex">
                  <span className="px-2 py-0.5 text-[8px] font-mono font-bold tracking-widest border border-black group-hover:border-white uppercase">
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
