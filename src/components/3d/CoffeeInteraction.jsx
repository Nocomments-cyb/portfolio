import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

/**
 * CoffeeInteraction Component
 * 
 * Renders the desk coaster, ceramic coffee mug, and steam particle system.
 * Coordinates smooth reach, lift, sip, and replace transforms driven by coffeeProgress.
 * Mug always returns to its exact original position flush on the desk coaster.
 */
export default function CoffeeInteraction({ isHovered, setHovered, onSelect }) {
  const { coffeeProgress, isCoffeeRunning, triggerCoffee } = useDeveloperInteraction();
  const mugGroupRef = useRef();
  const steamRef = useRef();

  // Coaster Home Position on Desk
  const homePos = { x: 0.52, y: 0.065, z: -0.52 };
  // Sipping Position (Near Developer mouth/chin)
  const sipPos = { x: 0.16, y: 0.49, z: -0.16 };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Subtle ambient steam animation
    if (steamRef.current) {
      const steamCycle = (t * 1.5) % 1.6;
      steamRef.current.position.y = 0.13 + steamCycle * 0.08;
      steamRef.current.scale.setScalar(0.7 + steamCycle * 0.6);
      steamRef.current.material.opacity = Math.max(0, 0.35 - steamCycle * 0.22);
    }

    if (!mugGroupRef.current) return;

    if (coffeeProgress <= 0 || coffeeProgress >= 1) {
      // At rest on desk coaster
      mugGroupRef.current.position.set(homePos.x, homePos.y, homePos.z);
      mugGroupRef.current.rotation.set(0, 0, 0);
      return;
    }

    // Coordinated Sip Timeline (0.0 -> 1.0)
    let curX = homePos.x;
    let curY = homePos.y;
    let curZ = homePos.z;
    let rotX = 0;

    if (coffeeProgress <= 0.18) {
      // Phase 1: Hand reaches mug (mug rests on desk)
      curX = homePos.x;
      curY = homePos.y;
      curZ = homePos.z;
      rotX = 0;
    } else if (coffeeProgress <= 0.42) {
      // Phase 2: Lift off coaster toward mouth
      const p = (coffeeProgress - 0.18) / 0.24;
      const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
      curX = THREE.MathUtils.lerp(homePos.x, sipPos.x, easeP);
      curY = THREE.MathUtils.lerp(homePos.y, sipPos.y, easeP);
      curZ = THREE.MathUtils.lerp(homePos.z, sipPos.z, easeP);
      rotX = THREE.MathUtils.lerp(0, -0.12, easeP);
    } else if (coffeeProgress <= 0.65) {
      // Phase 3: Sip & Hold at mouth
      const p = (coffeeProgress - 0.42) / 0.23;
      // Tilt mug up for sip, then back down
      const tilt = Math.sin(p * Math.PI);
      curX = sipPos.x;
      curY = sipPos.y + tilt * 0.015;
      curZ = sipPos.z;
      rotX = -0.12 - tilt * 0.25; // Tilt back to drink
    } else if (coffeeProgress <= 0.88) {
      // Phase 4: Smooth lowering back to coaster
      const p = (coffeeProgress - 0.65) / 0.23;
      const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
      curX = THREE.MathUtils.lerp(sipPos.x, homePos.x, easeP);
      curY = THREE.MathUtils.lerp(sipPos.y, homePos.y, easeP);
      curZ = THREE.MathUtils.lerp(sipPos.z, homePos.z, easeP);
      rotX = THREE.MathUtils.lerp(-0.12, 0, easeP);
    } else {
      // Phase 5: Settle on coaster, hand releases
      curX = homePos.x;
      curY = homePos.y;
      curZ = homePos.z;
      rotX = 0;
    }

    mugGroupRef.current.position.set(curX, curY, curZ);
    mugGroupRef.current.rotation.x = rotX;
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isCoffeeRunning) {
      triggerCoffee();
    }
    if (onSelect) onSelect('coffee');
  };

  return (
    <group>
      {/* Permanent Cork Coaster on Desk */}
      <group position={[homePos.x, homePos.y, homePos.z]}>
        <mesh position={[0, 0.003, 0]} receiveShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.006, 24]} />
          <meshStandardMaterial color="#78350f" roughness={0.9} />
        </mesh>
      </group>

      {/* Ceramic Coffee Mug (Lifts and returns) */}
      <group
        ref={mugGroupRef}
        position={[homePos.x, homePos.y, homePos.z]}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('coffee');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
        }}
      >
        {/* Interactive Invisible Capsule Hitbox */}
        <mesh position={[0, 0.06, 0]} visible={false}>
          <cylinderGeometry args={[0.09, 0.09, 0.16, 12]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Ceramic Mug Body */}
        <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.065, 0.055, 0.11, 20]} />
          <meshStandardMaterial
            color="#1e293b"
            roughness={0.4}
            metalness={0.1}
            emissive={isHovered === 'coffee' ? '#f59e0b' : '#000000'}
            emissiveIntensity={isHovered === 'coffee' ? 0.25 : 0}
          />
        </mesh>

        {/* Mug Handle */}
        <mesh position={[0.075, 0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.038, 0.011, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} />
        </mesh>

        {/* Fresh Coffee Liquid Surface */}
        <mesh position={[0, 0.102, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.004, 20]} />
          <meshStandardMaterial color="#170d08" roughness={0.15} />
        </mesh>

        {/* Rising Steam Particle */}
        <mesh ref={steamRef} position={[0, 0.13, 0]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshBasicMaterial color="#e2e8f0" transparent opacity={0.35} />
        </mesh>
      </group>
    </group>
  );
}
