import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink, ArrowUpRight, ShieldCheck, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from '../Icons';
import ProjectPreview from './ProjectPreview';

export default function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl border border-slate-700/80 bg-[#0c1220] shadow-2xl p-6 sm:p-8 md:p-10 my-8 overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8 mt-6">
          {/* Header Title & Tagline */}
          <div>
            <h3 id="case-study-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-cyan-400/90 font-medium mt-2 leading-relaxed">
              {project.tagline}
            </p>
            {project.whatItIs && (
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-1">Overview</span>
                {project.whatItIs}
              </p>
            )}
          </div>

          {/* Dedicated Visual Preview */}
          <div>
            <ProjectPreview project={project} />
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> The Problem
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Engineering Approach
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* What I Personally Built & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> What I Personally Built
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Architecture & Data Flow
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </div>

          {/* Core Highlights List */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Highlights & Verified Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Technologies & Toolchain
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Relevant Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all shadow-md cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : null}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Repository</span>
                </a>
              ) : null}

              {!project.demoUrl && !project.githubUrl && (
                <span className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {project.statusExplanation || 'Code & walkthrough available upon request'}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={onClose}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Inquire about this project &rarr;
              </a>
              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
