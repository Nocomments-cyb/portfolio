import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, CheckCircle, Clock, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: Format message for clipboard / direct dispatch
    const formattedSummary = `Sender: ${formData.name} <${formData.email}>\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedSummary).catch(() => {});
    }
    setSubmitted(true);
  };

  const handleCopy = () => {
    const formattedSummary = `Sender: ${formData.name} <${formData.email}>\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedSummary).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
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
            Let's build something.
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Inviting inquiries from employers, clients, and technical teams looking for a dedicated full-stack developer and product builder.
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
                  {profileData.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Ready to contribute to your engineering goals.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you are hiring for a full-stack engineering role, building an end-to-end web application, or need a developer who turns ideas into working software—feel free to reach out.
              </p>

              {/* Location & Timezone */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profileData.location} ({profileData.locationDetail})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{profileData.timezone}</span>
                </div>
              </div>
            </div>

            {/* Professional Channels Area */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Direct Channels & Profiles
              </h4>

              <div className="space-y-3">
                {profileData.socials.email ? (
                  <a
                    href={`mailto:${profileData.socials.email}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono">{profileData.socials.email}</span>
                    </div>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-400 font-mono flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct Inquiries: Use the transmission form</span>
                  </div>
                )}

                {profileData.socials.github ? (
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-mono">GitHub Profile</span>
                    </div>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-400 font-mono flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>GitHub: Configured via profileData.js</span>
                  </div>
                )}

                {profileData.socials.linkedin ? (
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-mono">LinkedIn Profile</span>
                    </div>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-700/80 bg-[#0c1220]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-8 space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">Message Prepared</h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message text has been formatted and copied to your clipboard.
                    </p>
                  </div>

                  {/* Message Preview Quote */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-400 space-y-1">
                    <div className="text-slate-500">Subject: {formData.subject || 'Portfolio Inquiry'}</div>
                    <div className="text-slate-300 pt-1">"{formData.message}"</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Again' : 'Copy Message'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Compose Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
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
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
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
                      placeholder="Project collaboration / Engineering opportunity"
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
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
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
