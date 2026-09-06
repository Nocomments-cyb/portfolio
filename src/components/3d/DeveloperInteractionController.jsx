import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const InteractionContext = createContext(null);

export function DeveloperInteractionProvider({ children, lightsOn = true }) {
  // Activity state: 'typing' | 'paused' | 'coffee' | 'headphones' | 'phone' | 'boost'
  const [activityState, setActivityState] = useState('typing');
  const [coffeeProgress, setCoffeeProgress] = useState(0); // 0 -> 1 during sip
  const [phoneProgress, setPhoneProgress] = useState(0); // 0 -> 1 during pick up, check & return
  const [phoneActive, setPhoneActive] = useState(false);
  const [headphonesActive, setHeadphonesActive] = useState(false);
  const [keystrokeCount, setKeystrokeCount] = useState(0);
  const [hudEvent, setHudEvent] = useState(null);

  const isCoffeeRunningRef = useRef(false);
  const isPhoneRunningRef = useRef(false);
  const idleTimerRef = useRef(null);
  const hudTimerRef = useRef(null);

  // Helper to post HUD event notifications (auto-dismissed without stacking)
  const showHudEvent = useCallback((message, duration = 3200) => {
    if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
    setHudEvent(message);
    hudTimerRef.current = setTimeout(() => {
      setHudEvent(null);
    }, duration);
  }, []);

  // --- NATURAL IDLE & TYPING RHYTHM CYCLE ---
  // Cycles between active typing and brief pauses to read the screen or adjust posture
  useEffect(() => {
    if (!lightsOn) {
      setActivityState('paused');
      return;
    }

    // Don't interrupt manual interactive sequences
    if (isCoffeeRunningRef.current || isPhoneRunningRef.current || headphonesActive) {
      return;
    }

    let isMounted = true;

    const scheduleNextCycle = () => {
      if (!isMounted || isCoffeeRunningRef.current || isPhoneRunningRef.current || headphonesActive) return;

      if (activityState === 'typing' || activityState === 'boost') {
        // Typing session duration: 4.5s - 7.5s
        const typeDuration = 4500 + Math.random() * 3000;
        idleTimerRef.current = setTimeout(() => {
          if (!isMounted || isCoffeeRunningRef.current || isPhoneRunningRef.current) return;
          setActivityState('paused');
        }, typeDuration);
      } else if (activityState === 'paused') {
        // Natural reading / thinking pause: 1.6s - 2.8s
        const pauseDuration = 1600 + Math.random() * 1200;
        idleTimerRef.current = setTimeout(() => {
          if (!isMounted || isCoffeeRunningRef.current || isPhoneRunningRef.current) return;
          setActivityState('typing');
        }, pauseDuration);
      }
    };

    scheduleNextCycle();

    return () => {
      isMounted = false;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [activityState, lightsOn, headphonesActive]);

  // --- COFFEE INTERACTION ---
  const triggerCoffee = useCallback(() => {
    if (isCoffeeRunningRef.current || isPhoneRunningRef.current) return;
    isCoffeeRunningRef.current = true;

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setActivityState('coffee');
    showHudEvent('☕ COFFEE BREAK // FLOW STATE +1');

    const startTime = performance.now();
    const duration = 4800; // 4.8s complete reach, sip, replace

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCoffeeProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCoffeeProgress(0);
        isCoffeeRunningRef.current = false;
        setActivityState('typing');
      }
    };

    requestAnimationFrame(animate);
  }, [showHudEvent]);

  // --- HEADPHONES INTERACTION ---
  const triggerHeadphones = useCallback(() => {
    if (isCoffeeRunningRef.current || isPhoneRunningRef.current) return;
    setHeadphonesActive(true);
    setActivityState('headphones');
    showHudEvent('🎧 FLOW STATE // AUDIO ACTIVE');

    setTimeout(() => {
      setHeadphonesActive(false);
      setActivityState('typing');
    }, 2500);
  }, [showHudEvent]);

  // --- SMARTPHONE PICK-UP, CHECK & RETURN INTERACTION ---
  const triggerPhone = useCallback(() => {
    if (isPhoneRunningRef.current || isCoffeeRunningRef.current) return;
    isPhoneRunningRef.current = true;

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setPhoneActive(true);
    setActivityState('phone');
    showHudEvent('📱 SMARTPHONE // NOTIFICATIONS CHECKED');

    const startTime = performance.now();
    const duration = 4800; // 4.8 seconds for reach, lift, inspect, lower, and replace

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setPhoneProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setPhoneProgress(0);
        setPhoneActive(false);
        isPhoneRunningRef.current = false;
        setActivityState('typing');
      }
    };

    requestAnimationFrame(animate);
  }, [showHudEvent]);

  // --- KEYBOARD CLICK & PHYSICAL KEY TYPING BOOST ---
  const triggerKeyboard = useCallback(() => {
    if (isCoffeeRunningRef.current || isPhoneRunningRef.current) return;
    setActivityState('boost');
    setKeystrokeCount((prev) => prev + 1);
    showHudEvent('⌨ LIVE CODING // ACCELERATING AST COMPILE', 2400);

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setActivityState('typing');
    }, 3600);
  }, [showHudEvent]);

  // --- GLOBAL KEYBOARD LISTENER (TYPING ON PHYSICAL KEYS TRIGGERS REAL CODING) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if typing in standard HTML inputs or textareas
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) {
        return;
      }
      // Increment keystroke and set boost mode
      setKeystrokeCount((prev) => prev + 1);
      if (!isCoffeeRunningRef.current && !isPhoneRunningRef.current) {
        setActivityState('boost');
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        idleTimerRef.current = setTimeout(() => {
          setActivityState('typing');
        }, 3200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <InteractionContext.Provider
      value={{
        activityState,
        coffeeProgress,
        isCoffeeRunning: isCoffeeRunningRef.current,
        phoneProgress,
        isPhoneRunning: isPhoneRunningRef.current,
        phoneActive,
        headphonesActive,
        keystrokeCount,
        hudEvent,
        showHudEvent,
        triggerCoffee,
        triggerHeadphones,
        triggerPhone,
        triggerKeyboard,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
}

export function useDeveloperInteraction() {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error('useDeveloperInteraction must be used within DeveloperInteractionProvider');
  }
  return context;
}
