import React, { useState } from 'react';
import { INDIAN_PROBLEMS, INDIAN_SCHOOLS } from '../../data/indianPhilosophyData';
import { IndianProblemStance, ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { HelpCircle, Check, X, Slash, Compass, Sparkles, BookOpen } from 'lucide-react';

interface IndianProblemsTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectSchool?: (id: string) => void;
}

export const IndianProblemsTab: React.FC<IndianProblemsTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel,
  onSelectSchool
}) => {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(INDIAN_PROBLEMS[0].id);
  const selectedProblem = INDIAN_PROBLEMS.find(p => p.id === selectedProblemId) || INDIAN_PROBLEMS[0];

  const getStanceBadge = (stanceType: IndianProblemStance['stanceType']) => {
    switch (stanceType) {
      case 'YES':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/40',
          text: 'text-emerald-800 dark:text-emerald-300',
          border: 'border-emerald-600 dark:border-emerald-700',
          icon: <Check className="w-3 h-3 text-emerald-600 inline mr-1" />
        };
      case 'NO':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/40',
          text: 'text-rose-800 dark:text-rose-300',
          border: 'border-rose-600 dark:border-rose-700',
          icon: <X className="w-3 h-3 text-rose-600 inline mr-1" />
        };
      case 'QUALIFIED':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/40',
          text: 'text-amber-800 dark:text-amber-300',
          border: 'border-amber-600 dark:border-amber-700',
          icon: <Slash className="w-3 h-3 text-amber-600 inline mr-1" />
        };
      case 'TRANSCENDED':
        return {
          bg: 'bg-purple-50 dark:bg-purple-950/40',
          text: 'text-purple-800 dark:text-purple-300',
          border: 'border-purple-600 dark:border-purple-700',
          icon: <Sparkles className="w-3 h-3 text-purple-600 inline mr-1" />
        };
      case 'REJECTS_FRAMEWORK':
      default:
        return {
          bg: 'bg-slate-100 dark:bg-slate-800/40',
          text: 'text-slate-800 dark:text-slate-300',
          border: 'border-slate-500 dark:border-slate-600',
          icon: <Compass className="w-3 h-3 text-slate-600 inline mr-1" />
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-question tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>The Enduring Dialectical Dilemmas (Darśana-Praśna)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          The Core Problems of Indian Philosophy
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          Indian philosophy was never a collection of isolated credos. Every school defined its identity by competing in open debates over fundamental dilemmas: the existence of the Self, the ontological reality of the world, whether a creator God is rationally defensible, and what constitutes liberation.
        </p>
      </div>

      {/* Problems Question Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDIAN_PROBLEMS.map((problem) => {
          const isSelected = problem.id === selectedProblem.id;
          return (
            <div
              key={problem.id}
              onClick={() => setSelectedProblemId(problem.id)}
              className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-paper-100 dark:bg-[#1D222F] border-amber-600 dark:border-amber-500 shadow-brutal ring-2 ring-amber-500/20'
                  : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:shadow-brutal'
              }`}
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2 py-0.5 border border-amber-500/30">
                  {problem.domain}
                </span>

                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {problem.question}
                </h3>

                {problem.sanskritQuestion && (
                  <div className="text-xs font-mono text-ink-500 dark:text-[#8C8275]">
                    {renderTerm(problem.sanskritQuestion, scriptMode)}
                  </div>
                )}

                <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] line-clamp-2">
                  {problem.theDilemma}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <span>{problem.stances.length} School Positions</span>
                <span>{isSelected ? '● Inspected' : 'Compare →'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Problem Stances Detail Panel */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30">
              Domain: {selectedProblem.domain}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {selectedProblem.question}
          </h3>

          <div className="p-3 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/15 dark:border-[#2E3547] space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">The Philosophical Dilemma</span>
            <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
              {selectedProblem.theDilemma}
            </p>
          </div>
        </div>

        {/* Stances Grid */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">
            Competing Philosophical Solutions (Pakṣa & Pratipakṣa)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProblem.stances.map((stance, idx) => {
              const badge = getStanceBadge(stance.stanceType);
              const school = INDIAN_SCHOOLS.find(s => s.id === stance.schoolId);

              return (
                <div
                  key={idx}
                  className="p-4 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        onClick={() => onSelectSchool && onSelectSchool(stance.schoolId)}
                        className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC] hover:text-amber-700 cursor-pointer"
                      >
                        {school ? renderTerm(school.name, scriptMode) : stance.schoolId}
                      </span>
                      <span className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 border ${badge.bg} ${badge.text} ${badge.border}`}>
                        {badge.icon}
                        {stance.stanceType}
                      </span>
                    </div>

                    <div className="p-2 bg-paper-50 dark:bg-[#151821] border border-ink-900/10 dark:border-[#2E3547] text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                      Formula: {stance.conciseFormula}
                    </div>

                    <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                      {stance.coreArgument}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-ink-900/10 dark:border-[#2E3547]">
                    {stance.citationOrSutra && (
                      <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275] italic flex items-center space-x-1">
                        <BookOpen className="w-3 h-3 text-amber-600" />
                        <span>Sūtra / Text: {stance.citationOrSutra}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {stance.keyConcepts.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="font-mono text-[10px] px-1.5 py-0.5 bg-paper-50 dark:bg-[#151821] border border-ink-900/20 dark:border-[#2E3547] text-ink-700 dark:text-[#CBD5E1]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
