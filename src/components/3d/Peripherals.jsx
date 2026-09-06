import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

export default function Peripherals({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const { phoneActive, triggerPhone, triggerKeyboard, activityState } = useDeveloperInteraction();
  const fan1Ref = useRef();
  const fan2Ref = useRef();
  const rearFanRef = useRef();
  const hddLedRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const fanSpeed = activityState === 'boost' ? 6.5 : 4.0;
    if (fan1Ref.current) fan1Ref.current.rotation.z = t * fanSpeed;
    if (fan2Ref.current) fan2Ref.current.rotation.z = t * fanSpeed;
    if (rearFanRef.current) rearFanRef.current.rotation.z = -t * (fanSpeed * 1.1);

    if (hddLedRef.current) {
      // Intermittent hard drive activity blink
      const blink = Math.sin(t * 14) > 0.4 ? 1 : 0.15;
      hddLedRef.current.intensity = blink * 0.9;
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
          intensity={activityState === 'boost' ? 0.95 : (isHovered === 'keyboard' ? 0.7 : 0.45)}
          distance={0.9}
        />
      </group>

      {/* --- PRECISION WIRELESS MOUSE --- */}
      <group position={[0.34, 0.075, -0.6]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.11, 0.028, 0.18]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Scroll Wheel Light */}
        <mesh position={[0, 0.016, -0.03]}>
          <boxGeometry args={[0.015, 0.01, 0.04]} />
          <meshBasicMaterial color="#38bdf8" />
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
            color="#1e293b"
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
            emissiveIntensity={phoneActive ? 0.7 : 0}
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
            intensity={0.7}
            distance={0.9}
          />
        )}
      </group>

      {/* --- MINIMALIST LINEN NOTEBOOK & PEN --- */}
      <group position={[-1.24, 0.072, -0.48]} rotation={[0, -0.08, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.26, 0.018, 0.36]} />
          <meshStandardMaterial color="#334155" roughness={0.7} />
        </mesh>
        <mesh position={[0.16, 0.01, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.004, 0.004, 0.28, 8]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* --- ARTISAN DESK SUCCULENT --- */}
      <group position={[-1.05, 0.065, -0.75]}>
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.05, 0.09, 6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.11, 0]}>
          <coneGeometry args={[0.07, 0.07, 6]} />
          <meshStandardMaterial color="#10b981" roughness={0.65} />
        </mesh>
      </group>

      {/* --- LIQUID-COOLED WORKSTATION PC TOWER (VIVIDLY POWERED ON & ACTIVE) --- */}
      <group
        position={[1.45, 0.28, -0.75]}
        rotation={[0, -0.15, 0]}
        onClick={(e) => {
          e.stopPropagation();
          triggerKeyboard();
          onSelect && onSelect('pc');
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('pc');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
        }}
      >
        {/* Interactive Hitbox */}
        <mesh position={[0, 0, 0]} visible={false}>
          <boxGeometry args={[0.34, 0.62, 0.62]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Outer Chassis Frame (Gunmetal Steel) */}
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.58, 0.58]} />
          <meshStandardMaterial
            color={isHovered === 'pc' ? '#1e293b' : '#0f172a'}
            roughness={0.3}
            metalness={0.8}
            emissive={isHovered === 'pc' ? '#38bdf8' : '#000000'}
            emissiveIntensity={isHovered === 'pc' ? 0.2 : 0}
          />
        </mesh>

        {/* Transparent Tempered Glass Left Side Panel */}
        <mesh position={[-0.151, 0, 0]}>
          <planeGeometry args={[0.56, 0.56]} />
          <meshPhysicalMaterial
            color="#0f172a"
            transmission={0.92}
            roughness={0.06}
            metalness={0.1}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* --- FRONT INTAKE PANEL --- */}
        {/* Front ARGB Intake Fan 1 (Upper - Rotating) */}
        <group position={[0, 0.11, 0.292]}>
          <mesh>
            <ringGeometry args={[0.078, 0.096, 24]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <group ref={fan1Ref}>
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
                <boxGeometry args={[0.02, 0.08, 0.004]} />
                <meshBasicMaterial color="#7dd3fc" />
              </mesh>
            ))}
          </group>
        </group>

        {/* Front ARGB Intake Fan 2 (Lower - Rotating) */}
        <group position={[0, -0.11, 0.292]}>
          <mesh>
            <ringGeometry args={[0.078, 0.096, 24]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
          <group ref={fan2Ref}>
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
                <boxGeometry args={[0.02, 0.08, 0.004]} />
                <meshBasicMaterial color="#c084fc" />
              </mesh>
            ))}
          </group>
        </group>

        {/* Front I/O: Bright Green Power ON LED Ring (POWERED ON) */}
        <mesh position={[0.1, 0.27, 0.293]}>
          <ringGeometry args={[0.006, 0.012, 16]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
        <mesh position={[0.1, 0.27, 0.293]}>
          <circleGeometry args={[0.005, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Front I/O: Hard Drive Activity LED */}
        <mesh position={[0.06, 0.27, 0.293]}>
          <sphereGeometry args={[0.005, 8, 8]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
        <pointLight
          ref={hddLedRef}
          position={[0.06, 0.27, 0.32]}
          color="#f59e0b"
          distance={0.5}
          intensity={0.7}
        />

        {/* Front I/O: High-Speed USB 3.2 Ports with Glowing Cyan Inserts */}
        <mesh position={[0.02, 0.27, 0.293]}>
          <boxGeometry args={[0.012, 0.006, 0.002]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-0.02, 0.27, 0.293]}>
          <boxGeometry args={[0.012, 0.006, 0.002]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>

        {/* --- VISIBLE INTERNAL RIG COMPONENTS --- */}
        {/* Motherboard Tray Base */}
        <mesh position={[0.08, 0.04, 0]}>
          <boxGeometry args={[0.02, 0.44, 0.44]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Glowing Dual RGB DDR5 RAM Sticks */}
        <group position={[0.06, 0.12, 0.04]}>
          <mesh position={[0, 0, -0.015]}>
            <boxGeometry args={[0.012, 0.09, 0.008]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh position={[0, 0, 0.015]}>
            <boxGeometry args={[0.012, 0.09, 0.008]} />
            <meshBasicMaterial color="#c084fc" />
          </mesh>
        </group>

        {/* Liquid CPU Cooler AIO Pump Block (Circular Infinity Mirror Ring) */}
        <group position={[0.05, 0.1, -0.08]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.02, 20]} />
            <meshStandardMaterial color="#0f172a" metalness={0.9} />
          </mesh>
          {/* Glowing Ring */}
          <mesh position={[-0.011, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <ringGeometry args={[0.022, 0.035, 20]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>

        {/* Dual Braided Liquid Coolant Tubes leading from CPU to Top Radiator */}
        <mesh position={[0.03, 0.19, -0.04]} rotation={[0.4, 0, 0.3]}>
          <cylinderGeometry args={[0.007, 0.007, 0.18, 8]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.3} emissive="#0284c7" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.01, 0.18, -0.02]} rotation={[0.3, 0, 0.2]}>
          <cylinderGeometry args={[0.007, 0.007, 0.16, 8]} />
          <meshStandardMaterial color="#818cf8" roughness={0.3} emissive="#6366f1" emissiveIntensity={0.6} />
        </mesh>

        {/* NVIDIA GeForce RTX 4090 GPU (Illuminated Graphics Card) */}
        <group position={[0.01, -0.04, 0.02]}>
          {/* GPU Body */}
          <mesh castShadow>
            <boxGeometry args={[0.1, 0.06, 0.34]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Glowing Side Logo Strip */}
          <mesh position={[-0.052, 0.015, 0]}>
            <boxGeometry args={[0.004, 0.014, 0.22]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          {/* GPU Backplate Accent Line */}
          <mesh position={[0, 0.031, 0]}>
            <boxGeometry args={[0.08, 0.004, 0.32]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>

        {/* Rear ARGB Exhaust Fan (Rotating) */}
        <group position={[0.02, 0.14, -0.27]} rotation={[0, Math.PI, 0]}>
          <mesh>
            <ringGeometry args={[0.065, 0.08, 20]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
          <group ref={rearFanRef}>
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
                <boxGeometry args={[0.015, 0.07, 0.004]} />
                <meshBasicMaterial color="#c084fc" />
              </mesh>
            ))}
          </group>
        </group>

        {/* Power Supply Shroud at bottom */}
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[0.28, 0.12, 0.54]} />
          <meshStandardMaterial color="#0b101d" metalness={0.7} />
        </mesh>
        {/* Shroud Cutout Logo Glow */}
        <mesh position={[-0.141, -0.22, 0]}>
          <planeGeometry args={[0.14, 0.03]} rotation={[0, -Math.PI / 2, 0]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>

        {/* Powerful Internal Chassis Lighting (Vividly Illumines GPU & RAM) */}
        <pointLight
          position={[-0.05, 0.08, 0]}
          color="#38bdf8"
          intensity={lightsOn ? 1.8 : 0.8}
          distance={1.8}
        />
        <pointLight
          position={[0.02, -0.06, 0.1]}
          color="#a855f7"
          intensity={lightsOn ? 1.4 : 0.6}
          distance={1.5}
        />

        {/* Desk Underglow Spilling From Underneath PC Chassis */}
        <pointLight
          position={[0, -0.32, 0]}
          color="#38bdf8"
          intensity={lightsOn ? 1.1 : 0.4}
          distance={1.4}
        />
      </group>
    </group>
  );
}
