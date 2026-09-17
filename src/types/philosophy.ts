export type Era = 
  | 'ancient' 
  | 'medieval' 
  | 'early-modern' 
  | 'nineteenth-century' 
  | 'contemporary';

export type Tradition = 
  | 'Greek' 
  | 'Roman' 
  | 'Indian' 
  | 'Chinese' 
  | 'Islamic' 
  | 'Jewish' 
  | 'Christian' 
  | 'European' 
  | 'American' 
  | 'Global';

export type Domain = 
  | 'Metaphysics' 
  | 'Epistemology' 
  | 'Ethics' 
  | 'Political Philosophy' 
  | 'Philosophy of Mind' 
  | 'Logic' 
  | 'Philosophy of Language' 
  | 'Philosophy of Science' 
  | 'Philosophy of Religion' 
  | 'Philosophy of History'
  | 'Philosophy of Technology'
  | 'Philosophy of Action'
  | 'Aesthetics';

export type NodeType = 'philosopher' | 'concept' | 'school' | 'argument' | 'work';

export const ENTITY_SYMBOLS = {
  philosopher: '●',
  concept: '◆',
  school: '■',
  text: '▣',
  question: '?',
  argument: '◇',
  era: '◷',
  source: '◎'
} as const;

export type UncertaintyStatus = 
  | 'ESTABLISHED' 
  | 'PROBABLE' 
  | 'DISPUTED' 
  | 'TRADITIONAL ATTRIBUTION' 
  | 'UNCERTAIN';

export type SourceCategory = 
  | 'PRIMARY SOURCE' 
  | 'SECONDARY SCHOLARLY REFERENCE (SEP)' 
  | 'REFERENCE WORK' 
  | 'CRITICAL APPARATUS' 
  | 'CLASSICAL COMMENTARY';

export type RelationshipType = 
  | 'INFLUENCED'
  | 'CRITICIZED'
  | 'RESPONDED_TO'
  | 'DEVELOPED'
  | 'REJECTED'
  | 'INSPIRED'
  | 'PRECEDED'
  | 'ASSOCIATED_WITH'
  | 'MEMBER_OF'
  | 'ADDRESSED';

export type ConfidenceLevel = 'documented' | 'probable' | 'uncertain';

export interface Source {
  title: string;
  publisher: string;
  url: string;
  category?: SourceCategory;
  version?: string;
  accessedAt?: string;
  section?: string;
}

export interface DomainPosition {
  domain: Domain;
  position: string;
  isDisputed?: boolean;
  disputeNote?: string;
}

export interface TextWork {
  title: string;
  originalTitle?: string;
  approxYear?: string;
  language?: string;
  description?: string;
  significance?: string;
}

export interface Philosopher {
  id: string;
  name: string;
  nativeName?: string;
  birthYear: number; // Signed integer: -428 = 428 BCE, 1724 = 1724 CE
  deathYear: number;
  displayDates: string; // e.g. "c. 428/427 – 348/347 BCE"
  era: Era;
  tradition: Tradition;
  region: string;
  schools: string[]; // School IDs
  domains: Domain[];
  concepts: string[]; // Concept IDs
  works: string[];
  summary: string; // Original 2-4 sentence summary
  positions: DomainPosition[];
  dna: { domain: Domain; weight: number }[]; // Visual topic map
  influences: string[]; // Philosopher IDs
  influenced: string[]; // Philosopher IDs
  critics?: string[]; // Philosopher IDs of explicit critics/opponents
  dateUncertainty?: UncertaintyStatus;
  dateUncertaintyNote?: string;
  relatedQuestions?: string[]; // BigQuestion IDs
  primaryTexts?: TextWork[];
  famousQuote: {
    quote: string;
    context: string;
  };
  sepUrl: string;
  sepTitle: string;
}

export interface MajorPosition {
  title: string;
  description: string;
  representativeThinkers: string[]; // Philosopher IDs
}

export interface ConceptEpoch {
  era: Era;
  label: string;
  keyThinkers: string[]; // Philosopher IDs
  developmentDescription: string;
}

export interface Concept {
  id: string;
  name: string;
  domain: Domain[];
  summary: string;
  theQuestion: string; // "What is the philosophical problem?"
  majorPositions: MajorPosition[];
  historicalDevelopment: ConceptEpoch[];
  whyItMatters: string;
  philosophers: string[]; // Philosopher IDs
  schools: string[]; // School IDs
  relatedConcepts: string[]; // Concept IDs
  sources: Source[];
}

export interface School {
  id: string;
  name: string;
  period: string;
  tradition: Tradition;
  summary: string;
  coreTenets: string[];
  philosophers: string[]; // Philosopher IDs
  concepts: string[]; // Concept IDs
  opposedSchools?: string[]; // School IDs of rival/opposed traditions
  sepUrl: string;
}

export interface Relationship {
  id: string;
  source: string; // Entity ID
  target: string; // Entity ID
  sourceType: NodeType;
  targetType: NodeType;
  type: RelationshipType;
  description: string;
  evidence?: string;
  confidence: ConfidenceLevel;
  uncertainty?: UncertaintyStatus;
  sources: Source[];
}

export interface BigQuestion {
  id: string;
  question: string;
  subtitle: string;
  domain: Domain;
  coreProblem: string;
  keyThinkers: {
    philosopherId: string;
    stance: string;
  }[];
  keyConceptIds: string[];
}

export interface EraInfo {
  id: Era;
  name: string;
  timeRange: string;
  startYear: number;
  endYear: number;
  description: string;
  accent: string;
}

export type ViewMode = 
  | 'home'
  | 'timeline' 
  | 'hybrid'
  | 'graph' 
  | 'ideas' 
  | 'philosophers' 
  | 'schools' 
  | 'questions' 
  | 'compare' 
  | 'explore' 
  | 'indian'
  | 'about' 
  | 'methodology';
