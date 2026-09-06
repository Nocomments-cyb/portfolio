import React from 'react';
import { X, ArrowDown, MapPin, Monitor, Terminal, Headphones, User, ArrowRight } from 'lucide-react';

export default function SceneHUD({
  selectedObject,
  setSelectedObject,
  hoveredObject,
  onNavigateToProjects,
  onNavigateToAbout,
  onNavigateToContact
}) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-3 sm:p-4 font-mono select-none">
      {/* --- TOP HUD STATUS BAR --- */}
      <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 bg-[#080d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 font-semibold tracking-wider">NO COMMENT // 3D WORKSPACE</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-cyan-400 hidden sm:inline">SYSTEM ONLINE</span>
        </div>

        <div className="flex items-center gap-2 bg-[#080d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-300">
          <span className="text-slate-500">LOC:</span>
          <span className="text-cyan-300">DUBAI / UAE</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-slate-400 hidden md:inline">25.2048° N, 55.2708° E</span>
        </div>
      </div>

      {/* --- CENTER / INTERACTIVE OBJECT HUD MODAL --- */}
      {selectedObject && (
        <div className="pointer-events-auto max-w-sm sm:max-w-md mx-auto my-auto w-full px-2">
          <div className="rounded-2xl border border-cyan-500/35 bg-[#070c17]/95 backdrop-blur-xl p-5 shadow-2xl shadow-cyan-950/70 transition-all transform animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 tracking-wider">
                {selectedObject === 'monitor' && <Monitor className="w-4 h-4 text-cyan-400" />}
                {selectedObject === 'window' && <MapPin className="w-4 h-4 text-cyan-400" />}
                {selectedObject === 'developer' && <User className="w-4 h-4 text-purple-400" />}
                {(selectedObject === 'keyboard' || selectedObject === 'desk') && (
                  <Terminal className="w-4 h-4 text-emerald-400" />
                )}
                {selectedObject === 'headphones' && <Headphones className="w-4 h-4 text-indigo-400" />}
                <span className="uppercase tracking-widest">
                  {selectedObject === 'monitor' && 'DISPLAY MATRIX'}
                  {selectedObject === 'window' && 'LOCATION'}
                  {selectedObject === 'developer' && 'DEVELOPER DOSSIER'}
                  {(selectedObject === 'keyboard' || selectedObject === 'desk') && 'DEVELOPMENT MODE'}
                  {selectedObject === 'headphones' && 'FLOW STATE'}
                </span>
              </div>
              <button
                onClick={() => setSelectedObject(null)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Specific Content */}
            {selectedObject === 'monitor' && (
              <div className="py-3 space-y-2 text-xs">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                  PROJECT WORKSPACE
                </div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">ACTIVE PROJECT</span>
                    <span className="text-sm font-bold text-white">VYBE</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">STATUS</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ONLINE
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] text-slate-500 uppercase block">STACK</span>
                  <span className="text-xs font-mono text-cyan-300">React • Supabase • PostgreSQL</span>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToProjects();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ VIEW PROJECT ]</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {(selectedObject === 'keyboard' || selectedObject === 'desk') && (
              <div className="py-3 space-y-2 text-xs">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  BUILDING PRODUCTS
                </h4>
                <p className="text-xs text-cyan-300 font-mono">
                  ONE IDEA AT A TIME.
                </p>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-slate-400">SYSTEM STATUS:</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
                  Prototyping, full-stack state design, and responsive product engineering.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToContact();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ GET IN TOUCH ]</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'headphones' && (
              <div className="py-3 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span>ACTIVE // NO DISTRACTIONS</span>
                </div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans pt-1">
                  Acoustic studio isolation enabled for deep problem solving, database schema design, and clean component execution.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToProjects();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ VIEW PROJECTS ]</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'window' && (
              <div className="py-3 space-y-1.5 text-xs font-mono">
                <div className="text-base font-bold text-white">DUBAI</div>
                <div className="text-xs text-cyan-300 font-semibold">UNITED ARAB EMIRATES</div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <div className="space-y-1 text-slate-300 text-[11px] pt-1">
                  <div>25.2048° N</div>
                  <div>55.2708° E</div>
                  <div className="text-indigo-300 pt-1">GST • UTC +4</div>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToAbout();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ VIEW ABOUT ME ]</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'developer' && (
              <div className="py-3 space-y-2 text-xs">
                <div className="text-base font-bold text-white">NO COMMENT</div>
                <div className="text-xs text-purple-300 font-semibold">CREATIVE PRODUCT ENGINEER</div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-xs text-slate-300 font-sans italic">
                  "I build ideas into products."
                </p>
                <div className="text-[11px] text-slate-400">
                  Dubai, UAE • Available for high-impact projects
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToAbout();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ READ ABOUT ME ]</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- BOTTOM HUD CONTROLS & OBJECT SELECTORS --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2">
        {/* Hover / Object Status Badge */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-[#080d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>INTERACT:</span>
          <span className="text-white font-semibold uppercase">
            {hoveredObject ? hoveredObject : 'EXPLORE WORKSPACE'}
          </span>
        </div>

        {/* Accessible Quick Selectors */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-1 bg-[#080d19]/85 backdrop-blur-md p-1 rounded-lg border border-slate-800 text-[10px]">
          <button
            onClick={() => setSelectedObject('monitor')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'monitor'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-cyan-300'
            }`}
          >
            [Monitors]
          </button>
          <button
            onClick={() => setSelectedObject('window')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'window'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-cyan-300'
            }`}
          >
            [Dubai Skyline]
          </button>
          <button
            onClick={() => setSelectedObject('developer')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'developer'
                ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-purple-300'
            }`}
          >
            [Developer]
          </button>
          <button
            onClick={() => setSelectedObject('keyboard')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'keyboard'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-emerald-300'
            }`}
          >
            [Desk Rig]
          </button>
          <button
            onClick={() => setSelectedObject('headphones')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'headphones'
                ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
            }`}
          >
            [Headphones]
          </button>
        </div>
      </div>
    </div>
  );
}
