import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig() {
  const { camera } = useThree();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Check mobile viewport width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Base camera anchor
  const basePos = new THREE.Vector3(0.25, 0.85, 2.3);
  const targetLookAt = new THREE.Vector3(-0.08, 0.32, -0.75);

  useFrame((state) => {
    // Parallax damping
    const factor = reducedMotion ? 0.02 : isMobile ? 0.05 : 0.22;
    const targetX = basePos.x + state.pointer.x * factor;
    const targetY = basePos.y + state.pointer.y * (factor * 0.65);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, basePos.z, 0.04);

    camera.lookAt(targetLookAt);
  });

  return null;
}
