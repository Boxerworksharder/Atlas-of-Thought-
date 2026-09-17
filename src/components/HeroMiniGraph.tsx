import React, { useState } from 'react';

interface HeroMiniGraphProps {
  onSelectNode: (id: string, type: 'philosopher' | 'concept' | 'school') => void;
}

interface MiniNode {
  id: string;
  name: string;
  type: 'philosopher' | 'concept' | 'school';
  x: number;
  y: number;
  eraLabel: string;
  delay: number; // ms
  color: string;
}

interface MiniEdge {
  source: string;
  target: string;
  type: 'influence' | 'response' | 'synthesis';
  delay: number; // ms
}

export const HeroMiniGraph: React.FC<HeroMiniGraphProps> = ({ onSelectNode }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Spatial layout communicating historical time (top-down or left-to-right diagonal progression)
  // Socrates -> Plato -> Forms -> Aristotle -> Ethics / Metaphysics -> Kant -> Idealism -> Hegel
  const nodes: MiniNode[] = [
    { id: 'socrates', name: 'SOCRATES', type: 'philosopher', x: 120, y: 55, eraLabel: '469 BCE', delay: 100, color: '#B93828' },
    { id: 'plato', name: 'PLATO', type: 'philosopher', x: 260, y: 55, eraLabel: '428 BCE', delay: 400, color: '#B93828' },
    { id: 'theory-of-forms', name: 'FORMS', type: 'concept', x: 400, y: 55, eraLabel: 'Concept', delay: 700, color: '#1E3A8A' },
    
    { id: 'virtue-ethics', name: 'ETHICS', type: 'concept', x: 140, y: 155, eraLabel: 'Concept', delay: 1000, color: '#1E3A8A' },
    { id: 'aristotle', name: 'ARISTOTLE', type: 'philosopher', x: 280, y: 155, eraLabel: '384 BCE', delay: 1200, color: '#B93828' },
    { id: 'substance-ontology', name: 'METAPHYSICS', type: 'concept', x: 430, y: 155, eraLabel: 'Concept', delay: 1400, color: '#1E3A8A' },
    
    { id: 'descartes', name: 'DESCARTES', type: 'philosopher', x: 170, y: 245, eraLabel: '1596 CE', delay: 1700, color: '#B93828' },
    { id: 'hume', name: 'HUME', type: 'philosopher', x: 370, y: 245, eraLabel: '1711 CE', delay: 1900, color: '#B93828' },

    { id: 'kant', name: 'KANT', type: 'philosopher', x: 270, y: 325, eraLabel: '1724 CE', delay: 2200, color: '#B93828' },
    { id: 'german-idealism', name: 'IDEALISM', type: 'school', x: 270, y: 395, eraLabel: 'Tradition', delay: 2500, color: '#B45309' },
    { id: 'hegel', name: 'HEGEL', type: 'philosopher', x: 270, y: 465, eraLabel: '1770 CE', delay: 2800, color: '#B93828' },
  ];

  const edges: MiniEdge[] = [
    { source: 'socrates', target: 'plato', type: 'influence', delay: 300 },
    { source: 'plato', target: 'theory-of-forms', type: 'synthesis', delay: 600 },
    { source: 'plato', target: 'aristotle', type: 'influence', delay: 900 },
    { source: 'theory-of-forms', target: 'aristotle', type: 'response', delay: 1100 },
    { source: 'socrates', target: 'virtue-ethics', type: 'synthesis', delay: 800 },
    { source: 'aristotle', target: 'virtue-ethics', type: 'influence', delay: 1300 },
    { source: 'aristotle', target: 'substance-ontology', type: 'synthesis', delay: 1400 },
    { source: 'virtue-ethics', target: 'descartes', type: 'influence', delay: 1600 },
    { source: 'substance-ontology', target: 'hume', type: 'response', delay: 1800 },
    { source: 'descartes', target: 'kant', type: 'response', delay: 2100 },
    { source: 'hume', target: 'kant', type: 'response', delay: 2150 },
    { source: 'kant', target: 'german-idealism', type: 'synthesis', delay: 2400 },
    { source: 'german-idealism', target: 'hegel', type: 'influence', delay: 2700 },
  ];

  const getNode = (id: string) => nodes.find(n => n.id === id);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-paper-100 dark:bg-[#151821] border-3 border-ink-900 dark:border-[#2E3547] shadow-brutal-lg dark:shadow-[6px_6px_0px_0px_#06080C] p-3 sm:p-5 select-none">
      
      {/* Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-ink-900 dark:border-[#2E3547] mb-2 font-mono text-[11px] uppercase tracking-wider">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-entity-philosopher animate-ping" />
          <span className="font-bold text-ink-900 dark:text-[#F8FAFC]">Intellectual Lineage Network</span>
        </div>
        <span className="text-ink-600 dark:text-[#94A3B8]">Thought Spreading Through Time</span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[540/510] overflow-hidden bg-paper-50 dark:bg-[#0C0E12] border border-ink-900/30 dark:border-[#2E3547]">
        <svg
          viewBox="0 0 540 510"
          className="w-full h-full"
        >
          <defs>
            <marker
              id="arrow-head"
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
              id="arrow-head-active"
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

          {/* Background Grid Lines */}
          <line x1="40" y1="55" x2="500" y2="55" stroke="currentColor" className="text-ink-900/20 dark:text-[#F8FAFC]/15" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="155" x2="500" y2="155" stroke="currentColor" className="text-ink-900/20 dark:text-[#F8FAFC]/15" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="245" x2="500" y2="245" stroke="currentColor" className="text-ink-900/20 dark:text-[#F8FAFC]/15" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="325" x2="500" y2="325" stroke="currentColor" className="text-ink-900/20 dark:text-[#F8FAFC]/15" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="465" x2="500" y2="465" stroke="currentColor" className="text-ink-900/20 dark:text-[#F8FAFC]/15" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Time axis annotations */}
          <text x="12" y="58" fontFamily="JetBrains Mono" fontSize="8" fill="currentColor" className="text-ink-500 dark:text-[#94A3B8]">ANCIENT</text>
          <text x="12" y="248" fontFamily="JetBrains Mono" fontSize="8" fill="currentColor" className="text-ink-500 dark:text-[#94A3B8]">EARLY MOD</text>
          <text x="12" y="468" fontFamily="JetBrains Mono" fontSize="8" fill="currentColor" className="text-ink-500 dark:text-[#94A3B8]">19th C</text>

          {/* Edges */}
          {edges.map((edge, idx) => {
            const src = getNode(edge.source);
            const tgt = getNode(edge.target);
            if (!src || !tgt) return null;

            const isIncident = hoveredNode === edge.source || hoveredNode === edge.target;
            const isDimmed = hoveredNode && !isIncident;

            // Compute curved bezier path
            const dx = tgt.x - src.x;
            const dy = tgt.y - src.y;
            const cx1 = src.x + dx * 0.2;
            const cy1 = src.y + dy * 0.5;
            const cx2 = src.x + dx * 0.8;
            const cy2 = src.y + dy * 0.5;
            const pathD = `M ${src.x} ${src.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tgt.x} ${tgt.y}`;

            return (
              <g key={`edge-${idx}`}>
                <path
                  d={pathD}
                  fill="none"
                  stroke={isIncident ? '#B93828' : 'currentColor'}
                  strokeWidth={isIncident ? 2.5 : 1.5}
                  strokeDasharray={edge.type === 'response' ? '4 3' : 'none'}
                  markerEnd={isIncident ? 'url(#arrow-head-active)' : 'url(#arrow-head)'}
                  opacity={isDimmed ? 0.15 : 0.85}
                  className="text-ink-900 dark:text-[#CBD5E1] transition-colors duration-150"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = edges.some(e => 
              (e.source === hoveredNode && e.target === node.id) ||
              (e.target === hoveredNode && e.source === node.id)
            );
            const isDimmed = hoveredNode && !isHovered && !isConnected;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => onSelectNode(node.id, node.type)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer group"
                style={{
                  opacity: isDimmed ? 0.25 : 1,
                  transition: 'opacity 0.2s ease'
                }}
              >
                {/* Node box shadow */}
                <rect
                  x="-42"
                  y="-16"
                  width="84"
                  height="32"
                  fill="#06080C"
                  className="transition-transform duration-150"
                  transform="translate(2, 2)"
                />

                {/* Node box */}
                <rect
                  x="-42"
                  y="-16"
                  width="84"
                  height="32"
                  fill={isHovered ? node.color : undefined}
                  className={`${!isHovered ? 'fill-[#FAF8F5] dark:fill-[#1D222F]' : ''} stroke-[#111111] dark:stroke-[#2E3547] transition-all duration-150`}
                  strokeWidth="2"
                />

                {/* Type Indicator Tag */}
                <rect
                  x="-42"
                  y="-16"
                  width="4"
                  height="32"
                  fill={node.color}
                />

                {/* Text Label */}
                <text
                  x="2"
                  y="-2"
                  textAnchor="middle"
                  fontFamily="Cinzel, serif"
                  fontSize="9.5"
                  fontWeight="bold"
                  fill={isHovered ? '#FFFFFF' : 'currentColor'}
                  className="text-[#111111] dark:text-[#F8FAFC] transition-colors duration-150 tracking-wider"
                >
                  {node.name}
                </text>

                {/* Era / Type Subtext */}
                <text
                  x="2"
                  y="9"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="7"
                  fill={isHovered ? '#FFFFFF' : 'currentColor'}
                  className="text-ink-600 dark:text-[#94A3B8] transition-colors duration-150"
                >
                  {node.eraLabel}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer caption */}
      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-ink-600 dark:text-[#94A3B8]">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-entity-philosopher inline-block" />
            <span>Thinker</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-entity-idea inline-block" />
            <span>Idea</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-entity-school inline-block" />
            <span>School</span>
          </span>
        </div>
        <span className="italic">Click any node to explore</span>
      </div>

    </div>
  );
};
