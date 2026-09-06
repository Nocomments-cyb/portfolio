import React from 'react';
import { Cpu, CheckCircle2, Code2, Database, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend Engineering':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Backend & Data Architecture':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Build Systems & Workflows':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills & Core Capabilities
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Curated toolkit for crafting robust web architectures, fluid interfaces, and responsive product experiences.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {skillsData.map((categoryGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              {/* Category Subheading */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {categoryGroup.description}
                  </p>
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800/90 relative group overflow-hidden"
                  >
                    {/* Top row: Name & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-cyan-400/90 font-medium">
                          {skill.highlight}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {skill.level}
                      </span>
                    </div>

                    {/* Focus Description */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.focus}
                    </p>

                    {/* Subtle bottom indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified In Production
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Design & Quality Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e1627]/90 to-slate-900/90 border border-slate-800/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Zero Compromise on Responsiveness & Performance
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Every layout is thoroughly stress-tested across mobile, tablet, laptop, and ultra-wide 4K viewports.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors whitespace-nowrap"
          >
            Inspect Tested Projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
