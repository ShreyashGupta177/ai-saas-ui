import { Home, Briefcase, Upload, Kanban, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/jobs', icon: Briefcase, label: 'Jobs' },
  { href: '/resume', icon: Upload, label: 'Resume' },
  { href: '/tracker', icon: Kanban, label: 'Tracker' },
  { href: '/ai-insights', icon: Zap, label: 'AI Insights' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-dark-secondary dark:bg-light-secondary rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed left-0 top-0 w-64 h-screen bg-dark-bg dark:bg-light-bg border-r border-dark-border dark:border-light-border p-6 flex flex-col gap-8 z-40 transform transition-transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          AI Jobs
        </h1>

        <nav className="flex flex-col gap-2">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-secondary dark:hover:bg-light-secondary transition-colors group"
            >
              <Icon size={20} className="group-hover:text-blue-500 transition-colors" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
