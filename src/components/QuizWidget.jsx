import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathFormula } from './MathFormula';

export function QuizWidget({ quiz, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === quiz.correct && onComplete) {
      onComplete();
    }
  };

  const reset = () => {
    setSelected(null);
    setAnswered(false);
  };

  const isCorrect = answered && selected === quiz.correct;

  return (
    <div className="rounded-xl border border-blue-500/30 bg-navy-800/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">?</span>
        <span>Kontrolli ennast</span>
      </h3>

      <p className="text-slate-200 mb-5 text-base leading-relaxed">{quiz.question}</p>

      <div className="space-y-3 mb-4">
        {quiz.options.map((option, index) => {
          let style = 'border border-slate-600 bg-slate-800/50 text-slate-200 hover:border-blue-400 hover:bg-blue-500/10';
          if (answered) {
            if (index === quiz.correct) {
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
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${style} ${!answered ? 'cursor-pointer' : 'cursor-default'}`}
              whileHover={!answered ? { scale: 1.01 } : {}}
              whileTap={!answered ? { scale: 0.99 } : {}}
            >
              <span className="font-semibold mr-3 text-blue-400">{String.fromCharCode(65 + index)}.</span>
              {option}
              {answered && index === quiz.correct && (
                <span className="ml-2 text-green-400">✓</span>
              )}
              {answered && index === selected && index !== quiz.correct && (
                <span className="ml-2 text-red-400">✗</span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}
          >
            <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? 'Suurepärane! Õige vastus!' : 'Kahjuks vale.'}
            </p>
            <p className="text-slate-300 text-sm">{quiz.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {answered && !isCorrect && (
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
        >
          Proovi uuesti
        </button>
      )}
    </div>
  );
}
