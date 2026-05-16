import { motion } from 'framer-motion';

export function ProgressBar({ value, max, label, color = 'blue', size = 'md' }) {
  const percent = max > 0 ? Math.round((value / max) * 100) : 0;
  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' };
  const colors = {
    blue: 'from-blue-500 to-blue-400',
    violet: 'from-violet-500 to-violet-400',
    gradient: 'from-blue-500 to-violet-500',
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-slate-400">{label}</span>
          <span className="text-xs text-slate-400">{value}/{max}</span>
        </div>
      )}
      <div className={`w-full bg-slate-800 rounded-full overflow-hidden ${heights[size]}`}>
        <motion.div
          className={`${heights[size]} rounded-full bg-gradient-to-r ${colors[color]}`}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {label && (
        <p className="text-xs text-slate-500 mt-0.5 text-right">{percent}%</p>
      )}
    </div>
  );
}
