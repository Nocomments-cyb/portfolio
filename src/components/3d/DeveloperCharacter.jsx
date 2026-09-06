import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

export default function DeveloperCharacter({ onSelect, isHovered, setHovered, lightsOn = true }) {
  const {
    activityState,
    coffeeProgress,
    phoneProgress,
    phoneActive,
    headphonesActive,
    triggerHeadphones,
    triggerCoffee,
  } = useDeveloperInteraction();

  const characterGroupRef = useRef();
  const chestRef = useRef();
  const headRef = useRef();
  const leftArmGroupRef = useRef();
  const leftHandRef = useRef();
  const rightArmGroupRef = useRef();
  const rightHandRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // --- 1. POSTURE & BREATHING ---
    if (chestRef.current) {
      // In active coding, character leans slightly forward into work (-0.08)
      // When standby, leans back gently (0.04)
      const baseLean = lightsOn ? (activityState === 'coffee' ? -0.03 : (phoneProgress > 0 ? -0.04 : -0.08)) : 0.04;
      const breathing = Math.sin(t * (lightsOn ? 1.6 : 1.1)) * (lightsOn ? 0.003 : 0.002);
      chestRef.current.position.y = 0.55 + breathing;
      chestRef.current.rotation.x = THREE.MathUtils.lerp(
        chestRef.current.rotation.x,
        baseLean + breathing,
        0.05
      );
    }

    // --- 2. HEAD ORIENTATION & READING DYNAMICS ---
    if (headRef.current && lightsOn) {
      let targetHeadX = 0;
      let targetHeadY = 0;

      if (activityState === 'coffee' && coffeeProgress > 0.35 && coffeeProgress < 0.7) {
        // Tilt head slightly back during coffee sip
        const sipP = Math.sin(((coffeeProgress - 0.35) / 0.35) * Math.PI);
        targetHeadX = -0.14 * sipP;
        targetHeadY = 0.06 * sipP;
      } else if (phoneProgress > 0) {
        if (phoneProgress <= 0.18) {
          // Turn head toward desk phone dock on left
          const p = phoneProgress / 0.18;
          targetHeadX = THREE.MathUtils.lerp(0, 0.18, p);
          targetHeadY = THREE.MathUtils.lerp(0, -0.32, p);
        } else if (phoneProgress <= 0.42) {
          // Follow phone up toward chest/chin
          const p = (phoneProgress - 0.18) / 0.24;
          targetHeadX = THREE.MathUtils.lerp(0.18, 0.26, p);
          targetHeadY = THREE.MathUtils.lerp(-0.32, -0.22, p);
        } else if (phoneProgress <= 0.70) {
          // Direct gaze down at phone screen while reading notifications
          const readingSway = Math.sin(t * 3.5) * 0.008;
          targetHeadX = 0.26 + readingSway;
          targetHeadY = -0.22;
        } else if (phoneProgress <= 0.88) {
          // Follow phone back down to dock
          const p = (phoneProgress - 0.70) / 0.18;
          targetHeadX = THREE.MathUtils.lerp(0.26, 0.18, p);
          targetHeadY = THREE.MathUtils.lerp(-0.22, -0.32, p);
        } else {
          // Return gaze back to central ultrawide coding monitor
          const p = (phoneProgress - 0.88) / 0.12;
          targetHeadX = THREE.MathUtils.lerp(0.18, 0, p);
          targetHeadY = THREE.MathUtils.lerp(-0.32, 0, p);
        }
      } else if (phoneActive) {
        // Glance down-left toward desk smartphone
        targetHeadX = 0.16;
        targetHeadY = -0.30;
      } else if (activityState === 'paused') {
        // Glancing over to secondary vertical terminal monitor on the right
        targetHeadX = 0.02 + Math.sin(t * 1.5) * 0.01;
        targetHeadY = 0.18;
      } else {
        // Active coding: subtle eye line reading scanning on ultrawide display
        targetHeadX = Math.sin(t * 1.8) * 0.012;
        targetHeadY = Math.sin(t * 0.8) * 0.035;
      }

      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, 0.08);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, 0.08);
    }

    // --- 3. LEFT ARM & HAND COORDINATION (PHONE PICK-UP, CHECK & TYPING) ---
    if (leftArmGroupRef.current && leftHandRef.current && lightsOn) {
      if (phoneProgress > 0) {
        let armRotX = 0;
        let armRotY = 0;
        let handX = -0.1;
        let handY = -0.27;
        let handZ = -0.52;

        if (phoneProgress <= 0.18) {
          // Phase 1: Reach toward phone dock stand at [-0.52, 0.105, -0.46]
          const p = phoneProgress / 0.18;
          armRotX = THREE.MathUtils.lerp(0, 0.22, p);
          armRotY = THREE.MathUtils.lerp(0, -0.36, p);
          handX = THREE.MathUtils.lerp(-0.1, -0.24, p);
          handY = THREE.MathUtils.lerp(-0.27, -0.06, p);
          handZ = THREE.MathUtils.lerp(-0.52, -0.46, p);
        } else if (phoneProgress <= 0.42) {
          // Phase 2: Lift phone smoothly up toward chest/chin
          const p = (phoneProgress - 0.18) / 0.24;
          const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
          armRotX = THREE.MathUtils.lerp(0.22, -0.42, easeP);
          armRotY = THREE.MathUtils.lerp(-0.36, 0.14, easeP);
          handX = THREE.MathUtils.lerp(-0.24, -0.15, easeP);
          handY = THREE.MathUtils.lerp(-0.06, 0.16, easeP);
          handZ = THREE.MathUtils.lerp(-0.46, -0.22, easeP);
        } else if (phoneProgress <= 0.70) {
          // Phase 3: Hold phone and check notifications with thumb micro-movement
          const p = (phoneProgress - 0.42) / 0.28;
          armRotX = -0.42;
          armRotY = 0.14;
          handX = -0.15;
          handY = 0.16 + Math.sin(p * Math.PI * 4) * 0.002;
          handZ = -0.22;
        } else if (phoneProgress <= 0.88) {
          // Phase 4: Lower phone smoothly back down toward dock stand
          const p = (phoneProgress - 0.70) / 0.18;
          const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
          armRotX = THREE.MathUtils.lerp(-0.42, 0.22, easeP);
          armRotY = THREE.MathUtils.lerp(0.14, -0.36, easeP);
          handX = THREE.MathUtils.lerp(-0.15, -0.24, easeP);
          handY = THREE.MathUtils.lerp(0.16, -0.06, easeP);
          handZ = THREE.MathUtils.lerp(-0.22, -0.46, easeP);
        } else {
          // Phase 5: Hand releases phone and returns from dock to keyboard
          const p = (phoneProgress - 0.88) / 0.12;
          armRotX = THREE.MathUtils.lerp(0.22, 0, p);
          armRotY = THREE.MathUtils.lerp(-0.36, 0, p);
          handX = THREE.MathUtils.lerp(-0.24, -0.1, p);
          handY = THREE.MathUtils.lerp(-0.06, -0.27, p);
          handZ = THREE.MathUtils.lerp(-0.46, -0.52, p);
        }

        leftArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.x, armRotX, 0.14);
        leftArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.y, armRotY, 0.14);
        leftHandRef.current.position.x = THREE.MathUtils.lerp(leftHandRef.current.position.x, handX, 0.14);
        leftHandRef.current.position.y = THREE.MathUtils.lerp(leftHandRef.current.position.y, handY, 0.14);
        leftHandRef.current.position.z = THREE.MathUtils.lerp(leftHandRef.current.position.z, handZ, 0.14);
      } else if (activityState === 'typing' || activityState === 'boost') {
        leftArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.x, 0, 0.1);
        leftArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.y, 0, 0.1);

        const speed = activityState === 'boost' ? 18.0 : 13.0;
        const keyTapY = Math.sin(t * speed + 0.4) * 0.0035;
        const keyTapZ = Math.cos(t * (speed * 0.8)) * 0.002;
        leftHandRef.current.position.x = THREE.MathUtils.lerp(leftHandRef.current.position.x, -0.1, 0.1);
        leftHandRef.current.position.y = -0.27 + keyTapY;
        leftHandRef.current.position.z = -0.52 + keyTapZ;
      } else {
        leftArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.x, 0, 0.1);
        leftArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(leftArmGroupRef.current.rotation.y, 0, 0.1);
        leftHandRef.current.position.x = THREE.MathUtils.lerp(leftHandRef.current.position.x, -0.1, 0.1);
        leftHandRef.current.position.y = THREE.MathUtils.lerp(leftHandRef.current.position.y, -0.27, 0.1);
        leftHandRef.current.position.z = THREE.MathUtils.lerp(leftHandRef.current.position.z, -0.52, 0.1);
      }
    }

    // --- 4. RIGHT ARM & HAND COORDINATION (TYPING, MOUSE, COFFEE, HEADPHONES) ---
    if (rightArmGroupRef.current && rightHandRef.current && lightsOn) {
      if (activityState === 'coffee' && coffeeProgress > 0) {
        // Coordinated arm kinematics to follow mug to lips and back
        let armX = 0.28;
        let armY = 0.18;
        let armRotX = 0;
        let armRotY = 0;
        let handY = -0.27;
        let handZ = -0.5;

        if (coffeeProgress <= 0.18) {
          // Reach toward coffee coaster at [0.52, 0.065, -0.52]
          const p = coffeeProgress / 0.18;
          armRotX = THREE.MathUtils.lerp(0, 0.25, p);
          armRotY = THREE.MathUtils.lerp(0, 0.35, p);
        } else if (coffeeProgress <= 0.42) {
          // Lift mug toward chin
          const p = (coffeeProgress - 0.18) / 0.24;
          armRotX = THREE.MathUtils.lerp(0.25, -0.45, p);
          armRotY = THREE.MathUtils.lerp(0.35, -0.15, p);
          handY = THREE.MathUtils.lerp(-0.27, 0.15, p);
          handZ = THREE.MathUtils.lerp(-0.5, -0.22, p);
        } else if (coffeeProgress <= 0.65) {
          // Holding mug at lips during sip
          armRotX = -0.45;
          armRotY = -0.15;
          handY = 0.15;
          handZ = -0.22;
        } else if (coffeeProgress <= 0.88) {
          // Lowering mug back toward coaster
          const p = (coffeeProgress - 0.65) / 0.23;
          armRotX = THREE.MathUtils.lerp(-0.45, 0.25, p);
          armRotY = THREE.MathUtils.lerp(-0.15, 0.35, p);
          handY = THREE.MathUtils.lerp(0.15, -0.27, p);
          handZ = THREE.MathUtils.lerp(-0.22, -0.5, p);
        } else {
          // Returning arm from coaster back to desk
          const p = (coffeeProgress - 0.88) / 0.12;
          armRotX = THREE.MathUtils.lerp(0.25, 0, p);
          armRotY = THREE.MathUtils.lerp(0.35, 0, p);
        }

        rightArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.x, armRotX, 0.12);
        rightArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.y, armRotY, 0.12);
        rightHandRef.current.position.y = THREE.MathUtils.lerp(rightHandRef.current.position.y, handY, 0.12);
        rightHandRef.current.position.z = THREE.MathUtils.lerp(rightHandRef.current.position.z, handZ, 0.12);
      } else if (headphonesActive) {
        // Reach up toward right ear cup
        rightArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.x, -0.75, 0.1);
        rightArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.y, 0.45, 0.1);
        rightHandRef.current.position.y = THREE.MathUtils.lerp(rightHandRef.current.position.y, 0.32, 0.1);
        rightHandRef.current.position.z = THREE.MathUtils.lerp(rightHandRef.current.position.z, -0.12, 0.1);
      } else if (activityState === 'typing' || activityState === 'boost') {
        // Return arm to typing posture over keyboard
        rightArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.x, 0, 0.1);
        rightArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.y, -0.22, 0.1);

        const speed = activityState === 'boost' ? 20.0 : 14.5;
        const keyTapY = Math.sin(t * speed + 1.8) * 0.0035;
        const keyTapZ = Math.cos(t * (speed * 0.85) + 0.5) * 0.002;

        rightHandRef.current.position.x = THREE.MathUtils.lerp(rightHandRef.current.position.x, 0.06, 0.1);
        rightHandRef.current.position.y = -0.27 + keyTapY;
        rightHandRef.current.position.z = -0.52 + keyTapZ;
      } else {
        // Resting arm on precision mouse
        rightArmGroupRef.current.rotation.x = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.x, 0, 0.1);
        rightArmGroupRef.current.rotation.y = THREE.MathUtils.lerp(rightArmGroupRef.current.rotation.y, 0, 0.1);

        rightHandRef.current.position.x = THREE.MathUtils.lerp(rightHandRef.current.position.x, 0.22, 0.08);
        rightHandRef.current.position.y = THREE.MathUtils.lerp(rightHandRef.current.position.y, -0.27, 0.08);
        rightHandRef.current.position.z = THREE.MathUtils.lerp(rightHandRef.current.position.z, -0.5, 0.08);
      }
    }
  });

  return (
    <group ref={characterGroupRef} position={[0, -0.25, 0.25]}>
      {/* Interactive Hitbox for Developer Character */}
      <mesh
        position={[0, 0.6, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('developer');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
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
                <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.25} />
              </mesh>
            );
          })}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.4, 16]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
          </mesh>
        </group>

        {/* Seat Cushion */}
        <mesh position={[0, 0.12, 0]} castShadow>
          <boxGeometry args={[0.62, 0.09, 0.58]} />
          <meshStandardMaterial color="#1e293b" roughness={0.65} />
        </mesh>

        {/* Ergonomic Spine Support Ribs */}
        <mesh position={[0, 0.55, 0.28]} castShadow>
          <boxGeometry args={[0.08, 0.75, 0.06]} />
          <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* High-Back Contoured Mesh Backrest */}
        <mesh position={[0, 0.65, 0.26]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.56, 0.72, 0.05]} />
          <meshStandardMaterial color="#243247" roughness={0.55} />
        </mesh>

        {/* Left Armrest */}
        <group position={[-0.34, 0.28, 0.02]}>
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.07, 0.03, 0.26]} />
            <meshStandardMaterial color="#2d3a4f" roughness={0.45} />
          </mesh>
        </group>

        {/* Right Armrest */}
        <group position={[0.34, 0.28, 0.02]}>
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.07, 0.03, 0.26]} />
            <meshStandardMaterial color="#2d3a4f" roughness={0.45} />
          </mesh>
        </group>
      </group>

      {/* --- DEVELOPER CHARACTER SCULPTURE --- */}
      {/* Lower Body (Pants & Legs) */}
      <group position={[0, 0.16, -0.04]}>
        <mesh position={[-0.14, -0.15, -0.18]} rotation={[0.4, 0, 0]} castShadow>
          <cylinderGeometry args={[0.085, 0.075, 0.45, 12]} />
          <meshStandardMaterial color="#222e42" roughness={0.75} />
        </mesh>
        <mesh position={[0.14, -0.15, -0.18]} rotation={[0.4, 0, 0]} castShadow>
          <cylinderGeometry args={[0.085, 0.075, 0.45, 12]} />
          <meshStandardMaterial color="#222e42" roughness={0.75} />
        </mesh>
      </group>

      {/* Torso & Upper Body */}
      <group ref={chestRef} position={[0, 0.55, 0]}>
        {/* Core Hoodie Torso */}
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.54, 0.32]} />
          <meshStandardMaterial
            color={isHovered === 'developer' ? '#3b4d6b' : '#2e3d55'}
            roughness={0.65}
            emissive={isHovered === 'developer' ? '#38bdf8' : '#000000'}
            emissiveIntensity={isHovered === 'developer' ? 0.2 : 0}
          />
        </mesh>

        {/* Hoodie Front Zipper & Seam Accent */}
        <mesh position={[0, 0.02, 0.162]}>
          <boxGeometry args={[0.015, 0.46, 0.005]} />
          <meshStandardMaterial color="#64748b" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Hoodie Pocket Kangaroo Pouch */}
        <mesh position={[0, -0.14, 0.163]}>
          <boxGeometry args={[0.34, 0.14, 0.012]} />
          <meshStandardMaterial color="#27344a" roughness={0.7} />
        </mesh>

        {/* Left Arm & Hand (Keyboard typing & Smartphone pickup) */}
        <group ref={leftArmGroupRef} position={[-0.28, 0.18, 0]}>
          <mesh position={[-0.04, -0.15, -0.12]} rotation={[0.65, 0.2, -0.15]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.38, 12]} />
            <meshStandardMaterial color="#2e3d55" roughness={0.65} />
          </mesh>
          <mesh position={[-0.08, -0.26, -0.32]} rotation={[1.3, 0.2, -0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.045, 0.34, 12]} />
            <meshStandardMaterial color="#2e3d55" roughness={0.65} />
          </mesh>
          {/* Sleeve Cuff */}
          <mesh position={[-0.09, -0.265, -0.46]} rotation={[1.3, 0.2, -0.1]}>
            <cylinderGeometry args={[0.048, 0.048, 0.03, 12]} />
            <meshStandardMaterial color="#3a4b66" roughness={0.7} />
          </mesh>
          <mesh ref={leftHandRef} position={[-0.1, -0.27, -0.52]} castShadow>
            <boxGeometry args={[0.08, 0.03, 0.09]} />
            <meshStandardMaterial color="#5c3a26" roughness={0.42} />
          </mesh>
        </group>

        {/* Right Arm & Hand (Coordinated Typing, Mouse, Coffee, and Headphones) */}
        <group ref={rightArmGroupRef} position={[0.28, 0.18, 0]}>
          <mesh position={[0.04, -0.15, -0.12]} rotation={[0.65, -0.2, 0.15]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.38, 12]} />
            <meshStandardMaterial color="#2e3d55" roughness={0.65} />
          </mesh>
          <mesh position={[0.08, -0.26, -0.32]} rotation={[1.3, -0.2, 0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.045, 0.34, 12]} />
            <meshStandardMaterial color="#2e3d55" roughness={0.65} />
          </mesh>
          {/* Sleeve Cuff */}
          <mesh position={[0.09, -0.265, -0.46]} rotation={[1.3, -0.2, 0.1]}>
            <cylinderGeometry args={[0.048, 0.048, 0.03, 12]} />
            <meshStandardMaterial color="#3a4b66" roughness={0.7} />
          </mesh>
          <mesh ref={rightHandRef} position={[0.22, -0.27, -0.5]} castShadow>
            <boxGeometry args={[0.08, 0.03, 0.09]} />
            <meshStandardMaterial color="#5c3a26" roughness={0.42} />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 0.32, -0.02]}>
          <cylinderGeometry args={[0.075, 0.085, 0.12, 12]} />
          <meshStandardMaterial color="#5c3a26" roughness={0.42} />
        </mesh>

        {/* Head & Fade Haircut (Young Black Male Developer) */}
        <group ref={headRef} position={[0, 0.46, -0.04]}>
          {/* Cranium */}
          <mesh castShadow>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color="#5c3a26" roughness={0.42} />
          </mesh>
          {/* Jaw / Chin */}
          <mesh position={[0, -0.06, -0.04]} castShadow>
            <boxGeometry args={[0.14, 0.12, 0.14]} />
            <meshStandardMaterial color="#5c3a26" roughness={0.42} />
          </mesh>
          {/* Clean Fade Haircut */}
          <mesh position={[0, 0.06, 0.01]}>
            <sphereGeometry args={[0.136, 16, 16]} />
            <meshStandardMaterial color="#161a24" roughness={0.85} />
          </mesh>

          {/* STUDIO OVER-EAR HEADPHONES (Clickable Interactive Flow State) */}
          <group
            onClick={(e) => {
              e.stopPropagation();
              triggerHeadphones();
              onSelect && onSelect('headphones');
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered && setHovered('headphones');
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered && setHovered(null);
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
                <meshBasicMaterial color={lightsOn ? (headphonesActive ? '#38bdf8' : '#0284c7') : '#0e3a52'} />
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
                <meshBasicMaterial color={lightsOn ? (headphonesActive ? '#c084fc' : '#a855f7') : '#3b1763'} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
