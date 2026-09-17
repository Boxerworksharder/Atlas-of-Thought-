import React, { useState } from 'react';
import { VEDANTA_COMPARISON_MATRIX } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Layers, Split, Info } from 'lucide-react';

interface IndianVedantaTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
}

export const IndianVedantaTab: React.FC<IndianVedantaTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel
}) => {
  const [selectedDoctrineIndex, setSelectedDoctrineIndex] = useState<number>(0);
  const activeDoctrine = VEDANTA_COMPARISON_MATRIX[selectedDoctrineIndex];

  return (
    <div className="space-y-8">
      {/* Overview Intro */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <Split className="w-4 h-4" />
          <span>Vedānta Dialectical Spectrum (Uttarā Mīmāṃsā)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          The Multi-System Vedānta Debate Matrix
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          While all Vedāntins ground their inquiry in the triple canon (<em>Prasthānatrayī</em>: Upaniṣads, Bhagavad Gītā, and Brahma Sūtras), they arrive at radically irreconcilable metaphysical architectures. Vedānta is not a uniform monism; it spans strict non-dualism (Advaita), qualified non-dualism (Viśiṣṭādvaita), absolute dualism (Dvaita), and nuanced difference-in-non-difference (Bhedābheda).
        </p>
      </div>

      {/* Doctrine Selector Ribbon */}
      <div className="space-y-2">
        <label className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] block">
          Select a Foundational Doctrine to Compare Across Traditions:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {VEDANTA_COMPARISON_MATRIX.map((row, idx) => {
            const isSelected = idx === selectedDoctrineIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDoctrineIndex(idx)}
                className={`p-2.5 text-left border-2 text-xs font-serif-title font-bold transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                    : 'bg-paper-50 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100'
                }`}
              >
                <div className="font-mono text-[9px] uppercase opacity-75">Doctrine 0{idx + 1}</div>
                <div className="line-clamp-2 mt-0.5">{row.doctrine}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Doctrine Deep Comparison Card */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30">
              Doctrine Comparison
            </span>
            <span className="font-mono text-xs text-ink-500 dark:text-[#8C8275]">
              Theme: {activeDoctrine.doctrine}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {activeDoctrine.doctrine}
          </h3>
          <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1]">
            {activeDoctrine.description}
          </p>
        </div>

        {/* The Big 3 Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Advaita Vedānta */}
          <div className="p-5 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-2">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">
                  Advaita (Non-Dualism)
                </span>
                <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                  Śaṅkarācārya
                </h4>
                <div className="inline-block mt-1 font-mono text-xs px-2 py-0.5 bg-amber-500/15 border border-amber-600/30 text-amber-900 dark:text-amber-300 font-bold">
                  {renderTerm(activeDoctrine.advaita.technicalTerm, scriptMode)}
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Position</span>
                <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                  {activeDoctrine.advaita.position}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-ink-900/10 dark:border-[#2E3547] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-rose-700 dark:text-rose-400">
                Polemic / Refutation
              </span>
              <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] italic">
                "{activeDoctrine.advaita.argumentAgainstOthers}"
              </p>
            </div>
          </div>

          {/* Viśiṣṭādvaita Vedānta */}
          <div className="p-5 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-2">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400">
                  Viśiṣṭādvaita (Qualified Non-Dualism)
                </span>
                <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                  Rāmānujācārya
                </h4>
                <div className="inline-block mt-1 font-mono text-xs px-2 py-0.5 bg-emerald-500/15 border border-emerald-600/30 text-emerald-900 dark:text-emerald-300 font-bold">
                  {renderTerm(activeDoctrine.visistadvaita.technicalTerm, scriptMode)}
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Position</span>
                <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                  {activeDoctrine.visistadvaita.position}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-ink-900/10 dark:border-[#2E3547] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-rose-700 dark:text-rose-400">
                Polemic / Refutation
              </span>
              <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] italic">
                "{activeDoctrine.visistadvaita.argumentAgainstOthers}"
              </p>
            </div>
          </div>

          {/* Dvaita Vedānta */}
          <div className="p-5 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-2">
                <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 dark:text-indigo-400">
                  Dvaita (Strict Dualism)
                </span>
                <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                  Madhvācārya
                </h4>
                <div className="inline-block mt-1 font-mono text-xs px-2 py-0.5 bg-indigo-500/15 border border-indigo-600/30 text-indigo-900 dark:text-indigo-300 font-bold">
                  {renderTerm(activeDoctrine.dvaita.technicalTerm, scriptMode)}
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Position</span>
                <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
                  {activeDoctrine.dvaita.position}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-ink-900/10 dark:border-[#2E3547] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-rose-700 dark:text-rose-400">
                Polemic / Refutation
              </span>
              <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] italic">
                "{activeDoctrine.dvaita.argumentAgainstOthers}"
              </p>
            </div>
          </div>
        </div>

        {/* Other Vedānta Systems (Bhedābheda, Śuddhādvaita, Dvaitādvaita) */}
        {activeDoctrine.otherSystems && activeDoctrine.otherSystems.length > 0 && (
          <div className="pt-4 border-t border-ink-900/20 dark:border-[#2E3547] space-y-3">
            <span className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
              <Info className="w-4 h-4" />
              <span>Other Classical Vedāntic Formulations</span>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeDoctrine.otherSystems.map((other, oIdx) => (
                <div key={oIdx} className="p-3 border border-ink-900/20 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-1.5">
                  <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC]">
                    {other.systemName}
                  </div>
                  <div className="font-mono text-[11px] text-amber-700 dark:text-amber-400 font-semibold">
                    Term: {renderTerm(other.technicalTerm, scriptMode)}
                  </div>
                  <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                    {other.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Full Matrix Table View (Scholar View) */}
      <div className="brutal-card p-6 bg-paper-50 dark:bg-[#151821] space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-ink-500 dark:text-[#8C8275]">
          <Layers className="w-4 h-4 text-amber-600" />
          <span>Full Synchronized Grid: All 10 Doctrines Across Primary Schools</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-ink-900 dark:border-[#2E3547]">
            <thead>
              <tr className="bg-paper-200 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] font-mono uppercase">
                <th className="p-3 border border-ink-900 dark:border-[#2E3547] w-1/4">Philosophical Doctrine</th>
                <th className="p-3 border border-ink-900 dark:border-[#2E3547] w-1/4 text-amber-800 dark:text-amber-400">Advaita (Śaṅkara)</th>
                <th className="p-3 border border-ink-900 dark:border-[#2E3547] w-1/4 text-emerald-800 dark:text-emerald-400">Viśiṣṭādvaita (Rāmānuja)</th>
                <th className="p-3 border border-ink-900 dark:border-[#2E3547] w-1/4 text-indigo-800 dark:text-indigo-400">Dvaita (Madhva)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10 dark:divide-[#2E3547]">
              {VEDANTA_COMPARISON_MATRIX.map((row, idx) => (
                <tr 
                  key={idx} 
                  onClick={() => setSelectedDoctrineIndex(idx)}
                  className={`hover:bg-amber-50/50 dark:hover:bg-amber-950/20 cursor-pointer transition-colors ${
                    idx === selectedDoctrineIndex ? 'bg-amber-500/10' : ''
                  }`}
                >
                  <td className="p-3 font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] border border-ink-900/20 dark:border-[#2E3547]">
                    {row.doctrine}
                  </td>
                  <td className="p-3 font-sans text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                    <div className="font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400 mb-1">
                      {renderTerm(row.advaita.technicalTerm, scriptMode)}
                    </div>
                    {row.advaita.position}
                  </td>
                  <td className="p-3 font-sans text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                    <div className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                      {renderTerm(row.visistadvaita.technicalTerm, scriptMode)}
                    </div>
                    {row.visistadvaita.position}
                  </td>
                  <td className="p-3 font-sans text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                    <div className="font-mono text-[11px] font-bold text-indigo-700 dark:text-indigo-400 mb-1">
                      {renderTerm(row.dvaita.technicalTerm, scriptMode)}
                    </div>
                    {row.dvaita.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
