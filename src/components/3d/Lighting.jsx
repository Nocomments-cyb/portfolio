import React from 'react';

export default function Lighting() {
  return (
    <group>
      {/* Base Atmospheric Ambient Light (Prevents crushed blacks) */}
      <ambientLight color="#0b1122" intensity={0.9} />

      {/* Main Studio Key Light (Overhead directional) */}
      <directionalLight
        position={[2.5, 4.5, 2.5]}
        intensity={1.1}
        color="#e0e7ff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-bias={-0.001}
      />

      {/* Subtle Rim / Edge Light (Outlines character and chair) */}
      <directionalLight
        position={[-3.0, 2.5, -2.5]}
        intensity={1.3}
        color="#818cf8"
      />

      {/* Exterior Dubai Sky Fill (Cool midnight incoming through window) */}
      <directionalLight
        position={[3.5, 2.0, -3.5]}
        intensity={0.9}
        color="#38bdf8"
      />

      {/* Soft Purple Ambient Fill */}
      <pointLight
        position={[-1.5, 1.8, -1.5]}
        color="#9333ea"
        intensity={0.8}
        distance={4.5}
      />

      {/* Soft Cyan Workspace Accent */}
      <pointLight
        position={[1.8, 1.5, -0.5]}
        color="#06b6d4"
        intensity={0.7}
        distance={4.0}
      />
    </group>
  );
}
