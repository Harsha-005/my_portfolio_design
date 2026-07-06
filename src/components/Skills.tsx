import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Brain, FileSearch, MessageSquareCode, Zap, Workflow, Bot } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: 'Python', icon: <Code2 className="w-5 h-5 text-black" /> },
    { name: 'SQL', icon: <Database className="w-5 h-5 text-black" /> },
    { name: 'ML', icon: <Brain className="w-5 h-5 text-black" /> },
    { name: 'RAG', icon: <FileSearch className="w-5 h-5 text-black" /> },
    { name: 'NLP', icon: <MessageSquareCode className="w-5 h-5 text-black" /> },
  ];

  const toolsSkills = [
    { name: 'Zapier', icon: <Zap className="w-5 h-5 text-black" /> },
    { name: 'n8n', icon: <Workflow className="w-5 h-5 text-black" /> },
    { name: 'AI Agents', icon: <Bot className="w-5 h-5 text-black" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-[#f8f8f8] relative overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 bg-editorial-dot-matrix opacity-20 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#1a1a1a]/50 mb-2 block">Competencies</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-[#1a1a1a] uppercase tracking-tighter mb-4">
            Skills
          </h2>
          <div className="h-[2px] w-12 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Technical Skills Category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="mb-8 font-sans">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-base font-black uppercase tracking-wider text-black">
                  Technical Skills
                </h3>
                <span className="text-xs font-mono font-bold text-black">90%</span>
              </div>
              {/* Custom flat editorial progress bar with zero rounding */}
              <div className="h-2 w-full bg-black/10 rounded-none overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-black rounded-none"
                />
              </div>
            </div>

            {/* Icons Grid with labels underneath */}
            <div className="grid grid-cols-5 gap-4 mt-4 font-sans">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-12 h-12 rounded-none bg-white border border-black/20 hover:border-black flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000] group-hover:shadow-[3px_3px_0px_#000] transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#1a1a1a]/70 group-hover:text-black transition-colors text-center font-bold uppercase">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Automation Category */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="mb-8 font-sans">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-base font-black uppercase tracking-wider text-black">
                  Tools & Automation
                </h3>
                <span className="text-xs font-mono font-bold text-black">85%</span>
              </div>
              {/* Custom flat editorial progress bar with zero rounding */}
              <div className="h-2 w-full bg-black/10 rounded-none overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-black rounded-none"
                />
              </div>
            </div>

            {/* Icons Grid with labels underneath (Zapier, n8n, AI Agents) */}
            <div className="grid grid-cols-3 gap-6 mt-4 max-w-[320px] mx-auto md:mx-0 font-sans">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-12 h-12 rounded-none bg-white border border-black/20 hover:border-black flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000] group-hover:shadow-[3px_3px_0px_#000] transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#1a1a1a]/70 group-hover:text-black transition-colors text-center font-bold uppercase">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
