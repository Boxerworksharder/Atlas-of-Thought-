import React, { useState } from 'react';
import { INDIAN_EPOCHS, INDIAN_PHILOSOPHERS } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Clock, AlertTriangle, Users, BookOpen, ChevronRight, Calendar } from 'lucide-react';

interface IndianTimelineTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectPhilosopher: (id: string) => void;
  onSelectSchool: (id: string) => void;
}

export const IndianTimelineTab: React.FC<IndianTimelineTabProps> = ({
  scriptMode,
  depthLevel,
  onSelectPhilosopher,
  onSelectSchool: _onSelectSchool
}) => {
  const [selectedEpochId, setSelectedEpochId] = useState<string>(INDIAN_EPOCHS[0].id);
  const selectedEpoch = INDIAN_EPOCHS.find(e => e.id === selectedEpochId) || INDIAN_EPOCHS[0];

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <Calendar className="w-4 h-4" />
          <span>Historical Stratification (Itihāsa & Kāla-Krama)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Chronological Layers of Indian Thought (1500 BCE – Present)
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          Indian philosophy did not develop in isolation, nor as a monolith. It evolved through intense multi-century dialectical debates across distinct historical layers: from the early poetic intuitions of the Vedas and Upaniṣads, through the radical Śramaṇa counter-culture, the formalization of classical philosophical aphorisms (Sūtras), the monumental commentarial debates of the Golden Age, medieval scholastic confrontations, to modern anti-colonial and academic reinterpretations.
        </p>
      </div>

      {/* Epochs Horizontal Ribbon / Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDIAN_EPOCHS.map((epoch, index) => {
          const isSelected = epoch.id === selectedEpoch.id;
          return (
            <div
              key={epoch.id}
              onClick={() => setSelectedEpochId(epoch.id)}
              className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-600 dark:border-amber-500 shadow-brutal ring-2 ring-amber-500/20'
                  : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:shadow-brutal'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-ink-900/5 dark:bg-white/10 text-ink-700 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                    Layer 0{index + 1}
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                    {epoch.timeRange}
                  </span>
                </div>

                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {renderTerm(epoch.name, scriptMode)}
                </h3>

                {scriptMode !== 'english' && (
                  <p className="text-xs font-mono text-ink-500 dark:text-[#8C8275]">
                    {epoch.name.english}
                  </p>
                )}

                <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] line-clamp-2">
                  {epoch.overview}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <span>{epoch.keyEvents.length} Key Developments</span>
                <span className="flex items-center">
                  {isSelected ? '● Inspected' : 'Inspect'} <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive into Selected Epoch */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 border border-amber-500/30">
              Epoch Examination • {selectedEpoch.timeRange}
            </span>
            <span className="font-mono text-xs text-ink-500 dark:text-[#8C8275]">
              {selectedEpoch.startYear < 0 ? `${Math.abs(selectedEpoch.startYear)} BCE` : `${selectedEpoch.startYear} CE`} — {selectedEpoch.endYear < 0 ? `${Math.abs(selectedEpoch.endYear)} BCE` : `${selectedEpoch.endYear} CE`}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {renderTerm(selectedEpoch.name, scriptMode)}
          </h2>

          <div className="flex items-center space-x-3 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
            <span>IAST: <em>{selectedEpoch.name.iast}</em></span>
            <span>•</span>
            <span>Devanāgarī: <strong>{selectedEpoch.name.devanagari}</strong></span>
          </div>
        </div>

        {/* Overview paragraph */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">Historical Dynamic</h4>
          <p className="text-base font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
            {selectedEpoch.overview}
          </p>
        </div>

        {/* Epistemic / Dating Uncertainty Note (Crucial for scholarship) */}
        <div className="p-4 bg-amber-500/10 border-l-4 border-amber-600 dark:border-amber-500 space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4" />
            <span>Epistemic Status: Historiographical & Dating Note</span>
          </div>
          <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] italic leading-relaxed">
            {selectedEpoch.dateUncertaintyNote}
          </p>
        </div>

        {/* Two Columns: Key Events & Active Traditions / Thinkers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Key Events */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Key Philosophical Events & Milestones</span>
            </h4>
            <ul className="space-y-2 text-sm font-sans text-ink-800 dark:text-[#F8FAFC]">
              {selectedEpoch.keyEvents.map((evt, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 mt-1">✦</span>
                  <span className="leading-snug">{evt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Traditions & Representative Thinkers */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Active Philosophical Traditions</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedEpoch.keyTraditionsActive.map((trad, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 bg-ink-900/5 dark:bg-white/10 text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]"
                  >
                    {trad}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-2">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Representative Thinkers of this Epoch</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedEpoch.representativeThinkerIds.map(thinkerId => {
                  const thinker = INDIAN_PHILOSOPHERS.find(p => p.id === thinkerId);
                  if (!thinker) return null;
                  return (
                    <div
                      key={thinkerId}
                      onClick={() => onSelectPhilosopher(thinkerId)}
                      className="p-3 border border-ink-900/20 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] hover:border-amber-600 dark:hover:border-amber-500 cursor-pointer transition-colors group"
                    >
                      <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-amber-700 dark:group-hover:text-amber-400 flex items-center justify-between">
                        <span>{renderTerm(thinker.name, scriptMode)}</span>
                        <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                      </div>
                      <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275]">
                        {thinker.displayDates}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scholar Depth Details if Level 3 */}
        {depthLevel === 'scholar' && (
          <div className="mt-4 pt-4 border-t border-dashed border-ink-900/20 dark:border-[#2E3547] space-y-2 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
            <span className="font-bold uppercase text-amber-700 dark:text-amber-400">Scholar Layer:</span>
            <p>
              Historiographical note: Classical Indian historical consciousness was primarily lineage-oriented (Saṃpradāya-paramparā) rather than linear-annalistic. Synchronisms rely on inter-textual refutations, Buddhist-Chinese pilgrim records (Xuanzang, Faxian), royal inscriptions, and comparative philology.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
