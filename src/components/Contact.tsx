import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle, ArrowUp, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f8f8] relative overflow-hidden border-t border-black">
      <div className="absolute inset-0 bg-editorial-dot-matrix opacity-20 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#1a1a1a]/50 mb-2 block">Correspondence</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-black uppercase tracking-tighter mb-4">
            Get In Touch
          </h2>
          <div className="h-[2px] w-12 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-4xl mx-auto items-stretch">
          {/* Left Block: Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex flex-col justify-between bg-white border-2 border-black p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_#1a1a1a]"
          >
            <div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider text-black mb-4">
                Collaborate
              </h3>
              <p className="text-slate-700 text-sm font-serif leading-relaxed mb-8">
                I am actively seeking roles in AI, Data Science, and Machine Learning. If you have an exciting project, research, or job opening, let's connect!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rharsha0005@gmail.com"
                  className="flex items-center gap-3 text-black hover:underline text-sm font-bold font-sans transition-colors group"
                >
                  <div className="p-2 bg-[#f8f8f8] border border-black group-hover:bg-black group-hover:text-white transition-all">
                    <Mail size={14} />
                  </div>
                  <span>rharsha0005@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-12 pt-6 border-t border-black/10">
              <span className="text-[10px] font-mono tracking-widest text-[#1a1a1a]/50 uppercase block mb-4">
                Connect on Social Channels
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/harshavardhan-ravula-a58430326/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-2.5 bg-white hover:bg-black border-2 border-black text-black hover:text-white transition-all shadow-[2px_2px_0px_#000] cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-2.5 bg-white hover:bg-black border-2 border-black text-black hover:text-white transition-all shadow-[2px_2px_0px_#000] cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="bg-white border-2 border-black p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_#1a1a1a] relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans font-bold tracking-widest text-black uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white border-2 border-black text-black text-sm px-4 py-3 rounded-none focus:outline-none focus:bg-[#f8f8f8] transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-sans font-bold tracking-widest text-black uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white border-2 border-black text-black text-sm px-4 py-3 rounded-none focus:outline-none focus:bg-[#f8f8f8] transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-bold tracking-widest text-black uppercase mb-2">
                    Brief Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Harshavardhan, I'd like to talk about..."
                    className="w-full bg-white border-2 border-black text-black text-sm px-4 py-3 rounded-none focus:outline-none focus:bg-[#f8f8f8] transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-black hover:bg-black/90 disabled:bg-neutral-300 disabled:text-neutral-500 text-white font-bold font-sans uppercase tracking-widest rounded-none flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 rounded-none border-2 border-white border-t-transparent animate-spin"></span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white border-2 border-black flex flex-col items-center justify-center p-6 text-center z-10"
                  >
                    <div className="p-3 bg-[#f8f8f8] border border-black mb-4">
                      <CheckCircle className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-lg font-bold font-sans uppercase tracking-wide text-black mb-2">Transmission Successful</h4>
                    <p className="text-slate-700 text-xs font-serif max-w-xs mb-6">
                      Thank you! Your message has been routed directly to my workspace. I'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white text-xs font-bold font-sans uppercase tracking-wider rounded-none cursor-pointer transition-all"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer info matching screenshot layout precisely */}
        <div className="mt-24 pt-8 border-t border-black flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-black/60 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Sparkles size={11} className="text-black" />
            <span>rharsha0005@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <span>&copy; 2026 Harsha. Archive release.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 border border-black bg-white hover:bg-black text-black hover:text-white transition-all cursor-pointer rounded-none"
              title="Return to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
