import { SanskritTerm, ScriptMode, EpistemicStatus, PramanaType } from '../types/indianPhilosophy';

export const renderTerm = (
  term: SanskritTerm | undefined | null,
  mode: ScriptMode = 'english'
): string => {
  if (!term) return '';
  switch (mode) {
    case 'devanagari':
      return term.devanagari || term.iast || term.english;
    case 'iast':
      return term.iast || term.english;
    case 'english':
    default:
      return term.english;
  }
};

export const renderFullTerm = (
  term: SanskritTerm | undefined | null,
  mode: ScriptMode = 'english'
): { primary: string; secondary: string; scriptBadge: string } => {
  if (!term) return { primary: '', secondary: '', scriptBadge: '' };

  if (mode === 'devanagari') {
    return {
      primary: term.devanagari,
      secondary: `${term.iast} (${term.english})`,
      scriptBadge: 'संस्कृतम्'
    };
  } else if (mode === 'iast') {
    return {
      primary: term.iast,
      secondary: `${term.english} • ${term.devanagari}`,
      scriptBadge: 'IAST'
    };
  } else {
    return {
      primary: term.english,
      secondary: `${term.iast} [${term.devanagari}]`,
      scriptBadge: 'ENG'
    };
  }
};

export const getEpistemicBadgeStyle = (status: EpistemicStatus): { bg: string; text: string; border: string } => {
  switch (status) {
    case 'Established Fact':
      return {
        bg: 'bg-emerald-50 dark:bg-emerald-950/40',
        text: 'text-emerald-800 dark:text-emerald-300',
        border: 'border-emerald-600 dark:border-emerald-700'
      };
    case 'Scholarly Consensus':
      return {
        bg: 'bg-blue-50 dark:bg-blue-950/40',
        text: 'text-blue-800 dark:text-blue-300',
        border: 'border-blue-600 dark:border-blue-700'
      };
    case 'Contested Dating':
      return {
        bg: 'bg-amber-50 dark:bg-amber-950/40',
        text: 'text-amber-800 dark:text-amber-300',
        border: 'border-amber-600 dark:border-amber-700'
      };
    case 'Disputed Interpretation':
      return {
        bg: 'bg-rose-50 dark:bg-rose-950/40',
        text: 'text-rose-800 dark:text-rose-300',
        border: 'border-rose-600 dark:border-rose-700'
      };
    case 'Traditional Account':
      return {
        bg: 'bg-purple-50 dark:bg-purple-950/40',
        text: 'text-purple-800 dark:text-purple-300',
        border: 'border-purple-600 dark:border-purple-700'
      };
    case 'Modern Synthesis':
    default:
      return {
        bg: 'bg-slate-100 dark:bg-slate-800/40',
        text: 'text-slate-800 dark:text-slate-300',
        border: 'border-slate-500 dark:border-slate-600'
      };
  }
};

export const getPramanaDisplayName = (type: PramanaType, mode: ScriptMode = 'english'): string => {
  const map: Record<PramanaType, SanskritTerm> = {
    pratyaksa: { english: 'Perception', iast: 'Pratyakṣa', devanagari: 'प्रत्यक्ष' },
    anumana: { english: 'Inference', iast: 'Anumāna', devanagari: 'अनुमान' },
    upamana: { english: 'Analogy / Comparison', iast: 'Upamāna', devanagari: 'उपमान' },
    sabda: { english: 'Verbal Testimony', iast: 'Śabda', devanagari: 'शब्द' },
    arthapatti: { english: 'Postulation', iast: 'Arthāpatti', devanagari: 'अर्थापत्ति' },
    anupalabdhi: { english: 'Non-Apprehension', iast: 'Anupalabdhi', devanagari: 'अनुपलब्धि' },
  };
  return renderTerm(map[type], mode);
};
