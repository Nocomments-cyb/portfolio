import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useCodingScreenTexture } from './CodingScreen';
import { useDeveloperInteraction } from './DeveloperInteractionController';

/**
 * Living Procedural Canvas Hook for the Secondary 27" Vertical 4K Monitor
 * Features dynamic telemetry metrics, pulsing latency graphs, and continuously scrolling terminal logs.
 */
function useSecondaryScreenTexture(lightsOn = true) {
  const canvasRef = useRef(null);
  const textureRef = useRef(null);
  const animRef = useRef({
    lastUpdate: 0,
    logScroll: 0,
    graphStep: 0,
    cursorBlink: true,
  });

  const terminalLogs = useMemo(() => [
    { text: '$ vite build --profile', color: '#38bdf8' },
    { text: 'vite v6.4.3 building for production...', color: '#94a3b8' },
    { text: '✓ 1895 modules transformed.', color: '#34d399' },
    { text: 'dist/index.html               1.30 kB', color: '#cbd5e1' },
    { text: 'dist/assets/index.css        70.26 kB', color: '#cbd5e1' },
    { text: 'dist/assets/three-vendor.js  906.17 kB', color: '#cbd5e1' },
    { text: '✓ built in 59.45s', color: '#34d399' },
    { text: '----------------------------------------', color: '#475569' },
    { text: '[OK] Host: WORKSTATION-ALPHA', color: '#34d399' },
    { text: '[OK] Location: Dubai, United Arab Emirates', color: '#38bdf8' },
    { text: '[OK] Timezone: GST (UTC+4)', color: '#94a3b8' },
    { text: '[OK] Ambient Flow: ANC Active', color: '#c084fc' },
    { text: '[GPU] RTX 4090: 42°C | 24GB VRAM | 145W', color: '#38bdf8' },
    { text: '[MEM] 64GB DDR5-6000: 22% utilized', color: '#34d399' },
    { text: '[NET] 10 Gbps fiber uplink: optimal', color: '#38bdf8' },
    { text: '$ listening on http://localhost:5173...', color: '#38bdf8' },
    { text: '● ALL SYSTEMS 100% OPERATIONAL', color: '#10b981' },
    { text: '✓ Edge cluster ping: 11.4ms (Direct)', color: '#34d399' },
    { text: '✓ Real-time telemetry synchronized', color: '#38bdf8' },
    { text: '----------------------------------------', color: '#475569' },
  ], []);

  // Reusable terminal render function
  const drawTerminal = (canvas, anim) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- 1. LUMINOUS CONSOLE BACKGROUND (Radiant Deep Navy Slate) ---
    ctx.fillStyle = '#141f32';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- 2. TOP HEADER BAR ---
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, 52);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.fillRect(0, 52, canvas.width, 1.5);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    ctx.fillText('SYSTEM TELEMETRY // WORKSTATION', 24, 33);

    // Flashing green power indicator
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(canvas.width - 28, 26, 5.5, 0, Math.PI * 2);
    ctx.fill();

    // --- 3. TELEMETRY STATUS MATRIX (4 Vivid Cards) ---
    const telemetryItems = [
      { label: 'BUILD', status: 'PASSING', color: '#34d399' },
      { label: 'WEBGL', status: 'ACTIVE', color: '#38bdf8' },
      { label: 'DATABASE', status: 'READY', color: '#10b981' },
      { label: 'NETWORK', status: 'ONLINE', color: '#38bdf8' }
    ];

    ctx.fillStyle = '#17253d';
    ctx.fillRect(16, 72, canvas.width - 32, 116);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(16, 72, canvas.width - 32, 116);

    telemetryItems.forEach((item, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = 32 + col * 230;
      const y = 110 + row * 46;

      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(item.label.padEnd(10, ' '), x, y);

      ctx.fillStyle = item.color;
      ctx.font = 'bold 13px "JetBrains Mono", monospace';
      ctx.fillText(item.status, x + 95, y);

      ctx.beginPath();
      ctx.arc(x + 85, y - 4, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // --- 4. PIPELINE / PROJECTS OVERVIEW ---
    ctx.fillStyle = '#17253d';
    ctx.fillRect(16, 208, canvas.width - 32, 185);
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(16, 208, canvas.width - 32, 185);

    ctx.fillStyle = '#c084fc';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText('PROJECTS PIPELINE', 32, 238);

    const projects = [
      { name: 'VYBE', role: 'Flagship Web App', status: 'ONLINE', color: '#34d399' },
      { name: 'LOST & FOUND', role: 'Community Network', status: 'BETA', color: '#f59e0b' },
      { name: 'R&D LAB', role: '3D WebGL Workstation', status: 'ACTIVE', color: '#38bdf8' }
    ];

    projects.forEach((proj, idx) => {
      const y = 274 + idx * 38;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12.5px "JetBrains Mono", monospace';
      ctx.fillText('► ' + proj.name, 32, y);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11.5px "JetBrains Mono", monospace';
      ctx.fillText(proj.role, 175, y);

      ctx.fillStyle = proj.color;
      ctx.font = 'bold 11.5px "JetBrains Mono", monospace';
      ctx.fillText(proj.status, 410, y);
    });

    // --- 5. LIVE LATENCY / FPS GRAPH (Pulsing Animated Waveform) ---
    ctx.fillStyle = '#17253d';
    ctx.fillRect(16, 412, canvas.width - 32, 118);
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(16, 412, canvas.width - 32, 118);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 11.5px "JetBrains Mono", monospace';
    ctx.fillText('DATABASE EDGE LATENCY (Supabase Direct)', 32, 438);

    ctx.fillStyle = '#34d399';
    ctx.fillText('11.4ms (Active)', 380, 438);

    // Animated latency graph bars
    const numBars = 18;
    for (let i = 0; i < numBars; i++) {
      const dynamicVal = 18 + Math.sin(anim.graphStep + i * 0.45) * 10 + Math.cos(i * 0.7) * 6;
      ctx.fillStyle = i === numBars - 1 ? '#38bdf8' : '#10b981';
      ctx.fillRect(32 + i * 25, 510 - dynamicVal * 1.6, 17, dynamicVal * 1.6);
    }

    // --- 6. TERMINAL OUTPUT STREAM (Actively Scrolling Logs) ---
    const termBoxY = 548;
    const termBoxH = 430;
    ctx.fillStyle = '#0e1728';
    ctx.fillRect(16, termBoxY, canvas.width - 32, termBoxH);
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(16, termBoxY, canvas.width - 32, termBoxH);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText('TERMINAL // LIVE LOGS • SYSTEM ACTIVE', 32, 578);

    // Clip streaming logs
    ctx.save();
    ctx.beginPath();
    ctx.rect(16, termBoxY + 38, canvas.width - 32, termBoxH - 74);
    ctx.clip();

    ctx.font = 'bold 12px "JetBrains Mono", Consolas, monospace';
    terminalLogs.forEach((line, index) => {
      let lineY = 612 + index * 26 - anim.logScroll;
      if (lineY < 570) {
        lineY += terminalLogs.length * 26;
      }
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 32, lineY);
    });

    ctx.restore();

    // Terminal command prompt line at bottom
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12.5px "JetBrains Mono", monospace';
    ctx.fillText('admin@dubai-station:~$', 32, canvas.height - 30);
    if (anim.cursorBlink) {
      ctx.fillStyle = '#34d399';
      ctx.fillRect(215, canvas.height - 42, 8, 15);
    }
  };

  // Create canvas and Three.js canvas texture with immediate initial draw
  const texture = useMemo(() => {
    // 512x1024 is true Power-of-Two (2^9 x 2^10), guaranteeing instant WebGL compatibility
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    canvasRef.current = canvas;

    // Draw initial frame immediately so texture is NEVER black on mount
    drawTerminal(canvas, animRef.current);

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = false; // Disable mipmaps for 2D canvas texture
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    textureRef.current = tex;
    return tex;
  }, []);

  useFrame((state) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const t = state.clock.getElapsedTime();
    const anim = animRef.current;

    // Throttle to ~18 FPS
    if (t - anim.lastUpdate < 0.052) return;
    anim.lastUpdate = t;

    anim.cursorBlink = Math.sin(t * 6.5) > 0;
    anim.logScroll = (anim.logScroll + 0.65) % (terminalLogs.length * 26);
    anim.graphStep = t * 2.2;

    // Render active frame
    drawTerminal(canvas, anim);

    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  });

  return texture;
}

export default function Monitors({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const codingTexture = useCodingScreenTexture(lightsOn);
  const terminalTexture = useSecondaryScreenTexture(lightsOn);
  const { activityState } = useDeveloperInteraction();

  return (
    <group position={[0, 0.45, -1.2]}>
      {/* --- PRIMARY ULTRAWIDE 38" MONITOR (Code & IDE) --- */}
      <group
        position={[-0.25, 0.5, 0]}
        rotation={[0, 0.05, 0]}
      >
        {/* Interactive Hitbox */}
        <mesh
          position={[0, 0, 0.05]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered('monitor');
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect && onSelect('monitor');
          }}
          visible={false}
        >
          <planeGeometry args={[2.3, 1.1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Outer Bezel */}
        <mesh castShadow>
          <boxGeometry args={[2.24, 1.04, 0.04]} />
          <meshStandardMaterial color="#080c14" roughness={0.3} metalness={0.85} />
        </mesh>

        {/* Dynamic Screen Display Surface (Living Animated Coding Environment) */}
        <mesh position={[0, 0, 0.021]}>
          <planeGeometry args={[2.2, 1.0]} />
          <meshBasicMaterial
            map={codingTexture}
            toneMapped={false}
          />
        </mesh>

        {/* Hover Emissive Glow Rim */}
        {isHovered && (
          <mesh position={[0, 0, 0.023]}>
            <planeGeometry args={[2.22, 1.02]} />
            <meshBasicMaterial
              color="#38bdf8"
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        )}

        {/* Monitor ScreenBar (Overhead Task Light) */}
        <group position={[0, 0.54, 0.04]}>
          <mesh>
            <cylinderGeometry args={[0.015, 0.015, 1.0, 16]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.01, 0]}>
            <boxGeometry args={[0.9, 0.008, 0.02]} />
            <meshBasicMaterial color={lightsOn ? '#f8fafc' : '#334155'} />
          </mesh>
          <pointLight
            position={[0, -0.12, 0.1]}
            color="#f8fafc"
            intensity={lightsOn ? (activityState === 'coffee' ? 0.5 : 0.95) : 0.1}
            distance={1.8}
          />
        </group>

        {/* Primary Screen Bounce Light (Spilling onto keyboard and desk) */}
        <pointLight
          position={[0, 0, 0.38]}
          color="#38bdf8"
          intensity={lightsOn ? (activityState === 'coffee' ? 0.8 : (isHovered ? 1.6 : 1.35)) : 0.45}
          distance={2.6}
        />
      </group>

      {/* --- SECONDARY VERTICAL 27" 4K MONITOR (Terminal & Telemetry - ACTIVELY POWERED ON) --- */}
      <group
        position={[1.2, 0.54, 0.12]}
        rotation={[0, -0.32, 0]}
      >
        {/* Interactive Hitbox */}
        <mesh
          position={[0, 0, 0.05]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered('monitor');
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect && onSelect('monitor');
          }}
          visible={false}
        >
          <planeGeometry args={[0.8, 1.3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Outer Bezel */}
        <mesh castShadow>
          <boxGeometry args={[0.74, 1.24, 0.04]} />
          <meshStandardMaterial color="#080c14" roughness={0.3} metalness={0.85} />
        </mesh>

        {/* Screen Display Surface (Vivid Living Terminal) */}
        <mesh position={[0, 0, 0.021]}>
          <planeGeometry args={[0.7, 1.2]} />
          <meshBasicMaterial
            map={terminalTexture}
            toneMapped={false}
          />
        </mesh>

        {/* Hover Highlight */}
        {isHovered && (
          <mesh position={[0, 0, 0.023]}>
            <planeGeometry args={[0.72, 1.22]} />
            <meshBasicMaterial
              color="#38bdf8"
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>
        )}

        {/* Secondary Screen Bounce Light (Brightly Illuminating Desk & PC Tower) */}
        <pointLight
          position={[0, 0, 0.35]}
          color="#38bdf8"
          intensity={lightsOn ? (isHovered ? 1.4 : 1.15) : 0.45}
          distance={2.3}
        />
      </group>

      {/* --- DUAL MONITOR ARM MOUNT (Attached to Desk) --- */}
      <group position={[0.2, 0.1, -0.1]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.25, 0.15]} />
          <meshStandardMaterial color="#080d16" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.6, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-0.25, 0.2, 0.05]} rotation={[0, 0.3, 0.1]}>
          <boxGeometry args={[0.5, 0.04, 0.04]} />
          <meshStandardMaterial color="#080d16" metalness={0.8} />
        </mesh>
        <mesh position={[0.45, 0.22, 0.1]} rotation={[0, -0.4, 0.1]}>
          <boxGeometry args={[0.65, 0.04, 0.04]} />
          <meshStandardMaterial color="#080d16" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
