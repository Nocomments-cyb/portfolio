import React from 'react';
import { X, ExternalLink, ArrowDown, MapPin, Monitor, Terminal, Headphones, User, Cpu, Sparkles } from 'lucide-react';

export default function SceneHUD({
  selectedObject,
  setSelectedObject,
  hoveredObject,
  onNavigateToProjects,
  onNavigateToAbout,
  onNavigateToContact
}) {
  const getPanelData = (obj) => {
    switch (obj) {
      case 'monitor':
        return {
          badge: 'DISPLAY MATRIX',
          title: 'Primary Workstation & Active Code',
          meta: 'React 19 • Vite • Supabase SQL',
          description:
            'Dual-display developer setup featuring active code editor for flagship product VYBE, integrated terminal logs, and low-latency database telemetry.',
          actionLabel: 'View Featured Projects',
          onAction: onNavigateToProjects,
          icon: <Monitor className="w-4 h-4 text-cyan-400" />
        };
      case 'window':
        return {
          badge: 'GEOLOCATION',
          title: 'Dubai Night Skyline Vista',
          meta: '25.2048° N, 55.2708° E • GST (UTC+4)',
          description:
            'Panoramic night view showcasing the Burj Khalifa spire, surrounding architectural skyscrapers, and nocturnal highway transit over Downtown Dubai.',
          actionLabel: 'Discover Developer Background',
          onAction: onNavigateToAbout,
          icon: <MapPin className="w-4 h-4 text-cyan-400" />
        };
      case 'developer':
        return {
          badge: 'DEVELOPER PROFILE',
          title: 'No Comment — Product Engineer',
          meta: 'Ideas -> Products • Full-Stack Architecture',
          description:
            'A creative software engineer specializing in turning ambitious concepts into responsive, high-performance web applications with cinematic craft.',
          actionLabel: 'Read Full Dossier',
          onAction: onNavigateToAbout,
          icon: <User className="w-4 h-4 text-purple-400" />
        };
      case 'keyboard':
      case 'desk':
        return {
          badge: 'DEVELOPMENT MODE',
          title: 'Building Products // Deep Flow',
          meta: 'Custom Mechanical Rig • Matte Carbon Desk',
          description:
            'Fast prototyping and continuous integration environment configured for zero layout shift, semantic markup, and clean component hierarchies.',
          actionLabel: 'Get In Touch',
          onAction: onNavigateToContact,
          icon: <Terminal className="w-4 h-4 text-emerald-400" />
        };
      case 'headphones':
        return {
          badge: 'FLOW STATE',
          title: 'Active Noise Cancellation Mode',
          meta: 'Acoustic Studio Monitoring • Focus Locked',
          description:
            'Studio-grade audio environment tuned for intensive coding sessions, algorithm design, and seamless product execution.',
          actionLabel: 'View Projects',
          onAction: onNavigateToProjects,
          icon: <Headphones className="w-4 h-4 text-indigo-400" />
        };
      default:
        return null;
    }
  };

  const activePanel = getPanelData(selectedObject);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-3 sm:p-4 font-mono select-none">
      {/* --- TOP HUD BAR --- */}
      <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 bg-[#080d19]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 font-semibold">NO COMMENT // 3D WORKSPACE</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-cyan-400 hidden sm:inline">SYSTEM ONLINE</span>
        </div>

        <div className="flex items-center gap-2 bg-[#080d19]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 text-[10px] sm:text-[11px] text-slate-300">
          <span className="text-slate-500">LOC:</span>
          <span className="text-cyan-300">DUBAI / UAE</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-slate-400 hidden md:inline">25.2048° N</span>
        </div>
      </div>

      {/* --- CENTER / INTERACTIVE OBJECT HUD MODAL --- */}
      {activePanel && (
        <div className="pointer-events-auto max-w-md mx-auto my-auto w-full px-2">
          <div className="rounded-2xl border border-cyan-500/30 bg-[#090e1c]/95 backdrop-blur-xl p-5 shadow-2xl shadow-cyan-950/60 transition-all transform animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                  {activePanel.icon}
                </span>
                <span className="text-xs font-bold tracking-wider text-cyan-300">
                  {activePanel.badge}
                </span>
              </div>
              <button
                onClick={() => setSelectedObject(null)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-3 space-y-2">
              <h4 className="text-base font-bold text-white tracking-tight">
                {activePanel.title}
              </h4>
              <div className="text-[11px] text-indigo-300 font-medium">
                {activePanel.meta}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                {activePanel.description}
              </p>
            </div>

            {/* Modal Action Button */}
            {activePanel.actionLabel && (
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end">
                <button
                  onClick={() => {
                    activePanel.onAction();
                    setSelectedObject(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                >
                  <span>{activePanel.actionLabel}</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- BOTTOM HUD CONTROLS & OBJECT SELECTORS --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2">
        {/* Hover / Object Status Badge */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-[#080d19]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 text-[10px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>INTERACT:</span>
          <span className="text-white font-semibold uppercase">
            {hoveredObject ? hoveredObject : 'EXPLORE WORKSPACE'}
          </span>
        </div>

        {/* Quick Hotspot Buttons (for accessible interaction without precise mouse hovering) */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-1 bg-[#080d19]/80 backdrop-blur-md p-1 rounded-lg border border-slate-800/80 text-[10px]">
          <button
            onClick={() => setSelectedObject('monitor')}
            className="px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            [Monitors]
          </button>
          <button
            onClick={() => setSelectedObject('window')}
            className="px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            [Dubai Skyline]
          </button>
          <button
            onClick={() => setSelectedObject('developer')}
            className="px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-purple-300 transition-colors"
          >
            [Developer]
          </button>
          <button
            onClick={() => setSelectedObject('keyboard')}
            className="px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-emerald-300 transition-colors"
          >
            [Desk Rig]
          </button>
        </div>
      </div>
    </div>
  );
}
