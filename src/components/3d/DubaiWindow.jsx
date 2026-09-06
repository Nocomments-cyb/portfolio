import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DubaiWindow({ onSelect, isHovered, setHovered }) {
  const beaconRef = useRef();
  const aircraftRef = useRef();
  const aircraftLightRef = useRef();
  const windowRef = useRef();

  // Procedural stars for the Dubai night sky
  const stars = useMemo(() => {
    const starCount = 90;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18 + 2;
      positions[i * 3 + 1] = Math.random() * 5.5 + 1.2;
      positions[i * 3 + 2] = -6.5 - Math.random() * 2;
    }
    return positions;
  }, []);

  // Distant city lights particles for atmospheric depth
  const distantCityLights = useMemo(() => {
    const lightCount = 120;
    const positions = new Float32Array(lightCount * 3);
    for (let i = 0; i < lightCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10 + 1.5;
      positions[i * 3 + 1] = Math.random() * 1.6 - 0.8;
      positions[i * 3 + 2] = -3.8 - Math.random() * 1.5;
    }
    return positions;
  }, []);

  // Burj Khalifa aviation beacon & distant aircraft movement
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Burj Khalifa 1Hz beacon pulse
    if (beaconRef.current) {
      const pulse = Math.sin(t * 3.14) > 0.3 ? 1 : 0.08;
      beaconRef.current.intensity = pulse * 2.2;
    }

    // Distant aircraft drifting smoothly across the night sky
    if (aircraftRef.current) {
      const progress = (t * 0.08) % 1;
      const x = -3.0 + progress * 10;
      const y = 2.4 + Math.sin(progress * 4) * 0.15;
      aircraftRef.current.position.set(x, y, -4.5);

      if (aircraftLightRef.current) {
        const blink = Math.sin(t * 8) > 0.5 ? 1 : 0;
        aircraftLightRef.current.intensity = blink * 1.5;
      }
    }
  });

  return (
    <group ref={windowRef} position={[2.2, 1.8, -4.2]}>
      {/* Interactive Hitbox */}
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

      {/* --- EXTERIOR DUBAI SKYLINE & ATMOSPHERE --- */}
      {/* Night Sky Dome Backdrop */}
      <mesh position={[0, 0, -2.8]}>
        <planeGeometry args={[16, 9]} />
        <meshBasicMaterial color="#040711" />
      </mesh>

      {/* Atmospheric Horizon Dusk Gradient (Purple/Indigo Haze) */}
      <mesh position={[0, -1.0, -2.6]}>
        <planeGeometry args={[16, 3.6]} />
        <meshBasicMaterial
          color="#160e29"
          transparent
          opacity={0.75}
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
          size={0.035}
          color="#e2e8f0"
          transparent
          opacity={0.8}
        />
      </points>

      {/* Distant Background City Lights Layer (Atmospheric Depth) */}
      <points position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={distantCityLights.length / 3}
            array={distantCityLights}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#38bdf8"
          transparent
          opacity={0.45}
        />
      </points>

      {/* Distant Aircraft in Flight */}
      <group ref={aircraftRef} position={[0, 2.4, -4.5]}>
        <mesh>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <pointLight
          ref={aircraftLightRef}
          color="#22c55e"
          distance={1.2}
          intensity={1}
        />
      </group>

      {/* BURJ KHALIFA (Distinctive Iconic 3D Spire) */}
      <group position={[1.4, -0.6, -1.8]}>
        {/* Tier 1 - Wide Y-Setback Base */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.32, 0.45, 0.85, 6]} />
          <meshStandardMaterial
            color="#0d1424"
            emissive="#111c33"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        {/* Tier 2 - Setback Section 1 */}
        <mesh position={[0, 1.15, 0]}>
          <cylinderGeometry args={[0.24, 0.32, 0.9, 6]} />
          <meshStandardMaterial
            color="#0d1424"
            emissive="#152038"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        {/* Tier 3 - Setback Section 2 */}
        <mesh position={[0, 1.95, 0]}>
          <cylinderGeometry args={[0.16, 0.24, 0.85, 6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#38bdf8"
            emissiveIntensity={0.12}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
        {/* Tier 4 - Setback Section 3 */}
        <mesh position={[0, 2.65, 0]}>
          <cylinderGeometry args={[0.09, 0.16, 0.75, 6]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive="#38bdf8"
            emissiveIntensity={0.18}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
        {/* Tier 5 - Tapering Pinnacle Spire Base */}
        <mesh position={[0, 3.3, 0]}>
          <cylinderGeometry args={[0.035, 0.09, 0.65, 6]} />
          <meshStandardMaterial
            color="#334155"
            emissive="#cbd5e1"
            emissiveIntensity={0.25}
            metalness={0.9}
          />
        </mesh>
        {/* Needle Pinnacle Tip */}
        <mesh position={[0, 3.82, 0]}>
          <cylinderGeometry args={[0.006, 0.035, 0.7, 4]} />
          <meshStandardMaterial
            color="#f1f5f9"
            emissive="#ffffff"
            emissiveIntensity={0.7}
            metalness={0.95}
          />
        </mesh>
        {/* Red Hazard Beacon at Spire Summit */}
        <mesh position={[0, 4.18, 0]}>
          <sphereGeometry args={[0.024, 8, 8]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <pointLight
          ref={beaconRef}
          position={[0, 4.2, 0]}
          color="#ef4444"
          distance={1.8}
          intensity={1.8}
        />

        {/* Burj Khalifa Architectural Light Rings */}
        {[-0.1, 0.35, 0.8, 1.25, 1.7, 2.15, 2.6, 3.05].map((y, idx) => (
          <mesh key={idx} position={[0, y + 0.35, 0]}>
            <ringGeometry args={[0.18 - idx * 0.016, 0.2 - idx * 0.016, 16]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>

      {/* MIDGROUND DUBAI HIGH-RISES */}
      {/* Tower A - Left Architectural Tower with Slanted Illuminated Crown */}
      <group position={[-1.3, -0.6, -1.9]}>
        <mesh position={[0, 0.95, 0]}>
          <boxGeometry args={[0.48, 2.1, 0.48]} />
          <meshStandardMaterial
            color="#0a101d"
            emissive="#121b2d"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[0, 2.05, 0]} rotation={[0, 0, Math.PI / 5]}>
          <boxGeometry args={[0.32, 0.32, 0.48]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.65}
          />
        </mesh>
      </group>

      {/* Tower B - Slender Twin Antenna Tower */}
      <group position={[-0.45, -0.75, -2.1]}>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.36, 2.0, 0.36]} />
          <meshStandardMaterial
            color="#0b1220"
            emissive="#0d1726"
            roughness={0.5}
            metalness={0.6}
          />
        </mesh>
        <mesh position={[-0.08, 1.98, 0]}>
          <cylinderGeometry args={[0.008, 0.012, 0.35, 4]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[0.08, 1.98, 0]}>
          <cylinderGeometry args={[0.008, 0.012, 0.35, 4]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* Tower C - Right Modern Tower with Purple Crown */}
      <group position={[2.7, -0.7, -1.9]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.52, 1.8, 0.52]} />
          <meshStandardMaterial
            color="#0b1329"
            emissive="#171438"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[0, 1.73, 0]}>
          <boxGeometry args={[0.54, 0.09, 0.54]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>

      {/* Tower D - Far Right Cylindrical Tower */}
      <group position={[3.75, -0.85, -2.0]}>
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.22, 0.28, 1.7, 12]} />
          <meshStandardMaterial
            color="#080d16"
            emissive="#111928"
            roughness={0.5}
          />
        </mesh>
      </group>

      {/* Sheikh Zayed Road Highway Traffic Light Streaks */}
      <mesh position={[1.0, -1.3, -1.6]} rotation={[-Math.PI / 2.2, 0, 0.2]}>
        <planeGeometry args={[7.5, 0.26]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.42}
        />
      </mesh>
      <mesh position={[1.2, -1.34, -1.6]} rotation={[-Math.PI / 2.2, 0, 0.2]}>
        <planeGeometry args={[7.5, 0.16]} />
        <meshBasicMaterial
          color="#ef4444"
          transparent
          opacity={0.38}
        />
      </mesh>

      {/* --- ARCHITECTURAL WINDOW FRAME & GLASS --- */}
      <group position={[0, 0, 0]}>
        <mesh position={[0, 2.3, 0]}>
          <boxGeometry args={[7.2, 0.08, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, -2.3, 0]}>
          <boxGeometry args={[7.2, 0.12, 0.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[-3.55, 0, 0]}>
          <boxGeometry args={[0.1, 4.6, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[3.55, 0, 0]}>
          <boxGeometry args={[0.1, 4.6, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[-1.15, 0, 0]}>
          <boxGeometry args={[0.06, 4.6, 0.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.15, 0, 0]}>
          <boxGeometry args={[0.06, 4.6, 0.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Glass Pane with Physical Reflection Tint */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[7.1, 4.6]} />
        <meshPhysicalMaterial
          color="#0f172a"
          transparent
          opacity={0.16}
          roughness={0.1}
          metalness={0.1}
          transmission={0.88}
          ior={1.45}
        />
      </mesh>

      {/* Subtle Frame Highlight on Hover */}
      {isHovered && (
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[7.1, 4.6]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      )}
    </group>
  );
}
