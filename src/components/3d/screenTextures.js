import * as THREE from 'three';

/**
 * Generates an ultra-crisp, authentic procedural canvas texture for the primary ultrawide monitor.
 * Displays the exact developer workspace IDE requested:
 * - File tree with Hero.jsx, Projects.jsx, DeveloperScene.jsx, Contact.jsx
 * - Stack: React 19, Vite, JavaScript
 * - Syntax-highlighted code editor
 * - BUILD STATUS: ONLINE
 */
export function createIDETexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Deep IDE dark slate background
  ctx.fillStyle = '#080c14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top Window Header / Tab Strip
  ctx.fillStyle = '#0e1424';
  ctx.fillRect(0, 0, canvas.width, 46);

  // macOS / Unix window controls
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(22, 23, 5.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(42, 23, 5.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.arc(62, 23, 5.5, 0, Math.PI * 2);
  ctx.fill();

  // Active Tab: DeveloperScene.jsx
  ctx.fillStyle = '#141d33';
  ctx.fillRect(90, 8, 200, 38);
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillText('DeveloperScene.jsx', 115, 31);
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(90, 43, 200, 3); // Active tab indicator line

  // Inactive Tabs
  ctx.fillStyle = '#64748b';
  ctx.font = '13px "JetBrains Mono", monospace';
  ctx.fillText('Projects.jsx', 315, 31);
  ctx.fillText('Hero.jsx', 440, 31);
  ctx.fillText('DubaiSkyline.3d', 535, 31);

  // Left Sidebar: File Explorer & Stack Badges
  ctx.fillStyle = '#0b101d';
  ctx.fillRect(0, 46, 260, canvas.height - 84);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(260, 46);
  ctx.lineTo(260, canvas.height - 38);
  ctx.stroke();

  // Sidebar Header
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillText('PORTFOLIO // DEV ENVIRONMENT', 18, 76);

  // Stack Tags
  const stackTags = [
    { name: 'React 19', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
    { name: 'Vite 6', bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
    { name: 'JavaScript', bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24' }
  ];

  stackTags.forEach((tag, idx) => {
    ctx.fillStyle = tag.bg;
    ctx.fillRect(18 + idx * 76, 94, 70, 22);
    ctx.strokeStyle = tag.text;
    ctx.strokeRect(18 + idx * 76, 94, 70, 22);
    ctx.fillStyle = tag.text;
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText(tag.name, 25 + idx * 76, 109);
  });

  // Project Component Tree
  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillText('components/', 18, 148);

  const fileTree = [
    { name: 'Hero.jsx', active: false },
    { name: 'Projects.jsx', active: false },
    { name: 'DeveloperScene.jsx', active: true },
    { name: 'Contact.jsx', active: false },
    { name: 'DubaiWindow.jsx', active: false },
    { name: 'SceneHUD.jsx', active: false }
  ];

  fileTree.forEach((file, idx) => {
    const yPos = 174 + idx * 26;
    if (file.active) {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.fillRect(14, yPos - 16, 235, 22);
      ctx.fillStyle = '#38bdf8';
    } else {
      ctx.fillStyle = '#94a3b8';
    }
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText((file.active ? '▶ ' : '  ') + file.name, 28, yPos);
  });

  // Sidebar Status Box (BUILD STATUS ● ONLINE)
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(16, canvas.height - 130, 228, 76);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(16, canvas.height - 130, 228, 76);

  ctx.fillStyle = '#64748b';
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillText('BUILD STATUS', 28, canvas.height - 106);

  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.arc(32, canvas.height - 80, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillText('ONLINE', 46, canvas.height - 76);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillText('HMR Connected • 0.8ms', 28, canvas.height - 60);

  // Line Numbers Column
  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(261, 46, 45, canvas.height - 84);
  ctx.fillStyle = '#334155';
  ctx.font = '12px "JetBrains Mono", monospace';
  for (let i = 1; i <= 22; i++) {
    ctx.fillText(i.toString().padStart(2, ' '), 272, 74 + i * 22);
  }

  // Syntax-Highlighted Code Editor Content
  const codeLines = [
    { text: 'import React from "react";', color: '#c084fc' },
    { text: 'import { Canvas } from "@react-three/fiber";', color: '#c084fc' },
    { text: 'import { DubaiSkyline, Workstation } from "./3d";', color: '#c084fc' },
    { text: '', color: '' },
    { text: '// No Comment — Creative Developer & Product Engineer', color: '#475569' },
    { text: 'export default function DeveloperStation() {', color: '#38bdf8' },
    { text: '  const mission = {', color: '#f1f5f9' },
    { text: '    author: "No Comment",', color: '#34d399' },
    { text: '    location: "Dubai, United Arab Emirates",', color: '#34d399' },
    { text: '    ethos: "I build ideas into products.",', color: '#fbbf24' },
    { text: '    focus: ["Full-Stack", "High Performance", "Cinematic 3D"],', color: '#f472b6' },
    { text: '    activeProject: "VYBE Flagship",', color: '#34d399' },
    { text: '    status: "READY_TO_DEPLOY"', color: '#38bdf8' },
    { text: '  };', color: '#f1f5f9' },
    { text: '', color: '' },
    { text: '  return (', color: '#38bdf8' },
    { text: '    <DeveloperRoom theme="Night" skyline="Burj Khalifa">', color: '#818cf8' },
    { text: '      <CinematicLighting ambient="indigo" key="slate" />', color: '#818cf8' },
    { text: '      <DualMonitors telemetry="active" build="passing" />', color: '#818cf8' },
    { text: '      <ProductEngine pipeline={mission.focus} />', color: '#818cf8' },
    { text: '    </DeveloperRoom>', color: '#818cf8' },
    { text: '  );', color: '#38bdf8' },
    { text: '}', color: '#38bdf8' }
  ];

  ctx.font = '13px "JetBrains Mono", Consolas, monospace';
  codeLines.forEach((line, index) => {
    if (line.text) {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 320, 74 + index * 22);
    }
  });

  // Right Side Mini Preview HUD (Flagship VYBE card)
  ctx.fillStyle = '#0b1122';
  ctx.fillRect(canvas.width - 290, 60, 270, 200);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
  ctx.strokeRect(canvas.width - 290, 60, 270, 200);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillText('ACTIVE PROJECT // VYBE', canvas.width - 275, 86);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillText('Social Discovery & Audio Platform', canvas.width - 275, 106);
  ctx.fillText('Stack: React + Supabase + SQL', canvas.width - 275, 124);

  // Audio wave visualizer inside mini preview
  const barHeights = [18, 32, 48, 20, 52, 38, 42, 28, 46, 30, 24, 44, 50, 36];
  barHeights.forEach((h, i) => {
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(canvas.width - 275 + i * 17, 180 - h, 11, h);
  });

  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 10px "JetBrains Mono", monospace';
  ctx.fillText('● LIVE PREVIEW READY', canvas.width - 275, 240);

  // Bottom Status Bar
  ctx.fillStyle = '#060911';
  ctx.fillRect(0, canvas.height - 38, canvas.width, 38);
  ctx.strokeStyle = '#1e293b';
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 38);
  ctx.lineTo(canvas.width, canvas.height - 38);
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('⎇ main*', 20, canvas.height - 14);

  ctx.fillStyle = '#34d399';
  ctx.fillText('✓ 0 Errors   0 Warnings', 110, canvas.height - 14);

  ctx.fillStyle = '#94a3b8';
  ctx.fillText('UTF-8   React 19   Dubai, UAE (UTC+4)', canvas.width - 340, canvas.height - 14);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

/**
 * Generates an ultra-crisp procedural canvas texture for the vertical secondary monitor.
 * Displays the exact telemetry requested:
 * - SYSTEM TELEMETRY
 * - BUILD PASSING
 * - WEBGL ACTIVE
 * - DATABASE READY
 * - NETWORK ONLINE
 * - PROJECTS: VYBE, LOST & FOUND, R&D
 * - Performance metrics & live console stream
 */
export function createTerminalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 960;
  const ctx = canvas.getContext('2d');

  // Deep dark console background
  ctx.fillStyle = '#070b13';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top Header Bar
  ctx.fillStyle = '#0d1424';
  ctx.fillRect(0, 0, canvas.width, 48);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(0, 0, canvas.width, 48);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 14px "JetBrains Mono", monospace';
  ctx.fillText('SYSTEM TELEMETRY // WORKSTATION', 24, 30);

  // --- TELEMETRY STATUS MATRIX ---
  const telemetryItems = [
    { label: 'BUILD', status: 'PASSING', color: '#34d399' },
    { label: 'WEBGL', status: 'ACTIVE', color: '#38bdf8' },
    { label: 'DATABASE', status: 'READY', color: '#10b981' },
    { label: 'NETWORK', status: 'ONLINE', color: '#38bdf8' }
  ];

  ctx.fillStyle = '#0b1120';
  ctx.fillRect(20, 68, canvas.width - 40, 110);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(20, 68, canvas.width - 40, 110);

  telemetryItems.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 40 + col * 270;
    const y = 104 + row * 44;

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText(item.label.padEnd(10, ' '), x, y);

    ctx.fillStyle = item.color;
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText(item.status, x + 110, y);

    // Mini green/cyan indicator dot
    ctx.beginPath();
    ctx.arc(x + 98, y - 4, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // --- PIPELINE / PROJECTS OVERVIEW ---
  ctx.fillStyle = '#0b1120';
  ctx.fillRect(20, 196, canvas.width - 40, 175);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(20, 196, canvas.width - 40, 175);

  ctx.fillStyle = '#c084fc';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('PROJECTS PIPELINE', 38, 226);

  const projects = [
    { name: 'VYBE', role: 'Flagship Web App', status: 'ONLINE', color: '#34d399' },
    { name: 'LOST & FOUND', role: 'Community Network', status: 'BETA', color: '#f59e0b' },
    { name: 'R&D LAB', role: '3D WebGL Workstation', status: 'ACTIVE', color: '#38bdf8' }
  ];

  projects.forEach((proj, idx) => {
    const y = 260 + idx * 36;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('► ' + proj.name, 38, y);

    ctx.fillStyle = '#64748b';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText(proj.role, 195, y);

    ctx.fillStyle = proj.color;
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText(proj.status, 480, y);
  });

  // --- LIVE LATENCY / FPS GRAPH ---
  ctx.fillStyle = '#0b1120';
  ctx.fillRect(20, 388, canvas.width - 40, 110);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(20, 388, canvas.width - 40, 110);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillText('DATABASE EDGE LATENCY (Supabase)', 38, 414);
  ctx.fillStyle = '#34d399';
  ctx.fillText('12ms (Direct)', 450, 414);

  // Latency mini graph bars
  const graphBars = [32, 28, 30, 24, 26, 22, 25, 23, 24, 20, 22, 24, 21, 23, 22, 20, 19, 21, 20];
  graphBars.forEach((val, i) => {
    ctx.fillStyle = '#10b981';
    ctx.fillRect(38 + i * 27, 480 - val * 1.5, 18, val * 1.5);
  });

  // --- TERMINAL OUTPUT STREAM ---
  ctx.fillStyle = '#080d17';
  ctx.fillRect(20, 516, canvas.width - 40, 420);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(20, 516, canvas.width - 40, 420);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('TERMINAL // LIVE LOGS', 38, 546);

  const terminalLines = [
    { text: '$ vite build --profile', color: '#38bdf8' },
    { text: 'vite v6.4.3 building for production...', color: '#64748b' },
    { text: '✓ 1889 modules transformed.', color: '#34d399' },
    { text: 'dist/index.html               1.19 kB', color: '#94a3b8' },
    { text: 'dist/assets/index.css        63.34 kB', color: '#94a3b8' },
    { text: 'dist/assets/three-vendor.js  906.14 kB', color: '#94a3b8' },
    { text: '✓ built in 1m 15s', color: '#34d399' },
    { text: '----------------------------------------', color: '#334155' },
    { text: '[OK] Host: WORKSTATION-ALPHA', color: '#34d399' },
    { text: '[OK] Dubai Geo-Sync: 25.2048° N, 55.2708° E', color: '#38bdf8' },
    { text: '[OK] Timezone: GST (UTC+4)', color: '#94a3b8' },
    { text: '[OK] Ambient Flow: ANC Active', color: '#a855f7' },
    { text: '$ listening on http://localhost:5173...', color: '#38bdf8' },
    { text: '● ALL SYSTEMS OPERATIONAL', color: '#10b981' }
  ];

  ctx.font = '12px "JetBrains Mono", Consolas, monospace';
  terminalLines.forEach((line, index) => {
    ctx.fillStyle = line.color;
    ctx.fillText(line.text, 38, 576 + index * 24);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}
