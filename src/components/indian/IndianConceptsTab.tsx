import React, { useState } from 'react';
import { INDIAN_CONCEPTS, INDIAN_SCHOOLS } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Lightbulb, CheckCircle, XCircle, Clock, ShieldAlert, BookOpen } from 'lucide-react';

interface IndianConceptsTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectSchool?: (id: string) => void;
}

export const IndianConceptsTab: React.FC<IndianConceptsTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel,
  onSelectSchool
}) => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>(INDIAN_CONCEPTS[0].id);
  const selectedConcept = INDIAN_CONCEPTS.find(c => c.id === selectedConceptId) || INDIAN_CONCEPTS[0];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-concept tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Cross-School Conceptual Lexicon (Padārtha & Siddhānta)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Cross-School Concept Network
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          Concepts in Indian thought are not isolated dogmas; they are intellectual battlegrounds. A single term like <em>Ātman</em>, <em>Pratītyasamutpāda</em>, or <em>Śūnyatā</em> was appropriated, radically redefined, or vigorously attacked by opposing traditions for over two millennia.
        </p>
      </div>

      {/* Concept Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {INDIAN_CONCEPTS.map(concept => {
          const isSelected = concept.id === selectedConcept.id;
          return (
            <button
              key={concept.id}
              onClick={() => setSelectedConceptId(concept.id)}
              className={`p-3 text-left border-2 transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                  : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100'
              }`}
            >
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase opacity-75">
                  {concept.category}
                </span>
                <div className="font-serif-title font-bold text-base">
                  {renderTerm(concept.name, scriptMode)}
                </div>
                <div className="font-mono text-[10px] opacity-80 truncate">
                  {concept.name.iast}
                </div>
              </div>
              <div className="mt-2 text-[10px] font-mono opacity-90">
                {concept.schoolsUsingConcept.length} Adoptions
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Concept Deep Dive Card */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30">
              Category: {selectedConcept.category}
            </span>
            <div className="flex items-center space-x-3 text-xs font-mono text-ink-500 dark:text-[#8C8275]">
              <span>IAST: <strong>{selectedConcept.name.iast}</strong></span>
              <span>•</span>
              <span>Devanāgarī: <strong>{selectedConcept.name.devanagari}</strong></span>
            </div>
          </div>

          <h3 className="text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {renderTerm(selectedConcept.name, scriptMode)}
          </h3>

          <p className="text-base font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
            {selectedConcept.definition}
          </p>
        </div>

        {/* The Underlying Philosophical Problem */}
        <div className="p-4 bg-paper-100 dark:bg-[#1D222F] border-l-4 border-amber-600 space-y-1">
          <span className="font-mono text-[11px] uppercase font-bold text-amber-800 dark:text-amber-300">
            The Core Philosophical Problem it Solves:
          </span>
          <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
            {selectedConcept.thePhilosophicalProblem}
          </p>
        </div>

        {/* Two Columns: Adoptions vs Rejections / Critiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Schools Adopting */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase font-bold text-emerald-700 dark:text-emerald-400 flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Schools Adopting & Interpreting:</span>
            </span>

            <div className="space-y-2">
              {selectedConcept.schoolsUsingConcept.map((item, idx) => {
                const school = INDIAN_SCHOOLS.find(s => s.id === item.schoolId);
                return (
                  <div
                    key={idx}
                    className="p-3 border border-emerald-600/30 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-1"
                  >
                    <div
                      onClick={() => onSelectSchool && onSelectSchool(item.schoolId)}
                      className="font-serif-title font-bold text-sm text-emerald-900 dark:text-emerald-300 hover:underline cursor-pointer"
                    >
                      {school ? renderTerm(school.name, scriptMode) : item.schoolId}
                    </div>
                    <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                      {item.interpretation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schools Rejecting or Critiquing */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase font-bold text-rose-700 dark:text-rose-400 flex items-center space-x-1.5">
              <XCircle className="w-4 h-4" />
              <span>Schools Rejecting or Redefining:</span>
            </span>

            <div className="space-y-2">
              {selectedConcept.schoolsRejectingOrRedefining.map((item, idx) => {
                const school = INDIAN_SCHOOLS.find(s => s.id === item.schoolId);
                return (
                  <div
                    key={idx}
                    className="p-3 border border-rose-600/30 bg-rose-50/40 dark:bg-rose-950/20 space-y-1"
                  >
                    <div
                      onClick={() => onSelectSchool && onSelectSchool(item.schoolId)}
                      className="font-serif-title font-bold text-sm text-rose-900 dark:text-rose-300 hover:underline cursor-pointer"
                    >
                      {school ? renderTerm(school.name, scriptMode) : item.schoolId}
                    </div>
                    <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                      {item.critique}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Historical Trajectory Across Epochs */}
        <div className="space-y-3 pt-2">
          <span className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Historical Evolution of the Concept</span>
          </span>

          <div className="space-y-2">
            {selectedConcept.historicalTrajectory.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-3 border border-ink-900/15 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs"
              >
                <span className="font-mono font-bold text-amber-700 dark:text-amber-400 sm:w-48 shrink-0">
                  {step.epoch}:
                </span>
                <span className="font-sans text-ink-700 dark:text-[#CBD5E1]">
                  {step.development}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Sources */}
        {selectedConcept.primarySources.length > 0 && (
          <div className="pt-3 border-t border-ink-900/10 dark:border-[#2E3547] space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Primary Source References:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedConcept.primarySources.map((src, idx) => (
                <span key={idx} className="font-mono text-xs px-2 py-0.5 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/20 dark:border-[#2E3547] text-ink-800 dark:text-[#F8FAFC]">
                  {src}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Anti-Anachronism Note */}
        {selectedConcept.antiAnachronismNote && (
          <div className="p-4 border-2 border-rose-600/30 bg-rose-50/50 dark:bg-rose-950/20 space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-rose-800 dark:text-rose-300">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Comparative Caution: {selectedConcept.antiAnachronismNote.modernComparison}</span>
            </div>
            <p className="text-xs font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
              {selectedConcept.antiAnachronismNote.historicalQualification}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
