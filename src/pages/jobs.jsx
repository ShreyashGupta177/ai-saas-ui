import { useEffect, useRef, useState } from 'react';
import JobCard from '../components/JobCard';
import Input from '../components/Input';
import { JOB_DATA } from '../lib/constants';
import { staggerChildren } from '../lib/animations';
import { useLenis } from '../hooks/useLenis';

export default function Jobs() {
  useLenis();
  const containerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (containerRef.current) {
      staggerChildren(containerRef.current, '.job-card', 0.1);
    }
  }, []);

  const filteredJobs = JOB_DATA.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="space-y-8">
      <h1 className="text-4xl font-bold">Job Listings</h1>

      <Input
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}