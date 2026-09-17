import React, { useState } from 'react';
import { BIG_QUESTIONS, PHILOSOPHERS, CONCEPTS } from '../data/philosophyData';
import { BigQuestion, Philosopher } from '../types/philosophy';
import { HelpCircle } from 'lucide-react';

interface BigQuestionsViewProps {
  selectedQuestionId?: string | null;
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectConcept: (id: string) => void;
}

export const BigQuestionsView: React.FC<BigQuestionsViewProps> = ({
  selectedQuestionId,
  onSelectPhilosopher,
  onSelectConcept
}) => {
  const [activeQuestion, setActiveQuestion] = useState<BigQuestion>(
    BIG_QUESTIONS.find(bq => bq.id === selectedQuestionId) || BIG_QUESTIONS[0]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 select-none">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-question tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>The Enduring Human Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
          The Big Questions of Philosophy
        </h1>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-2xl">
          Enter human thought through the foundational questions that have perplexed thinkers for millennia.
        </p>
      </div>

      {/* Question Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {BIG_QUESTIONS.map((bq) => {
          const isActive = bq.id === activeQuestion.id;
          return (
            <div
              key={bq.id}
              onClick={() => setActiveQuestion(bq)}
              className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                isActive 
                  ? 'bg-paper-100 dark:bg-[#1D222F] border-entity-question shadow-brutal dark:shadow-brutal-dark ring-2 ring-entity-question/30' 
                  : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm hover:shadow-brutal dark:hover:shadow-brutal-dark'
              }`}
            >
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase font-bold text-entity-question bg-entity-question/10 px-1.5 py-0.5 border border-entity-question/30">
                  {bq.domain}
                </span>
                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {bq.question}
                </h3>
                <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 font-sans">
                  {bq.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[11px] font-mono font-bold text-entity-question">
                <span>{bq.keyThinkers.length} Approaches</span>
                <span>{isActive ? '● Active' : 'Explore →'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Question Detail Breakdown */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <span className="font-mono text-xs font-bold uppercase text-entity-question">
            Deep Dive: {activeQuestion.domain}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {activeQuestion.question}
          </h2>
          <p className="text-base font-serif italic text-ink-700 dark:text-[#CBD5E1]">
            {activeQuestion.subtitle}
          </p>
        </div>

        {/* Core Problem Narrative */}
        <div className="p-4 bg-paper-200 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase text-ink-800 dark:text-[#F8FAFC]">
            The Core Dilemma:
          </span>
          <p className="text-sm font-sans text-ink-900 dark:text-[#CBD5E1] leading-relaxed">
            {activeQuestion.coreProblem}
          </p>
        </div>

        {/* Competing Answers / Stances from Thinkers */}
        <div className="space-y-3">
          <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
            Competing Answers Across History
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeQuestion.keyThinkers.map((item) => {
              const thinker = PHILOSOPHERS.find(p => p.id === item.philosopherId);
              if (!thinker) return null;

              return (
                <div
                  key={thinker.id}
                  onClick={() => onSelectPhilosopher(thinker)}
                  className="p-4 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm hover:border-entity-philosopher cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8] mb-1">
                    <span className="font-bold text-entity-philosopher">{thinker.name}</span>
                    <span>{thinker.displayDates}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-800 dark:text-[#F8FAFC] font-sans leading-relaxed">
                    {item.stance}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono">
                    <span className="text-ink-500 dark:text-[#94A3B8]">{thinker.tradition} • {thinker.schools[0]}</span>
                    <span className="text-entity-philosopher font-bold group-hover:underline">
                      View Dossier →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Associated Concepts */}
        <div className="pt-2 border-t border-ink-900/20 dark:border-[#2E3547] space-y-2">
          <span className="font-mono text-xs font-bold uppercase text-ink-700 dark:text-[#F8FAFC] block">
            Associated Concepts & Inquiries:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeQuestion.keyConceptIds.map(cId => {
              const concept = CONCEPTS.find(c => c.id === cId);
              return concept ? (
                <button
                  key={concept.id}
                  onClick={() => onSelectConcept(concept.id)}
                  className="px-3 py-1 bg-paper-100 dark:bg-[#1D222F] hover:bg-entity-idea hover:text-white border-2 border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase text-ink-900 dark:text-[#F8FAFC] transition-colors"
                >
                  {concept.name} →
                </button>
              ) : null;
            })}
        </div>
      </div>

      </div>

    </div>
  );
};
