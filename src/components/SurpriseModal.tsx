import React from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { Philosopher, Concept, School } from '../types/philosophy';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: {
    type: 'philosopher' | 'concept' | 'school';
    data: Philosopher | Concept | School;
    whyInteresting: string;
  } | null;
  onExplore: (type: 'philosopher' | 'concept' | 'school', id: string) => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({
  isOpen,
  onClose,
  entity,
  onExplore
}) => {
  if (!isOpen || !entity) return null;

  const { type, data, whyInteresting } = entity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/65 backdrop-blur-xs select-none animate-in fade-in duration-150">
      
      {/* Click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative w-full max-w-lg bg-paper-100 dark:bg-[#151821] border-3 border-ink-900 dark:border-[#F8FAFC] shadow-brutal-xl dark:shadow-[8px_8px_0px_0px_#06080C] p-6 sm:p-7 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-ink-900 dark:border-[#2E3547] pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-entity-school" />
            <span className="font-mono text-xs uppercase font-bold text-ink-700 dark:text-[#CBD5E1] tracking-wider">
              Random Philosophical Discovery
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-paper-200 dark:hover:bg-[#1D222F] border border-ink-900 dark:border-[#2E3547] text-ink-800 dark:text-[#F8FAFC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Entity Card */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] uppercase font-bold text-white dark:text-[#0C0E12] bg-ink-900 dark:bg-[#F8FAFC] px-2 py-0.5 border border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm">
            {type.toUpperCase()}
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
            {data.name}
          </h2>

          <p className="text-xs sm:text-sm font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
            {data.summary}
          </p>
        </div>

        {/* Why it is interesting */}
        <div className="p-4 bg-paper-50 dark:bg-[#0C0E12] border-2 border-ink-900 dark:border-[#2E3547] space-y-1">
          <span className="font-mono text-[11px] font-bold uppercase text-entity-school block">
            Why This is Profound:
          </span>
          <p className="text-xs sm:text-sm font-serif italic text-ink-900 dark:text-[#F8FAFC]">
            "{whyInteresting}"
          </p>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onExplore(type, data.id);
              onClose();
            }}
            className="brutal-btn brutal-btn-primary px-4 py-2.5 text-xs flex-1 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE CONNECTION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="brutal-btn px-4 py-2.5 text-xs bg-paper-200 dark:bg-[#1D222F] hover:bg-paper-300 dark:hover:bg-[#252C3D] text-ink-900 dark:text-[#F8FAFC]"
          >
            CLOSE
          </button>
        </div>

      </div>

    </div>
  );
};
