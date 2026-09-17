import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Calendar 
} from 'lucide-react';

export const AboutMethodologyView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 select-none">
      
      {/* Title */}
      <div className="space-y-3 border-b-2 border-ink-900 dark:border-[#2E3547] pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-philosopher tracking-widest">
          <Compass className="w-4 h-4" />
          <span>Academic Mission & Editorial Principles</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
          About & Methodology
        </h1>
        <p className="text-base sm:text-xl font-serif italic text-ink-700 dark:text-[#CBD5E1]">
          "Atlas of Thought is an interactive visualization of philosophers, philosophical ideas, schools and relationships across history."
        </p>
      </div>

      {/* Core Principle & Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          The Four Dimensions of Inquiry
        </h2>
        <p className="text-sm sm:text-base text-ink-800 dark:text-[#CBD5E1] leading-relaxed font-sans">
          Philosophy cannot be reduced to a flat alphabetical list of dead thinkers. The Atlas of Thought organizes human intellectual heritage across four inseparable dimensions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1">
            <span className="font-mono text-xs font-bold uppercase text-entity-philosopher">01. Time</span>
            <p className="text-xs text-ink-700 dark:text-[#94A3B8] font-sans">When did this philosophical activity happen, what historical pressures prompted it, and what was the chronological horizon?</p>
          </div>
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1">
            <span className="font-mono text-xs font-bold uppercase text-entity-idea">02. People</span>
            <p className="text-xs text-ink-700 dark:text-[#94A3B8] font-sans">Who articulated and debated the ideas, in what cultural context, and with what personal stakes?</p>
          </div>
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1">
            <span className="font-mono text-xs font-bold uppercase text-entity-school">03. Ideas</span>
            <p className="text-xs text-ink-700 dark:text-[#94A3B8] font-sans">What foundational problems (Free Will, Justice, Consciousness, Epistemic Doubt) evolved through time?</p>
          </div>
          <div className="p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-1">
            <span className="font-mono text-xs font-bold uppercase text-entity-argument">04. Relationships</span>
            <p className="text-xs text-ink-700 dark:text-[#94A3B8] font-sans">How are thinkers and concepts connected? Who influenced whom, who criticized whom, and who responded to prior crises?</p>
          </div>
        </div>
      </section>

      {/* Stanford Encyclopedia of Philosophy Provenance Layer */}
      <section className="p-6 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal dark:shadow-brutal-dark space-y-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-entity-idea" />
          <h2 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            Scholarly Reference Layer: Stanford Encyclopedia of Philosophy (SEP)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-ink-800 dark:text-[#CBD5E1] leading-relaxed font-sans">
          The primary scholarly reference layer of Atlas of Thought is the peer-reviewed{' '}
          <a 
            href="https://plato.stanford.edu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline font-bold text-ink-900 dark:text-[#F8FAFC] hover:text-entity-idea"
          >
            Stanford Encyclopedia of Philosophy (SEP)
          </a>, 
          maintained by the Center for the Study of Language and Information (CSLI) at Stanford University.
        </p>

        <div className="bg-paper-200 dark:bg-[#1D222F] p-4 border border-ink-900/30 dark:border-[#2E3547] text-xs font-mono space-y-2">
          <div className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase">Editorial Strictures:</div>
          <ul className="space-y-1 text-ink-700 dark:text-[#CBD5E1] list-disc list-inside">
            <li>We do NOT copy large amounts of SEP text or reproduce entire entries.</li>
            <li>We do NOT scrape or mirror SEP articles verbatim.</li>
            <li>All summaries in the Atlas are original, concise synopses crafted to orient learners.</li>
            <li>Direct citations, canonical URL references, and version trails are preserved for every entity.</li>
          </ul>
        </div>
      </section>

      {/* Relationship Semantics (Prompt Section 12 & 13) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Critical Data Integrity: Relationship Taxonomy
        </h2>
        <p className="text-sm text-ink-800 dark:text-[#CBD5E1] font-sans leading-relaxed">
          <strong className="text-entity-philosopher">A temporal sequence does not imply an intellectual influence.</strong> Just because Philosopher A lived before Philosopher B does not mean Philosopher A influenced Philosopher B. The Atlas explicitly categorizes connection semantics:
        </p>

        <div className="space-y-2.5 font-mono text-xs">
          <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-start space-x-3">
            <span className="font-bold text-entity-philosopher uppercase shrink-0 w-36">INFLUENCED:</span>
            <span className="text-ink-700 dark:text-[#CBD5E1]">Documented direct intellectual inheritance substantiated by textual citation, correspondence, or student-teacher lineage (e.g. Socrates → Plato, Plato → Aristotle).</span>
          </div>

          <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-start space-x-3">
            <span className="font-bold text-entity-philosopher uppercase shrink-0 w-36">CRITICIZED:</span>
            <span className="text-ink-700 dark:text-[#CBD5E1]">Explicit polemical rejection or attempted refutation of a prior thesis (e.g. Aristotle's critique of Plato's Forms, Marx's critique of Hegel).</span>
          </div>

          <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-start space-x-3">
            <span className="font-bold text-entity-idea uppercase shrink-0 w-36">RESPONDED_TO:</span>
            <span className="text-ink-700 dark:text-[#CBD5E1]">Dialectical engagement where an earlier problem awakens an intellectual crisis (e.g. Hume's critique of causation awakening Kant from dogmatic slumber).</span>
          </div>

          <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-start space-x-3">
            <span className="font-bold text-entity-school uppercase shrink-0 w-36">PRECEDED:</span>
            <span className="text-ink-700 dark:text-[#CBD5E1]">Historical anticipation of a later argument without established direct transmission (e.g. Augustine's <em>Si fallor, sum</em> anticipating Descartes' Cogito).</span>
          </div>

          <div className="p-3 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-start space-x-3">
            <span className="font-bold text-ink-700 dark:text-[#94A3B8] uppercase shrink-0 w-36">ASSOCIATED_WITH:</span>
            <span className="text-ink-700 dark:text-[#CBD5E1]">Contemporary or thematic partnership (e.g. Sartre and Simone de Beauvoir co-developing existentialism).</span>
          </div>
        </div>
      </section>

      {/* Date Uncertainty & Non-Eurocentric Ontology */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="brutal-card p-5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs font-bold text-ink-900 dark:text-[#F8FAFC] uppercase">
            <Calendar className="w-4 h-4 text-entity-philosopher" />
            <span>Preserving Date Uncertainty</span>
          </div>
          <p className="text-xs text-ink-700 dark:text-[#CBD5E1] font-sans leading-relaxed">
            Historical scholarship frequently involves approximate dates, disputed decades, or uncertain eras. The Atlas refuses false precision: we display <code className="bg-paper-200 dark:bg-[#1D222F] px-1 py-0.5 border border-ink-900/20 dark:border-[#2E3547]">c. 428/427 – 348/347 BCE</code> rather than forcing artificial single-year bounds where evidence is contested.
          </p>
        </div>

        <div className="brutal-card p-5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs font-bold text-ink-900 dark:text-[#F8FAFC] uppercase">
            <Compass className="w-4 h-4 text-entity-school" />
            <span>Multipolar World Philosophy</span>
          </div>
          <p className="text-xs text-ink-700 dark:text-[#CBD5E1] font-sans leading-relaxed">
            The Atlas does not treat Western philosophy as default. Classical Indian (Buddhism, Advaita Vedanta), Chinese (Confucianism, Daoism), and Islamic/Jewish Golden Age traditions are native first-class citizens in the knowledge graph.
          </p>
        </div>
      </div>

    </div>
  );
};
