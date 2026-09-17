import React, { useState } from 'react';
import { 
  Compass, 
  Clock, 
  Share2, 
  Lightbulb, 
  Users, 
  BookOpen, 
  HelpCircle, 
  GitCompare, 
  Grid, 
  Search, 
  Sparkles, 
  Info, 
  Menu, 
  X,
  Layers,
  Moon,
  Sun,
  Flame
} from 'lucide-react';
import { ViewMode } from '../types/philosophy';

interface TopNavProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenSearch: () => void;
  onSurpriseMe: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentView,
  onSelectView,
  onOpenSearch,
  onSurpriseMe,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ViewMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'graph', label: 'Graph', icon: Share2 },
    { id: 'hybrid', label: 'Hybrid', icon: Layers },
    { id: 'ideas', label: 'Ideas', icon: Lightbulb },
    { id: 'philosophers', label: 'Philosophers', icon: Users },
    { id: 'schools', label: 'Schools', icon: BookOpen },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
    { id: 'indian', label: 'Indian Phil', icon: Flame },
    { id: 'compare', label: 'Compare', icon: GitCompare },
    { id: 'explore', label: 'Explore', icon: Grid },
  ];

  const handleNavClick = (view: ViewMode) => {
    onSelectView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper-100 dark:bg-[#11131A] border-b-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[0_2px_0_0_#06080C] transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 cursor-pointer group select-none py-1"
        >
          <div className="w-9 h-9 bg-ink-900 dark:bg-[#1D222F] text-paper-100 dark:text-[#F8FAFC] flex items-center justify-center border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0_0_#06080C] group-hover:bg-entity-philosopher transition-colors">
            <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif-title font-bold text-lg sm:text-xl tracking-tight text-ink-900 dark:text-[#F8FAFC] leading-none">
                ATLAS OF THOUGHT
              </span>
              <span className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-[#94A3B8] bg-paper-300 dark:bg-[#1D222F] px-1 border border-ink-900/20 dark:border-[#2E3547]">
                v1.0
              </span>
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-ink-600 dark:text-[#94A3B8] tracking-wider uppercase leading-none mt-0.5">
              A Visual Map of Human Thought
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all border ${
                  isActive 
                    ? 'bg-ink-900 dark:bg-[#F8FAFC] text-paper-100 dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C]' 
                    : 'text-ink-800 dark:text-[#CBD5E1] hover:bg-paper-200 dark:hover:bg-[#1D222F] border-transparent hover:border-ink-900 dark:hover:border-[#2E3547]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools (Theme, Search, Surprise, About) */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 bg-paper-50 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] text-ink-800 dark:text-[#F8FAFC] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C] text-xs font-mono transition-all"
            title={theme === 'dark' ? "Switch to Daytime Scholar (Light Mode)" : "Switch to Midnight Scriptorium (Dark Mode)"}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-ink-800" />
            )}
          </button>

          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 bg-paper-50 dark:bg-[#1D222F] hover:bg-paper-200 dark:hover:bg-[#252C3D] text-ink-800 dark:text-[#F8FAFC] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C] text-xs font-mono transition-all"
            title="Search (⌘K or Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-ink-700 dark:text-[#CBD5E1]" />
            <span className="hidden sm:inline font-semibold">SEARCH</span>
            <kbd className="hidden md:inline-block bg-paper-300 dark:bg-[#252C3D] text-ink-900 dark:text-[#F8FAFC] text-[10px] px-1 py-0.5 border border-ink-900/40 dark:border-[#3B445B] rounded-none font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Surprise Me CTA */}
          <button
            onClick={onSurpriseMe}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-paper-100 dark:bg-[#1D222F] hover:bg-entity-school hover:text-white dark:hover:bg-entity-school text-ink-900 dark:text-[#F8FAFC] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C] text-xs font-mono font-bold tracking-wider uppercase transition-all"
            title="Random Philosophical Discovery"
          >
            <Sparkles className="w-3.5 h-3.5 text-entity-school group-hover:text-white" />
            <span>SURPRISE ME</span>
          </button>

          {/* About */}
          <button
            onClick={() => handleNavClick('about')}
            className={`hidden md:flex items-center space-x-1 p-1.5 text-xs font-mono uppercase tracking-wider border-2 ${
              currentView === 'about' 
                ? 'bg-ink-900 dark:bg-[#F8FAFC] text-paper-100 dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC]' 
                : 'text-ink-700 dark:text-[#CBD5E1] hover:bg-paper-200 dark:hover:bg-[#1D222F] border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C]'
            }`}
            title="About & Methodology (SEP Provenance)"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 bg-paper-200 dark:bg-[#1D222F] border-2 border-ink-900 dark:border-[#2E3547] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C] text-ink-900 dark:text-[#F8FAFC] hover:bg-paper-300 dark:hover:bg-[#252C3D]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-paper-100 dark:bg-[#11131A] border-b-2 border-ink-900 dark:border-[#2E3547] px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 p-2.5 text-xs font-mono font-bold uppercase tracking-wider border-2 text-left ${
                    isActive 
                      ? 'bg-ink-900 dark:bg-[#F8FAFC] text-paper-100 dark:text-[#0C0E12] border-ink-900 dark:border-[#F8FAFC] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C]' 
                      : 'bg-paper-50 dark:bg-[#151821] text-ink-800 dark:text-[#CBD5E1] border-ink-900 dark:border-[#2E3547] hover:bg-paper-200 dark:hover:bg-[#1D222F] shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#06080C]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-ink-900/20 dark:border-[#2E3547] flex items-center justify-between">
            <button
              onClick={onSurpriseMe}
              className="flex items-center space-x-1.5 px-3 py-2 bg-entity-school text-white text-xs font-mono font-bold uppercase tracking-wider shadow-brutal-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Surprise Discovery</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="flex items-center space-x-1 px-3 py-2 bg-paper-200 dark:bg-[#1D222F] text-ink-900 dark:text-[#F8FAFC] border-2 border-ink-900 dark:border-[#2E3547] text-xs font-mono font-bold uppercase"
            >
              <Info className="w-3.5 h-3.5 mr-1" />
              <span>About SEP</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
