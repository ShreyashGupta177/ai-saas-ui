import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/jobs';
import ResumeUpload from './pages/ResumeUpload';
import Tracker from './pages/tracker';
import AIInsights from './pages/AIInsights';
import { useTheme } from './hooks/useTheme';

function App() {
  useTheme();

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="w-full md:ml-64 min-h-screen bg-dark-bg dark:bg-light-bg p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/resume" element={<ResumeUpload />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/ai-insights" element={<AIInsights />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;