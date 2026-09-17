export type IndianTraditionClassification =
  | 'Vedic & Upaniṣadic'
  | 'Brahmanical / Āstika'
  | 'Śramaṇa / Nāstika'
  | 'Buddhist'
  | 'Jain'
  | 'Cārvāka / Materialist'
  | 'Śaiva'
  | 'Śākta'
  | 'Vaiṣṇava'
  | 'Modern & Contemporary';

export type IndianSchoolCategory = 'astika' | 'nastika' | 'saiva-sakta' | 'modern';

export type PramanaType = 
  | 'pratyaksa'     // Perception
  | 'anumana'      // Inference
  | 'upamana'      // Comparison / Analogy
  | 'sabda'        // Verbal Testimony
  | 'arthapatti'   // Postulation / Presumption
  | 'anupalabdhi'; // Non-Apprehension / Negative Proof

export type ScriptMode = 'english' | 'iast' | 'devanagari';

export type DepthLevel = 'quick' | 'understand' | 'scholar';

export type EpistemicStatus = 
  | 'Established Fact'
  | 'Scholarly Consensus'
  | 'Contested Dating'
  | 'Disputed Interpretation'
  | 'Traditional Account'
  | 'Modern Synthesis';

export interface SanskritTerm {
  english: string;
  iast: string;
  devanagari: string;
  paliPrakrit?: string;
  literalMeaning?: string;
}

export interface PramanaInfo {
  id: PramanaType;
  name: SanskritTerm;
  definition: string;
  scholarlyDescription: string;
  example: string;
  acceptedBySchools: string[]; // School IDs
  rejectedBySchools: string[]; // School IDs
}

export interface SyllogismMember {
  stepNumber: number;
  sanskritName: SanskritTerm;
  technicalRole: string;
  standardExample: string;
  philosophicalSignificance: string;
}

export interface NyayaSyllogismData {
  title: string;
  sanskritTerm: SanskritTerm;
  description: string;
  members: SyllogismMember[];
  vyaptiExplanation: {
    definition: string;
    example: string;
    fallacyRisk: string;
  };
  fallacies: {
    name: SanskritTerm;
    description: string;
    example: string;
  }[];
}

export interface IndianSchool {
  id: string;
  name: SanskritTerm;
  category: IndianSchoolCategory;
  traditionClassification: IndianTraditionClassification;
  historicalPeriod: string;
  dateRange: string;
  isAstika: boolean; // Accepts Vedic epistemic authority (Veda-prāmāṇya)
  astikaExplanation: string;
  foundationalThinker: SanskritTerm;
  primaryFoundationalText: SanskritTerm;
  acceptedPramanas: PramanaType[];
  coreMetaphysics: string;
  coreEpistemology: string;
  coreEthics: string;
  liberationTheory: {
    term: SanskritTerm;
    description: string;
    natureOfLiberation: string;
    means: string[];
  };
  keyDoctrines: {
    name: SanskritTerm;
    description: string;
    opposes: string;
  }[];
  quickSummary: string; // Level 1
  understandOverview: string; // Level 2
  scholarDetails: {
    textualTradition: string;
    commentarialChain: string[];
    scholarlyControversies: string[];
    sepCitations: { title: string; url: string }[];
  }; // Level 3
  antiAnachronismNote: {
    modernComparison: string;
    historicalQualification: string;
  };
  representativeThinkerIds: string[];
  relatedDebates: string[]; // Debate IDs
}

export interface IndianPhilosopher {
  id: string;
  name: SanskritTerm;
  displayDates: string;
  approxYearStart: number;
  approxYearEnd: number;
  dateEpistemicStatus: EpistemicStatus;
  datingNote: string;
  tradition: IndianTraditionClassification;
  schoolId: string;
  region: string;
  primaryTexts: SanskritTerm[];
  majorContributions: string[];
  famousDebatesOrOpponents: string[];
  famousQuote?: {
    sanskrit?: string;
    iast: string;
    english: string;
    source: string;
  };
  summary: string; // Level 1
  understandBio: string; // Level 2
  scholarNotes: string; // Level 3
  sepUrl?: string;
  sepTitle?: string;
}

export interface IndianConcept {
  id: string;
  name: SanskritTerm;
  category: 'Metaphysics' | 'Epistemology' | 'Ethics & Liberation' | 'Logic & Language' | 'Psychology of Mind';
  definition: string;
  thePhilosophicalProblem: string;
  schoolsUsingConcept: {
    schoolId: string;
    interpretation: string;
  }[];
  schoolsRejectingOrRedefining: {
    schoolId: string;
    critique: string;
  }[];
  historicalTrajectory: {
    epoch: string;
    development: string;
  }[];
  primarySources: string[];
  antiAnachronismNote?: {
    modernComparison: string;
    historicalQualification: string;
  };
}

export interface IndianProblemStance {
  schoolId: string;
  schoolName: SanskritTerm;
  stanceType: 'YES' | 'NO' | 'QUALIFIED' | 'TRANSCENDED' | 'REJECTS_FRAMEWORK';
  conciseFormula: string;
  coreArgument: string;
  keyConcepts: string[];
  citationOrSutra?: string;
}

export interface IndianProblem {
  id: string;
  question: string;
  sanskritQuestion?: SanskritTerm;
  domain: 'Metaphysics' | 'Epistemology' | 'Philosophy of Mind' | 'Philosophy of Religion' | 'Ethics & Action';
  theDilemma: string;
  historicalSignificance: string;
  stances: IndianProblemStance[];
}

export interface IndianDebate {
  id: string;
  title: string;
  parties: {
    sideA: {
      schoolId: string;
      name: SanskritTerm;
      representativeThinker: SanskritTerm;
      thesis: string;
      coreArguments: string[];
    };
    sideB: {
      schoolId: string;
      name: SanskritTerm;
      representativeThinker: SanskritTerm;
      thesis: string;
      coreArguments: string[];
    };
  };
  corePhilosophicalIssue: string;
  historicalLocusAndTexts: string;
  dialecticalResolutionOrLegacy: string;
}

export interface VedantaComparisonRow {
  doctrine: string;
  description: string;
  advaita: {
    position: string;
    technicalTerm: SanskritTerm;
    argumentAgainstOthers: string;
  };
  visistadvaita: {
    position: string;
    technicalTerm: SanskritTerm;
    argumentAgainstOthers: string;
  };
  dvaita: {
    position: string;
    technicalTerm: SanskritTerm;
    argumentAgainstOthers: string;
  };
  otherSystems: {
    systemName: string;
    position: string;
    technicalTerm: SanskritTerm;
  }[];
}

export interface TextCommentaryNode {
  title: SanskritTerm;
  author: SanskritTerm;
  approxDate: string;
  type: 'Mūla (Root Sūtra/Text)' | 'Bhāṣya (Primary Commentary)' | 'Vārttika (Explanatory Commentary)' | 'Ṭīkā (Sub-Commentary)' | 'Ṭippaṇī (Gloss)' | 'Modern Critical Translation';
  description: string;
  children?: TextCommentaryNode[];
}

export interface PrimaryTextTree {
  id: string;
  traditionOrSchool: string;
  rootText: SanskritTerm;
  summary: string;
  lineage: TextCommentaryNode[];
}

export interface ComparativePhilosophyCard {
  id: string;
  title: string;
  indianSide: {
    thinkerOrSchool: SanskritTerm;
    doctrine: string;
    keyTexts: string;
  };
  westernSide: {
    thinkerOrSchool: string;
    doctrine: string;
    keyTexts: string;
  };
  philosophicalComparison: string;
  historicalRelationship: 'None (Parallel Independent Inquiry)' | 'Uncertain / Indirect Transmission' | 'Documented Modern Reception';
  antiAnachronismWarning: string;
}

export interface IndianEpoch {
  id: string;
  name: SanskritTerm;
  timeRange: string;
  startYear: number;
  endYear: number;
  dateUncertaintyNote: string;
  overview: string;
  keyEvents: string[];
  keyTraditionsActive: string[];
  representativeThinkerIds: string[];
}
