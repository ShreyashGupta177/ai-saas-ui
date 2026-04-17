import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-secondary dark:bg-light-secondary text-dark-text dark:text-light-text hover:scale-110 transition-transform"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}