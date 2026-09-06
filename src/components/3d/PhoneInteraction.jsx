import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeveloperInteraction } from './DeveloperInteractionController';

/**
 * PhoneInteraction Component
 * 
 * Renders an elevated, angled wireless charging dock and a prominently visible
 * smartphone with a glowing OLED lockscreen displaying real-time Dubai telemetry
 * and client notification banners.
 * 
 * Kinematically coordinates with the developer's left arm:
 * - Resting on dock when idle
 * - Lifting up toward chest/chin when clicked
 * - Inspected by developer (head tilt + screen check)
 * - Smoothly lowered back onto the dock stand
 */
export default function PhoneInteraction({ isHovered, setHovered, onSelect, lightsOn = true }) {
  const { phoneProgress, isPhoneRunning, phoneActive, triggerPhone } = useDeveloperInteraction();
  const phoneGroupRef = useRef();

  // Home position & rotation on the angled desktop charging stand
  const homePos = useMemo(() => ({ x: -0.52, y: 0.105, z: -0.46 }), []);
  const homeRot = useMemo(() => ({ x: -0.55, y: 0.22, z: -0.1 }), []);

  // Inspection position & rotation in front of developer's chest and eyes
  const inspectPos = useMemo(() => ({ x: -0.15, y: 0.38, z: -0.22 }), []);
  const inspectRot = useMemo(() => ({ x: -0.32, y: 0.15, z: -0.05 }), []);

  // Procedural OLED lockscreen canvas texture for ultra-high-definition readability
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Deep midnight slate background with subtle cyan ambient radial gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(0.4, '#0d1f38');
    grad.addColorStop(1, '#081224');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 512);

    // Status bar (Time, Battery, Wifi)
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('02:42', 24, 38);
    ctx.fillText('5G', 168, 38);
    ctx.fillText('98%⚡', 198, 38);

    // Large glowing lockscreen clock
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px "JetBrains Mono", system-ui, sans-serif';
    ctx.fillText('02:42', 46, 128);

    // Dubai Location & Date
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px monospace';
    ctx.fillText('DUBAI • GST (UTC+4)', 48, 156);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px system-ui, sans-serif';
    ctx.fillText('Sunday, September 6', 58, 178);

    // Notification Card (Prominent Glowing Glass Card)
    ctx.fillStyle = 'rgba(30, 41, 59, 0.92)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;

    // Rounded card box
    const cardX = 16;
    const cardY = 220;
    const cardW = 224;
    const cardH = 110;
    const radius = 16;

    ctx.beginPath();
    ctx.moveTo(cardX + radius, cardY);
    ctx.lineTo(cardX + cardW - radius, cardY);
    ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
    ctx.lineTo(cardX + cardW, cardY + cardH - radius);
    ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - radius, cardY + cardH);
    ctx.lineTo(cardX + radius, cardY + cardH);
    ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
    ctx.lineTo(cardX, cardY + radius);
    ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Notification Header
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(36, 246, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.fillText('CLIENT DIRECT • NOW', 50, 250);

    // Notification Title & Content
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14.5px system-ui, sans-serif';
    ctx.fillText('Product Brief Approved', 32, 276);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '13px system-ui, sans-serif';
    ctx.fillText('Ready to deploy live build 🚀', 32, 298);

    // Swipe / Unlock Bar at bottom
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(80, 485, 96, 5);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Frame animation loop driving phone transform across the 5 phases of phoneProgress
  useFrame(() => {
    if (!phoneGroupRef.current) return;

    if (phoneProgress <= 0 || phoneProgress >= 1) {
      // Resting on angled desk dock
      phoneGroupRef.current.position.set(homePos.x, homePos.y, homePos.z);
      phoneGroupRef.current.rotation.set(homeRot.x, homeRot.y, homeRot.z);
      return;
    }

    let curX = homePos.x;
    let curY = homePos.y;
    let curZ = homePos.z;
    let curRotX = homeRot.x;
    let curRotY = homeRot.y;
    let curRotZ = homeRot.z;

    if (phoneProgress <= 0.18) {
      // Phase 1: Hand reaches toward dock (phone stays on dock)
      curX = homePos.x;
      curY = homePos.y;
      curZ = homePos.z;
      curRotX = homeRot.x;
      curRotY = homeRot.y;
      curRotZ = homeRot.z;
    } else if (phoneProgress <= 0.42) {
      // Phase 2: Smooth lift off dock toward chest/face
      const p = (phoneProgress - 0.18) / 0.24;
      const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
      curX = THREE.MathUtils.lerp(homePos.x, inspectPos.x, easeP);
      curY = THREE.MathUtils.lerp(homePos.y, inspectPos.y, easeP);
      curZ = THREE.MathUtils.lerp(homePos.z, inspectPos.z, easeP);
      curRotX = THREE.MathUtils.lerp(homeRot.x, inspectRot.x, easeP);
      curRotY = THREE.MathUtils.lerp(homeRot.y, inspectRot.y, easeP);
      curRotZ = THREE.MathUtils.lerp(homeRot.z, inspectRot.z, easeP);
    } else if (phoneProgress <= 0.70) {
      // Phase 3: Hold steady in front of developer eyes for notification reading
      const p = (phoneProgress - 0.42) / 0.28;
      // Subtle micro-movement as thumb taps screen
      const tapWobble = Math.sin(p * Math.PI * 3) * 0.003;
      curX = inspectPos.x;
      curY = inspectPos.y + tapWobble;
      curZ = inspectPos.z;
      curRotX = inspectRot.x;
      curRotY = inspectRot.y;
      curRotZ = inspectRot.z;
    } else if (phoneProgress <= 0.88) {
      // Phase 4: Lowering phone smoothly back toward dock stand
      const p = (phoneProgress - 0.70) / 0.18;
      const easeP = THREE.MathUtils.smoothstep(p, 0, 1);
      curX = THREE.MathUtils.lerp(inspectPos.x, homePos.x, easeP);
      curY = THREE.MathUtils.lerp(inspectPos.y, homePos.y, easeP);
      curZ = THREE.MathUtils.lerp(inspectPos.z, homePos.z, easeP);
      curRotX = THREE.MathUtils.lerp(inspectRot.x, homeRot.x, easeP);
      curRotY = THREE.MathUtils.lerp(inspectRot.y, homeRot.y, easeP);
      curRotZ = THREE.MathUtils.lerp(inspectRot.z, homeRot.z, easeP);
    } else {
      // Phase 5: Settle on dock, hand returns to keyboard
      curX = homePos.x;
      curY = homePos.y;
      curZ = homePos.z;
      curRotX = homeRot.x;
      curRotY = homeRot.y;
      curRotZ = homeRot.z;
    }

    phoneGroupRef.current.position.set(curX, curY, curZ);
    phoneGroupRef.current.rotation.set(curRotX, curRotY, curRotZ);
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isPhoneRunning) {
      triggerPhone();
    }
    if (onSelect) onSelect('phone');
  };

  return (
    <group>
      {/* --- PERMANENT ANGLED WIRELESS CHARGER STAND ON DESK --- */}
      <group position={[homePos.x, 0.065, homePos.z]} rotation={[0, homeRot.y, 0]}>
        {/* Charger Base Weighted Foot */}
        <mesh position={[0, 0.005, 0]} receiveShadow>
          <boxGeometry args={[0.13, 0.01, 0.14]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Angled Backing Support Plate */}
        <mesh position={[0, 0.055, -0.03]} rotation={[-0.45, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.11, 0.12, 0.012]} />
          <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Lower Rest Ledge / Lip */}
        <mesh position={[0, 0.018, 0.035]}>
          <boxGeometry args={[0.12, 0.018, 0.02]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Soft Cyan Charging LED Indicator on Stand Base */}
        <mesh position={[0, 0.011, 0.06]}>
          <boxGeometry args={[0.04, 0.002, 0.006]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* --- SMARTPHONE (LIFTS AND RETURNS SMOOTHLY) --- */}
      <group
        ref={phoneGroupRef}
        position={[homePos.x, homePos.y, homePos.z]}
        rotation={[homeRot.x, homeRot.y, homeRot.z]}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered && setHovered('phone');
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered && setHovered(null);
        }}
      >
        {/* Invisible Hitbox for Responsive Clicking */}
        <mesh visible={false}>
          <boxGeometry args={[0.16, 0.04, 0.28]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Polished Titanium Phone Frame */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.122, 0.012, 0.23]} />
          <meshStandardMaterial
            color={isHovered === 'phone' ? '#475569' : '#1e293b'}
            metalness={0.92}
            roughness={0.18}
            emissive={isHovered === 'phone' ? '#38bdf8' : '#000000'}
            emissiveIntensity={isHovered === 'phone' ? 0.35 : 0}
          />
        </mesh>

        {/* Shiny Silver Chamfered Rim */}
        <mesh position={[0, 0.006, 0]}>
          <boxGeometry args={[0.124, 0.002, 0.232]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Camera Bump Module on Back */}
        <mesh position={[-0.032, -0.008, -0.075]}>
          <boxGeometry args={[0.045, 0.004, 0.055]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Radiant OLED Lockscreen Display */}
        <mesh position={[0, 0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.116, 0.222]} />
          <meshBasicMaterial
            map={screenTexture}
            toneMapped={false}
          />
        </mesh>

        {/* Localized Screen Light Casting Glow on Desk Stand & Surrounding Mat */}
        <pointLight
          position={[0, 0.06, 0]}
          color="#38bdf8"
          intensity={phoneActive || phoneProgress > 0 ? 0.95 : (isHovered === 'phone' ? 0.8 : 0.55)}
          distance={0.7}
        />
      </group>
    </group>
  );
}
