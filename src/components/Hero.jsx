import React from 'react';
import { ArrowRight, Mail, Compass } from 'lucide-react';
import WorkspaceVisual from './WorkspaceVisual';
import { profileData } from '../data/profileData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/20 to-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction Text Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
          {/* Subtle Professional Status Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold tracking-wider uppercase">AVAILABLE FOR OPPORTUNITIES</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">{profileData.location}</span>
          </div>

          {/* Primary Headline & Catchphrase */}
          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              {profileData.roleTitle}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">
                {profileData.alias}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 tracking-tight">
              {profileData.tagline}
            </p>
          </div>

          {/* Concise Professional Descriptor */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-2xl mx-auto">
            {profileData.coreTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Supporting Narrative */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            I work across frontend interfaces, backend and data integration, product logic, and interactive web experiences—turning ideas into complete, reliable products.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Cinematic Workspace Visual Shell */}
        <div className="mt-4">
          <WorkspaceVisual />
        </div>
      </div>
    </section>
  );
}
