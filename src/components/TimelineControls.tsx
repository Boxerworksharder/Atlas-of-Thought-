import React, { useState } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCcw, 
  Calendar, 
  Filter, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { ERAS, TRADITIONS, DOMAINS } from '../data/philosophyData';
import { Era, Tradition, Domain } from '../types/philosophy';

interface TimelineControlsProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitAll: () => void;
  onReset: () => void;
  onJumpToYear: (year: number) => void;
  selectedEra: Era | 'all';
  onSelectEra: (era: Era | 'all') => void;
  selectedTradition: Tradition | 'all';
  onSelectTradition: (tradition: Tradition | 'all') => void;
  selectedDomain: Domain | 'all';
  onSelectDomain: (domain: Domain | 'all') => void;
  isHybridMode: boolean;
  onToggleHybrid: () => void;
}

export const TimelineControls: React.FC<TimelineControlsProps> = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onFitAll,
  onReset,
  onJumpToYear,
  selectedEra,
  onSelectEra,
  selectedTradition,
  onSelectTradition,
  selectedDomain,
  onSelectDomain,
  isHybridMode,
  onToggleHybrid
}) => {
  const [yearInput, setYearInput] = useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const handleYearSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = yearInput.trim().toLowerCase();
    const match = clean.match(/^(-?\d+)(\s*(bce|bc|ce|ad))?$/i);
    if (match) {
      const num = parseInt(match[1], 10);
      const suffix = (match[3] || '').toLowerCase();
      const yr = (suffix === 'bce' || suffix === 'bc') ? -Math.abs(num) : num;
      onJumpToYear(yr);
      setYearInput('');
    }
  };

  return (
    <div className="bg-paper-100 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] px-3 sm:px-6 py-2.5 shadow-brutal-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Era Quick Buttons */}
        <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[11px] font-mono font-bold uppercase text-ink-600 dark:text-[#94A3B8] mr-1.5 hidden md:inline">
            Era:
          </span>
          <button
            onClick={() => onSelectEra('all')}
            className={`px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all shrink-0 ${
              selectedEra === 'all' 
                ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm' 
                : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
            }`}
          >
            All Eras
          </button>
          {ERAS.map((era) => (
            <button
              key={era.id}
              onClick={() => onSelectEra(era.id)}
              className={`px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all shrink-0 ${
                selectedEra === era.id 
                  ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm' 
                  : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
              }`}
            >
              {era.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Center: Jump to Year input */}
        <form onSubmit={handleYearSubmit} className="flex items-center space-x-1">
          <div className="relative flex items-center">
            <Calendar className="w-3.5 h-3.5 text-ink-500 dark:text-[#94A3B8] absolute left-2 pointer-events-none" />
            <input
              type="text"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              placeholder="Year (e.g. 384 BCE)"
              className="pl-7 pr-2 py-1 bg-paper-50 dark:bg-[#0C0E12] border-2 border-ink-900 dark:border-[#2E3547] text-ink-900 dark:text-[#F8FAFC] placeholder:text-ink-400 dark:placeholder:text-[#94A3B8]/50 text-xs font-mono w-28 sm:w-36 focus:outline-none focus:border-entity-philosopher"
            />
          </div>
          <button
            type="submit"
            className="brutal-btn px-2 py-1 text-xs font-bold"
            title="Jump to specific historical year"
          >
            JUMP
          </button>
        </form>

        {/* Right: Zoom & Mode Tools */}
        <div className="flex items-center space-x-1.5">
          {/* Hybrid Mode Toggle (Prompt Section 63) */}
          <button
            onClick={onToggleHybrid}
            className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all ${
              isHybridMode 
                ? 'bg-entity-philosopher text-white border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm' 
                : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-900 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F] shadow-brutal-sm'
            }`}
            title="Toggle Timeline + Graph Hybrid 2D View"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">HYBRID</span>
          </button>

          {/* Filter Dropdown trigger */}
          <button
            onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            className={`flex items-center space-x-1 px-2 py-1 text-xs font-mono font-bold uppercase border-2 ${
              selectedTradition !== 'all' || selectedDomain !== 'all'
                ? 'bg-entity-idea text-white border-ink-900 dark:border-[#F8FAFC]'
                : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-900 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
            }`}
            title="Filter by Tradition or Philosophical Domain"
          >
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden md:inline">FILTERS</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Zoom controls */}
          <div className="flex items-center border-2 border-ink-900 dark:border-[#2E3547] bg-paper-50 dark:bg-[#0C0E12] shadow-brutal-sm">
            <button
              onClick={onZoomOut}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-r border-ink-900 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]"
              title="Zoom Out (−)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 text-[11px] font-mono font-bold text-ink-800 dark:text-[#F8FAFC] select-none">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={onZoomIn}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-l border-ink-900 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onFitAll}
            className="brutal-btn p-1"
            title="Fit Entire Timeline"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onReset}
            className="brutal-btn p-1"
            title="Reset View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Filter Drawer */}
      {filterDrawerOpen && (
        <div className="mt-3 pt-3 border-t border-ink-900/20 dark:border-[#2E3547] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono animate-in slide-in-from-top-1 duration-150">
          <div>
            <div className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase mb-1.5 flex items-center justify-between">
              <span>Tradition Filter</span>
              {selectedTradition !== 'all' && (
                <button onClick={() => onSelectTradition('all')} className="text-[10px] text-entity-philosopher underline">Reset</button>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onSelectTradition('all')}
                className={`px-2 py-0.5 border ${selectedTradition === 'all' ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC]' : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900/30 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'}`}
              >
                All Traditions
              </button>
              {TRADITIONS.map(t => (
                <button
                  key={t}
                  onClick={() => onSelectTradition(t)}
                  className={`px-2 py-0.5 border ${selectedTradition === t ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC]' : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900/30 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase mb-1.5 flex items-center justify-between">
              <span>Domain Filter</span>
              {selectedDomain !== 'all' && (
                <button onClick={() => onSelectDomain('all')} className="text-[10px] text-entity-idea underline">Reset</button>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onSelectDomain('all')}
                className={`px-2 py-0.5 border ${selectedDomain === 'all' ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC]' : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900/30 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'}`}
              >
                All Domains
              </button>
              {DOMAINS.map(d => (
                <button
                  key={d}
                  onClick={() => onSelectDomain(d)}
                  className={`px-2 py-0.5 border ${selectedDomain === d ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC]' : 'bg-paper-50 dark:bg-[#0C0E12] text-ink-800 dark:text-[#CBD5E1] border-ink-900/30 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
