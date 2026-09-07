import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import Lighting from './Lighting';
import Room from './Room';
import DubaiWindow from './DubaiWindow';
import Desk from './Desk';
import Monitors from './Monitors';
import DeveloperCharacter from './DeveloperCharacter';
import CoffeeInteraction from './CoffeeInteraction';
import PhoneInteraction from './PhoneInteraction';
import Peripherals from './Peripherals';
import SceneHUD from './SceneHUD';
import { DeveloperInteractionProvider } from './DeveloperInteractionController';
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
  const containerRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [hoveredObject, setHoveredObject] = useState(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [lightsOn, setLightsOn] = useState(true);
  const [lightMode, setLightMode] = useState('studio'); // 'studio' | 'cyberpunk' | 'focus'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAutoTurnedOn, setHasAutoTurnedOn] = useState(true);
  const [hudNotification, setHudNotification] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  // Scroll & Viewport Reactivity: Turn on room lights as visitor scrolls to workstation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distance from top of viewport to bottom of viewport
      const totalDist = windowHeight * 0.75;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollProgress(progress);

      // Auto-turn on room lights when user scrolls down to where the developer workstation is
      if (!hasAutoTurnedOn && (progress > 0.35 || rect.top < windowHeight * 0.65)) {
        setLightsOn(true);
        setHasAutoTurnedOn(true);
        setHudNotification('⚡ WORKSPACE INITIALIZED // ROOM LIGHTS ON');
        setTimeout(() => setHudNotification(null), 3500);
      }
    };

    // Initial check on mount
    if (containerRef.current) {
      const initialRect = containerRef.current.getBoundingClientRect();
      if (initialRect.top < window.innerHeight * 0.65) {
        setLightsOn(true);
        setHasAutoTurnedOn(true);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAutoTurnedOn]);

  const toggleLights = () => {
    setLightsOn((prev) => {
      const next = !prev;
      setHudNotification(next ? '⚡ ROOM LIGHTS ON' : '🌙 STANDBY NIGHT MODE');
      setTimeout(() => setHudNotification(null), 2500);
      return next;
    });
  };

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
      <div className="relative min-h-[420px] xs:min-h-[460px] sm:min-h-0 aspect-[4/3] xs:aspect-[1/1] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-800 bg-[#070a12]">
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
    <DeveloperInteractionProvider lightsOn={lightsOn}>
      <div
        ref={containerRef}
        className={`relative min-h-[420px] xs:min-h-[460px] sm:min-h-0 aspect-[4/3] xs:aspect-[1/1] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-700/80 bg-[#070a12] shadow-2xl ${
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
          onCreated={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        >
          <Suspense fallback={null}>
            <CameraRig scrollProgress={scrollProgress} />
            <Lighting lightsOn={lightsOn} lightMode={lightMode} />
            <Room lightsOn={lightsOn} lightMode={lightMode} />
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
            <CoffeeInteraction
              onSelect={setSelectedObject}
              isHovered={hoveredObject === 'coffee'}
              setHovered={setHoveredObject}
            />
            <PhoneInteraction
              onSelect={setSelectedObject}
              isHovered={hoveredObject === 'phone'}
              setHovered={setHoveredObject}
              lightsOn={lightsOn}
            />
            <Monitors
              onSelect={setSelectedObject}
              isHovered={hoveredObject === 'monitor'}
              setHovered={setHoveredObject}
              lightsOn={lightsOn}
              lightMode={lightMode}
            />
            <DeveloperCharacter
              onSelect={setSelectedObject}
              isHovered={hoveredObject === 'developer' || hoveredObject === 'headphones'}
              setHovered={setHoveredObject}
              lightsOn={lightsOn}
              lightMode={lightMode}
            />
            <Peripherals
              onSelect={setSelectedObject}
              isHovered={hoveredObject}
              setHovered={setHoveredObject}
              lightsOn={lightsOn}
            />
          </Suspense>
        </Canvas>

        {/* Initializing Workspace Indicator (Fades out smoothly once Canvas is created) */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070a12] pointer-events-none transition-opacity duration-500">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="tracking-widest font-semibold text-cyan-300">INITIALIZING WORKSPACE...</span>
            </div>
          </div>
        )}

        {/* Futuristic HUD Overlay with Light Controls, Event Banners, and Object Controls */}
        <SceneHUD
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          hoveredObject={hoveredObject}
          onNavigateToProjects={handleNavigateToProjects}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToContact={handleNavigateToContact}
          lightsOn={lightsOn}
          onToggleLights={toggleLights}
          lightMode={lightMode}
          onSelectLightMode={setLightMode}
          hudNotification={hudNotification}
        />
      </div>
    </DeveloperInteractionProvider>
  );
}
