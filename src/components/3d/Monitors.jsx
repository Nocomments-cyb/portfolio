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

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 960;
    canvasRef.current = canvas;

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    textureRef.current = tex;
    return tex;
  }, []);

  const terminalLogs = useMemo(() => [
    { text: '$ vite build --profile', color: '#38bdf8' },
    { text: 'vite v6.4.3 building for production...', color: '#64748b' },
    { text: '✓ 1889 modules transformed.', color: '#34d399' },
    { text: 'dist/index.html               1.19 kB', color: '#94a3b8' },
    { text: 'dist/assets/index.css        63.34 kB', color: '#94a3b8' },
    { text: 'dist/assets/three-vendor.js  906.14 kB', color: '#94a3b8' },
    { text: '✓ built in 1m 15s', color: '#34d399' },
    { text: '----------------------------------------', color: '#334155' },
    { text: '[OK] Host: WORKSTATION-ALPHA', color: '#34d399' },
    { text: '[OK] Location: Dubai, United Arab Emirates', color: '#38bdf8' },
    { text: '[OK] Timezone: GST (UTC+4)', color: '#94a3b8' },
    { text: '[OK] Ambient Flow: ANC Active', color: '#a855f7' },
    { text: '[GPU] RTX 4090: 42°C | 24GB VRAM | 145W', color: '#38bdf8' },
    { text: '[MEM] 64GB DDR5-6000: 22% utilized', color: '#34d399' },
    { text: '[NET] 10 Gbps fiber uplink: optimal', color: '#38bdf8' },
    { text: '$ listening on http://localhost:5173...', color: '#38bdf8' },
    { text: '● ALL SYSTEMS 100% OPERATIONAL', color: '#10b981' },
    { text: '✓ Edge cluster ping: 11.4ms (Direct)', color: '#34d399' },
    { text: '✓ Real-time telemetry synchronized', color: '#38bdf8' },
    { text: '----------------------------------------', color: '#334155' },
  ], []);

  useFrame((state) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const t = state.clock.getElapsedTime();
    const anim = animRef.current;

    // Throttle to ~18 FPS
    if (t - anim.lastUpdate < 0.052) return;
    anim.lastUpdate = t;

    anim.cursorBlink = Math.sin(t * 6.5) > 0;
    anim.logScroll = (anim.logScroll + 0.65) % (terminalLogs.length * 24);
    anim.graphStep = t * 2.2;

    // --- CANVAS RENDERING ---
    // Deep obsidian background
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

    // Flashing green power indicator
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(canvas.width - 32, 24, 5, 0, Math.PI * 2);
    ctx.fill();

    // --- TELEMETRY STATUS MATRIX (4 Vivid Cards) ---
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

    // --- LIVE LATENCY / FPS GRAPH (Pulsing Animated Waveform) ---
    ctx.fillStyle = '#0b1120';
    ctx.fillRect(20, 388, canvas.width - 40, 110);
    ctx.strokeStyle = '#1e293b';
    ctx.strokeRect(20, 388, canvas.width - 40, 110);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('DATABASE EDGE LATENCY (Supabase Direct)', 38, 414);

    const currentPing = (11.2 + Math.sin(t * 1.5) * 0.8).toFixed(1);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`${currentPing}ms (Active)`, 440, 414);

    // Animated latency graph bars
    const numBars = 19;
    for (let i = 0; i < numBars; i++) {
      const dynamicVal = 20 + Math.sin(anim.graphStep + i * 0.4) * 9 + Math.cos(i * 0.7) * 6;
      ctx.fillStyle = i === numBars - 1 ? '#38bdf8' : '#10b981';
      ctx.fillRect(38 + i * 27, 480 - dynamicVal * 1.6, 18, dynamicVal * 1.6);
    }

    // --- TERMINAL OUTPUT STREAM (Actively Scrolling Logs) ---
    const termBoxY = 516;
    const termBoxH = 420;
    ctx.fillStyle = '#080d17';
    ctx.fillRect(20, termBoxY, canvas.width - 40, termBoxH);
    ctx.strokeStyle = '#1e293b';
    ctx.strokeRect(20, termBoxY, canvas.width - 40, termBoxH);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('TERMINAL // LIVE LOGS • SYSTEM ACTIVE', 38, 546);

    // Clip streaming logs
    ctx.save();
    ctx.beginPath();
    ctx.rect(20, termBoxY + 36, canvas.width - 40, termBoxH - 66);
    ctx.clip();

    ctx.font = '12px "JetBrains Mono", Consolas, monospace';
    terminalLogs.forEach((line, index) => {
      let lineY = 578 + index * 24 - anim.logScroll;
      if (lineY < 540) {
        lineY += terminalLogs.length * 24;
      }
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 38, lineY);
    });

    ctx.restore();

    // Terminal command prompt line at bottom
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('admin@dubai-station:~$', 38, canvas.height - 30);
    if (anim.cursorBlink) {
      ctx.fillStyle = '#34d399';
      ctx.fillRect(215, canvas.height - 42, 8, 15);
    }

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
            intensity={lightsOn ? (activityState === 'coffee' ? 0.35 : 0.7) : 0.05}
            distance={1.6}
          />
        </group>

        {/* Primary Screen Bounce Light (Spilling onto keyboard and desk) */}
        <pointLight
          position={[0, 0, 0.38]}
          color="#38bdf8"
          intensity={lightsOn ? (activityState === 'coffee' ? 0.55 : (isHovered ? 1.2 : 0.95)) : 0.3}
          distance={2.4}
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
          intensity={lightsOn ? (isHovered ? 1.2 : 0.85) : 0.35}
          distance={2.2}
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
