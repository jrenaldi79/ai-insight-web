
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useSmooth() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2, // Scroll animation duration in seconds
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function (ease-out-expo)
      orientation: 'vertical', // Vertical scroll
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Don't enable smooth scrolling on mobile
      touchMultiplier: 2,
    });

    // Set up RAF loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Clean up
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef.current;
}
