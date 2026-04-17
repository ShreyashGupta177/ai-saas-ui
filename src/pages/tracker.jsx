import { useEffect, useRef } from 'react';
import Card from "../components/Card";
import { TRACKER_COLUMNS } from "../lib/constants";
import { useLenis } from "../hooks/useLenis";
import gsap from 'gsap';

export default function Tracker() {
  useLenis();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.tracker-card'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-dark-bg p-8">
      <h1 className="text-4xl font-bold text-dark-text mb-12">Application Tracker</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {TRACKER_COLUMNS.map((column) => (
          <div key={column.id} className="tracker-card">
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-text-secondary">
                  {column.title}
                </h3>
                <div className="text-4xl font-bold text-blue-500">
                  {column.count}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
