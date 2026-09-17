import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Clock, 
  Share2, 
  Lightbulb, 
  Users, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  Calendar,
  Layers,
  Moon,
  Sun,
  Flame
} from 'lucide-react';
import { 
  PHILOSOPHERS, 
  CONCEPTS, 
  SCHOOLS, 
  BIG_QUESTIONS 
} from '../data/philosophyData';
import { INDIAN_SCHOOLS } from '../data/indianPhilosophyData';
import { ViewMode, ENTITY_SYMBOLS } from '../types/philosophy';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPhilosopher: (id: string) => void;
  onSelectConcept: (id: string) => void;
  onSelectSchool: (id: string) => void;
  onSelectQuestion: (id: string) => void;
  onSelectView: (view: ViewMode) => void;
  onJumpToYear: (year: number) => void;
  onSurpriseMe: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectPhilosopher,
  onSelectConcept,
  onSelectSchool,
  onSelectQuestion,
  onSelectView,
  onJumpToYear,
  onSurpriseMe,
  theme,
  onToggleTheme
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Check if query is a year (e.g. "384 bce", "-428", "1781", "1900")
  const yearMatch = q.match(/^(-?\d+)(\s*(bce|bc|ce|ad))?$/i);
  let parsedYear: number | null = null;
  if (yearMatch) {
    const num = parseInt(yearMatch[1], 10);
    const suffix = (yearMatch[3] || '').toLowerCase();
    if (suffix === 'bce' || suffix === 'bc') {
      parsedYear = -Math.abs(num);
    } else {
      parsedYear = num;
    }
  }

  // Filter entities
  const matchingPhilosophers = q
    ? PHILOSOPHERS.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.nativeName && p.nativeName.toLowerCase().includes(q)) ||
        p.tradition.toLowerCase().includes(q) ||
        p.domains.some(d => d.toLowerCase().includes(q))
      ).slice(0, 5)
    : PHILOSOPHERS.slice(0, 4);

  const matchingConcepts = q
    ? CONCEPTS.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.theQuestion.toLowerCase().includes(q) ||
        c.domain.some(d => d.toLowerCase().includes(q))
      ).slice(0, 5)
    : CONCEPTS.slice(0, 4);

  const matchingSchools = q
    ? SCHOOLS.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.tradition.toLowerCase().includes(q)
      ).slice(0, 4)
    : SCHOOLS.slice(0, 3);

  const matchingQuestions = q
    ? BIG_QUESTIONS.filter(bq => 
        bq.question.toLowerCase().includes(q) || 
        bq.coreProblem.toLowerCase().includes(q)
      ).slice(0, 3)
    : BIG_QUESTIONS.slice(0, 3);

  const matchingIndianSchools = q
    ? INDIAN_SCHOOLS.filter(is_ =>
        is_.name.english.toLowerCase().includes(q) ||
        is_.name.iast.toLowerCase().includes(q) ||
        is_.quickSummary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-ink-950/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-100">
      
      <div 
        className="w-full max-w-2xl bg-paper-100 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-xl dark:shadow-brutal-dark-xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b-2 border-ink-900 dark:border-[#2E3547] bg-paper-50 dark:bg-[#11131A]">
          <Search className="w-5 h-5 text-ink-600 dark:text-[#94A3B8] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search thinkers, ideas, schools, questions, or enter a year (e.g. 428 BCE)..."
            className="w-full bg-transparent text-ink-900 dark:text-[#F8FAFC] placeholder:text-ink-500 dark:placeholder:text-[#64748B] text-sm sm:text-base font-sans focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] text-ink-600 dark:text-[#94A3B8]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-3 px-1.5 py-0.5 bg-paper-300 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] text-xs font-mono border border-ink-900/30 dark:border-[#2E3547]">
            ESC
          </kbd>
        </div>

        {/* Quick Nav / Commands */}
        {!query && (
          <div className="px-4 py-2 bg-paper-200 dark:bg-[#1D222F] border-b border-ink-900/20 dark:border-[#2E3547] flex flex-wrap gap-1.5 text-xs font-mono">
            <span className="text-ink-600 dark:text-[#94A3B8] font-semibold uppercase py-0.5">Jump to:</span>
            <button 
              onClick={() => { onSelectView('timeline'); onClose(); }}
              className="px-2 py-0.5 bg-paper-100 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:bg-ink-900 hover:text-white dark:hover:bg-[#F8FAFC] dark:hover:text-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] flex items-center space-x-1"
            >
              <Clock className="w-3 h-3" />
              <span>Timeline</span>
            </button>
            <button 
              onClick={() => { onSelectView('graph'); onClose(); }}
              className="px-2 py-0.5 bg-paper-100 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:bg-ink-900 hover:text-white dark:hover:bg-[#F8FAFC] dark:hover:text-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] flex items-center space-x-1"
            >
              <Share2 className="w-3 h-3" />
              <span>Graph</span>
            </button>
            <button 
              onClick={() => { onSelectView('hybrid'); onClose(); }}
              className="px-2 py-0.5 bg-paper-100 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:bg-ink-900 hover:text-white dark:hover:bg-[#F8FAFC] dark:hover:text-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] flex items-center space-x-1"
            >
              <Layers className="w-3 h-3" />
              <span>Hybrid</span>
            </button>
            <button 
              onClick={() => { onSelectView('indian'); onClose(); }}
              className="px-2 py-0.5 bg-amber-500/15 border border-amber-600 dark:border-amber-500 text-amber-900 dark:text-amber-300 hover:bg-amber-600 hover:text-white flex items-center space-x-1 font-bold"
            >
              <Flame className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span>Indian Phil</span>
            </button>
            {onToggleTheme && (
              <button 
                onClick={() => { onToggleTheme(); onClose(); }}
                className="px-2 py-0.5 bg-paper-100 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:bg-ink-900 hover:text-white dark:hover:bg-[#F8FAFC] dark:hover:text-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] flex items-center space-x-1"
              >
                {theme === 'dark' ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            )}
            <button 
              onClick={() => { onSurpriseMe(); onClose(); }}
              className="px-2 py-0.5 bg-entity-school text-white border border-ink-900 dark:border-[#2E3547] hover:opacity-90 flex items-center space-x-1 ml-auto"
            >
              <Sparkles className="w-3 h-3" />
              <span>Random</span>
            </button>
          </div>
        )}

        {/* Educational Suggestions when empty */}
        {!query && (
          <div className="px-4 py-2.5 bg-paper-50 dark:bg-[#11131A] border-b border-ink-900/10 dark:border-[#2E3547] text-xs font-mono space-y-1.5">
            <span className="text-ink-500 dark:text-[#94A3B8] uppercase text-[10px] tracking-wider font-bold block">
              Scholarly Prompts / Canonical Seeds:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: '● Plato', q: 'Plato' },
                { label: '◆ Bundle Theory', q: 'Bundle Theory' },
                { label: '■ Stoicism', q: 'Stoicism' },
                { label: '? Consciousness', q: 'Consciousness' },
                { label: '● Śaṅkara', q: 'Shankara' },
                { label: '◷ 384 BCE', q: '384 BCE' },
                { label: '◆ Anattā', q: 'Anatta' },
                { label: '■ Advaita', q: 'Advaita' }
              ].map(seed => (
                <button
                  key={seed.label}
                  onClick={() => setQuery(seed.q)}
                  className="px-2 py-0.5 bg-paper-200 dark:bg-[#1D222F] text-ink-900 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547] hover:border-entity-idea hover:text-entity-idea transition-colors cursor-pointer text-[11px]"
                >
                  {seed.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4">
          
          {/* Jump to year action if detected */}
          {parsedYear !== null && (
            <div 
              onClick={() => {
                if (parsedYear !== null) onJumpToYear(parsedYear);
                onClose();
              }}
              className="p-3 bg-entity-idea/10 border-2 border-entity-idea hover:bg-entity-idea/20 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-entity-idea" />
                <div>
                  <div className="font-mono text-xs text-entity-idea font-bold uppercase">Jump to Timeline Year</div>
                  <div className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
                    {parsedYear < 0 ? `${Math.abs(parsedYear)} BCE` : `${parsedYear} CE`}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-entity-idea" />
            </div>
          )}

          {/* Philosophers */}
          {matchingPhilosophers.length > 0 && (
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-entity-philosopher font-bold mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>{ENTITY_SYMBOLS.philosopher} Philosophers (Thinker Nodes)</span>
                </span>
                <span className="text-ink-500 dark:text-[#94A3B8] font-normal">{matchingPhilosophers.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingPhilosophers.map(p => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectPhilosopher(p.id);
                      onClose();
                    }}
                    className="p-2.5 bg-paper-50 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:border-entity-philosopher hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher">
                          ● {p.name}
                        </span>
                        {p.nativeName && (
                          <span className="text-xs text-ink-500 dark:text-[#94A3B8] font-sans">({p.nativeName})</span>
                        )}
                        <span className="font-mono text-[10px] text-ink-600 dark:text-[#94A3B8] bg-paper-300 dark:bg-[#1D222F] px-1 border border-ink-900/10 dark:border-[#2E3547]">
                          {p.displayDates}
                        </span>
                      </div>
                      <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5">{p.summary}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-paper-300 dark:bg-[#1D222F] text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547] shrink-0 ml-2">
                      {p.tradition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concepts / Ideas */}
          {matchingConcepts.length > 0 && (
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-entity-idea font-bold mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{ENTITY_SYMBOLS.concept} Concepts & Inquiries</span>
                </span>
                <span className="text-ink-500 dark:text-[#94A3B8] font-normal">{matchingConcepts.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingConcepts.map(c => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onSelectConcept(c.id);
                      onClose();
                    }}
                    className="p-2.5 bg-paper-50 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:border-entity-idea hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-idea">
                          ◆ {c.name}
                        </span>
                        <span className="font-mono text-[10px] text-entity-idea font-semibold uppercase">
                          [{c.domain[0]}]
                        </span>
                      </div>
                      <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5">{c.theQuestion}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-ink-400 dark:text-[#94A3B8] shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schools */}
          {matchingSchools.length > 0 && (
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-entity-school font-bold mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{ENTITY_SYMBOLS.school} Schools & Movements</span>
                </span>
                <span className="text-ink-500 dark:text-[#94A3B8] font-normal">{matchingSchools.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingSchools.map(s => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onSelectSchool(s.id);
                      onClose();
                    }}
                    className="p-2.5 bg-paper-50 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:border-entity-school hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-school">
                          ■ {s.name}
                        </span>
                        <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">{s.period}</span>
                      </div>
                      <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5">{s.summary}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-paper-300 dark:bg-[#1D222F] text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547] shrink-0 ml-2">
                      {s.tradition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Indian Philosophy Darśanas */}
          {matchingIndianSchools.length > 0 && (
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>■ Indian Philosophy (Darśana)</span>
                </span>
                <span className="text-ink-500 dark:text-[#94A3B8] font-normal">{matchingIndianSchools.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingIndianSchools.map(is_ => (
                  <div
                    key={is_.id}
                    onClick={() => {
                      onSelectView('indian');
                      onClose();
                    }}
                    className="p-2.5 bg-amber-50/50 dark:bg-[#1D222F]/60 border border-amber-600/40 dark:border-amber-500/40 hover:border-amber-600 cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-amber-700 dark:group-hover:text-amber-400">
                          ■ {is_.name.english}
                        </span>
                        <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-bold">({is_.name.iast})</span>
                        <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">{is_.dateRange}</span>
                      </div>
                      <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5">{is_.quickSummary}</p>
                    </div>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 border shrink-0 ml-2 ${
                      is_.isAstika 
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-600'
                        : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-600'
                    }`}>
                      {is_.isAstika ? 'Āstika' : 'Nāstika'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Big Questions */}
          {matchingQuestions.length > 0 && (
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-entity-question font-bold mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{ENTITY_SYMBOLS.question} Big Questions</span>
                </span>
              </div>
              <div className="space-y-1.5">
                {matchingQuestions.map(bq => (
                  <div
                    key={bq.id}
                    onClick={() => {
                      onSelectQuestion(bq.id);
                      onClose();
                    }}
                    className="p-2.5 bg-paper-50 dark:bg-[#151821] border border-ink-900 dark:border-[#2E3547] hover:border-entity-question hover:bg-paper-200 dark:hover:bg-[#1D222F] cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <span className="font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-question">
                        ? {bq.question}
                      </span>
                      <p className="text-xs text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5">{bq.subtitle}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-entity-question/10 text-entity-question border border-entity-question/30 shrink-0 ml-2">
                      {bq.domain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {matchingPhilosophers.length === 0 && matchingConcepts.length === 0 && matchingSchools.length === 0 && matchingIndianSchools.length === 0 && matchingQuestions.length === 0 && (
            <div className="p-8 text-center bg-paper-200 dark:bg-[#151821] border-2 border-dashed border-ink-900/30 dark:border-[#2E3547] space-y-2">
              <p className="font-serif-title font-bold text-lg text-ink-800 dark:text-[#F8FAFC]">
                No Archival Entries Found for "{query}"
              </p>
              <p className="text-xs text-ink-600 dark:text-[#94A3B8] font-sans max-w-md mx-auto leading-relaxed">
                Try searching canonical thinkers (e.g., <em>Plato, Spinoza, Śaṅkara, Hume</em>), key concepts (e.g., <em>Forms, Anattā, Cogito</em>), or enter a calendar year like <strong>384 BCE</strong> or <strong>1781</strong>.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-paper-200 dark:bg-[#1D222F] border-t-2 border-ink-900 dark:border-[#2E3547] flex items-center justify-between text-[11px] font-mono text-ink-600 dark:text-[#94A3B8]">
          <div>
            Stanford Encyclopedia of Philosophy (SEP) reference layer enabled
          </div>
          <div className="flex items-center space-x-3">
            <span>Navigate: <kbd className="bg-paper-300 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] px-1 border border-ink-900/30 dark:border-[#2E3547]">↑↓</kbd></span>
            <span>Select: <kbd className="bg-paper-300 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] px-1 border border-ink-900/30 dark:border-[#2E3547]">↵</kbd></span>
          </div>
        </div>

      </div>

    </div>
  );
};
