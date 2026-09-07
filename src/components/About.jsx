import React from 'react';
import { User, Terminal, Layers, Monitor, Rocket, Sparkles, Database, Radio, CheckCircle2, Compass } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  const getBuildIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-indigo-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-rose-400" />;
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
            <span>02 // Background & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Turning concepts into working software through hands-on development, product intuition, and full-stack execution.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Developer Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p className="text-lg font-medium text-slate-200">
                I'm <span className="text-cyan-400 font-semibold">{profileData.alias}</span>, a <span className="text-white font-semibold">{profileData.roleTitle}</span> based in Dubai.
              </p>
              <p>
                What drives me is simple: <span className="text-white font-medium">turning ideas into working products</span>. Rather than getting lost in passive tutorials, my journey has been hands-on and self-directed—building complete applications from scratch, connecting frontend interfaces to live backend data layers, and refining them until every flow feels fluid and purposeful.
              </p>
              <p>
                I build across the stack—from <span className="text-cyan-300 font-medium">responsive frontend interfaces</span> and <span className="text-purple-300 font-medium">interactive 3D web experiences</span> to <span className="text-emerald-300 font-medium">backend data architecture</span> with Supabase and PostgreSQL. <span className="text-white font-semibold">I don't just design screens. I build working products</span>—focusing on clean component state, resilient relational schemas, defensive security rules, and reliable data flow.
              </p>
              <p>
                As an independent developer, I am comfortable learning new technologies and solving complex technical hurdles on my own. I approach engineering with a product mindset—focusing on practical architecture, edge cases, smooth performance, and atomic Git workflows.
              </p>
              <p className="text-sm sm:text-base text-slate-400 pt-1">
                I'm actively seeking <span className="text-cyan-400 font-medium">software development roles</span>, opportunities with <span className="text-slate-200 font-medium">product-focused teams</span>, and collaborations on ambitious MVPs where craftsmanship and shipping speed matter.
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
                  <span className="text-cyan-400">"role"</span>: <span className="text-amber-300">"{profileData.roleTitle}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"focus"</span>: <span className="text-amber-300">"Full-Stack Web Products • Interactive UX • Systems Architecture"</span>,
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
                  <span className="text-cyan-400">"core_stack"</span>: <span className="text-slate-500">[</span>
                  <div className="pl-4 text-emerald-300">
                    "React", "JavaScript", "Supabase", "PostgreSQL", "Three.js", "Tailwind CSS", "Vite"
                  </div>
                  <span className="text-slate-500">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">"engineering_approach"</span>: <span className="text-amber-300">"Discover &rarr; Build &rarr; Integrate &rarr; Refine &rarr; Ship"</span>
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

        {/* How I Work Section */}
        <div className="mt-20 pt-12 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>03 // Engineering Workflow</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            How I Work
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mb-8">
            A disciplined, product-focused engineering methodology from problem definition to production deployment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Step 1: DISCOVER */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">01 // DISCOVER</span>
                <Compass className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Understand the Problem</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deconstruct core requirements, define user journeys, and identify architectural constraints before writing code.
              </p>
            </div>

            {/* Step 2: BUILD */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">02 // BUILD</span>
                <Layers className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Design & Implement</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build clean, modular frontend interfaces and backend schemas designed for scalability and performance.
              </p>
            </div>

            {/* Step 3: INTEGRATE */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">03 // INTEGRATE</span>
                <Database className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Connect Data & APIs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wire frontend states to databases, real-time channels, auth providers, and defensive security policies.
              </p>
            </div>

            {/* Step 4: REFINE */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">04 // REFINE</span>
                <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Edge Cases & Polish</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Test mobile viewports, handle edge cases and error boundaries, optimize bundle size, and polish micro-interactions.
              </p>
            </div>

            {/* Step 5: SHIP */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">05 // SHIP</span>
                <Rocket className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Deploy & Iterate</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploy to production environments, verify live behavior across devices, and continuously iterate based on feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
