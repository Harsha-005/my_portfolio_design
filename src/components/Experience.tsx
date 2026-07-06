import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';
import { ExperienceItem } from '../types';

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 'exp1',
      title: 'GEN AI Intern',
      period: 'JAN 2025 – APR 2025',
      location: 'NeubAItics Reseach Hub',
      description: 'Worked as a Generative AI Intern focusing on analyzing professional diary patterns and developing smart recommendation features:',
      bullets: [
        'Analyzed user data to identify behavioral patterns and generate actionable insights.',
        'Developed personalized recommendation solutions to enhance user engagement and satisfaction.',
        'Created interactive dashboards and reports for data visualization and decision-making.',
        'Collaborated with teams to deliver customer-focused solutions and improve user experience.'
      ],
      tags: ['GEN AI', 'NLP', 'PYTHON', 'RECOMMENDER SYSTEMS']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#f8f8f8] relative overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 bg-editorial-dot-matrix opacity-20 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#1a1a1a]/50 mb-2 block">Professional History</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-[#1a1a1a] uppercase tracking-tighter mb-4">
            Experience
          </h2>
          <div className="h-[2px] w-12 bg-black mx-auto"></div>
        </motion.div>

        {/* Experience Cards Layout: bold borders, no rounded corners */}
        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group bg-white border-2 border-black p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[6px_6px_0px_#1a1a1a] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dates display with a bold index like "01." from the editorial layout */}
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest text-[#1a1a1a]/60 mb-6 pb-3 border-b border-black/10">
                  <span className="flex items-center gap-1.5 uppercase font-bold text-black">
                    <span className="text-black font-sans text-xs">0{idx + 1}.</span>
                    {exp.period.split(/\s*[-–—]\s*/)[0]}
                  </span>
                  <span className="bg-black text-white px-2 py-0.5 text-[9px] tracking-wider uppercase font-bold">
                    {exp.period.split(/\s*[-–—]\s*/)[1] || 'Present'}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#1a1a1a] uppercase tracking-tight group-hover:underline mb-2 leading-tight">
                  {exp.title}
                </h3>

                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                  <Briefcase size={11} className="text-black/50" />
                  <span>{exp.location}</span>
                </p>

                <p className="text-slate-700 text-sm leading-relaxed mb-4 font-serif">
                  {exp.description}
                </p>

                {exp.bullets && (
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-700 text-sm font-serif">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tags block: Editorial pill style */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded-none border border-black bg-white text-black group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
