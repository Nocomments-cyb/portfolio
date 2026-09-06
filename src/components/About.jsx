import React from 'react';
import { User, Code2, Cpu, Rocket, ShieldCheck, Terminal, Compass, Laptop } from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      title: 'Ideas into Products',
      description:
        'I do not just write code; I transform abstract ideas and wireframes into fully functional, accessible, and market-ready products.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: 'Architectural Discipline',
      description:
        'Fast page loads, modular component structures, and predictable relational database schemas form the backbone of everything I build.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: 'Cinematic Visual Standards',
      description:
        'Every pixel, transition, and layout is tuned for modern dark-mode aesthetics, responsive clarity, and fluid interactivity.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <User className="w-3.5 h-3.5" />
            <span>02 // Developer Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Driven by curiosity, craft, and the relentless urge to build memorable digital products.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p className="text-lg font-medium text-slate-200">
                Known in the development space as{' '}
                <span className="text-cyan-400 font-semibold">No Comment</span>, I am a creative software engineer and product builder currently based against the night skyline of Dubai.
              </p>
              <p>
                My passion lies at the intersection of cinematic design and rigorous engineering. While many developers specialize only in isolated UI components or backend endpoints, my focus has always been the entire lifecycle of a product—from inception and database schema design all the way to responsive polish and user deployment.
              </p>
              <p>
                Whether architecting social applications like <span className="text-white font-medium">VYBE</span>, building community platforms like <span className="text-white font-medium">Lost & Found</span>, or prototyping future interactive canvas interfaces, I believe in building software that is as enjoyable to interact with as it is solid under the hood.
              </p>
            </div>

            {/* Core Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-4 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center mb-3">
                    {principle.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Terminal Dossier */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700/80 bg-[#0c1220] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-semibold">developer_profile.json</span>
                </div>
                <span className="text-[10px] text-slate-500">UTF-8</span>
              </div>

              {/* JSON code block */}
              <div className="p-6 text-slate-300 space-y-2 bg-[#090e1a]/95 overflow-x-auto leading-relaxed">
                <div><span className="text-slate-500">&#123;</span></div>
                <div className="pl-4">
                  <span className="text-cyan-400">"alias"</span>: <span className="text-amber-300">"No Comment"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"role"</span>: <span className="text-amber-300">"Product Engineer & Creative Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"base"</span>: <span className="text-amber-300">"Dubai, UAE"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"ethos"</span>: <span className="text-amber-300">"I build ideas into products."</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"core_stack"</span>: <span className="text-slate-500">[</span>
                  <div className="pl-4 text-emerald-300">
                    "React", "JavaScript", "Vite", "Supabase", "PostgreSQL"
                  </div>
                  <span className="text-slate-500">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"focus"</span>: <span className="text-amber-300">"Full-Stack Web Applications & Modern UI"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"Open for High-Impact Projects"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"coffee_consumed"</span>: <span className="text-purple-400">&infin;</span>
                </div>
                <div><span className="text-slate-500">&#125;</span></div>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to collaborate
                </span>
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                >
                  Initiate contact &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
