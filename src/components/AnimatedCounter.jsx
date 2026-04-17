import { useEffect, useRef } from 'react';
import { animateCounter } from '../lib/animations';

export default function AnimatedCounter({ target, label, duration = 1 }) {
  const countRef = useRef(null);

  useEffect(() => {
    if (countRef.current) {
      animateCounter(countRef.current, target, duration);
    }
  }, [target, duration]);

  return (
    <div className="text-center">
      <div ref={countRef} className="text-4xl font-bold text-blue-600 mb-2">
        0
      </div>
      <p className="text-dark-text-secondary dark:text-light-text-secondary">{label}</p>
    </div>
  );
}