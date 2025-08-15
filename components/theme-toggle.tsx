'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-sky-500 dark:bg-indigo-500 hover:bg-sky-600 dark:hover:bg-indigo-600 transition-all shadow-lg cursor-pointer"
      aria-label="Toggle theme"
      tabIndex={0}
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-white" />
      ) : (
        <Moon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}