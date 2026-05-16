import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from './ProgressBar';

export function Sidebar({ isOpen, onClose }) {
  const [expandedChapters, setExpandedChapters] = useState(() => {
    // Default: expand first chapter
    return { 1: true };
  });
  const { lessonId } = useParams();
  const { isComplete, getChapterProgress } = useProgress();

  const toggleChapter = (id) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <motion.aside
        className={`fixed left-0 top-0 h-full w-72 z-40 flex flex-col border-r border-slate-700/50 overflow-hidden
          lg:relative lg:translate-x-0 lg:z-auto`}
        style={{ backgroundColor: '#0f0f2e' }}
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700/50">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-sm font-bold">
              M
            </div>
            <span className="font-bold text-white text-lg gradient-text">Matemaatika</span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chapter list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {chapters.map((chapter) => {
            const prog = getChapterProgress(chapter.topics);
            const expanded = expandedChapters[chapter.id];

            return (
              <div key={chapter.id} className="mb-1">
                {/* Chapter header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-slate-700/30 transition-colors group"
                >
                  <span className={`flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold
                    ${prog.completed === prog.total && prog.total > 0
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'}`}>
                    {prog.completed === prog.total && prog.total > 0 ? '✓' : chapter.id}
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-200 group-hover:text-white leading-tight">
                    {chapter.title}
                  </span>
                  <span className="text-xs text-slate-500">{prog.completed}/{prog.total}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-slate-500 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Progress bar */}
                <div className="px-4 pb-1">
                  <ProgressBar value={prog.completed} max={prog.total} size="sm" />
                </div>

                {/* Topics */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {chapter.topics.map((topic) => {
                        const active = topic.id === lessonId;
                        const done = isComplete(topic.id);

                        return (
                          <Link
                            key={topic.id}
                            to={`/õppetund/${topic.id}`}
                            onClick={onClose}
                            className={`flex items-center gap-2 pl-10 pr-4 py-2 text-sm transition-colors
                              ${active
                                ? 'bg-blue-600/20 text-blue-300 border-r-2 border-blue-500'
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/20'}`}
                          >
                            <span className={`w-4 h-4 flex-shrink-0 rounded-full border flex items-center justify-center text-xs
                              ${done ? 'border-green-500 bg-green-500/20 text-green-400' : 'border-slate-600'}`}>
                              {done ? '✓' : ''}
                            </span>
                            <span className="leading-tight">{topic.title}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-700/50">
          <Link to="/" onClick={onClose} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Avaleht
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
