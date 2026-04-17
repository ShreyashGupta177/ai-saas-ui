import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import Button from './Button';

export default function JobCard({ job }) {
  return (
    <div className="bg-dark-secondary/5 dark:bg-light-secondary/5 backdrop-blur-xl border border-dark-border dark:border-light-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-dark-text dark:text-light-text">
            {job.title}
          </h3>
          <p className="text-dark-text-secondary dark:text-light-text-secondary">
            {job.company}
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{job.matchScore}%</div>
          <p className="text-sm text-dark-text-secondary dark:text-light-text-secondary">
            Match Score
          </p>
        </div>
      </div>

      <p className="text-dark-text-secondary dark:text-light-text-secondary mb-4">
        {job.location}
      </p>

      <div className="flex gap-2 mb-4">
        {job.requirements.slice(0, 3).map((req) => (
          <span
            key={req}
            className="px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-sm"
          >
            {req}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {job.aiDecision === 'Apply' ? (
            <>
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-green-500 font-semibold">Apply ✓</span>
            </>
          ) : (
            <>
              <XCircle size={20} className="text-red-500" />
              <span className="text-red-500 font-semibold">Skip</span>
            </>
          )}
        </div>
        <Button className="w-auto">
          View <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}