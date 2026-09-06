import React from 'react';
import { User, Terminal, Layers, Monitor, Rocket, Sparkles, Database, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  const getBuildIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-indigo-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <User className="w-3.5 h-3.5" />
            <span>02 // Mindset & Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Learning through building real projects, iterating on feedback, and engineering ideas into working software.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Developer Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p className="text-lg font-medium text-slate-200">
                I'm <span className="text-cyan-400 font-semibold">{profileData.alias}</span>, a frontend-focused product developer based in Dubai.
              </p>
              <p>
                My approach to software development is simple: <span className="text-white font-medium">I enjoy building products</span>. Rather than getting lost in endless theory or generic tutorial exercises, I learn by taking ambitious concepts—like the social discovery application <span className="text-white font-medium">VYBE</span> or the community platform <span className="text-white font-medium">Lost & Found</span>—and engineering them from blank canvas to functional web application.
              </p>
              <p>
                I care deeply about <span className="text-cyan-300 font-medium">user experience</span>. A solid application requires both disciplined frontend architecture (clean state, zero layout shift, accessibility) and visual craft (fluid transitions, aesthetic typography, responsive layouts).
              </p>
              <p>
                Whether working with React, modern build pipelines, or relational schemas on PostgreSQL, my focus is always on continuous iteration: <span className="text-white font-medium">build, test, refine, and improve</span>.
              </p>
            </div>

            {/* Compact "What I Build" Area */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                What I Build
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileData.whatIBuild.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-800/80">
                        {getBuildIcon(item.icon)}
                      </div>
                      <h4 className="text-xs font-bold text-white tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dossier */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700/80 bg-[#0c1220] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-semibold">developer_profile.json</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">● ACTIVE</span>
              </div>

              {/* JSON code block */}
              <div className="p-6 text-slate-300 space-y-2 bg-[#090e1a]/95 overflow-x-auto leading-relaxed text-[11px]">
                <div><span className="text-slate-500">&#123;</span></div>
                <div className="pl-4">
                  <span className="text-cyan-400">"alias"</span>: <span className="text-amber-300">"{profileData.alias}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"role"</span>: <span className="text-amber-300">"{profileData.roleDescriptor}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"location"</span>: <span className="text-amber-300">"{profileData.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"ethos"</span>: <span className="text-amber-300">"{profileData.tagline}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"{profileData.status}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"technologies"</span>: <span className="text-slate-500">[</span>
                  <div className="pl-4 text-emerald-300">
                    "React", "JavaScript", "Vite", "Supabase", "PostgreSQL"
                  </div>
                  <span className="text-slate-500">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"learning_approach"</span>: <span className="text-amber-300">"Build &rarr; Test &rarr; Iterate &rarr; Ship"</span>
                </div>
                <div><span className="text-slate-500">&#125;</span></div>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to projects & collaboration
                </span>
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                >
                  Contact &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
