import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

/**
 * Lighting Component (Stage 5 Upgraded)
 * 
 * Implements full-room illumination powered by the smooth lerped lighting engine.
 * Ensures the developer, chair, desk, keyboard, coffee mug, headphones, PC, shelves,
 * Dubai window, and room architecture are clearly visible while preserving the cinematic
 * nighttime atmosphere.
 */
export default function Lighting({ lightsOn = true, lightMode = 'studio' }) {
  const { activityState } = useDeveloperInteraction();

  const ambientRef = useRef();
  const keyLightRef = useRef();
  const devFillRef = useRef();
  const rimLightRef = useRef();
  const skylineLightRef = useRef();
  const slatLightRef = useRef();
  const deskLightRef = useRef();
  const floorBounceRef = useRef();

  useFrame(() => {
    // Standby baseline (dim nighttime atmosphere before visitor reaches workstation)
    let targetAmbient = 0.24;
    let targetKey = 0.05;
    let targetDevFill = 0.06;
    let targetRim = 0.4;
    let targetSlat = 0.08;
    let targetDesk = 0.1;
    let targetFloor = 0.04;
    let targetSkyline = 0.75; // Dubai window skyline always illuminated outside

    if (lightsOn) {
      // Power on: Room illuminates clearly so visitor can appreciate the full room
      const coffeeFactor = activityState === 'coffee' ? 0.85 : 1.0;

      if (lightMode === 'studio') {
        targetAmbient = 0.92;
        targetKey = 1.35 * coffeeFactor;
        targetDevFill = 0.82 * coffeeFactor;
        targetRim = 1.25;
        targetSlat = 0.85;
        targetDesk = 0.65;
        targetFloor = 0.35;
        targetSkyline = 0.85;
      } else if (lightMode === 'cyberpunk') {
        targetAmbient = 0.65;
        targetKey = 0.65 * coffeeFactor;
        targetDevFill = 0.75 * coffeeFactor;
        targetRim = 2.0;
        targetSlat = 1.2;
        targetDesk = 0.85;
        targetFloor = 0.45;
        targetSkyline = 0.95;
      } else if (lightMode === 'focus') {
        targetAmbient = 0.48;
        targetKey = 0.45 * coffeeFactor;
        targetDevFill = 0.7 * coffeeFactor;
        targetRim = 0.95;
        targetSlat = 0.35;
        targetDesk = 0.95;
        targetFloor = 0.2;
        targetSkyline = 0.8;
      }
    }

    // Smooth lerp damping for buttery, lifelike illumination rise
    const lerpSpeed = 0.065;
    if (ambientRef.current) ambientRef.current.intensity = THREE.MathUtils.lerp(ambientRef.current.intensity, targetAmbient, lerpSpeed);
    if (keyLightRef.current) keyLightRef.current.intensity = THREE.MathUtils.lerp(keyLightRef.current.intensity, targetKey, lerpSpeed);
    if (devFillRef.current) devFillRef.current.intensity = THREE.MathUtils.lerp(devFillRef.current.intensity, targetDevFill, lerpSpeed);
    if (rimLightRef.current) rimLightRef.current.intensity = THREE.MathUtils.lerp(rimLightRef.current.intensity, targetRim, lerpSpeed);
    if (slatLightRef.current) slatLightRef.current.intensity = THREE.MathUtils.lerp(slatLightRef.current.intensity, targetSlat, lerpSpeed);
    if (deskLightRef.current) deskLightRef.current.intensity = THREE.MathUtils.lerp(deskLightRef.current.intensity, targetDesk, lerpSpeed);
    if (floorBounceRef.current) floorBounceRef.current.intensity = THREE.MathUtils.lerp(floorBounceRef.current.intensity, targetFloor, lerpSpeed);
    if (skylineLightRef.current) skylineLightRef.current.intensity = THREE.MathUtils.lerp(skylineLightRef.current.intensity, targetSkyline, lerpSpeed);
  });

  return (
    <group>
      {/* Rich Room Ambient Fill: Brings out room architecture, floor, and rear walls */}
      <ambientLight ref={ambientRef} color="#10182b" intensity={0.24} />

      {/* Main Studio Key Light: Illuminates desk, developer, keyboard, and coffee mug */}
      <directionalLight
        ref={keyLightRef}
        position={[2.4, 4.5, 2.4]}
        intensity={0.05}
        color={lightMode === 'cyberpunk' ? '#38bdf8' : '#f8fafc'}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-bias={-0.001}
      />

      {/* Developer Face & Chest Fill: Ensures character and headphones are clearly visible */}
      <pointLight
        ref={devFillRef}
        position={[0.0, 1.25, 0.95]}
        color="#e2e8f0"
        intensity={0.06}
        distance={2.8}
      />

      {/* Architectural Wall & Shelf Fill: Illuminates acoustic slats, shelves, and books */}
      <pointLight
        ref={slatLightRef}
        position={[-1.8, 2.0, -1.2]}
        color={lightMode === 'cyberpunk' ? '#06b6d4' : '#60a5fa'}
        intensity={0.08}
        distance={3.8}
      />

      {/* Soft Desk Surface Fill: Illuminates mousepad, keyboard, coffee mug coaster, phone */}
      <pointLight
        ref={deskLightRef}
        position={[0.1, 0.95, -0.45]}
        color="#38bdf8"
        intensity={0.1}
        distance={2.4}
      />

      {/* Ground Floor Bounce: Articulates chair base and floor slate tiles */}
      <pointLight
        ref={floorBounceRef}
        position={[0.0, -0.4, 0.4]}
        color="#1e293b"
        intensity={0.04}
        distance={2.0}
      />

      {/* Purple Rim Light: Articulates silhouette of developer, chair, and desk edge */}
      <directionalLight
        ref={rimLightRef}
        position={[-2.8, 2.4, -2.2]}
        intensity={0.4}
        color={lightMode === 'cyberpunk' ? '#c084fc' : '#8b5cf6'}
      />

      {/* Exterior Dubai Nocturnal Window Fill: Cool blue skyline glow through window */}
      <directionalLight
        ref={skylineLightRef}
        position={[3.5, 2.0, -3.2]}
        intensity={0.75}
        color="#38bdf8"
      />
    </group>
  );
}
