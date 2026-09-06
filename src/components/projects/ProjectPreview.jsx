import React from 'react';
import { Layers, Image as ImageIcon, ExternalLink, Sparkles } from 'lucide-react';

export default function ProjectPreview({ project }) {
  const isFlagship = project.id === 'vybe';

  return (
    <div className="relative rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden group">
      {/* Browser Window Chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-1">
          <span className="text-emerald-400">https://</span>
          <span>{project.id}.local</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Neutral Project Preview Area */}
      <div className="p-6 bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#070b14] min-h-[280px] sm:min-h-[320px] flex flex-col justify-between relative overflow-hidden">
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

        {/* Top Wireframe / Component Outline */}
        <div className="relative z-10 bg-slate-900/80 border border-slate-800 rounded-xl p-4 backdrop-blur-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs font-mono">
                {project.title.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-semibold text-white tracking-tight">{project.title}</div>
                <div className="text-[10px] text-slate-400 font-mono">{project.category}</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              {project.status}
            </span>
          </div>

          {/* Wireframe UI blocks */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="h-14 bg-slate-950/60 rounded-lg border border-slate-800/80 p-2 flex flex-col justify-between">
              <span className="w-8 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-14 h-2 rounded-full bg-cyan-500/40"></span>
            </div>
            <div className="h-14 bg-slate-950/60 rounded-lg border border-slate-800/80 p-2 flex flex-col justify-between">
              <span className="w-10 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-12 h-2 rounded-full bg-indigo-500/40"></span>
            </div>
            <div className="h-14 bg-slate-950/60 rounded-lg border border-slate-800/80 p-2 flex flex-col justify-between">
              <span className="w-6 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-10 h-2 rounded-full bg-emerald-500/40"></span>
            </div>
          </div>
        </div>

        {/* Technical Metadata Bar */}
        <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
          <div className="bg-slate-900/60 border border-slate-800 p-2 rounded-lg">
            <div className="text-[10px] text-slate-500 uppercase">Architecture</div>
            <div className="font-semibold text-cyan-300 text-xs">Modular React</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-2 rounded-lg">
            <div className="text-[10px] text-slate-500 uppercase">State Engine</div>
            <div className="font-semibold text-indigo-300 text-xs">Custom Hooks</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-2 rounded-lg col-span-2 sm:col-span-1">
            <div className="text-[10px] text-slate-500 uppercase">Responsive</div>
            <div className="font-semibold text-emerald-300 text-xs">Mobile First</div>
          </div>
        </div>

        {/* Honest Placeholder Notice */}
        <div className="relative z-10 mt-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-[10px] font-mono text-slate-400">
            <ImageIcon className="w-3 h-3 text-cyan-400" />
            <span>{project.previewNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
