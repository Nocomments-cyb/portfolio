import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../Icons';

export default function ProjectCard({ project, onInspect }) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 shadow-xl group">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300">
            {project.category}
          </span>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-cyan-400/90 text-sm font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.summary}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-1.5 pt-1">
          {project.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((t) => (
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
        <button
          onClick={() => onInspect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <span>Inspect Case Study</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Source Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
