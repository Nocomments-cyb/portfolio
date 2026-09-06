import React from 'react';
import { X, ArrowDown, MapPin, Monitor, Terminal, Headphones, User, ArrowRight, Sun, Moon, Sparkles, Coffee, Smartphone } from 'lucide-react';
import { useDeveloperInteraction } from './DeveloperInteractionController';

export default function SceneHUD({
  selectedObject,
  setSelectedObject,
  hoveredObject,
  onNavigateToProjects,
  onNavigateToAbout,
  onNavigateToContact,
  lightsOn = true,
  onToggleLights,
  lightMode = 'studio',
  onSelectLightMode,
  hudNotification
}) {
  const {
    hudEvent,
    triggerCoffee,
    triggerHeadphones,
    triggerPhone,
    triggerKeyboard,
    isCoffeeRunning
  } = useDeveloperInteraction();

  const activeNotice = hudEvent || hudNotification;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-3 sm:p-4 font-mono select-none">
      {/* --- TOP HUD STATUS BAR & LIGHT CONTROLS --- */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 bg-[#080d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
          <span className={`w-2 h-2 rounded-full ${lightsOn ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
          <span className="text-slate-200 font-semibold tracking-wider">NO COMMENT // 3D WORKSPACE</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className={lightsOn ? 'text-cyan-400 hidden sm:inline' : 'text-amber-400 hidden sm:inline'}>
            {lightsOn ? 'SYSTEM ONLINE' : 'STANDBY MODE'}
          </span>
        </div>

        {/* Dynamic Interactive Light Switch & Ambience Controller */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-[#080d19]/85 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-800 text-[10px]">
          <button
            onClick={onToggleLights}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all font-semibold ${
              lightsOn
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700'
            }`}
            title="Toggle workspace room lighting"
            aria-label="Toggle workspace room lighting"
          >
            {lightsOn ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-slate-400" />}
            <span>{lightsOn ? 'LIGHTS: ON' : 'LIGHTS: OFF'}</span>
          </button>

          {lightsOn && onSelectLightMode && (
            <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-slate-800">
              <button
                onClick={() => onSelectLightMode('studio')}
                className={`px-2 py-1 rounded text-[10px] transition-colors ${
                  lightMode === 'studio'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Studio White Key Light"
              >
                Studio
              </button>
              <button
                onClick={() => onSelectLightMode('cyberpunk')}
                className={`px-2 py-1 rounded text-[10px] transition-colors ${
                  lightMode === 'cyberpunk'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Cyberpunk Neon Mode"
              >
                Neon
              </button>
              <button
                onClick={() => onSelectLightMode('focus')}
                className={`px-2 py-1 rounded text-[10px] transition-colors ${
                  lightMode === 'focus'
                    ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Deep Coding Focus"
              >
                Focus
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Non-Stacking HUD Event Notification Banner */}
      {activeNotice && (
        <div className="pointer-events-none mx-auto mb-auto pt-2 transform animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-1.5 rounded-full bg-[#080d19]/95 border border-cyan-500/60 text-cyan-300 text-[11px] font-mono shadow-xl shadow-cyan-950/60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="tracking-wide font-semibold">{activeNotice}</span>
          </div>
        </div>
      )}

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
                {selectedObject === 'coffee' && <Coffee className="w-4 h-4 text-amber-400" />}
                {selectedObject === 'phone' && <Smartphone className="w-4 h-4 text-emerald-400" />}
                <span className="uppercase tracking-widest">
                  {selectedObject === 'monitor' && 'LIVING DEVELOPMENT ENVIRONMENT'}
                  {selectedObject === 'window' && 'LOCATION // DUBAI'}
                  {selectedObject === 'developer' && 'DEVELOPER DOSSIER'}
                  {(selectedObject === 'keyboard' || selectedObject === 'desk') && 'CODING CADENCE'}
                  {selectedObject === 'headphones' && 'FLOW STATE AUDIO'}
                  {selectedObject === 'coffee' && 'COFFEE BREAK FUEL'}
                  {selectedObject === 'phone' && 'SMARTPHONE NOTIFICATIONS'}
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

            {/* Modal Content for Monitor */}
            {selectedObject === 'monitor' && (
              <div className="py-3 space-y-2 text-xs">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                  DEVELOPMENT ENVIRONMENT // ONLINE
                </div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  The ultrawide display is running a live interactive workspace session with real-time component telemetry and streaming terminal logs.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">ACTIVE FILE</span>
                    <span className="text-white font-bold">WorkspaceEngine.jsx</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">BUILD SERVER</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 0.9ms HMR
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      onNavigateToProjects();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                  >
                    <span>[ VIEW CASE STUDIES ]</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Modal Content for Coffee */}
            {selectedObject === 'coffee' && (
              <div className="py-3 space-y-2 text-xs font-mono">
                <div className="text-amber-300 font-bold">CERAMIC MUG // FLOW STATE +1</div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Fresh roast coffee resting on the desk coaster. Click anytime to watch the developer take a sip break.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      triggerCoffee();
                      setSelectedObject(null);
                    }}
                    disabled={isCoffeeRunning}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Coffee className="w-3.5 h-3.5" />
                    <span>[ TAKE A SIP BREAK ]</span>
                  </button>
                </div>
              </div>
            )}

            {/* Modal Content for Phone */}
            {selectedObject === 'phone' && (
              <div className="py-3 space-y-2 text-xs font-mono">
                <div className="text-emerald-300 font-bold">SMARTPHONE // NOTIFICATION ACTIVE</div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Real-time alerts for project inquiries, client messages, and CI pipeline checks.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      triggerPhone();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>[ CHECK NOTIFICATION ]</span>
                  </button>
                </div>
              </div>
            )}

            {(selectedObject === 'keyboard' || selectedObject === 'desk') && (
              <div className="py-3 space-y-2 text-xs font-mono">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  75% MECHANICAL KEYBOARD
                </h4>
                <p className="text-xs text-cyan-300">
                  SPEED & FLOW CADENCE
                </p>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Custom lubricated tactile switches for rapid coding, full-stack state design, and responsive frontend architecture.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      triggerKeyboard();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md transition-all cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>[ BOOST CODING SPEED ]</span>
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'pc' && (
              <div className="py-3 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIQUID-COOLED PC TOWER // POWERED ON</span>
                </div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <div className="space-y-1 text-slate-300 text-[11px] font-mono">
                  <div className="text-white font-semibold">● AMD Ryzen 9 7950X (16-Core / 32-Thread)</div>
                  <div className="text-cyan-300">● NVIDIA GeForce RTX 4090 24GB GDDR6X</div>
                  <div className="text-purple-300">● 64GB DDR5-6000 Corsair Dominator RGB</div>
                  <div className="text-emerald-300">● 4TB NVMe Gen4 SSD • Custom AIO Loop</div>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      triggerKeyboard();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-md transition-all cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>[ OVERCLOCK WORKSTATION ]</span>
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'headphones' && (
              <div className="py-3 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span>ACTIVE NOISE CANCELLATION // FLOW</span>
                </div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans pt-1">
                  Studio acoustic isolation for deep focus, relational database modeling, and clean component execution.
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => {
                      triggerHeadphones();
                      setSelectedObject(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md transition-all cursor-pointer"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>[ TOGGLE AUDIO BOOST ]</span>
                  </button>
                </div>
              </div>
            )}

            {selectedObject === 'window' && (
              <div className="py-3 space-y-1.5 text-xs font-mono">
                <div className="text-base font-bold text-white">DUBAI SKYLINE</div>
                <div className="text-xs text-cyan-300 font-semibold">UNITED ARAB EMIRATES</div>
                <div className="text-slate-600 text-[10px] select-none">──────────────────────────────────</div>
                <div className="space-y-1 text-slate-300 text-[11px] pt-1">
                  <div className="text-white font-medium">Dubai, United Arab Emirates</div>
                  <div className="text-indigo-300">Gulf Standard Time • UTC+4</div>
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
                <div className="text-xs text-purple-300 font-semibold uppercase tracking-wider">FULL-STACK DEVELOPER & PRODUCT BUILDER</div>
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

      {/* --- BOTTOM HUD CONTROLS & ACCESSIBLE OBJECT SELECTORS --- */}
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
            onClick={() => {
              triggerCoffee();
              setSelectedObject('coffee');
            }}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'coffee'
                ? 'bg-amber-950 text-amber-300 border border-amber-500/40 font-bold'
                : 'hover:bg-slate-800 text-slate-300 hover:text-amber-300'
            }`}
          >
            [☕ Coffee]
          </button>
          <button
            onClick={() => {
              triggerPhone();
              setSelectedObject('phone');
            }}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'phone'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold'
                : 'hover:bg-slate-800 text-slate-300 hover:text-emerald-300'
            }`}
          >
            [📱 Phone]
          </button>
          <button
            onClick={() => {
              triggerHeadphones();
              setSelectedObject('headphones');
            }}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'headphones'
                ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
            }`}
          >
            [🎧 Audio]
          </button>
          <button
            onClick={() => {
              triggerKeyboard();
              setSelectedObject('keyboard');
            }}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'keyboard'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-cyan-300'
            }`}
          >
            [⌨ Keys]
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
            onClick={() => setSelectedObject('window')}
            className={`px-2 py-1 rounded transition-colors ${
              selectedObject === 'window'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                : 'hover:bg-slate-800 text-slate-300 hover:text-cyan-300'
            }`}
          >
            [Skyline]
          </button>
        </div>
      </div>
    </div>
  );
}
