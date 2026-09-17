import React, { useState } from 'react';
import { ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { INDIAN_PHILOSOPHERS } from '../../data/indianPhilosophyData';
import { IndianTimelineTab } from './IndianTimelineTab';
import { IndianSchoolsTab } from './IndianSchoolsTab';
import { IndianVedantaTab } from './IndianVedantaTab';
import { IndianLogicTab } from './IndianLogicTab';
import { IndianProblemsTab } from './IndianProblemsTab';
import { IndianConceptsTab } from './IndianConceptsTab';
import { IndianDebatesTab } from './IndianDebatesTab';
import { IndianTextsTab } from './IndianTextsTab';
import { IndianComparativeTab } from './IndianComparativeTab';
import { IndianPhilosopherModal } from './IndianPhilosopherModal';
import { 
  Flame, 
  Clock, 
  BookOpen, 
  Layers, 
  Cpu, 
  HelpCircle, 
  Lightbulb, 
  Swords, 
  GitFork, 
  Scale
} from 'lucide-react';

export type IndianHubTab = 
  | 'timeline'
  | 'schools'
  | 'vedanta'
  | 'logic'
  | 'problems'
  | 'concepts'
  | 'debates'
  | 'texts'
  | 'comparative';

interface IndianPhilosophyHubViewProps {
  initialTab?: IndianHubTab;
  onNavigateGlobal?: (view: string) => void;
}

export const IndianPhilosophyHubView: React.FC<IndianPhilosophyHubViewProps> = ({
  initialTab = 'timeline',
  onNavigateGlobal: _onNavigateGlobal
}) => {
  const [activeTab, setActiveTab] = useState<IndianHubTab>(initialTab);
  const [scriptMode, setScriptMode] = useState<ScriptMode>('english');
  const [depthLevel, setDepthLevel] = useState<DepthLevel>('understand');
  const [selectedPhilosopherId, setSelectedPhilosopherId] = useState<string | null>(null);

  const selectedPhilosopher = selectedPhilosopherId 
    ? INDIAN_PHILOSOPHERS.find(p => p.id === selectedPhilosopherId) || null
    : null;

  const tabs: { id: IndianHubTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'timeline', label: 'Historical Layers', icon: <Clock className="w-4 h-4" /> },
    { id: 'schools', label: 'Schools of Thought', icon: <BookOpen className="w-4 h-4" />, badge: '12 Darśanas' },
    { id: 'vedanta', label: 'Vedānta Matrix', icon: <Layers className="w-4 h-4" />, badge: '10 Doctrines' },
    { id: 'logic', label: 'Logic & Pramāṇa', icon: <Cpu className="w-4 h-4" /> },
    { id: 'problems', label: 'The Core Problems', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'concepts', label: 'Concept Network', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'debates', label: 'Inter-School Debates', icon: <Swords className="w-4 h-4" /> },
    { id: 'texts', label: 'Primary Texts', icon: <GitFork className="w-4 h-4" /> },
    { id: 'comparative', label: 'Comparative Inquiry', icon: <Scale className="w-4 h-4" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 select-none">
      {/* Masthead Banner */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-100 dark:bg-[#1C1A16] border-3 border-ink-900 dark:border-[#2E3547] space-y-6 relative overflow-hidden">
        {/* Subtle decorative background label */}
        <div className="absolute right-4 -bottom-6 font-serif-title font-black text-7xl text-ink-900/5 dark:text-white/5 pointer-events-none select-none">
          दर्शन
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
              <Flame className="w-4 h-4" />
              <span>Independent Domain of World Philosophy</span>
              <span>•</span>
              <span>Bhāratīya Darśana (भारतीय दर्शन)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC] tracking-tight">
              Indian Philosophy Knowledge System
            </h1>

            <p className="text-sm sm:text-base font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
              An autonomous, deeply researched conceptual map of Indian intellectual traditions: Vedic, Brahmanical Āstika, Śramaṇa (Buddhist, Jain, Cārvāka), Śaiva-Śākta, and Modern. Structured according to its own indigenous epistemic categories, commentarial lineages, and dialectical disputations.
            </p>
          </div>

          {/* Controls Cluster: Script Mode & Depth Level */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {/* Script Selector */}
            <div className="p-2 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-50 dark:bg-[#1D222F] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275] block">
                Script / Transliteration:
              </span>
              <div className="flex gap-1">
                {(['english', 'iast', 'devanagari'] as ScriptMode[]).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setScriptMode(mode)}
                    className={`px-2 py-1 text-xs font-mono font-bold uppercase transition-all ${
                      scriptMode === mode
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-paper-100 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] hover:bg-paper-200'
                    }`}
                  >
                    {mode === 'english' ? 'English' : mode === 'iast' ? 'IAST' : 'संस्कृत'}
                  </button>
                ))}
              </div>
            </div>

            {/* Depth Level Switch */}
            <div className="p-2 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-50 dark:bg-[#1D222F] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275] block">
                Scholarly Depth Level:
              </span>
              <div className="flex gap-1">
                {[
                  { id: 'quick', label: 'L1: Quick' },
                  { id: 'understand', label: 'L2: Understand' },
                  { id: 'scholar', label: 'L3: Scholar' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDepthLevel(d.id as DepthLevel)}
                    className={`px-2 py-1 text-xs font-mono font-bold uppercase transition-all ${
                      depthLevel === d.id
                        ? 'bg-amber-700 text-white shadow-xs'
                        : 'bg-paper-100 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] hover:bg-paper-200'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Sub-Tabs */}
        <div className="border-t-2 border-ink-900 dark:border-[#2E3547] pt-4 -mx-2 sm:-mx-4 px-2 sm:px-4 overflow-x-auto">
          <div className="flex items-center space-x-2 min-w-max">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 text-xs font-mono font-bold uppercase flex items-center space-x-2 border-2 transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                      : 'bg-paper-50 dark:bg-[#151821] text-ink-800 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[9px] px-1 py-0.2 border ${
                      isActive 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tab Content View */}
      <div className="space-y-6">
        {activeTab === 'timeline' && (
          <IndianTimelineTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
            onSelectPhilosopher={(id) => setSelectedPhilosopherId(id)}
            onSelectSchool={(_id) => {
              setActiveTab('schools');
            }}
          />
        )}

        {activeTab === 'schools' && (
          <IndianSchoolsTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
            onSelectPhilosopher={(id) => setSelectedPhilosopherId(id)}
            onSelectSchool={(_id) => {
              // Can highlight or inspect
            }}
          />
        )}

        {activeTab === 'vedanta' && (
          <IndianVedantaTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
          />
        )}

        {activeTab === 'logic' && (
          <IndianLogicTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
          />
        )}

        {activeTab === 'problems' && (
          <IndianProblemsTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
            onSelectSchool={(_id) => {
              setActiveTab('schools');
            }}
          />
        )}

        {activeTab === 'concepts' && (
          <IndianConceptsTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
            onSelectSchool={(_id) => {
              setActiveTab('schools');
            }}
          />
        )}

        {activeTab === 'debates' && (
          <IndianDebatesTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
            onSelectPhilosopher={(id) => setSelectedPhilosopherId(id)}
            onSelectSchool={(_id) => {
              setActiveTab('schools');
            }}
          />
        )}

        {activeTab === 'texts' && (
          <IndianTextsTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
          />
        )}

        {activeTab === 'comparative' && (
          <IndianComparativeTab
            scriptMode={scriptMode}
            depthLevel={depthLevel}
          />
        )}
      </div>

      {/* Indian Philosopher Dossier Modal */}
      <IndianPhilosopherModal
        philosopher={selectedPhilosopher}
        isOpen={Boolean(selectedPhilosopher)}
        onClose={() => setSelectedPhilosopherId(null)}
        scriptMode={scriptMode}
        depthLevel={depthLevel}
        onSelectSchool={(_schoolId) => {
          setActiveTab('schools');
        }}
      />
    </div>
  );
};
