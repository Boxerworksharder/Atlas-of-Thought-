import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import { ViewMode } from '../types/philosophy';

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  return (
    <footer className="bg-paper-50 dark:bg-[#11131A] border-t-2 border-ink-900 dark:border-[#2E3547] mt-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-ink-900/20 dark:border-[#2E3547]">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-ink-900 dark:bg-[#1D222F] text-paper-100 dark:text-[#F8FAFC] flex items-center justify-center border border-ink-900 dark:border-[#2E3547]">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif-title font-bold text-lg text-ink-900 dark:text-[#F8FAFC] tracking-tight">
                ATLAS OF THOUGHT
              </span>
            </div>
            <p className="text-xs font-mono text-ink-600 dark:text-[#94A3B8] uppercase tracking-wider">
              A Visual Map of Human Thought
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-4 text-xs font-mono font-bold uppercase text-ink-800 dark:text-[#CBD5E1]">
            <button onClick={() => onSelectView('timeline')} className="hover:text-entity-philosopher">TIMELINE</button>
            <button onClick={() => onSelectView('graph')} className="hover:text-entity-idea">GRAPH</button>
            <button onClick={() => onSelectView('hybrid')} className="hover:text-entity-school">HYBRID</button>
            <button onClick={() => onSelectView('ideas')} className="hover:text-entity-idea">IDEAS</button>
            <button onClick={() => onSelectView('philosophers')} className="hover:text-entity-philosopher">PHILOSOPHERS</button>
            <button onClick={() => onSelectView('schools')} className="hover:text-entity-school">SCHOOLS</button>
            <button onClick={() => onSelectView('questions')} className="hover:text-entity-question">QUESTIONS</button>
            <button onClick={() => onSelectView('indian')} className="hover:text-amber-600 dark:hover:text-amber-400 font-black">INDIAN PHILOSOPHY</button>
            <button onClick={() => onSelectView('compare')} className="hover:text-ink-900 dark:hover:text-white">COMPARE</button>
          </div>
        </div>

        {/* Bottom Attribution & Integrity */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink-600 dark:text-[#94A3B8]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-entity-idea" />
            <span>
              Primary scholarly reference layer:{' '}
              <a 
                href="https://plato.stanford.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold underline text-ink-900 dark:text-[#F8FAFC] hover:text-entity-idea"
              >
                Stanford Encyclopedia of Philosophy (SEP)
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => onSelectView('methodology')} className="hover:underline">METHODOLOGY</button>
            <button onClick={() => onSelectView('about')} className="hover:underline">ABOUT</button>
            <span>•</span>
            <span className="text-[10px] text-ink-500 dark:text-[#64748B] uppercase">Atlas is continuously expanding</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
