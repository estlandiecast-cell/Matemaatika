import { motion } from 'framer-motion';
import { MathFormula } from './MathFormula';
import { QuizWidget } from './QuizWidget';

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="text-2xl">{icon}</span>
    <h2 className="text-xl font-bold text-white">{title}</h2>
  </div>
);

const Card = ({ children, className = '', glow = 'blue' }) => (
  <div className={`rounded-xl border p-6 mb-6 ${glow === 'violet' ? 'border-violet-500/30 glow-violet' : 'border-blue-500/30 glow-blue'} bg-slate-900/50 ${className}`}>
    {children}
  </div>
);

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export function LessonContent({ lesson, onComplete }) {
  const sections = [
    {
      id: 'hook',
      icon: '?',
      title: 'Miks see oluline on?',
      render: () => (
        <Card glow="blue">
          <p className="text-slate-200 text-lg leading-relaxed italic">{lesson.hook.text}</p>
        </Card>
      )
    },
    {
      id: 'history',
      icon: 'H',
      title: 'Ajalugu',
      render: () => (
        <Card glow="violet">
          <p className="text-slate-300 leading-relaxed">{lesson.history.text}</p>
        </Card>
      )
    },
    {
      id: 'intuition',
      icon: 'I',
      title: 'Intuitsioon',
      render: () => (
        <div className="mb-6 space-y-4">
          <Card glow="blue">
            <p className="text-slate-200 leading-relaxed">{lesson.intuition.text}</p>
          </Card>
          {lesson.intuition.analogy && (
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
              <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-2">Analoogia</p>
              <p className="text-slate-300 italic leading-relaxed">{lesson.intuition.analogy}</p>
            </div>
          )}
        </div>
      )
    },
    {
      id: 'formal',
      icon: 'F',
      title: 'Formaalne matemaatika',
      render: () => (
        <Card glow="blue">
          <p className="text-slate-300 mb-4 leading-relaxed">{lesson.formal.text}</p>
          <div className="space-y-2">
            {lesson.formal.formulas.map((f, i) => (
              <div key={i} className="katex-display">
                <MathFormula formula={f} display={true} />
              </div>
            ))}
          </div>
        </Card>
      )
    },
    {
      id: 'examples',
      icon: 'N',
      title: 'Näited',
      render: () => (
        <div className="mb-6 space-y-4">
          {lesson.examples.map((ex, i) => (
            <div key={i} className="rounded-xl border border-slate-600/50 bg-slate-900/50 overflow-hidden">
              <div className="bg-slate-800/50 px-5 py-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-white text-sm">{ex.title}</h3>
              </div>
              <div className="p-5">
                <ol className="space-y-2 mb-4">
                  {ex.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-blue-400 font-mono text-xs mt-0.5 flex-shrink-0">{j + 1}.</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                {ex.formula && (
                  <div className="katex-display">
                    <MathFormula formula={ex.formula} display={true} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'quiz',
      icon: 'Q',
      title: 'Küsimused',
      render: () => (
        <div className="mb-6">
          <QuizWidget quiz={lesson.quiz} onComplete={onComplete} />
        </div>
      )
    },
    {
      id: 'connection',
      icon: '~',
      title: 'Seosed teiste teemadega',
      render: () => (
        <Card glow="violet">
          <p className="text-slate-300 leading-relaxed">{lesson.connection}</p>
        </Card>
      )
    },
    {
      id: 'summary',
      icon: 'K',
      title: 'Kokkuvõte',
      render: () => (
        <div className="mb-6 rounded-xl border border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6">
          <p className="text-slate-200 leading-relaxed mb-4">{lesson.summary.text}</p>
          {lesson.summary.formula && (
            <div className="katex-display">
              <MathFormula formula={lesson.summary.formula} display={true} />
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-2">
      {sections.map((section, i) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <SectionTitle icon={section.icon} title={section.title} />
          {section.render()}
        </motion.section>
      ))}
    </div>
  );
}
