import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { 
  PHILOSOPHERS, 
  CONCEPTS, 
  SCHOOLS, 
  RELATIONSHIPS 
} from '../data/philosophyData';
import { 
  Philosopher, 
  NodeType, 
  RelationshipType, 
  Era, 
  Tradition, 
  Domain,
  ENTITY_SYMBOLS
} from '../types/philosophy';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw
} from 'lucide-react';

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: NodeType;
  color: string;
  era?: Era;
  tradition?: Tradition;
  domain?: Domain;
  subtitle?: string;
  radius: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  id: string;
  type: RelationshipType;
  description: string;
  confidence: 'documented' | 'probable' | 'uncertain';
}

interface KnowledgeGraphViewProps {
  theme?: 'light' | 'dark';
  selectedNodeId: string | null;
  onSelectNode: (id: string, type: NodeType) => void;
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectConcept?: (id: string) => void;
  onSelectSchool?: (id: string) => void;
}

export const KnowledgeGraphView: React.FC<KnowledgeGraphViewProps> = ({
  theme = 'light',
  selectedNodeId,
  onSelectNode,
  onSelectPhilosopher,
  onSelectConcept,
  onSelectSchool
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  // Focus depth level: 1 (direct neighbors) or 2 (two hops)
  const [focusDepth, setFocusDepth] = useState<1 | 2>(1);
  const [filterType, setFilterType] = useState<NodeType | 'all'>('all');
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);

  // Build graph data
  const rawNodes: GraphNode[] = [
    // Philosophers
    ...PHILOSOPHERS.map(p => ({
      id: p.id,
      name: p.name,
      type: 'philosopher' as NodeType,
      color: '#B93828',
      era: p.era,
      tradition: p.tradition,
      domain: p.domains[0],
      subtitle: p.displayDates,
      radius: 28
    })),
    // Concepts
    ...CONCEPTS.map(c => ({
      id: c.id,
      name: c.name,
      type: 'concept' as NodeType,
      color: '#1E3A8A',
      domain: c.domain[0],
      subtitle: c.domain[0],
      radius: 24
    })),
    // Schools
    ...SCHOOLS.map(s => ({
      id: s.id,
      name: s.name,
      type: 'school' as NodeType,
      color: '#B45309',
      tradition: s.tradition,
      subtitle: s.tradition,
      radius: 26
    }))
  ];

  // Build links from relationships + philosopher concept links + school links
  const rawLinks: GraphLink[] = [
    // Direct documented relationships
    ...RELATIONSHIPS.map(r => ({
      id: r.id,
      source: r.source,
      target: r.target,
      type: r.type,
      description: r.description,
      confidence: r.confidence
    })),
    // Concept affiliation links
    ...PHILOSOPHERS.flatMap(p => 
      p.concepts.map(cId => ({
        id: `link-${p.id}-${cId}`,
        source: p.id,
        target: cId,
        type: 'DEVELOPED' as RelationshipType,
        description: `${p.name} developed the concept of ${cId}`,
        confidence: 'documented' as const
      }))
    ),
    // School membership links
    ...PHILOSOPHERS.flatMap(p => 
      p.schools.map(sId => ({
        id: `link-${p.id}-${sId}`,
        source: p.id,
        target: sId,
        type: 'MEMBER_OF' as RelationshipType,
        description: `${p.name} is affiliated with ${sId}`,
        confidence: 'documented' as const
      }))
    )
  ];

  // Filter nodes
  const nodes = rawNodes.filter(n => {
    if (filterType !== 'all' && n.type !== filterType) return false;
    return true;
  });

  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  // Helper to extract string ID from link endpoint
  const getEndpointId = (endpoint: string | number | GraphNode): string => {
    if (typeof endpoint === 'object' && endpoint !== null) {
      return String(endpoint.id);
    }
    return String(endpoint);
  };

  // Keep links only if both endpoints are in visible nodes
  const links = rawLinks.filter(l => {
    const srcId = getEndpointId(l.source);
    const tgtId = getEndpointId(l.target);
    return nodeMap.has(srcId) && nodeMap.has(tgtId);
  });

  // Calculate focus set (Level 0, Level 1, Level 2)
  const level0Id = selectedNodeId || hoveredNode?.id || null;
  const level1Ids = new Set<string>();
  const level2Ids = new Set<string>();

  if (level0Id) {
    // Level 1: direct neighbors
    links.forEach(l => {
      const srcId = getEndpointId(l.source);
      const tgtId = getEndpointId(l.target);
      if (srcId === level0Id) level1Ids.add(tgtId);
      if (tgtId === level0Id) level1Ids.add(srcId);
    });

    // Level 2: secondary neighbors if focusDepth === 2
    if (focusDepth >= 2) {
      links.forEach(l => {
        const srcId = getEndpointId(l.source);
        const tgtId = getEndpointId(l.target);
        if (level1Ids.has(srcId) && tgtId !== level0Id) level2Ids.add(tgtId);
        if (level1Ids.has(tgtId) && srcId !== level0Id) level2Ids.add(srcId);
      });
    }
  }

  // D3 Simulation Setup
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
    const width = containerRef.current.clientWidth || 900;
    const height = 650;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg.append('g').attr('class', 'graph-main-group');

    // Arrow markers
    const defs = svg.append('defs');
    defs.append('marker')
      .attr('id', 'graph-arrow')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', 24)
      .attr('refY', 5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', 'M 0 1 L 10 5 L 0 9 z')
      .attr('fill', isDark ? '#64748B' : '#111111');

    defs.append('marker')
      .attr('id', 'graph-arrow-active')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', 26)
      .attr('refY', 5)
      .attr('markerWidth', 7)
      .attr('markerHeight', 7)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', 'M 0 1 L 10 5 L 0 9 z')
      .attr('fill', '#B93828');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);
    zoomBehaviorRef.current = zoom;

    // Clone links to prevent stale node references across React renders
    const simLinks = links.map(l => ({
      ...l,
      source: typeof l.source === 'object' && l.source !== null ? (l.source as GraphNode).id : String(l.source),
      target: typeof l.target === 'object' && l.target !== null ? (l.target as GraphNode).id : String(l.target)
    }));

    // Pre-seed coordinates radially so nodes never have undefined or NaN positions
    nodes.forEach((node, i) => {
      if (typeof node.x !== 'number' || isNaN(node.x)) {
        const angle = (i / Math.max(nodes.length, 1)) * 2 * Math.PI;
        const r = 180 + (i % 4) * 50;
        node.x = width / 2 + r * Math.cos(angle);
        node.y = height / 2 + r * Math.sin(angle);
      }
    });

    // Simulation with balanced charge and distance so nodes remain in view
    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(simLinks).id(d => d.id).distance(85))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => (d as GraphNode).radius + 12));

    // Run synchronous pre-ticks for instant stable layout
    for (let i = 0; i < 70; ++i) {
      simulation.tick();
    }

    // Set initial comfortable zoom & centering
    svg.call(zoom.transform, d3.zoomIdentity.translate(width * 0.1, height * 0.1).scale(0.8));

    simulationRef.current = simulation;

    // Render Links
    const linkGroup = g.append('g').attr('class', 'links');
    const linkElements = linkGroup.selectAll<SVGPathElement, GraphLink>('path')
      .data(simLinks)
      .enter()
      .append('path')
      .attr('stroke', d => d.type === 'CRITICIZED' ? '#B93828' : (isDark ? '#334155' : '#111111'))
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', d => d.type === 'CRITICIZED' ? '4 3' : d.type === 'ASSOCIATED_WITH' ? '2 2' : 'none')
      .attr('marker-end', 'url(#graph-arrow)')
      .attr('fill', 'none');

    // Render Nodes
    const nodeGroup = g.append('g').attr('class', 'nodes');
    const nodeElements = nodeGroup.selectAll<SVGGElement, GraphNode>('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'graph-node cursor-pointer')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    // Hard brutalist shadow rectangle
    nodeElements.append('rect')
      .attr('x', d => -d.name.length * 4 - 8)
      .attr('y', -16)
      .attr('width', d => d.name.length * 8 + 16)
      .attr('height', 32)
      .attr('fill', '#06080C')
      .attr('transform', 'translate(3, 3)');

    // Main node rectangle
    nodeElements.append('rect')
      .attr('x', d => -d.name.length * 4 - 8)
      .attr('y', -16)
      .attr('width', d => d.name.length * 8 + 16)
      .attr('height', 32)
      .attr('fill', isDark ? '#151821' : '#FAF8F5')
      .attr('stroke', isDark ? '#2E3547' : '#111111')
      .attr('stroke-width', 2);

    // Color stripe indicator
    nodeElements.append('rect')
      .attr('x', d => -d.name.length * 4 - 8)
      .attr('y', -16)
      .attr('width', 5)
      .attr('height', 32)
      .attr('fill', d => d.color);

    // Node text label
    nodeElements.append('text')
      .attr('x', 2)
      .attr('y', 4)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Cinzel, serif')
      .attr('font-size', '10.5px')
      .attr('font-weight', 'bold')
      .attr('fill', isDark ? '#F8FAFC' : '#111111')
      .text(d => `${ENTITY_SYMBOLS[d.type as keyof typeof ENTITY_SYMBOLS] || '●'} ${d.name}`);

    // Click handler
    nodeElements.on('click', (event, d) => {
      event.stopPropagation();
      onSelectNode(d.id, d.type);
      if (d.type === 'philosopher') {
        const phil = PHILOSOPHERS.find(p => p.id === d.id);
        if (phil) onSelectPhilosopher(phil);
      } else if (d.type === 'concept' && onSelectConcept) {
        onSelectConcept(d.id);
      } else if (d.type === 'school' && onSelectSchool) {
        onSelectSchool(d.id);
      }
    });

    nodeElements.on('mouseenter', (_, d) => {
      setHoveredNode(d);
    });

    nodeElements.on('mouseleave', () => {
      setHoveredNode(null);
    });

    // Initial paint from pre-ticks
    linkElements.attr('d', d => {
      const source = d.source as unknown as GraphNode;
      const target = d.target as unknown as GraphNode;
      if (!source.x || !source.y || !target.x || !target.y) return '';
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
      return `M ${source.x} ${source.y} A ${dr} ${dr} 0 0,1 ${target.x} ${target.y}`;
    });
    nodeElements.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

    // Tick
    simulation.on('tick', () => {
      linkElements.attr('d', d => {
        const source = d.source as unknown as GraphNode;
        const target = d.target as unknown as GraphNode;
        if (!source.x || !source.y || !target.x || !target.y) return '';
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
        return `M ${source.x} ${source.y} A ${dr} ${dr} 0 0,1 ${target.x} ${target.y}`;
      });

      nodeElements.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
    });

    return () => {
      simulation.stop();
    };
  }, [filterType, theme]);

  // Update opacities based on Focus Mode (Level 0, 1, 2)
  useEffect(() => {
    if (!svgRef.current) return;
    const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
    const svg = d3.select(svgRef.current);

    svg.selectAll<SVGGElement, GraphNode>('.graph-node')
      .transition()
      .duration(200)
      .attr('opacity', d => {
        if (!level0Id) return 1;
        if (d.id === level0Id) return 1;
        if (level1Ids.has(d.id)) return 1;
        if (focusDepth === 2 && level2Ids.has(d.id)) return 0.65;
        return 0.22; // Subdued but clearly discernible
      });

    svg.selectAll<SVGRectElement, GraphNode>('.graph-node rect:nth-child(2)')
      .attr('stroke', d => d.id === level0Id ? '#B93828' : (isDark ? '#2E3547' : '#111111'))
      .attr('stroke-width', d => d.id === level0Id ? 3.5 : 2);

    svg.selectAll<SVGPathElement, GraphLink>('.links path')
      .transition()
      .duration(200)
      .attr('opacity', d => {
        if (!level0Id) return 0.55;
        const srcId = getEndpointId(d.source);
        const tgtId = getEndpointId(d.target);
        if (srcId === level0Id || tgtId === level0Id) return 1;
        if (focusDepth === 2 && (level1Ids.has(srcId) || level1Ids.has(tgtId))) return 0.5;
        return 0.08;
      })
      .attr('stroke', d => {
        const srcId = getEndpointId(d.source);
        const tgtId = getEndpointId(d.target);
        if (srcId === level0Id || tgtId === level0Id) return '#B93828';
        return d.type === 'CRITICIZED' ? '#B93828' : (isDark ? '#334155' : '#111111');
      })
      .attr('marker-end', d => {
        const srcId = getEndpointId(d.source);
        const tgtId = getEndpointId(d.target);
        if (srcId === level0Id || tgtId === level0Id) return 'url(#graph-arrow-active)';
        return 'url(#graph-arrow)';
      });
  }, [level0Id, focusDepth, level1Ids, level2Ids, theme]);

  const handleZoom = (delta: number) => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(250)
      .call(zoomBehaviorRef.current.scaleBy, delta);
  };

  const handleReset = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(400)
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity.translate(0, 0).scale(1));
  };

  return (
    <div className="relative w-full bg-paper-100 dark:bg-[#0C0E12] border-b-2 border-ink-900 dark:border-[#2E3547] select-none">
      
      {/* Top Toolbar */}
      <div className="bg-paper-50 dark:bg-[#151821] border-b-2 border-ink-900 dark:border-[#2E3547] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-brutal-sm">
        
        {/* Left: Entity Type Filter */}
        <div className="flex items-center space-x-1.5 text-xs font-mono">
          <span className="font-bold text-ink-700 dark:text-[#94A3B8] uppercase mr-1 hidden sm:inline">Entity:</span>
          {(['all', 'philosopher', 'concept', 'school'] as const).map(t => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-2.5 py-1 uppercase font-bold border-2 transition-all ${
                filterType === t 
                  ? 'bg-ink-900 dark:bg-[#F8FAFC] text-white dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm' 
                  : 'bg-paper-100 dark:bg-[#151821] text-ink-800 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Center: Focus Depth (Section 22: Level 1 vs Level 2) */}
        <div className="flex items-center space-x-1.5 text-xs font-mono">
          <span className="font-bold text-ink-700 dark:text-[#94A3B8] uppercase mr-1 hidden md:inline">Focus Depth:</span>
          <div className="flex border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm">
            <button
              onClick={() => setFocusDepth(1)}
              className={`px-2.5 py-1 font-bold ${
                focusDepth === 1 ? 'bg-entity-idea text-white' : 'bg-paper-100 dark:bg-[#151821] text-ink-800 dark:text-[#CBD5E1] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
              }`}
              title="Level 1: Show direct 1-hop connections only"
            >
              1-Hop
            </button>
            <button
              onClick={() => setFocusDepth(2)}
              className={`px-2.5 py-1 font-bold border-l-2 border-ink-900 dark:border-[#2E3547] ${
                focusDepth === 2 ? 'bg-entity-idea text-white' : 'bg-paper-100 dark:bg-[#151821] text-ink-800 dark:text-[#CBD5E1] hover:bg-paper-200 dark:hover:bg-[#1D222F]'
              }`}
              title="Level 2: Show secondary 2-hop connections"
            >
              2-Hops
            </button>
          </div>
        </div>

        {/* Right: Controls & Reset */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center border-2 border-ink-900 dark:border-[#2E3547] bg-paper-100 dark:bg-[#0C0E12] shadow-brutal-sm">
            <button
              onClick={() => handleZoom(0.8)}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border-r border-ink-900 dark:border-[#2E3547] text-ink-800 dark:text-[#CBD5E1]"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(1.25)}
              className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] text-ink-800 dark:text-[#CBD5E1]"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleReset}
            className="brutal-btn px-2.5 py-1 text-xs flex items-center space-x-1"
            title="Reset Graph Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESET</span>
          </button>
        </div>

      </div>

      {/* SVG Canvas Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-[650px] overflow-hidden bg-paper-200 dark:bg-[#0C0E12] cursor-grab active:cursor-grabbing"
      >
        <svg 
          ref={svgRef} 
          className="w-full h-full"
        />

        {/* Graph Legend (Prompt Section 60) */}
        <div className="absolute bottom-4 left-4 p-3 bg-paper-100 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal max-w-xs text-[11px] font-mono pointer-events-auto text-ink-900 dark:text-[#F8FAFC]">
          <div className="font-bold text-ink-900 dark:text-[#F8FAFC] uppercase border-b border-ink-900/20 dark:border-[#2E3547] pb-1 mb-2">
            Graph Semantics Key
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-entity-philosopher text-white text-[9px] flex items-center justify-center font-bold">●</span>
              <span>PERSON (Thinker Node)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-entity-idea text-white text-[9px] flex items-center justify-center font-bold">◆</span>
              <span>IDEA (Concept / Inquiries)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-entity-school text-white text-[9px] flex items-center justify-center font-bold">■</span>
              <span>SCHOOL (Tradition / Movement)</span>
            </div>
            <div className="pt-1.5 border-t border-ink-900/20 dark:border-[#2E3547] space-y-1 text-ink-600 dark:text-[#94A3B8]">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-[2px] bg-ink-900 dark:bg-[#F8FAFC] inline-block" />
                <span>Documented Transmission (→)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-[2px] border-b-2 border-dashed border-rose-500 inline-block" />
                <span>Dialectical Critique (← vs)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover / Selected Info Tooltip */}
        {(hoveredNode || selectedNodeId) && (
          <div className="absolute top-4 right-4 p-3.5 bg-paper-50 dark:bg-[#151821] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal max-w-sm font-mono text-xs animate-in fade-in duration-100 text-ink-900 dark:text-[#F8FAFC]">
            <div className="text-[10px] uppercase font-bold text-entity-philosopher mb-0.5">
              {hoveredNode?.type || 'Selected Node'}
            </div>
            <div className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
              {hoveredNode?.name || selectedNodeId}
            </div>
            {hoveredNode?.subtitle && (
              <div className="text-[11px] text-ink-600 dark:text-[#94A3B8] mt-0.5">
                {hoveredNode.subtitle}
              </div>
            )}
            <div className="mt-2 pt-2 border-t border-ink-900/20 dark:border-[#2E3547] text-[10px] text-ink-600 dark:text-[#94A3B8] flex items-center justify-between gap-4">
              <span>{level1Ids.size} connected nodes</span>
              <span className="italic text-entity-idea dark:text-blue-400">Click to open dossier</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
