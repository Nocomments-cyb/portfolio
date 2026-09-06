import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const vybeProject = projectsData.find((p) => p.id === 'vybe');
  const otherProjects = projectsData.filter((p) => p.id !== 'vybe');

  return (
    <section id="projects" className="py-24 relative">
      {/* Background neon ambient highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>01 // Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
                Engineering ideas into polished digital applications. Tested for speed, responsiveness, and clean architecture.
              </p>
            </div>
            
            {/* Quick Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active Deployments Ready</span>
            </div>
          </div>
        </div>

        {/* 1. Flagship Presentation Area: VYBE */}
        {vybeProject && (
          <div className="mb-16">
            <div className="relative rounded-3xl border border-slate-700/80 bg-gradient-to-b from-[#111728]/90 to-[#0b0f1a]/95 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Glow Accent */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      {vybeProject.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                      {vybeProject.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      {vybeProject.title}
                    </h3>
                    <p className="text-cyan-400/90 font-medium text-base sm:text-lg mt-1">
                      {vybeProject.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {vybeProject.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Architecture Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {vybeProject.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {vybeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/50 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Live Demo & GitHub */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <a
                      href={vybeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/25 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={vybeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Polished Mockup / Screenshot Presentation Area */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden group/screen">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-1">
                        <span className="text-emerald-400">https://</span>
                        <span>vybe-app.local</span>
                      </div>
                      <div className="w-10"></div>
                    </div>

                    {/* Screenshot / Visual Showcase Viewport */}
                    <div className="p-6 bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#070b14] min-h-[340px] flex flex-col justify-between relative overflow-hidden">
                      {/* Background UI Grid & Glow */}
                      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                      {/* Mockup Header Card */}
                      <div className="relative z-10 bg-slate-900/80 border border-slate-800 rounded-xl p-4 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                              V
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white">VYBE Experience Engine</div>
                              <div className="text-[10px] text-slate-400">Real-time Social Audio & Discovery</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                            ONLINE
                          </span>
                        </div>

                        {/* Visual Pulse Bars / Waveform Placeholder */}
                        <div className="flex items-end gap-1.5 h-12 py-1 px-2 bg-slate-950/60 rounded-lg border border-slate-800/80">
                          {[40, 65, 85, 30, 95, 55, 75, 45, 90, 60, 35, 70, 80, 50, 65, 85].map((val, i) => (
                            <div
                              key={i}
                              style={{ height: `${val}%` }}
                              className="flex-1 bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-sm opacity-80"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Mockup Bottom Status Bar */}
                      <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        <div className="bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">Framework</div>
                          <div className="font-semibold text-cyan-300">React + Vite</div>
                        </div>
                        <div className="bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">Database</div>
                          <div className="font-semibold text-indigo-300">Supabase SQL</div>
                        </div>
                        <div className="bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">Latency</div>
                          <div className="font-semibold text-emerald-300">&lt; 24ms</div>
                        </div>
                      </div>

                      {/* Screenshot placeholder watermark */}
                      <div className="mt-4 text-center">
                        <span className="text-[11px] font-mono text-slate-400 inline-flex items-center gap-1.5 bg-slate-900/40 px-3 py-1 rounded-full border border-slate-800/60">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          Product Screenshot & Showcase Space
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Additional Project Cards: Lost & Found, Future Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                      project.statusColor === 'amber'
                        ? 'bg-amber-950/40 text-amber-300 border-amber-500/30'
                        : 'bg-purple-950/40 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400/90 text-sm font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-500">
                  {project.status}
                </span>

                <div className="flex items-center gap-2">
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    title="Source Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
