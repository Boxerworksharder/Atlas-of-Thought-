import React, { useState, useEffect } from 'react';
import { 
  PHILOSOPHERS, 
  CONCEPTS, 
  SCHOOLS, 
  BIG_QUESTIONS
} from './data/philosophyData';
import { 
  Philosopher, 
  Concept, 
  School, 
  ViewMode, 
  Era, 
  Tradition, 
  Domain 
} from './types/philosophy';
import { TopNav } from './components/TopNav';
import { CommandPalette } from './components/CommandPalette';
import { HomeView } from './components/HomeView';
import { TimelineControls } from './components/TimelineControls';
import { TimelineTrack } from './components/TimelineTrack';
import { TimelineHybridView } from './components/TimelineHybridView';
import { KnowledgeGraphView } from './components/KnowledgeGraphView';
import { IdeaJourneyView } from './components/IdeaJourneyView';
import { PhilosopherDossierPanel } from './components/PhilosopherDossierPanel';
import { ConceptDossierModal } from './components/ConceptDossierModal';
import { SchoolDossierModal } from './components/SchoolDossierModal';
import { CompareView } from './components/CompareView';
import { BigQuestionsView } from './components/BigQuestionsView';
import { ExploreCatalogView } from './components/ExploreCatalogView';
import { AboutMethodologyView } from './components/AboutMethodologyView';
import { IndianPhilosophyHubView } from './components/indian/IndianPhilosophyHubView';
import { SurpriseModal } from './components/SurpriseModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [isHybridTimeline, setIsHybridTimeline] = useState(false);

  // Selection state
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<Philosopher | null>(PHILOSOPHERS[0]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(PHILOSOPHERS[0].id);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(CONCEPTS[0].id);
  const [, setSelectedSchoolId] = useState<string | null>(SCHOOLS[0].id);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(BIG_QUESTIONS[0].id);

  // Compare candidates
  const [compareThinkerA, setCompareThinkerA] = useState<Philosopher | null>(null);
  const [compareThinkerB, setCompareThinkerB] = useState<Philosopher | null>(null);

  // Modals & Panels
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [modalConceptId, setModalConceptId] = useState<string | null>(null);
  const [modalSchoolId, setModalSchoolId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [surpriseEntity, setSurpriseEntity] = useState<{
    type: 'philosopher' | 'concept' | 'school';
    data: Philosopher | Concept | School;
    whyInteresting: string;
  } | null>(null);

  // Theme state ('light' | 'dark') - Default is Daytime Scholar ('light')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('atlas_theme_v2');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('atlas_theme_v2', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // Timeline & Filters
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [selectedEra, setSelectedEra] = useState<Era | 'all'>('all');
  const [selectedTradition, setSelectedTradition] = useState<Tradition | 'all'>('all');
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
  const [targetYear, setTargetYear] = useState<number | null>(null);

  // Deep Link URL Sync (Prompt Section 52)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as ViewMode | null;
    const focusParam = params.get('focus');
    const conceptParam = params.get('concept');

    if (viewParam === 'hybrid') {
      setCurrentView('timeline');
      setIsHybridTimeline(true);
    } else if (viewParam) {
      setCurrentView(viewParam);
    }
    if (focusParam) {
      const p = PHILOSOPHERS.find(x => x.id === focusParam);
      if (p) {
        setSelectedPhilosopher(p);
        setSelectedNodeId(p.id);
        setIsDossierOpen(true);
      }
    }
    if (conceptParam) {
      setSelectedConceptId(conceptParam);
    }
  }, []);

  const updateUrl = (view: ViewMode, id?: string) => {
    const params = new URLSearchParams();
    if (view !== 'home') params.set('view', view);
    if (id) params.set('focus', id);
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  };

  const handleSelectView = (view: ViewMode) => {
    setCurrentView(view);
    if (view === 'hybrid') {
      setIsHybridTimeline(true);
      setCurrentView('timeline');
      updateUrl('timeline');
    } else {
      setIsHybridTimeline(false);
      updateUrl(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPhilosopher = (p: Philosopher) => {
    setSelectedPhilosopher(p);
    setSelectedNodeId(p.id);
    setIsDossierOpen(true);
    updateUrl(currentView, p.id);
  };

  const handleSelectPhilosopherById = (id: string) => {
    const p = PHILOSOPHERS.find(x => x.id === id);
    if (p) {
      handleSelectPhilosopher(p);
    }
  };

  const handleSelectConcept = (id: string) => {
    setSelectedConceptId(id);
    setSelectedNodeId(id);
    setCurrentView('ideas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConceptDossier = (id: string) => {
    setModalConceptId(id);
  };

  const handleSelectSchool = (id: string) => {
    setSelectedSchoolId(id);
    setSelectedNodeId(id);
    setCurrentView('schools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSchoolDossier = (id: string) => {
    setModalSchoolId(id);
  };

  const handleSelectQuestion = (id: string) => {
    setSelectedQuestionId(id);
    setCurrentView('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToYear = (year: number) => {
    setTargetYear(year);
    if (currentView !== 'timeline') {
      setCurrentView('timeline');
    }
  };

  const handleCompareWith = (p: Philosopher) => {
    setCompareThinkerA(p);
    // Pick an interesting default interlocutor (e.g. if Plato, pick Aristotle)
    const interlocutor = p.id === 'plato' 
      ? PHILOSOPHERS.find(x => x.id === 'aristotle') 
      : p.id === 'hume'
      ? PHILOSOPHERS.find(x => x.id === 'kant')
      : PHILOSOPHERS.find(x => x.id !== p.id) || PHILOSOPHERS[0];
    setCompareThinkerB(interlocutor ?? null);
    setCurrentView('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Surprise Me Randomizer
  const handleSurpriseMe = () => {
    const dice = Math.random();
    if (dice < 0.45) {
      // Random Philosopher
      const p = PHILOSOPHERS[Math.floor(Math.random() * PHILOSOPHERS.length)];
      setSurpriseEntity({
        type: 'philosopher',
        data: p,
        whyInteresting: `${p.name} fundamentally reshaped ${p.domains[0]} through the concept of ${p.concepts[0].replace('-', ' ')}.`
      });
    } else if (dice < 0.8) {
      // Random Concept
      const c = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
      setSurpriseEntity({
        type: 'concept',
        data: c,
        whyInteresting: c.theQuestion
      });
    } else {
      // Random School
      const s = SCHOOLS[Math.floor(Math.random() * SCHOOLS.length)];
      setSurpriseEntity({
        type: 'school',
        data: s,
        whyInteresting: `Developed in ${s.period} by the ${s.tradition} tradition, centering on: "${s.coreTenets[0]}".`
      });
    }
    setIsSurpriseOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper-100 dark:bg-[#0C0E12] text-ink-900 dark:text-[#F8FAFC] font-sans">
      
      {/* 1. Main Navigation Bar */}
      <TopNav
        currentView={isHybridTimeline ? 'hybrid' : currentView}
        onSelectView={handleSelectView}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSurpriseMe={handleSurpriseMe}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Primary Views */}
      <main className="flex-1">
        {/* HOMEPAGE VIEW */}
        {currentView === 'home' && (
          <HomeView
            onSelectView={handleSelectView}
            onSelectPhilosopher={handleSelectPhilosopher}
            onSelectConcept={handleSelectConcept}
            onSelectQuestion={handleSelectQuestion}
            onSurpriseMe={handleSurpriseMe}
          />
        )}

        {/* TIMELINE VIEW (Horizontal Desktop / Vertical Mobile or Hybrid) */}
        {currentView === 'timeline' && (
          <div>
            <TimelineControls
              zoomLevel={zoomLevel}
              onZoomIn={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
              onZoomOut={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
              onFitAll={() => { setZoomLevel(0.75); setSelectedEra('all'); }}
              onReset={() => { setZoomLevel(1.0); setSelectedEra('all'); setSelectedTradition('all'); setSelectedDomain('all'); }}
              onJumpToYear={handleJumpToYear}
              selectedEra={selectedEra}
              onSelectEra={setSelectedEra}
              selectedTradition={selectedTradition}
              onSelectTradition={setSelectedTradition}
              selectedDomain={selectedDomain}
              onSelectDomain={setSelectedDomain}
              isHybridMode={isHybridTimeline}
              onToggleHybrid={() => setIsHybridTimeline(!isHybridTimeline)}
            />

            {isHybridTimeline ? (
              <TimelineHybridView
                selectedPhilosopher={selectedPhilosopher}
                onSelectPhilosopher={handleSelectPhilosopher}
              />
            ) : (
              <TimelineTrack
                zoomLevel={zoomLevel}
                selectedEra={selectedEra}
                selectedTradition={selectedTradition}
                selectedDomain={selectedDomain}
                selectedPhilosopher={selectedPhilosopher}
                onSelectPhilosopher={handleSelectPhilosopher}
                targetYear={targetYear}
                onClearTargetYear={() => setTargetYear(null)}
              />
            )}
          </div>
        )}

        {/* KNOWLEDGE GRAPH VIEW (D3 Force-Directed with Focus Mode) */}
        {currentView === 'graph' && (
          <KnowledgeGraphView
            theme={theme}
            selectedNodeId={selectedNodeId}
            onSelectNode={(id, type) => {
              setSelectedNodeId(id);
              if (type === 'concept') setSelectedConceptId(id);
            }}
            onSelectPhilosopher={handleSelectPhilosopher}
            onSelectConcept={handleOpenConceptDossier}
            onSelectSchool={handleOpenSchoolDossier}
          />
        )}

        {/* "FOLLOW THE IDEA" CONCEPT PROGRESSION VIEW */}
        {currentView === 'ideas' && (
          <IdeaJourneyView
            selectedConceptId={selectedConceptId}
            onSelectConcept={handleSelectConcept}
            onSelectPhilosopher={handleSelectPhilosopher}
          />
        )}

        {/* PHILOSOPHERS / SCHOOLS / EXPLORE DIRECTORY VIEW */}
        {(currentView === 'philosophers' || currentView === 'schools' || currentView === 'explore') && (
          <ExploreCatalogView
            onSelectPhilosopher={handleSelectPhilosopher}
            onSelectConcept={handleSelectConcept}
            onSelectSchool={handleSelectSchool}
          />
        )}

        {/* BIG QUESTIONS HUB VIEW */}
        {currentView === 'questions' && (
          <BigQuestionsView
            selectedQuestionId={selectedQuestionId}
            onSelectPhilosopher={handleSelectPhilosopher}
            onSelectConcept={handleSelectConcept}
          />
        )}

        {/* STRUCTURED COMPARE VIEW */}
        {currentView === 'compare' && (
          <CompareView
            initialPhilosopherA={compareThinkerA}
            initialPhilosopherB={compareThinkerB}
            onSelectPhilosopher={handleSelectPhilosopher}
          />
        )}

        {/* DEDICATED INDIAN PHILOSOPHY KNOWLEDGE SYSTEM */}
        {currentView === 'indian' && (
          <IndianPhilosophyHubView />
        )}

        {/* ABOUT & METHODOLOGY VIEW (SEP Provenance) */}
        {(currentView === 'about' || currentView === 'methodology') && (
          <AboutMethodologyView />
        )}
      </main>

      {/* 3. Slide-Over Dossier Panel for Philosophers */}
      <PhilosopherDossierPanel
        philosopher={selectedPhilosopher}
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        onSelectPhilosopherById={handleSelectPhilosopherById}
        onSelectConcept={handleOpenConceptDossier}
        onSelectSchool={handleOpenSchoolDossier}
        onSelectQuestion={handleSelectQuestion}
        onCompareWith={handleCompareWith}
      />

      {/* 3b. In-Situ Concept Dossier Sheet */}
      <ConceptDossierModal
        conceptId={modalConceptId}
        isOpen={!!modalConceptId}
        onClose={() => setModalConceptId(null)}
        onSelectPhilosopherById={(id) => {
          setModalConceptId(null);
          handleSelectPhilosopherById(id);
        }}
        onSelectSchoolById={(id) => {
          setModalConceptId(null);
          handleOpenSchoolDossier(id);
        }}
        onSelectRelatedConceptById={(id) => {
          setModalConceptId(id);
        }}
      />

      {/* 3c. In-Situ School & Tradition Dossier Sheet */}
      <SchoolDossierModal
        schoolId={modalSchoolId}
        isOpen={!!modalSchoolId}
        onClose={() => setModalSchoolId(null)}
        onSelectPhilosopherById={(id) => {
          setModalSchoolId(null);
          handleSelectPhilosopherById(id);
        }}
        onSelectConceptById={(id) => {
          setModalSchoolId(null);
          handleOpenConceptDossier(id);
        }}
        onSelectOpposedSchoolById={(id) => {
          setModalSchoolId(id);
        }}
      />

      {/* 4. Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectPhilosopher={(id) => {
          handleSelectPhilosopherById(id);
        }}
        onSelectConcept={handleSelectConcept}
        onSelectSchool={handleSelectSchool}
        onSelectQuestion={handleSelectQuestion}
        onSelectView={handleSelectView}
        onJumpToYear={handleJumpToYear}
        onSurpriseMe={handleSurpriseMe}
      />

      {/* 5. Surprise Me Random Discovery Modal */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        entity={surpriseEntity}
        onExplore={(type, id) => {
          if (type === 'philosopher') handleSelectPhilosopherById(id);
          else if (type === 'concept') handleSelectConcept(id);
          else handleSelectSchool(id);
        }}
      />

      {/* 6. Minimal Academic Footer */}
      <Footer onSelectView={handleSelectView} />

    </div>
  );
};
export default App;
