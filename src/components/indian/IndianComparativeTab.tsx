import React from 'react';
import { INDIAN_COMPARATIVE_PAIRS } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Scale, ShieldAlert, Globe } from 'lucide-react';

interface IndianComparativeTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
}

export const IndianComparativeTab: React.FC<IndianComparativeTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel
}) => {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <Scale className="w-4 h-4" />
          <span>Cross-Cultural & Controlled Comparative Inquiry</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Comparative Philosophy with Methodological Rigor
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          Comparing Indian thought with Western philosophy requires strict methodological vigilance. Too often, superficial affinities are mistaken for identical doctrines or unsubstantiated historical influence. Here, comparisons are presented strictly on analytical grounds, accompanied by historical relationship classifications and explicit anti-anachronism warnings.
        </p>
      </div>

      {/* Comparative Cards */}
      <div className="space-y-6">
        {INDIAN_COMPARATIVE_PAIRS.map((pair) => {
          return (
            <div
              key={pair.id}
              className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6"
            >
              <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300">
                    Comparative Pair
                  </span>
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-paper-200 dark:bg-[#1D222F] border border-ink-900/15 dark:border-[#2E3547] text-ink-700 dark:text-[#CBD5E1]">
                    Historical Link: {pair.historicalRelationship}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
                  {pair.title}
                </h3>
              </div>

              {/* Side-by-Side Traditions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Indian Tradition */}
                <div className="p-5 border-2 border-amber-600 bg-paper-100 dark:bg-[#1D222F] space-y-3">
                  <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-[#2E3547] pb-2">
                    <span className="font-mono text-xs uppercase font-bold text-amber-700 dark:text-amber-400">
                      Indian Tradition
                    </span>
                    <Globe className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                    {renderTerm(pair.indianSide.thinkerOrSchool, scriptMode)}
                  </h4>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Doctrine:</span>
                    <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                      {pair.indianSide.doctrine}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
                    Canonical Text: {pair.indianSide.keyTexts}
                  </div>
                </div>

                {/* Western Tradition */}
                <div className="p-5 border-2 border-indigo-600 bg-paper-100 dark:bg-[#1D222F] space-y-3">
                  <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-[#2E3547] pb-2">
                    <span className="font-mono text-xs uppercase font-bold text-indigo-700 dark:text-indigo-400">
                      Western Parallel / Counterpart
                    </span>
                    <Globe className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                    {pair.westernSide.thinkerOrSchool}
                  </h4>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Doctrine:</span>
                    <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                      {pair.westernSide.doctrine}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
                    Canonical Text: {pair.westernSide.keyTexts}
                  </div>
                </div>
              </div>

              {/* Analytical Comparison */}
              <div className="p-4 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/15 dark:border-[#2E3547] space-y-1">
                <span className="font-mono text-xs uppercase font-bold text-amber-700 dark:text-amber-400">
                  Philosophical Convergence / Contrast
                </span>
                <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                  {pair.philosophicalComparison}
                </p>
              </div>

              {/* Anti-Anachronism Warning Box */}
              <div className="p-5 border-2 border-rose-600 bg-rose-50/60 dark:bg-rose-950/20 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-rose-800 dark:text-rose-300">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>Mandatory Anti-Anachronism & Contextual Safeguard</span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-ink-900 dark:text-[#F8FAFC] leading-relaxed font-medium">
                  {pair.antiAnachronismWarning}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
