import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';

function SearchModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="relative w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#0f0f2e' }}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-400">Otsi teemat</h2>
            <button onClick={onClose} className="text-slate-500 hover:text-white text-sm">ESC</button>
          </div>
          <SearchBar onClose={onClose} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#0a0a1a' }}>
      {/* Sidebar (desktop: always visible, mobile: overlay) */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="fixed top-0 left-0 h-screen w-72">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex items-center gap-3 px-4 py-3 border-b border-slate-700/50 backdrop-blur-md" style={{ backgroundColor: 'rgba(10,10,26,0.9)' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex-1" />

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Otsi...</span>
            <kbd className="hidden sm:inline text-xs px-1.5 py-0.5 rounded bg-slate-700 text-slate-500">Ctrl+K</kbd>
          </button>
        </header>

        {/* Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/õppetund/:lessonId" element={<LessonPage />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-slate-400 text-xl mb-4">Lehekülge ei leitud</p>
                <a href="/" className="text-blue-400 hover:underline">Tagasi avalehele</a>
              </div>
            } />
          </Routes>
        </main>
      </div>

      {/* Search modal */}
      <AnimatePresence>
        {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
