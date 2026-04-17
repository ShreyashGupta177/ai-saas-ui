import { Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { pulseGlow } from '../lib/animations';

export default function AIInsightPanel({ title, insights, score }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      pulseGlow(panelRef.current);
    }
  }, []);

  return (
    <div
      ref={panelRef}
      className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Zap size={24} className="text-blue-500" />
        <h3 className="text-xl font-bold text-dark-text dark:text-light-text">
          {title}
        </h3>
      </div>

      {score && (
        <div className="mb-4 p-3 bg-blue-600/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{score}%</div>
          <p className="text-sm text-dark-text-secondary dark:text-light-text-secondary">
            Overall Match
          </p>
        </div>
      )}

      <ul className="space-y-2">
        {insights.map((insight, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-dark-text-secondary dark:text-light-text-secondary"
          >
            <span className="text-blue-500 mt-1">✓</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}