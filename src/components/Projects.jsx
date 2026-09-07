import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, Compass, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';
import ProjectCard from './projects/ProjectCard';
import ProjectPreview from './projects/ProjectPreview';
import ProjectDetails from './projects/ProjectDetails';

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const vybeProject = projectsData.find((p) => p.id === 'vybe');
  const otherProjects = projectsData.filter((p) => p.id !== 'vybe');

  return (
    <section id="projects" className="py-24 relative">
      {/* Background neon ambient highlights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>01 // Selected Work & Case Studies</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
                Real software applications built from architecture to polished interfaces. Tested for responsiveness, clean state, and user clarity.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Production-Grade Architecture</span>
            </div>
          </div>
        </div>

        {/* 1. Flagship Presentation Area: VYBE */}
        {vybeProject && (
          <div className="mb-16">
            <div className="relative rounded-3xl border border-slate-700/80 bg-gradient-to-b from-[#111728]/95 to-[#0b0f1a]/95 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Flagship Case Overview */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono">
                      {vybeProject.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                      {vybeProject.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {vybeProject.title}
                    </h3>
                    <p className="text-cyan-400/90 font-medium text-base sm:text-lg mt-1.5 leading-snug">
                      "{vybeProject.tagline}"
                    </p>
                  </div>

                  {/* Problem & Approach Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                      <span className="text-[11px] font-mono text-rose-400 uppercase font-semibold flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> Problem
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {vybeProject.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase font-semibold flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" /> Approach
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {vybeProject.approach}
                      </p>
                    </div>
                  </div>

                  {/* Built Across the Stack Callout */}
                  {vybeProject.builtAcrossTheStack && (
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900/60 border border-cyan-500/30 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                          Built Across the Stack
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {vybeProject.builtAcrossTheStack}
                      </p>
                    </div>
                  )}

                  {/* Key Features */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {vybeProject.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-2">
                      {vybeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/50 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedCaseStudy(vybeProject)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-500/25 transition-all cursor-pointer"
                    >
                      <span>Inspect Full Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {vybeProject.demoUrl && (
                      <a
                        href={vybeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {vybeProject.githubUrl && (
                      <a
                        href={vybeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    )}

                    {!vybeProject.demoUrl && !vybeProject.githubUrl && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-900/90 px-3.5 py-2.5 rounded-xl border border-slate-800/80">
                        Private codebase // Walkthrough on request
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Dedicated Visual Preview Frame */}
                <div className="lg:col-span-6">
                  <ProjectPreview project={vybeProject} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Additional Project Cards (Lost & Found, Future Projects / R&D Lab) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={setSelectedCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCaseStudy && (
        <ProjectDetails
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
