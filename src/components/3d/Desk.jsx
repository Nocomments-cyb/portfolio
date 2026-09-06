import React, { useRef } from 'react';
import * as THREE from 'three';

export default function Desk({ onSelect, isHovered, setHovered }) {
  const deskRef = useRef();

  return (
    <group ref={deskRef} position={[0, -0.4, -0.8]}>
      {/* Interactive Desk Hitbox */}
      <mesh
        position={[0, 0.45, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered('desk');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect && onSelect('desk');
        }}
        visible={false}
      >
        <boxGeometry args={[3.8, 0.2, 1.8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Main Desktop Surface (Dark Walnut / Carbon Matte) */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.07, 1.6]} />
        <meshStandardMaterial
          color={isHovered ? '#1e293b' : '#141a29'}
          roughness={0.4}
          metalness={0.2}
          emissive={isHovered ? '#0ea5e9' : '#000000'}
          emissiveIntensity={isHovered ? 0.15 : 0}
        />
      </mesh>

      {/* Front Ergonomic Bevel Strip */}
      <mesh position={[0, 0.42, 0.81]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[3.58, 0.03, 0.03]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
      </mesh>

      {/* Large Premium Desk Mat / Pad */}
      <mesh position={[0, 0.487, 0.05]} receiveShadow>
        <boxGeometry args={[2.4, 0.006, 0.85]} />
        <meshStandardMaterial
          color="#0b0f1a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Rear Cable Management Channel */}
      <mesh position={[0, 0.38, -0.65]}>
        <boxGeometry args={[2.8, 0.06, 0.15]} />
        <meshStandardMaterial color="#0a0e17" roughness={0.5} />
      </mesh>

      {/* Motorized Dual-Column Desk Legs (Matte Black Steel) */}
      {/* Left Column */}
      <group position={[-1.4, -0.15, 0]}>
        {/* Upper Column Sleeve */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.12, 0.4, 0.18]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Lower Column Tube */}
        <mesh position={[0, -0.1, 0]} castShadow>
          <boxGeometry args={[0.1, 0.45, 0.16]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Floor T-Foot */}
        <mesh position={[0, -0.36, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.14, 0.05, 1.2]} />
          <meshStandardMaterial color="#090d16" roughness={0.4} metalness={0.8} />
        </mesh>
      </group>

      {/* Right Column */}
      <group position={[1.4, -0.15, 0]}>
        {/* Upper Column Sleeve */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.12, 0.4, 0.18]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Lower Column Tube */}
        <mesh position={[0, -0.1, 0]} castShadow>
          <boxGeometry args={[0.1, 0.45, 0.16]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Floor T-Foot */}
        <mesh position={[0, -0.36, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.14, 0.05, 1.2]} />
          <meshStandardMaterial color="#090d16" roughness={0.4} metalness={0.8} />
        </mesh>
      </group>

      {/* Under-desk Neon LED Glow Strip (Cyan/Indigo) */}
      <mesh position={[0, 0.39, -0.78]}>
        <boxGeometry args={[3.2, 0.015, 0.02]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <pointLight
        position={[0, 0.35, -0.8]}
        color="#38bdf8"
        intensity={0.8}
        distance={2.5}
      />
    </group>
  );
}
