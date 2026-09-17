import React from 'react';
import { Philosopher } from '../types/philosophy';
import { PHILOSOPHERS, CONCEPTS, SCHOOLS, BIG_QUESTIONS } from '../data/philosophyData';
import { 
  X, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Quote, 
  ShieldCheck, 
  GitCompare,
  Swords,
  Users,
  HelpCircle
} from 'lucide-react';
import { ENTITY_SYMBOLS } from '../types/philosophy';

interface PhilosopherDossierPanelProps {
  philosopher: Philosopher | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPhilosopherById: (id: string) => void;
  onSelectConcept: (id: string) => void;
  onSelectSchool: (id: string) => void;
  onSelectQuestion?: (id: string) => void;
  onCompareWith: (p: Philosopher) => void;
}

export const PhilosopherDossierPanel: React.FC<PhilosopherDossierPanelProps> = ({
  philosopher,
  isOpen,
  onClose,
  onSelectPhilosopherById,
  onSelectConcept,
  onSelectSchool,
  onSelectQuestion,
  onCompareWith
}) => {
  if (!isOpen || !philosopher) return null;

  // Predecessors & Successors
  const influencesList = PHILOSOPHERS.filter(p => philosopher.influences.includes(p.id));
  const influencedList = PHILOSOPHERS.filter(p => philosopher.influenced.includes(p.id));

  // Critics / Opponents
  const criticsList = PHILOSOPHERS.filter(p => philosopher.critics?.includes(p.id));

  // Contemporaries: Thinkers alive within ±60 years in same or interacting traditions
  const contemporariesList = PHILOSOPHERS.filter(p => 
    p.id !== philosopher.id &&
    p.tradition === philosopher.tradition &&
    Math.abs(p.birthYear - philosopher.birthYear) <= 65
  ).slice(0, 4);

  // Associated Concepts
  const conceptList = CONCEPTS.filter(c => 
    philosopher.concepts.includes(c.id) || c.philosophers.includes(philosopher.id)
  );

  // Associated Schools
  const schoolList = SCHOOLS.filter(s => philosopher.schools.includes(s.id));

  // Associated Questions
  const relatedQuestionsList = BIG_QUESTIONS.filter(q => 
    philosopher.relatedQuestions?.includes(q.id) ||
    q.keyThinkers.some(kt => kt.philosopherId === philosopher.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-ink-950/60 backdrop-blur-xs select-none animate-in fade-in duration-150">
      
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Panel */}
      <div 
        className="relative w-full max-w-2xl sm:max-w-3xl h-full bg-paper-100 dark:bg-[#0C0E12] border-l-3 border-ink-900 dark:border-[#2E3547] shadow-brutal-xl overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Top Action Bar */}
        <div className="sticky top-0 z-30 bg-paper-50 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] px-6 py-3 flex items-center justify-between shadow-brutal-sm">
          <div className="flex items-center space-x-2">
            <span className="text-entity-philosopher font-mono font-bold text-sm">
              {ENTITY_SYMBOLS.philosopher}
            </span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-ink-700 dark:text-[#94A3B8]">
              Archival Dossier #{philosopher.id}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => { onCompareWith(philosopher); onClose(); }}
              className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-paper-100 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] shadow-brutal-sm flex items-center space-x-1"
              title="Compare with another philosopher"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">COMPARE</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] shadow-brutal-sm"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5 text-ink-900 dark:text-[#F8FAFC]" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Header & Biographical Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
              <span className="font-bold text-white bg-entity-philosopher px-2.5 py-0.5 border border-ink-900 dark:border-[#2E3547] shadow-brutal-sm">
                ● {philosopher.displayDates}
              </span>
              {philosopher.dateUncertainty && (
                <span className={`px-2 py-0.5 font-bold border ${
                  philosopher.dateUncertainty === 'ESTABLISHED'
                    ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/30'
                    : philosopher.dateUncertainty === 'PROBABLE'
                    ? 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/30'
                    : 'bg-rose-500/10 text-rose-800 dark:text-rose-400 border-rose-500/30'
                }`}>
                  ◎ {philosopher.dateUncertainty}
                </span>
              )}
              <span className="bg-paper-300 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] px-2 py-0.5 border border-ink-900/30 dark:border-[#2E3547]">
                {philosopher.tradition}
              </span>
              <span className="bg-paper-200 dark:bg-[#1D222F] text-ink-700 dark:text-[#CBD5E1] px-2 py-0.5 border border-ink-900/20 dark:border-[#2E3547]">
                {philosopher.region}
              </span>
            </div>

            {philosopher.dateUncertaintyNote && (
              <div className="p-2.5 bg-paper-200 dark:bg-[#1D222F] border-l-2 border-amber-500 text-[11px] font-mono text-ink-800 dark:text-[#CBD5E1]">
                <span className="font-bold text-ink-900 dark:text-[#F8FAFC]">Historiographical Note: </span>
                {philosopher.dateUncertaintyNote}
              </div>
            )}

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC] tracking-tight">
                {philosopher.name}
              </h1>
              {philosopher.nativeName && (
                <span className="text-base sm:text-xl font-serif text-ink-500 dark:text-[#94A3B8]">
                  {philosopher.nativeName}
                </span>
              )}
            </div>

            {/* School affiliation */}
            {schoolList.length > 0 && (
              <div className="flex items-center space-x-2 pt-1">
                <span className="font-mono text-xs text-ink-500 dark:text-[#94A3B8] uppercase">School:</span>
                <div className="flex flex-wrap gap-1.5">
                  {schoolList.map(s => (
                    <button
                      key={s.id}
                      onClick={() => onSelectSchool(s.id)}
                      className="font-mono text-xs font-bold text-entity-school uppercase tracking-wider px-2 py-0.5 border border-entity-school/40 bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 dark:hover:bg-[#252C3D] transition-colors cursor-pointer"
                    >
                      {s.name} →
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Biographical Summary */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-entity-philosopher tracking-wider block">
              Scholarly Overview
            </span>
            <p className="text-sm sm:text-base text-ink-900 dark:text-[#F8FAFC] font-sans leading-relaxed">
              {philosopher.summary}
            </p>
          </div>

          {/* CORE IDEAS CARDS (Prompt Section 14) */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-ink-700 dark:text-[#F8FAFC] tracking-wider flex items-center justify-between border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
              <span>Core Philosophical Ideas & Discoveries</span>
              <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">{conceptList.length} Inquiries</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {conceptList.map(concept => (
                <div
                  key={concept.id}
                  onClick={() => onSelectConcept(concept.id)}
                  className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm hover:border-entity-idea hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer group transition-all"
                >
                  <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-idea">
                    {concept.name}
                  </div>
                  <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 mt-1 font-sans">
                    {concept.summary}
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-entity-idea font-bold flex items-center justify-end">
                    <span>Follow Concept Lineage →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* "WHAT DID THEY BELIEVE?" - DOMAIN BREAKDOWN (Prompt Section 15 & 16) */}
          <div className="space-y-4">
            <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-1">
              <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                What Did They Believe?
              </h3>
              <p className="text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
                Key philosophical positions categorized by discipline (disputed interpretations explicitly noted)
              </p>
            </div>

            <div className="space-y-3">
              {philosopher.positions.map((pos) => (
                <div
                  key={pos.domain}
                  className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-entity-idea tracking-wider">
                      {pos.domain}
                    </span>
                    {pos.isDisputed && (
                      <span className="font-mono text-[10px] text-entity-philosopher font-bold px-1.5 py-0.2 border border-entity-philosopher/40 bg-entity-philosopher/10">
                        Disputed Interpretation
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-ink-800 dark:text-[#F8FAFC] font-sans leading-relaxed">
                    {pos.position}
                  </p>

                  {pos.isDisputed && pos.disputeNote && (
                    <div className="mt-2 p-2 bg-paper-200 dark:bg-[#1D222F] border-l-2 border-entity-philosopher text-[11px] font-mono text-ink-700 dark:text-[#CBD5E1] italic">
                      <span className="font-bold not-italic">Scholarly Dispute: </span>
                      {pos.disputeNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PHILOSOPHICAL DNA: VISUAL TOPIC MAP (Prompt Section 17) */}
          <div className="p-4 bg-paper-200 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC] tracking-wider">
                Philosophical DNA: Domain Distribution
              </span>
              <span className="font-mono text-[10px] text-ink-600 dark:text-[#94A3B8]">
                Thematic Areas of Inquiry
              </span>
            </div>

            <div className="space-y-2">
              {philosopher.dna.map((item) => (
                <div key={item.domain} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-ink-800 dark:text-[#F8FAFC]">{item.domain}</span>
                    <span className="text-ink-600 dark:text-[#94A3B8]">{item.weight}%</span>
                  </div>
                  <div className="h-2 w-full bg-paper-50 dark:bg-[#0C0E12] border border-ink-900/30 dark:border-[#2E3547] overflow-hidden">
                    <div
                      className="h-full bg-entity-philosopher transition-all duration-500"
                      style={{ width: `${item.weight}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTELLECTUAL NETWORK: INFLUENCES & INFLUENCED (Prompt Section 18) */}
          <div className="space-y-4">
            <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-1">
              <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                Intellectual Network
              </h3>
              <p className="text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
                Documented predecessors and successors across history
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Influenced By (Predecessors) */}
              <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-2">
                <span className="font-mono text-xs font-bold uppercase text-entity-philosopher block">
                  Influenced By (Predecessors):
                </span>
                {influencesList.length > 0 ? (
                  <div className="space-y-1.5">
                    {influencesList.map(inf => (
                      <div
                        key={inf.id}
                        onClick={() => onSelectPhilosopherById(inf.id)}
                        className="p-2 bg-paper-100 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border border-ink-900 dark:border-[#2E3547] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span className="font-serif-title font-bold text-xs text-ink-900 dark:text-[#F8FAFC]">
                          {inf.name}
                        </span>
                        <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                          {inf.displayDates}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-ink-500 dark:text-[#94A3B8] italic">
                    Foundational or origin thinker
                  </p>
                )}
              </div>

              {/* Influenced (Successors) */}
              <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-2">
                <span className="font-mono text-xs font-bold uppercase text-entity-idea block">
                  Influenced (Successors):
                </span>
                {influencedList.length > 0 ? (
                  <div className="space-y-1.5">
                    {influencedList.map(inf => (
                      <div
                        key={inf.id}
                        onClick={() => onSelectPhilosopherById(inf.id)}
                        className="p-2 bg-paper-100 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] border border-ink-900 dark:border-[#2E3547] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span className="font-serif-title font-bold text-xs text-ink-900 dark:text-[#F8FAFC]">
                          {inf.name}
                        </span>
                        <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                          {inf.displayDates}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-ink-500 dark:text-[#94A3B8] italic">
                    Contemporary or late epoch thinker
                  </p>
                )}
              </div>
            </div>

            {/* Critics & Dialectical Opponents */}
            {criticsList.length > 0 && (
              <div className="p-3 bg-rose-500/5 dark:bg-rose-950/20 border-2 border-rose-900/40 dark:border-rose-800/40 shadow-brutal-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <Swords className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300">
                    Historic Critics & Dialectical Opponents
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {criticsList.map(critic => (
                    <div
                      key={critic.id}
                      onClick={() => onSelectPhilosopherById(critic.id)}
                      className="p-2 bg-paper-50 dark:bg-[#151821] hover:bg-rose-50 dark:hover:bg-rose-900/30 border border-rose-900/30 dark:border-rose-700/50 cursor-pointer flex items-center justify-between transition-colors group"
                    >
                      <span className="font-serif-title font-bold text-xs text-ink-900 dark:text-[#F8FAFC] group-hover:text-rose-600 dark:group-hover:text-rose-400">
                        ← vs {critic.name}
                      </span>
                      <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                        {critic.displayDates}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Era Contemporaries */}
            {contemporariesList.length > 0 && (
              <div className="p-3 bg-paper-100 dark:bg-[#151821] border-2 border-ink-900/30 dark:border-[#2E3547] space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="w-3.5 h-3.5 text-ink-600 dark:text-[#94A3B8]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-700 dark:text-[#CBD5E1]">
                    Era Contemporaries (±65 Years)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {contemporariesList.map(c => (
                    <button
                      key={c.id}
                      onClick={() => onSelectPhilosopherById(c.id)}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-paper-50 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] border border-ink-900/30 dark:border-[#2E3547] hover:border-entity-philosopher hover:text-entity-philosopher transition-colors cursor-pointer"
                    >
                      ● {c.name} ({c.displayDates})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* QUESTIONS INVESTIGATED (The WOW Moment bridge) */}
          {relatedQuestionsList.length > 0 && (
            <div className="space-y-3">
              <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-1 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                    Perennial Inquiries Addressed
                  </h3>
                </div>
                <span className="font-mono text-xs text-ink-500 dark:text-[#94A3B8]">
                  {relatedQuestionsList.length} Questions
                </span>
              </div>
              <div className="space-y-2">
                {relatedQuestionsList.map(q => {
                  const thinkerStance = q.keyThinkers.find(kt => kt.philosopherId === philosopher.id);
                  return (
                    <div
                      key={q.id}
                      onClick={() => onSelectQuestion && onSelectQuestion(q.id)}
                      className="p-3 bg-amber-500/5 dark:bg-amber-950/20 border-2 border-amber-900/30 dark:border-amber-700/40 shadow-brutal-sm hover:border-amber-600 cursor-pointer transition-all space-y-1.5 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-amber-700 dark:group-hover:text-amber-400">
                          ? {q.question}
                        </span>
                        <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/30">
                          {q.domain}
                        </span>
                      </div>
                      <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                        {q.subtitle}
                      </p>
                      {thinkerStance && (
                        <div className="p-2 bg-paper-50 dark:bg-[#151821] border border-amber-900/20 dark:border-amber-800/30 text-xs font-mono text-ink-800 dark:text-[#F8FAFC]">
                          <span className="font-bold text-amber-800 dark:text-amber-400">Position Stance: </span>
                          {thinkerStance.stance}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PRIMARY TEXTUAL CORPUS & WORKS (Prompt Visual Grammar: ▣ TEXT) */}
          <div className="space-y-3">
            <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-1 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-ink-800 dark:text-[#F8FAFC] flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-entity-philosopher" />
                <span>Primary Textual Corpus & Seminal Works</span>
              </span>
              <span className="font-mono text-xs text-ink-500 dark:text-[#94A3B8]">
                ▣ Canon
              </span>
            </div>

            {philosopher.primaryTexts && philosopher.primaryTexts.length > 0 ? (
              <div className="grid grid-cols-1 gap-2.5">
                {philosopher.primaryTexts.map((text, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs text-entity-philosopher font-bold">▣</span>
                        <span className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] italic">
                          {text.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                        {text.language && <span className="px-1.5 py-0.5 bg-paper-200 dark:bg-[#1D222F] border border-ink-900/20">{text.language}</span>}
                        {text.approxYear && <span>{text.approxYear}</span>}
                      </div>
                    </div>
                    {text.originalTitle && (
                      <div className="text-xs font-serif text-ink-600 dark:text-[#94A3B8]">
                        Original: <span className="font-medium text-ink-800 dark:text-[#CBD5E1]">{text.originalTitle}</span>
                      </div>
                    )}
                    {text.description && (
                      <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                        {text.description}
                      </p>
                    )}
                    {text.significance && (
                      <div className="p-1.5 bg-paper-200 dark:bg-[#1D222F] border-l-2 border-entity-idea text-[11px] font-mono text-ink-700 dark:text-[#CBD5E1]">
                        <span className="font-bold text-ink-900 dark:text-[#F8FAFC]">Historiographical Impact: </span>
                        {text.significance}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm">
                <ul className="space-y-1 text-xs font-mono text-ink-700 dark:text-[#CBD5E1] list-disc list-inside">
                  {philosopher.works.map((w, idx) => (
                    <li key={idx} className="italic font-serif">{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* FAMOUS AXIOM QUOTE */}
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex flex-col justify-between space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-ink-800 dark:text-[#F8FAFC] flex items-center space-x-1.5">
              <Quote className="w-3.5 h-3.5 text-entity-philosopher" />
              <span>Famous Axiom & Core Thesis</span>
            </span>
            <blockquote className="text-xs sm:text-sm font-serif italic text-ink-900 dark:text-[#F8FAFC] leading-relaxed">
              "{philosopher.famousQuote.quote}"
            </blockquote>
            <span className="font-mono text-[10px] text-ink-600 dark:text-[#94A3B8] block text-right">
              — {philosopher.famousQuote.context}
            </span>
          </div>

          {/* SCHOLARLY SOURCE LAYER (Prompt Section 42 & 43) */}
          <div className="p-5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal dark:shadow-brutal-dark space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-entity-idea" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC]">
                Scholarly Source Provenance Layer
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                Stanford Encyclopedia of Philosophy: {philosopher.sepTitle}
              </h4>
              <p className="text-xs text-ink-600 dark:text-[#94A3B8] font-sans">
                Original editorial summary attributed to Stanford Encyclopedia of Philosophy (SEP).
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={philosopher.sepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-4 py-2 text-xs flex items-center space-x-2 bg-entity-idea text-white border-ink-900 dark:border-[#2E3547] hover:bg-ink-900"
              >
                <span>READ SEP ENTRY</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(philosopher.name + ' Stanford Encyclopedia of Philosophy')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-3 py-2 text-xs flex items-center space-x-1.5 bg-paper-200 dark:bg-[#1D222F] dark:text-[#F8FAFC] dark:border-[#2E3547]"
              >
                <Search className="w-3.5 h-3.5 text-ink-700 dark:text-[#94A3B8]" />
                <span>SEARCH WEB</span>
              </a>
            </div>
          </div>

        </div>

        {/* Sticky Bottom Bar */}
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
