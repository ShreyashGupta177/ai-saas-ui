export default function Input({ placeholder, value, onChange, className = '' }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 bg-dark-secondary/5 dark:bg-light-secondary/5 border border-dark-border dark:border-light-border rounded-lg text-dark-text dark:text-light-text placeholder-dark-text-secondary dark:placeholder-light-text-secondary focus:outline-none focus:border-blue-600 transition-colors ${className}`}
    />
  );
}