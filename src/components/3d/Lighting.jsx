import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Lighting({ lightsOn = true, lightMode = 'studio' }) {
  const ambientRef = useRef();
  const keyLightRef = useRef();
  const rimLightRef = useRef();
  const skylineLightRef = useRef();
  const slatLightRef = useRef();
  const deskLightRef = useRef();

  useFrame((state) => {
    // Dynamic light targets based on power state and ambience mode
    let targetAmbient = 0.2;
    let targetKey = 0.03;
    let targetRim = 0.35;
    let targetSlat = 0.05;
    let targetDesk = 0.08;
    let targetSkyline = 0.7; // Dubai skyline always casts ambient cool light through the window

    if (lightsOn) {
      if (lightMode === 'studio') {
        targetAmbient = 0.78;
        targetKey = 1.15;
        targetRim = 1.1;
        targetSlat = 0.65;
        targetDesk = 0.45;
      } else if (lightMode === 'cyberpunk') {
        targetAmbient = 0.42;
        targetKey = 0.35;
        targetRim = 1.85;
        targetSlat = 0.95;
        targetDesk = 0.7;
        targetSkyline = 0.9;
      } else if (lightMode === 'focus') {
        targetAmbient = 0.28;
        targetKey = 0.12;
        targetRim = 0.8;
        targetSlat = 0.2;
        targetDesk = 0.85;
      }
    }

    // Smooth lerp damping for buttery light transitions
    const lerpSpeed = 0.06;
    if (ambientRef.current) {
      ambientRef.current.intensity = THREE.MathUtils.lerp(ambientRef.current.intensity, targetAmbient, lerpSpeed);
    }
    if (keyLightRef.current) {
      keyLightRef.current.intensity = THREE.MathUtils.lerp(keyLightRef.current.intensity, targetKey, lerpSpeed);
    }
    if (rimLightRef.current) {
      rimLightRef.current.intensity = THREE.MathUtils.lerp(rimLightRef.current.intensity, targetRim, lerpSpeed);
    }
    if (slatLightRef.current) {
      slatLightRef.current.intensity = THREE.MathUtils.lerp(slatLightRef.current.intensity, targetSlat, lerpSpeed);
    }
    if (deskLightRef.current) {
      deskLightRef.current.intensity = THREE.MathUtils.lerp(deskLightRef.current.intensity, targetDesk, lerpSpeed);
    }
    if (skylineLightRef.current) {
      skylineLightRef.current.intensity = THREE.MathUtils.lerp(skylineLightRef.current.intensity, targetSkyline, lerpSpeed);
    }
  });

  return (
    <group>
      {/* Base Deep Night Atmospheric Fill */}
      <ambientLight ref={ambientRef} color="#0a1226" intensity={0.2} />

      {/* Main Studio Key Light (Gentle overhead directional) */}
      <directionalLight
        ref={keyLightRef}
        position={[2.4, 4.2, 2.2]}
        intensity={0.03}
        color={lightMode === 'cyberpunk' ? '#38bdf8' : '#f8fafc'}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-bias={-0.001}
      />

      {/* Purple Rim / Hair Light (Articulates developer silhouette) */}
      <directionalLight
        ref={rimLightRef}
        position={[-2.8, 2.2, -2.2]}
        intensity={0.35}
        color={lightMode === 'cyberpunk' ? '#a855f7' : '#7c3aed'}
      />

      {/* Exterior Dubai Nocturnal Window Fill */}
      <directionalLight
        ref={skylineLightRef}
        position={[3.2, 1.8, -3.2]}
        intensity={0.7}
        color="#38bdf8"
      />

      {/* Subtle Wall Slat Glow */}
      <pointLight
        ref={slatLightRef}
        position={[-1.8, 1.6, -1.8]}
        color={lightMode === 'cyberpunk' ? '#06b6d4' : '#8b5cf6'}
        intensity={0.05}
        distance={3.2}
      />

      {/* Soft Desk Surface Fill */}
      <pointLight
        ref={deskLightRef}
        position={[0.2, 0.9, -0.6]}
        color="#38bdf8"
        intensity={0.08}
        distance={2.2}
      />
    </group>
  );
}
