import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const slideUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.6, delay, ease: "power2.out" }
  );
};

export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.5, delay, ease: "power2.out" }
  );
};

export const staggerChildren = (container, selector, staggerDelay = 0.1) => {
  const elements = container.querySelectorAll(selector);
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.6, stagger: staggerDelay, ease: "power2.out" }
  );
};

export const pulseGlow = (element) => {
  gsap.to(element, {
    boxShadow: "0 0 40px rgba(0, 102, 255, 0.6)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    y: 100 * speed,
    ease: "none",
  });
};

export const scrollReveal = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const animateCounter = (element, target, duration = 1) => {
  gsap.to(
    { value: 0 },
    {
      value: target,
      duration,
      ease: "power2.out",
      onUpdate(self) {
        element.textContent = Math.floor(self.progress() * target).toString();
      },
    }
  );
};