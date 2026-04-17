import { useEffect, useState } from 'react';
import { useThemeStore } from '../store/themeStore';

export function useTheme() {
  const { isDark, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (!mounted) return { isDark: true, toggleTheme };
  return { isDark, toggleTheme };
}