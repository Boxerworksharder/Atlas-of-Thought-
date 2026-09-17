import React, { useRef, useState, useMemo } from 'react';
import { PHILOSOPHERS, RELATIONSHIPS } from '../data/philosophyData';
import { Philosopher } from '../types/philosophy';
import { Layers } from 'lucide-react';

interface TimelineHybridViewProps {
  selectedPhilosopher: Philosopher | null;
  onSelectPhilosopher: (p: Philosopher) => void;
}

interface TraditionLane {
  id: string;
  name: string;
  traditions: string[];
  y: number;
  height: number;
  color: string;
}

export const TimelineHybridView: React.FC<TimelineHybridViewProps> = ({
  selectedPhilosopher,
  onSelectPhilosopher
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const MIN_YEAR = -600;
  const MAX_YEAR = 2026;
  const TOTAL_YEARS = MAX_YEAR - MIN_YEAR;
  const canvasWidth = 4200;
  const canvasHeight = 780;

  // 4 Semantic/Tradition Horizontal Lanes with generous height for non-colliding sub-lanes
  const lanes: TraditionLane[] = useMemo(() => [
    { id: 'greek-roman', name: 'Greek & Roman Classical', traditions: ['Greek', 'Roman'], y: 50, height: 170, color: '#B93828' },
    { id: 'eastern', name: 'Eastern & Asian Traditions (Indian / Chinese)', traditions: ['Indian', 'Chinese'], y: 230, height: 170, color: '#B45309' },
    { id: 'medieval-abrahamic', name: 'Medieval Abrahamic (Islamic / Jewish / Christian)', traditions: ['Islamic', 'Jewish', 'Christian'], y: 410, height: 170, color: '#1E3A8A' },
    { id: 'modern-global', name: 'Modern European & Global Philosophy', traditions: ['European', 'American', 'Global'], y: 590, height: 170, color: '#15803D' }
  ], []);

  const yearToX = (year: number) => {
    const frac = (year - MIN_YEAR) / TOTAL_YEARS;
    return Math.max(120, Math.min(canvasWidth - 250, frac * canvasWidth));
  };

  // Pre-calculate collision-free sub-lane per philosopher within their tradition lane
  const philosopherPositions = useMemo(() => {
    const positions: Record<string, { x: number; y: number; lane: TraditionLane }> = {};
    const SUB_LANES = 3;
    const CARD_WIDTH = 175;
    const MIN_GAP = 16;
    
    lanes.forEach(lane => {
      const thinkersInLane = PHILOSOPHERS.filter(p => lane.traditions.includes(p.tradition))
        .sort((a, b) => a.birthYear - b.birthYear);
      
      const subLaneOccupied: number[] = new Array(SUB_LANES).fill(-Infinity);

      thinkersInLane.forEach(p => {
        const x = yearToX(p.birthYear);
        let chosenSubLane = -1;

        // 1. Prefer empty sublane
        const emptyIdx = subLaneOccupied.findIndex(occ => occ === -Infinity);
        if (emptyIdx !== -1) {
          chosenSubLane = emptyIdx;
        } else {
          // 2. Select sublane with largest horizontal clearance
          let maxGap = -Infinity;
          for (let s = 0; s < SUB_LANES; s++) {
            const gap = x - subLaneOccupied[s];
            if (gap >= MIN_GAP && gap > maxGap) {
              maxGap = gap;
              chosenSubLane = s;
            }
          }
        }

        // 3. Fallback: sublane with earliest clearance
        if (chosenSubLane === -1) {
          let minX = Infinity;
          chosenSubLane = 0;
          for (let s = 0; s < SUB_LANES; s++) {
            if (subLaneOccupied[s] < minX) {
              minX = subLaneOccupied[s];
              chosenSubLane = s;
            }
          }
        }

        const y = lane.y + 26 + chosenSubLane * 44;
        positions[p.id] = { x, y, lane };
        subLaneOccupied[chosenSubLane] = Math.max(x + CARD_WIDTH, subLaneOccupied[chosenSubLane]);
      });
    });

    return positions;
  }, [lanes, canvasWidth]);

  const getPhilosopherPosition = (p: Philosopher) => {
    return philosopherPositions[p.id] || { 
      x: yearToX(p.birthYear), 
      y: 540, 
      lane: lanes[3] 
    };
  };

  const activeId = hoveredNode || selectedPhilosopher?.id;

  return (
    <div className="bg-paper-200 dark:bg-[#0C0E12] border-b-2 border-ink-900 dark:border-[#2E3547] overflow-hidden select-none">
      
      {/* Header Banner */}
      <div className="bg-paper-100 dark:bg-[#151821] border-b border-ink-900/30 dark:border-[#2E3547] px-4 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-entity-philosopher" />
          <span className="font-bold uppercase tracking-wider text-ink-900 dark:text-[#F8FAFC]">
            Timeline + Graph Hybrid View
          </span>
          <span className="hidden sm:inline text-ink-500 dark:text-[#94A3B8]">
            (X = Historical Time, Y = Philosophical Tradition Track)
          </span>
        </div>
        <div className="flex items-center space-x-3 text-ink-600 dark:text-[#94A3B8] text-[11px]">
          <span>Horizontal pan & drag</span>
          <span className="flex items-center space-x-1">
            <span className="w-2.5 h-0.5 bg-entity-philosopher inline-block" />
            <span>Cross-Tradition Influences</span>
          </span>
        </div>
      </div>

      {/* Pannable Track */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing no-scrollbar relative"
        style={{ height: `${canvasHeight}px` }}
      >
        <div 
          className="relative"
          style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
        >
          {/* Time Ruler (Top) */}
          <div className="sticky top-0 z-20 h-9 bg-paper-100 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] flex items-center shadow-brutal-sm">
            {[-500, -300, -100, 100, 400, 800, 1100, 1300, 1500, 1650, 1750, 1850, 1950].map((yr) => {
              const x = yearToX(yr);
              return (
                <div key={yr} className="absolute flex flex-col items-start" style={{ left: `${x}px` }}>
                  <div className="h-2.5 w-[1.5px] bg-ink-900 dark:bg-[#F8FAFC]" />
                  <span className="font-mono text-[10px] font-bold text-ink-700 dark:text-[#CBD5E1] tracking-wider -ml-2">
                    {yr < 0 ? `${Math.abs(yr)} BCE` : `${yr} CE`}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Lane Background Bands */}
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="absolute left-0 right-0 border-b border-ink-900/15 dark:border-[#2E3547] px-4 pt-1 pointer-events-none"
              style={{ top: `${lane.y}px`, height: `${lane.height}px` }}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-500 dark:text-[#94A3B8] bg-paper-100 dark:bg-[#151821] px-2 py-0.5 border border-ink-900/20 dark:border-[#2E3547] shadow-brutal-sm">
                {lane.name}
              </span>
            </div>
          ))}

          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
          >
            <defs>
              <marker
                id="hybrid-arrow"
                viewBox="0 0 10 10"
                refX="14"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" className="text-ink-900 dark:text-[#F8FAFC]" />
              </marker>
              <marker
                id="hybrid-arrow-active"
                viewBox="0 0 10 10"
                refX="14"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#B93828" />
              </marker>
            </defs>

            {/* Render relationships between thinkers */}
            {RELATIONSHIPS.map((rel) => {
              const srcP = PHILOSOPHERS.find(p => p.id === rel.source);
              const tgtP = PHILOSOPHERS.find(p => p.id === rel.target);
              if (!srcP || !tgtP) return null;

              const srcPos = getPhilosopherPosition(srcP);
              const tgtPos = getPhilosopherPosition(tgtP);

              const isIncident = activeId === rel.source || activeId === rel.target;
              const isDimmed = activeId && !isIncident;

              // Cubic bezier curve
              const dx = tgtPos.x - srcPos.x;
              const cx1 = srcPos.x + dx * 0.4;
              const cy1 = srcPos.y;
              const cx2 = srcPos.x + dx * 0.6;
              const cy2 = tgtPos.y;
              const pathD = `M ${srcPos.x + 40} ${srcPos.y + 12} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tgtPos.x - 10} ${tgtPos.y + 12}`;

              return (
                <path
                  key={rel.id}
                  d={pathD}
                  fill="none"
                  stroke={isIncident ? '#B93828' : 'currentColor'}
                  strokeWidth={isIncident ? 2.5 : 1}
                  strokeDasharray={rel.type === 'CRITICIZED' ? '4 3' : 'none'}
                  markerEnd={isIncident ? 'url(#hybrid-arrow-active)' : 'url(#hybrid-arrow)'}
                  opacity={isDimmed ? 0.08 : isIncident ? 1 : 0.4}
                  className="text-ink-900 dark:text-[#CBD5E1] transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Philosopher Nodes */}
          <div className="relative z-20">
            {PHILOSOPHERS.map((p) => {
              const pos = getPhilosopherPosition(p);
              const isSelected = selectedPhilosopher?.id === p.id;
              const isHovered = hoveredNode === p.id;
              const isConnected = activeId && (
                p.influences.includes(activeId) ||
                p.influenced.includes(activeId)
              );
              const isDimmed = activeId && !isSelected && !isHovered && !isConnected;

              return (
                <div
                  key={p.id}
                  onClick={() => onSelectPhilosopher(p)}
                  onMouseEnter={() => setHoveredNode(p.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    opacity: isDimmed ? 0.3 : 1,
                    transform: isSelected || isHovered ? 'scale(1.05)' : 'none'
                  }}
                  className={`absolute border-2 p-2 cursor-pointer transition-all duration-150 group shadow-brutal-sm ${
                    isSelected 
                      ? 'border-entity-philosopher bg-paper-100 dark:bg-[#1D222F] shadow-brutal ring-2 ring-entity-philosopher/40 z-30' 
                      : isHovered || isConnected
                      ? 'border-ink-900 dark:border-[#F8FAFC] bg-paper-100 dark:bg-[#1D222F] shadow-brutal z-20'
                      : 'bg-paper-50 dark:bg-[#151821] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100 dark:hover:bg-[#1D222F] z-10'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] text-entity-philosopher font-bold uppercase mb-0.5">
                    <span>{p.displayDates}</span>
                  </div>
                  <div className="font-serif-title font-bold text-xs sm:text-sm text-ink-900 dark:text-[#F8FAFC] group-hover:text-entity-philosopher transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[10px] font-mono text-ink-600 dark:text-[#94A3B8] truncate max-w-[140px]">
                    {p.tradition} • {p.schools[0]}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
};
