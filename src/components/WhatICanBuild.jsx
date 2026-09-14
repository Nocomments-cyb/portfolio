import React from 'react';
import {
  Globe,
  Rocket,
  Monitor,
  Sparkles,
  ShieldCheck,
  Radio,
  BarChart3,
  Database,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { capabilitiesData } from '../data/capabilitiesData';

export default function WhatICanBuild() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-indigo-400" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-rose-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background neon ambient highlight */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities // What I Can Build</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                What I Can Build For You
              </h2>
              <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
                I build complete, production-ready software solutions—from responsive client interfaces to secure database architectures and real-time features.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack Engineering</span>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {capabilitiesData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 mt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-400 text-[10px] sm:text-[11px]">{item.deliverable}</span>
                <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to Projects & Contact */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e1627]/90 to-slate-900/90 border border-slate-800/80 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>How We Work Together</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Direct technical communication, clear development milestones, clean version-controlled code, and products built to launch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <span>See Proven Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <span>Discuss a Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
