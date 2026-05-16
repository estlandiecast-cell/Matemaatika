import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { chapters, getAdjacentLessons } from '../data/curriculum';
import { getLessonById } from '../data/lessons/index';
import { LessonContent } from '../components/LessonContent';
import { Notebook } from '../components/Notebook';
import { useProgress } from '../hooks/useProgress';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { markComplete, isComplete } = useProgress();
  const [completed, setCompleted] = useState(false);

  const lesson = getLessonById(lessonId);
  const chapter = lesson ? chapters.find(c => c.id === lesson.chapterId) : null;
  const { prev, next } = getAdjacentLessons(lessonId);

  // Scroll to top only when lesson changes, not when completion state changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  useEffect(() => {
    setCompleted(isComplete(lessonId));
  }, [lessonId, isComplete]);

  const handleComplete = () => {
    markComplete(lessonId);
    setCompleted(true);
  };

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-4">
        <p className="text-slate-400 text-lg mb-4">Õppetundi ei leitud: {lessonId}</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline">Tagasi avalehele</Link>
      </div>
    );
  }

  const sections = ['hook', 'history', 'intuition', 'formal', 'examples', 'quiz', 'practice', 'connection', 'summary'];
  const sectionLabels = {
    hook: 'Sissejuhatus', history: 'Ajalugu', intuition: 'Intuitsioon', formal: 'Teooria',
    examples: 'Näited', quiz: 'Test', practice: 'Harjutus', connection: 'Seosed', summary: 'Kokkuvõte'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
        <Link to="/" className="hover:text-white transition-colors">Avaleht</Link>
        <span>/</span>
        <span className="text-slate-400">{chapter?.title}</span>
        <span>/</span>
        <span className="text-white font-medium">{lesson.title}</span>
      </nav>

      {/* Section navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {sections.map(s => (
          <a
            key={s}
            href={`#${s}`}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
          >
            {sectionLabels[s]}
          </a>
        ))}
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-medium">
            Peatükk {chapter?.id} — Teema {lessonId}
          </span>
          {completed && (
            <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-medium">
              ✓ Lõpetatud
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{lesson.title}</h1>
      </motion.div>

      {/* Lesson content — key ensures full remount (resets all state) when lesson changes */}
      <LessonContent key={lessonId} lesson={lesson} onComplete={handleComplete} />

      {/* Complete button */}
      {!completed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center my-8"
        >
          <button
            onClick={handleComplete}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold hover:from-green-500 hover:to-green-400 transition-all shadow-lg"
          >
            Märgi lõpetatuks
          </button>
        </motion.div>
      )}

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-700/50">
        {prev ? (
          <Link
            to={`/õppetund/${prev}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700 hover:border-blue-500/50 bg-slate-800/30 hover:bg-blue-500/10 text-slate-300 hover:text-white transition-all text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Eelmine
          </Link>
        ) : <div />}

        {next ? (
          <Link
            to={`/õppetund/${next}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all text-sm"
          >
            Järgmine
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-green-500/50 bg-green-500/10 hover:bg-green-500/20 text-green-300 transition-all text-sm"
          >
            Lõpp! Tagasi avalehele
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        )}
      </div>

      {/* Notebook */}
      <Notebook lessonId={lessonId} />
    </div>
  );
}
