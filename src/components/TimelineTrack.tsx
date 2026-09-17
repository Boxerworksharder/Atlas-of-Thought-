import React, { useRef, useState, useEffect, useMemo } from 'react';
import { 
  PHILOSOPHERS, 
  ERAS 
} from '../data/philosophyData';
import { Philosopher, Era, Tradition, Domain } from '../types/philosophy';
import { ArrowRight } from 'lucide-react';

interface TimelineTrackProps {
  zoomLevel: number;
  selectedEra: Era | 'all';
  selectedTradition: Tradition | 'all';
  selectedDomain: Domain | 'all';
  selectedPhilosopher: Philosopher | null;
  onSelectPhilosopher: (p: Philosopher) => void;
  targetYear: number | null;
  onClearTargetYear: () => void;
}

export const TimelineTrack: React.FC<TimelineTrackProps> = ({
  zoomLevel,
  selectedEra,
  selectedTradition,
  selectedDomain,
  selectedPhilosopher,
  onSelectPhilosopher,
  targetYear,
  onClearTargetYear
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hoveredPhilosopher, setHoveredPhilosopher] = useState<Philosopher | null>(null);

  // Time boundaries
  const MIN_YEAR = -600;
  const MAX_YEAR = 2026;
  const TOTAL_YEARS = MAX_YEAR - MIN_YEAR;

  // Base width scaled by zoom
  const baseWidth = 5600 * zoomLevel;

  // Filter philosophers
  const filteredPhilosophers = PHILOSOPHERS.filter(p => {
    if (selectedEra !== 'all' && p.era !== selectedEra) return false;
    if (selectedTradition !== 'all' && p.tradition !== selectedTradition) return false;
    if (selectedDomain !== 'all' && !p.domains.includes(selectedDomain)) return false;
    return true;
  });

  // Convert year to pixel position
  const yearToPixel = (year: number) => {
    const fraction = (year - MIN_YEAR) / TOTAL_YEARS;
    return Math.max(80, Math.min(baseWidth - 280, fraction * baseWidth));
  };

  // Greedy lane allocation: distributes cards into 6 lanes with collision avoidance
  const philosopherLanes = useMemo(() => {
    const CARD_WIDTH = 264;
    const MIN_PADDING = 20;
    const NUM_LANES = 6;
    const laneOccupiedUntil: number[] = new Array(NUM_LANES).fill(-Infinity);
    const lanes: Record<string, number> = {};

    const sorted = [...filteredPhilosophers].sort((a, b) => a.birthYear - b.birthYear);

    for (const p of sorted) {
      const x = yearToPixel(p.birthYear);
      let chosenLane = -1;

      // 1. Prioritize any lane that has never been used yet to spread cards across all 6 lanes
      const emptyLane = laneOccupiedUntil.findIndex(o => o === -Infinity);
      if (emptyLane !== -1) {
        chosenLane = emptyLane;
      } else {
        // 2. Select the lane offering the maximum horizontal breathing room (largest gap)
        let maxGap = -Infinity;
        for (let l = 0; l < NUM_LANES; l++) {
          const gap = x - laneOccupiedUntil[l];
          if (gap >= MIN_PADDING && gap > maxGap) {
            maxGap = gap;
            chosenLane = l;
          }
        }
      }

      // 3. Fallback: if all lanes overlap, choose the lane with earliest clearance
      if (chosenLane === -1) {
        let minX = Infinity;
        let bestLane = 0;
        for (let l = 0; l < NUM_LANES; l++) {
          if (laneOccupiedUntil[l] < minX) {
            minX = laneOccupiedUntil[l];
            bestLane = l;
          }
        }
        chosenLane = bestLane;
      }

      lanes[p.id] = chosenLane;
      laneOccupiedUntil[chosenLane] = Math.max(x + CARD_WIDTH, laneOccupiedUntil[chosenLane]);
    }

    return lanes;
  }, [filteredPhilosophers, baseWidth]);

  const getLane = (id: string) => {
    return philosopherLanes[id] ?? 0;
  };

  // Jump to specific year or era when requested
  useEffect(() => {
    if (targetYear !== null && containerRef.current) {
      const px = yearToPixel(targetYear);
      containerRef.current.scrollTo({
        left: px - containerRef.current.clientWidth / 2,
        behavior: 'smooth'
      });
      onClearTargetYear();
    }
  }, [targetYear, zoomLevel]);

  // Mouse Drag to Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Century tick marks for the chronological ruler
  const centuries: number[] = [];
  for (let y = -500; y <= 2000; y += (zoomLevel > 1.2 ? 50 : 100)) {
    centuries.push(y);
  }

  // Active highlighted connections
  const activePhilosopher = hoveredPhilosopher || selectedPhilosopher;
  const connectedIds = new Set<string>();
  if (activePhilosopher) {
    activePhilosopher.influences.forEach(id => connectedIds.add(id));
    activePhilosopher.influenced.forEach(id => connectedIds.add(id));
  }

  return (
    <div className="w-full select-none">
      
      {/* DESKTOP / TABLET HORIZONTAL TIMELINE */}
      <div className="hidden md:block relative bg-paper-200 dark:bg-[#0C0E12] border-b-2 border-ink-900 dark:border-[#2E3547] overflow-hidden">
        
        {/* Scroll Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`overflow-x-auto overflow-y-hidden cursor-${isDragging ? 'grabbing' : 'grab'} no-scrollbar relative h-[710px]`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {/* Inner Canvas Track */}
          <div 
            className="relative h-full"
            style={{ width: `${baseWidth}px` }}
          >
            {/* Era Background Banners */}
            {ERAS.map((era) => {
              const startX = yearToPixel(era.startYear);
              const endX = yearToPixel(era.endYear);
              const eraWidth = Math.max(120, endX - startX);
              const isCurrentEra = selectedEra === era.id;

              return (
                <div
                  key={era.id}
                  className={`absolute top-0 bottom-0 border-r border-ink-900/20 dark:border-[#2E3547] px-3 pt-2 pointer-events-none transition-colors ${
                    isCurrentEra ? 'bg-entity-philosopher/5 dark:bg-entity-philosopher/10' : 'bg-transparent'
                  }`}
                  style={{ left: `${startX}px`, width: `${eraWidth}px` }}
                >
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif-title font-bold text-xs uppercase tracking-wider text-ink-700 dark:text-[#F8FAFC]">
                      {era.name}
                    </span>
                    <span className="font-mono text-[10px] text-ink-500 dark:text-[#94A3B8]">
                      {era.timeRange}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* SVG Connection Arcs */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ width: `${baseWidth}px` }}
            >
              <defs>
                <marker
                  id="timeline-arrow"
                  viewBox="0 0 10 10"
                  refX="16"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" className="text-ink-900 dark:text-[#F8FAFC]" />
                </marker>
                <marker
                  id="timeline-arrow-active"
                  viewBox="0 0 10 10"
                  refX="16"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#B93828" />
                </marker>
              </defs>

              {/* Render influence lines */}
              {activePhilosopher && filteredPhilosophers.map(targetP => {
                if (targetP.id === activePhilosopher.id) return null;
                const isInfluenced = activePhilosopher.influenced.includes(targetP.id);
                const isInfluencing = activePhilosopher.influences.includes(targetP.id);
                if (!isInfluenced && !isInfluencing) return null;

                const sourceP = isInfluenced ? activePhilosopher : targetP;
                const destP = isInfluenced ? targetP : activePhilosopher;

                const srcLane = getLane(sourceP.id);
                const destLane = getLane(destP.id);
                const LANE_HEIGHT = 104;

                const x1 = yearToPixel(sourceP.birthYear) + 120;
                const y1 = 76 + srcLane * LANE_HEIGHT + 44;
                const x2 = yearToPixel(destP.birthYear) + 15;
                const y2 = 76 + destLane * LANE_HEIGHT + 44;

                const midX = (x1 + x2) / 2;
                const controlY = Math.min(y1, y2) - 40;

                return (
                  <path
                    key={`conn-${sourceP.id}-${destP.id}`}
                    d={`M ${x1} ${y1} Q ${midX} ${controlY}, ${x2} ${y2}`}
                    fill="none"
                    stroke="#B93828"
                    strokeWidth="2"
                    strokeDasharray={isInfluenced ? 'none' : '4 3'}
                    markerEnd="url(#timeline-arrow-active)"
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Ruler Axis Bar (Top) */}
            <div className="sticky top-0 z-20 h-10 bg-paper-100 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm flex items-center">
              {centuries.map((yr) => {
                const x = yearToPixel(yr);
                const label = yr < 0 ? `${Math.abs(yr)} BCE` : yr === 0 ? '1 CE' : `${yr} CE`;
                return (
                  <div
                    key={yr}
                    className="absolute flex flex-col items-start"
                    style={{ left: `${x}px` }}
                  >
                    <div className="h-3 w-[1.5px] bg-ink-900 dark:bg-[#F8FAFC]" />
                    <span className="font-mono text-[10px] font-bold text-ink-700 dark:text-[#CBD5E1] tracking-wider -ml-2 select-none">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Philosopher Node Cards */}
            <div className="relative z-20 h-full pt-14">
              {filteredPhilosophers.map((p) => {
                const x = yearToPixel(p.birthYear);
                const lane = getLane(p.id);
                const y = 20 + lane * 104;
                const isSelected = selectedPhilosopher?.id === p.id;
                const isHovered = hoveredPhilosopher?.id === p.id;
                const isConnected = activePhilosopher && connectedIds.has(p.id);
                const isDimmed = activePhilosopher && !isSelected && !isHovered && !isConnected;

                return (
                  <div
                    key={p.id}
                    onClick={() => onSelectPhilosopher(p)}
                    onMouseEnter={() => setHoveredPhilosopher(p)}
                    onMouseLeave={() => setHoveredPhilosopher(null)}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      opacity: isDimmed ? 0.35 : 1,
                      transform: isSelected || isHovered ? 'translateY(-3px)' : 'none'
                    }}
                    className={`absolute w-60 sm:w-64 border-2 p-2.5 cursor-pointer transition-all duration-150 group ${
                      isSelected 
                        ? 'border-entity-philosopher shadow-brutal ring-2 ring-entity-philosopher/40 bg-paper-100 dark:bg-[#1D222F] z-30' 
                        : isHovered || isConnected
                        ? 'border-ink-900 dark:border-[#F8FAFC] shadow-brutal-md bg-paper-100 dark:bg-[#1D222F] z-20'
                        : 'shadow-brutal-sm hover:shadow-brutal bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547]'
                    }`}
                  >
                    {/* Top Row: Dates & Tradition */}
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider mb-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-entity-philosopher">
                          ● {p.displayDates}
                        </span>
                        {p.dateUncertainty && (
                          <span className={`px-1 py-0.2 text-[8px] font-bold border ${
                            p.dateUncertainty === 'ESTABLISHED'
                              ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/30'
                              : p.dateUncertainty === 'PROBABLE'
                              ? 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/30'
                              : 'bg-rose-500/10 text-rose-800 dark:text-rose-400 border-rose-500/30'
                          }`}>
                            ◎ {p.dateUncertainty}
                          </span>
                        )}
                      </div>
                      <span className="px-1 bg-paper-300 dark:bg-[#1D222F] text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                        {p.tradition}
                      </span>
                    </div>

                    {/* Middle Row: Name & Native Script */}
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher transition-colors truncate">
                        {p.name}
                      </h4>
                      {p.nativeName && (
                        <span className="text-[10px] text-ink-500 dark:text-[#94A3B8] font-sans ml-1 shrink-0">
                          {p.nativeName}
                        </span>
                      )}
                    </div>

                    {/* Summary Snippet */}
                    <p className="text-[11px] text-ink-600 dark:text-[#CBD5E1] line-clamp-1 mt-0.5 font-sans">
                      {p.summary}
                    </p>

                    {/* Bottom Tags: Domains & Influences Count */}
                    <div className="mt-1.5 pt-1.5 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[9px] font-mono text-ink-600 dark:text-[#94A3B8]">
                      <span className="truncate max-w-[130px] font-semibold text-ink-700 dark:text-[#CBD5E1]">
                        {p.domains.slice(0, 2).join(' • ')}
                      </span>
                      <span className="text-entity-idea font-bold">
                        {p.concepts.length} concepts →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Desktop Bottom Helper Bar */}
        <div className="h-8 bg-paper-100 dark:bg-[#151821] border-t border-ink-900/30 dark:border-[#2E3547] px-4 flex items-center justify-between text-[11px] font-mono text-ink-600 dark:text-[#94A3B8]">
          <div className="flex items-center space-x-4">
            <span>Drag horizontally or use mousewheel to pan</span>
            <span>Showing {filteredPhilosophers.length} thinkers across time</span>
          </div>
          <div className="flex items-center space-x-3 text-[10px]">
            <span className="flex items-center space-x-1">
              <span className="font-bold text-entity-philosopher">●</span>
              <span>PERSON</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-[2px] bg-entity-philosopher inline-block" />
              <span>Lineage</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-[2px] border-b border-dashed border-entity-philosopher inline-block" />
              <span>Probable / Disputed</span>
            </span>
          </div>
        </div>

      </div>

      {/* MOBILE VERTICAL TIMELINE (Prompt Section 36) */}
      <div className="md:hidden bg-paper-100 dark:bg-[#0C0E12] px-4 py-6 space-y-6">
        <div className="text-center pb-2 border-b border-ink-900/20 dark:border-[#2E3547]">
          <h3 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
            Chronological Journey
          </h3>
          <p className="text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
            Tap any philosopher to open their full dossier & scholarly references
          </p>
        </div>

        {/* Vertical Spine */}
        <div className="relative border-l-2 border-ink-900 dark:border-[#2E3547] pl-5 ml-2 space-y-6">
          {filteredPhilosophers.map((p) => {
            const isSelected = selectedPhilosopher?.id === p.id;

            return (
              <div
                key={p.id}
                onClick={() => onSelectPhilosopher(p)}
                className="relative cursor-pointer group"
              >
                {/* Node pin on vertical spine */}
                <div 
                  className={`absolute -left-[27px] top-3 w-4 h-4 rounded-full border-2 border-ink-900 dark:border-[#F8FAFC] transition-colors ${
                    isSelected ? 'bg-entity-philosopher scale-125' : 'bg-paper-100 dark:bg-[#151821] group-hover:bg-entity-philosopher'
                  }`}
                />

                {/* Card */}
                <div className={`brutal-card p-3.5 transition-all ${
                  isSelected ? 'border-entity-philosopher ring-2 ring-entity-philosopher/30' : ''
                }`}>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-ink-600 dark:text-[#94A3B8] mb-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-bold text-entity-philosopher">● {p.displayDates}</span>
                      {p.dateUncertainty && (
                        <span className={`px-1 py-0.2 text-[8px] font-bold border ${
                          p.dateUncertainty === 'ESTABLISHED'
                            ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/30'
                            : p.dateUncertainty === 'PROBABLE'
                            ? 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/30'
                            : 'bg-rose-500/10 text-rose-800 dark:text-rose-400 border-rose-500/30'
                        }`}>
                          ◎ {p.dateUncertainty}
                        </span>
                      )}
                    </div>
                    <span className="px-1.5 py-0.5 bg-paper-300 dark:bg-[#1D222F] text-ink-800 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
                      {p.tradition}
                    </span>
                  </div>

                  <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher">
                    {p.name}
                  </h4>

                  <p className="text-xs text-ink-700 dark:text-[#CBD5E1] mt-1 line-clamp-2 font-sans">
                    {p.summary}
                  </p>

                  <div className="mt-2 pt-2 border-t border-ink-900/10 dark:border-[#2E3547] flex items-center justify-between text-[10px] font-mono">
                    <span className="text-ink-600 dark:text-[#94A3B8]">{p.region}</span>
                    <span className="text-entity-philosopher font-bold flex items-center">
                      <span>View Dossier</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
