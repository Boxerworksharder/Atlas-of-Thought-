import React from 'react';
import { CONCEPTS, PHILOSOPHERS, SCHOOLS } from '../data/philosophyData';
import { X, BookOpen, Users, ShieldCheck } from 'lucide-react';
import { ENTITY_SYMBOLS } from '../types/philosophy';

interface ConceptDossierModalProps {
  conceptId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPhilosopherById: (id: string) => void;
  onSelectSchoolById: (id: string) => void;
  onSelectRelatedConceptById: (id: string) => void;
}

export const ConceptDossierModal: React.FC<ConceptDossierModalProps> = ({
  conceptId,
  isOpen,
  onClose,
  onSelectPhilosopherById,
  onSelectSchoolById,
  onSelectRelatedConceptById
}) => {
  if (!isOpen || !conceptId) return null;

  const concept = CONCEPTS.find(c => c.id === conceptId);
  if (!concept) return null;

  const thinkers = PHILOSOPHERS.filter(p => 
    concept.philosophers.includes(p.id) || p.concepts.includes(concept.id)
  );
  const schools = SCHOOLS.filter(s => concept.schools.includes(s.id));
  const related = CONCEPTS.filter(c => concept.relatedConcepts.includes(c.id));

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
            <span className="text-entity-idea font-mono font-bold text-sm">
              {ENTITY_SYMBOLS.concept}
            </span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-ink-700 dark:text-[#94A3B8]">
              Concept Dossier #{concept.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] shadow-brutal-sm"
            aria-label="Close Concept Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
              <span className="font-bold text-white bg-entity-idea px-2.5 py-0.5 border border-ink-900 dark:border-[#2E3547] shadow-brutal-sm">
                {ENTITY_SYMBOLS.concept} IDEA
              </span>
              {concept.domain.map(d => (
                <span key={d} className="bg-paper-300 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] px-2 py-0.5 border border-ink-900/30 dark:border-[#2E3547]">
                  {d}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC] tracking-tight">
              {concept.name}
            </h1>

            <div className="p-3 bg-paper-200 dark:bg-[#1D222F] border-l-3 border-entity-idea text-sm font-serif italic text-ink-800 dark:text-[#CBD5E1]">
              "{concept.theQuestion}"
            </div>
          </div>

          {/* Overview & Definition */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-entity-idea tracking-wider block">
              Conceptual Definition
            </span>
            <p className="text-sm sm:text-base text-ink-900 dark:text-[#F8FAFC] font-sans leading-relaxed">
              {concept.summary}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-ink-800 dark:text-[#F8FAFC] tracking-wider block">
              Epistemic Significance
            </span>
            <p className="text-sm text-ink-700 dark:text-[#CBD5E1] font-sans leading-relaxed">
              {concept.whyItMatters}
            </p>
          </div>

          {/* Competing Interpretations Across Schools */}
          {concept.majorPositions && concept.majorPositions.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC] tracking-wider flex items-center justify-between border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
                <span>Competing Dialectical Stances</span>
                <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">{concept.majorPositions.length} Stances</span>
              </span>

              <div className="space-y-3">
                {concept.majorPositions.map((pos, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2"
                  >
                    <h4 className="font-serif-title font-bold text-sm sm:text-base text-ink-900 dark:text-[#F8FAFC]">
                      {pos.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-700 dark:text-[#CBD5E1] font-sans leading-relaxed">
                      {pos.description}
                    </p>
                    {pos.representativeThinkers && pos.representativeThinkers.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="font-mono text-[10px] uppercase text-ink-500 dark:text-[#94A3B8]">Advocates:</span>
                        {pos.representativeThinkers.map(tId => {
                          const p = PHILOSOPHERS.find(x => x.id === tId);
                          if (!p) return null;
                          return (
                            <button
                              key={p.id}
                              onClick={() => { onSelectPhilosopherById(p.id); onClose(); }}
                              className="font-mono text-[10px] font-bold text-entity-philosopher px-1.5 py-0.5 border border-entity-philosopher/40 bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 dark:hover:bg-[#252C3D] transition-colors"
                            >
                              ● {p.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Historical Development Epochs */}
          {concept.historicalDevelopment && concept.historicalDevelopment.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC] tracking-wider flex items-center justify-between border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
                <span>Historical Evolution Through Time</span>
                <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">{concept.historicalDevelopment.length} Epochs</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concept.historicalDevelopment.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase text-entity-era">
                        ◷ {ep.label}
                      </span>
                      <span className="font-mono text-[9px] uppercase px-1 border border-ink-900/20 dark:border-[#2E3547] text-ink-600 dark:text-[#94A3B8]">
                        {ep.era}
                      </span>
                    </div>
                    <p className="text-xs text-ink-800 dark:text-[#CBD5E1] font-sans leading-relaxed">
                      {ep.developmentDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Associated Thinkers & Schools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Thinkers */}
            <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-entity-philosopher flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Associated Thinkers</span>
              </span>
              <div className="space-y-1.5">
                {thinkers.map(p => (
                  <div
                    key={p.id}
                    onClick={() => { onSelectPhilosopherById(p.id); onClose(); }}
                    className="p-2 bg-paper-100 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border border-ink-900 dark:border-[#2E3547] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="font-serif-title font-bold text-xs text-ink-900 dark:text-[#F8FAFC]">
                      ● {p.name}
                    </span>
                    <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                      {p.displayDates}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schools */}
            <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-entity-school flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Associated Schools</span>
              </span>
              <div className="space-y-1.5">
                {schools.map(s => (
                  <div
                    key={s.id}
                    onClick={() => onSelectSchoolById(s.id)}
                    className="p-2 bg-paper-100 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border border-ink-900 dark:border-[#2E3547] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="font-serif-title font-bold text-xs text-ink-900 dark:text-[#F8FAFC]">
                      ■ {s.name}
                    </span>
                    <span className="font-mono text-[10px] text-entity-school font-bold">
                      {s.tradition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Concepts */}
          {related.length > 0 && (
            <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC] tracking-wider block">
                Related Conceptual Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {related.map(r => (
                  <button
                    key={r.id}
                    onClick={() => onSelectRelatedConceptById(r.id)}
                    className="font-mono text-xs font-bold text-entity-idea px-2.5 py-1 border border-entity-idea/40 bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 dark:hover:bg-[#252C3D] transition-colors"
                  >
                    ◆ {r.name} →
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scholarly Source Provenance */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal space-y-2">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-entity-idea" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC]">
                Scholarly Source Provenance Layer
              </span>
            </div>
            <p className="text-xs text-ink-600 dark:text-[#94A3B8] font-sans">
              Concept taxonomy and dialectical positions corroborated via the Stanford Encyclopedia of Philosophy (SEP) and classical foundational treatises.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-paper-50 dark:bg-[#151821] border-t-2 border-ink-900 dark:border-[#2E3547] px-6 py-3 flex items-center justify-between text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
          <span>ATLAS OF THOUGHT ARCHIVE</span>
          <button
            onClick={onClose}
            className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase underline hover:text-entity-idea transition-colors"
          >
            Close Panel
          </button>
        </div>

      </div>

    </div>
  );
};
