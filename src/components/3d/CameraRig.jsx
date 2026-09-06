import React, { useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig({ scrollProgress = 1 }) {
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

  // Establishing shot positions:
  // scrollProgress = 0: Wide shot taking in Dubai skyline & room
  // scrollProgress = 1: Close cinematic developer focus shot
  const widePos = { x: 0.35, y: 1.12, z: 2.75 };
  const focusPos = { x: 0.25, y: 0.85, z: 2.26 };

  const wideLook = { x: -0.05, y: 0.48, z: -0.85 };
  const focusLook = { x: -0.08, y: 0.34, z: -0.75 };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Very gentle idle breathing/floating movement (subtle handheld camera feel)
    const idleX = reducedMotion ? 0 : Math.sin(t * 0.4) * 0.012;
    const idleY = reducedMotion ? 0 : Math.cos(t * 0.32) * 0.008;

    // Interpolate base camera target based on scroll progress
    const sp = reducedMotion ? 1 : Math.min(Math.max(scrollProgress, 0), 1);
    const baseX = THREE.MathUtils.lerp(widePos.x, focusPos.x, sp);
    const baseY = THREE.MathUtils.lerp(widePos.y, focusPos.y, sp);
    const baseZ = THREE.MathUtils.lerp(widePos.z, focusPos.z, sp);

    const lookX = THREE.MathUtils.lerp(wideLook.x, focusLook.x, sp);
    const lookY = THREE.MathUtils.lerp(wideLook.y, focusLook.y, sp);
    const lookZ = THREE.MathUtils.lerp(wideLook.z, focusLook.z, sp);

    // Mouse parallax factor: dampened and smooth
    const factor = reducedMotion ? 0 : isMobile ? 0.02 : 0.14;
    const targetX = baseX + state.pointer.x * factor + idleX;
    const targetY = baseY + state.pointer.y * (factor * 0.6) + idleY;
    const targetZ = baseZ - Math.abs(state.pointer.x) * 0.02;

    // Smooth lerp damping
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04);

    // Subtle look-at shift to create genuine optical depth
    const lookTarget = new THREE.Vector3(
      lookX + (state.pointer.x * factor * 0.25),
      lookY + (state.pointer.y * factor * 0.15),
      lookZ
    );

    camera.lookAt(lookTarget);
  });

  return null;
}
