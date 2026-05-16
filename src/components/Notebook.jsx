import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotes } from '../hooks/useNotes';

export function Notebook({ lessonId }) {
  const { note, saveNote, clearNote } = useNotes(lessonId);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(o => !o)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-lg glow-violet transition-all"
        title="Avage märkmik"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span>Märkmik</span>
        {note && <span className="w-2 h-2 rounded-full bg-yellow-400"></span>}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-14 right-0 w-80 bg-navy-900 border border-violet-500/30 rounded-xl shadow-2xl glow-violet overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
              <h3 className="font-semibold text-violet-300">Minu märkmed</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{note.length} märki</span>
                {note && (
                  <button
                    onClick={clearNote}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    Kustuta
                  </button>
                )}
              </div>
            </div>
            <div className="p-3">
              <textarea
                value={note}
                onChange={(e) => saveNote(e.target.value)}
                placeholder="Kirjuta siia oma märkmed, küsimused, valemid..."
                className="w-full h-48 bg-navy-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500 resize-none"
                style={{ backgroundColor: '#0a0a1a' }}
              />
              <p className="text-xs text-slate-600 mt-1">Salvestatakse automaatselt</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
