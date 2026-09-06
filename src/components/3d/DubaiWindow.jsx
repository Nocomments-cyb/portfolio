import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DubaiWindow({ onSelect, isHovered, setHovered }) {
  const beaconRef = useRef();
  const windowRef = useRef();

  // Procedural stars for the Dubai night sky
  const stars = useMemo(() => {
    const starCount = 80;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16 + 2;
      positions[i * 3 + 1] = Math.random() * 6 + 1;
      positions[i * 3 + 2] = -6.5 - Math.random() * 2;
    }
    return positions;
  }, []);

  // Burj Khalifa aviation beacon blinking animation
  useFrame((state) => {
    if (beaconRef.current) {
      const time = state.clock.getElapsedTime();
      const intensity = Math.sin(time * 3) > 0.4 ? 1 : 0.1;
      beaconRef.current.intensity = intensity * 2;
    }
  });

  return (
    <group ref={windowRef} position={[2.2, 1.8, -4.2]}>
      {/* Interactive window frame hitbox */}
      <mesh
        position={[0, 0, 0.05]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered('window');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect && onSelect('window');
        }}
        visible={false}
      >
        <planeGeometry args={[7.5, 4.8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* --- EXTERIOR DUBAI SKYLINE & NIGHT SKY --- */}
      {/* Deep Night Sky Backdrop */}
      <mesh position={[0, 0, -2.5]}>
        <planeGeometry args={[14, 8]} />
        <meshBasicMaterial color="#050813" />
      </mesh>

      {/* Atmospheric Horizon Gradient Glow (Purple/Cyan dusk) */}
      <mesh position={[0, -1.2, -2.4]}>
        <planeGeometry args={[14, 3.2]} />
        <meshBasicMaterial
          color="#1e103a"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Night Sky Stars */}
      <points position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={stars.length / 3}
            array={stars}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#e2e8f0"
          transparent
          opacity={0.8}
        />
      </points>

      {/* BURJ KHALIFA (Iconic Centerpiece) */}
      <group position={[1.4, -0.6, -1.8]}>
        {/* Tier 1 - Wide Base */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.3, 0.42, 0.8, 6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#1e293b"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        {/* Tier 2 - Mid Section */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.22, 0.3, 0.9, 6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#1e293b"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        {/* Tier 3 - Upper Tier */}
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.14, 0.22, 0.8, 6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#38bdf8"
            emissiveIntensity={0.15}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        {/* Tier 4 - Tapering Spire Base */}
        <mesh position={[0, 2.6, 0]}>
          <cylinderGeometry args={[0.07, 0.14, 0.7, 6]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive="#38bdf8"
            emissiveIntensity={0.2}
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
        {/* Needle Spire Pinnacle */}
        <mesh position={[0, 3.3, 0]}>
          <cylinderGeometry args={[0.008, 0.07, 0.8, 4]} />
          <meshStandardMaterial
            color="#cbd5e1"
            emissive="#ffffff"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        {/* Red Aviation Beacon at the Spire Tip */}
        <mesh position={[0, 3.72, 0]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <pointLight
          ref={beaconRef}
          position={[0, 3.75, 0]}
          color="#ef4444"
          distance={1.5}
          intensity={1.5}
        />

        {/* Burj Khalifa Glowing Horizontal Floor Bands */}
        {[-0.1, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3].map((y, idx) => (
          <mesh key={idx} position={[0, y + 0.4, 0]}>
            <ringGeometry args={[0.15 - idx * 0.015, 0.17 - idx * 0.015, 12]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
          </mesh>
        ))}
      </group>

      {/* SURROUNDING DUBAI TOWERS (Skyscrapers) */}
      {/* Tower A - Left Architectural Tower with Angled Crown */}
      <group position={[-1.2, -0.6, -1.9]}>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.45, 2.0, 0.45]} />
          <meshStandardMaterial
            color="#0b1120"
            emissive="#1e293b"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>
        {/* Illuminated Crown */}
        <mesh position={[0, 1.95, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.3, 0.3, 0.45]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Tower B - Mid-Left Slender Tower */}
      <group position={[-0.4, -0.8, -2.1]}>
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.35, 1.9, 0.35]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#0f172a"
            roughness={0.5}
            metalness={0.6}
          />
        </mesh>
        <mesh position={[0, 1.85, 0]}>
          <cylinderGeometry args={[0.01, 0.15, 0.4, 4]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* Tower C - Right Modern Tower */}
      <group position={[2.6, -0.7, -1.9]}>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.5, 1.7, 0.5]} />
          <meshStandardMaterial
            color="#0b1329"
            emissive="#1e1b4b"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>
        {/* Crown lighting */}
        <mesh position={[0, 1.62, 0]}>
          <boxGeometry args={[0.52, 0.08, 0.52]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>

      {/* Tower D - Far Right Sleek Tower */}
      <group position={[3.6, -0.9, -2.0]}>
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.2, 0.25, 1.6, 8]} />
          <meshStandardMaterial
            color="#090d16"
            emissive="#1e293b"
            roughness={0.5}
          />
        </mesh>
      </group>

      {/* Highway Traffic Light Streaks (Sheikh Zayed Road Glow) */}
      <mesh position={[1.0, -1.3, -1.6]} rotation={[-Math.PI / 2.2, 0, 0.2]}>
        <planeGeometry args={[7, 0.25]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh position={[1.2, -1.33, -1.6]} rotation={[-Math.PI / 2.2, 0, 0.2]}>
        <planeGeometry args={[7, 0.15]} />
        <meshBasicMaterial
          color="#ef4444"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* --- ARCHITECTURAL WINDOW FRAME & GLASS --- */}
      {/* Outer Window Mullion Frame */}
      <group position={[0, 0, 0]}>
        {/* Top Beam */}
        <mesh position={[0, 2.3, 0]}>
          <boxGeometry args={[7.2, 0.08, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Bottom Sill */}
        <mesh position={[0, -2.3, 0]}>
          <boxGeometry args={[7.2, 0.12, 0.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Left Outer Mullion */}
        <mesh position={[-3.55, 0, 0]}>
          <boxGeometry args={[0.1, 4.6, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Right Outer Mullion */}
        <mesh position={[3.55, 0, 0]}>
          <boxGeometry args={[0.1, 4.6, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Vertical Center Divider Mullions */}
        <mesh position={[-1.15, 0, 0]}>
          <boxGeometry args={[0.06, 4.6, 0.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.15, 0, 0]}>
          <boxGeometry args={[0.06, 4.6, 0.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Glass Pane with Subtle Reflection Tint */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[7.1, 4.6]} />
        <meshPhysicalMaterial
          color="#0f172a"
          transparent
          opacity={0.18}
          roughness={0.1}
          metalness={0.1}
          transmission={0.85}
          ior={1.45}
        />
      </mesh>

      {/* Subtle Frame Highlight when Hovered */}
      {isHovered && (
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[7.1, 4.6]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      )}
    </group>
  );
}
