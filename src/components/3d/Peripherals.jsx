import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Peripherals({ onSelect, isHovered, setHovered }) {
  const fanRef = useRef();
  const steamRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (fanRef.current) {
      fanRef.current.rotation.z = t * 4;
    }
    if (steamRef.current) {
      steamRef.current.position.y = 0.12 + (t % 1.5) * 0.08;
      steamRef.current.scale.setScalar(0.8 + (t % 1.5) * 0.6);
      steamRef.current.material.opacity = Math.max(0, 0.4 - (t % 1.5) * 0.25);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* --- CUSTOM MECHANICAL KEYBOARD --- */}
      <group
        position={[-0.1, 0.075, -0.62]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect && onSelect('keyboard');
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered('keyboard');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(null);
        }}
      >
        {/* Keyboard Case */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.62, 0.024, 0.24]} />
          <meshStandardMaterial
            color="#0f172a"
            roughness={0.4}
            metalness={0.7}
            emissive={isHovered === 'keyboard' ? '#38bdf8' : '#000000'}
            emissiveIntensity={isHovered === 'keyboard' ? 0.25 : 0}
          />
        </mesh>

        {/* Keycap Matrix Block */}
        <mesh position={[0, 0.018, 0]}>
          <boxGeometry args={[0.58, 0.015, 0.2]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>

        {/* RGB Underglow Light Strip */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[0.6, 0.005, 0.22]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <pointLight
          position={[0, 0.03, 0]}
          color="#38bdf8"
          intensity={0.35}
          distance={0.6}
        />
      </group>

      {/* --- PRECISION WIRELESS MOUSE --- */}
      <group position={[0.34, 0.075, -0.6]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.11, 0.028, 0.18]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Scroll wheel light */}
        <mesh position={[0, 0.016, -0.03]}>
          <boxGeometry args={[0.015, 0.01, 0.04]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>

      {/* --- CERAMIC COFFEE MUG ON COASTER --- */}
      <group position={[-0.8, 0.065, -0.55]}>
        {/* Cork Coaster */}
        <mesh position={[0, 0.003, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.006, 16]} />
          <meshStandardMaterial color="#78350f" roughness={0.9} />
        </mesh>
        {/* Ceramic Mug Body */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <cylinderGeometry args={[0.065, 0.055, 0.11, 16]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} />
        </mesh>
        {/* Coffee Liquid Surface */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.005, 16]} />
          <meshStandardMaterial color="#1c120c" roughness={0.2} />
        </mesh>
        {/* Steam Particle */}
        <mesh ref={steamRef} position={[0, 0.14, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#cbd5e1" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* --- ARTISAN DESK SUCCULENT --- */}
      <group position={[-1.05, 0.065, -0.75]}>
        {/* Geometric Pot */}
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.05, 0.09, 6]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Succulent Leaves */}
        <mesh position={[0, 0.11, 0]}>
          <coneGeometry args={[0.07, 0.07, 6]} />
          <meshStandardMaterial color="#059669" roughness={0.7} />
        </mesh>
      </group>

      {/* --- LIQUID-COOLED PC CHASSIS (Gaming/Dev Rig) --- */}
      <group position={[1.45, 0.28, -0.75]} rotation={[0, -0.15, 0]}>
        {/* Main Aluminum Chassis */}
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.58, 0.58]} />
          <meshStandardMaterial color="#080c14" roughness={0.3} metalness={0.9} />
        </mesh>
        {/* Tempered Glass Side Panel */}
        <mesh position={[-0.151, 0, 0]}>
          <planeGeometry args={[0.56, 0.56]} />
          <meshPhysicalMaterial
            color="#030712"
            transmission={0.8}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.35}
          />
        </mesh>
        {/* Front Intake Fan RGB Ring (Rotating) */}
        <group ref={fanRef} position={[0, 0.1, 0.291]}>
          <mesh>
            <ringGeometry args={[0.08, 0.095, 24]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>
        {/* Lower Fan RGB Ring */}
        <group position={[0, -0.12, 0.291]}>
          <mesh>
            <ringGeometry args={[0.08, 0.095, 24]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
        {/* Internal Hardware Accent Light */}
        <pointLight
          position={[-0.08, 0.05, 0]}
          color="#818cf8"
          intensity={0.5}
          distance={1.2}
        />
      </group>
    </group>
  );
}
