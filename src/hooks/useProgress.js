import { useState, useCallback } from 'react';

const PROGRESS_KEY = 'matemaatika-progress';

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const markComplete = useCallback((lessonId) => {
    setProgress(prev => {
      const next = { ...prev, [lessonId]: true };
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const markIncomplete = useCallback((lessonId) => {
    setProgress(prev => {
      const next = { ...prev };
      delete next[lessonId];
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const isComplete = useCallback((lessonId) => {
    return !!progress[lessonId];
  }, [progress]);

  const getChapterProgress = useCallback((topics) => {
    const completed = topics.filter(t => progress[t.id]).length;
    return { completed, total: topics.length };
  }, [progress]);

  const getTotalProgress = useCallback((chapters) => {
    let completed = 0;
    let total = 0;
    chapters.forEach(ch => {
      ch.topics.forEach(t => {
        total++;
        if (progress[t.id]) completed++;
      });
    });
    return { completed, total };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress({});
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {}
  }, []);

  return { progress, markComplete, markIncomplete, isComplete, getChapterProgress, getTotalProgress, resetProgress };
}
