export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-dark-secondary/5 dark:bg-light-secondary/5 rounded-lg h-24 animate-pulse"
        />
      ))}
    </div>
  );
}