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
  });

  // Reusable screen draw function (renders both initially and on dynamic ticks)
  const drawScreen = (canvas, anim) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isTyping = (activityState === 'typing' || activityState === 'boost') && lightsOn;
    const codeAreaHeight = canvas.height - 130;
    const lineH = 22;
    const totalHeight = codeLines.length * lineH;
    const maxScroll = Math.max(0, totalHeight - (codeAreaHeight - 40));

    // --- 1. LUMINOUS IDE BACKGROUND (Radiant Deep Slate Navy) ---
    ctx.fillStyle = '#141f32';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- 2. TOP WINDOW HEADER & TAB STRIP ---
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, 36);

    // Window controls
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(18, 18, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(32, 18, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(46, 18, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Active Tab
    ctx.fillStyle = '#27364f';
    ctx.fillRect(66, 4, 190, 32);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(66, 33, 190, 3);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "JetBrains Mono", Consolas, monospace';
    ctx.fillText('WorkspaceEngine.jsx', 84, 23);

    // Inactive Tabs
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('schema.sql', 275, 23);
    ctx.fillText('App.jsx', 365, 23);
    ctx.fillText('terminal:zsh', 435, 23);

    // Accent line below header
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.fillRect(0, 36, canvas.width, 1.5);

    // --- 3. LEFT SIDEBAR (File Explorer) ---
    const sidebarW = 200;
    ctx.fillStyle = '#101a2b';
    ctx.fillRect(0, 37.5, sidebarW, canvas.height - 59.5);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(sidebarW, 37.5, 1, canvas.height - 59.5);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText('EXPLORER // SRC', 14, 56);

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
      const y = 76 + idx * 19;
      if (f.active) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.fillRect(8, y - 13, sidebarW - 16, 17);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 10.5px "JetBrains Mono", monospace';
      } else {
        ctx.fillStyle = f.isDir ? '#38bdf8' : '#cbd5e1';
        ctx.font = '10px "JetBrains Mono", monospace';
      }
      ctx.fillText(f.name, 12, y);
    });

    // Sidebar Status Card
    ctx.fillStyle = '#17253d';
    ctx.fillRect(10, canvas.height - 86, sidebarW - 20, 56);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, canvas.height - 86, sidebarW - 20, 56);

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(22, canvas.height - 68, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText(isTyping ? 'DEV SERVER // ACTIVE' : 'DEV SERVER // READY', 32, canvas.height - 65);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '9.5px "JetBrains Mono", monospace';
    ctx.fillText('Vite v6 • HMR: 0.8ms', 20, canvas.height - 47);

    // --- 4. CODE EDITOR AREA (Actively Scrolling While Typing) ---
    const editorX = sidebarW + 1;
    const editorWidth = canvas.width - editorX;

    // Line Numbers Bar
    ctx.fillStyle = '#111a2a';
    ctx.fillRect(editorX, 37.5, 42, codeAreaHeight);

    // Clip Code Lines Area
    ctx.save();
    ctx.beginPath();
    ctx.rect(editorX, 37.5, editorWidth, codeAreaHeight);
    ctx.clip();

    const scrollY = reducedMotion ? 0 : anim.scrollPos;

    // Determine current active line near lower-middle of visible viewport
    const visibleActiveLineIndex = Math.min(
      codeLines.length - 1,
      Math.max(0, Math.floor((scrollY + codeAreaHeight * 0.55) / lineH))
    );

    codeLines.forEach((line, idx) => {
      const y = 60 + idx * lineH - scrollY;
      if (y < 30 || y > codeAreaHeight + 50) return;

      const isCurrentActiveLine = idx === visibleActiveLineIndex;

      // Active line background band (radiates cyan light across the editor)
      if (isCurrentActiveLine && isTyping) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
        ctx.fillRect(editorX + 44, y - 15, editorWidth - 54, lineH);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(editorX + 42, y - 15, 2, lineH);
      }

      // Line number with active highlight
      ctx.fillStyle = isCurrentActiveLine ? '#38bdf8' : '#64748b';
      ctx.font = isCurrentActiveLine ? 'bold 10.5px "JetBrains Mono", monospace' : '10px "JetBrains Mono", monospace';
      ctx.fillText(line.num, editorX + 8, y);

      // Code tokens
      let tokenX = editorX + 50;
      line.tokens.forEach((tok) => {
        ctx.fillStyle = tok.color;
        ctx.font = 'bold 12.5px "JetBrains Mono", Consolas, monospace';
        ctx.fillText(tok.text, tokenX, y);
        tokenX += ctx.measureText(tok.text).width;
      });

      // Active typing cursor on current active line
      if (isCurrentActiveLine && lightsOn) {
        if (anim.cursorBlink) {
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(tokenX + 3, y - 13, 7, 16);
        }
      }
    });

    // Scrollbar Track & Thumb
    const scrollbarX = canvas.width - 7;
    ctx.fillStyle = '#17253d';
    ctx.fillRect(scrollbarX, 38, 5, codeAreaHeight);

    const thumbH = Math.max(25, (codeAreaHeight / totalHeight) * codeAreaHeight);
    const thumbY = 38 + (scrollY / Math.max(1, maxScroll)) * (codeAreaHeight - thumbH);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(scrollbarX, thumbY, 5, thumbH);

    ctx.restore();

    // --- 5. INTEGRATED TERMINAL PANE (Bottom Right) ---
    const termY = canvas.height - 98;
    ctx.fillStyle = '#0e1728';
    ctx.fillRect(editorX, termY, editorWidth, 76);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.fillRect(editorX, termY, editorWidth, 1.5);

    // Terminal Header
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 9.5px "JetBrains Mono", monospace';
    ctx.fillText('TERMINAL // ZSH • PORTFOLIO-DEV', editorX + 12, termY + 14);

    // Terminal Stream Log
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#34d399';
    ctx.fillText('$ vite build --watch', editorX + 12, termY + 32);

    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('[vite] hmr update /src/components/WorkspaceEngine.jsx (1.1ms)', editorX + 12, termY + 48);

    const termStatus = activityState === 'coffee'
      ? 'status: pause event [coffee break]'
      : activityState === 'boost'
      ? 'status: high-frequency code session active [240 WPM]'
      : isTyping
      ? 'status: compiling AST delta in memory...'
      : 'status: watching for file changes...';

    ctx.fillStyle = activityState === 'coffee' ? '#f59e0b' : '#38bdf8';
    ctx.fillText(`✓ ${termStatus}`, editorX + 12, termY + 64);

    // --- 6. BOTTOM APP STATUS BAR ---
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(0, canvas.height - 22, canvas.width, 22);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText('WORKSPACE: READY', 14, canvas.height - 7);
    ctx.fillText(`Ln ${visibleActiveLineIndex + 1}, Col ${anim.charCount} • UTF-8 • React 19`, 220, canvas.height - 7);
    ctx.fillText('Git: main ✓', canvas.width - 100, canvas.height - 7);
  };

  // Create canvas and Three.js canvas texture with immediate initial draw
  const texture = useMemo(() => {
    // 1024x512 is true Power-of-Two (2^10 x 2^9), guaranteeing instant WebGL compatibility
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    canvasRef.current = canvas;

    // Draw initial frame immediately so texture is NEVER black on mount
    drawScreen(canvas, animStateRef.current);

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = false; // Disable mipmaps for non-stalling dynamic 2D canvas
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    textureRef.current = tex;
    return tex;
  }, []);

  // Draw loop throttled to ~20 FPS for silky, lightweight screen life
  useFrame((state) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

    const codeAreaHeight = canvas.height - 130;
    const lineH = 22;
    const totalHeight = codeLines.length * lineH;
    const maxScroll = Math.max(0, totalHeight - (codeAreaHeight - 40));

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

    // Render active frame
    drawScreen(canvas, anim);

    // Flag Three.js texture for GPU upload
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  });

  return texture;
}
