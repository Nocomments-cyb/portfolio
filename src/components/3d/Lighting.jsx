import React from 'react';

export default function Lighting() {
  return (
    <group>
      {/* Base Deep Night Atmospheric Fill (Controlled shadows without pure black) */}
      <ambientLight color="#080e1e" intensity={0.72} />

      {/* Main Studio Key Light (Gentle overhead directional) */}
      <directionalLight
        position={[2.4, 4.2, 2.2]}
        intensity={0.95}
        color="#e2e8f0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-bias={-0.001}
      />

      {/* Subtle Purple Rim / Hair Light (Articulates developer silhouette) */}
      <directionalLight
        position={[-2.8, 2.2, -2.2]}
        intensity={1.05}
        color="#7c3aed"
      />

      {/* Exterior Dubai Nocturnal Window Fill (Cool sky illumination through glass) */}
      <directionalLight
        position={[3.2, 1.8, -3.2]}
        intensity={0.65}
        color="#38bdf8"
      />

      {/* Subtle Wall Slat Glow */}
      <pointLight
        position={[-1.8, 1.6, -1.8]}
        color="#8b5cf6"
        intensity={0.45}
        distance={3.2}
      />

      {/* Soft Desk Surface Fill */}
      <pointLight
        position={[0.2, 0.9, -0.6]}
        color="#38bdf8"
        intensity={0.35}
        distance={2.0}
      />
    </group>
  );
}
