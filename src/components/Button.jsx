export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl";
  const secondaryClasses = "bg-dark-secondary dark:bg-light-secondary text-dark-text dark:text-light-text hover:scale-105";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        variant === 'primary' ? primaryClasses : secondaryClasses
      } ${className}`}
    >
      {children}
    </button>
  );
}