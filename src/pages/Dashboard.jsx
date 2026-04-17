import { useEffect, useRef } from 'react';
import StatCard from '../components/StatCard';
import JobCard from '../components/JobCard';
import AIInsightPanel from '../components/AIInsightPanel';
import { STATS, JOB_DATA } from '../lib/constants';
import { staggerChildren } from '../lib/animations';
import { useLenis } from '../hooks/useLenis';

export default function Dashboard() {
  useLenis();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      staggerChildren(containerRef.current, '.animate-item', 0.1);
    }
  }, []);

  return (
    <div ref={containerRef} className="space-y-8">
      <h1 className="text-4xl font-bold animate-item">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <div key={idx} className="animate-item">
            <StatCard label={stat.label} value={stat.value} />
          </div>
        ))}
      </div>

      <section className="animate-item">
        <h2 className="text-2xl font-bold mb-4">Top Job Matches</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {JOB_DATA.slice(0, 2).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <div className="animate-item">
        <AIInsightPanel
          title="AI Recommendation"
          score={85}
          insights={[
            'Your profile matches 85% of the Senior React Developer role',
            'Strong skills in React and modern tooling',
            'Consider adding more projects to your resume',
          ]}
        />
      </div>
    </div>
  );
}