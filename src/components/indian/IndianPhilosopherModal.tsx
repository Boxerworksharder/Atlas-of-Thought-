import React from 'react';
import { IndianPhilosopher, ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm, getEpistemicBadgeStyle } from '../../utils/indianPhilosophyUtils';
import { X, ExternalLink, BookOpen, Quote, Award, Swords } from 'lucide-react';

interface IndianPhilosopherModalProps {
  philosopher: IndianPhilosopher | null;
  isOpen: boolean;
  onClose: () => void;
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectSchool?: (schoolId: string) => void;
}

export const IndianPhilosopherModal: React.FC<IndianPhilosopherModalProps> = ({
  philosopher,
  isOpen,
  onClose,
  scriptMode,
  depthLevel,
  onSelectSchool
}) => {
  if (!isOpen || !philosopher) return null;

  const badgeStyle = getEpistemicBadgeStyle(philosopher.dateEpistemicStatus);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-ink-950/60 backdrop-blur-xs select-none animate-in fade-in duration-150">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer */}
      <div
        className="relative w-full max-w-2xl sm:max-w-3xl h-full bg-paper-100 dark:bg-[#11131A] border-l-3 border-ink-900 dark:border-[#2E3547] shadow-brutal-xl overflow-y-auto flex flex-col justify-between"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-paper-50 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] px-6 py-3 flex items-center justify-between shadow-brutal-sm">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-amber-600 rounded-xs" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC]">
              Indian Thinker Dossier • {philosopher.tradition}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-ink-900 dark:border-[#2E3547] bg-paper-200 dark:bg-[#1D222F] hover:bg-rose-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Title and Dates */}
          <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`font-mono text-xs uppercase font-bold px-2 py-0.5 border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                {philosopher.dateEpistemicStatus}: {philosopher.displayDates}
              </span>
              <span className="font-mono text-xs text-ink-500 dark:text-[#8C8275]">
                Region: {philosopher.region}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
              {renderTerm(philosopher.name, scriptMode)}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
              <span>IAST: <strong>{philosopher.name.iast}</strong></span>
              <span>•</span>
              <span>Devanāgarī: <strong>{philosopher.name.devanagari}</strong></span>
              {philosopher.schoolId && (
                <>
                  <span>•</span>
                  <span
                    onClick={() => {
                      if (onSelectSchool) onSelectSchool(philosopher.schoolId);
                      onClose();
                    }}
                    className="text-amber-700 dark:text-amber-400 font-bold hover:underline cursor-pointer"
                  >
                    School: {philosopher.schoolId.toUpperCase()}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Chronological Note */}
          <div className="p-3 bg-amber-500/10 border-l-3 border-amber-600 text-xs font-sans text-ink-700 dark:text-[#CBD5E1] italic">
            <span className="font-mono font-bold not-italic block mb-0.5 text-amber-800 dark:text-amber-300">
              Dating & Chronological Rigor:
            </span>
            {philosopher.datingNote}
          </div>

          {/* Biographical Overview based on depth */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">
              Philosophical Profile
            </h4>
            <p className="text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed">
              {depthLevel === 'quick' ? philosopher.summary : philosopher.understandBio}
            </p>
          </div>

          {/* Famous Quote */}
          {philosopher.famousQuote && (
            <div className="p-4 border-2 border-ink-900/15 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <Quote className="w-3.5 h-3.5" />
                <span>Foundational Formulation:</span>
              </div>
              <p className="text-sm font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] italic">
                "{philosopher.famousQuote.english}"
              </p>
              <div className="text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
                IAST: <em>{philosopher.famousQuote.iast}</em>
              </div>
              <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275]">
                Source: {philosopher.famousQuote.source}
              </div>
            </div>
          )}

          {/* Major Contributions */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Major Contributions & Doctrines</span>
            </h4>
            <ul className="space-y-1.5 text-xs font-sans text-ink-800 dark:text-[#F8FAFC]">
              {philosopher.majorContributions.map((c, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary Texts */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Primary Texts & Commentaries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {philosopher.primaryTexts.map((text, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 bg-paper-50 dark:bg-[#151821] border border-ink-900/20 dark:border-[#2E3547] text-ink-800 dark:text-[#F8FAFC]"
                >
                  {renderTerm(text, scriptMode)} ({text.iast})
                </span>
              ))}
            </div>
          </div>

          {/* Famous Debates or Opponents */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-1.5">
              <Swords className="w-3.5 h-3.5 text-rose-600" />
              <span>Famous Debates & Dialectical Opponents</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {philosopher.famousDebatesOrOpponents.map((opp, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2 py-0.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-600 text-rose-800 dark:text-rose-300"
                >
                  ⚔ {opp}
                </span>
              ))}
            </div>
          </div>

          {/* Scholar Notes (Level 3) */}
          {depthLevel === 'scholar' && (
            <div className="p-4 border-2 border-dashed border-ink-900/30 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">
                Level 3 Scholar Analysis:
              </span>
              <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                {philosopher.scholarNotes}
              </p>
            </div>
          )}

          {/* SEP Link */}
          {philosopher.sepUrl && (
            <div className="pt-3 border-t border-ink-900/10 dark:border-[#2E3547]">
              <a
                href={philosopher.sepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline"
              >
                <span>Read SEP Article: {philosopher.sepTitle || philosopher.name.english}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-paper-50 dark:bg-[#151821] border-t-2 border-ink-900 dark:border-[#2E3547] p-4 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono font-bold uppercase bg-paper-200 dark:bg-[#1D222F] border border-ink-900 dark:border-[#2E3547] hover:bg-amber-600 hover:text-white transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
