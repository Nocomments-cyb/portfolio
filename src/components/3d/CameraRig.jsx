import React, { useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig() {
  const { camera } = useThree();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Cinematic establishing base position
  const basePos = new THREE.Vector3(0.26, 0.88, 2.32);
  const baseLookAt = new THREE.Vector3(-0.08, 0.34, -0.75);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Very gentle idle breathing/floating movement (subtle handheld camera feel)
    const idleX = reducedMotion ? 0 : Math.sin(t * 0.4) * 0.012;
    const idleY = reducedMotion ? 0 : Math.cos(t * 0.32) * 0.008;

    // Mouse parallax factor: highly dampened and smooth
    const factor = reducedMotion ? 0 : isMobile ? 0.025 : 0.16;
    const targetX = basePos.x + state.pointer.x * factor + idleX;
    const targetY = basePos.y + state.pointer.y * (factor * 0.6) + idleY;
    const targetZ = basePos.z - Math.abs(state.pointer.x) * 0.02;

    // Smooth lerp damping
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);

    // Subtle look-at shift to create genuine optical depth
    const lookTarget = new THREE.Vector3(
      baseLookAt.x + (state.pointer.x * factor * 0.25),
      baseLookAt.y + (state.pointer.y * factor * 0.15),
      baseLookAt.z
    );

    camera.lookAt(lookTarget);
  });

  return null;
}
