import { useState, useCallback } from 'react';

export function useNotes(lessonId) {
  const key = `notebook-${lessonId}`;

  const [note, setNote] = useState(() => {
    try {
      return localStorage.getItem(key) || '';
    } catch {
      return '';
    }
  });

  const saveNote = useCallback((text) => {
    setNote(text);
    try {
      localStorage.setItem(key, text);
    } catch {}
  }, [key]);

  const clearNote = useCallback(() => {
    setNote('');
    try {
      localStorage.removeItem(key);
    } catch {}
  }, [key]);

  return { note, saveNote, clearNote };
}
