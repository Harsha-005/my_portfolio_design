import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, CheckCircle, FileText, X, AlertTriangle, Eye } from 'lucide-react';
import { ProjectItem } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj1',
      title: 'Real Time Crime alert Application using ML and Geo-Location',
      subtitle: 'Neighborhood Safety Predictor',
      date: 'July 2025 – October 2025',
      description: 'Utilizes machine learning and geolocation to provide instant alerts on crime incidents in the user\'s vicinity. Designed to identify high-risk safety zones dynamically.',
      tags: ['PYTHON', 'ML', 'GEOLOCATION'],
      caseStudy: {
        challenge: 'Traditional crime databases rely on delayed, static reporting which fails to assist citizens actively in route planning. The objective was to ingest stream-based geo-coordinates and output real-time probability indices of safety violations.',
        solution: 'Built a lightweight spatial-temporal Random Forest predictor in Python, hosted on high-performance serverless runners. Integrated standard Leaflet wrappers and custom GIS boundaries to trigger localized push alerts with minimal network overhead.',
        results: [
          'Engineered model predicting temporal cluster anomalies with 89.2% recall rate.',
          'Under-50ms query processing time for dynamic mobile client updates.',
          'Successful client-side simulation showcasing safety-routed navigation paths.'
        ]
      }
    },
    {
      id: 'proj2',
      title: 'AI-Based Resume Screening and Candidate Ranking System',
      subtitle: 'Automated NLP Ranker',
      date: 'January 2025 – April 2025',
      description: 'Automated resume screening process using NLP to match candidates with job descriptions, enhancing recruitment efficiency through semantic search and custom score rankers.',
      tags: ['NLP', 'AI', 'COSINE SIMILARITY'],
      caseStudy: {
        challenge: 'Manual resume parsing and keyword-matching filters consistently fail due to non-standard resume formats and semantic synonyms (e.g., matching "Deep Learning" with "Neural Networks").',
        solution: 'Developed a custom parsing engine that strips text using native PDF libraries and generates dense semantic embeddings using Sentence-BERT. Applied cosine-similarity ranking against targeted job descriptions to return a rank-ordered candidate stack.',
        results: [
          'Reduced manual recruitment screening cycle duration by 72%.',
          'Eliminated keyword-stuffing bias by shifting metrics entirely to semantic context match.',
          'Supports multi-format uploading with automatic schema layout extraction.'
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#f8f8f8] relative overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 bg-editorial-dot-matrix opacity-20 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#1a1a1a]/50 mb-2 block">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-[#1a1a1a] uppercase tracking-tighter">
              Projects
            </h2>
            <div className="h-[2px] w-12 bg-black mt-4"></div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(projects[0])}
            className="px-5 py-2.5 text-xs font-sans font-bold tracking-widest uppercase border-2 border-black bg-white hover:bg-black hover:text-white text-black rounded-none cursor-pointer transition-all duration-300 shadow-[2px_2px_0px_#000] flex items-center gap-2"
          >
            <FileText size={13} />
            <span>Read Case Study</span>
          </motion.button>
        </div>

        {/* Project Cards Layout matches screenshots exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group bg-white border-2 border-black p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[6px_6px_0px_#1a1a1a] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest text-[#1a1a1a]/60 mb-4 pb-3 border-b border-black/10">
                  <span className="text-black font-bold uppercase">{proj.subtitle}</span>
                  <span>{proj.date}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#1a1a1a] uppercase tracking-tight group-hover:underline mb-3 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-serif">
                  {proj.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded-none border border-black bg-[#f8f8f8] text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="px-3 py-1.5 text-black hover:bg-black hover:text-white border border-black rounded-none transition-all cursor-pointer flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider"
                  title="View Case Study"
                >
                  <Eye size={12} />
                  <span>Specs</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white border-2 border-black p-6 sm:p-8 rounded-none shadow-[8px_8px_0px_#1a1a1a] overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 border border-black bg-white text-black hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <X size={14} />
              </button>

              {/* Title Block */}
              <div className="mb-6">
                <span className="text-[9px] font-mono tracking-widest text-white bg-black px-2 py-1 uppercase">
                  Detailed Case Study Specs
                </span>
                <h3 className="text-2xl font-black font-display text-black uppercase tracking-tight mt-4 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                  Timeline / Release &bull; {selectedProject.date}
                </p>
              </div>

              {/* Content Panels */}
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {/* Challenge */}
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-black mb-2 border-b-2 border-black pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    Challenge & Objectives
                  </h4>
                  <p className="text-slate-700 text-sm font-serif leading-relaxed">
                    {selectedProject.caseStudy?.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-black mb-2 border-b-2 border-black pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    Architecture & Implementation
                  </h4>
                  <p className="text-slate-700 text-sm font-serif leading-relaxed">
                    {selectedProject.caseStudy?.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-black mb-2 border-b-2 border-black pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    Quantitative Outcomes
                  </h4>
                  <ul className="space-y-2.5 font-serif">
                    {selectedProject.caseStudy?.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle size={15} className="text-black shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Panel */}
              <div className="mt-8 pt-4 border-t border-black/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[9px] font-mono rounded-none bg-black text-white font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-black hover:bg-black/85 text-white rounded-none text-xs font-bold font-sans uppercase tracking-widest cursor-pointer transition-all"
                >
                  Dismiss Specs
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
