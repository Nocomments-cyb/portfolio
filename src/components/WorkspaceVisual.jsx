import React, { useState } from 'react';
import { Terminal, Monitor, Sparkles, MapPin, Headphones, Cpu, Code2, Box, Image as ImageIcon } from 'lucide-react';
import DeveloperScene from './3d/DeveloperScene';
import workspaceImg from '../assets/developer_workspace.jpg';

/**
 * WorkspaceVisual Component (Stage 2 Upgraded)
 * 
 * Houses the real interactive 3D cinematic developer environment
 * powered by Three.js and React Three Fiber.
 * Retains the photo reference and diagnostic telemetry modes.
 */
export default function WorkspaceVisual() {
  const [activeTab, setActiveTab] = useState('3d'); // '3d' | 'photo' | 'telemetry'
  const [showHotspots, setShowHotspots] = useState(true);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-600/30 to-purple-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container */}
      <div 
        id="interactive-scene-root"
        data-stage="stage-2-3d"
        className="relative rounded-2xl md:rounded-3xl border border-slate-700/80 bg-[#0c1220]/95 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Top Control Bar / Futuristic HUD Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-950/70 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-semibold tracking-wide">
              {activeTab === '3d' ? '3D CINEMATIC WORKSPACE // ACTIVE' : 'DEV_STATION // ARCHIVE'}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400 text-[11px]">
              <MapPin className="w-3 h-3 text-cyan-400" /> Dubai, UAE
            </span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            {activeTab === 'photo' && (
              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors border ${
                  showHotspots
                    ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {showHotspots ? 'HUD: ON' : 'HUD: OFF'}
              </button>
            )}

            <div className="flex bg-slate-900/90 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setActiveTab('3d')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeTab === '3d'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Box className="w-3 h-3 text-cyan-400" />
                <span>3D Scene</span>
              </button>

              <button
                onClick={() => setActiveTab('photo')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeTab === 'photo'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3 h-3 text-indigo-400" />
                <span>Photo</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>Telemetry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Viewport Content */}
        {activeTab === '3d' && (
          <div className="relative w-full">
            <DeveloperScene />
          </div>
        )}

        {activeTab === 'photo' && (
          <div className="relative min-h-[420px] xs:min-h-[460px] sm:min-h-0 aspect-[4/3] xs:aspect-[1/1] sm:aspect-[16/9] w-full overflow-hidden group">
            <img
              src={workspaceImg}
              alt="Young Black male developer working at dual monitors in a futuristic workspace with Dubai skyline at night"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#090d16] via-transparent to-black/20" />

            {showHotspots && (
              <>
                <div className="absolute top-[20%] right-[16%] hidden md:flex items-center gap-2 group/spot cursor-default">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-cyan-400/20 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50" />
                  </div>
                  <div className="opacity-80 group-hover/spot:opacity-100 bg-[#0b101d]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 text-[11px] font-mono text-cyan-200 shadow-xl transition-all">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Burj Khalifa Skyline
                    </p>
                    <p className="text-[10px] text-cyan-400/80">Dubai Night Vista</p>
                  </div>
                </div>

                <div className="absolute top-[42%] left-[36%] hidden sm:flex items-center gap-2 group/spot cursor-default">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-indigo-400/20 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-md shadow-indigo-400/50" />
                  </div>
                  <div className="opacity-80 group-hover/spot:opacity-100 bg-[#0b101d]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-500/30 text-[11px] font-mono text-indigo-200 shadow-xl transition-all">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <Code2 className="w-3 h-3 text-indigo-400" />
                      Code Architecture
                    </p>
                    <p className="text-[10px] text-indigo-300/80">React • Vite • Supabase</p>
                  </div>
                </div>
              </>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-[#090d16]/85 backdrop-blur-md border border-slate-700/60 rounded-xl px-3.5 py-1.5 flex items-center gap-2.5 shadow-lg">
                <span className="text-xs font-mono text-slate-300">
                  <span className="text-indigo-400 font-semibold">Reference Mode:</span> High-Fidelity Render
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="p-6 sm:p-8 bg-[#0a0f1d] font-mono text-xs text-slate-300 min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold uppercase tracking-wider">
                    Workspace Diagnostics & 3D WebGL Pipeline
                  </span>
                </div>
                <span className="text-slate-500">STAGE_2 // LIVE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-cyan-400" /> 3D Scene Architecture
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-slate-500">Engine:</span> Three.js + React Three Fiber + Drei</p>
                    <p><span className="text-slate-500">Skyline:</span> Procedural Burj Khalifa & Dubai High-Rises</p>
                    <p><span className="text-slate-500">Displays:</span> High-Res Dynamic Canvas Textures (Code + Bash)</p>
                    <p><span className="text-slate-500">Camera:</span> Cinematic Parallax with Damping & Reduced Motion</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Performance & Optimization
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-slate-500">DPR:</span> Capped [1, 1.5] for Smooth Framerates</p>
                    <p><span className="text-slate-500">Mobile:</span> Motion Scaled & Touch Friendly</p>
                    <p><span className="text-slate-500">Fallback:</span> Graceful WebGL Degradation Included</p>
                    <p><span className="text-slate-500">Interactions:</span> Hotspots on Monitors, Window, Desk, Audio</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-slate-400">
                <p className="text-[11px]">
                  <span className="text-emerald-400 font-semibold">$ status --summary:</span> Real 3D Cinematic Workspace operational. All interactive meshes and shaders active.
                </p>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800/80">
              <span>Location: Dubai, United Arab Emirates (GST • UTC+4)</span>
              <span>Workspace Active • Clean Component Architecture</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
