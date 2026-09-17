import { 
  Philosopher, 
  Concept, 
  School, 
  Relationship, 
  BigQuestion, 
  EraInfo, 
  Domain, 
  Tradition 
} from '../types/philosophy';

export const ERAS: EraInfo[] = [
  {
    id: 'ancient',
    name: 'Ancient & Classical Era',
    timeRange: 'c. 600 BCE – 400 CE',
    startYear: -600,
    endYear: 400,
    description: 'Foundational cosmic inquiry, dialectic reasoning, virtue ethics, and metaphysical systems across Greece, Rome, India, and China.',
    accent: '#B93828'
  },
  {
    id: 'medieval',
    name: 'Medieval & Golden Ages',
    timeRange: 'c. 400 – 1500 CE',
    startYear: 400,
    endYear: 1500,
    description: 'Synthesis of classical philosophy with monotheistic theology, scholastic logic, and rational inquiry across Christian, Islamic, and Jewish traditions.',
    accent: '#B45309'
  },
  {
    id: 'early-modern',
    name: 'Early Modern & Enlightenment',
    timeRange: 'c. 1500 – 1800 CE',
    startYear: 1500,
    endYear: 1800,
    description: 'The Scientific Revolution, the clash between Rationalism and Empiricism, social contract theories, and Kant’s critical turn.',
    accent: '#1E3A8A'
  },
  {
    id: 'nineteenth-century',
    name: '19th Century & Dialectics',
    timeRange: 'c. 1800 – 1900 CE',
    startYear: 1800,
    endYear: 1900,
    description: 'German Idealism, the critique of religion and capitalism, radical individualism, utilitarian calculus, and proto-existentialist revolt.',
    accent: '#15803D'
  },
  {
    id: 'contemporary',
    name: '20th Century & Contemporary',
    timeRange: 'c. 1900 – Present',
    startYear: 1900,
    endYear: 2026,
    description: 'The linguistic turn, analytic logic, phenomenology, existential freedom, critical theory, post-structuralism, and philosophy of mind.',
    accent: '#6B21A8'
  }
];

export const TRADITIONS: Tradition[] = [
  'Greek',
  'Roman',
  'Indian',
  'Chinese',
  'Islamic',
  'Jewish',
  'Christian',
  'European',
  'American',
  'Global'
];

export const DOMAINS: Domain[] = [
  'Metaphysics',
  'Epistemology',
  'Ethics',
  'Political Philosophy',
  'Philosophy of Mind',
  'Logic',
  'Philosophy of Language',
  'Philosophy of Science',
  'Philosophy of Religion',
  'Aesthetics'
];

export const PHILOSOPHERS: Philosopher[] = [
  // --- ANCIENT GREEK & ROMAN ---
  {
    id: 'socrates',
    name: 'Socrates',
    nativeName: 'Σωκράτης',
    birthYear: -469,
    deathYear: -399,
    displayDates: 'c. 469 – 399 BCE',
    era: 'ancient',
    tradition: 'Greek',
    region: 'Athens, Greece',
    schools: ['classical-greek'],
    domains: ['Ethics', 'Epistemology'],
    concepts: ['socratic-method', 'virtue-ethics', 'eudaimonia'],
    works: ['Apology (via Plato)', 'Crito (via Plato)', 'Meno (via Plato)'],
    summary: 'The foundational figure of Western moral philosophy. Socrates shifted speculative natural inquiry toward self-examination, virtue, and dialectical cross-examination of unexamined dogma.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Wisdom begins with admitting one’s own ignorance ("I know that I know nothing"). Beliefs must survive rigorous counter-questioning or be surrendered.',
        isDisputed: true,
        disputeNote: 'The "Socratic problem": Scholars dispute which views in early dialogues belong strictly to the historical Socrates versus literary Plato.'
      },
      {
        domain: 'Ethics',
        position: 'Virtue is identical with knowledge. No one errs willingly (moral intellectualism); wrongdoing stems solely from epistemic misjudgment of the good.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Epistemology', weight: 85 },
      { domain: 'Political Philosophy', weight: 60 },
      { domain: 'Logic', weight: 50 },
      { domain: 'Metaphysics', weight: 20 }
    ],
    influences: [],
    influenced: ['plato', 'zeno-of-citium', 'epicurus'],
    famousQuote: {
      quote: 'The unexamined life is not worth living.',
      context: 'Plato, Apology 38a'
    },
    sepUrl: 'https://plato.stanford.edu/entries/socrates/',
    sepTitle: 'Socrates'
  },
  {
    id: 'plato',
    name: 'Plato',
    nativeName: 'Πλάτων',
    birthYear: -428,
    deathYear: -348,
    displayDates: 'c. 428/427 – 348/347 BCE',
    era: 'ancient',
    tradition: 'Greek',
    region: 'Athens, Greece',
    schools: ['platonism'],
    domains: ['Metaphysics', 'Epistemology', 'Ethics', 'Political Philosophy', 'Aesthetics'],
    concepts: ['theory-of-forms', 'republic-justice', 'anamnesis', 'problem-of-universals'],
    works: ['The Republic', 'Symposium', 'Phaedo', 'Parmenides', 'Timaeus'],
    summary: 'Author of philosophical dialogues that established Western philosophy. Plato proposed that sensible reality participates in transcendent, immutable intelligible Forms (Ideai), accessible only through dialectical intellect.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The physical realm is an imperfect, fluctuating shadow of true reality: the transcendent, eternal, mind-independent Realm of Forms.',
        isDisputed: true,
        disputeNote: 'Debate persists over whether Plato abandoned or radically modified the separate Theory of Forms in late dialogues like Parmenides and Sophist.'
      },
      {
        domain: 'Epistemology',
        position: 'Knowledge is distinct from true belief; genuine knowledge is recollection (anamnesis) of transcendent Forms experienced before bodily incarnation.'
      },
      {
        domain: 'Political Philosophy',
        position: 'Justice in the polis mirrors justice in the tripartite soul; society should be guided by philosopher-kings possessing wisdom of the Form of the Good.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Epistemology', weight: 90 },
      { domain: 'Political Philosophy', weight: 85 },
      { domain: 'Ethics', weight: 80 },
      { domain: 'Aesthetics', weight: 65 }
    ],
    influences: ['socrates'],
    influenced: ['aristotle', 'augustine', 'descartes', 'kant'],
    famousQuote: {
      quote: 'The society we have described can never grow into a reality until philosophers become rulers in this world.',
      context: 'The Republic, Book V'
    },
    sepUrl: 'https://plato.stanford.edu/entries/plato/',
    sepTitle: 'Plato'
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    nativeName: 'Ἀριστοτέλης',
    birthYear: -384,
    deathYear: -322,
    displayDates: '384 – 322 BCE',
    era: 'ancient',
    tradition: 'Greek',
    region: 'Stagira & Athens, Greece',
    schools: ['aristotelianism'],
    domains: ['Metaphysics', 'Logic', 'Ethics', 'Philosophy of Science', 'Political Philosophy'],
    concepts: ['substance-ontology', 'four-causes', 'virtue-ethics', 'teleology', 'eudaimonia'],
    works: ['Nicomachean Ethics', 'Metaphysics', 'Politics', 'Organon', 'De Anima'],
    summary: 'Pupil of Plato and tutor to Alexander the Great. Aristotle grounded reality in immanent substances composed of matter and form (hylomorphism), founded formal logic (syllogistics), and articulated teleological virtue ethics.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'Forms do not exist in a detached transcendent realm; they exist immanently instantiated within concrete physical substances (hylomorphism: matter shaped by form).'
      },
      {
        domain: 'Ethics',
        position: 'Human flourishing (eudaimonia) is an activity of the soul exhibiting excellence (arete), cultivating the golden mean between excess and deficiency.'
      },
      {
        domain: 'Philosophy of Science',
        position: 'Complete understanding of any natural phenomenon requires explaining four causes: material, formal, efficient, and final (teleological purpose).'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Logic', weight: 95 },
      { domain: 'Ethics', weight: 90 },
      { domain: 'Philosophy of Science', weight: 85 },
      { domain: 'Political Philosophy', weight: 75 }
    ],
    influences: ['plato', 'socrates'],
    influenced: ['avicenna', 'aquinas', 'hume', 'hegel'],
    famousQuote: {
      quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
      context: 'Nicomachean Ethics II.1 (Will Durant paraphrase)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/aristotle/',
    sepTitle: 'Aristotle'
  },
  {
    id: 'epicurus',
    name: 'Epicurus',
    nativeName: 'Ἐπίκουρος',
    birthYear: -341,
    deathYear: -270,
    displayDates: '341 – 270 BCE',
    era: 'ancient',
    tradition: 'Greek',
    region: 'Samos & Athens, Greece',
    schools: ['epicureanism'],
    domains: ['Ethics', 'Metaphysics', 'Epistemology'],
    concepts: ['ataraxia', 'atomism', 'problem-of-evil'],
    works: ['Letter to Menoeceus', 'Principal Doctrines', 'Letter to Herodotus'],
    summary: 'Founder of Epicureanism. Epicurus combined mechanistic atomism (borrowed from Democritus) with a tranquil hedonism, identifying the highest good as ataraxia (untroubled serenity) and freedom from fear of death and gods.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The universe consists entirely of indestructible atoms moving through empty void with occasional indeterminate swerves (clinamen).'
      },
      {
        domain: 'Ethics',
        position: 'Pleasure is the beginning and end of a blessed life, but genuine pleasure is the absence of physical pain (aponia) and psychic anxiety (ataraxia).'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Metaphysics', weight: 80 },
      { domain: 'Philosophy of Religion', weight: 75 },
      { domain: 'Epistemology', weight: 65 }
    ],
    influences: ['socrates'],
    influenced: ['spinoza', 'mill', 'marx'],
    famousQuote: {
      quote: 'Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist.',
      context: 'Letter to Menoeceus'
    },
    sepUrl: 'https://plato.stanford.edu/entries/epicurus/',
    sepTitle: 'Epicurus'
  },
  {
    id: 'zeno-of-citium',
    name: 'Zeno of Citium',
    nativeName: 'Ζήνων ὁ Κιτιεύς',
    birthYear: -334,
    deathYear: -262,
    displayDates: 'c. 334 – 262 BCE',
    era: 'ancient',
    tradition: 'Greek',
    region: 'Citium, Cyprus & Athens, Greece',
    schools: ['stoicism'],
    domains: ['Ethics', 'Logic', 'Metaphysics'],
    concepts: ['stoic-virtue', 'logos-pantheism', 'apatheia'],
    works: ['Republic (lost)', 'On Life According to Nature'],
    summary: 'Founder of Stoicism on the Painted Stoa in Athens. Taught that virtue is the sole genuine good, the universe is governed by rational providence (Logos), and emotions should be aligned with rational nature.',
    positions: [
      {
        domain: 'Ethics',
        position: 'Virtue alone suffices for happiness. External conditions (wealth, health, fame) are indifferents (adiaphora) that cannot compromise moral character.'
      },
      {
        domain: 'Metaphysics',
        position: 'The cosmos is a singular living, rational material whole ordered by an immanent fiery breath (pneuma) or divine Logos.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Metaphysics', weight: 75 },
      { domain: 'Logic', weight: 70 },
      { domain: 'Philosophy of Religion', weight: 60 }
    ],
    influences: ['socrates'],
    influenced: ['seneca', 'epictetus', 'marcus-aurelius', 'spinoza'],
    famousQuote: {
      quote: 'Happiness is a good flow of life.',
      context: 'Fragments of Zeno (Stobaeus, Anthologium)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/stoicism/',
    sepTitle: 'Stoicism'
  },
  {
    id: 'seneca',
    name: 'Seneca the Younger',
    nativeName: 'Lucius Annaeus Seneca',
    birthYear: -4,
    deathYear: 65,
    displayDates: 'c. 4 BCE – 65 CE',
    era: 'ancient',
    tradition: 'Roman',
    region: 'Corduba, Hispania & Rome',
    schools: ['stoicism'],
    domains: ['Ethics', 'Political Philosophy'],
    concepts: ['stoic-virtue', 'memento-mori', 'tranquility'],
    works: ['Letters from a Stoic (Epistulae Morales)', 'On the Shortness of Life', 'On Anger'],
    summary: 'Roman Stoic statesman, dramatist, and advisor to Emperor Nero. Seneca provided psychological, practical counsel on mastering rage, confronting mortality, and preserving interior tranquility against imperial chaos.',
    positions: [
      {
        domain: 'Ethics',
        position: 'Life is not short if used well; time is our only true possession, squandered when governed by irrational passions and unnecessary ambitions.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Political Philosophy', weight: 65 },
      { domain: 'Epistemology', weight: 50 }
    ],
    influences: ['zeno-of-citium'],
    influenced: ['marcus-aurelius', 'descartes', 'schopenhauer'],
    famousQuote: {
      quote: 'We suffer more often in imagination than in reality.',
      context: 'Epistulae Morales ad Lucilium, Letter 13'
    },
    sepUrl: 'https://plato.stanford.edu/entries/seneca/',
    sepTitle: 'Seneca'
  },
  {
    id: 'epictetus',
    name: 'Epictetus',
    nativeName: 'Ἐπίκτητος',
    birthYear: 50,
    deathYear: 135,
    displayDates: 'c. 50 – 135 CE',
    era: 'ancient',
    tradition: 'Roman',
    region: 'Hierapolis & Rome / Nicopolis',
    schools: ['stoicism'],
    domains: ['Ethics', 'Epistemology'],
    concepts: ['dichotomy-of-control', 'stoic-virtue', 'apatheia'],
    works: ['Discourses (transcribed by Arrian)', 'Enchiridion (Handbook)'],
    summary: 'Born a slave in the Roman Empire, Epictetus taught that interior freedom is invulnerable if one strictly distinguishes what is within our control (our judgments, impulses, desires) from what is not.',
    positions: [
      {
        domain: 'Ethics',
        position: 'Distinguish absolutely what depends on us (prohairesis / moral choice) from what does not. Distress arises not from events, but from our judgments about events.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 100 },
      { domain: 'Epistemology', weight: 65 },
      { domain: 'Philosophy of Mind', weight: 60 }
    ],
    influences: ['zeno-of-citium', 'socrates'],
    influenced: ['marcus-aurelius', 'spinoza'],
    famousQuote: {
      quote: 'Men are disturbed not by things, but by the views which they take of things.',
      context: 'Enchiridion, Chapter 5'
    },
    sepUrl: 'https://plato.stanford.edu/entries/epictetus/',
    sepTitle: 'Epictetus'
  },
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius',
    nativeName: 'Marcus Aurelius Antoninus',
    birthYear: 121,
    deathYear: 180,
    displayDates: '121 – 180 CE',
    era: 'ancient',
    tradition: 'Roman',
    region: 'Rome & Germanic Frontier',
    schools: ['stoicism'],
    domains: ['Ethics', 'Political Philosophy', 'Metaphysics'],
    concepts: ['cosmopolitanism', 'dichotomy-of-control', 'amor-fati', 'stoic-virtue'],
    works: ['Meditations (Τὰ εἰς ἑαυτόν)'],
    summary: 'Roman Emperor and philosopher. Authored private spiritual exercises (Meditations) during wartime campaigns, emphasizing cosmic duty, transience of fame, compassion for adversaries, and the inner citadel.',
    positions: [
      {
        domain: 'Ethics',
        position: 'The soul can construct an impregnable inner citadel by harmonizing will with universal nature, viewing obstacles as fuel for virtue.'
      },
      {
        domain: 'Political Philosophy',
        position: 'Humans are born for mutual cooperation as limbs of one body; our citizenship is not just Rome, but the universal cosmopolis of rational beings.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Political Philosophy', weight: 75 },
      { domain: 'Metaphysics', weight: 65 }
    ],
    influences: ['epictetus', 'seneca', 'zeno-of-citium'],
    influenced: ['spinoza', 'nietzsche'],
    famousQuote: {
      quote: 'The impediment to action advances action. What stands in the way becomes the way.',
      context: 'Meditations, Book V.20'
    },
    sepUrl: 'https://plato.stanford.edu/entries/marcus-aurelius/',
    sepTitle: 'Marcus Aurelius'
  },

  // --- ANCIENT CHINESE ---
  {
    id: 'confucius',
    name: 'Confucius',
    nativeName: '孔子 (Kongzi)',
    birthYear: -551,
    deathYear: -479,
    displayDates: '551 – 479 BCE',
    era: 'ancient',
    tradition: 'Chinese',
    region: 'Lu State (Shandong, China)',
    schools: ['confucianism'],
    domains: ['Ethics', 'Political Philosophy'],
    concepts: ['ren-humaneness', 'li-ritual-propriety', 'junzi-noble-person', 'filial-piety'],
    works: ['Analects (Lunyu)'],
    summary: 'Pivotal Chinese teacher and moral thinker. Propounded that social harmony and political stability depend upon the ethical cultivation of individuals through ritual propriety (Li) and reciprocal benevolence (Ren).',
    positions: [
      {
        domain: 'Ethics',
        position: 'Moral virtue (Ren) is nurtured through communal ritual and family relations; ruler and citizen alike must continuously refine themselves into a Junzi (exemplary person).'
      },
      {
        domain: 'Political Philosophy',
        position: 'Government must govern through moral example and cultural harmony (De), not coercive penal decrees.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Political Philosophy', weight: 90 },
      { domain: 'Philosophy of Religion', weight: 40 }
    ],
    influences: [],
    influenced: ['mencius'],
    famousQuote: {
      quote: 'Do not impose on others what you yourself do not desire.',
      context: 'Analects 15.24 (The Silver Rule)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/confucius/',
    sepTitle: 'Confucius'
  },
  {
    id: 'laozi',
    name: 'Laozi',
    nativeName: '老子',
    birthYear: -600,
    deathYear: -530,
    displayDates: 'c. 6th / 4th Century BCE',
    era: 'ancient',
    tradition: 'Chinese',
    region: 'Chu State (Henan, China)',
    schools: ['daoism'],
    domains: ['Metaphysics', 'Ethics', 'Political Philosophy'],
    concepts: ['dao-way', 'wu-wei-effortless-action', 'yin-yang'],
    works: ['Daodejing (Tao Te Ching)'],
    summary: 'Legendary founder of Daoism. Emphasized aligning with the nameless, ineffable cosmic Way (Dao) through non-contending effortless action (Wu Wei) and yielding softness over brittle force.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The Dao that can be spoken is not the eternal Dao. The primordial origin of heaven and earth is undifferentiated and spontaneously self-generating (Ziran).',
        isDisputed: true,
        disputeNote: 'Scholars debate whether Laozi was a single historical author or a composite tradition compiled over centuries.'
      },
      {
        domain: 'Ethics',
        position: 'Act through Wu Wei (non-interference); the softest water overcomes the hardest rock.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Ethics', weight: 85 },
      { domain: 'Political Philosophy', weight: 70 },
      { domain: 'Aesthetics', weight: 60 }
    ],
    influences: [],
    influenced: ['zhuangzi', 'heidegger'],
    famousQuote: {
      quote: 'A journey of a thousand miles begins with a single step.',
      context: 'Daodejing, Chapter 64'
    },
    sepUrl: 'https://plato.stanford.edu/entries/laozi/',
    sepTitle: 'Laozi'
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    nativeName: '莊子',
    birthYear: -369,
    deathYear: -286,
    displayDates: 'c. 369 – 286 BCE',
    era: 'ancient',
    tradition: 'Chinese',
    region: 'Song State (Henan/Anhui, China)',
    schools: ['daoism'],
    domains: ['Epistemology', 'Metaphysics', 'Ethics'],
    concepts: ['perspectivism', 'butterfly-dream', 'dao-way', 'spontaneity'],
    works: ['Zhuangzi (Inner Chapters)'],
    summary: 'Master Daoist dialectician, humorist, and epistemologist. Through brilliant parables and paradoxes, Zhuangzi demonstrated the relativity of human concepts, challenging rigid dogmatism through playful spontaneity.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'All perspectives are conditioned; language carves artificial boundaries upon organic reality. (Illustrated by the butterfly dream: who dreams whom?).'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Metaphysics', weight: 85 },
      { domain: 'Ethics', weight: 75 },
      { domain: 'Aesthetics', weight: 70 }
    ],
    influences: ['laozi'],
    influenced: ['chan-buddhism', 'nietzsche'],
    famousQuote: {
      quote: 'Once upon a time, I dreamt I was a butterfly, fluttering hither and thither... Now I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.',
      context: 'Zhuangzi, Chapter 2 (Discussion on Making All Things Equal)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/zhuangzi/',
    sepTitle: 'Zhuangzi'
  },

  // --- ANCIENT INDIAN ---
  {
    id: 'gautama-buddha',
    name: 'Siddhartha Gautama (The Buddha)',
    nativeName: 'सिद्धार्थ गौतम बुद्ध',
    birthYear: -563,
    deathYear: -483,
    displayDates: 'c. 563 – 483 BCE',
    era: 'ancient',
    tradition: 'Indian',
    region: 'Lumbini & Magadha (India/Nepal)',
    schools: ['early-buddhism'],
    domains: ['Epistemology', 'Metaphysics', 'Ethics', 'Philosophy of Mind'],
    concepts: ['anatta-no-self', 'dependent-origination', 'four-noble-truths', 'impermanence'],
    works: ['Dhammacakkappavattana Sutta', 'Anattalakkhana Sutta (Pali Canon)'],
    summary: 'Founder of Buddhism. Diagnosed suffering (dukkha) as arising from grasping at transient phenomena; demonstrated that personal selfhood is an ungrounded illusion (Anatta) dependent upon five constantly shifting aggregates (skandhas).',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'All phenomena exist in radical interdependence (Pratītyasamutpāda); nothing possesses enduring self-nature (Svabhāva).'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'The "self" is not an immutable substance, but a dynamic causal stream of physical forms, feelings, perceptions, volitions, and consciousness.'
      }
    ],
    dna: [
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Metaphysics', weight: 90 },
      { domain: 'Epistemology', weight: 80 }
    ],
    influences: [],
    influenced: ['nagarjuna', 'schopenhauer', 'parfit'],
    famousQuote: {
      quote: 'Peace comes from within. Do not seek it without.',
      context: 'Dhammapada'
    },
    sepUrl: 'https://plato.stanford.edu/entries/buddha/',
    sepTitle: 'Buddha'
  },
  {
    id: 'nagarjuna',
    name: 'Nagarjuna',
    nativeName: 'नागार्जुन',
    birthYear: 150,
    deathYear: 250,
    displayDates: 'c. 150 – 250 CE',
    era: 'ancient',
    tradition: 'Indian',
    region: 'Andhra Pradesh, India',
    schools: ['madhyamaka'],
    domains: ['Metaphysics', 'Epistemology', 'Logic'],
    concepts: ['shunyata-emptiness', 'two-truths-doctrine', 'dependent-origination'],
    works: ['Mūlamadhyamakakārikā (Fundamental Verses on the Middle Way)', 'Vigrahavyāvartanī'],
    summary: 'Founder of the Madhyamaka (Middle Way) school of Mahāyāna Buddhism. Used relentless deconstructive dialectic (reductio ad absurdum) to demonstrate that all entities and concepts are empty of inherent existence (Śūnyatā).',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'Whatever is dependently co-arisen is explained to be emptiness. Emptiness itself is not nothingness or nihilism, but the sheer absence of intrinsic independent nature.'
      },
      {
        domain: 'Epistemology',
        position: 'Two truths: Conventional truth (samvriti-satya) which guides everyday practical navigation, and Ultimate truth (paramartha-satya) where all conceptual projections collapse.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 100 },
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Logic', weight: 90 },
      { domain: 'Philosophy of Language', weight: 80 }
    ],
    influences: ['gautama-buddha'],
    influenced: ['adi-shankara', 'derrida', 'wittgenstein'],
    famousQuote: {
      quote: 'There is no difference between Samsara and Nirvana; the limit of Nirvana is the limit of Samsara.',
      context: 'Mūlamadhyamakakārikā XXV.19-20'
    },
    sepUrl: 'https://plato.stanford.edu/entries/nagarjuna/',
    sepTitle: 'Nagarjuna'
  },
  {
    id: 'adi-shankara',
    name: 'Adi Shankara',
    nativeName: 'आदि शङ्करः',
    birthYear: 788,
    deathYear: 820,
    displayDates: 'c. 788 – 820 CE',
    era: 'medieval',
    tradition: 'Indian',
    region: 'Kerala & Uttarakhand, India',
    schools: ['advaita-vedanta'],
    domains: ['Metaphysics', 'Epistemology', 'Philosophy of Religion'],
    concepts: ['advaita-non-dualism', 'brahman-atman-identity', 'maya-illusion'],
    works: ['Brahmasūtrabhāṣya', 'Upadeśasāhasrī', 'Vivekacūḍāmaṇi'],
    summary: 'Consolidator of Advaita (Non-Dual) Vedanta. Shankara synthesized the Upanishads to argue that the individual inner conscious witness (Atman) is completely identical with the ultimate non-dual ground of being (Brahman), sensible multiplicity being cosmic illusion (Maya).',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'Brahman is the sole, undivided, quality-free reality (Nirguna Brahman). The world of multiplicity and separation is an apparent superposition (Adhyasa) projected through Maya.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Pure consciousness (Sakshi / witness) is uncreated, non-composite, and ever-present through waking, dreaming, and deep sleep.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 100 },
      { domain: 'Philosophy of Mind', weight: 90 },
      { domain: 'Philosophy of Religion', weight: 90 },
      { domain: 'Epistemology', weight: 80 }
    ],
    influences: [],
    influenced: ['spinoza', 'schopenhauer'],
    famousQuote: {
      quote: 'Brahman is real; the world is illusory; the individual soul is non-different from Brahman.',
      context: 'Brahma Jnanavali Mala'
    },
    sepUrl: 'https://plato.stanford.edu/entries/shankara/',
    sepTitle: 'Adi Shankara'
  },

  // --- MEDIEVAL (CHRISTIAN, ISLAMIC, JEWISH) ---
  {
    id: 'augustine',
    name: 'Augustine of Hippo',
    nativeName: 'Aurelius Augustinus',
    birthYear: 354,
    deathYear: 430,
    displayDates: '354 – 430 CE',
    era: 'medieval',
    tradition: 'Christian',
    region: 'Thagaste & Hippo Regius (Numidia/Algeria)',
    schools: ['patristic-philosophy', 'platonism'],
    domains: ['Metaphysics', 'Epistemology', 'Philosophy of Religion', 'Ethics'],
    concepts: ['problem-of-evil', 'divine-illumination', 'free-will', 'time-subjectivity'],
    works: ['Confessions', 'The City of God (De Civitate Dei)', 'On the Free Choice of the Will'],
    summary: 'Bishop of Hippo whose monumental theological-philosophical synthesis united Neoplatonism with Christian scripture. Defined evil as privation of the good (privatio boni) and anticipated Descartes’ certainty of the self.',
    positions: [
      {
        domain: 'Philosophy of Religion',
        position: 'Evil has no positive ontological substance; it is an absence or privation of good (privatio boni) resulting from misplaced human will.'
      },
      {
        domain: 'Epistemology',
        position: 'Even if I am deceived, I exist ("Si fallor, sum"). Human intellect perceives eternal truths only via Divine Illumination.'
      }
    ],
    dna: [
      { domain: 'Philosophy of Religion', weight: 95 },
      { domain: 'Metaphysics', weight: 90 },
      { domain: 'Ethics', weight: 85 },
      { domain: 'Epistemology', weight: 75 }
    ],
    influences: ['plato'],
    influenced: ['aquinas', 'descartes', 'kierkegaard'],
    famousQuote: {
      quote: 'If I err, I am (Si fallor, sum). For he who does not exist can certainly not err.',
      context: 'The City of God XI.26'
    },
    sepUrl: 'https://plato.stanford.edu/entries/augustine/',
    sepTitle: 'Augustine of Hippo'
  },
  {
    id: 'avicenna',
    name: 'Avicenna (Ibn Sina)',
    nativeName: 'ابن سينا',
    birthYear: 980,
    deathYear: 1037,
    displayDates: 'c. 980 – 1037 CE',
    era: 'medieval',
    tradition: 'Islamic',
    region: 'Bukhara & Hamadan (Persian Samanid Empire)',
    schools: ['islamic-golden-age', 'aristotelianism'],
    domains: ['Metaphysics', 'Philosophy of Mind', 'Logic', 'Philosophy of Science'],
    concepts: ['floating-man-argument', 'essence-existence-distinction', 'necessary-contingent-being'],
    works: ['The Book of Healing (Kitāb al-Shifāʾ)', 'The Canon of Medicine', 'Remarks and Admonitions'],
    summary: 'Polymath genius of the Islamic Golden Age. Avicenna unified Aristotelian metaphysics with Islamic monotheism, formulated the essence/existence distinction, and devised the famous "Floating Man" thought experiment to prove self-awareness of the soul.',
    positions: [
      {
        domain: 'Philosophy of Mind',
        position: 'The soul is an immaterial incorporeal substance. A man suspended in a void with all senses negated would still possess immediate, intuitive self-awareness ("Floating Man").'
      },
      {
        domain: 'Metaphysics',
        position: 'All created entities are contingent (their essence does not entail their existence); their existence requires a Necessary Existent (Wājib al-Wujūd).'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 90 },
      { domain: 'Logic', weight: 85 },
      { domain: 'Philosophy of Science', weight: 80 }
    ],
    influences: ['aristotle', 'plato'],
    influenced: ['aquinas', 'descartes', 'spinoza'],
    famousQuote: {
      quote: 'If a person were created all at once in mid-air, unable to see or hear or touch his own limbs, he would have no doubt of the existence of his own self.',
      context: 'The Book of Healing (De Anima)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/ibn-sina/',
    sepTitle: 'Ibn Sina (Avicenna)'
  },
  {
    id: 'al-ghazali',
    name: 'Al-Ghazali',
    nativeName: 'أبو حامد الغزالي',
    birthYear: 1058,
    deathYear: 1111,
    displayDates: '1058 – 1111 CE',
    era: 'medieval',
    tradition: 'Islamic',
    region: 'Tus & Baghdad (Seljuk Empire)',
    schools: ['islamic-golden-age'],
    domains: ['Epistemology', 'Philosophy of Religion', 'Metaphysics'],
    concepts: ['occasionalism', 'skepticism-on-causation', 'mystical-epistemology'],
    works: ['The Incoherence of the Philosophers (Tahāfut al-Falāsifa)', 'Deliverance from Error'],
    summary: 'Brilliant Islamic jurist, theologian, and epistemologist. Critiqued Avicennan Hellenistic rationalism, anticipating David Hume’s skeptical analysis by arguing that cause-and-effect correlation is observed habit rather than logical necessity.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'The connection between cause and effect (e.g. fire touching cotton) is not logically necessary; it is an observed conjunction maintained directly by divine habit.'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Philosophy of Religion', weight: 95 },
      { domain: 'Metaphysics', weight: 85 }
    ],
    influences: [],
    influenced: ['hume', 'aquinas'],
    famousQuote: {
      quote: 'The connection between what is habitually believed to be a cause and what is habitually believed to be an effect is not necessary.',
      context: 'The Incoherence of the Philosophers, Discussion 17'
    },
    sepUrl: 'https://plato.stanford.edu/entries/al-ghazali/',
    sepTitle: 'Al-Ghazali'
  },
  {
    id: 'maimonides',
    name: 'Moses Maimonides (Rambam)',
    nativeName: 'משה בן מימון',
    birthYear: 1138,
    deathYear: 1204,
    displayDates: '1138 – 1204 CE',
    era: 'medieval',
    tradition: 'Jewish',
    region: 'Córdoba, Al-Andalus & Fustat, Egypt',
    schools: ['jewish-philosophy', 'aristotelianism'],
    domains: ['Philosophy of Religion', 'Metaphysics', 'Ethics'],
    concepts: ['negative-theology', 'faith-and-reason', 'prophecy-intellect'],
    works: ['The Guide for the Perplexed (Dalālat al-Ḥāʾirīn)', 'Mishneh Torah'],
    summary: 'Foremost medieval Jewish philosopher and physician. Harmonized Torah with Aristotelian science, formulating a rigorous apophatic (negative) theology holding that God’s essence cannot be positively predicated.',
    positions: [
      {
        domain: 'Philosophy of Religion',
        position: 'Negative theology (apophasis): Human language cannot describe what God is, only what God is not. Ascribing positive anthropomorphic attributes compromises divine unity.'
      }
    ],
    dna: [
      { domain: 'Philosophy of Religion', weight: 95 },
      { domain: 'Metaphysics', weight: 85 },
      { domain: 'Ethics', weight: 75 },
      { domain: 'Epistemology', weight: 70 }
    ],
    influences: ['aristotle', 'avicenna'],
    influenced: ['aquinas', 'spinoza', 'leibniz'],
    famousQuote: {
      quote: 'Truth does not become more true by virtue of the fact that the entire world agrees with it, nor less true even if the whole world disagrees.',
      context: 'The Guide for the Perplexed'
    },
    sepUrl: 'https://plato.stanford.edu/entries/maimonides/',
    sepTitle: 'Maimonides'
  },
  {
    id: 'aquinas',
    name: 'Thomas Aquinas',
    nativeName: 'Thomas de Aquino',
    birthYear: 1225,
    deathYear: 1274,
    displayDates: '1225 – 1274 CE',
    era: 'medieval',
    tradition: 'Christian',
    region: 'Roccasecca, Kingdom of Sicily & Paris/Rome',
    schools: ['scholasticism', 'aristotelianism'],
    domains: ['Metaphysics', 'Philosophy of Religion', 'Ethics', 'Epistemology'],
    concepts: ['five-ways-quinque-viae', 'natural-law', 'analogy-of-being', 'essence-and-existence'],
    works: ['Summa Theologiae', 'Summa contra Gentiles', 'De Ente et Essentia'],
    summary: 'The angelic doctor of Scholasticism. Accomplished the monumental intellectual integration of Aristotelian philosophical rigor with Christian dogma, establishing Natural Law theory and the Five Ways proof of God.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'In all finite creatures, essence (what a thing is) is distinct from existence (esse, the act of being). In God alone, essence and existence are completely identical.'
      },
      {
        domain: 'Ethics',
        position: 'Natural Law: Good is to be done and pursued, and evil avoided. Human practical reason participates in the Eternal Law through rational reflection on flourishing.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Philosophy of Religion', weight: 95 },
      { domain: 'Ethics', weight: 90 },
      { domain: 'Epistemology', weight: 80 }
    ],
    influences: ['aristotle', 'augustine', 'avicenna', 'maimonides'],
    influenced: ['descartes', 'locke', 'kant'],
    famousQuote: {
      quote: 'Grace does not destroy nature, but perfects it.',
      context: 'Summa Theologiae, Ia. q. 1, a. 8'
    },
    sepUrl: 'https://plato.stanford.edu/entries/aquinas/',
    sepTitle: 'Thomas Aquinas'
  },

  // --- EARLY MODERN & ENLIGHTENMENT ---
  {
    id: 'descartes',
    name: 'René Descartes',
    nativeName: 'René Descartes',
    birthYear: 1596,
    deathYear: 1650,
    displayDates: '1596 – 1650 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'La Haye en Touraine, France & Netherlands',
    schools: ['rationalism'],
    domains: ['Epistemology', 'Metaphysics', 'Philosophy of Mind'],
    concepts: ['cogito-ergo-sum', 'mind-body-dualism', 'methodological-skepticism'],
    works: ['Meditations on First Philosophy', 'Discourse on the Method', 'Principles of Philosophy'],
    summary: 'Father of modern Western philosophy and analytical geometry. Through radical methodic doubt, arrived at the indubitable foundation "Cogito, ergo sum" and established Cartesian substance dualism between thinking mind (res cogitans) and extended matter (res extensa).',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Method of doubt: Reject every belief that admits the slightest possibility of doubt until reaching the indubitable bedrock: "Cogito, ergo sum" (I think, therefore I am).'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Substance dualism: Mind (res cogitans, non-physical, thinking) and matter (res extensa, physical, spatial) are two distinct substances interacting via the pineal gland.',
        isDisputed: true,
        disputeNote: 'The interaction problem: How can an immaterial soul cause physical motion in a mechanical body? Princess Elisabeth of Bohemia’s critique remains classic.'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Metaphysics', weight: 90 },
      { domain: 'Philosophy of Science', weight: 75 }
    ],
    influences: ['plato', 'augustine', 'avicenna', 'aquinas'],
    influenced: ['spinoza', 'leibniz', 'locke', 'kant', 'chalmers'],
    famousQuote: {
      quote: 'Cogito, ergo sum. (I think, therefore I am.)',
      context: 'Discourse on the Method / Meditations'
    },
    sepUrl: 'https://plato.stanford.edu/entries/descartes/',
    sepTitle: 'René Descartes'
  },
  {
    id: 'spinoza',
    name: 'Baruch Spinoza',
    nativeName: 'Benedictus de Spinoza',
    birthYear: 1632,
    deathYear: 1677,
    displayDates: '1632 – 1677 CE',
    era: 'early-modern',
    tradition: 'Jewish',
    region: 'Amsterdam & The Hague, Dutch Republic',
    schools: ['rationalism'],
    domains: ['Metaphysics', 'Ethics', 'Philosophy of Mind', 'Political Philosophy'],
    concepts: ['substance-monism', 'deus-sive-natura', 'determinism', 'intellectual-love-of-god'],
    works: ['Ethics (Ethica More Geometrico Demonstrata)', 'Tractatus Theologico-Politicus'],
    summary: 'Radical Dutch-Jewish philosopher who formulated a geometrical metaphysical system of absolute substance monism: God and Nature are one single infinite substance (Deus sive Natura), mind and body being two parallel attributes of the same reality.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'Substance monism: There is only one solitary infinite substance: God or Nature (Deus sive Natura). All finite things (including humans) are merely modes of this one substance.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Dual-aspect monism: Mind and body are not two interacting substances, but the very same event perceived under the attribute of Thought versus the attribute of Extension.'
      },
      {
        domain: 'Ethics',
        position: 'Strict determinism: Freedom is not uncaused free will, but rational understanding of cosmic necessity, yielding joyful tranquility.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 100 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 90 },
      { domain: 'Political Philosophy', weight: 80 }
    ],
    influences: ['descartes', 'maimonides', 'zeno-of-citium'],
    influenced: ['leibniz', 'hegel', 'nietzsche', 'einstein'],
    famousQuote: {
      quote: 'I have made a ceaseless effort not to ridicule, not to bewail, not to scorn human actions, but to understand them.',
      context: 'Tractatus Politicus, Chapter 1'
    },
    sepUrl: 'https://plato.stanford.edu/entries/spinoza/',
    sepTitle: 'Baruch Spinoza'
  },
  {
    id: 'leibniz',
    name: 'Gottfried Wilhelm Leibniz',
    nativeName: 'Gottfried Wilhelm von Leibniz',
    birthYear: 1646,
    deathYear: 1716,
    displayDates: '1646 – 1716 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'Leipzig & Hanover, Holy Roman Empire',
    schools: ['rationalism'],
    domains: ['Metaphysics', 'Logic', 'Epistemology', 'Philosophy of Religion'],
    concepts: ['monadology', 'pre-established-harmony', 'best-of-all-possible-worlds', 'principle-of-sufficient-reason'],
    works: ['Monadology', 'Discourse on Metaphysics', 'Theodicy', 'New Essays on Human Understanding'],
    summary: 'Universal polymath, co-inventor of infinitesimal calculus, and rationalist metaphysician. Argued reality is constituted of windowless, soul-like dynamic units called Monads, harmonized without physical contact by divine pre-established harmony.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The ultimate constituents of reality are Monads: simple, indivisible, immaterial centers of perception and force, coordinated in pre-established harmony.'
      },
      {
        domain: 'Philosophy of Religion',
        position: 'Theodicy: This world is the "best of all possible worlds" that God could have actualized, containing the maximum richness of phenomena through the simplest laws.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Logic', weight: 95 },
      { domain: 'Epistemology', weight: 85 },
      { domain: 'Philosophy of Religion', weight: 80 }
    ],
    influences: ['descartes', 'spinoza', 'aristotle'],
    influenced: ['kant', 'russell'],
    famousQuote: {
      quote: 'Nothing happens without a reason why it should be so rather than otherwise.',
      context: 'Principles of Nature and Grace, Section 7 (Principle of Sufficient Reason)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/leibniz/',
    sepTitle: 'Gottfried Wilhelm Leibniz'
  },
  {
    id: 'locke',
    name: 'John Locke',
    nativeName: 'John Locke',
    birthYear: 1632,
    deathYear: 1704,
    displayDates: '1632 – 1704 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'Somerset & Essex, England',
    schools: ['empiricism'],
    domains: ['Epistemology', 'Political Philosophy', 'Philosophy of Mind'],
    concepts: ['tabula-rasa', 'primary-secondary-qualities', 'social-contract', 'natural-rights'],
    works: ['An Essay Concerning Human Understanding', 'Two Treatises of Government', 'A Letter Concerning Toleration'],
    summary: 'Pioneer of British Empiricism and classical liberal political theory. Argued that the mind is born a blank slate (tabula rasa), acquiring all ideas strictly from sensation and reflection, and justified representative government based on natural rights to life, liberty, and estate.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Rejection of innate ideas: At birth, the mind is white paper (tabula rasa), void of all characters; all materials of reason derive from sensation and inner reflection.'
      },
      {
        domain: 'Political Philosophy',
        position: 'Sovereignty rests on consent of the governed: Citizens form a social contract to protect innate natural rights (life, liberty, property); breach of trust legitimizes rebellion.'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Political Philosophy', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 75 }
    ],
    influences: ['descartes'],
    influenced: ['berkeley', 'hume', 'kant', 'mill', 'rawls'],
    famousQuote: {
      quote: 'No man\'s knowledge here can go beyond his experience.',
      context: 'An Essay Concerning Human Understanding, II.1.19'
    },
    sepUrl: 'https://plato.stanford.edu/entries/locke/',
    sepTitle: 'John Locke'
  },
  {
    id: 'berkeley',
    name: 'George Berkeley',
    nativeName: 'Bishop George Berkeley',
    birthYear: 1685,
    deathYear: 1753,
    displayDates: '1685 – 1753 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'Kilkenny & Cloyne, Ireland',
    schools: ['empiricism', 'idealism'],
    domains: ['Metaphysics', 'Epistemology'],
    concepts: ['esse-est-percipi', 'immaterialism', 'subjective-idealism'],
    works: ['A Treatise Concerning the Principles of Human Knowledge', 'Three Dialogues between Hylas and Philonous'],
    summary: 'Anglo-Irish philosopher who advanced radical empiricist immaterialism. Argued that material substance is an unintelligible philosophical fiction: to exist is to be perceived (esse est percipi) or to perceive.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'Esse est percipi (To be is to be perceived): Physical objects are collections of perceptual sensations existing solely in minds, sustained consistently by the eternal perception of God.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Philosophy of Religion', weight: 80 }
    ],
    influences: ['locke', 'descartes'],
    influenced: ['hume', 'kant', 'mill'],
    famousQuote: {
      quote: 'To be is to be perceived, or to perceive.',
      context: 'Principles of Human Knowledge, Section 3'
    },
    sepUrl: 'https://plato.stanford.edu/entries/berkeley/',
    sepTitle: 'George Berkeley'
  },
  {
    id: 'hume',
    name: 'David Hume',
    nativeName: 'David Hume',
    birthYear: 1711,
    deathYear: 1776,
    displayDates: '1711 – 1776 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'Edinburgh, Scotland',
    schools: ['empiricism'],
    domains: ['Epistemology', 'Metaphysics', 'Ethics', 'Philosophy of Mind', 'Philosophy of Religion'],
    concepts: ['problem-of-induction', 'bundle-theory-of-self', 'is-ought-problem', 'critique-of-causation'],
    works: ['A Treatise of Human Nature', 'An Enquiry Concerning Human Understanding', 'Dialogues Concerning Natural Religion'],
    summary: 'Apex of British Empiricism and Scottish Enlightenment skepticism. Demonstrated that causality and inductive prediction cannot be validated by deductive logic or raw experience, reducing both causal necessity and personal identity to habit and impressions.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Problem of Induction: We cannot rationally justify the assumption that unobserved futures will conform to observed pasts; inductive inferences are produced by psychological habit, not rational deduction.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Bundle Theory of Self: When I look inside, I never observe a singular unified "self", only an ever-changing bundle of fleeting impressions and perceptions.'
      },
      {
        domain: 'Ethics',
        position: 'Reason is, and ought only to be the slave of the passions. You cannot deduce an "ought" (normative obligation) from an "is" (factual description).'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 100 },
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Ethics', weight: 90 },
      { domain: 'Philosophy of Religion', weight: 85 },
      { domain: 'Metaphysics', weight: 80 }
    ],
    influences: ['locke', 'berkeley'],
    influenced: ['kant', 'schopenhauer', 'mill', 'russell', 'parfit'],
    famousQuote: {
      quote: 'Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.',
      context: 'A Treatise of Human Nature, Book II, Part III'
    },
    sepUrl: 'https://plato.stanford.edu/entries/hume/',
    sepTitle: 'David Hume'
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    nativeName: 'Immanuel Kant',
    birthYear: 1724,
    deathYear: 1804,
    displayDates: '1724 – 1804 CE',
    era: 'early-modern',
    tradition: 'European',
    region: 'Königsberg, Prussia',
    schools: ['kantianism', 'german-idealism'],
    domains: ['Epistemology', 'Metaphysics', 'Ethics', 'Aesthetics', 'Political Philosophy'],
    concepts: ['transcendental-idealism', 'categorical-imperative', 'noumenon-phenomenon', 'synthetic-a-priori'],
    works: ['Critique of Pure Reason', 'Groundwork of the Metaphysics of Morals', 'Critique of Practical Reason', 'Critique of Judgment'],
    summary: 'The central titan of modern philosophy. Undertook the Copernican Revolution in epistemology by synthesizing Rationalism and Empiricism: human minds actively structure sensory experience through a priori forms (Space/Time) and categories (Causality), while moral duty is dictated by the universal Categorical Imperative.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Copernican Revolution: Objects must conform to human cognition, not cognition to objects. Space and Time are a priori forms of human sensibility, while the mind synthesizes experience through 12 pure concepts of the understanding.'
      },
      {
        domain: 'Metaphysics',
        position: 'Transcendental Idealism: We can only know phenomena (things as they appear to us through human cognitive faculties). The thing-in-itself (Noumenon) is forever inaccessible to theoretical reason.',
        isDisputed: true,
        disputeNote: 'Two-Worlds vs. Two-Aspects: Scholars dispute whether Kant meant two separate metaphysical realms or two different epistemic standpoints on the same reality.'
      },
      {
        domain: 'Ethics',
        position: 'Deontological ethics: An action has moral worth only when performed from pure duty, commanded unconditionally by the Categorical Imperative: act only on that maxim which you can will to become a universal law.'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 100 },
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Aesthetics', weight: 80 },
      { domain: 'Political Philosophy', weight: 75 }
    ],
    influences: ['plato', 'descartes', 'leibniz', 'locke', 'hume'],
    influenced: ['hegel', 'schopenhauer', 'rawls', 'husserl', 'habermas'],
    famousQuote: {
      quote: 'Two things fill the mind with ever new and increasing admiration and awe... the starry heavens above me and the moral law within me.',
      context: 'Critique of Practical Reason, Conclusion'
    },
    sepUrl: 'https://plato.stanford.edu/entries/kant/',
    sepTitle: 'Immanuel Kant'
  },

  // --- 19TH CENTURY ---
  {
    id: 'hegel',
    name: 'G.W.F. Hegel',
    nativeName: 'Georg Wilhelm Friedrich Hegel',
    birthYear: 1770,
    deathYear: 1831,
    displayDates: '1770 – 1831 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'Stuttgart & Berlin, Prussia',
    schools: ['german-idealism'],
    domains: ['Metaphysics', 'Political Philosophy', 'Logic', 'Philosophy of History', 'Aesthetics'],
    concepts: ['absolute-idealism', 'dialectic-master-slave', 'zeitgeist', 'aufhebung'],
    works: ['Phenomenology of Spirit', 'Science of Logic', 'Elements of the Philosophy of Right'],
    summary: 'Architect of Absolute Idealism. Dynamicized Kant’s static cognitive categories into a grand historical dialectic: human consciousness, social institutions, and truth unfold dialectically toward the self-realization of Absolute Spirit (Geist).',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'What is rational is actual, and what is actual is rational. Reality is not a static substance, but a dynamic, self-unfolding developmental process of Absolute Spirit.'
      },
      {
        domain: 'Political Philosophy',
        position: 'Individual freedom is not atomistic license; true ethical life (Sittlichkeit) is realized within rational community institutions: Family, Civil Society, and the constitutional State.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Political Philosophy', weight: 90 },
      { domain: 'Logic', weight: 85 },
      { domain: 'Aesthetics', weight: 75 }
    ],
    influences: ['kant', 'spinoza', 'aristotle'],
    influenced: ['marx', 'kierkegaard', 'foucault'],
    famousQuote: {
      quote: 'The owl of Minerva spreads its wings only with the falling of the dusk.',
      context: 'Elements of the Philosophy of Right, Preface'
    },
    sepUrl: 'https://plato.stanford.edu/entries/hegel/',
    sepTitle: 'G.W.F. Hegel'
  },
  {
    id: 'schopenhauer',
    name: 'Arthur Schopenhauer',
    nativeName: 'Arthur Schopenhauer',
    birthYear: 1788,
    deathYear: 1860,
    displayDates: '1788 – 1860 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'Danzig & Frankfurt, Germany',
    schools: ['philosophical-pessimism', 'kantianism'],
    domains: ['Metaphysics', 'Aesthetics', 'Ethics', 'Epistemology'],
    concepts: ['will-as-noumenon', 'philosophical-pessimism', 'aesthetic-contemplation', 'compassion-ethics'],
    works: ['The World as Will and Representation (Die Welt als Wille und Vorstellung)', 'On the Fourfold Root of the Principle of Sufficient Reason'],
    summary: 'The great philosophical pessimist who synthesized Kantian idealism with Indian Upanishadic and Buddhist insights. Decoded Kant’s mysterious thing-in-itself as blind, insatiable, striving Will, which produces inescapable suffering that can only be momentarily quieted by aesthetic contemplation and ascetic compassion.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The world is my representation (phenomenon), but its inner essence (noumenon) is blind, irrational, ceaselessly striving Will.'
      },
      {
        domain: 'Ethics',
        position: 'Because the same single Will manifests across all beings, egoism is an illusion; genuine moral virtue springs from intuitive compassion (Mitleid) recognizing identity with the suffering of another.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Aesthetics', weight: 90 },
      { domain: 'Ethics', weight: 90 },
      { domain: 'Epistemology', weight: 75 }
    ],
    influences: ['kant', 'plato', 'adi-shankara', 'gautama-buddha'],
    influenced: ['nietzsche', 'wittgenstein', 'freud'],
    famousQuote: {
      quote: 'Life swings like a pendulum backward and forward between pain and boredom.',
      context: 'The World as Will and Representation, §57'
    },
    sepUrl: 'https://plato.stanford.edu/entries/schopenhauer/',
    sepTitle: 'Arthur Schopenhauer'
  },
  {
    id: 'kierkegaard',
    name: 'Søren Kierkegaard',
    nativeName: 'Søren Aabye Kierkegaard',
    birthYear: 1813,
    deathYear: 1855,
    displayDates: '1813 – 1855 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'Copenhagen, Denmark',
    schools: ['existentialism'],
    domains: ['Ethics', 'Philosophy of Religion', 'Epistemology'],
    concepts: ['leap-of-faith', 'angst-anxiety', 'three-stages-of-life', 'subjective-truth'],
    works: ['Fear and Trembling', 'Either/Or', 'The Sickness Unto Death', 'The Concept of Anxiety'],
    summary: 'Father of Christian existentialism. Mounted a passionate assault on Hegelian impersonal abstract rationalism, declaring that truth is subjectivity: an individual confronting profound angst must choose their existence through an authentic "leap of faith" into the absurd.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Truth is subjectivity: Objective statistical facts cannot resolve how one ought to live. Faith is holding fast to objective uncertainty with passionate inwardness.'
      },
      {
        domain: 'Ethics',
        position: 'Three stages on life’s way: The aesthetic (seeking novelty/pleasure), the ethical (adopting universal moral duty), and the religious (the solitary leap of faith transcending ethics).'
      }
    ],
    dna: [
      { domain: 'Philosophy of Religion', weight: 95 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Epistemology', weight: 75 },
      { domain: 'Aesthetics', weight: 70 }
    ],
    influences: ['socrates', 'augustine'],
    influenced: ['heidegger', 'sartre', 'camus', 'wittgenstein'],
    famousQuote: {
      quote: 'Anxiety is the dizziness of freedom.',
      context: 'The Concept of Anxiety (1844)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/kierkegaard/',
    sepTitle: 'Søren Kierkegaard'
  },
  {
    id: 'mill',
    name: 'John Stuart Mill',
    nativeName: 'John Stuart Mill',
    birthYear: 1806,
    deathYear: 1873,
    displayDates: '1806 – 1873 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'London, England & Avignon, France',
    schools: ['utilitarianism', 'empiricism'],
    domains: ['Ethics', 'Political Philosophy', 'Philosophy of Science', 'Epistemology'],
    concepts: ['harm-principle', 'greatest-happiness-principle', 'higher-and-lower-pleasures', 'women-emancipation'],
    works: ['On Liberty', 'Utilitarianism', 'The Subjection of Women', 'A System of Logic'],
    summary: 'British empiricist philosopher and political economist. Refined Jeremy Bentham’s hedonistic utilitarianism by distinguishing higher intellectual pleasures from lower bodily pleasures, and formulated the classic Harm Principle safeguarding individual liberty.',
    positions: [
      {
        domain: 'Ethics',
        position: 'Greatest Happiness Principle: Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce reverse of happiness. Intellectual and aesthetic pleasures are qualitatively superior to sensual pleasures.'
      },
      {
        domain: 'Political Philosophy',
        position: 'Harm Principle: The only purpose for which power can be rightfully exercised over any member of a civilized community against his will is to prevent harm to others.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Political Philosophy', weight: 95 },
      { domain: 'Philosophy of Science', weight: 75 },
      { domain: 'Epistemology', weight: 70 }
    ],
    influences: ['locke', 'hume', 'epicurus'],
    influenced: ['rawls', 'parfit'],
    famousQuote: {
      quote: 'It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.',
      context: 'Utilitarianism, Chapter 2'
    },
    sepUrl: 'https://plato.stanford.edu/entries/mill/',
    sepTitle: 'John Stuart Mill'
  },
  {
    id: 'marx',
    name: 'Karl Marx',
    nativeName: 'Karl Heinrich Marx',
    birthYear: 1818,
    deathYear: 1883,
    displayDates: '1818 – 1883 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'Trier, Prussia & London, England',
    schools: ['marxism', 'historical-materialism'],
    domains: ['Political Philosophy', 'Philosophy of History', 'Ethics', 'Philosophy of Science'],
    concepts: ['historical-materialism', 'alienation-of-labor', 'commodity-fetishism', 'class-struggle'],
    works: ['Capital (Das Kapital)', 'The Communist Manifesto', 'The German Ideology', 'Economic and Philosophic Manuscripts of 1844'],
    summary: 'Revolutionary social theorist, economist, and materialist philosopher. Transformed Hegelian dialectics into Historical Materialism, arguing that human history is driven by conflicts between economic classes over control of productive forces.',
    positions: [
      {
        domain: 'Political Philosophy',
        position: 'The economic base (modes of production and property relations) conditions the ideological superstructure (legal, political, religious, and philosophical institutions).'
      },
      {
        domain: 'Philosophy of History',
        position: 'All human history is the history of class struggles; capitalism contains internal structural contradictions that inevitably lead to systemic crises and socialist transition.'
      }
    ],
    dna: [
      { domain: 'Political Philosophy', weight: 100 },
      { domain: 'Philosophy of History', weight: 95 },
      { domain: 'Ethics', weight: 75 },
      { domain: 'Philosophy of Science', weight: 70 }
    ],
    influences: ['hegel', 'epicurus', 'spinoza'],
    influenced: ['critical-theory', 'foucault', 'sartre', 'habermas'],
    famousQuote: {
      quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
      context: 'Theses on Feuerbach, XI (1845)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/marx/',
    sepTitle: 'Karl Marx'
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    nativeName: 'Friedrich Wilhelm Nietzsche',
    birthYear: 1844,
    deathYear: 1900,
    displayDates: '1844 – 1900 CE',
    era: 'nineteenth-century',
    tradition: 'European',
    region: 'Röcken, Prussia & Sils Maria, Switzerland',
    schools: ['perspectivism', 'existentialism'],
    domains: ['Ethics', 'Metaphysics', 'Epistemology', 'Aesthetics'],
    concepts: ['will-to-power', 'eternal-recurrence', 'death-of-god', 'master-slave-morality', 'ubermensch'],
    works: ['Thus Spoke Zarathustra', 'Beyond Good and Evil', 'On the Genealogy of Morals', 'The Gay Science'],
    summary: 'Iconoclastic German philosopher and philologist. Announced the "Death of God" and analyzed the psychological origins of morality (Genealogy), critiquing ascetic Christian "slave morality" in favor of life-affirming creative self-overcoming (Will to Power).',
    positions: [
      {
        domain: 'Ethics',
        position: 'Genealogy of morals: Traditional Western morality is an egalitarian "slave morality" invented by the weak out of ressentiment against aristocratic excellence. Higher humans must forge autonomous values.'
      },
      {
        domain: 'Metaphysics',
        position: 'Will to Power: The fundamental driving engine of existence is not mere survival, but expansion, creation, domination, and self-overcoming.',
        isDisputed: true,
        disputeNote: 'Debated whether Will to Power was intended as a literal cosmological physics or a psychological description of human striving.'
      },
      {
        domain: 'Epistemology',
        position: 'Perspectivism: There are no moral or metaphysical facts, only interpretations seen through specific biological and cultural horizons.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 100 },
      { domain: 'Epistemology', weight: 90 },
      { domain: 'Aesthetics', weight: 90 },
      { domain: 'Metaphysics', weight: 80 }
    ],
    influences: ['schopenhauer', 'socrates', 'spinoza'],
    influenced: ['heidegger', 'foucault', 'sartre', 'camus', 'derrida'],
    famousQuote: {
      quote: 'He who has a why to live can bear almost any how.',
      context: 'Twilight of the Idols, Maxims and Arrows, 12'
    },
    sepUrl: 'https://plato.stanford.edu/entries/nietzsche/',
    sepTitle: 'Friedrich Nietzsche'
  },

  // --- 20TH CENTURY & CONTEMPORARY ---
  {
    id: 'husserl',
    name: 'Edmund Husserl',
    nativeName: 'Edmund Gustav Albrecht Husserl',
    birthYear: 1859,
    deathYear: 1938,
    displayDates: '1859 – 1938 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Prossnitz, Moravia & Freiburg, Germany',
    schools: ['phenomenology'],
    domains: ['Epistemology', 'Philosophy of Mind', 'Logic'],
    concepts: ['phenomenology', 'intentionality', 'epoche-bracketing', 'lifeworld'],
    works: ['Logical Investigations', 'Ideas: General Introduction to Pure Phenomenology', 'Cartesian Meditations'],
    summary: 'Father of Phenomenology. Developed a rigorous descriptive science of conscious experience: by "bracketing" (epoché) naive natural presuppositions about the external world, one examines intentional structures of pure consciousness.',
    positions: [
      {
        domain: 'Epistemology',
        position: 'Phenomenological reduction (epoché): Suspend all unexamined ontological claims about the external world to describe phenomena exactly as they appear directly to consciousness.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'All consciousness is intentional: it is always consciousness OF something (directed toward an object via noesis and noema).'
      }
    ],
    dna: [
      { domain: 'Epistemology', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Logic', weight: 85 },
      { domain: 'Metaphysics', weight: 70 }
    ],
    influences: ['descartes', 'kant'],
    influenced: ['heidegger', 'sartre', 'merleau-ponty', 'derrida'],
    famousQuote: {
      quote: 'Back to the things themselves! (Zu den Sachen selbst!)',
      context: 'Logical Investigations (1900–1901)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/husserl/',
    sepTitle: 'Edmund Husserl'
  },
  {
    id: 'russell',
    name: 'Bertrand Russell',
    nativeName: 'Bertrand Arthur William Russell',
    birthYear: 1872,
    deathYear: 1970,
    displayDates: '1872 – 1970 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Trellech, Wales & Cambridge, England',
    schools: ['analytic-philosophy'],
    domains: ['Logic', 'Philosophy of Language', 'Epistemology', 'Philosophy of Science'],
    concepts: ['theory-of-descriptions', 'russells-paradox', 'logical-atomism', 'logicism'],
    works: ['Principia Mathematica (with Whitehead)', 'On Denoting', 'The Problems of Philosophy', 'A History of Western Philosophy'],
    summary: 'Co-founder of Analytic Philosophy and mathematical logic. Discovered Russell’s Paradox in set theory, pioneered logicism (reducing mathematics to logic), and developed the Theory of Definite Descriptions.',
    positions: [
      {
        domain: 'Philosophy of Language',
        position: 'Theory of Descriptions: Grammatical form conceals true logical form; phrases like "the present King of France is bald" are meaningful existential propositions that are false, not mysterious non-existent entities.'
      },
      {
        domain: 'Logic',
        position: 'Logicism: Pure mathematics and formal logic are identical; mathematical truths can be deduced without empirical assumptions from logical axioms.'
      }
    ],
    dna: [
      { domain: 'Logic', weight: 100 },
      { domain: 'Philosophy of Language', weight: 95 },
      { domain: 'Epistemology', weight: 90 },
      { domain: 'Philosophy of Science', weight: 80 }
    ],
    influences: ['leibniz', 'hume', 'mill'],
    influenced: ['wittgenstein', 'parfit', 'rawls'],
    famousQuote: {
      quote: 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
      context: 'The Triumph of Stupidity (1933)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/russell/',
    sepTitle: 'Bertrand Russell'
  },
  {
    id: 'wittgenstein',
    name: 'Ludwig Wittgenstein',
    nativeName: 'Ludwig Josef Johann Wittgenstein',
    birthYear: 1889,
    deathYear: 1951,
    displayDates: '1889 – 1951 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Vienna, Austria & Cambridge, England',
    schools: ['analytic-philosophy', 'ordinary-language-philosophy'],
    domains: ['Philosophy of Language', 'Logic', 'Philosophy of Mind', 'Epistemology'],
    concepts: ['picture-theory-of-meaning', 'language-games', 'family-resemblance', 'private-language-argument'],
    works: ['Tractatus Logico-Philosophicus', 'Philosophical Investigations', 'On Certainty'],
    summary: 'Revolutionized 20th-century philosophy twice. First (Tractatus) established the picture theory of meaning and the logical limits of language; later (Philosophical Investigations) dismantled his earlier system to reveal language as interactive "language-games" embedded in forms of life.',
    positions: [
      {
        domain: 'Philosophy of Language',
        position: 'Later philosophy: Meaning is use within a language-game. Words do not acquire meaning by corresponding to abstract mental essences, but by how they are deployed in communal social practices (forms of life).'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Private Language Argument: A language that refers exclusively to internal, private sensations (which only the speaker could know) is logically impossible, because there would be no objective criteria for correct usage.'
      }
    ],
    dna: [
      { domain: 'Philosophy of Language', weight: 100 },
      { domain: 'Logic', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 90 },
      { domain: 'Epistemology', weight: 85 }
    ],
    influences: ['schopenhauer', 'russell', 'kierkegaard'],
    influenced: ['ordinary-language-philosophy', 'rorty', 'chalmers'],
    famousQuote: {
      quote: 'Whereof one cannot speak, thereof one must be silent.',
      context: 'Tractatus Logico-Philosophicus, Proposition 7'
    },
    sepUrl: 'https://plato.stanford.edu/entries/wittgenstein/',
    sepTitle: 'Ludwig Wittgenstein'
  },
  {
    id: 'heidegger',
    name: 'Martin Heidegger',
    nativeName: 'Martin Heidegger',
    birthYear: 1889,
    deathYear: 1976,
    displayDates: '1889 – 1976 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Messkirch & Freiburg, Germany',
    schools: ['phenomenology', 'existentialism'],
    domains: ['Metaphysics', 'Epistemology', 'Philosophy of Technology', 'Aesthetics'],
    concepts: ['dasein', 'being-in-the-world', 'being-towards-death', 'gestell-enframing'],
    works: ['Being and Time (Sein und Zeit)', 'The Question Concerning Technology', 'Poetry, Language, Thought'],
    summary: 'Profound and controversial German phenomenologist who revived the fundamental question of Being (Seinsfrage). Analyzed human existence as Dasein (Being-in-the-world), shaped by thrownness, anxiety, and being-towards-death.',
    positions: [
      {
        domain: 'Metaphysics',
        position: 'The Question of Being: Western philosophy committed an ontological error by treating "Being" as an objective present-at-hand substance (Vorhandenheit). Being is an event of disclosure.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Dasein: Humans are not detached Cartesian thinking minds contemplating an external world; we are always already immersed "in-the-world" via practical ready-to-hand engagement.'
      }
    ],
    dna: [
      { domain: 'Metaphysics', weight: 100 },
      { domain: 'Philosophy of Technology', weight: 85 },
      { domain: 'Epistemology', weight: 80 },
      { domain: 'Aesthetics', weight: 75 }
    ],
    influences: ['husserl', 'kierkegaard', 'nietzsche', 'aristotle'],
    influenced: ['sartre', 'arendt', 'foucault', 'derrida'],
    famousQuote: {
      quote: 'If I take death into my life, acknowledge it, and face it squarely, I will free myself from the petty anxieties of life.',
      context: 'Being and Time (1927)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/heidegger/',
    sepTitle: 'Martin Heidegger'
  },
  {
    id: 'sartre',
    name: 'Jean-Paul Sartre',
    nativeName: 'Jean-Paul Charles Aymard Sartre',
    birthYear: 1905,
    deathYear: 1980,
    displayDates: '1905 – 1980 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Paris, France',
    schools: ['existentialism'],
    domains: ['Ethics', 'Philosophy of Mind', 'Political Philosophy', 'Metaphysics'],
    concepts: ['existence-precedes-essence', 'bad-faith-mauvaise-foi', 'condemned-to-be-free', 'the-look'],
    works: ['Being and Nothingness (L\'Être et le néant)', 'Existentialism is a Humanism', 'Nausea', 'No Exit'],
    summary: 'Foremost voice of 20th-century atheistic existentialism. Declared that for humans, "existence precedes essence": with no divine blueprint or predetermined nature, humans are radically condemned to freedom and wholly responsible for who they become.',
    positions: [
      {
        domain: 'Ethics',
        position: 'Existence precedes essence: Man first of all exists, encounters himself, surges up in the world—and only afterwards defines himself. We are condemned to be free.'
      },
      {
        domain: 'Philosophy of Mind',
        position: 'Bad Faith (Mauvaise Foi): The self-deception whereby human beings pretend to be passive deterministic objects (en-soi) rather than free conscious agents (pour-soi) to escape the burden of responsibility.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Political Philosophy', weight: 85 },
      { domain: 'Metaphysics', weight: 80 }
    ],
    influences: ['husserl', 'heidegger', 'kierkegaard', 'nietzsche'],
    influenced: ['beauvoir', 'camus', 'foucault'],
    famousQuote: {
      quote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
      context: 'Existentialism is a Humanism (1946)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/sartre/',
    sepTitle: 'Jean-Paul Sartre'
  },
  {
    id: 'beauvoir',
    name: 'Simone de Beauvoir',
    nativeName: 'Simone Lucie Ernestine Marie Bertrand de Beauvoir',
    birthYear: 1908,
    deathYear: 1986,
    displayDates: '1908 – 1986 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Paris, France',
    schools: ['existentialism', 'feminist-philosophy'],
    domains: ['Ethics', 'Political Philosophy', 'Philosophy of Mind'],
    concepts: ['one-is-not-born-a-woman', 'ethics-of-ambiguity', 'othering', 'situated-freedom'],
    works: ['The Second Sex (Le Deuxième Sexe)', 'The Ethics of Ambiguity', 'She Came to Stay'],
    summary: 'Pioneering existentialist philosopher and founder of modern feminist theory. Analyzed the social construction of gender ("One is not born, but rather becomes, a woman") and grounded existential ethics in mutual liberation.',
    positions: [
      {
        domain: 'Political Philosophy',
        position: 'Gender as social construct: "One is not born, but rather becomes, a woman." Society casts woman as the inessential "Other" relative to the male universal standard.'
      },
      {
        domain: 'Ethics',
        position: 'Ethics of Ambiguity: Human freedom is situated within history; one cannot authentically will one’s own freedom without willing the freedom of all other beings.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 100 },
      { domain: 'Political Philosophy', weight: 100 },
      { domain: 'Philosophy of Mind', weight: 80 },
      { domain: 'Metaphysics', weight: 65 }
    ],
    influences: ['hegel', 'husserl', 'sartre'],
    influenced: ['foucault', 'butler'],
    famousQuote: {
      quote: 'One is not born, but rather becomes, a woman.',
      context: 'The Second Sex (1949), Book II'
    },
    sepUrl: 'https://plato.stanford.edu/entries/beauvoir/',
    sepTitle: 'Simone de Beauvoir'
  },
  {
    id: 'arendt',
    name: 'Hannah Arendt',
    nativeName: 'Johanna Arendt',
    birthYear: 1906,
    deathYear: 1975,
    displayDates: '1906 – 1975 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Hanover, Germany & New York, USA',
    schools: ['political-phenomenology'],
    domains: ['Political Philosophy', 'Ethics', 'Philosophy of Action'],
    concepts: ['banality-of-evil', 'vita-activa', 'plurality', 'public-space'],
    works: ['The Origins of Totalitarianism', 'The Human Condition', 'Eichmann in Jerusalem: A Report on the Banality of Evil'],
    summary: 'Towering political theorist who fled Nazi Germany. Dissected the mechanisms of totalitarianism, articulated the "banality of evil" through Adolf Eichmann’s thoughtlessness, and celebrated political action in the shared public sphere.',
    positions: [
      {
        domain: 'Ethics',
        position: 'The Banality of Evil: Radical evil does not require demonic wickedness; it can arise from normal, bureaucratic "thoughtlessness" and refusal to critically judge.',
        isDisputed: true,
        disputeNote: 'Debate continues over historical Eichmann: was he genuinely a thoughtless bureaucrat or a fanatical ideological Nazi?'
      },
      {
        domain: 'Political Philosophy',
        position: 'Vita Activa: Human activity comprises Labor (biological survival), Work (fabricating an enduring world), and Action (speaking and acting among peers in the public realm).'
      }
    ],
    dna: [
      { domain: 'Political Philosophy', weight: 100 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Philosophy of Action', weight: 85 }
    ],
    influences: ['aristotle', 'kant', 'heidegger'],
    influenced: ['habermas', 'rawls'],
    famousQuote: {
      quote: 'The sad truth is that most evil is done by people who never make up their minds to be good or evil.',
      context: 'The Life of the Mind (1978)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/arendt/',
    sepTitle: 'Hannah Arendt'
  },
  {
    id: 'camus',
    name: 'Albert Camus',
    nativeName: 'Albert Camus',
    birthYear: 1913,
    deathYear: 1960,
    displayDates: '1913 – 1960 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Mondovi, French Algeria & Paris, France',
    schools: ['absurdism', 'existentialism'],
    domains: ['Ethics', 'Philosophy of Religion', 'Aesthetics'],
    concepts: ['the-absurd', 'myth-of-sisyphus', 'revolt', 'lucidity'],
    works: ['The Myth of Sisyphus', 'The Stranger (L\'Étranger)', 'The Rebel (L\'Homme révolté)'],
    summary: 'Nobel laureate and philosopher of the Absurd. Diagnosed the Absurd as the tragic collision between humanity’s desperate longing for meaning and the cold silence of the universe; rejected suicide in favor of defiant, lucid revolt.',
    positions: [
      {
        domain: 'Ethics',
        position: 'The Absurd: Born from the confrontation between human longing and the unreasonable silence of the world. One must live without appeal, finding heroic joy in defiant revolt (like Sisyphus).'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 95 },
      { domain: 'Aesthetics', weight: 90 },
      { domain: 'Philosophy of Religion', weight: 80 }
    ],
    influences: ['kierkegaard', 'nietzsche'],
    influenced: ['postmodernism'],
    famousQuote: {
      quote: 'One must imagine Sisyphus happy.',
      context: 'The Myth of Sisyphus (1942)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/camus/',
    sepTitle: 'Albert Camus'
  },
  {
    id: 'foucault',
    name: 'Michel Foucault',
    nativeName: 'Paul-Michel Foucault',
    birthYear: 1926,
    deathYear: 1984,
    displayDates: '1926 – 1984 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Poitiers & Paris, France',
    schools: ['post-structuralism', 'critical-theory'],
    domains: ['Political Philosophy', 'Epistemology', 'Philosophy of Language', 'Ethics'],
    concepts: ['power-knowledge', 'panopticon', 'biopolitics', 'archaeology-of-knowledge'],
    works: ['Discipline and Punish', 'The History of Sexuality', 'The Order of Things', 'Madness and Civilization'],
    summary: 'French post-structuralist historian and philosopher. Deployed genealogical analysis to expose how systems of "knowledge" (psychiatry, medicine, criminology) are inextricably intertwined with disciplinary mechanisms of power and surveillance.',
    positions: [
      {
        domain: 'Political Philosophy',
        position: 'Power-Knowledge: Power is not simply top-down state sovereign violence; it is diffuse, capillary, and generative, producing the very categories of truth and human subjects.'
      },
      {
        domain: 'Epistemology',
        position: 'Episteme: Every historical epoch possesses an unconscious linguistic and conceptual grid determining what can and cannot be thought.'
      }
    ],
    dna: [
      { domain: 'Political Philosophy', weight: 100 },
      { domain: 'Epistemology', weight: 90 },
      { domain: 'Philosophy of Language', weight: 80 },
      { domain: 'Ethics', weight: 75 }
    ],
    influences: ['nietzsche', 'marx', 'heidegger'],
    influenced: ['butler', 'postmodernism'],
    famousQuote: {
      quote: 'Where there is power, there is resistance.',
      context: 'The History of Sexuality, Volume 1'
    },
    sepUrl: 'https://plato.stanford.edu/entries/foucault/',
    sepTitle: 'Michel Foucault'
  },
  {
    id: 'rawls',
    name: 'John Rawls',
    nativeName: 'John Bordley Rawls',
    birthYear: 1921,
    deathYear: 2002,
    displayDates: '1921 – 2002 CE',
    era: 'contemporary',
    tradition: 'American',
    region: 'Baltimore & Cambridge, Massachusetts, USA',
    schools: ['liberal-egalitarianism', 'kantianism'],
    domains: ['Political Philosophy', 'Ethics'],
    concepts: ['veil-of-ignorance', 'original-position', 'justice-as-fairness', 'difference-principle'],
    works: ['A Theory of Justice (1971)', 'Political Liberalism (1993)', 'The Law of Peoples'],
    summary: 'Revitalized Anglo-American political philosophy. Formulated "Justice as Fairness" through the hypothetical thought experiment of the "Veil of Ignorance", arguing rational agents behind the veil would secure equal basic liberties and permit social inequalities only if they maximize the advantage of the least-advantaged.',
    positions: [
      {
        domain: 'Political Philosophy',
        position: 'Justice as Fairness: Rules of a just society must be decided behind a "Veil of Ignorance" where no one knows their social class, race, gender, or innate talents.'
      },
      {
        domain: 'Ethics',
        position: 'Difference Principle: Socioeconomic inequalities are permissible only if they work to the maximum benefit of the least advantaged members of society.'
      }
    ],
    dna: [
      { domain: 'Political Philosophy', weight: 100 },
      { domain: 'Ethics', weight: 95 },
      { domain: 'Epistemology', weight: 60 }
    ],
    influences: ['kant', 'locke', 'mill'],
    influenced: ['parfit', 'sen', 'habermas'],
    famousQuote: {
      quote: 'Justice is the first virtue of social institutions, as truth is of systems of thought.',
      context: 'A Theory of Justice (1971), §1'
    },
    sepUrl: 'https://plato.stanford.edu/entries/rawls/',
    sepTitle: 'John Rawls'
  },
  {
    id: 'parfit',
    name: 'Derek Parfit',
    nativeName: 'Derek Antony Parfit',
    birthYear: 1942,
    deathYear: 2017,
    displayDates: '1942 – 2017 CE',
    era: 'contemporary',
    tradition: 'European',
    region: 'Oxford, England',
    schools: ['analytic-philosophy', 'consequentialism'],
    domains: ['Ethics', 'Metaphysics', 'Philosophy of Mind'],
    concepts: ['reductionism-about-persons', 'repugnant-conclusion', 'teletransporter-paradox', 'non-identity-problem'],
    works: ['Reasons and Persons (1984)', 'On What Matters (2011)'],
    summary: 'One of the greatest moral philosophers of the late 20th century. Advanced a radical reductionist account of personal identity resembling Buddhist Anatta, demonstrating that psychological continuity matters, not identity itself, and unified Kantianism, Scanlonian contractualism, and rule consequentialism.',
    positions: [
      {
        domain: 'Philosophy of Mind',
        position: 'Reductionism about Persons: We are not enduring Cartesian souls or unities; our identity consists merely in relations of psychological continuity and connectedness (Relation R). Identity does not matter.'
      },
      {
        domain: 'Ethics',
        position: 'Triple Theory: Kantian deontology, contractualism, and rule consequentialism are climbing the same mountain from different sides and converge on the same moral truths.'
      }
    ],
    dna: [
      { domain: 'Ethics', weight: 100 },
      { domain: 'Philosophy of Mind', weight: 95 },
      { domain: 'Metaphysics', weight: 90 }
    ],
    influences: ['hume', 'kant', 'mill', 'gautama-buddha'],
    influenced: ['chalmers', 'effective-altruism'],
    famousQuote: {
      quote: 'My life seemed like a glass tunnel, through which I was moving faster every year... When I changed my view, the walls of my glass tunnel disappeared. I now live in the open air.',
      context: 'Reasons and Persons (1984), §95'
    },
    sepUrl: 'https://plato.stanford.edu/entries/identity-personal/',
    sepTitle: 'Personal Identity & Parfit'
  },
  {
    id: 'chalmers',
    name: 'David Chalmers',
    nativeName: 'David John Chalmers',
    birthYear: 1966,
    deathYear: 2099, // Still living
    displayDates: '1966 – Present',
    era: 'contemporary',
    tradition: 'Global',
    region: 'Sydney, Australia & New York, USA',
    schools: ['philosophy-of-mind', 'analytic-philosophy'],
    domains: ['Philosophy of Mind', 'Metaphysics', 'Epistemology'],
    concepts: ['hard-problem-of-consciousness', 'philosophical-zombies', 'virtual-realism', 'extended-mind'],
    works: ['The Conscious Mind (1996)', 'Reality+: Virtual Worlds and the Problems of Philosophy (2022)'],
    summary: 'Foremost contemporary philosopher of mind. Formulated the famous "Hard Problem of Consciousness" (why neural processing is accompanied by subjective phenomenal experience) and used the Philosophical Zombie argument to challenge physicalism.',
    positions: [
      {
        domain: 'Philosophy of Mind',
        position: 'The Hard Problem: Explaining cognitive functions and brain mechanisms (the easy problems) fails to answer why all this processing feels like anything from the inside (qualia).'
      },
      {
        domain: 'Metaphysics',
        position: 'Property Dualism / Panpsychism: Since physical zombies (creatures physically identical to us but completely dark inside) are logically conceivable, physicalism is false: consciousness must be a fundamental feature of the universe.'
      }
    ],
    dna: [
      { domain: 'Philosophy of Mind', weight: 100 },
      { domain: 'Metaphysics', weight: 95 },
      { domain: 'Epistemology', weight: 85 }
    ],
    influences: ['descartes', 'kant', 'russell'],
    influenced: [],
    famousQuote: {
      quote: 'Consciousness is the biggest mystery. It may be the largest outstanding obstacle in our quest for a scientific understanding of the universe.',
      context: 'The Conscious Mind (1996)'
    },
    sepUrl: 'https://plato.stanford.edu/entries/consciousness/',
    sepTitle: 'Consciousness & The Hard Problem'
  }
];

export const SCHOOLS: School[] = [
  {
    id: 'classical-greek',
    name: 'Classical Greek Philosophy',
    period: '5th – 4th Century BCE',
    tradition: 'Greek',
    summary: 'The inaugural Athenian intellectual tradition marked by the Socratic turn toward virtue, dialectic, definition, and epistemic self-examination.',
    coreTenets: [
      'Unexamined assumptions must be dismantled through dialogue (elenchus)',
      'Virtue is intrinsically tied to rational knowledge of the Good',
      'The soul’s harmony is the foundation of genuine happiness'
    ],
    philosophers: ['socrates'],
    concepts: ['socratic-method', 'virtue-ethics', 'eudaimonia'],
    sepUrl: 'https://plato.stanford.edu/entries/socrates/'
  },
  {
    id: 'platonism',
    name: 'Platonism',
    period: '4th Century BCE – Present',
    tradition: 'Greek',
    summary: 'Metaphysical tradition holding that sensible objects participate in eternal, immaterial, transcendent Forms intelligible only by intellect.',
    coreTenets: [
      'Transcendent realm of immutable Forms (Ideai) is the true reality',
      'Knowledge is anamnesis (recollection) rather than empirical ingestion',
      'The philosopher seeks the Form of the Good beyond sensible shadows'
    ],
    philosophers: ['plato', 'augustine'],
    concepts: ['theory-of-forms', 'republic-justice', 'anamnesis'],
    sepUrl: 'https://plato.stanford.edu/entries/plato/'
  },
  {
    id: 'aristotelianism',
    name: 'Aristotelianism',
    period: '4th Century BCE – Present',
    tradition: 'Greek',
    summary: 'Empirically attentive system founded on substance ontology, hylomorphism (matter/form), syllogistic logic, teleology, and virtue ethics.',
    coreTenets: [
      'Forms exist immanently within physical substances (hylomorphism)',
      'Natural phenomena unfold toward teleological ends (entelechy)',
      'Virtue is the cultivated golden mean between extremes'
    ],
    philosophers: ['aristotle', 'avicenna', 'aquinas'],
    concepts: ['substance-ontology', 'four-causes', 'virtue-ethics', 'teleology'],
    sepUrl: 'https://plato.stanford.edu/entries/aristotle/'
  },
  {
    id: 'stoicism',
    name: 'Stoicism',
    period: '3rd Century BCE – 2nd Century CE',
    tradition: 'Greek',
    summary: 'Hellenistic and Roman philosophy asserting that virtue is the sole good, cosmic reason (Logos) orders all things, and freedom lies in mastering one’s judgments.',
    coreTenets: [
      'Virtue alone is sufficient for eudaimonia (happiness)',
      'Strict dichotomy of control between what depends on us and what does not',
      'Universal cosmopolitan brotherhood under divine rational Logos'
    ],
    philosophers: ['zeno-of-citium', 'seneca', 'epictetus', 'marcus-aurelius'],
    concepts: ['stoic-virtue', 'dichotomy-of-control', 'amor-fati', 'apatheia'],
    sepUrl: 'https://plato.stanford.edu/entries/stoicism/'
  },
  {
    id: 'epicureanism',
    name: 'Epicureanism',
    period: '4th Century BCE – 2nd Century CE',
    tradition: 'Greek',
    summary: 'Materialist philosophy combining mechanistic atomism with enlightened tranquility, seeking ataraxia (untroubled peace) through modest living.',
    coreTenets: [
      'Everything consists of atoms moving through empty void',
      'Pleasure (absence of mental anxiety and physical pain) is the supreme good',
      'Death is mere atomic dissolution and therefore nothing to be feared'
    ],
    philosophers: ['epicurus'],
    concepts: ['ataraxia', 'atomism', 'problem-of-evil'],
    sepUrl: 'https://plato.stanford.edu/entries/epicurus/'
  },
  {
    id: 'confucianism',
    name: 'Confucianism (Ruism)',
    period: '6th Century BCE – Present',
    tradition: 'Chinese',
    summary: 'Socio-ethical philosophy centering on moral self-cultivation, ritual propriety (Li), benevolence (Ren), and governance by moral virtue.',
    coreTenets: [
      'Cultivation of the Junzi (exemplary moral person)',
      'Harmony through ritual propriety (Li) and filial devotion (Xiao)',
      'Governance through moral charisma and exemplary virtue (De)'
    ],
    philosophers: ['confucius'],
    concepts: ['ren-humaneness', 'li-ritual-propriety', 'junzi-noble-person', 'filial-piety'],
    sepUrl: 'https://plato.stanford.edu/entries/confucius/'
  },
  {
    id: 'daoism',
    name: 'Daoism',
    period: '6th Century BCE – Present',
    tradition: 'Chinese',
    summary: 'Metaphysical and philosophical tradition advocating alignment with the ineffable cosmic Way (Dao) through effortless spontaneous action (Wu Wei).',
    coreTenets: [
      'The eternal Dao is beyond linguistic categorization',
      'Practice Wu Wei (effortless non-contending action)',
      'Embrace natural spontaneity (Ziran) and the softness of water'
    ],
    philosophers: ['laozi', 'zhuangzi'],
    concepts: ['dao-way', 'wu-wei-effortless-action', 'perspectivism', 'yin-yang'],
    sepUrl: 'https://plato.stanford.edu/entries/daoism/'
  },
  {
    id: 'early-buddhism',
    name: 'Early Buddhism',
    period: '6th Century BCE – Present',
    tradition: 'Indian',
    summary: 'Spiritual and philosophical tradition identifying the cessation of suffering (dukkha) through understanding non-self (Anatta) and dependent co-arising.',
    coreTenets: [
      'Four Noble Truths diagnose suffering, its cause (craving), and cessation',
      'All phenomena are impermanent (Anicca) and lacking enduring self (Anatta)',
      'Everything arises dependently (Pratītyasamutpāda)'
    ],
    philosophers: ['gautama-buddha'],
    concepts: ['anatta-no-self', 'dependent-origination', 'four-noble-truths'],
    sepUrl: 'https://plato.stanford.edu/entries/buddha/'
  },
  {
    id: 'madhyamaka',
    name: 'Madhyamaka (Middle Way)',
    period: '2nd Century CE – Present',
    tradition: 'Indian',
    summary: 'Mahāyāna Buddhist school founded by Nagarjuna demonstrating that all phenomena and views are empty (Śūnyatā) of intrinsic independent reality.',
    coreTenets: [
      'Everything is empty of inherent essence (Svabhāva)',
      'Emptiness is equivalent to dependent co-origination',
      'Two truths doctrine: conventional practical truth and ultimate truth'
    ],
    philosophers: ['nagarjuna'],
    concepts: ['shunyata-emptiness', 'two-truths-doctrine', 'dependent-origination'],
    sepUrl: 'https://plato.stanford.edu/entries/nagarjuna/'
  },
  {
    id: 'advaita-vedanta',
    name: 'Advaita Vedanta',
    period: '8th Century CE – Present',
    tradition: 'Indian',
    summary: 'Radical non-dualist Indian metaphysical school holding that the inner conscious self (Atman) is entirely identical with the ultimate reality (Brahman).',
    coreTenets: [
      'Brahman alone is real; cosmic multiplicity is illusory projection (Maya)',
      'The true self (Atman) is identical with supreme Brahman',
      'Liberation (Moksha) comes through direct experiential non-dual realization'
    ],
    philosophers: ['adi-shankara'],
    concepts: ['advaita-non-dualism', 'brahman-atman-identity', 'maya-illusion'],
    sepUrl: 'https://plato.stanford.edu/entries/shankara/'
  },
  {
    id: 'scholasticism',
    name: 'Scholasticism',
    period: '11th – 15th Century CE',
    tradition: 'Christian',
    summary: 'Medieval university tradition synthesizing Christian theological revelation with classical Aristotelian logic and systematic disputation.',
    coreTenets: [
      'Faith and reason are harmonious aspects of divine illumination',
      'Rigorous syllogistic disputation (quaestio) to resolve dialectical tensions',
      'Natural Law reflects eternal rational divine order'
    ],
    philosophers: ['aquinas'],
    concepts: ['five-ways-quinque-viae', 'natural-law', 'essence-and-existence'],
    sepUrl: 'https://plato.stanford.edu/entries/aquinas/'
  },
  {
    id: 'rationalism',
    name: 'Continental Rationalism',
    period: '17th – 18th Century CE',
    tradition: 'European',
    summary: 'Epistemological movement holding that intellect and innate rational principles, independent of sensory experience, are the primary source of knowledge.',
    coreTenets: [
      'Fundamental metaphysical truths are discovered by pure intellect',
      'Deductive geometrical demonstrations mirror cosmic structure',
      'Senses are prone to deception and require rational rectification'
    ],
    philosophers: ['descartes', 'spinoza', 'leibniz'],
    concepts: ['cogito-ergo-sum', 'substance-monism', 'monadology', 'principle-of-sufficient-reason'],
    sepUrl: 'https://plato.stanford.edu/entries/rationalism-empiricism/'
  },
  {
    id: 'empiricism',
    name: 'British Empiricism',
    period: '17th – 18th Century CE',
    tradition: 'European',
    summary: 'Epistemological tradition asserting that all concepts, knowledge, and justification originate solely from sensory experience and reflection.',
    coreTenets: [
      'The mind is born a blank tablet (tabula rasa) without innate ideas',
      'All valid ideas must trace back to sensory impressions',
      'Inductive scientific generalization based on observation'
    ],
    philosophers: ['locke', 'berkeley', 'hume', 'mill'],
    concepts: ['tabula-rasa', 'problem-of-induction', 'bundle-theory-of-self', 'harm-principle'],
    sepUrl: 'https://plato.stanford.edu/entries/rationalism-empiricism/'
  },
  {
    id: 'german-idealism',
    name: 'German Idealism',
    period: 'Late 18th – Mid 19th Century CE',
    tradition: 'European',
    summary: 'Monumental movement following Kant’s critical turn, resolving the noumenal divide through dynamic systems of Absolute Mind/Spirit.',
    coreTenets: [
      'Reality is fundamentally spiritual, mental, or conceptual in structure',
      'Dialectical development of consciousness through contradiction and synthesis',
      'Freedom is the self-realization of Spirit in history'
    ],
    philosophers: ['kant', 'hegel', 'schopenhauer'],
    concepts: ['transcendental-idealism', 'absolute-idealism', 'aufhebung', 'will-as-noumenon'],
    sepUrl: 'https://plato.stanford.edu/entries/idealism/'
  },
  {
    id: 'existentialism',
    name: 'Existentialism',
    period: '19th – 20th Century CE',
    tradition: 'European',
    summary: 'Philosophical stance focusing on the concrete, lived experience of the individual, authentic freedom, angst, and the burden of self-creation.',
    coreTenets: [
      'Existence precedes essence: humans are not determined by an a priori nature',
      'Radical freedom and inescapable personal responsibility',
      'Confrontation with dread, absurdity, and bad faith'
    ],
    philosophers: ['kierkegaard', 'nietzsche', 'heidegger', 'sartre', 'beauvoir', 'camus'],
    concepts: ['existence-precedes-essence', 'bad-faith-mauvaise-foi', 'the-absurd', 'angst-anxiety'],
    sepUrl: 'https://plato.stanford.edu/entries/existentialism/'
  },
  {
    id: 'analytic-philosophy',
    name: 'Analytic Philosophy',
    period: 'Late 19th Century – Present',
    tradition: 'European',
    summary: 'Dominant English-speaking philosophical tradition emphasizing logical clarity, semantic precision, linguistic analysis, and naturalistic rigor.',
    coreTenets: [
      'Philosophical problems are illuminated through formal and natural language analysis',
      'Commitment to logical precision, argument decomposition, and scientific alignment',
      'Caution toward sweeping metaphysical systems'
    ],
    philosophers: ['russell', 'wittgenstein', 'parfit', 'chalmers', 'rawls'],
    concepts: ['theory-of-descriptions', 'language-games', 'hard-problem-of-consciousness', 'veil-of-ignorance'],
    sepUrl: 'https://plato.stanford.edu/entries/analytic-philosophy/'
  },
  {
    id: 'phenomenology',
    name: 'Phenomenology',
    period: '20th Century – Present',
    tradition: 'European',
    summary: 'Systematic study of the structures of conscious experience and appearances from the first-person perspective.',
    coreTenets: [
      'Return to "the things themselves" through phenomenological reduction (epoché)',
      'Intentionality: all consciousness is consciousness of something',
      'Exploration of lived embodiment and the lifeworld'
    ],
    philosophers: ['husserl', 'heidegger', 'sartre', 'merleau-ponty'],
    concepts: ['phenomenology', 'intentionality', 'dasein', 'being-in-the-world'],
    sepUrl: 'https://plato.stanford.edu/entries/phenomenology/'
  }
];

export const CONCEPTS: Concept[] = [
  {
    id: 'free-will',
    name: 'Free Will & Determinism',
    domain: ['Metaphysics', 'Ethics', 'Philosophy of Mind'],
    summary: 'The philosophical investigation into whether rational agents have genuine capacity to choose between alternative actions, or whether choices are strictly necessitated by prior causal conditions.',
    theQuestion: 'Do human beings possess the genuine capacity to act freely, or are all our thoughts, choices, and deeds entirely determined by prior physical causes?',
    majorPositions: [
      {
        title: 'Hard Determinism',
        description: 'Every event, including human volition, is causally necessitated by prior states and laws of physics. Genuine metaphysical free will is a psychological illusion.',
        representativeThinkers: ['spinoza', 'epicurus']
      },
      {
        title: 'Compatibilism (Soft Determinism)',
        description: 'Free will and determinism are logically compatible: to act freely simply means acting in accord with your desires without external physical coercion, even if desires are causally generated.',
        representativeThinkers: ['locke', 'hume', 'mill']
      },
      {
        title: 'Libertarianism',
        description: 'Determinism is false. Agents possess genuine categorical freedom (power to do otherwise) via non-physical mental agency or indeterminacy.',
        representativeThinkers: ['descartes', 'kant', 'sartre']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Ancient Fate & The Atomic Swerve',
        keyThinkers: ['epicurus', 'zeno-of-citium', 'aristotle'],
        developmentDescription: 'Aristotle analyzed voluntary vs involuntary acts (akrasia). Stoics defended compatibilism with divine fate, while Epicurus postulated the atomic "swerve" (clinamen) to break hard fatalism.'
      },
      {
        era: 'medieval',
        label: 'Grace, Sin, & Divine Foreknowledge',
        keyThinkers: ['augustine', 'aquinas'],
        developmentDescription: 'Augustine and Aquinas grappled with reconciling human moral culpability with God’s omniscience and omnipotent grace.'
      },
      {
        era: 'early-modern',
        label: 'Mechanical Universe vs. Moral Autonomy',
        keyThinkers: ['descartes', 'spinoza', 'hume', 'kant'],
        developmentDescription: 'Spinoza affirmed total causal necessity in nature. Hume reframed freedom as absence of external constraint. Kant split human agency: determined as physical phenomena, but autonomous as noumenal moral wills.'
      },
      {
        era: 'contemporary',
        label: 'Radical Freedom, Neuroscience, & Moral Luck',
        keyThinkers: ['sartre', 'parfit', 'chalmers'],
        developmentDescription: 'Sartre proclaimed absolute existential freedom ("condemned to be free"). Contemporary cognitive neuroscience and analytic philosophers investigate whether moral responsibility can survive physical brain determinism.'
      }
    ],
    whyItMatters: 'The problem of free will underpins our entire legal system of criminal culpability, moral praise and blame, personal regret, gratitude, and our conception of what it means to be human.',
    philosophers: ['augustine', 'spinoza', 'hume', 'kant', 'sartre'],
    schools: ['stoicism', 'rationalism', 'empiricism', 'existentialism'],
    relatedConcepts: ['determinism', 'moral-responsibility', 'compatibilism', 'agency'],
    sources: [
      {
        title: 'Free Will',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/freewill/'
      },
      {
        title: 'Compatibilism',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/compatibilism/'
      }
    ]
  },
  {
    id: 'theory-of-forms',
    name: 'Theory of Forms',
    domain: ['Metaphysics', 'Epistemology'],
    summary: 'Plato’s doctrine that the transient, imperfect physical world is an imperfect reflection of transcendent, eternal, immutable archetypes or essences (Forms).',
    theQuestion: 'What constitutes ultimate reality: transient physical objects perceived by the senses, or timeless universal essences known only through pure intellect?',
    majorPositions: [
      {
        title: 'Platonic Realism (Transcendence)',
        description: 'Forms exist as mind-independent, non-spatial, non-temporal entities superior to physical copies.',
        representativeThinkers: ['plato', 'augustine']
      },
      {
        title: 'Aristotelian Moderate Realism (Immanence)',
        description: 'Forms exist, but only as instantiated within concrete physical substances (hylomorphism), not in a separate celestial heaven.',
        representativeThinkers: ['aristotle', 'aquinas']
      },
      {
        title: 'Nominalism',
        description: 'Only individual concrete particulars exist; universals are merely convenient linguistic names (nomina) without independent reality.',
        representativeThinkers: ['locke', 'hume']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Dialectical Emergence & Aristotelian Critique',
        keyThinkers: ['plato', 'aristotle'],
        developmentDescription: 'Plato formulated the Forms in the Republic and Phaedo to explain how multiple items share common essences (Justice, Beauty). Aristotle critiqued the "Third Man" argument and brought Forms into physical matter.'
      },
      {
        era: 'medieval',
        label: 'Divine Ideas & The Problem of Universals',
        keyThinkers: ['augustine', 'aquinas'],
        developmentDescription: 'Christian and Islamic philosophers located Platonic Forms as eternal archetypes in the mind of God.'
      },
      {
        era: 'early-modern',
        label: 'Innate Ideas vs. Empirical Abstraction',
        keyThinkers: ['descartes', 'locke', 'kant'],
        developmentDescription: 'Rationalists defended innate concepts; empiricists dismissed them as inductive abstractions from sensory particularity.'
      }
    ],
    whyItMatters: 'Shapes foundational debates in mathematics (are numbers discovered or invented?), scientific laws (do natural kinds exist?), and ethics (are moral truths objective or constructed?).',
    philosophers: ['plato', 'aristotle', 'augustine', 'kant'],
    schools: ['platonism', 'aristotelianism', 'rationalism'],
    relatedConcepts: ['problem-of-universals', 'substance-ontology', 'anamnesis'],
    sources: [
      {
        title: 'Plato\'s Middle Period Metaphysics and Epistemology',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/plato-metaphysics/'
      }
    ]
  },
  {
    id: 'mind-body-dualism',
    name: 'Mind-Body Dualism & Consciousness',
    domain: ['Philosophy of Mind', 'Metaphysics'],
    summary: 'The problem of explaining the relationship between conscious mental states (qualia, thoughts, feelings) and physical states of the brain and body.',
    theQuestion: 'Is the human mind an immaterial conscious entity distinct from the physical brain, or is consciousness completely reducible to physical biology?',
    majorPositions: [
      {
        title: 'Substance Dualism',
        description: 'Mind (thinking substance) and body (extended matter) are two fundamentally distinct substances.',
        representativeThinkers: ['descartes']
      },
      {
        title: 'Physicalism / Reductive Materialism',
        description: 'All mental phenomena are identical with or completely determined by neurobiological brain operations.',
        representativeThinkers: ['epicurus', 'russell']
      },
      {
        title: 'Property Dualism / Panpsychism',
        description: 'While substance is physical, conscious subjective experience (qualia) is an irreducible fundamental property of reality.',
        representativeThinkers: ['spinoza', 'chalmers']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Soul as Form vs. Atomic Soul',
        keyThinkers: ['plato', 'aristotle', 'epicurus', 'gautama-buddha'],
        developmentDescription: 'Plato argued for an immortal soul; Aristotle described soul (psyche) as the living form of the physical body. Buddha dismantled the unified soul entirely (Anatta).'
      },
      {
        era: 'early-modern',
        label: 'The Cartesian Divide & Monist Revolt',
        keyThinkers: ['descartes', 'spinoza', 'leibniz', 'locke'],
        developmentDescription: 'Descartes established substance dualism. Spinoza replied that mind and matter are parallel aspects of one substance. Leibniz proposed windowless monads in pre-established harmony.'
      },
      {
        era: 'contemporary',
        label: 'The Hard Problem & Zombies',
        keyThinkers: ['wittgenstein', 'chalmers'],
        developmentDescription: 'David Chalmers crystallized the "Hard Problem of Consciousness" and philosophical zombies, showing that neurocomputational accounts fail to explain why it feels like anything from the inside.'
      }
    ],
    whyItMatters: 'Directly impacts artificial intelligence (can computers become sentient?), neuroscience, ethics of non-human animals, end-of-life medicine, and virtual reality.',
    philosophers: ['descartes', 'spinoza', 'chalmers', 'gautama-buddha'],
    schools: ['rationalism', 'philosophy-of-mind', 'analytic-philosophy'],
    relatedConcepts: ['hard-problem-of-consciousness', 'philosophical-zombies', 'cogito-ergo-sum'],
    sources: [
      {
        title: 'Dualism',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/dualism/'
      },
      {
        title: 'Consciousness',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/consciousness/'
      }
    ]
  },
  {
    id: 'socratic-method',
    name: 'The Socratic Method (Elenchus)',
    domain: ['Epistemology', 'Ethics'],
    summary: 'A cooperative argumentative dialogue designed to stimulate critical thinking and expose latent contradictions in interlocutors’ dogmatic beliefs.',
    theQuestion: 'How can humans distinguish genuine knowledge from ungrounded prejudice through dialectical cross-examination?',
    majorPositions: [
      {
        title: 'Apophatic Skepticism',
        description: 'The elenchus refutes false certainty, proving that self-proclaimed experts know nothing.',
        representativeThinkers: ['socrates']
      },
      {
        title: 'Constructive Dialectic',
        description: 'Elenchus clears away dogma as a necessary preparatory purge to discover objective definitions.',
        representativeThinkers: ['plato']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Agora Interrogations',
        keyThinkers: ['socrates', 'plato'],
        developmentDescription: 'Socrates interrogated citizens on virtue, justice, and piety in Athens, dismantling dogmatic definitions.'
      }
    ],
    whyItMatters: 'The bedrock of Western critical inquiry, modern legal cross-examination, scientific peer review, and democratic debate.',
    philosophers: ['socrates', 'plato'],
    schools: ['classical-greek'],
    relatedConcepts: ['virtue-ethics', 'anamnesis'],
    sources: [
      {
        title: 'Socrates',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/socrates/'
      }
    ]
  },
  {
    id: 'categorical-imperative',
    name: 'The Categorical Imperative',
    domain: ['Ethics'],
    summary: 'Immanuel Kant’s supreme principle of pure practical reason, demanding that moral duties apply unconditionally to all rational beings regardless of personal desires.',
    theQuestion: 'What makes an action morally right: its beneficial consequences, or its adherence to universalizable duties of pure reason?',
    majorPositions: [
      {
        title: 'Deontology (Kant)',
        description: 'Actions have moral value only if done out of respect for universal moral duty, treating humanity always as an end and never as a mere means.',
        representativeThinkers: ['kant']
      },
      {
        title: 'Consequentialism / Utilitarianism',
        description: 'Moral value resides strictly in the outcome of the act (maximizing pleasure or well-being), rejecting unconditional deontological prohibitions.',
        representativeThinkers: ['mill', 'parfit']
      }
    ],
    historicalDevelopment: [
      {
        era: 'early-modern',
        label: 'Groundwork of Morals',
        keyThinkers: ['kant'],
        developmentDescription: 'Kant formulated the Universal Law formulation ("act only on that maxim you can will as universal law") and the Formula of Humanity.'
      },
      {
        era: 'contemporary',
        label: 'Rawlsian Constructivism',
        keyThinkers: ['rawls', 'parfit'],
        developmentDescription: 'Rawls adapted Kantian autonomy into his Veil of Ignorance. Parfit argued Kantianism and rule-consequentialism converge.'
      }
    ],
    whyItMatters: 'Foundational framework for universal human rights, medical ethics (informed consent), and international law prohibiting exploitation of persons.',
    philosophers: ['kant', 'rawls', 'parfit'],
    schools: ['kantianism', 'liberal-egalitarianism'],
    relatedConcepts: ['transcendental-idealism', 'veil-of-ignorance', 'virtue-ethics'],
    sources: [
      {
        title: 'Kant\'s Moral Philosophy',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/kant-moral/'
      }
    ]
  },
  {
    id: 'problem-of-evil',
    name: 'The Problem of Evil & Suffering',
    domain: ['Philosophy of Religion', 'Metaphysics', 'Ethics'],
    summary: 'The logical and evidential dilemma of reconciling the existence of intense suffering and evil with an omnipotent, omniscient, and omnibenevolent deity.',
    theQuestion: 'If God is all-powerful, all-knowing, and wholly good, why does gratuitous horrific suffering exist in the world?',
    majorPositions: [
      {
        title: 'Privation Theory (Privatio Boni)',
        description: 'Evil is not an ontological entity created by God; it is a lack or privation of good resulting from defective creaturely free will.',
        representativeThinkers: ['augustine', 'aquinas']
      },
      {
        title: 'Theodicy of the Best World',
        description: 'God created the best of all possible worlds; evils are necessary parts of a grander harmonious divine cosmic tapestry.',
        representativeThinkers: ['leibniz']
      },
      {
        title: 'Atheistic Evidential Argument',
        description: 'The sheer volume and cruelty of natural and moral suffering renders the existence of a loving omnipotent God extraordinarily improbable.',
        representativeThinkers: ['epicurus', 'hume', 'schopenhauer', 'camus']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Epicurean Trilemma',
        keyThinkers: ['epicurus'],
        developmentDescription: 'Epicurus formulated the trilemma: Is God willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent.'
      },
      {
        era: 'medieval',
        label: 'Privation & Free Will Defense',
        keyThinkers: ['augustine', 'al-ghazali', 'aquinas', 'maimonides'],
        developmentDescription: 'Augustine and Aquinas argued evil is privatio boni, defending divine justice.'
      },
      {
        era: 'early-modern',
        label: 'Theodicy vs Skepticism',
        keyThinkers: ['leibniz', 'hume'],
        developmentDescription: 'Leibniz argued this is the best of all possible worlds. Hume’s Dialogues refuted cosmological and teleological claims of benevolence.'
      }
    ],
    whyItMatters: 'The central intellectual challenge to religious belief and theology, driving existential revolts and debates on the meaning of human tragedy.',
    philosophers: ['epicurus', 'augustine', 'leibniz', 'hume', 'camus'],
    schools: ['epicureanism', 'scholasticism', 'empiricism', 'absurdism'],
    relatedConcepts: ['free-will', 'the-absurd', 'philosophical-pessimism'],
    sources: [
      {
        title: 'The Problem of Evil',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/evil/'
      }
    ]
  },
  {
    id: 'shunyata-emptiness',
    name: 'Śūnyatā (Emptiness) & Dependent Origination',
    domain: ['Metaphysics', 'Epistemology'],
    summary: 'The foundational Buddhist insight that all things exist in radical causal interdependence (Pratītyasamutpāda) and are therefore empty of permanent, independent self-essence.',
    theQuestion: 'Do things possess intrinsic, independent self-existence, or are all entities empty conventions dependently co-arising with causes and conditions?',
    majorPositions: [
      {
        title: 'Madhyamaka Non-Foundationalism',
        description: 'All phenomena, concepts, and even Emptiness itself are empty of inherent existence (Svabhāva); reality is relational without an absolute foundation.',
        representativeThinkers: ['gautama-buddha', 'nagarjuna']
      },
      {
        title: 'Substance Essentialism (Opposing View)',
        description: 'True reality must consist of foundational, independent substances or basic atomic building blocks that exist in themselves.',
        representativeThinkers: ['aristotle', 'descartes']
      }
    ],
    historicalDevelopment: [
      {
        era: 'ancient',
        label: 'Buddha’s Discourse & Nagarjuna’s Dialectic',
        keyThinkers: ['gautama-buddha', 'nagarjuna'],
        developmentDescription: 'The Buddha taught dependent origination as the middle way between eternalism and annihilationism. Nagarjuna rigorously deployed dialectical refutations (catuṣkoṭi) to dismantle any claim to inherent existence.'
      }
    ],
    whyItMatters: 'Anticipates modern quantum entanglement, systems theory, linguistic deconstruction, and non-foundationalist cognitive science.',
    philosophers: ['gautama-buddha', 'nagarjuna'],
    schools: ['early-buddhism', 'madhyamaka'],
    relatedConcepts: ['anatta-no-self', 'two-truths-doctrine', 'perspectivism'],
    sources: [
      {
        title: 'Nāgārjuna',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/nagarjuna/'
      }
    ]
  },
  {
    id: 'veil-of-ignorance',
    name: 'The Veil of Ignorance & Justice as Fairness',
    domain: ['Political Philosophy', 'Ethics'],
    summary: 'John Rawls’ hypothetical device wherein rational individuals deliberate principles of social justice without knowing their own wealth, race, gender, social class, or natural talents.',
    theQuestion: 'How can human society construct genuinely fair and impartial political institutions free from the biases of personal privilege?',
    majorPositions: [
      {
        title: 'Justice as Fairness (Rawls)',
        description: 'Impartial agreement behind the Veil demands equal basic liberties and the Difference Principle: inequalities are justified only if they benefit the least-advantaged.',
        representativeThinkers: ['rawls']
      },
      {
        title: 'Utilitarian Welfare Maximization',
        description: 'Society should maximize aggregate happiness or utility across all members, even if some individuals bear disproportionate burdens.',
        representativeThinkers: ['mill']
      }
    ],
    historicalDevelopment: [
      {
        era: 'contemporary',
        label: 'Revitalizing the Social Contract',
        keyThinkers: ['rawls', 'parfit'],
        developmentDescription: 'Rawls published A Theory of Justice (1971), single-handedly resurrecting normative political theory by adapting Kantian deontology into an algorithmic decision procedure for democratic equality.'
      }
    ],
    whyItMatters: 'The central theoretical framework for modern democratic welfare policies, constitutional law, healthcare allocation, and progressive taxation.',
    philosophers: ['rawls', 'kant', 'locke'],
    schools: ['liberal-egalitarianism', 'kantianism'],
    relatedConcepts: ['social-contract', 'categorical-imperative', 'harm-principle'],
    sources: [
      {
        title: 'John Rawls',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/rawls/'
      },
      {
        title: 'Original Position',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/original-position/'
      }
    ]
  }
];

export const BIG_QUESTIONS: BigQuestion[] = [
  {
    id: 'what-is-reality',
    question: 'What is Reality?',
    subtitle: 'From Platonic Forms to Atoms, Mind, and Emptiness',
    domain: 'Metaphysics',
    coreProblem: 'Is reality fundamentally physical, mental, a combination of both, or an interdependent illusion of consciousness?',
    keyThinkers: [
      { philosopherId: 'plato', stance: 'Reality is transcendent, immutable, intelligible Forms; sensible physical items are fluctuating shadows.' },
      { philosopherId: 'aristotle', stance: 'Reality consists of immanent concrete substances composed of matter shaped by form.' },
      { philosopherId: 'spinoza', stance: 'There is only one solitary infinite substance: God or Nature (Deus sive Natura).' },
      { philosopherId: 'nagarjuna', stance: 'All phenomena are empty (Śūnyatā) of intrinsic nature, existing in radical dependent origination.' },
      { philosopherId: 'kant', stance: 'We can know only phenomena structured by human cognition; the thing-in-itself (noumenon) is forever unknowable.' }
    ],
    keyConceptIds: ['theory-of-forms', 'substance-ontology', 'shunyata-emptiness', 'transcendental-idealism']
  },
  {
    id: 'do-we-have-free-will',
    question: 'Do We Have Free Will?',
    subtitle: 'Determinism, Moral Agency, and the Cosmic Machine',
    domain: 'Metaphysics',
    coreProblem: 'Are human choices causally necessitated by prior physical laws, or do rational minds possess the genuine power to choose otherwise?',
    keyThinkers: [
      { philosopherId: 'spinoza', stance: 'Complete causal determinism. Humans feel free only because they are conscious of volitions but ignorant of prior causes.' },
      { philosopherId: 'hume', stance: 'Compatibilism: Freedom is acting according to inner desires without external physical chains.' },
      { philosopherId: 'kant', stance: 'We are determined as physical appearances, yet morally autonomous as noumenal agents.' },
      { philosopherId: 'sartre', stance: 'Radical existential freedom: Man is condemned to be free with zero predetermined excuses.' }
    ],
    keyConceptIds: ['free-will', 'determinism', 'bad-faith-mauvaise-foi']
  },
  {
    id: 'what-is-consciousness',
    question: 'What is Consciousness?',
    subtitle: 'The Mind-Body Mystery, Qualia, and Philosophical Zombies',
    domain: 'Philosophy of Mind',
    coreProblem: 'Why should complex neural electro-chemical circuits in the brain produce a subjective, felt inner movie of experience (qualia)?',
    keyThinkers: [
      { philosopherId: 'descartes', stance: 'Substance dualism: The thinking soul (res cogitans) is an immaterial substance separate from the mechanical body.' },
      { philosopherId: 'gautama-buddha', stance: 'The "self" is not a unified soul, but five fluctuating, dependently co-arising aggregates (skandhas).' },
      { philosopherId: 'parfit', stance: 'Reductionism: A person is not an enduring unified Cartesian ego, but bundles of psychological connectedness.' },
      { philosopherId: 'chalmers', stance: 'The Hard Problem: Physical brain dynamics cannot logically deduce subjective felt qualia; consciousness is a fundamental property.' }
    ],
    keyConceptIds: ['mind-body-dualism', 'hard-problem-of-consciousness', 'bundle-theory-of-self', 'anatta-no-self']
  },
  {
    id: 'what-makes-an-action-good',
    question: 'What Makes an Action Good?',
    subtitle: 'Virtue, Pure Duty, and the Greatest Happiness',
    domain: 'Ethics',
    coreProblem: 'Does moral rightness depend upon cultivating character, obeying universal duty, or calculating optimal outcomes?',
    keyThinkers: [
      { philosopherId: 'aristotle', stance: 'Virtue Ethics: Flourishing (eudaimonia) achieved by cultivating the golden mean between vices.' },
      { philosopherId: 'kant', stance: 'Deontology: Duty commanded by the Categorical Imperative—act only on maxims you can will as universal law.' },
      { philosopherId: 'mill', stance: 'Utilitarianism: Promote the greatest happiness for the greatest number, prioritizing higher intellectual pleasures.' },
      { philosopherId: 'nietzsche', stance: 'Genealogical critique: Traditional egalitarian morality is a slave rebellion; higher humans must create their own values.' }
    ],
    keyConceptIds: ['categorical-imperative', 'virtue-ethics', 'harm-principle', 'will-to-power']
  },
  {
    id: 'what-can-we-know',
    question: 'What Can We Know?',
    subtitle: 'Skepticism, Sensation, and the Boundaries of Reason',
    domain: 'Epistemology',
    coreProblem: 'Can reason attain certainty about reality, or is all knowledge trapped within fallible senses and cognitive frameworks?',
    keyThinkers: [
      { philosopherId: 'socrates', stance: 'True wisdom is acknowledging ignorance: "I know that I know nothing."' },
      { philosopherId: 'descartes', stance: 'Methodic doubt burns away all uncertainty until reaching the indubitable "Cogito, ergo sum".' },
      { philosopherId: 'hume', stance: 'Radical empiricism: Causality and induction cannot be logically proven; all belief rests on habit.' },
      { philosopherId: 'kant', stance: 'Synthetic a priori knowledge is possible, but limited strictly to the domain of possible experience (phenomena).' },
      { philosopherId: 'zhuangzi', stance: 'Perspectivism: Human categories are relative; who knows if I am a man dreaming of a butterfly or a butterfly dreaming of a man?' }
    ],
    keyConceptIds: ['socratic-method', 'cogito-ergo-sum', 'problem-of-induction', 'transcendental-idealism', 'perspectivism']
  },
  {
    id: 'what-is-justice',
    question: 'What is Justice?',
    subtitle: 'The Harmony of the Soul, Natural Law, and the Social Contract',
    domain: 'Political Philosophy',
    coreProblem: 'How should human political communities be ordered to ensure fairness, liberty, and human flourishing?',
    keyThinkers: [
      { philosopherId: 'plato', stance: 'Justice is structural harmony: each part of the tripartite soul and city fulfilling its proper excellence.' },
      { philosopherId: 'locke', stance: 'Legitimate government protects natural rights to life, liberty, and property through mutual social contract.' },
      { philosopherId: 'marx', stance: 'Justice in class society is an ideological illusion masking capitalist exploitation; genuine freedom requires collective control of production.' },
      { philosopherId: 'rawls', stance: 'Justice as Fairness: Principles chosen behind a Veil of Ignorance to protect the worst-off.' }
    ],
    keyConceptIds: ['republic-justice', 'social-contract', 'veil-of-ignorance', 'class-struggle']
  },
  {
    id: 'what-makes-life-meaningful',
    question: 'What Makes Life Meaningful?',
    subtitle: 'Cosmic Order, Stoic Tranquility, and Existential Creation',
    domain: 'Ethics',
    coreProblem: 'In an indifferent universe, does human life possess an inherent purpose, or must meaning be forged by human will?',
    keyThinkers: [
      { philosopherId: 'marcus-aurelius', stance: 'Align will with universal cosmic Nature and duty; the inner citadel is invulnerable to external chaos.' },
      { philosopherId: 'schopenhauer', stance: 'Life is ceaseless blind striving and suffering; temporary peace is found only through aesthetic contemplation and compassion.' },
      { philosopherId: 'sartre', stance: 'Existence precedes essence. There is no predefined cosmic purpose; you are solely responsible for creating your meaning.' },
      { philosopherId: 'camus', stance: 'Embrace the Absurd: Reject suicide and despair; live with heroic, lucid revolt like Sisyphus pushing his boulder.' }
    ],
    keyConceptIds: ['amor-fati', 'philosophical-pessimism', 'existence-precedes-essence', 'the-absurd']
  },
  {
    id: 'does-god-exist',
    question: 'Does God Exist?',
    subtitle: 'Proofs of the Prime Mover, Divine Reason, and Radical Doubt',
    domain: 'Philosophy of Religion',
    coreProblem: 'Can divine existence be rationally demonstrated through cosmic design and ontology, or does the problem of evil negate it?',
    keyThinkers: [
      { philosopherId: 'aquinas', stance: 'Five Ways (Quinque Viae): Rational deduction from motion, causality, and contingency to a First Unmoved Cause.' },
      { philosopherId: 'spinoza', stance: 'God and Nature are identical (Deus sive Natura); God is not a personal sovereign, but the infinite order itself.' },
      { philosopherId: 'hume', stance: 'Teleological design arguments fall apart upon examination; natural suffering contradicts an all-good creator.' },
      { philosopherId: 'nietzsche', stance: 'The Death of God: The cultural bedrock of the transcendent has collapsed; humanity must overcome nihilism.' }
    ],
    keyConceptIds: ['five-ways-quinque-viae', 'deus-sive-natura', 'problem-of-evil', 'death-of-god']
  }
];

export const RELATIONSHIPS: Relationship[] = [
  // --- ANCIENT GREEK & ROMAN ---
  {
    id: 'rel-soc-pla',
    source: 'socrates',
    target: 'plato',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'INFLUENCED',
    description: 'Plato was Socrates\' most brilliant student, immortalizing the Socratic dialectic, intellectualism, and moral inquiry in his dialogues.',
    evidence: 'Plato depicts Socrates as the primary interlocutor throughout the early and middle dialogues.',
    confidence: 'documented',
    sources: [{ title: 'Plato', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/plato/' }]
  },
  {
    id: 'rel-pla-ari',
    source: 'plato',
    target: 'aristotle',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Aristotle studied at Plato\'s Academy for twenty years before rejecting the separate transcendent Realm of Forms in favor of immanent hylomorphism.',
    evidence: 'Aristotle explicitly critiques Plato\'s Theory of Forms in Metaphysics Alpha (990b) and Nicomachean Ethics I.6.',
    confidence: 'documented',
    sources: [{ title: 'Aristotle', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/aristotle/' }]
  },
  {
    id: 'rel-soc-zen',
    source: 'socrates',
    target: 'zeno-of-citium',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'INSPIRED',
    description: 'Zeno of Citium arrived in Athens and read Xenophon\'s Memorabilia of Socrates, deciding to model Stoic virtue ethics upon Socratic moral fortitude.',
    evidence: 'Diogenes Laertius (Lives of the Philosophers VII.2-3) documents Zeno’s conversion upon hearing of Socrates.',
    confidence: 'documented',
    sources: [{ title: 'Stoicism', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/stoicism/' }]
  },
  {
    id: 'rel-zen-sen',
    source: 'zeno-of-citium',
    target: 'seneca',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Seneca adapted early Greek Stoic logic and physics into practical, psychological ethical letters for Roman political life.',
    evidence: 'Seneca cites Zeno, Cleanthes, and Chrysippus continuously throughout the Epistulae Morales.',
    confidence: 'documented',
    sources: [{ title: 'Seneca', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/seneca/' }]
  },
  {
    id: 'rel-epi-mar',
    source: 'epictetus',
    target: 'marcus-aurelius',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'INFLUENCED',
    description: 'Marcus Aurelius was introduced to Epictetus’ Discourses by his tutor Junius Rusticus, adopting the dichotomy of control as the core of his Meditations.',
    evidence: 'Marcus explicitly thanks Rusticus in Meditations I.7 for lending him his personal copy of Epictetus’ lectures.',
    confidence: 'documented',
    sources: [{ title: 'Marcus Aurelius', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/marcus-aurelius/' }]
  },
  {
    id: 'rel-soc-epi',
    source: 'socrates',
    target: 'epicurus',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'RESPONDED_TO',
    description: 'Epicurus responded to Socratic-Platonic virtue ethics by founding a rival school (The Garden), grounding eudaimonia in ataraxia and physical atomism.',
    confidence: 'documented',
    sources: [{ title: 'Epicurus', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/epicurus/' }]
  },

  // --- CHINESE & INDIAN TRADITIONS ---
  {
    id: 'rel-lao-zhu',
    source: 'laozi',
    target: 'zhuangzi',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Zhuangzi extended Laozi\'s poetic metaphysics of the Dao into an epistemological and humorous celebration of perspectivism and natural spontaneity.',
    evidence: 'The Zhuangzi quotes and expands upon Laozi’s aphorisms throughout its Inner and Outer Chapters.',
    confidence: 'documented',
    sources: [{ title: 'Zhuangzi', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/zhuangzi/' }]
  },
  {
    id: 'rel-con-lao',
    source: 'confucius',
    target: 'laozi',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'ASSOCIATED_WITH',
    description: 'Ancient historical encounters and dialectical counterpoints between Confucian social-ritual duty (Li/Ren) and Daoist natural non-striving (Wu Wei).',
    evidence: 'Sima Qian’s Shiji records legendary dialogues between Confucius and Laozi on the nature of ritual and spontaneity.',
    confidence: 'probable',
    sources: [{ title: 'Daoism', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/daoism/' }]
  },
  {
    id: 'rel-bud-nag',
    source: 'gautama-buddha',
    target: 'nagarjuna',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Nagarjuna formulated Madhyamaka philosophy by formalizing the Buddha\'s core teachings on Pratītyasamutpāda and Anatta into the doctrine of Emptiness (Śūnyatā).',
    evidence: 'Mūlamadhyamakakārikā opens with a direct dedication to the Buddha for teaching dependent origination.',
    confidence: 'documented',
    sources: [{ title: 'Nāgārjuna', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/nagarjuna/' }]
  },
  {
    id: 'rel-bud-sha',
    source: 'gautama-buddha',
    target: 'adi-shankara',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Adi Shankara debated Buddhist non-self (Anatta) and momentary consciousness, insisting on the immutable, eternal conscious Self (Atman/Brahman).',
    evidence: 'Shankara dedicates extensive sections of Brahmasūtrabhāṣya II.2 to refuting Buddhist Sarvastivada, Vijnanavada, and Madhyamaka.',
    confidence: 'documented',
    sources: [{ title: 'Śaṅkara', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/shankara/' }]
  },

  // --- ANCIENT TO MEDIEVAL SYNTHESES ---
  {
    id: 'rel-pla-aug',
    source: 'plato',
    target: 'augustine',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Augustine incorporated Platonic Forms and Plotinus’ Neoplatonic metaphysics into Christian theology, reading Forms as divine ideas in the mind of God.',
    evidence: 'Augustine explicitly recounts reading "books of the Platonists" in Confessions VII.9.',
    confidence: 'documented',
    sources: [{ title: 'Augustine', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/augustine/' }]
  },
  {
    id: 'rel-ari-avi',
    source: 'aristotle',
    target: 'avicenna',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Avicenna synthesized Aristotelian metaphysics, physics, and logic into Islamic philosophy (Falsafa), formulating the essence-existence distinction.',
    evidence: 'Avicenna’s Kitāb al-Shifāʾ is structured directly around the Aristotelian corpus.',
    confidence: 'documented',
    sources: [{ title: 'Ibn Sina', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/ibn-sina/' }]
  },
  {
    id: 'rel-avi-gha',
    source: 'avicenna',
    target: 'al-ghazali',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Al-Ghazali composed The Incoherence of the Philosophers to refute Avicenna\'s Hellenistic rationalism on eternity of the world and causality.',
    evidence: 'Tahāfut al-Falāsifa names Avicenna and Al-Farabi as the primary targets of critique.',
    confidence: 'documented',
    sources: [{ title: 'Al-Ghazali', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/al-ghazali/' }]
  },
  {
    id: 'rel-ari-aqu',
    source: 'aristotle',
    target: 'aquinas',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Thomas Aquinas created the monumental Scholastic Thomistic synthesis, reconciling Aristotle\'s philosophy with Catholic Christian dogma.',
    evidence: 'Aquinas refers respectfully to Aristotle throughout Summa Theologiae simply as "The Philosopher".',
    confidence: 'documented',
    sources: [{ title: 'Thomas Aquinas', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/aquinas/' }]
  },
  {
    id: 'rel-avi-aqu',
    source: 'avicenna',
    target: 'aquinas',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'INFLUENCED',
    description: 'Aquinas adopted Avicenna\'s distinction between essence and existence as the foundational axis of his metaphysical ontology.',
    evidence: 'Aquinas cites Avicenna extensively in De Ente et Essentia and Summa Theologiae.',
    confidence: 'documented',
    sources: [{ title: 'Thomas Aquinas', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/aquinas/' }]
  },
  {
    id: 'rel-mai-aqu',
    source: 'maimonides',
    target: 'aquinas',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'INFLUENCED',
    description: 'Aquinas studied Maimonides\' Guide for the Perplexed, adopting his arguments on the non-eternity of the world and negative theology.',
    evidence: 'Aquinas cites "Rabbi Moses" numerous times throughout Summa Theologiae.',
    confidence: 'documented',
    sources: [{ title: 'Maimonides', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/maimonides/' }]
  },

  // --- MEDIEVAL TO EARLY MODERN ---
  {
    id: 'rel-aug-des',
    source: 'augustine',
    target: 'descartes',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'PRECEDED',
    description: 'Augustine\'s "Si fallor, sum" (If I err, I am) anticipated Descartes’ "Cogito, ergo sum" as an indubitable defense against skepticism.',
    evidence: 'Antoine Arnauld noted the striking parallel to Descartes in the Fourth Objections to Meditations.',
    confidence: 'documented',
    sources: [{ title: 'Descartes', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/descartes/' }]
  },
  {
    id: 'rel-des-spi',
    source: 'descartes',
    target: 'spinoza',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Spinoza began by expounding Cartesian philosophy, but rejected Descartes’ mind-body substance dualism in favor of single-substance pantheism.',
    evidence: 'Spinoza’s Ethics opens with definitions directly reconfiguring Descartes’ definition of substance.',
    confidence: 'documented',
    sources: [{ title: 'Spinoza', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/spinoza/' }]
  },
  {
    id: 'rel-des-lei',
    source: 'descartes',
    target: 'leibniz',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Leibniz rejected Cartesian mechanistic physics (quantity of motion) and substance dualism, replacing them with dynamic Monads and conservation of vis viva.',
    confidence: 'documented',
    sources: [{ title: 'Leibniz', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/leibniz/' }]
  },
  {
    id: 'rel-des-loc',
    source: 'descartes',
    target: 'locke',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'REJECTED',
    description: 'Locke launched British Empiricism by explicitly attacking Descartes’ doctrine of innate ideas, proposing the mind as a blank tabula rasa.',
    evidence: 'Book I of Locke’s Essay Concerning Human Understanding is an explicit polemic against innate principles.',
    confidence: 'documented',
    sources: [{ title: 'Locke', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/locke/' }]
  },
  {
    id: 'rel-loc-ber',
    source: 'locke',
    target: 'berkeley',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Berkeley dismantled Locke\'s distinction between primary qualities (shape, size) and secondary qualities (color, taste), arguing both exist solely in the mind.',
    evidence: 'Berkeley’s Principles of Human Knowledge §9-15 explicitly refutes Locke’s material substratum.',
    confidence: 'documented',
    sources: [{ title: 'Berkeley', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/berkeley/' }]
  },
  {
    id: 'rel-loc-hum',
    source: 'locke',
    target: 'hume',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Hume pushed Locke’s empiricist premise to radical skeptical conclusions regarding causality, induction, and personal identity.',
    confidence: 'documented',
    sources: [{ title: 'Hume', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/hume/' }]
  },
  {
    id: 'rel-hum-kan',
    source: 'hume',
    target: 'kant',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'RESPONDED_TO',
    description: 'Hume\'s skeptical analysis of causation famously awoke Kant from his "dogmatic slumber," motivating the entire critical project of the Critique of Pure Reason.',
    evidence: 'Kant’s Prolegomena to Any Future Metaphysics (1783), Preface: "I openly confess my recollection of David Hume was the very thing which many years ago first interrupted my dogmatic slumber."',
    confidence: 'documented',
    sources: [{ title: 'Kant', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/kant/' }]
  },

  // --- 19TH CENTURY DIALECTICS ---
  {
    id: 'rel-kan-heg',
    source: 'kant',
    target: 'hegel',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Hegel took Kant’s transcendental deduction but abolished the unknowable Noumenon, dynamicizing the categories into historical dialectical Spirit.',
    evidence: 'Hegel analyzes Kantian philosophy in Faith and Knowledge and the Science of Logic.',
    confidence: 'documented',
    sources: [{ title: 'Hegel', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/hegel/' }]
  },
  {
    id: 'rel-kan-sch',
    source: 'kant',
    target: 'schopenhauer',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Schopenhauer considered Kant his greatest master, identifying Kant’s mysterious Noumenon (Thing-in-itself) directly with the metaphysical Will.',
    evidence: 'Schopenhauer appended a book-length critique of the Kantian philosophy to The World as Will and Representation.',
    confidence: 'documented',
    sources: [{ title: 'Schopenhauer', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/schopenhauer/' }]
  },
  {
    id: 'rel-heg-mar',
    source: 'hegel',
    target: 'marx',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Marx stood Hegel’s dialectic "on its feet": replacing idealist Spirit unfolding in thought with historical class struggles over material production.',
    evidence: 'Marx, Capital Vol. 1, Afterword to Second German Edition: "With him it is standing on its head. It must be turned right side up again."',
    confidence: 'documented',
    sources: [{ title: 'Marx', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/marx/' }]
  },
  {
    id: 'rel-heg-kie',
    source: 'hegel',
    target: 'kierkegaard',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'REJECTED',
    description: 'Kierkegaard mocked Hegel’s totalizing rational "System", arguing that objective abstract thought ignores the agonizing, existential choices of the living individual.',
    evidence: 'Concluding Unscientific Postscript is a sustained polemic against Hegelian systematic philosophy.',
    confidence: 'documented',
    sources: [{ title: 'Kierkegaard', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/kierkegaard/' }]
  },
  {
    id: 'rel-sch-nie',
    source: 'schopenhauer',
    target: 'nietzsche',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Nietzsche originally idolized Schopenhauer ("Schopenhauer as Educator"), but later repudiated his ascetic life-denial, transforming the Will to Live into the affirmative Will to Power.',
    evidence: 'Nietzsche details his break with Schopenhauer in Untimely Meditations and The Gay Science.',
    confidence: 'documented',
    sources: [{ title: 'Nietzsche', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/nietzsche/' }]
  },
  {
    id: 'rel-loc-mil',
    source: 'locke',
    target: 'mill',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Mill expanded Locke\'s classic liberal natural rights and empiricism into a robust defense of individual freedom in On Liberty and Utilitarianism.',
    confidence: 'documented',
    sources: [{ title: 'John Stuart Mill', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/mill/' }]
  },

  // --- 20TH CENTURY & CONTEMPORARY ---
  {
    id: 'rel-hus-hei',
    source: 'husserl',
    target: 'heidegger',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Heidegger was Husserl\'s assistant and successor at Freiburg, transforming Husserlian transcendental phenomenology of consciousness into existential hermeneutics of Dasein (Being).',
    evidence: 'Being and Time was originally dedicated to Edmund Husserl "in friendship and admiration".',
    confidence: 'documented',
    sources: [{ title: 'Martin Heidegger', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/heidegger/' }]
  },
  {
    id: 'rel-rus-wit',
    source: 'russell',
    target: 'wittgenstein',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Wittgenstein arrived at Cambridge to study under Russell, soon surpassing him and providing the logical foundation for Russell’s Logical Atomism.',
    evidence: 'Russell wrote the introduction to the first publication of Wittgenstein’s Tractatus Logico-Philosophicus.',
    confidence: 'documented',
    sources: [{ title: 'Wittgenstein', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/wittgenstein/' }]
  },
  {
    id: 'rel-hei-sar',
    source: 'heidegger',
    target: 'sartre',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Sartre studied Heidegger\'s Being and Time while in Berlin, adopting Dasein and thrownness to formulate his atheistic existentialism in Being and Nothingness.',
    evidence: 'Heidegger published the "Letter on Humanism" (1947) partly to clarify his ontological stance against Sartre\'s subjective existentialism.',
    confidence: 'documented',
    sources: [{ title: 'Sartre', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/sartre/' }]
  },
  {
    id: 'rel-sar-bea',
    source: 'sartre',
    target: 'beauvoir',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'ASSOCIATED_WITH',
    description: 'Lifelong intellectual partners who mutually developed existentialist philosophy, with Beauvoir grounding existential ethics in situated freedom and feminist theory.',
    evidence: 'Decades of personal correspondence and mutual manuscript reviews documented in Beauvoir’s memoirs.',
    confidence: 'documented',
    sources: [{ title: 'Simone de Beauvoir', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/beauvoir/' }]
  },
  {
    id: 'rel-hei-are',
    source: 'heidegger',
    target: 'arendt',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'RESPONDED_TO',
    description: 'Arendt studied under Heidegger, adapting phenomenological concepts of Being and Care into political action, plurality, and public space in The Human Condition.',
    confidence: 'documented',
    sources: [{ title: 'Hannah Arendt', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/arendt/' }]
  },
  {
    id: 'rel-nie-fou',
    source: 'nietzsche',
    target: 'foucault',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Foucault explicitly adopted Nietzsche’s genealogical method (On the Genealogy of Morals) to excavate how power produces modern forms of knowledge.',
    evidence: 'Foucault stated in "Nietzsche, Genealogy, History" (1971) that his historical works are directly indebted to Nietzsche.',
    confidence: 'documented',
    sources: [{ title: 'Michel Foucault', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/foucault/' }]
  },
  {
    id: 'rel-kan-raw',
    source: 'kant',
    target: 'rawls',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Rawls explicitly credited Kantian autonomy and the kingdom of ends as the philosophical foundation for his Original Position and Theory of Justice.',
    evidence: 'A Theory of Justice §40 is titled "The Kantian Interpretation of Justice as Fairness".',
    confidence: 'documented',
    sources: [{ title: 'John Rawls', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/rawls/' }]
  },
  {
    id: 'rel-hum-par',
    source: 'hume',
    target: 'parfit',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Parfit revitalized Hume\'s Bundle Theory of Self, using modern teletransporter thought experiments to argue personal identity is not what matters.',
    evidence: 'Reasons and Persons §87 cites Hume’s Treatise as the starting point for Reductionism about persons.',
    confidence: 'documented',
    sources: [{ title: 'Personal Identity', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/identity-personal/' }]
  },
  {
    id: 'rel-des-cha',
    source: 'descartes',
    target: 'chalmers',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'DEVELOPED',
    description: 'Chalmers revitalized the Cartesian intuition of the mind-body divide into modern property dualism via the Hard Problem of Consciousness and philosophical zombies.',
    evidence: 'The Conscious Mind (1996) cites Descartes’ Meditations on conceivability and dualism.',
    confidence: 'documented',
    sources: [{ title: 'Consciousness', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/consciousness/' }]
  },
  {
    id: 'rel-sar-cam',
    source: 'sartre',
    target: 'camus',
    sourceType: 'philosopher',
    targetType: 'philosopher',
    type: 'CRITICIZED',
    description: 'Initially close friends in Paris resistance circles; fractured famously over Camus’ The Rebel, with Camus rejecting Marxist revolutionary violence.',
    evidence: 'The public polemical exchange in Les Temps Modernes (1952) between Sartre, Francis Jeanson, and Camus.',
    confidence: 'documented',
    sources: [{ title: 'Albert Camus', publisher: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/camus/' }]
  }
];
