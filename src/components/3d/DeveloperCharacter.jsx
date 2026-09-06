import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DeveloperCharacter({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const characterGroupRef = useRef();
  const chestRef = useRef();
  const headRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();

  // Lifelike breathing, posture adjustment, typing, and music head nod
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Posture and breathing transition
    if (chestRef.current) {
      // When lights are on, character leans slightly forward in focused coding posture
      const targetPosture = lightsOn ? -0.07 : 0.03;
      const breathing = Math.sin(t * (lightsOn ? 1.6 : 1.1)) * (lightsOn ? 0.003 : 0.002);
      chestRef.current.position.y = 0.55 + breathing;
      chestRef.current.rotation.x = THREE.MathUtils.lerp(
        chestRef.current.rotation.x,
        targetPosture + breathing,
        0.05
      );
    }

    // Subtle head nod to music / focus rhythm when lights on
    if (headRef.current && lightsOn) {
      headRef.current.rotation.x = Math.sin(t * 2.2) * 0.012;
      headRef.current.rotation.y = Math.sin(t * 0.9) * 0.015;
    }

    // Active mechanical keyboard typing micro-movements on left hand
    if (leftHandRef.current && lightsOn) {
      leftHandRef.current.position.y = -0.27 + Math.sin(t * 12.0) * 0.003;
      leftHandRef.current.position.z = -0.52 + Math.cos(t * 9.0) * 0.002;
    }

    // Subtle mouse micro-movement on right hand
    if (rightHandRef.current && lightsOn) {
      rightHandRef.current.position.x = 0.22 + Math.sin(t * 1.8) * 0.004;
      rightHandRef.current.position.z = -0.5 + Math.cos(t * 1.5) * 0.003;
    }
  });

  return (
    <group ref={characterGroupRef} position={[0, -0.25, 0.25]}>
      {/* Interactive Hitbox for Developer Character */}
      <mesh
        position={[0, 0.6, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered('developer');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect && onSelect('developer');
        }}
        visible={false}
      >
        <capsuleGeometry args={[0.35, 0.9, 8, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* --- ERGONOMIC EXECUTIVE CHAIR --- */}
      <group position={[0, 0, -0.05]}>
        {/* 5-Star Caster Base on Floor */}
        <group position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.08, 12]} />
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 2 * Math.PI) / 5;
            return (
              <mesh
                key={i}
                position={[Math.cos(angle) * 0.28, 0, Math.sin(angle) * 0.28]}
                rotation={[0, -angle, 0]}
              >
                <boxGeometry args={[0.32, 0.03, 0.04]} />
                <meshStandardMaterial color="#080c14" metalness={0.8} roughness={0.3} />
              </mesh>
            );
          })}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.4, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Seat Cushion */}
        <mesh position={[0, 0.12, 0]} castShadow>
          <boxGeometry args={[0.62, 0.09, 0.58]} />
          <meshStandardMaterial color="#0d1424" roughness={0.7} />
        </mesh>

        {/* Ergonomic Spine Support Ribs */}
        <mesh position={[0, 0.55, 0.28]} castShadow>
          <boxGeometry args={[0.08, 0.75, 0.06]} />
          <meshStandardMaterial color="#080c14" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* High-Back Contoured Mesh Backrest */}
        <mesh position={[0, 0.65, 0.26]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.56, 0.72, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>

        {/* Left Armrest */}
        <group position={[-0.34, 0.28, 0.02]}>
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
            <meshStandardMaterial color="#080c14" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.07, 0.03, 0.26]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} />
          </mesh>
        </group>

        {/* Right Armrest */}
        <group position={[0.34, 0.28, 0.02]}>
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
            <meshStandardMaterial color="#080c14" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.07, 0.03, 0.26]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} />
          </mesh>
        </group>
      </group>

      {/* --- DEVELOPER CHARACTER SCULPTURE --- */}
      {/* Lower Body */}
      <group position={[0, 0.16, -0.04]}>
        <mesh position={[-0.14, -0.15, -0.18]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.085, 0.075, 0.45, 12]} />
          <meshStandardMaterial color="#090d16" roughness={0.8} />
        </mesh>
        <mesh position={[0.14, -0.15, -0.18]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.085, 0.075, 0.45, 12]} />
          <meshStandardMaterial color="#090d16" roughness={0.8} />
        </mesh>
      </group>

      {/* Torso & Upper Body (Subtle breathing oscillation) */}
      <group ref={chestRef} position={[0, 0.55, 0]}>
        {/* Core Hoodie Torso */}
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.54, 0.32]} />
          <meshStandardMaterial
            color={isHovered === 'developer' ? '#1e293b' : '#0d1322'}
            roughness={0.7}
            emissive={isHovered === 'developer' ? '#38bdf8' : '#000000'}
            emissiveIntensity={isHovered === 'developer' ? 0.12 : 0}
          />
        </mesh>

        {/* Left Arm & Hand (Reaching to mechanical keyboard) */}
        <group position={[-0.28, 0.18, 0]}>
          <mesh position={[-0.04, -0.15, -0.12]} rotation={[0.65, 0.2, -0.15]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.38, 12]} />
            <meshStandardMaterial color="#0d1322" roughness={0.7} />
          </mesh>
          <mesh position={[-0.08, -0.26, -0.32]} rotation={[1.3, 0.2, -0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.045, 0.34, 12]} />
            <meshStandardMaterial color="#0d1322" roughness={0.7} />
          </mesh>
          <mesh ref={leftHandRef} position={[-0.1, -0.27, -0.52]}>
            <boxGeometry args={[0.08, 0.03, 0.09]} />
            <meshStandardMaterial color="#251812" roughness={0.6} />
          </mesh>
        </group>

        {/* Right Arm & Hand (Resting on mouse) */}
        <group position={[0.28, 0.18, 0]}>
          <mesh position={[0.04, -0.15, -0.12]} rotation={[0.65, -0.2, 0.15]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.38, 12]} />
            <meshStandardMaterial color="#0d1322" roughness={0.7} />
          </mesh>
          <mesh position={[0.08, -0.26, -0.32]} rotation={[1.3, -0.2, 0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.045, 0.34, 12]} />
            <meshStandardMaterial color="#0d1322" roughness={0.7} />
          </mesh>
          <mesh ref={rightHandRef} position={[0.22, -0.27, -0.5]}>
            <boxGeometry args={[0.08, 0.03, 0.09]} />
            <meshStandardMaterial color="#251812" roughness={0.6} />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 0.32, -0.02]}>
          <cylinderGeometry args={[0.075, 0.085, 0.12, 12]} />
          <meshStandardMaterial color="#251812" roughness={0.6} />
        </mesh>

        {/* Head & Fade Haircut (Young Black Male Developer) */}
        <group ref={headRef} position={[0, 0.46, -0.04]}>
          {/* Cranium */}
          <mesh castShadow>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color="#251812" roughness={0.55} />
          </mesh>
          {/* Jaw / Chin */}
          <mesh position={[0, -0.06, -0.04]} castShadow>
            <boxGeometry args={[0.14, 0.12, 0.14]} />
            <meshStandardMaterial color="#251812" roughness={0.55} />
          </mesh>
          {/* Clean Fade Haircut */}
          <mesh position={[0, 0.06, 0.01]}>
            <sphereGeometry args={[0.136, 16, 16]} />
            <meshStandardMaterial color="#08090d" roughness={0.9} />
          </mesh>

          {/* STUDIO OVER-EAR HEADPHONES */}
          <group
            onClick={(e) => {
              e.stopPropagation();
              onSelect && onSelect('headphones');
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered('headphones');
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(null);
            }}
          >
            {/* Headband */}
            <mesh position={[0, 0.11, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.145, 0.016, 8, 24, Math.PI]} />
              <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Left Earcup */}
            <group position={[-0.145, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <mesh>
                <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
                <meshStandardMaterial color="#0f172a" roughness={0.4} />
              </mesh>
              {/* Cyan LED Ring */}
              <mesh position={[0, 0.021, 0]}>
                <ringGeometry args={[0.032, 0.042, 16]} />
                <meshBasicMaterial color={lightsOn ? '#38bdf8' : '#0e3a52'} />
              </mesh>
            </group>

            {/* Right Earcup */}
            <group position={[0.145, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh>
                <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
                <meshStandardMaterial color="#0f172a" roughness={0.4} />
              </mesh>
              {/* Purple LED Ring */}
              <mesh position={[0, 0.021, 0]}>
                <ringGeometry args={[0.032, 0.042, 16]} />
                <meshBasicMaterial color={lightsOn ? '#a855f7' : '#3b1763'} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
