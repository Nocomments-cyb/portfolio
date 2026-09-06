import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

/**
 * CodingScreen Component
 * 
 * Generates an ultra-crisp, living procedural canvas texture for the 38" Ultrawide monitor.
 * Displays a realistic full-stack IDE with file tree, syntax-highlighted code editor,
 * line numbers, live streaming terminal, blinking cursor, and real-time compiling indicators.
 * Synchronized with the developer character's typing, pausing, and coffee breaks.
 */
export function useCodingScreenTexture(lightsOn = true) {
  const { activityState } = useDeveloperInteraction();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const handler = (e) => setReducedMotion(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  const canvasRef = useRef(null);
  const textureRef = useRef(null);

  // Fictional, authentic developer workspace code lines (50+ lines of real, elegant full-stack code)
  const codeLines = useMemo(() => [
    { num: '01', tokens: [{ text: 'import', color: '#c084fc' }, { text: ' React, { useState, useEffect, useRef } ', color: '#f8fafc' }, { text: 'from', color: '#c084fc' }, { text: ' "react";', color: '#fcd34d' }] },
    { num: '02', tokens: [{ text: 'import', color: '#c084fc' }, { text: ' { Canvas, useFrame } ', color: '#f8fafc' }, { text: 'from', color: '#c084fc' }, { text: ' "@react-three/fiber";', color: '#fcd34d' }] },
    { num: '03', tokens: [{ text: 'import', color: '#c084fc' }, { text: ' { createClient } ', color: '#f8fafc' }, { text: 'from', color: '#c084fc' }, { text: ' "@supabase/supabase-js";', color: '#fcd34d' }] },
    { num: '04', tokens: [{ text: 'import', color: '#c084fc' }, { text: ' { useMotionValue, animate } ', color: '#f8fafc' }, { text: 'from', color: '#c084fc' }, { text: ' "framer-motion";', color: '#fcd34d' }] },
    { num: '05', tokens: [] },
    { num: '06', tokens: [{ text: '// Autonomous Creative Developer & Product Engine', color: '#475569' }] },
    { num: '07', tokens: [{ text: '// Location: Dubai, United Arab Emirates (GST UTC+4)', color: '#475569' }] },
    { num: '08', tokens: [{ text: 'const', color: '#c084fc' }, { text: ' supabase = createClient(ENV.SUPABASE_URL, ENV.ANON_KEY);', color: '#f8fafc' }] },
    { num: '09', tokens: [] },
    { num: '10', tokens: [{ text: 'export default function', color: '#38bdf8' }, { text: ' WorkspaceEngine() {', color: '#f8fafc' }] },
    { num: '11', tokens: [{ text: '  const', color: '#c084fc' }, { text: ' [systemReady, setSystemReady] = ', color: '#f8fafc' }, { text: 'useState', color: '#38bdf8' }, { text: '(true);', color: '#f8fafc' }] },
    { num: '12', tokens: [{ text: '  const', color: '#c084fc' }, { text: ' [activePipeline, setActivePipeline] = ', color: '#f8fafc' }, { text: 'useState', color: '#38bdf8' }, { text: '("PRODUCTION");', color: '#fcd34d' }] },
    { num: '13', tokens: [{ text: '  const', color: '#c084fc' }, { text: ' [telemetry, setTelemetry] = ', color: '#f8fafc' }, { text: 'useState', color: '#38bdf8' }, { text: '({ fps: 60, latency: 12 });', color: '#fb923c' }] },
    { num: '14', tokens: [{ text: '  const', color: '#c084fc' }, { text: ' viewportRef = ', color: '#f8fafc' }, { text: 'useRef', color: '#38bdf8' }, { text: '(null);', color: '#f8fafc' }] },
    { num: '15', tokens: [] },
    { num: '16', tokens: [{ text: '  // Real-time bidirectional telemetry channel', color: '#475569' }] },
    { num: '17', tokens: [{ text: '  useEffect', color: '#38bdf8' }, { text: '(() => {', color: '#f8fafc' }] },
    { num: '18', tokens: [{ text: '    const', color: '#c084fc' }, { text: ' channel = supabase.channel("live:telemetry");', color: '#f8fafc' }] },
    { num: '19', tokens: [{ text: '    channel.on("broadcast", { event: "ping" }, (payload) => {', color: '#38bdf8' }] },
    { num: '20', tokens: [{ text: '      setTelemetry((prev) => ({ ...prev, latency: payload.ms }));', color: '#34d399' }] },
    { num: '21', tokens: [{ text: '    }).subscribe();', color: '#f8fafc' }] },
    { num: '22', tokens: [{ text: '    return () => { channel.unsubscribe(); };', color: '#f8fafc' }] },
    { num: '23', tokens: [{ text: '  }, []);', color: '#f8fafc' }] },
    { num: '24', tokens: [] },
    { num: '25', tokens: [{ text: '  // High-performance 3D Scene Pipeline', color: '#475569' }] },
    { num: '26', tokens: [{ text: '  const', color: '#c084fc' }, { text: ' handleSceneRender = (gl, scene, camera) => {', color: '#f8fafc' }] },
    { num: '27', tokens: [{ text: '    gl.toneMapping = THREE.ACESFilmicToneMapping;', color: '#38bdf8' }] },
    { num: '28', tokens: [{ text: '    gl.toneMappingExposure = 1.25;', color: '#fb923c' }] },
    { num: '29', tokens: [{ text: '    gl.render(scene, camera);', color: '#f8fafc' }] },
    { num: '30', tokens: [{ text: '  };', color: '#f8fafc' }] },
    { num: '31', tokens: [] },
    { num: '32', tokens: [{ text: '  return (', color: '#f8fafc' }] },
    { num: '33', tokens: [{ text: '    <section className="cinematic-developer-workspace">', color: '#38bdf8' }] },
    { num: '34', tokens: [{ text: '      <Canvas shadows dpr={[1, 2]} onCreated={handleSceneRender}>', color: '#a855f7' }] },
    { num: '35', tokens: [{ text: '        <StudioCeilingLight lumens={3200} warmKelvin={3800} />', color: '#fcd34d' }] },
    { num: '36', tokens: [{ text: '        <DeveloperModel clothes="slate-navy" status={activePipeline} />', color: '#34d399' }] },
    { num: '37', tokens: [{ text: '        <UltrawideWorkspaceDisplay refreshRate={144} />', color: '#38bdf8' }] },
    { num: '38', tokens: [{ text: '        <DubaiSkylineBackdrop illuminated={true} />', color: '#a855f7' }] },
    { num: '39', tokens: [{ text: '      </Canvas>', color: '#a855f7' }] },
    { num: '40', tokens: [{ text: '      <TelemetryHUD fps={telemetry.fps} ping={telemetry.latency} />', color: '#38bdf8' }] },
    { num: '41', tokens: [{ text: '    </section>', color: '#38bdf8' }] },
    { num: '42', tokens: [{ text: '  );', color: '#f8fafc' }] },
    { num: '43', tokens: [{ text: '}', color: '#f8fafc' }] },
    { num: '44', tokens: [] },
    { num: '45', tokens: [{ text: '// Autonomous Build Hook', color: '#475569' }] },
    { num: '46', tokens: [{ text: 'export async function', color: '#c084fc' }, { text: ' triggerOptimizedDeploy() {', color: '#38bdf8' }] },
    { num: '47', tokens: [{ text: '  const res = await fetch("/api/deploy", { method: "POST" });', color: '#f8fafc' }] },
    { num: '48', tokens: [{ text: '  return await res.json();', color: '#34d399' }] },
    { num: '49', tokens: [{ text: '}', color: '#f8fafc' }] },
  ], []);

  // Internal animation clock
  const animStateRef = useRef({
    charCount: 18,
    maxChars: 36,
    scrollPos: 0,
    lastUpdate: 0,
    cursorBlink: true,
    terminalLogOffset: 0,
  });

  // Create canvas and Three.js canvas texture once
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 640;
    canvasRef.current = canvas;

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    textureRef.current = tex;
    return tex;
  }, []);

  // Draw loop throttled to ~20 FPS for silky, lightweight screen life
  useFrame((state) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const t = state.clock.getElapsedTime();
    const anim = animStateRef.current;

    // Update screen at ~18 updates/sec to conserve GPU/CPU
    if (t - anim.lastUpdate < 0.052) return;
    anim.lastUpdate = t;

    // Blinking cursor
    anim.cursorBlink = Math.sin(t * 7.0) > 0;

    // Coding activity & dynamic screen scrolling
    const isTyping = (activityState === 'typing' || activityState === 'boost') && lightsOn;
    const scrollIncrement = activityState === 'boost' ? 1.6 : 0.95;

    const codeAreaHeight = canvas.height - 170;
    const lineH = 22;
    const totalHeight = codeLines.length * lineH;
    const maxScroll = Math.max(0, totalHeight - (codeAreaHeight - 50));

    if (isTyping && !reducedMotion) {
      // Actively and continuously scroll upward while typing!
      anim.scrollPos += scrollIncrement;
      if (anim.scrollPos > maxScroll + 60) {
        anim.scrollPos = 0; // Smooth infinite loop through code
      }

      // Progressively advance character count
      anim.charCount += activityState === 'boost' ? 2 : 1;
      if (anim.charCount > anim.maxChars) {
        anim.charCount = 4;
      }
    }

    // --- RENDER IDE CANVAS UI ---
    // Deep IDE slate background
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Top Window Header / Tab Strip
    ctx.fillStyle = '#0d1322';
    ctx.fillRect(0, 0, canvas.width, 42);

    // macOS Window controls
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(20, 21, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(38, 21, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(56, 21, 5, 0, Math.PI * 2);
    ctx.fill();

    // Active Tab
    ctx.fillStyle = '#141d33';
    ctx.fillRect(80, 6, 210, 36);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('WorkspaceEngine.jsx', 104, 28);
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(80, 40, 210, 2);

    // Inactive Tabs
    ctx.fillStyle = '#64748b';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText('schema.sql', 315, 28);
    ctx.fillText('App.jsx', 420, 28);
    ctx.fillText('terminal:zsh', 505, 28);

    // Left Sidebar (File Explorer)
    ctx.fillStyle = '#0b101c';
    ctx.fillRect(0, 42, 240, canvas.height - 76);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 42, 240, canvas.height - 76);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText('EXPLORER // SRC', 16, 68);

    const files = [
      { name: '▾ src/', isDir: true, active: false },
      { name: '  ▾ components/', isDir: true, active: false },
      { name: '      WorkspaceEngine.jsx', isDir: false, active: true },
      { name: '      DatabaseClient.js', isDir: false, active: false },
      { name: '      CameraRig.jsx', isDir: false, active: false },
      { name: '  ▾ db/', isDir: true, active: false },
      { name: '      schema.sql', isDir: false, active: false },
      { name: '    App.jsx', isDir: false, active: false },
      { name: '    main.jsx', isDir: false, active: false },
    ];

    files.forEach((f, idx) => {
      const y = 92 + idx * 22;
      if (f.active) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.fillRect(10, y - 14, 220, 18);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
      } else {
        ctx.fillStyle = f.isDir ? '#cbd5e1' : '#64748b';
        ctx.font = '11px "JetBrains Mono", monospace';
      }
      ctx.fillText(f.name, 16, y);
    });

    // Sidebar Status Pill (Vite Server Status)
    ctx.fillStyle = '#0e1628';
    ctx.fillRect(12, canvas.height - 105, 216, 62);
    ctx.strokeStyle = '#1e293b';
    ctx.strokeRect(12, canvas.height - 105, 216, 62);

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(26, canvas.height - 86, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    const statusText = activityState === 'coffee'
      ? 'IDLE // COFFEE'
      : isTyping
      ? 'DEV SERVER // ACTIVE'
      : 'DEV SERVER // STANDBY';
    ctx.fillText(statusText, 38, canvas.height - 82);

    ctx.fillStyle = '#64748b';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText('Vite v6 • HMR: 0.9ms', 24, canvas.height - 62);

    // --- CODE EDITOR AREA (Actively Scrolling While Typing) ---
    const editorX = 241;
    const editorWidth = canvas.width - editorX;

    // Line Numbers Bar
    ctx.fillStyle = '#090d18';
    ctx.fillRect(editorX, 42, 42, codeAreaHeight);

    // Clip Code Lines Area
    ctx.save();
    ctx.beginPath();
    ctx.rect(editorX, 42, editorWidth, codeAreaHeight);
    ctx.clip();

    const scrollY = reducedMotion ? 0 : anim.scrollPos;

    // Determine current active line near lower-middle of visible viewport
    const visibleActiveLineIndex = Math.min(
      codeLines.length - 1,
      Math.max(0, Math.floor((scrollY + codeAreaHeight * 0.55) / lineH))
    );

    codeLines.forEach((line, idx) => {
      const y = 68 + idx * lineH - scrollY;
      if (y < 40 || y > codeAreaHeight + 60) return;

      const isCurrentActiveLine = idx === visibleActiveLineIndex;

      // Line number with active highlight
      ctx.fillStyle = isCurrentActiveLine ? '#38bdf8' : '#334155';
      ctx.font = isCurrentActiveLine ? 'bold 11px "JetBrains Mono", monospace' : '11px "JetBrains Mono", monospace';
      ctx.fillText(line.num, editorX + 10, y);

      // Active line subtle highlight background band
      if (isCurrentActiveLine && isTyping) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.fillRect(editorX + 44, y - 16, editorWidth - 56, lineH);
      }

      // Code tokens
      let tokenX = editorX + 54;
      line.tokens.forEach((tok) => {
        ctx.fillStyle = tok.color;
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillText(tok.text, tokenX, y);
        tokenX += ctx.measureText(tok.text).width;
      });

      // Active typing cursor on current active line
      if (isCurrentActiveLine && lightsOn) {
        if (anim.cursorBlink) {
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(tokenX + 4, y - 13, 8, 16);
        }
      }
    });

    // Scrollbar Track & Thumb on right side of code editor
    const scrollbarX = canvas.width - 8;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(scrollbarX, 44, 6, codeAreaHeight);

    const thumbH = Math.max(30, (codeAreaHeight / totalHeight) * codeAreaHeight);
    const thumbY = 44 + (scrollY / Math.max(1, maxScroll)) * (codeAreaHeight - thumbH);
    ctx.fillStyle = isTyping ? '#38bdf8' : '#334155';
    ctx.fillRect(scrollbarX, thumbY, 6, thumbH);

    ctx.restore();

    // --- INTEGRATED TERMINAL PANE (Bottom Right) ---
    const termY = canvas.height - 126;
    ctx.fillStyle = '#060911';
    ctx.fillRect(editorX, termY, editorWidth, 92);
    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(editorX, termY);
    ctx.lineTo(canvas.width, termY);
    ctx.stroke();

    // Terminal Header
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText('TERMINAL // ZSH • PORTFOLIO-DEV', editorX + 16, termY + 16);

    // Terminal Stream Log
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#34d399';
    ctx.fillText('$ vite build --watch', editorX + 16, termY + 36);

    ctx.fillStyle = '#94a3b8';
    const hmrMs = (1.2 + (Math.sin(t * 2) * 0.4)).toFixed(1);
    ctx.fillText(`[vite] hmr update /src/components/WorkspaceEngine.jsx (${hmrMs}ms)`, editorX + 16, termY + 54);

    const termStatus = activityState === 'coffee'
      ? 'status: pause event triggered [coffee break]'
      : activityState === 'boost'
      ? 'status: high-frequency code session active [240 WPM]'
      : isTyping
      ? 'status: compiling AST delta in memory...'
      : 'status: watching for file changes...';

    ctx.fillStyle = activityState === 'coffee' ? '#f59e0b' : '#38bdf8';
    ctx.fillText(`✓ ${termStatus}`, editorX + 16, termY + 72);

    // Bottom App Status Bar
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(0, canvas.height - 24, canvas.width, 24);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText('WORKSPACE: READY', 16, canvas.height - 8);
    ctx.fillText(`Ln ${visibleActiveLineIndex + 1}, Col ${anim.charCount} • UTF-8 • React 19`, 260, canvas.height - 8);
    ctx.fillText('Git: main ✓', canvas.width - 120, canvas.height - 8);

    // Flag Three.js texture for GPU upload
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  });

  return texture;
}
