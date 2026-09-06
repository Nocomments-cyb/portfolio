import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import Lighting from './Lighting';
import Room from './Room';
import DubaiWindow from './DubaiWindow';
import Desk from './Desk';
import Monitors from './Monitors';
import DeveloperCharacter from './DeveloperCharacter';
import Peripherals from './Peripherals';
import SceneHUD from './SceneHUD';
import fallbackImage from '../../assets/developer_workspace.jpg';

// Simple WebGL availability detection helper
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function DeveloperScene() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [hoveredObject, setHoveredObject] = useState(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  const handleNavigateToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fallback for browsers or devices without WebGL
  if (!webglSupported || hasError) {
    return (
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-800 bg-[#070a12]">
        <img
          src={fallbackImage}
          alt="Developer Workspace in Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-[#090d16]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-slate-300">
          Static Fallback Active (WebGL Unavailable)
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-700/80 bg-[#070a12] shadow-2xl ${
        hoveredObject ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* 3D Canvas Viewport */}
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        camera={{
          position: [0.25, 0.85, 2.3],
          fov: 48,
          near: 0.1,
          far: 30,
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <CameraRig />
          <Lighting />
          <Room />
          <DubaiWindow
            onSelect={setSelectedObject}
            isHovered={hoveredObject === 'window'}
            setHovered={setHoveredObject}
          />
          <Desk
            onSelect={setSelectedObject}
            isHovered={hoveredObject === 'desk'}
            setHovered={setHoveredObject}
          />
          <Monitors
            onSelect={setSelectedObject}
            isHovered={hoveredObject === 'monitor'}
            setHovered={setHoveredObject}
          />
          <DeveloperCharacter
            onSelect={setSelectedObject}
            isHovered={hoveredObject === 'developer' || hoveredObject === 'headphones'}
            setHovered={setHoveredObject}
          />
          <Peripherals
            onSelect={setSelectedObject}
            isHovered={hoveredObject}
            setHovered={setHoveredObject}
          />
        </Suspense>
      </Canvas>

      {/* Futuristic HUD Overlay */}
      <SceneHUD
        selectedObject={selectedObject}
        setSelectedObject={setSelectedObject}
        hoveredObject={hoveredObject}
        onNavigateToProjects={handleNavigateToProjects}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToContact={handleNavigateToContact}
      />
    </div>
  );
}
