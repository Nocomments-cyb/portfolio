import * as THREE from 'three';

/**
 * Generates an ultra-crisp procedural canvas texture for the primary ultrawide monitor.
 * Displays a realistic dark-mode code editor with syntax highlighting.
 */
export function createIDETexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Editor background
  ctx.fillStyle = '#0a0e17';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top window / tab bar
  ctx.fillStyle = '#0f1422';
  ctx.fillRect(0, 0, canvas.width, 42);

  // Tab controls
  ctx.fillStyle = '#ff5f56';
  ctx.beginPath();
  ctx.arc(20, 21, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffbd2e';
  ctx.beginPath();
  ctx.arc(38, 21, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#27c93f';
  ctx.beginPath();
  ctx.arc(56, 21, 5, 0, Math.PI * 2);
  ctx.fill();

  // Active tab
  ctx.fillStyle = '#151c2e';
  ctx.fillRect(80, 6, 170, 36);
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 14px monospace';
  ctx.fillText('App.jsx', 105, 28);

  // Inactive tab
  ctx.fillStyle = '#64748b';
  ctx.font = '13px monospace';
  ctx.fillText('Projects.jsx', 270, 28);
  ctx.fillText('DubaiScene.3d', 390, 28);

  // Left sidebar / line numbers
  ctx.fillStyle = '#0d121f';
  ctx.fillRect(0, 42, 50, canvas.height - 72);

  // Line numbers
  ctx.fillStyle = '#334155';
  ctx.font = '13px monospace';
  for (let i = 1; i <= 20; i++) {
    ctx.fillText(i.toString().padStart(2, ' '), 14, 50 + i * 20);
  }

  // Code lines with syntax highlighting
  const codeLines = [
    { text: 'import { ProductEngineer } from "@nocomment/core";', color: '#c084fc' },
    { text: 'import { React, Vite, Supabase } from "modern-stack";', color: '#c084fc' },
    { text: '', color: '' },
    { text: '// Initializing developer workspace environment', color: '#64748b' },
    { text: 'export default function DeveloperStation() {', color: '#38bdf8' },
    { text: '  const engineer = {', color: '#f1f5f9' },
    { text: '    alias: "No Comment",', color: '#34d399' },
    { text: '    location: "Dubai, United Arab Emirates",', color: '#34d399' },
    { text: '    mission: "I build ideas into products.",', color: '#fbbf24' },
    { text: '    focus: ["Full-Stack", "High Performance", "Cinematic UI"],', color: '#f472b6' },
    { text: '    status: "READY_TO_DEPLOY"', color: '#34d399' },
    { text: '  };', color: '#f1f5f9' },
    { text: '', color: '' },
    { text: '  return (', color: '#38bdf8' },
    { text: '    <Workspace skyline="Burj Khalifa" atmosphere="Night">', color: '#818cf8' },
    { text: '      <DualMonitors codeActive={true} />', color: '#38bdf8' },
    { text: '      <Products flagship="VYBE" pipeline="Lost & Found" />', color: '#38bdf8' },
    { text: '    </Workspace>', color: '#818cf8' },
    { text: '  );', color: '#38bdf8' },
    { text: '}', color: '#38bdf8' },
  ];

  ctx.font = '13px "JetBrains Mono", Consolas, monospace';
  codeLines.forEach((line, index) => {
    if (line.text) {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 68, 70 + index * 20);
    }
  });

  // Bottom status bar
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, canvas.height - 30, canvas.width, 30);
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('⎇ main*', 20, canvas.height - 10);
  ctx.fillStyle = '#34d399';
  ctx.fillText('✓ 0 Errors', 100, canvas.height - 10);
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('UTF-8   React 19   Dubai, UAE (UTC+4)', canvas.width - 320, canvas.height - 10);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

/**
 * Generates an ultra-crisp procedural canvas texture for the vertical secondary monitor.
 * Displays terminal logs, system telemetry, and database connection status.
 */
export function createTerminalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Terminal background
  ctx.fillStyle = '#080c14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Terminal Header
  ctx.fillStyle = '#0d1322';
  ctx.fillRect(0, 0, canvas.width, 38);
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('TELEMETRY_LOGS // BASH', 20, 24);

  // Terminal Content Lines
  const terminalLines = [
    { text: '$ sys-status --detailed', color: '#38bdf8' },
    { text: '[OK] Host: WORKSTATION-ALPHA', color: '#34d399' },
    { text: '[OK] Coordinates: 25.2048° N, 55.2708° E', color: '#94a3b8' },
    { text: '[OK] Engine: Three.js + R3F Canvas', color: '#94a3b8' },
    { text: '[OK] Database: Supabase PostgreSQL', color: '#34d399' },
    { text: '     Latency: 12ms (Direct Edge)', color: '#34d399' },
    { text: '----------------------------------------', color: '#334155' },
    { text: '$ npm run build:production', color: '#38bdf8' },
    { text: 'vite v6.4.3 building for production...', color: '#94a3b8' },
    { text: '✓ 1859 modules transformed.', color: '#34d399' },
    { text: 'dist/index.html    1.11 kB', color: '#cbd5e1' },
    { text: 'dist/assets/*.css  63.2 kB', color: '#cbd5e1' },
    { text: 'dist/assets/*.js  259.5 kB', color: '#cbd5e1' },
    { text: '✓ Built successfully in 15.09s', color: '#34d399' },
    { text: '----------------------------------------', color: '#334155' },
    { text: 'FLAGSHIP PROJECT: VYBE', color: '#f59e0b' },
    { text: 'Status: Live Demo Active', color: '#34d399' },
    { text: 'Lost & Found: In Development', color: '#60a5fa' },
    { text: 'Next-Gen R&D: Canvas Active', color: '#c084fc' },
    { text: '----------------------------------------', color: '#334155' },
    { text: '$ listening on port 5173...', color: '#38bdf8' },
    { text: '● STREAM ONLINE', color: '#34d399' },
  ];

  ctx.font = '13px "JetBrains Mono", Consolas, monospace';
  terminalLines.forEach((line, index) => {
    ctx.fillStyle = line.color;
    ctx.fillText(line.text, 24, 70 + index * 26);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}
