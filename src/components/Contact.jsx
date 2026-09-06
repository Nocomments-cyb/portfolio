import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, CheckCircle, ArrowUpRight, Clock } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>04 // Communications Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Have an idea to build, a team looking for an engineer, or a project that needs technical direction? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-[#0e1627] to-[#090d16] p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Availability Status
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Ready to engineer your next flagship product.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need full-stack development, modern web architecture with React & Supabase, or turning a vision into a shipped product—reach out anytime.
              </p>

              {/* Location & Timezone specs */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dubai, United Arab Emirates (Open to Global Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Gulf Standard Time • UTC+4</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Direct Channels & Profiles
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:contact@nocomment.dev"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono">contact@nocomment.dev</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-mono">github.com/nocomment</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-700/80 bg-[#0c1220]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been logged. I'll get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration / Engineering role"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product vision, timeline, or engineering goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
