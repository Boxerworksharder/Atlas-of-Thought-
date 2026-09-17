import React, { useState } from 'react';
import { INDIAN_PRIMARY_TEXTS } from '../../data/indianPhilosophyData';
import { TextCommentaryNode, ScriptMode, DepthLevel } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { BookOpen, GitFork } from 'lucide-react';

interface IndianTextsTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
}

export const IndianTextsTab: React.FC<IndianTextsTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel
}) => {
  const [selectedTreeId, setSelectedTreeId] = useState<string>(INDIAN_PRIMARY_TEXTS[0].id);
  const selectedTree = INDIAN_PRIMARY_TEXTS.find(t => t.id === selectedTreeId) || INDIAN_PRIMARY_TEXTS[0];

  const renderCommentaryNode = (node: TextCommentaryNode, depth: number = 0) => {
    return (
      <div key={node.title.english} className="space-y-3">
        <div className={`p-4 border-2 border-ink-900/15 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-2 ${depth > 0 ? 'ml-4 sm:ml-8 border-l-4 border-l-amber-600' : 'shadow-brutal-sm'}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-amber-500/15 border border-amber-600/30 text-amber-900 dark:text-amber-300">
                {node.type}
              </span>
              <span className="font-mono text-xs text-ink-500 dark:text-[#8C8275]">
                {node.approxDate}
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-ink-700 dark:text-[#CBD5E1]">
              Author: {renderTerm(node.author, scriptMode)}
            </div>
          </div>

          <h5 className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC]">
            {renderTerm(node.title, scriptMode)}
          </h5>

          {scriptMode !== 'english' && (
            <div className="text-xs font-mono text-ink-500 dark:text-[#8C8275]">
              {node.title.english} • IAST: <em>{node.title.iast}</em>
            </div>
          )}

          <p className="text-xs sm:text-sm font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
            {node.description}
          </p>
        </div>

        {node.children && node.children.length > 0 && (
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-dashed border-ink-900/20 dark:border-[#2E3547]">
            {node.children.map(child => renderCommentaryNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <GitFork className="w-4 h-4" />
          <span>Commentarial Genealogies (Mūla-Bhāṣya-Ṭīkā Paramparā)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Primary Texts & The Stratified Commentarial Tradition
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          In Indian intellectual history, major philosophical innovation occurred not through the repudiation of tradition, but through radical re-interpretation within the commentarial genre. A seminal root text (<em>Mūla Sūtra</em>) generated primary commentaries (<em>Bhāṣya</em>), which in turn elicited critical sub-commentaries (<em>Vārttika</em>), detailed explications (<em>Ṭīkā</em>), and marginal glosses (<em>Ṭippaṇī</em>).
        </p>
      </div>

      {/* Text Tradition Selector */}
      <div className="flex flex-wrap gap-3">
        {INDIAN_PRIMARY_TEXTS.map(tree => {
          const isSelected = tree.id === selectedTree.id;
          return (
            <button
              key={tree.id}
              onClick={() => setSelectedTreeId(tree.id)}
              className={`p-4 border-2 text-left transition-all ${
                isSelected
                  ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                  : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100'
              }`}
            >
              <div className="font-mono text-[10px] uppercase opacity-75">
                {tree.traditionOrSchool}
              </div>
              <div className="font-serif-title font-bold text-base mt-0.5">
                {renderTerm(tree.rootText, scriptMode)}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Tree Lineage Display */}
      <div className="brutal-card p-6 sm:p-8 bg-paper-50 dark:bg-[#151821] space-y-6">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-4 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30">
              Text Tradition: {selectedTree.traditionOrSchool}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            Root Text: {renderTerm(selectedTree.rootText, scriptMode)} ({selectedTree.rootText.iast})
          </h3>

          <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1]">
            {selectedTree.summary}
          </p>
        </div>

        {/* Commentarial Tree Render */}
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase font-bold text-ink-500 dark:text-[#8C8275] flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Stratified Commentarial Descent:</span>
          </div>

          <div className="space-y-4">
            {selectedTree.lineage.map(node => renderCommentaryNode(node, 0))}
          </div>
        </div>
      </div>
    </div>
  );
};
