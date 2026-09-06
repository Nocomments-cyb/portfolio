import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                NC
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-tight">No Comment</p>
              <p className="text-xs text-slate-400 font-mono">I build ideas into products.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Workspace</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} No Comment. Engineered with React & Vite.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Night Workspace Sanctuary • Dubai Skyline</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
