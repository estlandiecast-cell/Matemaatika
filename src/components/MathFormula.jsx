import katex from 'katex';
import { useEffect, useRef } from 'react';

export function MathFormula({ formula, display = false }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && formula) {
      try {
        katex.render(formula, ref.current, {
          displayMode: display,
          throwOnError: false,
          trust: false,
        });
      } catch (e) {
        if (ref.current) {
          ref.current.textContent = formula;
        }
      }
    }
  }, [formula, display]);

  return (
    <span
      ref={ref}
      className={display ? 'block my-4 overflow-x-auto' : 'inline'}
    />
  );
}
