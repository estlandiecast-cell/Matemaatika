import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chapters } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from '../components/ProgressBar';

const CHAPTER_ICONS = ['A', 'V', 'V', 'P', 'V', 'T', 'J', 'E', 'T', 'F', 'E'];

export default function HomePage() {
  const { getChapterProgress, getTotalProgress } = useProgress();
  const total = getTotalProgress(chapters);

  return (
    <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
          <span>12. klassi matemaatika</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="gradient-text">Matemaatika</span>
          <br />
          <span className="text-3xl md:text-4xl text-slate-300 font-normal">Interaktiivne õppekeskkond</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Õpi kõrgkoolimatemaatikat samm-sammult. Igal teemal on lugu, intuitsioon, formaalsed valemid, näited ja testküsimused.
        </p>

        {/* Overall progress */}
        <div className="max-w-md mx-auto mb-8">
          <ProgressBar
            value={total.completed}
            max={total.total}
            label={`Üldine edusammud: ${total.completed} / ${total.total} teemat lõpetatud`}
            color="gradient"
            size="lg"
          />
        </div>

        <Link
          to="/õppetund/1-1"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all glow-blue shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Alusta õppimist
        </Link>
      </motion.div>

      {/* Chapter grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapter, i) => {
          const prog = getChapterProgress(chapter.topics);
          const isDone = prog.completed === prog.total && prog.total > 0;
          const hasProgress = prog.completed > 0;

          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className={`card-hover rounded-xl border p-5 h-full flex flex-col
                ${isDone ? 'border-green-500/30 bg-green-500/5' : hasProgress ? 'border-blue-500/30 bg-blue-500/5' : 'border-slate-700/50 bg-slate-800/30'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0
                    ${isDone ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {isDone ? '✓' : chapter.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm leading-tight">{chapter.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{chapter.topics.length} teemat</p>
                  </div>
                </div>

                <ProgressBar value={prog.completed} max={prog.total} size="sm" />

                <div className="mt-3 flex flex-wrap gap-1 flex-1">
                  {chapter.topics.slice(0, 4).map(t => (
                    <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400 truncate max-w-full">
                      {t.title}
                    </span>
                  ))}
                  {chapter.topics.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-500">
                      +{chapter.topics.length - 4} veel
                    </span>
                  )}
                </div>

                <Link
                  to={`/õppetund/${chapter.topics[0].id}`}
                  className={`mt-4 w-full text-center py-2 rounded-lg text-sm font-medium transition-colors
                    ${isDone
                      ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30'
                      : hasProgress
                        ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'}`}
                >
                  {isDone ? 'Vaata uuesti' : hasProgress ? 'Jätka õppimist' : 'Alusta'}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center"
      >
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
          <p className="text-3xl font-bold gradient-text">{chapters.length}</p>
          <p className="text-xs text-slate-500 mt-1">Peatükki</p>
        </div>
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
          <p className="text-3xl font-bold gradient-text">{total.total}</p>
          <p className="text-xs text-slate-500 mt-1">Teemat</p>
        </div>
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
          <p className="text-3xl font-bold gradient-text">{total.completed}</p>
          <p className="text-xs text-slate-500 mt-1">Lõpetatud</p>
        </div>
      </motion.div>
    </div>
  );
}
