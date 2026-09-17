import React, { useState } from 'react';
import { BIG_QUESTIONS, PHILOSOPHERS, CONCEPTS } from '../data/philosophyData';
import { BigQuestion, Philosopher, ENTITY_SYMBOLS } from '../types/philosophy';
import { 
  HelpCircle, 
  AlertTriangle, 
  Compass, 
  Sparkles, 
  Layers 
} from 'lucide-react';

interface BigQuestionsViewProps {
  selectedQuestionId?: string | null;
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectConcept: (id: string) => void;
}

interface PathwayStep {
  stepNumber: number;
  philosopherId?: string;
  tradition: string;
  name: string;
  period: string;
  conceptKey: string;
  conceptId?: string;
  originalTerm?: string;
  coreThesis: string;
  divergenceContext: string;
}

const SELF_PATHWAY_STEPS: PathwayStep[] = [
  {
    stepNumber: 1,
    tradition: 'Indian (Vedic/Upaniṣadic)',
    name: 'Upaniṣadic Rṣis (Yājñavalkya)',
    period: 'c. 800–500 BCE',
    conceptKey: 'Ātman is Brahman',
    conceptId: 'brahman-atman',
    originalTerm: 'आत्मन् / Ātman (Eternal Consciousness)',
    coreThesis: 'The innermost self (Ātman) is an unchanging, immortal witness-consciousness, metaphysically identical with ultimate reality (Brahman).',
    divergenceContext: 'Existential motivation: Freedom from Saṃsāra through experiential realization of pure non-dual awareness.'
  },
  {
    stepNumber: 2,
    philosopherId: 'gautama-buddha',
    tradition: 'Indian (Buddhist)',
    name: 'Siddhārtha Gautama (Buddha)',
    period: 'c. 563–483 BCE',
    conceptKey: 'Anattā (Not-Self)',
    conceptId: 'anatta-no-self',
    originalTerm: 'अनत्त / Anattā (Five Skandhas)',
    coreThesis: 'Radical deconstruction: There is no substantial eternal soul. What we call "self" is a fluid, momentary assemblage of five dependently co-arising aggregates.',
    divergenceContext: 'Dialectical repudiation of Upaniṣadic substantialism to extinguish grasping (taṇhā) and liberate mind from suffering (dukkha).'
  },
  {
    stepNumber: 3,
    philosopherId: 'kapila',
    tradition: 'Indian (Sāṃkhya)',
    name: 'Kapila & Sāṃkhya School',
    period: 'c. 6th–5th cent. BCE',
    conceptKey: 'Puruṣa vs Prakṛti',
    conceptId: 'purusha-prakriti-dualism',
    originalTerm: 'पुरुष / Puruṣa (Pure Spectator)',
    coreThesis: 'Dualistic realism: The true Self (Puruṣa) is pure, passive, unattached consciousness, eternally distinct from the dynamic evolution of material Nature (Prakṛti).',
    divergenceContext: 'Distinguishing the transcendent seer from the physical intellect and ego (Ahaṃkāra) to achieve Kaivalya (isolation/freedom).'
  },
  {
    stepNumber: 4,
    tradition: 'Indian (Nyāya)',
    name: 'Akṣapāda Gautama',
    period: 'c. 2nd cent. BCE',
    conceptKey: 'Ātman as Inherent Substance',
    originalTerm: 'द्रव्य / Dravya (Substratum of Qualities)',
    coreThesis: 'Epistemic realism: The self is an enduring, individual substance in which cognition, desire, aversion, and volition inhere as impermanent qualities.',
    divergenceContext: 'Defending personal moral accountability and karmic retribution against Buddhist momentariness using rigorous logic (Pramāṇa).'
  },
  {
    stepNumber: 5,
    philosopherId: 'adi-shankara',
    tradition: 'Indian (Advaita Vedānta)',
    name: 'Ādi Śaṅkarācārya',
    period: 'c. 788–820 CE',
    conceptKey: 'Sākṣin (The Witness Self)',
    conceptId: 'advaita-nondualism',
    originalTerm: 'साक्षी / Sākṣin & Nirguṇa Brahman',
    coreThesis: 'Absolute non-dualism: Multiplicity is an epistemic illusion (Māyā). The individual self is none other than undivided, attributeless consciousness (Brahman).',
    divergenceContext: 'Synthesis of Vedic orthodoxy into a unified system proving that liberation requires non-dual gnosis (Jñāna), not ritual action.'
  },
  {
    stepNumber: 6,
    philosopherId: 'descartes',
    tradition: 'European (Modern Rationalism)',
    name: 'René Descartes',
    period: '1596–1650 CE',
    conceptKey: 'Res Cogitans & The Cogito',
    conceptId: 'cogito-ergo-sum',
    originalTerm: 'Res Cogitans (Thinking Substance)',
    coreThesis: 'Epistemological foundation: Even if an evil demon deceives me, the "I" that doubts must exist as an immaterial thinking substance completely separate from extended bodily matter.',
    divergenceContext: 'Motivated by mathematical certainty and the emerging scientific revolution, seeking an indubitable foundation for human knowledge.'
  },
  {
    stepNumber: 7,
    philosopherId: 'locke',
    tradition: 'European (British Empiricism)',
    name: 'John Locke',
    period: '1632–1704 CE',
    conceptKey: 'Psychological Continuity',
    conceptId: 'tabula-rasa',
    originalTerm: 'Memory & Consciousness Across Time',
    coreThesis: 'Personal identity consists not in identical spiritual or physical substance, but in continuity of consciousness and reflexive autobiographical memory.',
    divergenceContext: 'Framed for forensic and moral-legal culpability: a person is accountable only for acts they consciously remember committing.'
  },
  {
    stepNumber: 8,
    philosopherId: 'hume',
    tradition: 'European (Radical Empiricism)',
    name: 'David Hume',
    period: '1711–1776 CE',
    conceptKey: 'Bundle Theory of Self',
    conceptId: 'bundle-theory-of-self',
    originalTerm: 'Theater of Fleeting Perceptions',
    coreThesis: 'Empirical skepticism: When I look into myself, I perceive only fleeting perceptions of heat, cold, love, or pain. The self is merely a bundle of flux without an underlying anchor.',
    divergenceContext: 'Strict adherence to sensory empiricism: no impression exists of an unchanging simple self, so the concept is a fiction of the imagination.'
  },
  {
    stepNumber: 9,
    philosopherId: 'kant',
    tradition: 'European (Critical Idealism)',
    name: 'Immanuel Kant',
    period: '1724–1804 CE',
    conceptKey: 'Transcendental Unity of Apperception',
    conceptId: 'transcendental-idealism',
    originalTerm: 'Das "Ich denke" (Formal Unifier)',
    coreThesis: 'Transcendental deduction: The self is not an observable soul (Hume is right empirically), but a necessary formal presupposition: the "I think" must accompany all experience to unify perceptions into coherent awareness.',
    divergenceContext: 'Overcoming the Cartesian soul and Humean chaos by demonstrating that cognitive unity is the condition for the possibility of experience itself.'
  },
  {
    stepNumber: 10,
    philosopherId: 'parfit',
    tradition: 'Contemporary Analytic',
    name: 'Derek Parfit',
    period: '1942–2014 CE',
    conceptKey: 'Reductionism & Relation R',
    conceptId: 'bundle-theory-of-self',
    originalTerm: 'Psychological Connectedness',
    coreThesis: 'Modern analytic revival: Personal identity is not what matters for survival. There is no further Cartesian fact beyond overlapping chains of psychological connectedness and continuity.',
    divergenceContext: 'Using modern thought experiments (teleportation, split-brain fission) to dismantle egoistic self-interest and expand impartial ethical concern.'
  }
];

export const BigQuestionsView: React.FC<BigQuestionsViewProps> = ({
  selectedQuestionId,
  onSelectPhilosopher,
  onSelectConcept
}) => {
  const [activeQuestion, setActiveQuestion] = useState<BigQuestion>(
    BIG_QUESTIONS.find(bq => bq.id === selectedQuestionId) || BIG_QUESTIONS[0]
  );
  const [activeTab, setActiveTab] = useState<'pathway' | 'stances'>('pathway');

  const isConsciousnessQuestion = activeQuestion.id === 'what-is-consciousness';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-entity-question tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>The Enduring Human Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
          The Big Questions of Philosophy
        </h1>
        <p className="text-sm sm:text-base font-sans text-ink-700 dark:text-[#CBD5E1] max-w-3xl">
          Enter human thought through perennial dilemmas. Contrast answers across historical epochs and witness cross-tradition transmissions that shaped human consciousness.
        </p>
      </div>

      {/* Question Selector Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
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
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-entity-question bg-entity-question/10 px-1.5 py-0.5 border border-entity-question/30">
                    {bq.domain}
                  </span>
                  {bq.id === 'what-is-consciousness' && (
                    <span className="font-mono text-[9px] uppercase font-bold text-amber-700 dark:text-amber-400 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>The Wow Pathway</span>
                    </span>
                  )}
                </div>
                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {bq.question}
                </h3>
                <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-2 font-sans">
                  {bq.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[11px] font-mono font-bold text-entity-question">
                <span>{bq.keyThinkers.length} Classical Stances</span>
                <span>{isActive ? '● Active' : 'Explore →'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Investigation Canvas */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        
        {/* Active Question Title & Controls */}
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase font-bold text-entity-question">
              <span>{ENTITY_SYMBOLS.question} PERENNIAL INQUIRY</span>
              <span>•</span>
              <span>{activeQuestion.domain}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
              {activeQuestion.question}
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-ink-700 dark:text-[#CBD5E1]">
              {activeQuestion.subtitle}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center border-2 border-ink-900 dark:border-[#2E3547] bg-paper-200 dark:bg-[#0C0E12] shadow-brutal-sm text-xs font-mono font-bold shrink-0">
            <button
              onClick={() => setActiveTab('pathway')}
              className={`px-3.5 py-2 flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeTab === 'pathway'
                  ? 'bg-ink-900 text-white dark:bg-[#F8FAFC] dark:text-[#0C0E12]'
                  : 'text-ink-800 dark:text-[#CBD5E1] hover:bg-paper-300 dark:hover:bg-[#1D222F]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>COMPARATIVE PATHWAY</span>
            </button>
            <button
              onClick={() => setActiveTab('stances')}
              className={`px-3.5 py-2 flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeTab === 'stances'
                  ? 'bg-ink-900 text-white dark:bg-[#F8FAFC] dark:text-[#0C0E12]'
                  : 'text-ink-800 dark:text-[#CBD5E1] hover:bg-paper-300 dark:hover:bg-[#1D222F]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>STANCES BREAKDOWN</span>
            </button>
          </div>
        </div>

        {/* Core Problem Dilemma */}
        <div className="p-4 bg-paper-200 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] space-y-1">
          <span className="font-mono text-xs font-bold uppercase text-ink-900 dark:text-[#F8FAFC]">
            Historiographical Dilemma:
          </span>
          <p className="text-sm font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
            {activeQuestion.coreProblem}
          </p>
        </div>

        {/* VIEW 1: CROSS-TRADITION COMPARATIVE PATHWAY ("THE WOW MOMENT") */}
        {activeTab === 'pathway' && (
          <div className="space-y-6 pt-2">
            
            {/* Anti-Anachronism Scholarly Guardrail Alert */}
            <div className="p-4 bg-amber-500/10 dark:bg-amber-950/20 border-2 border-amber-600/50 dark:border-amber-500/40 shadow-brutal-sm space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Historiographical Guardrail: Anti-Anachronism Principle</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
                While traditions across millennia ask complementary questions about conscious experience, their underlying <strong>existential motivations and metaphysical architectures diverge fundamentally</strong>. In Indian thought, inquiry into the self served <em className="font-serif">Mokṣa</em> (liberation from suffering and karmic rebirth), investigated via rigorous meditative introspection. In early modern Europe, selfhood emerged from mathematical skepticism, forensic legal accountability, and Cartesian epistemological certainty. Avoid treating these cross-tradition steps as a linear teleological climb; regard them as an intellectual dialectic across human civilizations.
              </p>
            </div>

            {/* Stepped Pathway */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-title font-bold text-xl text-ink-900 dark:text-[#F8FAFC] flex items-center space-x-2">
                  <span>{isConsciousnessQuestion ? "The Evolution of Self & Consciousness" : `Cross-Tradition Dialectic: ${activeQuestion.question}`}</span>
                </h3>
                <span className="font-mono text-xs text-ink-500 dark:text-[#94A3B8]">
                  {isConsciousnessQuestion ? "10 Seminal Milestones" : `${activeQuestion.keyThinkers.length} Milestones`}
                </span>
              </div>

              {isConsciousnessQuestion ? (
                /* The Dedicated 10-Milestone Self Pathway */
                <div className="relative border-l-2 border-ink-900 dark:border-[#2E3547] pl-5 sm:pl-7 ml-3 space-y-6">
                  {SELF_PATHWAY_STEPS.map((step) => {
                    const phil = step.philosopherId ? PHILOSOPHERS.find(p => p.id === step.philosopherId) : null;
                    return (
                      <div key={step.stepNumber} className="relative group">
                        {/* Step Marker on spine */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-6 h-6 rounded-full bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#F8FAFC] text-ink-900 dark:text-[#F8FAFC] flex items-center justify-center font-mono text-[10px] font-black shadow-brutal-xs">
                          {step.stepNumber}
                        </div>

                        {/* Step Card */}
                        <div className="p-4 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:border-entity-idea dark:hover:border-entity-idea transition-all space-y-2">
                          
                          {/* Top Meta */}
                          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-entity-philosopher">
                                ● {step.tradition}
                              </span>
                              <span className="text-ink-500 dark:text-[#94A3B8]">
                                {step.period}
                              </span>
                            </div>
                            {step.originalTerm && (
                              <span className="px-2 py-0.5 bg-paper-200 dark:bg-[#151821] border border-ink-900/20 text-ink-800 dark:text-[#CBD5E1] font-serif">
                                {step.originalTerm}
                              </span>
                            )}
                          </div>

                          {/* Thinker & Thesis */}
                          <div className="space-y-1">
                            <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                              {step.name}
                            </h4>
                            <div className="font-mono text-xs font-bold text-entity-idea uppercase">
                              ◆ Concept: {step.conceptKey}
                            </div>
                            <p className="text-xs sm:text-sm font-sans text-ink-900 dark:text-[#F8FAFC] leading-relaxed">
                              {step.coreThesis}
                            </p>
                          </div>

                          {/* Historical & Existential Context */}
                          <div className="p-2.5 bg-paper-50 dark:bg-[#151821] border-l-2 border-ink-900 dark:border-[#2E3547] text-xs font-mono text-ink-700 dark:text-[#CBD5E1]">
                            <span className="font-bold text-ink-900 dark:text-[#F8FAFC]">Existential Horizon: </span>
                            {step.divergenceContext}
                          </div>

                          {/* Action Footers: Jump to In-Situ Dossiers */}
                          <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                            <div className="flex items-center space-x-2">
                              {phil && (
                                <button
                                  onClick={() => onSelectPhilosopher(phil)}
                                  className="px-2.5 py-1 bg-paper-200 dark:bg-[#151821] hover:bg-entity-philosopher hover:text-white border border-ink-900 dark:border-[#2E3547] text-[11px] font-bold uppercase transition-colors cursor-pointer"
                                >
                                  ● Inspect Thinker Dossier →
                                </button>
                              )}
                              {step.conceptId && (
                                <button
                                  onClick={() => onSelectConcept(step.conceptId!)}
                                  className="px-2.5 py-1 bg-paper-200 dark:bg-[#151821] hover:bg-entity-idea hover:text-white border border-ink-900 dark:border-[#2E3547] text-[11px] font-bold uppercase transition-colors cursor-pointer"
                                >
                                  ◆ Open Concept #{step.conceptId} →
                                </button>
                              )}
                            </div>
                            <span className="text-ink-500 dark:text-[#94A3B8] text-[10px]">
                              Transmission Node #{step.stepNumber}
                            </span>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Dynamic Pathway for other questions */
                <div className="relative border-l-2 border-ink-900 dark:border-[#2E3547] pl-5 sm:pl-7 ml-3 space-y-6">
                  {activeQuestion.keyThinkers.map((item, idx) => {
                    const thinker = PHILOSOPHERS.find(p => p.id === item.philosopherId);
                    if (!thinker) return null;
                    return (
                      <div key={thinker.id} className="relative group">
                        <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-6 h-6 rounded-full bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#F8FAFC] text-ink-900 dark:text-[#F8FAFC] flex items-center justify-center font-mono text-[10px] font-black shadow-brutal-xs">
                          {idx + 1}
                        </div>

                        <div className="p-4 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:border-entity-idea transition-all space-y-2">
                          <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8]">
                            <span className="font-bold text-entity-philosopher">● {thinker.tradition} • {thinker.schools[0]}</span>
                            <span>{thinker.displayDates}</span>
                          </div>

                          <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
                            {thinker.name}
                          </h4>

                          <p className="text-xs sm:text-sm font-sans text-ink-900 dark:text-[#CBD5E1] leading-relaxed">
                            {item.stance}
                          </p>

                          <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between">
                            <button
                              onClick={() => onSelectPhilosopher(thinker)}
                              className="px-2.5 py-1 bg-paper-200 dark:bg-[#151821] hover:bg-entity-philosopher hover:text-white border border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
                            >
                              Open {thinker.name} Dossier →
                            </button>
                            <span className="text-ink-500 dark:text-[#94A3B8] font-mono text-[10px]">
                              Epoch: {thinker.era}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>
        )}

        {/* VIEW 2: STANDARD DISCIPLINE BREAKDOWN */}
        {activeTab === 'stances' && (
          <div className="space-y-4 pt-2">
            <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
              Direct Dialectical Stances
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeQuestion.keyThinkers.map((item) => {
                const thinker = PHILOSOPHERS.find(p => p.id === item.philosopherId);
                if (!thinker) return null;

                return (
                  <div
                    key={thinker.id}
                    onClick={() => onSelectPhilosopher(thinker)}
                    className="p-4 bg-paper-100 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm hover:border-entity-philosopher cursor-pointer group transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8]">
                      <span className="font-bold text-entity-philosopher">● {thinker.name}</span>
                      <span>{thinker.displayDates}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-800 dark:text-[#F8FAFC] font-sans leading-relaxed">
                      {item.stance}
                    </p>
                    <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono">
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
        )}

        {/* Associated Concepts & Inquiries */}
        <div className="pt-4 border-t-2 border-ink-900/20 dark:border-[#2E3547] space-y-2">
          <span className="font-mono text-xs font-bold uppercase text-ink-700 dark:text-[#F8FAFC] block">
            {ENTITY_SYMBOLS.concept} Associated Conceptual Inquiries:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeQuestion.keyConceptIds.map(cId => {
              const concept = CONCEPTS.find(c => c.id === cId);
              return concept ? (
                <button
                  key={concept.id}
                  onClick={() => onSelectConcept(concept.id)}
                  className="px-3 py-1.5 bg-paper-100 dark:bg-[#1D222F] hover:bg-entity-idea hover:text-white border-2 border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase text-ink-900 dark:text-[#F8FAFC] transition-colors cursor-pointer"
                >
                  ◆ {concept.name} →
                </button>
              ) : null;
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
