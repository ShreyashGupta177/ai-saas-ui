import AnimatedCounter from './AnimatedCounter';

export default function StatCard({ label, value }) {
  return (
    <div className="bg-dark-secondary/5 dark:bg-light-secondary/5 backdrop-blur-xl border border-dark-border dark:border-light-border rounded-2xl p-6 text-center">
      <AnimatedCounter target={value} label={label} duration={0.8} />
    </div>
  );
}