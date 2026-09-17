import React from 'react';
import { CONCEPTS, PHILOSOPHERS } from '../data/philosophyData';
import { Philosopher } from '../types/philosophy';
import { 
  Lightbulb, 
  HelpCircle, 
  ExternalLink, 
  Clock, 
  Layers
} from 'lucide-react';

interface IdeaJourneyViewProps {
  selectedConceptId: string | null;
  onSelectConcept: (id: string) => void;
  onSelectPhilosopher: (p: Philosopher) => void;
}

export const IdeaJourneyView: React.FC<IdeaJourneyViewProps> = ({
  selectedConceptId,
  onSelectConcept,
  onSelectPhilosopher
}) => {
  const currentConcept = CONCEPTS.find(c => c.id === selectedConceptId) || CONCEPTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 select-none">
      
      {/* Concept Selector Bar */}
      <div className="bg-paper-100 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-xs font-bold uppercase text-ink-700 dark:text-[#94A3B8] flex items-center space-x-1.5">
            <Lightbulb className="w-4 h-4 text-entity-idea" />
            <span>Select Philosophical Problem / Concept to Follow Through Time:</span>
          </div>
          <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8] uppercase">
            {CONCEPTS.length} Inquiries Catalogued
          </span>
        </div>

        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
          {CONCEPTS.map((concept) => {
            const isSelected = concept.id === currentConcept.id;
            return (
              <button
                key={concept.id}
                onClick={() => onSelectConcept(concept.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border-2 shrink-0 transition-all ${
                  isSelected 
                    ? 'bg-entity-idea text-white border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm' 
                    : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
                }`}
              >
                {concept.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Concept Header */}
      <div className="bg-paper-50 dark:bg-[#151821] border-3 border-ink-900 dark:border-[#2E3547] shadow-brutal-lg dark:shadow-[6px_6px_0px_0px_#06080C] p-6 sm:p-8 space-y-6">
        
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink-900 dark:border-[#2E3547] pb-4">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 bg-entity-idea text-white font-mono text-xs font-bold uppercase tracking-wider">
              {currentConcept.domain[0]}
            </span>
            <span className="font-mono text-xs text-ink-600 dark:text-[#94A3B8]">
              Signature Inquiry
            </span>
          </div>
          <span className="font-mono text-xs text-ink-600 dark:text-[#94A3B8]">
            {currentConcept.historicalDevelopment.length} Historical Epochs Documented
          </span>
        </div>

        {/* Title & Question */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {currentConcept.name}
          </h1>

          <div className="p-4 bg-paper-200 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm space-y-1">
            <div className="font-mono text-[11px] font-bold uppercase text-entity-idea flex items-center space-x-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>The Fundamental Philosophical Question</span>
            </div>
            <p className="text-base sm:text-xl font-serif text-ink-900 dark:text-[#F8FAFC] italic">
              "{currentConcept.theQuestion}"
            </p>
          </div>

          <p className="text-sm sm:text-base text-ink-800 dark:text-[#CBD5E1] leading-relaxed font-sans max-w-4xl">
            {currentConcept.summary}
          </p>
        </div>

      </div>

      {/* HISTORICAL DEVELOPMENT: "FOLLOW THE IDEA" (Prompt Section 19) */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b-2 border-ink-900 dark:border-[#2E3547] pb-2">
          <Clock className="w-5 h-5 text-entity-philosopher" />
          <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            Historical Development Through Time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentConcept.historicalDevelopment.map((epoch, idx) => (
            <div
              key={epoch.era}
              className="brutal-card p-4 flex flex-col justify-between space-y-3 bg-paper-100 dark:bg-[#151821]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#94A3B8] border-b border-ink-900/20 dark:border-[#2E3547] pb-1">
                  <span>Step 0{idx + 1}</span>
                  <span className="text-entity-philosopher">{epoch.era.replace('-', ' ')}</span>
                </div>

                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {epoch.label}
                </h3>

                <p className="text-xs text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
                  {epoch.developmentDescription}
                </p>
              </div>

              {/* Thinkers in this epoch */}
              <div className="pt-2 border-t border-ink-900/15 dark:border-[#2E3547] space-y-1">
                <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8] uppercase font-bold block">
                  Associated Thinkers:
                </span>
                <div className="flex flex-wrap gap-1">
                  {epoch.keyThinkers.map(thinkerId => {
                    const thinker = PHILOSOPHERS.find(p => p.id === thinkerId);
                    return thinker ? (
                      <button
                        key={thinker.id}
                        onClick={() => onSelectPhilosopher(thinker)}
                        className="px-2 py-0.5 bg-paper-50 dark:bg-[#0C0E12] hover:bg-entity-philosopher hover:text-white border border-ink-900 dark:border-[#2E3547] text-[10px] font-mono font-bold uppercase text-ink-800 dark:text-[#CBD5E1] transition-colors"
                      >
                        {thinker.name}
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAJOR COMPETING POSITIONS (Prompt Section 20 & 25) */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b-2 border-ink-900 dark:border-[#2E3547] pb-2">
          <Layers className="w-5 h-5 text-entity-idea" />
          <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            Major Philosophical Stances & Arguments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentConcept.majorPositions.map((pos, idx) => (
            <div
              key={pos.title}
              className="brutal-card p-5 bg-paper-50 dark:bg-[#151821] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-entity-idea uppercase">
                  Position 0{idx + 1}
                </div>
                <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                  {pos.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
                  {pos.description}
                </p>
              </div>

              {/* Representative Thinkers */}
              <div className="pt-3 border-t border-ink-900/15 dark:border-[#2E3547]">
                <span className="font-mono text-[10px] uppercase font-bold text-ink-600 dark:text-[#94A3B8] block mb-1.5">
                  Proponents:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pos.representativeThinkers.map(tId => {
                    const thinker = PHILOSOPHERS.find(p => p.id === tId);
                    return thinker ? (
                      <button
                        key={thinker.id}
                        onClick={() => onSelectPhilosopher(thinker)}
                        className="px-2.5 py-1 bg-paper-200 dark:bg-[#1D222F] hover:bg-entity-philosopher hover:text-white border border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase text-ink-800 dark:text-[#CBD5E1] transition-colors"
                      >
                        {thinker.name}
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DOES THIS MATTER? (Prompt Section 25) & SCHOLARLY SOURCES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Why it Matters */}
        <div className="lg:col-span-7 brutal-card p-6 bg-paper-100 dark:bg-[#151821] space-y-3">
          <div className="font-mono text-xs font-bold uppercase text-entity-philosopher">
            Contemporary Significance
          </div>
          <h3 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            Why Does This Problem Continue to Matter?
          </h3>
          <p className="text-sm text-ink-800 dark:text-[#CBD5E1] leading-relaxed font-sans">
            {currentConcept.whyItMatters}
          </p>

          <div className="pt-3 border-t border-ink-900/20 dark:border-[#2E3547]">
            <span className="font-mono text-[11px] font-bold uppercase text-ink-600 dark:text-[#94A3B8] block mb-1">
              Related Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentConcept.relatedConcepts.map(rcId => (
                <button
                  key={rcId}
                  onClick={() => onSelectConcept(rcId)}
                  className="px-2 py-0.5 bg-paper-50 dark:bg-[#0C0E12] hover:bg-paper-200 dark:hover:bg-[#1D222F] border border-ink-900 dark:border-[#2E3547] text-xs font-mono text-ink-800 dark:text-[#CBD5E1]"
                >
                  #{rcId}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scholarly Sources Layer (SEP) */}
        <div className="lg:col-span-5 brutal-card p-6 bg-paper-50 dark:bg-[#151821] space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase text-entity-idea">
              Scholarly Source Layer
            </span>
            <h3 className="text-lg font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
              Stanford Encyclopedia of Philosophy
            </h3>
            <p className="text-xs text-ink-600 dark:text-[#94A3B8] font-sans">
              Dive deeper into authoritative peer-reviewed academic literature covering {currentConcept.name}.
            </p>
          </div>

          <div className="space-y-2">
            {currentConcept.sources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] hover:border-entity-idea flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-idea">
                    {src.title}
                  </div>
                  <div className="font-mono text-[10px] text-ink-600 dark:text-[#94A3B8]">
                    {src.publisher}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-ink-500 group-hover:text-entity-idea shrink-0 ml-2" />
              </a>
            ))}
          </div>

          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(currentConcept.name + ' philosophy Stanford Encyclopedia')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-mono text-[11px] uppercase text-ink-600 dark:text-[#94A3B8] hover:underline pt-2"
          >
            Search broader academic web →
          </a>
        </div>

      </div>

    </div>
  );
};
