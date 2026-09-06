import React from 'react';
import * as THREE from 'three';

export default function Room({ lightsOn = true, lightMode = 'studio' }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Studio Floor (Polished Slate with Soft Specular Catch) */}
      <mesh
        position={[0, -0.85, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial
          color="#141a29"
          roughness={0.4}
          metalness={0.25}
        />
      </mesh>

      {/* Modern Studio Ceiling & Linear Light Fixtures */}
      <group position={[0, 3.4, 0]}>
        {/* Ceiling Base Plane */}
        <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>

        {/* Central Studio Linear Downlight Fixture (Main Room Light Fixture) */}
        <group position={[0, -0.02, 0.4]}>
          <mesh>
            <boxGeometry args={[2.8, 0.04, 0.28]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Glowing Diffuser Bar */}
          <mesh position={[0, -0.021, 0]}>
            <boxGeometry args={[2.7, 0.01, 0.22]} />
            <meshBasicMaterial
              color={lightsOn ? (lightMode === 'cyberpunk' ? '#e0f2fe' : '#fffbeb') : '#334155'}
            />
          </mesh>
        </group>

        {/* Perimeter Recessed Warm Accent Strip */}
        <group position={[-2.4, -0.02, -0.2]}>
          <mesh>
            <boxGeometry args={[0.18, 0.03, 3.6]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh position={[0, -0.016, 0]}>
            <boxGeometry args={[0.12, 0.01, 3.5]} />
            <meshBasicMaterial
              color={lightsOn ? (lightMode === 'cyberpunk' ? '#38bdf8' : '#e2e8f0') : '#1e293b'}
            />
          </mesh>
        </group>
      </group>

      {/* Left Architectural Acoustic Slat Wall */}
      <group position={[-3.6, 1.2, -1.0]}>
        {/* Wall Backing */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.08, 4.2, 5.5]} />
          <meshStandardMaterial color="#0f172a" roughness={0.85} />
        </mesh>
        {/* Decorative Vertical Slat Ribs */}
        {[-2.2, -1.8, -1.4, -1.0, -0.6, -0.2, 0.2, 0.6, 1.0, 1.4, 1.8, 2.2].map((z, i) => (
          <mesh key={i} position={[0.04, 0, z]}>
            <boxGeometry args={[0.04, 4.0, 0.08]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} />
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
          intensity={lightsOn ? (lightMode === 'cyberpunk' ? 1.1 : 0.85) : 0.1}
          distance={3.2}
        />
      </group>

      {/* Rear Studio Wall (Behind Desk, framing window) */}
      <group position={[-2.4, 1.2, -3.8]}>
        <mesh>
          <boxGeometry args={[3.2, 4.2, 0.08]} />
          <meshStandardMaterial color="#111827" roughness={0.75} />
        </mesh>
      </group>

      {/* Floating Modern Studio Wall Shelf (Above Desk) */}
      <group position={[-1.2, 2.1, -3.4]}>
        {/* Shelf Board */}
        <mesh castShadow>
          <boxGeometry args={[2.2, 0.04, 0.32]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Books / Geometric Display Items */}
        <mesh position={[-0.6, 0.12, 0]}>
          <boxGeometry args={[0.08, 0.22, 0.22]} />
          <meshStandardMaterial color="#334155" roughness={0.7} />
        </mesh>
        <mesh position={[-0.5, 0.1, 0]}>
          <boxGeometry args={[0.07, 0.18, 0.2]} />
          <meshStandardMaterial color="#475569" roughness={0.7} />
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
          intensity={lightsOn ? (lightMode === 'cyberpunk' ? 1.0 : 0.75) : 0.1}
          distance={2.4}
        />
      </group>
    </group>
  );
}
