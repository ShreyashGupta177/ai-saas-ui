export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-dark-secondary/5 dark:bg-light-secondary/5 backdrop-blur-xl border border-dark-border dark:border-light-border rounded-2xl p-6 ${
        hover ? 'hover:scale-105 hover:shadow-2xl transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}