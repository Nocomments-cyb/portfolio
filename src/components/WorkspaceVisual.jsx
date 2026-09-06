import React, { useState } from 'react';
import { Terminal, Monitor, Sparkles, MapPin, Headphones, Cpu, Code2, Eye } from 'lucide-react';
import workspaceImg from '../assets/developer_workspace.jpg';

/**
 * WorkspaceVisual Component
 * 
 * Stage 1 Foundation:
 * Serves as the visual shell and anchor point for the developer workspace.
 * Ready to host WebGL / Three.js 3D character canvas in upcoming stages
 * without disrupting the surrounding layout or responsive grid.
 */
export default function WorkspaceVisual() {
  const [activeTab, setActiveTab] = useState('cinema'); // 'cinema' | 'telemetry'
  const [showHotspots, setShowHotspots] = useState(true);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-600/30 to-purple-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container / Visual Shell */}
      <div 
        id="interactive-scene-root"
        data-stage="stage-1-foundation"
        className="relative rounded-2xl md:rounded-3xl border border-slate-700/60 bg-[#0c1220]/90 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Top Control Bar / Futuristic HUD Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-950/60 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-medium">DEV_STATION // LIVE</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-cyan-400" /> Dubai, UAE
            </span>
          </div>

          {/* Mode Switcher & Hotspot Toggles */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-colors border ${
                showHotspots
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {showHotspots ? 'HUD Overlay: ON' : 'HUD Overlay: OFF'}
            </button>

            <div className="flex bg-slate-900/90 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setActiveTab('cinema')}
                className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeTab === 'cinema'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Environment
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Telemetry
              </button>
            </div>
          </div>
        </div>

        {/* Visual Scene Viewport */}
        {activeTab === 'cinema' ? (
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden group">
            {/* The Developer Workspace Environment Image */}
            <img
              src={workspaceImg}
              alt="Young Black male developer working at dual monitors in a futuristic workspace with Dubai skyline at night"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle Vignette & Neon Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#090d16] via-transparent to-black/20" />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />

            {/* Interactive HUD Hotspots */}
            {showHotspots && (
              <>
                {/* Hotspot: Dubai Skyline */}
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

                {/* Hotspot: Dual Monitors */}
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

                {/* Hotspot: Focused Audio */}
                <div className="absolute top-[38%] right-[28%] hidden lg:flex items-center gap-2 group/spot cursor-default">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-purple-400/20 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-md shadow-purple-400/50" />
                  </div>
                  <div className="opacity-80 group-hover/spot:opacity-100 bg-[#0b101d]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/30 text-[11px] font-mono text-purple-200 shadow-xl transition-all">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <Headphones className="w-3 h-3 text-purple-400" />
                      Deep Flow State
                    </p>
                    <p className="text-[10px] text-purple-300/80">Active Noise Cancellation</p>
                  </div>
                </div>
              </>
            )}

            {/* Stage Indicator Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-[#090d16]/85 backdrop-blur-md border border-slate-700/60 rounded-xl px-3.5 py-1.5 flex items-center gap-2.5 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono text-slate-300">
                  <span className="text-cyan-400 font-semibold">Stage 1:</span> Visual Shell & Foundation
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-[#090d16]/85 backdrop-blur-md border border-slate-700/60 rounded-xl px-3.5 py-1.5 text-xs font-mono text-slate-400">
                <span>WebGL Canvas Mount Ready</span>
              </div>
            </div>
          </div>
        ) : (
          /* Telemetry & Terminal Overview */
          <div className="p-6 sm:p-8 bg-[#0a0f1d] font-mono text-xs text-slate-300 min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold uppercase tracking-wider">
                    Workspace Diagnostics & Environment Specs
                  </span>
                </div>
                <span className="text-slate-500">SYS_V2.4</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-cyan-400" /> Display Matrix & Workstation
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-slate-500">Primary:</span> 38" Curved UltraWide (Code & IDE)</p>
                    <p><span className="text-slate-500">Secondary:</span> 27" Vertical 4K (Logs & Telemetry)</p>
                    <p><span className="text-slate-500">Peripherals:</span> Custom Mech Keyboard • Studio Monitor Headphones</p>
                    <p><span className="text-slate-500">Rig:</span> High-spec liquid-cooled development rig</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Architectural Stack
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-slate-500">Frontend:</span> React 19 • Vite • Modern CSS / Tailwind</p>
                    <p><span className="text-slate-500">Backend:</span> Supabase • PostgreSQL</p>
                    <p><span className="text-slate-500">Deployment:</span> Automated CI/CD • Fast Edge Delivery</p>
                    <p><span className="text-slate-500">Future Stage:</span> Interactive 3D WebGL / Canvas Character</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-slate-400">
                <p className="text-[11px]">
                  <span className="text-emerald-400 font-semibold">$ status --summary:</span> Workspace operational. Dubai night atmosphere locked. Ready for modular feature expansion.
                </p>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800/80">
              <span>Geo: 25.2048° N, 55.2708° E (Dubai, UAE)</span>
              <span>Prepared for 3D character integration in Stage 2</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
