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

  const ceilingLightRef = useRef();
  const ambientRef = useRef();
  const keyLightRef = useRef();
  const devFillRef = useRef();
  const devClothesRef = useRef();
  const rimLightRef = useRef();
  const skylineLightRef = useRef();
  const slatLightRef = useRef();
  const deskLightRef = useRef();
  const floorBounceRef = useRef();

  useFrame(() => {
    // Standby baseline (gentle twilight atmosphere if ever toggled off)
    let targetCeiling = 0.4;
    let targetAmbient = 0.55;
    let targetKey = 0.4;
    let targetDevFill = 0.45;
    let targetDevClothes = 0.4;
    let targetRim = 0.6;
    let targetSlat = 0.3;
    let targetDesk = 0.35;
    let targetFloor = 0.2;
    let targetSkyline = 0.8;

    if (lightsOn) {
      // FULL MAIN ROOM LIGHT ON: Bright, clear, professional illumination
      const coffeeFactor = activityState === 'coffee' ? 0.9 : 1.0;

      if (lightMode === 'studio') {
        targetCeiling = 3.2; // Main room ceiling light fixture
        targetAmbient = 1.35; // Bright neutral ambient fill (no gloom)
        targetKey = 2.4 * coffeeFactor; // Studio directional downlight
        targetDevFill = 2.0 * coffeeFactor; // Face and headset fill
        targetDevClothes = 2.2 * coffeeFactor; // Torso, hoodie, and clothes illumination
        targetRim = 1.6;
        targetSlat = 1.25;
        targetDesk = 1.35;
        targetFloor = 0.65;
        targetSkyline = 0.95;
      } else if (lightMode === 'cyberpunk') {
        targetCeiling = 2.6;
        targetAmbient = 1.1;
        targetKey = 1.8 * coffeeFactor;
        targetDevFill = 1.8 * coffeeFactor;
        targetDevClothes = 1.9 * coffeeFactor;
        targetRim = 2.4;
        targetSlat = 1.8;
        targetDesk = 1.5;
        targetFloor = 0.75;
        targetSkyline = 1.1;
      } else if (lightMode === 'focus') {
        targetCeiling = 2.4;
        targetAmbient = 0.95;
        targetKey = 1.6 * coffeeFactor;
        targetDevFill = 1.7 * coffeeFactor;
        targetDevClothes = 1.8 * coffeeFactor;
        targetRim = 1.4;
        targetSlat = 0.85;
        targetDesk = 1.6;
        targetFloor = 0.55;
        targetSkyline = 0.85;
      }
    }

    // Smooth lerp damping for buttery, lifelike illumination rise
    const lerpSpeed = 0.08;
    if (ceilingLightRef.current) ceilingLightRef.current.intensity = THREE.MathUtils.lerp(ceilingLightRef.current.intensity, targetCeiling, lerpSpeed);
    if (ambientRef.current) ambientRef.current.intensity = THREE.MathUtils.lerp(ambientRef.current.intensity, targetAmbient, lerpSpeed);
    if (keyLightRef.current) keyLightRef.current.intensity = THREE.MathUtils.lerp(keyLightRef.current.intensity, targetKey, lerpSpeed);
    if (devFillRef.current) devFillRef.current.intensity = THREE.MathUtils.lerp(devFillRef.current.intensity, targetDevFill, lerpSpeed);
    if (devClothesRef.current) devClothesRef.current.intensity = THREE.MathUtils.lerp(devClothesRef.current.intensity, targetDevClothes, lerpSpeed);
    if (rimLightRef.current) rimLightRef.current.intensity = THREE.MathUtils.lerp(rimLightRef.current.intensity, targetRim, lerpSpeed);
    if (slatLightRef.current) slatLightRef.current.intensity = THREE.MathUtils.lerp(slatLightRef.current.intensity, targetSlat, lerpSpeed);
    if (deskLightRef.current) deskLightRef.current.intensity = THREE.MathUtils.lerp(deskLightRef.current.intensity, targetDesk, lerpSpeed);
    if (floorBounceRef.current) floorBounceRef.current.intensity = THREE.MathUtils.lerp(floorBounceRef.current.intensity, targetFloor, lerpSpeed);
    if (skylineLightRef.current) skylineLightRef.current.intensity = THREE.MathUtils.lerp(skylineLightRef.current.intensity, targetSkyline, lerpSpeed);
  });

  return (
    <group>
      {/* 1. Rich Neutral Room Ambient Fill: Illuminates walls, floor, shelves, and shadows */}
      <ambientLight ref={ambientRef} color="#e2e8f0" intensity={1.35} />

      {/* 2. MAIN ROOM CEILING LIGHT (Powerful Studio Downlight Array) */}
      <pointLight
        ref={ceilingLightRef}
        position={[0.0, 3.6, 0.4]}
        color={lightMode === 'cyberpunk' ? '#e0f2fe' : '#fffbeb'}
        intensity={3.2}
        distance={8.5}
        decay={1.2}
      />

      {/* 3. Main Studio Key Light: Casts crisp architectural shadows and highlights */}
      <directionalLight
        ref={keyLightRef}
        position={[2.2, 4.5, 2.2]}
        intensity={2.4}
        color={lightMode === 'cyberpunk' ? '#38bdf8' : '#ffffff'}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-bias={-0.001}
      />

      {/* 4. Dedicated Developer Face & Headset Fill Light */}
      <pointLight
        ref={devFillRef}
        position={[0.0, 1.45, 1.05]}
        color="#ffffff"
        intensity={2.0}
        distance={3.2}
      />

      {/* 5. Dedicated Developer Torso & Clothes Light (Highlights hoodie, pants, chair, hands) */}
      <pointLight
        ref={devClothesRef}
        position={[0.0, 0.8, 0.95]}
        color={lightMode === 'cyberpunk' ? '#f0f9ff' : '#fff7ed'}
        intensity={2.2}
        distance={2.8}
      />

      {/* 6. Architectural Wall & Shelf Fill: Illuminates slats, acoustic panels, books */}
      <pointLight
        ref={slatLightRef}
        position={[-1.8, 2.0, -1.2]}
        color={lightMode === 'cyberpunk' ? '#06b6d4' : '#60a5fa'}
        intensity={1.25}
        distance={4.2}
      />

      {/* 7. Soft Desk Surface Fill: Illuminates mousepad, keyboard, succulent, notebook */}
      <pointLight
        ref={deskLightRef}
        position={[0.1, 1.05, -0.45]}
        color="#38bdf8"
        intensity={1.35}
        distance={2.8}
      />

      {/* 8. Floor & Under-Desk Fill: Clarifies chair legs, casters, and floor tiles */}
      <pointLight
        ref={floorBounceRef}
        position={[0.0, -0.3, 0.4]}
        color="#94a3b8"
        intensity={0.65}
        distance={2.5}
      />

      {/* 9. Vivid Rim Light: Outlines silhouette of developer, chair, and desk edge */}
      <directionalLight
        ref={rimLightRef}
        position={[-2.8, 2.6, -2.0]}
        intensity={1.6}
        color={lightMode === 'cyberpunk' ? '#c084fc' : '#a855f7'}
      />

      {/* 10. Exterior Dubai Window Fill: Cool blue skyline glow entering from window */}
      <directionalLight
        ref={skylineLightRef}
        position={[3.8, 2.2, -3.2]}
        intensity={0.95}
        color="#38bdf8"
      />
    </group>
  );
}
