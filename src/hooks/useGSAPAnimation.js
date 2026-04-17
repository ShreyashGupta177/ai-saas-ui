import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimation(callback, dependency = []) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      callback();
    }
  }, dependency);

  return ref;
}