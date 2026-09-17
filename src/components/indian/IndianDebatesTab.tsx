import React, { useState } from 'react';
import { INDIAN_DEBATES } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Swords, BookOpen, Compass } from 'lucide-react';

interface IndianDebatesTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectPhilosopher: (id: string) => void;
  onSelectSchool?: (id: string) => void;
}

export const IndianDebatesTab: React.FC<IndianDebatesTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel,
  onSelectPhilosopher: _onSelectPhilosopher,
  onSelectSchool: _onSelectSchool
}) => {
  const [selectedDebateId, setSelectedDebateId] = useState<string>(INDIAN_DEBATES[0].id);
  const selectedDebate = INDIAN_DEBATES.find(d => d.id === selectedDebateId) || INDIAN_DEBATES[0];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <Swords className="w-4 h-4" />
          <span>Dialectical Disputations (Vāda, Jalpa, Vitaṇḍā)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Great Inter-School Dialectical Encounters
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          Indian epistemology and metaphysics were sharpened through centuries of formal public debates regulated by the rules of <em>Vāda</em> (truth-seeking disputation). Failure in royal court debates often resulted in conversion of monasteries or loss of royal patronage.
        </p>
      </div>

      {/* Debates Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INDIAN_DEBATES.map(debate => {
          const isSelected = debate.id === selectedDebate.id;
          return (
            <div
              key={debate.id}
              onClick={() => setSelectedDebateId(debate.id)}
              className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-600 dark:border-amber-500 shadow-brutal ring-2 ring-amber-500/20'
                  : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:shadow-brutal'
              }`}
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 border border-amber-500/30">
                  Dialectical Clash
                </span>
                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {debate.title}
                </h3>
                <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] line-clamp-2">
                  {debate.corePhilosophicalIssue}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <span>{renderTerm(debate.parties.sideA.name, scriptMode)} ⚡ {renderTerm(debate.parties.sideB.name, scriptMode)}</span>
                <span>{isSelected ? '● Inspected' : 'Debate →'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Debate Face-Off Arena */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-8">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400">
            Formal Dialectic Arena
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {selectedDebate.title}
          </h3>
          <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-3xl">
            {selectedDebate.corePhilosophicalIssue}
          </p>
        </div>

        {/* 2-Side Clash Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Side A */}
          <div className="p-5 border-2 border-amber-600 bg-paper-100 dark:bg-[#1D222F] space-y-4">
            <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-3 space-y-1">
              <span className="font-mono text-xs uppercase font-bold text-amber-700 dark:text-amber-400">
                Pūrvapakṣa / Side A
              </span>
              <h4 className="font-serif-title font-bold text-xl text-ink-900 dark:text-[#F8FAFC]">
                {renderTerm(selectedDebate.parties.sideA.name, scriptMode)}
              </h4>
              <div className="text-xs font-mono text-ink-500 dark:text-[#8C8275]">
                Champion: <strong>{renderTerm(selectedDebate.parties.sideA.representativeThinker, scriptMode)}</strong>
              </div>
            </div>

            <div className="p-3 bg-paper-50 dark:bg-[#151821] border border-ink-900/10 dark:border-[#2E3547] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300">Central Thesis (Pratijñā):</span>
              <p className="text-xs sm:text-sm font-sans font-semibold text-ink-900 dark:text-[#F8FAFC]">
                "{selectedDebate.parties.sideA.thesis}"
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Core Arguments (Hetu):</span>
              <ul className="space-y-2 text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                {selectedDebate.parties.sideA.coreArguments.map((arg, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{arg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side B */}
          <div className="p-5 border-2 border-indigo-600 bg-paper-100 dark:bg-[#1D222F] space-y-4">
            <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-3 space-y-1">
              <span className="font-mono text-xs uppercase font-bold text-indigo-700 dark:text-indigo-400">
                Siddhānta / Side B
              </span>
              <h4 className="font-serif-title font-bold text-xl text-ink-900 dark:text-[#F8FAFC]">
                {renderTerm(selectedDebate.parties.sideB.name, scriptMode)}
              </h4>
              <div className="text-xs font-mono text-ink-500 dark:text-[#8C8275]">
                Champion: <strong>{renderTerm(selectedDebate.parties.sideB.representativeThinker, scriptMode)}</strong>
              </div>
            </div>

            <div className="p-3 bg-paper-50 dark:bg-[#151821] border border-ink-900/10 dark:border-[#2E3547] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-indigo-800 dark:text-indigo-300">Central Thesis (Pratijñā):</span>
              <p className="text-xs sm:text-sm font-sans font-semibold text-ink-900 dark:text-[#F8FAFC]">
                "{selectedDebate.parties.sideB.thesis}"
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Core Arguments (Hetu):</span>
              <ul className="space-y-2 text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                {selectedDebate.parties.sideB.coreArguments.map((arg, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{arg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Historical Locus & Texts */}
        <div className="p-4 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/15 dark:border-[#2E3547] space-y-1">
          <span className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Historical Locus & Key Texts</span>
          </span>
          <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC]">
            {selectedDebate.historicalLocusAndTexts}
          </p>
        </div>

        {/* Dialectical Resolution & Legacy */}
        <div className="p-5 border-2 border-dashed border-amber-600/40 bg-amber-50/50 dark:bg-amber-950/20 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-300">
            <Compass className="w-4 h-4" />
            <span>Dialectical Legacy & Philosophical Impact</span>
          </div>
          <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
            {selectedDebate.dialecticalResolutionOrLegacy}
          </p>
        </div>
      </div>
    </div>
  );
};
