import React from 'react';
import * as THREE from 'three';

export default function Room({ lightsOn = true, lightMode = 'studio' }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Studio Floor (Polished Slate with Subtle Reflections) */}
      <mesh
        position={[0, -0.85, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial
          color="#060911"
          roughness={0.35}
          metalness={0.35}
        />
      </mesh>

      {/* Left Architectural Acoustic Slat Wall */}
      <group position={[-3.6, 1.2, -1.0]}>
        {/* Wall Backing */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.08, 4.2, 5.5]} />
          <meshStandardMaterial color="#05070f" roughness={0.9} />
        </mesh>
        {/* Decorative Vertical Slat Ribs */}
        {[-2.2, -1.8, -1.4, -1.0, -0.6, -0.2, 0.2, 0.6, 1.0, 1.4, 1.8, 2.2].map((z, i) => (
          <mesh key={i} position={[0.04, 0, z]}>
            <boxGeometry args={[0.04, 4.0, 0.08]} />
            <meshStandardMaterial color="#0d1424" roughness={0.6} />
          </mesh>
        ))}
        {/* Vertical Neon Accent Recess Light Strip */}
        <mesh position={[0.045, 0, 0]}>
          <boxGeometry args={[0.02, 3.8, 0.04]} />
          <meshBasicMaterial color={lightsOn ? (lightMode === 'cyberpunk' ? '#06b6d4' : '#38bdf8') : '#0c2338'} />
        </mesh>
        <pointLight
          position={[0.2, 0, 0]}
          color={lightMode === 'cyberpunk' ? '#06b6d4' : '#38bdf8'}
          intensity={lightsOn ? (lightMode === 'cyberpunk' ? 0.9 : 0.6) : 0.05}
          distance={2.8}
        />
      </group>

      {/* Rear Studio Wall (Behind Desk, framing window) */}
      <group position={[-2.4, 1.2, -3.8]}>
        <mesh>
          <boxGeometry args={[3.2, 4.2, 0.08]} />
          <meshStandardMaterial color="#080c16" roughness={0.8} />
        </mesh>
      </group>

      {/* Floating Modern Studio Wall Shelf (Above Desk) */}
      <group position={[-1.2, 2.1, -3.4]}>
        {/* Shelf Board */}
        <mesh castShadow>
          <boxGeometry args={[2.2, 0.04, 0.32]} />
          <meshStandardMaterial color="#0d1322" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Books / Geometric Display Items */}
        <mesh position={[-0.6, 0.12, 0]}>
          <boxGeometry args={[0.08, 0.22, 0.22]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        <mesh position={[-0.5, 0.1, 0]}>
          <boxGeometry args={[0.07, 0.18, 0.2]} />
          <meshStandardMaterial color="#334155" roughness={0.7} />
        </mesh>
        {/* Futuristic Trophy / Award Polyhedron */}
        <mesh position={[0.5, 0.12, 0]}>
          <octahedronGeometry args={[0.09, 0]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Under-Shelf Ambient LED Strip (Purple Glow) */}
        <mesh position={[0, -0.022, 0]}>
          <boxGeometry args={[2.1, 0.008, 0.02]} />
          <meshBasicMaterial color={lightsOn ? (lightMode === 'cyberpunk' ? '#c084fc' : '#a855f7') : '#281745'} />
        </mesh>
        <pointLight
          position={[0, -0.06, 0]}
          color={lightMode === 'cyberpunk' ? '#c084fc' : '#a855f7'}
          intensity={lightsOn ? (lightMode === 'cyberpunk' ? 0.8 : 0.5) : 0.05}
          distance={2.0}
        />
      </group>
    </group>
  );
}
