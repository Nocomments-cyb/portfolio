import React, { useMemo } from 'react';
import * as THREE from 'three';
import { createIDETexture, createTerminalTexture } from './screenTextures';

export default function Monitors({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const ideTexture = useMemo(() => createIDETexture(), []);
  const terminalTexture = useMemo(() => createTerminalTexture(), []);

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

        {/* Screen Display Surface */}
        <mesh position={[0, 0, 0.021]}>
          <planeGeometry args={[2.2, 1.0]} />
          <meshBasicMaterial
            map={ideTexture}
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
            intensity={lightsOn ? 0.5 : 0.02}
            distance={1.4}
          />
        </group>

        {/* Primary Screen Bounce Light (Spilling onto keyboard and desk) */}
        <pointLight
          position={[0, 0, 0.38]}
          color="#38bdf8"
          intensity={lightsOn ? (isHovered ? 0.9 : 0.65) : 0.2}
          distance={2.0}
        />
      </group>

      {/* --- SECONDARY VERTICAL 27" 4K MONITOR (Terminal & Logs) --- */}
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

        {/* Screen Display Surface */}
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
              color="#818cf8"
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        )}

        {/* Secondary Screen Bounce Light */}
        <pointLight
          position={[0, 0, 0.35]}
          color="#818cf8"
          intensity={lightsOn ? (isHovered ? 0.75 : 0.45) : 0.15}
          distance={1.6}
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
