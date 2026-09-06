import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const InteractionContext = createContext(null);

export function DeveloperInteractionProvider({ children, lightsOn = true }) {
  // Activity state: 'typing' | 'paused' | 'coffee' | 'headphones' | 'phone' | 'boost'
  const [activityState, setActivityState] = useState('typing');
  const [coffeeProgress, setCoffeeProgress] = useState(0); // 0 -> 1 during sip
  const [phoneActive, setPhoneActive] = useState(false);
  const [headphonesActive, setHeadphonesActive] = useState(false);
  const [hudEvent, setHudEvent] = useState(null);

  const isCoffeeRunningRef = useRef(false);
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
    if (isCoffeeRunningRef.current || phoneActive || headphonesActive) {
      return;
    }

    let isMounted = true;

    const scheduleNextCycle = () => {
      if (!isMounted || isCoffeeRunningRef.current || phoneActive || headphonesActive) return;

      if (activityState === 'typing' || activityState === 'boost') {
        // Typing session duration: 4.5s - 7.5s
        const typeDuration = 4500 + Math.random() * 3000;
        idleTimerRef.current = setTimeout(() => {
          if (!isMounted || isCoffeeRunningRef.current) return;
          setActivityState('paused');
        }, typeDuration);
      } else if (activityState === 'paused') {
        // Natural reading / thinking pause: 1.6s - 2.8s
        const pauseDuration = 1600 + Math.random() * 1200;
        idleTimerRef.current = setTimeout(() => {
          if (!isMounted || isCoffeeRunningRef.current) return;
          setActivityState('typing');
        }, pauseDuration);
      }
    };

    scheduleNextCycle();

    return () => {
      isMounted = false;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [activityState, lightsOn, phoneActive, headphonesActive]);

  // --- COFFEE INTERACTION ---
  const triggerCoffee = useCallback(() => {
    if (isCoffeeRunningRef.current) return; // Prevent overlapping triggers
    isCoffeeRunningRef.current = true;

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setActivityState('coffee');
    showHudEvent('☕ COFFEE BREAK // FLOW STATE +1');

    const startTime = performance.now();
    const duration = 4800; // 4.8 seconds for the complete reach, sip, and replace sequence

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCoffeeProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Finished: reset progress, return to typing
        setCoffeeProgress(0);
        isCoffeeRunningRef.current = false;
        setActivityState('typing');
      }
    };

    requestAnimationFrame(animate);
  }, [showHudEvent]);

  // --- HEADPHONES INTERACTION ---
  const triggerHeadphones = useCallback(() => {
    if (isCoffeeRunningRef.current) return;
    setHeadphonesActive(true);
    setActivityState('headphones');
    showHudEvent('🎧 FLOW STATE // AUDIO ACTIVE');

    setTimeout(() => {
      setHeadphonesActive(false);
      setActivityState('typing');
    }, 2500);
  }, [showHudEvent]);

  // --- PHONE INTERACTION ---
  const triggerPhone = useCallback(() => {
    if (isCoffeeRunningRef.current) return;
    setPhoneActive(true);
    setActivityState('phone');
    showHudEvent('📱 QUICK CHECK // NOTIFICATION READ');

    setTimeout(() => {
      setPhoneActive(false);
      setActivityState('typing');
    }, 2400);
  }, [showHudEvent]);

  // --- KEYBOARD CLICK (BOOST) ---
  const triggerKeyboard = useCallback(() => {
    if (isCoffeeRunningRef.current) return;
    setActivityState('boost');
    showHudEvent('⌨ CODE SESSION // ACTIVE');

    setTimeout(() => {
      setActivityState('typing');
    }, 3200);
  }, [showHudEvent]);

  return (
    <InteractionContext.Provider
      value={{
        activityState,
        coffeeProgress,
        isCoffeeRunning: isCoffeeRunningRef.current,
        phoneActive,
        headphonesActive,
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
