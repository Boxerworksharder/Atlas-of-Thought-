import React from 'react';
import { SCHOOLS, PHILOSOPHERS, CONCEPTS } from '../data/philosophyData';
import { X, ExternalLink, Users, Lightbulb, ShieldCheck, Swords } from 'lucide-react';
import { ENTITY_SYMBOLS } from '../types/philosophy';

interface SchoolDossierModalProps {
  schoolId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPhilosopherById: (id: string) => void;
  onSelectConceptById: (id: string) => void;
  onSelectOpposedSchoolById: (id: string) => void;
}

export const SchoolDossierModal: React.FC<SchoolDossierModalProps> = ({
  schoolId,
  isOpen,
  onClose,
  onSelectPhilosopherById,
  onSelectConceptById,
  onSelectOpposedSchoolById
}) => {
  if (!isOpen || !schoolId) return null;

  const school = SCHOOLS.find(s => s.id === schoolId);
  if (!school) return null;

  const thinkers = PHILOSOPHERS.filter(p => school.philosophers.includes(p.id) || p.schools.includes(school.id))
    .sort((a, b) => a.birthYear - b.birthYear);
  const concepts = CONCEPTS.filter(c => school.concepts.includes(c.id));
  const opposed = SCHOOLS.filter(s => school.opposedSchools?.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-ink-950/60 backdrop-blur-xs select-none animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer */}
      <div 
        className="relative w-full max-w-2xl sm:max-w-3xl h-full bg-paper-100 dark:bg-[#0C0E12] border-l-3 border-ink-900 dark:border-[#2E3547] shadow-brutal-xl overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-paper-50 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] px-6 py-3.5 flex items-center justify-between shadow-brutal-sm">
          <div className="flex items-center space-x-2">
            <span className="text-entity-school font-mono font-bold text-sm">
              {ENTITY_SYMBOLS.school}
            </span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-ink-700 dark:text-[#94A3B8]">
              School & Tradition Dossier #{school.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] shadow-brutal-sm"
            aria-label="Close School Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
              <span className="font-bold text-white bg-entity-school px-2.5 py-0.5 border border-ink-900 dark:border-[#2E3547] shadow-brutal-sm">
                {ENTITY_SYMBOLS.school} SCHOOL
              </span>
              <span className="bg-paper-300 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] px-2 py-0.5 border border-ink-900/30 dark:border-[#2E3547]">
                {school.tradition}
              </span>
              <span className="bg-paper-200 dark:bg-[#1D222F] text-ink-700 dark:text-[#CBD5E1] px-2 py-0.5 border border-ink-900/20 dark:border-[#2E3547]">
                {school.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC] tracking-tight">
              {school.name}
            </h1>
          </div>

          {/* Overview */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-entity-school tracking-wider block">
              Scholarly Overview
            </span>
            <p className="text-sm sm:text-base text-ink-900 dark:text-[#F8FAFC] font-sans leading-relaxed">
              {school.summary}
            </p>
          </div>

          {/* Core Tenets */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC] tracking-wider block border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
              Foundational Philosophical Tenets
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-ink-800 dark:text-[#CBD5E1]">
              {school.coreTenets.map((tenet, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="font-mono text-entity-school font-bold">0{idx + 1}.</span>
                  <span className="leading-relaxed">{tenet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Representative Thinkers */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-entity-philosopher tracking-wider flex items-center justify-between border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
              <span className="flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Philosophers & Commentators</span>
              </span>
              <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">{thinkers.length} Thinkers</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {thinkers.map(p => (
                <div
                  key={p.id}
                  onClick={() => { onSelectPhilosopherById(p.id); onClose(); }}
                  className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:border-entity-philosopher hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer transition-all"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC]">
                      ● {p.name}
                    </span>
                    <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                      {p.displayDates}
                    </span>
                  </div>
                  <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-1 font-sans">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Concepts Developed */}
          {concepts.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase text-entity-idea tracking-wider flex items-center justify-between border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
                <span className="flex items-center space-x-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Key Concepts & Inquiries Developed</span>
                </span>
                <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">{concepts.length} Concepts</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concepts.map(c => (
                  <div
                    key={c.id}
                    onClick={() => onSelectConceptById(c.id)}
                    className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:border-entity-idea hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer transition-all"
                  >
                    <span className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] block">
                      ◆ {c.name}
                    </span>
                    <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 mt-1 font-sans">
                      {c.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Opposed / Rival Schools */}
          {opposed.length > 0 && (
            <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-entity-philosopher tracking-wider flex items-center space-x-1.5">
                <Swords className="w-3.5 h-3.5" />
                <span>Historic Dialectical Opponents</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {opposed.map(op => (
                  <button
                    key={op.id}
                    onClick={() => onSelectOpposedSchoolById(op.id)}
                    className="font-mono text-xs font-bold text-entity-philosopher px-2.5 py-1 border border-entity-philosopher/40 bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 dark:hover:bg-[#252C3D] transition-colors"
                  >
                    ← vs {op.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scholarly Source Layer */}
          <div className="p-5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-entity-school" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC]">
                Scholarly Source Provenance Layer
              </span>
            </div>

            <p className="text-xs text-ink-600 dark:text-[#94A3B8] font-sans">
              Doctrine formulated and corroborated via the Stanford Encyclopedia of Philosophy (SEP).
            </p>

            {school.sepUrl && (
              <div className="pt-1">
                <a
                  href={school.sepUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn px-4 py-2 text-xs inline-flex items-center space-x-2 bg-entity-school text-white border-ink-900 dark:border-[#2E3547] hover:bg-ink-900"
                >
                  <span>READ SEP ENTRY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-paper-50 dark:bg-[#151821] border-t-2 border-ink-900 dark:border-[#2E3547] px-6 py-3 flex items-center justify-between text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
          <span>ATLAS OF THOUGHT ARCHIVE</span>
          <button
            onClick={onClose}
            className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase underline hover:text-entity-school transition-colors"
          >
            Close Panel
          </button>
        </div>

      </div>

    </div>
  );
};
