import React, { useState } from 'react';
import { INDIAN_SCHOOLS, INDIAN_PHILOSOPHERS } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm, getPramanaDisplayName } from '../../utils/indianPhilosophyUtils';
import { BookOpen, ShieldAlert, Sparkles, ExternalLink, HelpCircle, ArrowRight } from 'lucide-react';

interface IndianSchoolsTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
  onSelectPhilosopher: (id: string) => void;
  onSelectSchool?: (id: string) => void;
}

export const IndianSchoolsTab: React.FC<IndianSchoolsTabProps> = ({
  scriptMode,
  depthLevel,
  onSelectPhilosopher,
  onSelectSchool
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(INDIAN_SCHOOLS[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSchools = INDIAN_SCHOOLS.filter(school => {
    const matchesCategory = activeCategory === 'all' || school.category === activeCategory;
    const matchesSearch = 
      school.name.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.name.iast.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.name.devanagari.includes(searchTerm) ||
      school.quickSummary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedSchool = INDIAN_SCHOOLS.find(s => s.id === selectedSchoolId) || INDIAN_SCHOOLS[0];

  return (
    <div className="space-y-8">
      {/* Category Clarification Callout (Crucial for eliminating Western-colonial misreadings) */}
      <div className="p-5 border-2 border-amber-600 bg-amber-500/10 dark:bg-amber-950/20 space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-300">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>Foundational Taxonomy: The Meaning of Āstika vs Nāstika</span>
        </div>
        <p className="text-xs sm:text-sm font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
          <strong className="font-bold">Not Theism vs Atheism:</strong> In Indian philosophy, <em>Āstika</em> and <em>Nāstika</em> do not mean "theist" and "atheist". Rather, <strong>Āstika</strong> denotes traditions that acknowledge the epistemic validity and authority of the Vedas (<em>Veda-prāmāṇya</em>)—such as Nyāya, Sāṃkhya, and Mīmāṃsā—even though Sāṃkhya and early Mīmāṃsā reject a creator God. Conversely, <strong>Nāstika</strong> designates the non-Vedic Śramaṇa traditions (Buddhism, Jainism, and Cārvāka) that explicitly reject Vedic infallibility, ritual animal slaughter, and hereditary caste privilege.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Schools (Darśana)' },
            { id: 'astika', label: 'Āstika (Vedic / Orthodox)' },
            { id: 'nastika', label: 'Nāstika (Śramaṇa / Heterodox)' },
            { id: 'saiva-sakta', label: 'Tāntrika / Śaiva-Śākta' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                  : 'bg-paper-50 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search schools, doctrines..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1.5 text-xs font-mono bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] placeholder-ink-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Schools Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSchools.map(school => {
          const isSelected = school.id === selectedSchool.id;
          return (
            <div
              key={school.id}
              onClick={() => {
                setSelectedSchoolId(school.id);
                if (onSelectSchool) onSelectSchool(school.id);
              }}
              className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-600 dark:border-amber-500 shadow-brutal ring-2 ring-amber-500/20'
                  : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm hover:shadow-brutal'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-1">
                  <span className={`font-mono text-[10px] uppercase font-bold px-1.5 py-0.5 border ${
                    school.isAstika
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-600 dark:border-emerald-700'
                      : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-600 dark:border-indigo-700'
                  }`}>
                    {school.isAstika ? 'Āstika' : 'Nāstika'}
                  </span>
                  <span className="font-mono text-[10px] text-ink-500 dark:text-[#8C8275]">
                    {school.dateRange}
                  </span>
                </div>

                <h3 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                  {renderTerm(school.name, scriptMode)}
                </h3>

                {scriptMode !== 'english' && (
                  <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275]">
                    {school.name.english}
                  </div>
                )}

                <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {depthLevel === 'quick' ? school.quickSummary : school.understandOverview}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <span>{school.acceptedPramanas.length} Pramāṇas</span>
                <span>{isSelected ? '● Selected' : 'Explore →'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel for Selected School */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-8">
        {/* Header */}
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className={`font-mono text-xs uppercase font-bold px-2 py-0.5 border ${
                selectedSchool.isAstika
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-600 dark:border-emerald-700'
                  : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-600 dark:border-indigo-700'
              }`}>
                {selectedSchool.isAstika ? 'Āstika (Accepts Veda-prāmāṇya)' : 'Nāstika (Heterodox / Śramaṇa)'}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 bg-ink-900/5 dark:bg-white/10 text-ink-700 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                {selectedSchool.traditionClassification}
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
              {selectedSchool.historicalPeriod} • {selectedSchool.dateRange}
            </span>
          </div>

          <h2 className="text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {renderTerm(selectedSchool.name, scriptMode)}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
            <span>IAST: <em>{selectedSchool.name.iast}</em></span>
            <span>•</span>
            <span>Devanāgarī: <strong>{selectedSchool.name.devanagari}</strong></span>
            <span>•</span>
            <span>Foundational Text: <strong>{renderTerm(selectedSchool.primaryFoundationalText, scriptMode)}</strong></span>
            <span>•</span>
            <span>Founder: <strong>{renderTerm(selectedSchool.foundationalThinker, scriptMode)}</strong></span>
          </div>
        </div>

        {/* Epistemic Profile: Accepted Pramāṇas */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">
            Accepted Epistemic Instruments (Pramāṇas)
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedSchool.acceptedPramanas.map(p => (
              <span
                key={p}
                className="font-mono text-xs px-3 py-1 bg-amber-500/10 border border-amber-600 text-amber-900 dark:text-amber-300 font-bold"
              >
                ✓ {getPramanaDisplayName(p, scriptMode)}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pillars: Metaphysics, Epistemology, Ethics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border-2 border-ink-900/10 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Pillar 1</span>
            <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">Metaphysics (Tattva)</h4>
            <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
              {selectedSchool.coreMetaphysics}
            </p>
          </div>

          <div className="p-4 border-2 border-ink-900/10 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Pillar 2</span>
            <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">Epistemology (Pramāṇa)</h4>
            <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
              {selectedSchool.coreEpistemology}
            </p>
          </div>

          <div className="p-4 border-2 border-ink-900/10 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Pillar 3</span>
            <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">Ethics & Action (Dharma)</h4>
            <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
              {selectedSchool.coreEthics}
            </p>
          </div>
        </div>

        {/* Theory of Liberation (Mokṣa / Nirvāṇa / Apavarga) */}
        <div className="p-5 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#23201A] space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Theory of Liberation ({renderTerm(selectedSchool.liberationTheory.term, scriptMode)})</span>
          </div>
          <h4 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
            {selectedSchool.liberationTheory.natureOfLiberation}
          </h4>
          <p className="text-xs sm:text-sm font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
            {selectedSchool.liberationTheory.description}
          </p>
          <div className="pt-2">
            <span className="font-mono text-[11px] uppercase font-bold text-ink-500 dark:text-[#8C8275] block mb-1">
              Prescribed Means to Liberation (Sādhana):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedSchool.liberationTheory.means.map((m, idx) => (
                <span key={idx} className="font-mono text-xs px-2.5 py-0.5 bg-paper-50 dark:bg-[#151821] border border-ink-900/20 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]">
                  • {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Doctrines */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">
            Foundational Doctrines & Dialectical Oppositions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedSchool.keyDoctrines.map((doc, idx) => (
              <div key={idx} className="p-3 border border-ink-900/20 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-1.5">
                <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC]">
                  {renderTerm(doc.name, scriptMode)}
                </div>
                <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                  {doc.description}
                </p>
                <div className="text-[11px] font-mono text-rose-700 dark:text-rose-400">
                  ⚡ Opposes: {doc.opposes}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Representative Thinkers */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275]">
            Key Thinkers & Commentators
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedSchool.representativeThinkerIds.map(thinkerId => {
              const thinker = INDIAN_PHILOSOPHERS.find(p => p.id === thinkerId);
              if (!thinker) return null;
              return (
                <div
                  key={thinkerId}
                  onClick={() => onSelectPhilosopher(thinkerId)}
                  className="p-3 border border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] hover:border-amber-600 dark:hover:border-amber-500 cursor-pointer transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-amber-700 dark:group-hover:text-amber-400 flex items-center justify-between">
                      <span>{renderTerm(thinker.name, scriptMode)}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    </div>
                    <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275]">
                      {thinker.displayDates}
                    </div>
                    <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1] line-clamp-2">
                      {thinker.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Anti-Anachronism Warning Note */}
        <div className="p-4 border-2 border-rose-600/30 bg-rose-50/50 dark:bg-rose-950/20 space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-rose-800 dark:text-rose-300">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Anti-Anachronism Qualification: {selectedSchool.antiAnachronismNote.modernComparison}</span>
          </div>
          <p className="text-xs font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
            {selectedSchool.antiAnachronismNote.historicalQualification}
          </p>
        </div>

        {/* Scholar Depth Layer (Level 3) */}
        {depthLevel === 'scholar' && (
          <div className="p-5 border-2 border-dashed border-ink-900/30 dark:border-[#2E3547] bg-paper-100 dark:bg-[#23201A] space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
              <BookOpen className="w-4 h-4" />
              <span>Level 3 Scholar Layer: Textual Genealogy & Critical Controversies</span>
            </div>

            <div className="space-y-2 text-xs font-sans">
              <div className="font-mono text-[11px] font-bold text-ink-500 dark:text-[#8C8275]">
                TEXTUAL TRADITION:
              </div>
              <p className="text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
                {selectedSchool.scholarDetails.textualTradition}
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[11px] font-bold text-ink-500 dark:text-[#8C8275]">
                COMMENTARIAL CHAIN:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedSchool.scholarDetails.commentarialChain.map((comm, idx) => (
                  <span key={idx} className="font-mono text-xs px-2.5 py-1 bg-paper-50 dark:bg-[#151821] border border-ink-900/20 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]">
                    {comm}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[11px] font-bold text-ink-500 dark:text-[#8C8275]">
                SCHOLARLY CONTROVERSIES:
              </div>
              <ul className="space-y-1 text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                {selectedSchool.scholarDetails.scholarlyControversies.map((contro, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{contro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedSchool.scholarDetails.sepCitations.length > 0 && (
              <div className="pt-2 border-t border-ink-900/10 dark:border-[#2E3547]">
                <div className="font-mono text-[11px] font-bold text-ink-500 dark:text-[#8C8275] mb-1">
                  STANFORD ENCYCLOPEDIA OF PHILOSOPHY (SEP) ENTRIES:
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedSchool.scholarDetails.sepCitations.map((cite, idx) => (
                    <a
                      key={idx}
                      href={cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      <span>{cite.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
