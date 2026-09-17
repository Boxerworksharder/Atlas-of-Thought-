import React, { useState } from 'react';
import { PHILOSOPHERS, DOMAINS } from '../data/philosophyData';
import { Philosopher } from '../types/philosophy';
import { GitCompare } from 'lucide-react';

interface CompareViewProps {
  initialPhilosopherA?: Philosopher | null;
  initialPhilosopherB?: Philosopher | null;
  onSelectPhilosopher: (p: Philosopher) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  initialPhilosopherA,
  initialPhilosopherB,
  onSelectPhilosopher
}) => {
  const [philosopherA, setPhilosopherA] = useState<Philosopher>(
    initialPhilosopherA || PHILOSOPHERS.find(p => p.id === 'plato') || PHILOSOPHERS[0]
  );
  const [philosopherB, setPhilosopherB] = useState<Philosopher>(
    initialPhilosopherB || PHILOSOPHERS.find(p => p.id === 'aristotle') || PHILOSOPHERS[1]
  );

  // Suggested classic philosophical pairings
  const classicPairs = [
    { name: 'Plato × Aristotle', idA: 'plato', idB: 'aristotle' },
    { name: 'Descartes × Spinoza', idA: 'descartes', idB: 'spinoza' },
    { name: 'Locke × Hume', idA: 'locke', idB: 'hume' },
    { name: 'Hume × Kant', idA: 'hume', idB: 'kant' },
    { name: 'Hegel × Marx', idA: 'hegel', idB: 'marx' },
    { name: 'Sartre × Camus', idA: 'sartre', idB: 'camus' },
    { name: 'Confucius × Laozi', idA: 'confucius', idB: 'laozi' },
  ];

  const handleSelectPair = (idA: string, idB: string) => {
    const a = PHILOSOPHERS.find(p => p.id === idA);
    const b = PHILOSOPHERS.find(p => p.id === idB);
    if (a && b) {
      setPhilosopherA(a);
      setPhilosopherB(b);
    }
  };

  // Find overlapping domains or list all domains present in either
  const allComparedDomains = Array.from(
    new Set([...philosopherA.domains, ...philosopherB.domains, ...DOMAINS.slice(0, 5)])
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 select-none">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-philosopher tracking-wider">
          <GitCompare className="w-4 h-4" />
          <span>Dialectical Comparison Mode</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
          Structured Philosophical Comparison
        </h1>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-2xl">
          Compare philosophical systems across fundamental domains of inquiry without simplistic quantitative scores or declaring winners.
        </p>
      </div>

      {/* Suggested Classic Pairings */}
      <div className="bg-paper-100 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm p-3.5 space-y-2">
        <span className="font-mono text-xs font-bold uppercase text-ink-600 dark:text-[#94A3B8] block">
          Classic Historical Dialectics:
        </span>
        <div className="flex flex-wrap gap-2">
          {classicPairs.map(cp => (
            <button
              key={cp.name}
              onClick={() => handleSelectPair(cp.idA, cp.idB)}
              className="px-3 py-1 bg-paper-50 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase text-ink-900 dark:text-[#F8FAFC] transition-colors"
            >
              {cp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Thinker Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Thinker A */}
        <div className="brutal-card p-4 bg-paper-50 dark:bg-[#151821] space-y-3">
          <div className="flex items-center justify-between font-mono text-xs font-bold uppercase text-entity-philosopher">
            <span>Thinker Alpha</span>
            <span>{philosopherA.displayDates}</span>
          </div>
          <select
            value={philosopherA.id}
            onChange={(e) => {
              const p = PHILOSOPHERS.find(x => x.id === e.target.value);
              if (p) setPhilosopherA(p);
            }}
            className="w-full p-2.5 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC] focus:outline-none"
          >
            {PHILOSOPHERS.map(p => (
              <option key={p.id} value={p.id} className="dark:bg-[#151821] dark:text-[#F8FAFC]">{p.name} ({p.displayDates})</option>
            ))}
          </select>
          <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 font-sans">{philosopherA.summary}</p>
        </div>

        {/* Thinker B */}
        <div className="brutal-card p-4 bg-paper-50 dark:bg-[#151821] space-y-3">
          <div className="flex items-center justify-between font-mono text-xs font-bold uppercase text-entity-idea">
            <span>Thinker Beta</span>
            <span>{philosopherB.displayDates}</span>
          </div>
          <select
            value={philosopherB.id}
            onChange={(e) => {
              const p = PHILOSOPHERS.find(x => x.id === e.target.value);
              if (p) setPhilosopherB(p);
            }}
            className="w-full p-2.5 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC] focus:outline-none"
          >
            {PHILOSOPHERS.map(p => (
              <option key={p.id} value={p.id} className="dark:bg-[#151821] dark:text-[#F8FAFC]">{p.name} ({p.displayDates})</option>
            ))}
          </select>
          <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 font-sans">{philosopherB.summary}</p>
        </div>

      </div>

      {/* Side-by-Side Domain Comparison Table (Prompt Section 24) */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] border-b-2 border-ink-900 dark:border-[#2E3547] pb-2">
          Domain-by-Domain Comparison
        </h2>

        <div className="space-y-4">
          {allComparedDomains.map((domain) => {
            const posA = philosopherA.positions.find(p => p.domain === domain);
            const posB = philosopherB.positions.find(p => p.domain === domain);

            return (
              <div key={domain} className="brutal-card overflow-hidden bg-paper-50 dark:bg-[#151821]">
                <div className="bg-paper-200 dark:bg-[#1D222F] border-b-2 border-ink-900 dark:border-[#2E3547] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC] flex items-center justify-between">
                  <span>{domain}</span>
                  <span className="text-[10px] text-ink-500 dark:text-[#94A3B8] font-normal">
                    Comparing stances on {domain.toLowerCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-2 divide-ink-900 dark:divide-[#2E3547]">
                  {/* Stance A */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <button 
                      onClick={() => onSelectPhilosopher(philosopherA)}
                      className="font-serif-title font-bold text-sm text-entity-philosopher block hover:underline text-left"
                    >
                      {philosopherA.name} →
                    </button>
                    {posA ? (
                      <p className="text-xs sm:text-sm text-ink-800 dark:text-[#F8FAFC] font-sans leading-relaxed">
                        {posA.position}
                      </p>
                    ) : (
                      <p className="text-xs font-mono text-ink-500 dark:text-[#94A3B8] italic">
                        Not a primary explicit focal domain for this thinker.
                      </p>
                    )}
                  </div>

                  {/* Stance B */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <button 
                      onClick={() => onSelectPhilosopher(philosopherB)}
                      className="font-serif-title font-bold text-sm text-entity-idea block hover:underline text-left"
                    >
                      {philosopherB.name} →
                    </button>
                    {posB ? (
                      <p className="text-xs sm:text-sm text-ink-800 dark:text-[#F8FAFC] font-sans leading-relaxed">
                        {posB.position}
                      </p>
                    ) : (
                      <p className="text-xs font-mono text-ink-500 dark:text-[#94A3B8] italic">
                        Not a primary explicit focal domain for this thinker.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
