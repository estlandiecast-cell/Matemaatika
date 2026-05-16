import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function QuizWidget({ quiz, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [flash, setFlash] = useState(null); // 'correct' | 'wrong'

  // Shuffle options once on mount, keep mapping to original correct index
  const { shuffled, correctShuffledIndex } = useMemo(() => {
    const opts = quiz.options.map((text, i) => ({ text, origIndex: i }));
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return {
      shuffled: opts,
      correctShuffledIndex: opts.findIndex(o => o.origIndex === quiz.correct),
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    const correct = index === correctShuffledIndex;
    setFlash(correct ? 'correct' : 'wrong');
    setTimeout(() => setFlash(null), 600);
    if (correct && onComplete) onComplete();
  };

  const reset = () => {
    setSelected(null);
    setAnswered(false);
    setFlash(null);
  };

  const isCorrect = answered && selected === correctShuffledIndex;

  return (
    <motion.div
      animate={
        flash === 'correct'
          ? { backgroundColor: ['rgba(34,197,94,0)', 'rgba(34,197,94,0.15)', 'rgba(34,197,94,0)'] }
          : flash === 'wrong'
          ? { backgroundColor: ['rgba(239,68,68,0)', 'rgba(239,68,68,0.15)', 'rgba(239,68,68,0)'] }
          : {}
      }
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-blue-500/30 bg-navy-800/50 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 text-sm font-bold">?</span>
          Kontrolli ennast
        </h3>
        <span className="text-xs text-slate-500 font-mono">Küsimus 1/1</span>
      </div>

      <p className="text-slate-200 mb-5 text-base leading-relaxed">{quiz.question}</p>

      <div className="space-y-3 mb-4">
        {shuffled.map((option, index) => {
          let style = 'border border-slate-600 bg-slate-800/50 text-slate-200 hover:border-blue-400 hover:bg-blue-500/10';
          if (answered) {
            if (index === correctShuffledIndex) {
              style = 'border border-green-500 bg-green-500/20 text-green-300';
            } else if (index === selected) {
              style = 'border border-red-500 bg-red-500/20 text-red-300';
            } else {
              style = 'border border-slate-700 bg-slate-800/30 text-slate-500';
            }
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${style} ${!answered ? 'cursor-pointer' : 'cursor-default'}`}
              whileHover={!answered ? { scale: 1.01 } : {}}
              whileTap={!answered ? { scale: 0.98 } : {}}
            >
              <span className="font-semibold mr-3 text-blue-400">{String.fromCharCode(65 + index)}.</span>
              {option.text}
              {answered && index === correctShuffledIndex && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-2 text-green-400 inline-block"
                >✓</motion.span>
              )}
              {answered && index === selected && index !== correctShuffledIndex && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-2 text-red-400 inline-block"
                >✗</motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="overflow-hidden"
          >
            {/* Score summary */}
            <div className={`flex items-center justify-between p-3 rounded-t-lg ${isCorrect ? 'bg-green-500/20 border border-green-500/40' : 'bg-red-500/20 border border-red-500/40'} border-b-0`}>
              <p className={`font-bold text-sm ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                {isCorrect ? '✓ Õige vastus!' : '✗ Vale vastus'}
              </p>
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${isCorrect ? 'bg-green-500/30 text-green-200' : 'bg-red-500/30 text-red-200'}`}>
                {isCorrect ? '1/1' : '0/1'}
              </span>
            </div>
            <div className={`p-4 rounded-b-lg mb-3 ${isCorrect ? 'bg-green-500/10 border border-green-500/40 border-t-0' : 'bg-red-500/10 border border-red-500/40 border-t-0'}`}>
              <p className="text-slate-300 text-sm leading-relaxed">{quiz.explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {answered && !isCorrect && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
        >
          Proovi uuesti
        </motion.button>
      )}
    </motion.div>
  );
}
