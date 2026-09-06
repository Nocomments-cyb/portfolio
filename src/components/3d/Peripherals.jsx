import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

export default function Peripherals({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const { phoneActive, triggerPhone, triggerKeyboard, activityState } = useDeveloperInteraction();
  const fanRef = useRef();
  const hddLedRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (fanRef.current) {
      fanRef.current.rotation.z = t * 3.5;
    }
    if (hddLedRef.current) {
      // Intermittent hard drive activity blink
      const blink = Math.sin(t * 12) > 0.6 ? 1 : 0.1;
      hddLedRef.current.intensity = blink * 0.8;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* --- CUSTOM 75% MECHANICAL KEYBOARD (Clickable Boost) --- */}
      <group
        position={[-0.1, 0.075, -0.62]}
        onClick={(e) => {
          e.stopPropagation();
          triggerKeyboard();
          onSelect && onSelect('keyboard');
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('keyboard');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
        }}
      >
        {/* Keyboard Chassis */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.62, 0.024, 0.24]} />
          <meshStandardMaterial
            color="#0f172a"
            roughness={0.35}
            metalness={0.7}
            emissive={isHovered === 'keyboard' || activityState === 'boost' ? '#38bdf8' : '#000000'}
            emissiveIntensity={activityState === 'boost' ? 0.4 : isHovered === 'keyboard' ? 0.3 : 0}
          />
        </mesh>

        {/* Keycap Matrix Block */}
        <mesh position={[0, 0.018, 0]}>
          <boxGeometry args={[0.58, 0.015, 0.2]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>

        {/* Braided USB Cable to Desk Grommet */}
        <mesh position={[0, -0.005, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.12, 8]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>

        {/* RGB Underglow Light Strip */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[0.6, 0.005, 0.22]} />
          <meshBasicMaterial color={activityState === 'boost' ? '#38bdf8' : '#0284c7'} />
        </mesh>
        <pointLight
          position={[0, 0.03, 0]}
          color="#38bdf8"
          intensity={activityState === 'boost' ? 0.85 : (isHovered === 'keyboard' ? 0.6 : 0.38)}
          distance={0.8}
        />
      </group>

      {/* --- PRECISION WIRELESS MOUSE --- */}
      <group position={[0.34, 0.075, -0.6]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.11, 0.028, 0.18]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Scroll Wheel Light */}
        <mesh position={[0, 0.016, -0.03]}>
          <boxGeometry args={[0.015, 0.01, 0.04]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>

      {/* --- SMARTPHONE LYING FLAT ON DESK (Clickable Notification) --- */}
      <group
        position={[-0.48, 0.074, -0.46]}
        rotation={[0, 0.12, 0]}
        onClick={(e) => {
          e.stopPropagation();
          triggerPhone();
          onSelect && onSelect('phone');
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('phone');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
        }}
      >
        {/* Phone Body */}
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.01, 0.22]} />
          <meshStandardMaterial
            color="#0b0f19"
            metalness={0.9}
            roughness={0.2}
            emissive={isHovered === 'phone' ? '#10b981' : '#000000'}
            emissiveIntensity={isHovered === 'phone' ? 0.2 : 0}
          />
        </mesh>
        {/* Screen Glass (Wakes with vivid notification when active) */}
        <mesh position={[0, 0.006, 0]}>
          <planeGeometry args={[0.11, 0.21]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshPhysicalMaterial
            color={phoneActive ? '#0284c7' : '#040711'}
            emissive={phoneActive ? '#38bdf8' : '#000000'}
            emissiveIntensity={phoneActive ? 0.6 : 0}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
        {/* Notification Status Indicator */}
        <mesh position={[0.04, 0.007, -0.09]}>
          <sphereGeometry args={[0.003, 6, 6]} />
          <meshBasicMaterial color={phoneActive ? '#38bdf8' : '#10b981'} />
        </mesh>
        {phoneActive && (
          <pointLight
            position={[0, 0.06, 0]}
            color="#38bdf8"
            intensity={0.6}
            distance={0.8}
          />
        )}
      </group>

      {/* --- MINIMALIST LINEN NOTEBOOK & PEN --- */}
      <group position={[-1.24, 0.072, -0.48]} rotation={[0, -0.08, 0]}>
        {/* Notebook Cover */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.26, 0.018, 0.36]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        {/* Metal Pen */}
        <mesh position={[0.16, 0.01, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.004, 0.004, 0.28, 8]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* --- ARTISAN DESK SUCCULENT --- */}
      <group position={[-1.05, 0.065, -0.75]}>
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.05, 0.09, 6]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.11, 0]}>
          <coneGeometry args={[0.07, 0.07, 6]} />
          <meshStandardMaterial color="#059669" roughness={0.7} />
        </mesh>
      </group>

      {/* --- LIQUID-COOLED PC CHASSIS --- */}
      <group position={[1.45, 0.28, -0.75]} rotation={[0, -0.15, 0]}>
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
        {/* Front Intake Fan 1 (Rotating) */}
        <group ref={fanRef} position={[0, 0.1, 0.291]}>
          <mesh>
            <ringGeometry args={[0.08, 0.095, 24]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>
        {/* Front Intake Fan 2 */}
        <group position={[0, -0.12, 0.291]}>
          <mesh>
            <ringGeometry args={[0.08, 0.095, 24]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
        {/* Power LED & HDD Activity LED */}
        <mesh position={[0.1, 0.27, 0.292]}>
          <sphereGeometry args={[0.006, 6, 6]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.06, 0.27, 0.292]}>
          <sphereGeometry args={[0.005, 6, 6]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
        <pointLight
          ref={hddLedRef}
          position={[0.06, 0.27, 0.32]}
          color="#f59e0b"
          distance={0.5}
          intensity={0.5}
        />
        {/* Internal GPU / RAM Glow */}
        <pointLight
          position={[-0.08, 0.05, 0]}
          color="#818cf8"
          intensity={lightsOn ? 0.75 : 0.35}
          distance={1.4}
        />
      </group>
    </group>
  );
}
