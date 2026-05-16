import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { chapters } from '../data/curriculum';

const allTopics = chapters.flatMap(ch =>
  ch.topics.map(t => ({ ...t, chapterTitle: ch.title, chapterId: ch.id }))
);

export function SearchBar({ onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const found = allTopics.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.chapterTitle.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(found);
    setActiveIndex(0);
  }, [query]);

  const go = (lessonId) => {
    navigate(`/õppetund/${lessonId}`);
    onClose?.();
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      go(results[activeIndex].id);
    } else if (e.key === 'Escape') {
      onClose?.();
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Otsi teemasid..."
          className="w-full bg-navy-800 border border-slate-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
          style={{ backgroundColor: '#1a1a3e' }}
        />
      </div>

      {results.length > 0 && (
        <div className="mt-2 rounded-xl border border-slate-700 overflow-hidden bg-navy-800" style={{ backgroundColor: '#0f0f2e' }}>
          {results.map((r, i) => (
            <button
              key={r.id}
              onClick={() => go(r.id)}
              className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors ${i === activeIndex ? 'bg-blue-600/20' : 'hover:bg-slate-700/30'} ${i < results.length - 1 ? 'border-b border-slate-700/50' : ''}`}
            >
              <span className="text-sm text-white font-medium">{r.title}</span>
              <span className="text-xs text-slate-500">{r.chapterTitle}</span>
            </button>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <p className="mt-3 text-center text-sm text-slate-500">Tulemusi ei leitud</p>
      )}
    </div>
  );
}
