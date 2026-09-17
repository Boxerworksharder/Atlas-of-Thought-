import React, { useState } from 'react';
import { 
  PHILOSOPHERS, 
  CONCEPTS, 
  SCHOOLS, 
  ERAS 
} from '../data/philosophyData';
import { Philosopher } from '../types/philosophy';
import { Users, Lightbulb, BookOpen, Clock, Search, ArrowRight } from 'lucide-react';

interface ExploreCatalogViewProps {
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectConcept: (id: string) => void;
  onSelectSchool: (id: string) => void;
}

export const ExploreCatalogView: React.FC<ExploreCatalogViewProps> = ({
  onSelectPhilosopher,
  onSelectConcept,
  onSelectSchool
}) => {
  const [activeTab, setActiveTab] = useState<'philosophers' | 'ideas' | 'schools' | 'eras'>('philosophers');
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase().trim();

  const filteredPhilosophers = PHILOSOPHERS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.tradition.toLowerCase().includes(q) ||
    p.domains.some(d => d.toLowerCase().includes(q))
  );

  const filteredConcepts = CONCEPTS.filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.theQuestion.toLowerCase().includes(q) ||
    c.domain.some(d => d.toLowerCase().includes(q))
  );

  const filteredSchools = SCHOOLS.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.tradition.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-ink-900 dark:border-[#2E3547] pb-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase text-entity-philosopher tracking-wider block">
            Comprehensive Archival Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            Explore All Entities
          </h1>
          <p className="text-xs sm:text-sm font-sans text-ink-700 dark:text-[#CBD5E1]">
            Search and browse the complete index of thinkers, concepts, schools, and eras.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-ink-500 dark:text-[#94A3B8] absolute left-3 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter catalog..."
            className="w-full pl-9 pr-3 py-2 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] placeholder:text-ink-400 dark:placeholder:text-[#64748B] text-xs font-mono focus:outline-none"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b-2 border-ink-900 dark:border-[#2E3547] pb-1 font-mono text-xs overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('philosophers')}
          className={`flex items-center space-x-1.5 px-4 py-2 uppercase font-bold border-2 transition-all ${
            activeTab === 'philosophers' 
              ? 'bg-entity-philosopher text-white border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm' 
              : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Philosophers ({filteredPhilosophers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('ideas')}
          className={`flex items-center space-x-1.5 px-4 py-2 uppercase font-bold border-2 transition-all ${
            activeTab === 'ideas' 
              ? 'bg-entity-idea text-white border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm' 
              : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Concepts & Ideas ({filteredConcepts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('schools')}
          className={`flex items-center space-x-1.5 px-4 py-2 uppercase font-bold border-2 transition-all ${
            activeTab === 'schools' 
              ? 'bg-entity-school text-white border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm' 
              : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Schools ({filteredSchools.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('eras')}
          className={`flex items-center space-x-1.5 px-4 py-2 uppercase font-bold border-2 transition-all ${
            activeTab === 'eras' 
              ? 'bg-ink-900 dark:bg-[#1D222F] text-white border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm' 
              : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Eras ({ERAS.length})</span>
        </button>
      </div>

      {/* Grid Content */}
      <div>
        {activeTab === 'philosophers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhilosophers.map(p => (
              <div
                key={p.id}
                onClick={() => onSelectPhilosopher(p)}
                className="brutal-card p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm cursor-pointer group flex flex-col justify-between space-y-2 hover:border-entity-philosopher dark:hover:border-entity-philosopher"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8] mb-1">
                    <span className="font-bold text-entity-philosopher">{p.displayDates}</span>
                    <span className="bg-paper-300 dark:bg-[#1D222F] px-1 border border-ink-900/20 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]">{p.tradition}</span>
                  </div>
                  <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-ink-600 dark:text-[#94A3B8] line-clamp-2 mt-1 font-sans">
                    {p.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-ink-600 dark:text-[#94A3B8]">{p.region}</span>
                  <span className="text-entity-philosopher font-bold flex items-center">
                    <span>View Dossier</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ideas' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConcepts.map(c => (
              <div
                key={c.id}
                onClick={() => onSelectConcept(c.id)}
                className="brutal-card p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm cursor-pointer group flex flex-col justify-between space-y-2 hover:border-entity-idea dark:hover:border-entity-idea"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase text-entity-idea bg-entity-idea/10 dark:bg-entity-idea/20 px-1.5 py-0.5 border border-entity-idea/30">
                    {c.domain[0]}
                  </span>
                  <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-idea transition-colors mt-1.5">
                    {c.name}
                  </h3>
                  <p className="text-xs text-ink-600 dark:text-[#94A3B8] line-clamp-2 mt-1 font-sans">
                    {c.theQuestion}
                  </p>
                </div>

                <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono text-entity-idea font-bold">
                  <span>{c.historicalDevelopment.length} Epochs</span>
                  <span className="flex items-center">
                    <span>Follow Idea</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schools' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSchools.map(s => (
              <div
                key={s.id}
                onClick={() => onSelectSchool(s.id)}
                className="brutal-card p-4 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm cursor-pointer group flex flex-col justify-between space-y-2 hover:border-entity-school dark:hover:border-entity-school"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8] mb-1">
                    <span className="font-bold text-entity-school">{s.tradition}</span>
                    <span className="text-ink-500 dark:text-[#94A3B8]">{s.period}</span>
                  </div>
                  <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-school transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-ink-600 dark:text-[#94A3B8] line-clamp-2 mt-1 font-sans">
                    {s.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono text-entity-school font-bold">
                  <span>{s.philosophers.length} Thinkers</span>
                  <span className="flex items-center">
                    <span>View Tradition</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'eras' && (
          <div className="space-y-4">
            {ERAS.map(era => (
              <div key={era.id} className="brutal-card p-6 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-brutal-dark-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-title font-bold text-xl text-ink-900 dark:text-[#F8FAFC]">
                    {era.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-entity-philosopher px-2 py-0.5 bg-paper-200 dark:bg-[#1D222F] border border-ink-900 dark:border-[#2E3547]">
                    {era.timeRange}
                  </span>
                </div>
                <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                  {era.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
