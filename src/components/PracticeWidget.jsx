import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathFormula } from './MathFormula';

function PracticeQuestion({ exercise, index, total, onAnswered }) {
  const [answer, setAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [selfScore, setSelfScore] = useState(null); // 'correct' | 'wrong'

  const handleReveal = () => {
    if (!answer.trim()) return;
    setRevealed(true);
  };

  const handleSelfScore = (score) => {
    setSelfScore(score);
    onAnswered(score === 'correct');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-violet-500/30 bg-slate-900/50 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-violet-500/10 px-5 py-3 border-b border-violet-500/20">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
            {index + 1}
          </span>
          <span className="text-sm font-semibold text-violet-300">{exercise.title}</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">{index + 1}/{total}</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Question */}
        <div>
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">Ülesanne</p>
          <p className="text-slate-200 leading-relaxed">{exercise.question}</p>
        </div>

        {/* Answer input */}
        {!revealed && (
          <div className="space-y-3">
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Kirjuta oma vastus siia..."
              rows={3}
              className="w-full bg-slate-800/60 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 resize-none transition-colors"
            />
            <button
              onClick={handleReveal}
              disabled={!answer.trim()}
              className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
            >
              Kontrolli vastust
            </button>
          </div>
        )}

        {/* Revealed answer */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 overflow-hidden"
            >
              {/* User's answer */}
              <div className="rounded-lg bg-slate-800/50 border border-slate-600/30 p-3">
                <p className="text-xs text-slate-500 mb-1">Sinu vastus:</p>
                <p className="text-slate-300 text-sm">{answer}</p>
              </div>

              {/* Correct answer */}
              <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-4">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Õige lahendus</p>
                <div className="space-y-1">
                  {exercise.steps.map((step, i) => (
                    <p key={i} className="text-slate-300 text-sm leading-relaxed">
                      <span className="text-blue-400 font-mono mr-2">{i + 1}.</span>{step}
                    </p>
                  ))}
                </div>
                {exercise.formula && (
                  <div className="mt-3 katex-display">
                    <MathFormula formula={exercise.formula} display={true} />
                  </div>
                )}
              </div>

              {/* Self-assessment */}
              {selfScore === null && (
                <div className="flex items-center gap-2">
                  <p className="text-slate-400 text-sm mr-2">Kas said õige?</p>
                  <button
                    onClick={() => handleSelfScore('correct')}
                    className="px-4 py-1.5 rounded-lg bg-green-600/20 border border-green-500/40 text-green-300 text-sm hover:bg-green-600/30 transition-colors"
                  >
                    ✓ Jah
                  </button>
                  <button
                    onClick={() => handleSelfScore('wrong')}
                    className="px-4 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 text-sm hover:bg-red-600/30 transition-colors"
                  >
                    ✗ Ei
                  </button>
                </div>
              )}

              {selfScore !== null && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-sm font-medium ${selfScore === 'correct' ? 'text-green-400' : 'text-orange-400'}`}
                >
                  {selfScore === 'correct' ? '✓ Hästi tehtud!' : '↺ Vaata lahenduskäiku veel kord üle.'}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function PracticeWidget({ lesson }) {
  // Build exercises from examples: problem = first step, solution = remaining steps
  const exercises = lesson.examples.map((ex) => {
    const [problemStep, ...solutionSteps] = ex.steps;
    return {
      title: ex.title,
      // First step is the problem statement (e.g. "Teisenda 45° radiaanideks")
      question: problemStep,
      steps: solutionSteps.length > 0 ? solutionSteps : ex.steps,
      formula: ex.formula,
    };
  });

  const [answers, setAnswers] = useState({}); // index → true/false
  const [allDone, setAllDone] = useState(false);

  const handleAnswered = (index, correct) => {
    const next = { ...answers, [index]: correct };
    setAnswers(next);
    if (Object.keys(next).length === exercises.length) {
      setAllDone(true);
    }
  };

  const score = Object.values(answers).filter(Boolean).length;
  const total = exercises.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm">
          Lahenda näited ise — vaata lahendust alles pärast oma vastuse kirjutamist.
        </p>
        {Object.keys(answers).length > 0 && (
          <span className="text-xs font-mono px-2 py-1 rounded bg-violet-500/20 text-violet-300">
            {score}/{Object.keys(answers).length} õige
          </span>
        )}
      </div>

      {exercises.map((ex, i) => (
        <PracticeQuestion
          key={i}
          exercise={ex}
          index={i}
          total={total}
          onAnswered={(correct) => handleAnswered(i, correct)}
        />
      ))}

      {/* Final score summary */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-xl p-6 text-center border ${
              score === total
                ? 'bg-green-500/10 border-green-500/40'
                : score >= total / 2
                ? 'bg-blue-500/10 border-blue-500/40'
                : 'bg-orange-500/10 border-orange-500/40'
            }`}
          >
            <p className="text-4xl font-bold text-white mb-1">{score}/{total}</p>
            <p className={`font-semibold mb-2 ${
              score === total ? 'text-green-300' : score >= total / 2 ? 'text-blue-300' : 'text-orange-300'
            }`}>
              {score === total
                ? 'Suurepärane! Kõik ülesanded lahendatud!'
                : score >= total / 2
                ? 'Hästi! Vaata veelkord üle need, mis ei läinud.'
                : 'Harjuta veel — vaata lahenduskäike tähelepanelikult.'}
            </p>
            <p className="text-slate-500 text-sm">
              {score === total
                ? 'Oled valmis järgmisele teemale minema.'
                : `${total - score} ülesannet vajab veel harjutamist.`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
