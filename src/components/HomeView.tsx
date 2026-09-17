import React from 'react';
import { 
  Clock, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Compass,
  Share2,
  Flame
} from 'lucide-react';
import { HeroMiniGraph } from './HeroMiniGraph';
import { BIG_QUESTIONS, ERAS, TRADITIONS, PHILOSOPHERS } from '../data/philosophyData';
import { ViewMode, Philosopher } from '../types/philosophy';

interface HomeViewProps {
  onSelectView: (view: ViewMode) => void;
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectConcept: (id: string) => void;
  onSelectQuestion: (id: string) => void;
  onSurpriseMe: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectView,
  onSelectPhilosopher,
  onSelectConcept,
  onSelectQuestion,
  onSurpriseMe
}) => {
  const handleMiniGraphSelect = (id: string, type: 'philosopher' | 'concept' | 'school') => {
    if (type === 'philosopher') {
      const p = PHILOSOPHERS.find(x => x.id === id);
      if (p) onSelectPhilosopher(p);
    }
    else if (type === 'concept') onSelectConcept(id);
    else onSelectView('schools');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-paper-200 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm text-xs font-mono font-bold tracking-widest uppercase text-ink-800 dark:text-[#CBD5E1]">
            <span className="w-2 h-2 rounded-full bg-entity-philosopher" />
            <span>Scholarly Knowledge Graph & Chronological Atlas</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-serif-title font-black tracking-tight text-ink-900 dark:text-[#F8FAFC] leading-[1.05]">
              ATLAS OF THOUGHT
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-ink-700 dark:text-[#CBD5E1] italic border-l-3 border-entity-philosopher pl-3">
              A visual map of human thought.
            </p>
          </div>

          <p className="text-base sm:text-lg text-ink-800 dark:text-[#CBD5E1] leading-relaxed font-sans max-w-2xl">
            Explore philosophers, ideas, schools, arguments and intellectual connections across history.
            Navigate thousands of years of inquiry through synchronized chronological timelines, 
            interactive knowledge graphs, and authoritative references grounded in the{' '}
            <span className="font-semibold text-ink-900 dark:text-[#F8FAFC] underline decoration-entity-philosopher decoration-2">
              Stanford Encyclopedia of Philosophy
            </span>.
          </p>

          {/* Primary Call-to-Actions (Prompt Section 6) */}
          <div className="pt-2 flex flex-wrap gap-3 items-center">
            <button
              onClick={() => onSelectView('timeline')}
              className="brutal-btn brutal-btn-primary px-5 py-3 text-xs sm:text-sm flex items-center space-x-2"
            >
              <Clock className="w-4 h-4" />
              <span>EXPLORE TIMELINE</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onSelectView('ideas')}
              className="brutal-btn px-5 py-3 text-xs sm:text-sm flex items-center space-x-2 hover:bg-entity-idea hover:text-white"
            >
              <Lightbulb className="w-4 h-4" />
              <span>EXPLORE IDEAS</span>
            </button>

            <button
              onClick={onSurpriseMe}
              className="brutal-btn px-4 py-3 text-xs sm:text-sm flex items-center space-x-2 bg-paper-200 dark:bg-[#151821] dark:text-[#F8FAFC] hover:bg-entity-school hover:text-white"
            >
              <Sparkles className="w-4 h-4 text-entity-school" />
              <span>SURPRISE ME</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 grid grid-cols-3 sm:grid-cols-4 gap-3 font-mono text-xs text-ink-700 dark:text-[#94A3B8] border-t border-ink-900/20 dark:border-[#2E3547] max-w-xl">
            <div>
              <span className="block text-xl font-serif font-black text-ink-900 dark:text-[#F8FAFC]">38+</span>
              <span className="uppercase text-[10px]">Thinkers</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-black text-ink-900 dark:text-[#F8FAFC]">2,600+</span>
              <span className="uppercase text-[10px]">Years Span</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-black text-ink-900 dark:text-[#F8FAFC]">120+</span>
              <span className="uppercase text-[10px]">Documented Links</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-xl font-serif font-black text-ink-900 dark:text-[#F8FAFC]">100%</span>
              <span className="uppercase text-[10px]">SEP Provenance</span>
            </div>
          </div>
        </div>

        {/* Right Hero Interactive Mini-Graph (Prompt Section 7) */}
        <div className="lg:col-span-5 flex justify-center">
          <HeroMiniGraph onSelectNode={handleMiniGraphSelect} />
        </div>

      </section>

      {/* 1b. CONCEPTUAL STACK ARCHITECTURE STRIP (Master Directive Section 33) */}
      <section className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase tracking-wider text-[11px]">
              Cartographic Conceptual Stack:
            </span>
            <span className="text-ink-500 dark:text-[#94A3B8] text-[10px] hidden sm:inline">
              (How human thought accumulates)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] font-bold">
            <button 
              onClick={() => onSelectView('timeline')}
              className="px-2 py-1 bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 cursor-pointer"
            >
              ◷ TIME
            </button>
            <span className="text-ink-400 dark:text-[#64748B]">➔</span>
            <button 
              onClick={() => onSelectView('philosophers')}
              className="px-2 py-1 bg-entity-philosopher text-white hover:opacity-90 cursor-pointer"
            >
              ● PHILOSOPHERS
            </button>
            <span className="text-ink-400 dark:text-[#64748B]">➔</span>
            <button 
              onClick={() => onSelectView('schools')}
              className="px-2 py-1 bg-entity-school text-white hover:opacity-90 cursor-pointer"
            >
              ■ TRADITIONS
            </button>
            <span className="text-ink-400 dark:text-[#64748B]">➔</span>
            <button 
              onClick={() => onSelectView('ideas')}
              className="px-2 py-1 bg-entity-idea text-white hover:opacity-90 cursor-pointer"
            >
              ◆ IDEAS
            </button>
            <span className="text-ink-400 dark:text-[#64748B]">➔</span>
            <button 
              onClick={() => onSelectView('compare')}
              className="px-2 py-1 bg-paper-200 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] border border-ink-900/40 hover:bg-paper-300 cursor-pointer"
            >
              ◇ ARGUMENTS
            </button>
            <span className="text-ink-400 dark:text-[#64748B]">➔</span>
            <button 
              onClick={() => onSelectView('questions')}
              className="px-2 py-1 bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-600/40 hover:bg-amber-500/30 cursor-pointer"
            >
              ? QUESTIONS
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE COMPLEMENTARY DISCOVERY MODES */}
      <section className="space-y-4 pt-4 border-t-2 border-ink-900 dark:border-[#2E3547]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
              Three Lenses on Human Inquiry
            </h2>
            <p className="text-xs sm:text-sm font-mono text-ink-600 dark:text-[#94A3B8] uppercase tracking-wider">
              Chronology, Relational Topology, and Problem Evolution
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Timeline */}
          <div 
            onClick={() => onSelectView('timeline')}
            className="brutal-card p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 bg-entity-philosopher text-white flex items-center justify-center border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher transition-colors">
                The Historical Timeline
              </h3>
              <p className="text-xs text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
                Follow intellectual development horizontally across 2,600 years. Zoom through eras from Ancient Classical Greece and India to the contemporary debates of philosophy of mind.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono font-bold text-entity-philosopher uppercase tracking-wider">
              <span>Enter Timeline View</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Knowledge Graph */}
          <div 
            onClick={() => onSelectView('graph')}
            className="brutal-card p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 bg-entity-idea text-white flex items-center justify-center border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm group-hover:scale-105 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-idea transition-colors">
                The Relational Graph
              </h3>
              <p className="text-xs text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
                Explore philosophy as an interconnected constellation. Inspect 3-tier focus depth (Level 0, 1, 2) to see direct influences, critiques, and syntheses without visual clutter.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono font-bold text-entity-idea uppercase tracking-wider">
              <span>Open Knowledge Graph</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Follow the Idea */}
          <div 
            onClick={() => onSelectView('ideas')}
            className="brutal-card p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 bg-entity-school text-white flex items-center justify-center border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm group-hover:scale-105 transition-transform">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-school transition-colors">
                Follow the Idea
              </h3>
              <p className="text-xs text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
                Trace enduring philosophical problems (Free Will, Consciousness, Justice, the Problem of Evil) across each major epoch and examine competing positions side-by-side.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono font-bold text-entity-school uppercase tracking-wider">
              <span>Trace Concept Evolution</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED DOMAIN: INDIAN PHILOSOPHY KNOWLEDGE SYSTEM */}
      <section className="pt-2">
        <div 
          onClick={() => onSelectView('indian')}
          className="brutal-card p-6 sm:p-8 bg-paper-100 dark:bg-[#151821] border-2 border-amber-600 dark:border-amber-500 shadow-brutal-lg dark:shadow-brutal-dark-lg cursor-pointer group relative overflow-hidden transition-all hover:bg-paper-200 dark:hover:bg-[#1D222F]"
        >
          <div className="absolute right-4 -bottom-6 font-serif-title font-black text-8xl text-amber-600/5 dark:text-amber-400/5 pointer-events-none select-none">
            दर्शन
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/15 px-2.5 py-1 border border-amber-500/30">
                <Flame className="w-4 h-4" />
                <span>Dedicated Knowledge System • Bhāratīya Darśana (भारतीय दर्शन)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC] group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                The Indian Philosophy Knowledge System
              </h2>

              <p className="text-sm sm:text-base font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                An autonomous, deeply researched conceptual architecture representing Indian thought through its own epistemic structures: 6 historical epochs (1500 BCE – Present), 12 classical schools (Āstika & Nāstika), the 6 Pramāṇas matrix, Nyāya syllogistic logic, 10-doctrine Vedānta matrix, cross-school concepts, dialectical disputations, and commentarial lineages.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-ink-600 dark:text-[#94A3B8]">
                <span className="px-2 py-0.5 bg-paper-50 dark:bg-[#11131A] border border-ink-900/15 dark:border-[#2E3547]">
                  • Āstika vs Nāstika (Veda-prāmāṇya)
                </span>
                <span className="px-2 py-0.5 bg-paper-50 dark:bg-[#11131A] border border-ink-900/15 dark:border-[#2E3547]">
                  • Nyāya 5-Step Syllogism & Vyāpti
                </span>
                <span className="px-2 py-0.5 bg-paper-50 dark:bg-[#11131A] border border-ink-900/15 dark:border-[#2E3547]">
                  • Advaita vs Viśiṣṭādvaita vs Dvaita
                </span>
                <span className="px-2 py-0.5 bg-paper-50 dark:bg-[#11131A] border border-ink-900/15 dark:border-[#2E3547]">
                  • 3 Script Modes (English / IAST / Devanāgarī)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 shrink-0">
              <span>Open Indian Philosophy Portal</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BIG QUESTIONS HUB (Prompt Section 58) */}
      <section className="space-y-6 pt-4 border-t-2 border-ink-900 dark:border-[#2E3547]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-entity-question uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Starting Points for Inquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
              The Big Questions
            </h2>
            <p className="text-xs sm:text-sm font-sans text-ink-600 dark:text-[#94A3B8]">
              Choose a fundamental human question to view its lineage of thinkers, arguments, and competing solutions.
            </p>
          </div>
          <button
            onClick={() => onSelectView('questions')}
            className="brutal-btn px-3 py-1.5 text-xs self-start sm:self-auto flex items-center space-x-1.5"
          >
            <span>View All Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BIG_QUESTIONS.slice(0, 8).map((bq) => (
            <div
              key={bq.id}
              onClick={() => onSelectQuestion(bq.id)}
              className="brutal-card p-4 cursor-pointer hover:border-entity-question flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-entity-question font-bold bg-entity-question/10 px-1.5 py-0.5 border border-entity-question/20">
                  {bq.domain}
                </span>
                <h3 className="text-base font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-question transition-colors">
                  {bq.question}
                </h3>
                <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 font-sans">
                  {bq.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[11px] font-mono text-ink-700 dark:text-[#94A3B8]">
                <span>{bq.keyThinkers.length} Major Thinkers</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-entity-question" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MULTIPOLAR TRADITIONS & SCHOLARLY PROVENANCE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t-2 border-ink-900 dark:border-[#2E3547]">
        
        {/* Global Traditions */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] flex items-center space-x-2">
            <Compass className="w-5 h-5 text-entity-philosopher" />
            <span>Global Philosophical Traditions</span>
          </h2>
          <p className="text-xs text-ink-700 dark:text-[#CBD5E1] font-sans">
            The Atlas is deliberately constructed across multiple non-Western and Western intellectual traditions, recognizing parallel inquiries into virtue, cosmology, mind, and political order.
          </p>

          <div className="flex flex-wrap gap-2">
            {TRADITIONS.map(trad => (
              <button
                key={trad}
                onClick={() => onSelectView('schools')}
                className="px-3 py-1.5 bg-paper-50 dark:bg-[#151821] hover:bg-paper-200 dark:hover:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm text-xs font-mono font-semibold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC] flex items-center space-x-1.5"
              >
                <span>{trad}</span>
                <span className="text-[10px] text-ink-500 dark:text-[#94A3B8]">→</span>
              </button>
            ))}
          </div>

          <div className="p-4 bg-paper-200 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm mt-4 space-y-2">
            <div className="font-mono text-xs font-bold text-ink-900 dark:text-[#F8FAFC] uppercase">
              Chronological Epochs
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {ERAS.map(era => (
                <div key={era.id} className="flex items-center justify-between p-2 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/30 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC]">
                  <span className="font-bold">{era.name}</span>
                  <span className="text-ink-600 dark:text-[#94A3B8] text-[11px]">{era.timeRange}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scholarly Reference Layer (Prompt Section 4 & 43) */}
        <div className="lg:col-span-5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal dark:shadow-brutal-dark p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-entity-idea text-white text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Scholarly Provenance Layer</span>
            </div>
            <h3 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
              Stanford Encyclopedia of Philosophy
            </h3>
            <p className="text-xs text-ink-700 dark:text-[#CBD5E1] leading-relaxed font-sans">
              Atlas of Thought serves as an exploratory visual navigation layer over peer-reviewed academic philosophy. All core concepts, thinkers, and relationship classifications are mapped directly to corresponding entries in the peer-reviewed Stanford Encyclopedia of Philosophy (SEP).
            </p>
            <ul className="text-xs font-mono text-ink-800 dark:text-[#CBD5E1] space-y-1.5 list-disc list-inside">
              <li>Original concise summaries; no verbatim article scraping</li>
              <li>Preserves documented historical date uncertainties (e.g. c. 428/427 BCE)</li>
              <li>Distinguishes direct influence from criticism, precedent, and affinity</li>
            </ul>
          </div>

          <div className="pt-2 border-t border-ink-900/20 dark:border-[#2E3547] flex flex-col sm:flex-row gap-2">
            <a
              href="https://plato.stanford.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn px-3 py-2 text-xs flex items-center justify-center space-x-1.5 hover:bg-entity-idea hover:text-white"
            >
              <span>Visit Stanford SEP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onSelectView('methodology')}
              className="brutal-btn px-3 py-2 text-xs flex items-center justify-center space-x-1.5 bg-paper-200 dark:bg-[#1D222F] dark:text-[#F8FAFC] dark:border-[#2E3547]"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Methodology</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
