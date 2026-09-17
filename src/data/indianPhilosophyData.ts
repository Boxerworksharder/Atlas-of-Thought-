import { 
  IndianEpoch, 
  IndianSchool, 
  IndianPhilosopher, 
  PramanaInfo, 
  NyayaSyllogismData, 
  VedantaComparisonRow, 
  IndianProblem, 
  IndianConcept, 
  IndianDebate, 
  PrimaryTextTree, 
  ComparativePhilosophyCard 
} from '../types/indianPhilosophy';

// ==========================================
// 1. HISTORICAL LAYERS & EPOCHS
// ==========================================
export const INDIAN_EPOCHS: IndianEpoch[] = [
  {
    id: 'vedic-foundations',
    name: {
      english: 'Vedic & Early Upaniṣadic Formations',
      iast: 'Vaidika Tathā Upaniṣad-Kāla',
      devanagari: 'वैदिक तथा उपनिषद् काल'
    },
    timeRange: 'c. 1500 – 600 BCE',
    startYear: -1500,
    endYear: -600,
    dateUncertaintyNote: 'Dates for early Vedic hymns and early prose Upaniṣads are approximate and contested by modern philology; relative chronology between Saṃhitās, Brāhmaṇas, and early Upaniṣads is linguistically established.',
    overview: 'Inquiry progresses from cosmic ritual orders (Ṛta/Dharma) and cosmogonic hymns (Nāsadīya Sūkta) to intense interiorized metaphysical dialogues in the early Upaniṣads (Bṛhadāraṇyaka, Chāndogya), establishing the foundational dialectic of Brahman (ultimate ground) and Ātman (the true inner self).',
    keyEvents: [
      'Composition of Rigvedic cosmogonic hymns questioning absolute origins (c. 1500–1200 BCE)',
      'Brāhmaṇa ritual taxonomies and philosophical contemplation in Āraṇyakas (c. 1000–800 BCE)',
      'Yājñavalkya debates in King Janaka\'s court on the unknowable witness (neti, neti) (c. 750–600 BCE)',
      'Early formulation of karma, saṃsāra, and mokṣa in the early Upaniṣads'
    ],
    keyTraditionsActive: ['Early Vedic Priestly Circles', 'Early Upaniṣadic Dialecticians'],
    representativeThinkerIds: ['yajnavalkya']
  },
  {
    id: 'sramana-revolution',
    name: {
      english: 'The Śramaṇa Counter-Tradition & Heterodox Emergence',
      iast: 'Śramaṇa Tathā Nāstika Kāla',
      devanagari: 'श्रमण तथा नास्तिक काल'
    },
    timeRange: 'c. 6th – 3rd Century BCE',
    startYear: -600,
    endYear: -200,
    dateUncertaintyNote: 'Historical synchronization around the life dates of the Buddha and Mahāvīra (5th century BCE) anchored by Greek synchronisms with the Mauryan empire.',
    overview: 'Rejection of hereditary Brahmanical Vedic authority and animal sacrifice. Wandering ascetics (Śramaṇas) propose radical re-examinations of causality, ethics, and liberation: the Buddha formulates Dependent Origination (Pratītyasamutpāda) and No-Self (Anātman); Mahāvīra articulates Many-Sided Reality (Anekāntavāda) and radical Non-Violence (Ahiṃsā); while Cārvāka materialists reject life after death.',
    keyEvents: [
      'Gautama Buddha attains awakening and articulates the Four Noble Truths and Dependent Origination (c. 5th BCE)',
      'Mahāvīra systematizes Jain philosophy of eternal souls (Jīva) and manifold perspectives (Anekāntavāda)',
      'Ajita Kesakambalī and Cārvāka thinkers formulate radical empirical materialism (Lokāyata)',
      'Makkhali Gosāla articulates fatalistic determinism (Niyativāda) in the Ājīvika order'
    ],
    keyTraditionsActive: ['Early Buddhism', 'Jainism', 'Cārvāka/Lokāyata', 'Ājīvika'],
    representativeThinkerIds: ['siddhartha-gautama', 'mahavira', 'brihaspati-carvaka']
  },
  {
    id: 'classical-sutra',
    name: {
      english: 'Classical Sūtra Period (Codification of Systems)',
      iast: 'Darśana Sūtra Praṇayana Kāla',
      devanagari: 'दर्शन सूत्र प्रणयन काल'
    },
    timeRange: 'c. 2nd Century BCE – 4th Century CE',
    startYear: -200,
    endYear: 400,
    dateUncertaintyNote: 'Sūtra texts preserve oral aphoristic layers accumulated across centuries before reaching canonical recension.',
    overview: 'Codification of foundational aphoristic texts (Sūtras) for the six classical Brahmanical systems (Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta) and earliest Buddhist Abhidharma systems. Epistemology (Pramāṇa-śāstra) becomes the supreme battlefield of philosophy.',
    keyEvents: [
      'Gautama compiles the Nyāya Sūtra: foundational codification of Indian logic and debate (c. 2nd C. CE)',
      'Kaṇāda articulates the Vaiśeṣika Sūtra: rigorous atomic pluralism and categories of being (c. 2nd C. BCE)',
      'Patañjali codifies the Yoga Sūtra: mental concentration and cessation of fluctuations (c. 2nd C. CE)',
      'Jaimini composes the Mīmāṃsā Sūtra: eternal authorless linguistics and ritual epistemology',
      'Bādarāyaṇa synthesizes the Upaniṣads in the Brahma Sūtra'
    ],
    keyTraditionsActive: ['Nyāya', 'Vaiśeṣika', 'Sāṃkhya', 'Yoga', 'Pūrva Mīmāṃsā', 'Early Vedānta', 'Abhidharma'],
    representativeThinkerIds: ['gautama-aksapada', 'kanada', 'patanjali', 'jaimini', 'badarayana']
  },
  {
    id: 'golden-commentarial',
    name: {
      english: 'Golden Age of Commentaries & Inter-School Polemics',
      iast: 'Mahā-Bhāṣya Tathā Vāda Kāla',
      devanagari: 'महाभाष्य तथा वाद काल'
    },
    timeRange: 'c. 4th – 9th Century CE',
    startYear: 400,
    endYear: 900,
    dateUncertaintyNote: 'Dating is comparatively well established through Buddhist translations into Chinese/Tibetan and royal land-grant inscriptions.',
    overview: 'The peak era of philosophical polemics. Nāgārjuna establishes Madhyamaka emptiness; Vasubandhu and Dignāga revolutionize logic and consciousness studies; Dharmakīrti establishes critical Buddhist epistemology; Kumārila Bhaṭṭa and Prabhākara vigorously defend Vedic realism; and Śaṅkarācārya consolidates non-dual Advaita Vedānta.',
    keyEvents: [
      'Nāgārjuna refutes inherent existence (svabhāva) in the Mūlamadhyamakakārikā',
      'Dignāga founds Indian formal epistemology and apoha nominalism (c. 500 CE)',
      'Dharmakīrti composes the Pramāṇavārttika: foundational defense of Buddhist logic (c. 600 CE)',
      'Kumārila Bhaṭṭa revitalizes Mīmāṃsā realism and intrinsic validity against Buddhist skepticism',
      'Śaṅkara composes his monumentally influential Brahma Sūtra Bhāṣya establishing Advaita'
    ],
    keyTraditionsActive: ['Madhyamaka', 'Yogācāra', 'Buddhist Epistemology', 'Advaita Vedānta', 'Bhāṭṭa Mīmāṃsā', 'Nyāya Realism'],
    representativeThinkerIds: ['nagarjuna', 'vasubandhu', 'dignaga', 'dharmakirti', 'kumarila-bhatta', 'shankara']
  },
  {
    id: 'medieval-dialectics',
    name: {
      english: 'Medieval Dialectical Renaissance & Theistic Vedānta',
      iast: 'Madhyakālīna Vedānta Tathā Navya-Nyāya Kāla',
      devanagari: 'मध्यकालीन वेदान्त तथा नव्य-न्याय काल'
    },
    timeRange: 'c. 10th – 17th Century CE',
    startYear: 900,
    endYear: 1700,
    dateUncertaintyNote: 'Documented with high historical precision in surviving temple inscriptions, royal genealogies, and vast manuscript colophons.',
    overview: 'Vedānta splits into fierce multi-sided dialectical systems: Rāmānuja creates Qualified Non-Dualism (Viśiṣṭādvaita); Madhvācārya establishes Radical Dualism (Dvaita); Nimbārka and Vallabha propose Bhedābheda and Śuddhādvaita. Simultaneously, Gaṅgeśa Upādhyāya invents Navya-Nyāya (New Logic), creating an unprecedented formal conceptual language used across all Indian sciences. In Kashmir, Abhinavagupta synthesizes the dynamic non-dual Tantric philosophy of Pratyabhijñā.',
    keyEvents: [
      'Abhinavagupta synthesizes Kashmir Śaivism / Trika in the Tantrāloka (c. 1000 CE)',
      'Rāmānuja composes the Śrī Bhāṣya, refuting Śaṅkara\'s doctrine of illusory world (c. 1100 CE)',
      'Madhva establishes Dvaita realism and eternal difference (Bheda) (c. 1250 CE)',
      'Gaṅgeśa writes the Tattvacintāmaṇi, inaugurating Navya-Nyāya technical logic (c. 1325 CE)',
      'Vyāsatīrtha composes the Nyāyāmṛta, initiating the supreme intellectual duel with Advaitins'
    ],
    keyTraditionsActive: ['Viśiṣṭādvaita', 'Dvaita', 'Navya-Nyāya', 'Kashmir Śaivism', 'Śuddhādvaita', 'Acintya-Bhedābheda', 'Jain Scholasticism'],
    representativeThinkerIds: ['abhinavagupta', 'ramanuja', 'madhva', 'gangesa', 'jayatirtha']
  },
  {
    id: 'modern-reinterpretation',
    name: {
      english: 'Modern Reinterpretations, Social Critiques & Global Dialogues',
      iast: 'Ādhunika Punarvyākhyāna Tathā Samālocanā Kāla',
      devanagari: 'आधुनिक पुनर्व्याख्यान तथा समालोचना काल'
    },
    timeRange: 'c. 18th – 21st Century CE',
    startYear: 1750,
    endYear: 2026,
    dateUncertaintyNote: 'Modern historical era fully documented in academic archives, published books, and university records.',
    overview: 'Confrontation with Western colonial hegemony, scientific modernity, and egalitarian social movements. Indian thinkers reinterpret classical systems: Rammohun Roy and Vivekananda present universalist neo-Vedānta; Sri Aurobindo formulates evolutionary Integral Advaita; B.R. Ambedkar constructs a radical anti-caste Buddhist social philosophy (Navayāna); and academic philosophers (B.K. Matilal, J.N. Mohanty) bridge Indian logic with Anglo-American analytic epistemology.',
    keyEvents: [
      'Raja Rammohun Roy initiates modern Upaniṣadic rationalism and social reform (1815–1830)',
      'Swami Vivekananda presents Vedānta as a pluralistic world philosophy in Chicago (1893)',
      'Sri Aurobindo develops evolutionary spiritual metaphysics in The Life Divine (1914–1919)',
      'B.R. Ambedkar publishes The Buddha and His Dhamma, reconstructing Buddhism as moral emancipation (1956)',
      'B.K. Matilal and J.N. Mohanty establish Indian epistemology within international analytic philosophy (1970–2000s)'
    ],
    keyTraditionsActive: ['Neo-Vedānta', 'Navayāna Buddhism', 'Comparative Analytic Epistemology', 'Gandhian Ethics', 'Integral Yoga'],
    representativeThinkerIds: ['vivekananda', 'aurobindo', 'ambedkar', 'gandhi', 'radhakrishnan', 'matilal']
  }
];

// ==========================================
// 2. THE SIX PRAMĀṆAS (MEANS OF VALID KNOWLEDGE)
// ==========================================
export const INDIAN_PRAMANAS: PramanaInfo[] = [
  {
    id: 'pratyaksa',
    name: { english: 'Perception', iast: 'Pratyakṣa', devanagari: 'प्रत्यक्ष' },
    definition: 'Direct non-erroneous cognition produced by sense-organ contact with an object (or direct reflexive awareness in internal perception).',
    scholarlyDescription: 'Universally accepted by ALL Indian philosophical schools without exception (including Cārvāka). Nyāya divides it into indeterminate (nirvikalpaka) and determinate (savikalpaka); Buddhists define it strictly as free from conceptual construction (kalpanāpodham) and non-erroneous (abhrāntam).',
    example: 'Seeing a clay pot resting on the floor directly via ocular sensory contact.',
    acceptedBySchools: ['carvaka', 'early-buddhism', 'madhyamaka', 'yogacara', 'buddhist-epistemology', 'vaisesika', 'jainism', 'samkhya', 'yoga', 'nyaya', 'purva-mimamsa', 'advaita-vedanta', 'visistadvaita', 'dvaita', 'kashmir-saivism'],
    rejectedBySchools: []
  },
  {
    id: 'anumana',
    name: { english: 'Inference', iast: 'Anumāna', devanagari: 'अनुमान' },
    definition: 'Knowledge of an unperceived object (sādhya) derived from a perceived mark (hetu/liṅga) based on prior knowledge of their universal invariant concomitance (vyāpti).',
    scholarlyDescription: 'Accepted by 15 of 16 schools (rejected only by radical Cārvākas, who argue vyāpti can never be universally verified across all past, present, and future cases). Nyāya constructs a 5-step inductive-deductive syllogism; Buddhists (Dignāga) streamline it to a 3-step proof based on the triple character of the reason (trairūpya).',
    example: 'Inferring fire on a mountain upon observing smoke, grounded in the invariant relation: "Wherever there is smoke, there is fire."',
    acceptedBySchools: ['early-buddhism', 'madhyamaka', 'yogacara', 'buddhist-epistemology', 'vaisesika', 'jainism', 'samkhya', 'yoga', 'nyaya', 'purva-mimamsa', 'advaita-vedanta', 'visistadvaita', 'dvaita', 'kashmir-saivism'],
    rejectedBySchools: ['carvaka']
  },
  {
    id: 'upamana',
    name: { english: 'Comparison & Analogy', iast: 'Upamāna', devanagari: 'उपमान' },
    definition: 'Cognition of the relation between a name and the object denoted by it, arrived at through knowledge of resemblance with a familiar entity.',
    scholarlyDescription: 'Distinctive pramāṇa championed by Nyāya and Mīmāṃsā. Vaiśeṣika and Buddhist epistemology reduce it to inference or perception; Sāṃkhya reduces it to testimony.',
    example: 'Learning that a wild forest ox (gavaya) looks like a domestic cow; upon encountering a gavaya in the wild, recognizing it as such.',
    acceptedBySchools: ['nyaya', 'purva-mimamsa', 'advaita-vedanta', 'visistadvaita', 'dvaita'],
    rejectedBySchools: ['carvaka', 'buddhist-epistemology', 'vaisesika', 'samkhya', 'yoga', 'jainism']
  },
  {
    id: 'sabda',
    name: { english: 'Verbal Testimony (Aptavacana / Scripture)', iast: 'Śabda', devanagari: 'शब्द' },
    definition: 'Valid assertion of a trustworthy authority (āpta) possessing direct knowledge and benevolence, or the authorless revelation of the Veda (apauruṣeya).',
    scholarlyDescription: 'The defining watershed of orthodox Brahmanical philosophy (Āstika). Mīmāṃsā and Vedānta hold the Veda is authorless and intrinsically valid; Nyāya accepts testimony as valid because it was revealed by an omniscient, benevolent God (Īśvara). Buddhists, Jains, and Cārvākas reject Vedic infallibility, though Jains and Buddhists accept the testimony of omniscient enlightened teachers (Tīrthaṅkaras, Buddhas).',
    example: 'Accepting the existence of distant geography or subatomic particles based on the testimony of reliable certified experts.',
    acceptedBySchools: ['samkhya', 'yoga', 'nyaya', 'purva-mimamsa', 'advaita-vedanta', 'visistadvaita', 'dvaita', 'kashmir-saivism'],
    rejectedBySchools: ['carvaka', 'vaisesika', 'buddhist-epistemology']
  },
  {
    id: 'arthapatti',
    name: { english: 'Postulation & Presumption', iast: 'Arthāpatti', devanagari: 'अर्थापत्ति' },
    definition: 'Supposition of an unperceived explanatory fact to reconcile two apparently contradictory known truths.',
    scholarlyDescription: 'Accepted as an independent epistemic instrument by Mīmāṃsā (Kumārila and Prabhākara) and Advaita Vedānta. Nyāya insists it is merely a negative inference (vyatirekī anumāna).',
    example: 'Devadatta is fat, yet he never eats during the day; therefore, he must eat at night.',
    acceptedBySchools: ['purva-mimamsa', 'advaita-vedanta'],
    rejectedBySchools: ['carvaka', 'early-buddhism', 'buddhist-epistemology', 'vaisesika', 'samkhya', 'yoga', 'nyaya', 'jainism', 'visistadvaita', 'dvaita']
  },
  {
    id: 'anupalabdhi',
    name: { english: 'Non-Apprehension (Negative Proof)', iast: 'Anupalabdhi', devanagari: 'अनुपलब्धि' },
    definition: 'The non-cognition of an object that would be perceived if it were present, serving as the sole immediate source for knowing an absence (abhāva).',
    scholarlyDescription: 'Exclusive to Bhāṭṭa Mīmāṃsā and Advaita Vedānta. Nyāya rejects anupalabdhi as a separate pramāṇa, arguing that absence is perceived directly by the sense organs via a special relation called "qualification-qualified" (viśeṣaṇa-viśeṣya-bhāva).',
    example: 'Not perceiving a clay pot on an empty table where it should be seen, thereby immediately knowing the non-existence of the pot on the table.',
    acceptedBySchools: ['purva-mimamsa', 'advaita-vedanta'],
    rejectedBySchools: ['carvaka', 'buddhist-epistemology', 'vaisesika', 'samkhya', 'yoga', 'nyaya', 'jainism', 'visistadvaita', 'dvaita']
  }
];

// ==========================================
// 3. THE NYĀYA FIVE-MEMBER SYLLOGISM
// ==========================================
export const NYAYA_SYLLOGISM: NyayaSyllogismData = {
  title: 'The Nyāya Five-Member Syllogism (Pañcāvayava)',
  sanskritTerm: { english: 'Five-Limb Inference Model', iast: 'Pañcāvayava Vākya', devanagari: 'पञ्चावयव वाक्य' },
  description: 'Unlike the Aristotelian formal syllogism which is purely deductive and synthetic, the Nyāya pañcāvayava is simultaneously inductive, deductive, epistemic, and dialectical. It models how a speaker proves a proposition to a rational interlocutor in debate (parārthānumāna).',
  members: [
    {
      stepNumber: 1,
      sanskritName: { english: 'Thesis Statement', iast: 'Pratijñā', devanagari: 'प्रतिज्ञा' },
      technicalRole: 'Statement of the subject (pakṣa) possessing the unproved property (sādhya).',
      standardExample: 'The hill possesses fire (Parvato vahnimān).',
      philosophicalSignificance: 'Establishes the scope and target of inquiry for both debaters.'
    },
    {
      stepNumber: 2,
      sanskritName: { english: 'The Ground / Reason', iast: 'Hetu', devanagari: 'हेतु' },
      technicalRole: 'Indicates the observable sign (liṅga) present on the subject that acts as the causal proof.',
      standardExample: 'Because it has smoke (Dhūmavattvāt).',
      philosophicalSignificance: 'Must be verified as actually existing on the subject (pakṣadharmatā).'
    },
    {
      stepNumber: 3,
      sanskritName: { english: 'Universal Proposition with Exemplification', iast: 'Udāharaṇa', devanagari: 'उदाहरण' },
      technicalRole: 'Universal concomitance (vyāpti) grounded in an empirically verified concrete inductive instance (dṛṣṭānta).',
      standardExample: 'Wherever there is smoke, there is fire, as in a kitchen hearth (Yatra yatra dhūmas tatra tatra vahniḥ, yathā mahānasaḥ).',
      philosophicalSignificance: 'Bridges pure logic with empirical reality; an inference without an empirical instance is rejected as sterile.'
    },
    {
      stepNumber: 4,
      sanskritName: { english: 'Application', iast: 'Upanaya', devanagari: 'उपनय' },
      technicalRole: 'Affirmation that the universal relation holds specifically in the case under scrutiny.',
      standardExample: 'And this hill is possessed of smoke that is invariably accompanied by fire (Tathā cāyam).',
      philosophicalSignificance: 'Synthesizes the universal law with the particular observation.'
    },
    {
      stepNumber: 5,
      sanskritName: { english: 'Conclusion', iast: 'Nigamana', devanagari: 'निगमन' },
      technicalRole: 'Re-statement of the thesis as now formally established and free from epistemic defect.',
      standardExample: 'Therefore, this hill is possessed of fire (Tasmāt tathā).',
      philosophicalSignificance: 'Locks the truth into the knowledge ledger of the debate.'
    }
  ],
  vyaptiExplanation: {
    definition: 'Invariable, unconditional, natural relation of concomitance between the probans (hetu) and probandum (sādhya), free from adventitious limiting conditions (upādhi).',
    example: 'Smoke is accompanied by fire; but fire is NOT invariably accompanied by smoke (a glowing red iron ball has fire but no smoke). Fire requires wet fuel (ardrendhana) as an upādhi to generate smoke.',
    fallacyRisk: 'If a conditional factor is overlooked, the inference collapses.'
  },
  fallacies: [
    {
      name: { english: 'Unproven Reason', iast: 'Asiddha', devanagari: 'असिद्ध' },
      description: 'The probans does not actually exist in the subject.',
      example: '"The sky-lotus is fragrant because it is a lotus" (A sky-lotus does not exist).'
    },
    {
      name: { english: 'Irregular / Inconclusive', iast: 'Savyabhicāra', devanagari: 'सव्यभिचार' },
      description: 'The reason occurs where the probandum is absent.',
      example: '"Sound is eternal because it is knowable" (Pots are knowable but non-eternal).'
    },
    {
      name: { english: 'Contradictory', iast: 'Viruddha', devanagari: 'विरुद्ध' },
      description: 'The reason proves the exact opposite of what was claimed.',
      example: '"Sound is eternal because it is produced" (Being produced proves non-eternality).'
    },
    {
      name: { english: 'Sublated by Stronger Pramāṇa', iast: 'Bādhita', devanagari: 'बाधित' },
      description: 'The thesis is directly contradicted by sensory perception.',
      example: '"Fire is cold because it is a substance" (Perception directly confirms fire is hot).'
    }
  ]
};

// ==========================================
// 4. PHILOSOPHICAL SCHOOLS (DARŚANAS)
// ==========================================
export const INDIAN_SCHOOLS: IndianSchool[] = [
  // --- ĀSTIKA TRADITIONS ---
  {
    id: 'nyaya',
    name: { english: 'Nyāya (Logic & Realism)', iast: 'Nyāya', devanagari: 'न्याय' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 2nd C. BCE – 17th C. CE',
    dateRange: 'Ancient to Medieval (Classical to Navya)',
    isAstika: true,
    astikaExplanation: 'Accepts the Vedas as authoritative testimony (Śabda-pramāṇa) because they were uttered by an omniscient, benevolent God (Īśvara), not because they are inherently authorless.',
    foundationalThinker: { english: 'Akṣapāda Gautama', iast: 'Akṣapāda Gautama', devanagari: 'अक्षपाद गौतम' },
    primaryFoundationalText: { english: 'Nyāya Sūtra', iast: 'Nyāya Sūtra', devanagari: 'न्याय सूत्र' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'upamana', 'sabda'],
    coreMetaphysics: 'Direct epistemic realism: physical objects exist independently of consciousness; universals (jāti) are real and eternal; the soul (ātman) is an enduring substance that acquires consciousness as an accidental quality through relation with the mind and body.',
    coreEpistemology: 'Rigorous foundationalism through 4 pramāṇas; knowledge is true if it corresponds to reality (yathārtha) and produces successful pragmatic activity (pravṛtti-sāmarthya).',
    coreEthics: 'Liberation requires the complete eradication of false cognition (mithyā-jñāna), which dispels attachment and aversion, thereby stopping the cycle of karma.',
    liberationTheory: {
      term: { english: 'Supreme Good / Release', iast: 'Apavarga / Niḥśreyasa', devanagari: 'अपवर्ग / निःश्रेयस' },
      description: 'Complete and eternal cessation of all sixteen varieties of pain, suffering, and consciousness.',
      natureOfLiberation: 'The liberated Ātman remains an unconscious, peaceful, disembodied spiritual substance free from all suffering, pleasure, and cognition.',
      means: ['Tattva-jñāna (knowledge of the 16 dialectical categories)', 'Yogic meditation', 'Correct inference']
    },
    keyDoctrines: [
      {
        name: { english: 'Direct Realism', iast: 'Bāhyārtha-pratyakṣavāda', devanagari: 'बाह्यार्थप्रत्यक्षवाद' },
        description: 'Physical objects are perceived directly, not through intermediate mental representations.',
        opposes: 'Buddhist subjective idealism (Yogācāra) and representationalism (Sautrāntika).'
      },
      {
        name: { english: 'Asatkāryavāda (New Effect Causation)', iast: 'Asatkāryavāda', devanagari: 'असत्कार्यवाद' },
        description: 'An effect is a genuinely new entity that did not exist in its material cause prior to production.',
        opposes: 'Sāṃkhya Satkāryavāda and Advaita Vivartavāda.'
      }
    ],
    quickSummary: 'The foundational school of Indian logic, epistemology, and direct realism, arguing that the world exists independently of mind and can be rationally understood through 4 verified instruments of knowledge.',
    understandOverview: 'Nyāya establishes the rules of Indian intellectual debate (Vāda). It rejects the Buddhist assertion that the world is mind-only or momentary, demonstrating that an enduring self, external objects, and real universals are necessary to make memory, recognition, and language possible.',
    scholarDetails: {
      textualTradition: 'Classical Nyāya begins with Gautama\'s Sūtra, expounded by Vātsyāyana, Uddyotakara, and Jayanta Bhaṭṭa. Around 1325 CE, Gaṅgeśa Upādhyāya wrote the Tattvacintāmaṇi, founding Navya-Nyāya (New Logic), which developed a hyper-precise technical metalanguage for defining relations without formal symbols.',
      commentarialChain: ['Nyāya Sūtra (Gautama)', 'Nyāyabhāṣya (Vātsyāyana)', 'Nyāyavārttika (Uddyotakara)', 'Tātparyaṭīkā (Vācaspati Miśra)', 'Nyāyamañjarī (Jayanta Bhaṭṭa)', 'Tattvacintāmaṇi (Gaṅgeśa)'],
      scholarlyControversies: ['Is consciousness an essential property of the self or purely accidental?', 'Proof of Īśvara (Cosmological argument from design and composition)'],
      sepCitations: [{ title: 'Nyāya (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/early-modern-india/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Analytic Epistemology & Direct Realism',
      historicalQualification: 'While Nyāya shares an emphasis on logic, reference, and external realism with modern analytic philosophy (Russell, Frege), its ultimate goal was not mere formal semantic analysis, but spiritual liberation (Apavarga) through the destruction of epistemic error.'
    },
    representativeThinkerIds: ['gautama-aksapada', 'vatsyayana', 'uddyotakara', 'jayanta-bhatta', 'gangesa'],
    relatedDebates: ['debate-nyaya-buddhist-self']
  },
  {
    id: 'samkhya',
    name: { english: 'Sāṃkhya (Radical Dualism & Evolution)', iast: 'Sāṃkhya', devanagari: 'सांख्य' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 6th C. BCE – 15th C. CE',
    dateRange: 'Early Classical to Late Medieval',
    isAstika: true,
    astikaExplanation: 'Recognized as an Āstika darśana because it accepts the authority of the Upaniṣads as testimony, even though classical Sāṃkhya is famously non-theistic (Nirīśvara), rejecting a creator God.',
    foundationalThinker: { english: 'Kapila / Īśvarakṛṣṇa', iast: 'Kapila / Īśvarakṛṣṇa', devanagari: 'कपिल / ईश्वरकृष्ण' },
    primaryFoundationalText: { english: 'Sāṃkhyakārikā', iast: 'Sāṃkhyakārikā', devanagari: 'सांख्यकारिका' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Rigid metaphysical dualism between two uncreated, eternal realities: Puruṣa (pure witnessing consciousness, infinitely plural) and Prakṛti (dynamic unconscious primordial nature composed of 3 guṇas: Sattva, Rajas, Tamas).',
    coreEpistemology: '3 pramāṇas: perception, inference, testimony. Intellectual discernment (viveka) of the difference between conscious Puruṣa and unconscious mind (Buddhi) is the key to knowledge.',
    coreEthics: 'Suffering occurs when pure consciousness falsely identifies with the psychological apparatus (buddhi, ahaṃkāra) of evolving matter.',
    liberationTheory: {
      term: { english: 'Isolation / Absolute Autonomy', iast: 'Kaivalya', devanagari: 'कैवल्य' },
      description: 'Puruṣa completely disidentifies from Prakṛti; Prakṛti ceases all manifestation for that liberated consciousness like a dancer withdrawing from the stage.',
      natureOfLiberation: 'Pure, contentless, eternal witnessing consciousness resting in itself, free from all material embodiment.',
      means: ['Viveka-khyāti (discriminative discernment between Puruṣa and Prakṛti)']
    },
    keyDoctrines: [
      {
        name: { english: 'Satkāryavāda (Pre-existence of Effect)', iast: 'Satkāryavāda', devanagari: 'सत्कार्यवाद' },
        description: 'An effect pre-exists potentially in its material cause before its actualization (curd pre-exists in milk).',
        opposes: 'Nyāya Asatkāryavāda and Buddhist Momentariness.'
      },
      {
        name: { english: 'Guṇa Evolution', iast: 'Guṇa-pariṇāma', devanagari: 'गुणपरिणाम' },
        description: 'All psychological and physical reality emerges from the unbalancing of the 3 guṇas (lucidity, passion, inertia).',
        opposes: 'Atomic assembly (Vaiśeṣika) and illusory appearance (Advaita).'
      }
    ],
    quickSummary: 'India\'s classical dualism: dividing all existence into conscious unmoving witness-selves (Puruṣa) and evolving psychological and material nature (Prakṛti).',
    understandOverview: 'Crucially, in Sāṃkhya, the mind, ego, and intellect (buddhi, ahaṃkāra, manas) are NOT spiritual; they are subtle material modifications of Prakṛti. Puruṣa is pure luminosity that illuminates mental operations without acting or changing.',
    scholarDetails: {
      textualTradition: 'Traced to the sage Kapila, crystallized in Īśvarakṛṣṇa\'s 72 verses (Sāṃkhyakārikā, c. 350 CE), with commentaries by Gauḍapāda and Vācaspati Miśra.',
      commentarialChain: ['Sāṃkhyakārikā (Īśvarakṛṣṇa)', 'Sāṃkhyatattvakaumudī (Vācaspati Miśra)', 'Sāṃkhyapravacanabhāṣya (Vijñānabhikṣu)'],
      scholarlyControversies: ['Is Sāṃkhya intrinsically atheistic or open to a cosmic coordinator?', 'How can unconscious Prakṛti act for the sake of the conscious Puruṣa (Lame and Blind Man analogy)?'],
      sepCitations: [{ title: 'Sāṃkhya (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/early-modern-india/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Cartesian Dualism',
      historicalQualification: 'Unlike Descartes, who placed thought and intellect (res cogitans) on the soul\'s side, Sāṃkhya classifies intellect (buddhi), ego, and memory as unconscious matter (Prakṛti). Only pure contentless awareness is Puruṣa.'
    },
    representativeThinkerIds: ['isvarakrsna', 'vacaspati-misra'],
    relatedDebates: ['debate-samkhya-vedanta-causation']
  },
  {
    id: 'yoga',
    name: { english: 'Yoga (Psychological Isolation & Disidentification)', iast: 'Yoga', devanagari: 'योग' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 2nd C. BCE – 5th C. CE',
    dateRange: 'Classical Period',
    isAstika: true,
    astikaExplanation: 'Accepts Vedic revelation while incorporating an Ishvara (a special unentangled Purusha) to assist spiritual contemplation.',
    foundationalThinker: { english: 'Patañjali', iast: 'Patañjali', devanagari: 'पतञ्जलि' },
    primaryFoundationalText: { english: 'Yoga Sūtra', iast: 'Yoga Sūtra', devanagari: 'योग सूत्र' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Shares Sāṃkhya\'s dualism of Puruṣa and Prakṛti, but adds Īśvara (a unique Puruṣa never touched by affliction or karma) as an archetype and object of meditation.',
    coreEpistemology: '3 pramāṇas; direct meditative insight (prajñā) arising from deep absorptive states (samādhi).',
    coreEthics: 'Aṣṭāṅga (Eight Limbs): Ethical disciplines (Yama: non-violence, truthfulness, non-stealing, continence, non-greed) and Observances (Niyama: purity, contentment, austerity, study, dedication).',
    liberationTheory: {
      term: { english: 'Isolation / Cessation', iast: 'Kaivalya', devanagari: 'कैवल्य' },
      description: 'The complete cessation of all fluctuations of the mind-field (citta-vṛtti-nirodha), leading Puruṣa to abide in its own pristine essence.',
      natureOfLiberation: 'Unshakable autonomy of pure consciousness detached from mental projections.',
      means: ['Abhyāsa (diligent practice) and Vairāgya (dispassion)', 'Aṣṭāṅga Yoga', 'Īśvara-praṇidhāna (devotion to Īśvara)']
    },
    keyDoctrines: [
      {
        name: { english: 'Cessation of Mental Fluctuations', iast: 'Citta-vṛtti-nirodha', devanagari: 'चित्तवृत्तिनिरोध' },
        description: 'Yoga is defined as the intentional halting of mental-emotional modifications.',
        opposes: 'Unchecked identification with psychological states.'
      },
      {
        name: { english: 'The Five Afflictions', iast: 'Pañca-kleśa', devanagari: 'पञ्चक्लेश' },
        description: 'Ignorance (avidyā), egoism (asmitā), attachment (rāga), aversion (dveṣa), and clinging to life (abhiniveśa) drive all human suffering.',
        opposes: 'Superficial moralism.'
      }
    ],
    quickSummary: 'The systematic philosophical technology of mental disciplining, meditation, and psychological disidentification aimed at isolating pure consciousness from emotional turmoil.',
    understandOverview: 'Yoga is frequently misunderstood as physical postures; in classical philosophy, āsana is only step 3 of 8. The core of Patañjali\'s work is an epistemological and phenomenological map of meditative absorption (Samprajñāta and Asamprajñāta Samādhi).',
    scholarDetails: {
      textualTradition: 'Patañjali\'s Yoga Sūtra (c. 400 CE) accompanied canonically by the Vyāsa Bhāṣya and Vācaspati Miśra\'s Tattvavaiśāradī.',
      commentarialChain: ['Yoga Sūtra (Patañjali)', 'Yoga Bhāṣya (Vyāsa)', 'Tattvavaiśāradī (Vācaspati Miśra)', 'Yogavārttika (Vijñānabhikṣu)'],
      scholarlyControversies: ['Is Patañjali the same person as the grammarian Patañjali?', 'The exact philosophical role of Īśvara: indispensable deity or optional concentration device?'],
      sepCitations: [{ title: 'Yoga (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/early-modern-india/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Mindfulness & Cognitive Behavioral Therapy',
      historicalQualification: 'While Yoga shares mindfulness techniques with modern psychology, its goal was not wellness or stress-reduction in the world, but radical ontological separation (Kaivalya) from all cosmic nature.'
    },
    representativeThinkerIds: ['patanjali'],
    relatedDebates: ['debate-samkhya-vedanta-causation']
  },
  {
    id: 'purva-mimamsa',
    name: { english: 'Pūrva Mīmāṃsā (Hermeneutics & Realism)', iast: 'Pūrva Mīmāṃsā', devanagari: 'पूर्व मीमांसा' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 3rd C. BCE – 12th C. CE',
    dateRange: 'Classical to Medieval',
    isAstika: true,
    astikaExplanation: 'The absolute paradigm of Āstika orthodoxy: asserts that the Vedas are not created by anyone (neither man nor God) and are eternal, unalterable sources of duty (Dharma).',
    foundationalThinker: { english: 'Jaimini / Kumārila Bhaṭṭa', iast: 'Jaimini / Kumārila Bhaṭṭa', devanagari: 'जैमिनी / कुमारिल भट्ट' },
    primaryFoundationalText: { english: 'Mīmāṃsā Sūtra', iast: 'Mīmāṃsā Sūtra', devanagari: 'मीमांसा सूत्र' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'upamana', 'sabda', 'arthapatti', 'anupalabdhi'],
    coreMetaphysics: 'Robust common-sense realism: the physical universe is real, plural, and beginningless (na kadācid anīdṛśaṃ jagat - "the world was never otherwise than it is now"). Rejects a cosmic creator or periodic cosmic dissolution.',
    coreEpistemology: 'Svataḥ-prāmāṇyavāda (Intrinsic Validity of Cognition): all knowledge claims are intrinsically valid upon arising, unless sublated by a defect or stronger contradiction.',
    coreEthics: 'Dharma is imperative action prescribed by Vedic injunctions (vidhi). Performance of duty produces an unseen transcendental potency (apūrva) that yields results.',
    liberationTheory: {
      term: { english: 'Transcendental Potency / Heaven to Release', iast: 'Svarga / Mokṣa', devanagari: 'स्वर्ग / मोक्ष' },
      description: 'Initially heavenly bliss (Svarga); in later classical Mīmāṃsā (Kumārila), liberation is the soul\'s exhaustion of all karma and cessation of rebirth.',
      natureOfLiberation: 'The Ātman remains in its own intrinsic, painless, substance-state, devoid of pleasure and cognition.',
      means: ['Performance of obligatory duties (Nitya-karma)', 'Abstinence from prohibited actions (Niṣiddha-karma)']
    },
    keyDoctrines: [
      {
        name: { english: 'Authorless Word', iast: 'Apauruṣeyatvā', devanagari: 'अपौरुषेयत्व' },
        description: 'Language and Vedic scripture are eternal and uncreated, immune to human bias and divine caprice.',
        opposes: 'Nyāya theism and Buddhist historical skepticism.'
      },
      {
        name: { english: 'Intrinsic Validity', iast: 'Svataḥ-prāmāṇyavāda', devanagari: 'स्वतःप्रामाण्यवाद' },
        description: 'Cognitions validate themselves internally; truth does not require external verification unless challenged.',
        opposes: 'Nyāya extrinsic validation (Parataḥ-prāmāṇya).'
      }
    ],
    quickSummary: 'The powerhouse of Indian linguistic hermeneutics, realism, and ritual epistemology, vigorously defending the eternal nature of language and common-sense reality against Buddhist skepticism.',
    understandOverview: 'Far from being "blind ritualists", Mīmāṃsā philosophers developed some of the most sophisticated theories of language interpretation (Bhāṭṭa Abhihitānvayavāda vs Prābhākara Anvitābhidhānavāda) and epistemic justification in world history.',
    scholarDetails: {
      textualTradition: 'Founded by Jaimini\'s 12-chapter Sūtra, expounded by Śabara Svāmin, then split into two titan schools: the Bhāṭṭa school (Kumārila Bhaṭṭa, 6 pramāṇas) and Prābhākara school (Prabhākara Miśra, 5 pramāṇas).',
      commentarialChain: ['Mīmāṃsā Sūtra (Jaimini)', 'Śabara Bhāṣya', 'Ślokavārttika (Kumārila Bhaṭṭa)', 'Bṛhatī (Prabhākara)'],
      scholarlyControversies: ['Is language compositional (words carry sense before sentence) or holistic?', 'Atheistic realism: refutation of God as creator of the universe.'],
      sepCitations: [{ title: 'Mīmāṃsā (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/early-modern-india/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Linguistic Realism & Legal Hermeneutics',
      historicalQualification: 'Mīmāṃsā principles closely parallel constitutional and legal statutory interpretation, but were inextricably applied to sacrificial injunctions and metaphysical karma.'
    },
    representativeThinkerIds: ['jaimini', 'sabara', 'kumarila-bhatta', 'prabhakara'],
    relatedDebates: ['debate-buddhist-mimamsa-scripture']
  },
  {
    id: 'advaita-vedanta',
    name: { english: 'Advaita Vedānta (Radical Non-Dualism)', iast: 'Advaita Vedānta', devanagari: 'अद्वैत वेदान्त' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 7th C. CE – Present',
    dateRange: 'Medieval to Contemporary',
    isAstika: true,
    astikaExplanation: 'Firmly rooted in the Uttara Mīmāṃsā (Upaniṣads and Brahma Sūtra); accepts Vedic Śabda as the ultimate pramāṇa for knowing non-dual Brahman.',
    foundationalThinker: { english: 'Gauḍapāda / Ādi Śaṅkara', iast: 'Gauḍapāda / Ādi Śaṅkara', devanagari: 'गौडपाद / आदि शङ्कर' },
    primaryFoundationalText: { english: 'Brahma Sūtra Bhāṣya & Upaniṣad Bhāṣyas', iast: 'Śārīraka Bhāṣya', devanagari: 'शारीरक भाष्य' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'upamana', 'sabda', 'arthapatti', 'anupalabdhi'],
    coreMetaphysics: 'Brahman is the sole, non-dual, partless, unconditioned reality (Sat-Cit-Ānanda). The individual self (Ātman) is strictly non-different from Brahman. The empirical world (Jagat) is an apparent superimposition (Vivarta) powered by ineffable cosmic illusion (Māyā/Avidyā).',
    coreEpistemology: 'Adopts the 6 Mīmāṃsā pramāṇas for the empirical realm (Vyavahāra), but holds that direct identity-knowledge (Aparokṣānubhūti) sparked by the Great Vedic Sentences (Mahāvākyas) cancels all duality.',
    coreEthics: 'Fourfold prerequisites (Sādhana-catuṣṭaya): discernment between eternal and transient, dispassion, mental mastery, and intense yearning for liberation.',
    liberationTheory: {
      term: { english: 'Self-Realization / Identity', iast: 'Mokṣa / Jīvanmukti', devanagari: 'मोक्ष / जीवन्मुक्ति' },
      description: 'Liberation in this very life (Jīvanmukti) when the veil of ignorance drops and the self realizes it was never bound.',
      natureOfLiberation: 'Pure unconditioned bliss and infinite consciousness identical with Brahman.',
      means: ['Jñāna Yoga (Śravaṇa [hearing], Manana [reflection], Nididhyāsana [contemplative absorption])']
    },
    keyDoctrines: [
      {
        name: { english: 'Three Levels of Reality', iast: 'Sattā-traividhya', devanagari: 'सत्तात्रैविध्य' },
        description: '1. Pāramārthika (Absolute: Brahman); 2. Vyāvahārika (Empirical: waking world); 3. Prātibhāsika (Illusory: dreams, rope-snake).',
        opposes: 'Naive realism and absolute nihilism.'
      },
      {
        name: { english: 'Vivartavāda (Apparent Transformation)', iast: 'Vivartavāda', devanagari: 'विवर्तवाद' },
        description: 'The world is an apparent alteration of Brahman without Brahman undergoing any real change in essence.',
        opposes: 'Pariṇāmavāda (real modification in Sāṃkhya and Viśiṣṭādvaita).'
      }
    ],
    quickSummary: 'The dominant non-dual tradition of Indian philosophy: asserting that Ultimate Reality (Brahman) alone is real, the world is an apparent illusion (Māyā), and the true self (Ātman) is identical with the Infinite.',
    understandOverview: 'Śaṅkara does NOT claim the world does not exist; on the empirical level (Vyavahāra), the world, moral laws, and science are fully real. It is only from the transcendent vantage point of absolute liberation that duality is sublated.',
    scholarDetails: {
      textualTradition: 'Consolidated by Śaṅkara (c. 788–820 CE), preceded by Gauḍapāda\'s Māṇḍūkya Kārikā. Sub-schools later diverged between the Bhāmatī school (Vācaspati Miśra) and Vivaraṇa school (Padmapāda/Prakāśātman).',
      commentarialChain: ['Brahma Sūtra (Bādarāyaṇa)', 'Śārīraka Bhāṣya (Śaṅkara)', 'Pañcapādikā (Padmapāda)', 'Bhāmatī (Vācaspati Miśra)', 'Advaitasiddhi (Madhusūdana Sarasvatī)'],
      scholarlyControversies: ['Where does ignorance (Avidyā) reside: in the Jīva or in Brahman?', 'The charge of Pracchanna-bauddha (Crypto-Buddhism) leveled by rival Vedāntins.'],
      sepCitations: [{ title: 'Śaṅkara (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/shankara/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Subjective Idealism / Solipsism',
      historicalQualification: 'Advaita is NOT Berkeleyan subjective idealism. The external world does not depend on the individual mind\'s perception (esse is percipi); it is a trans-individual objective reality on the empirical level grounded in cosmic Māyā.'
    },
    representativeThinkerIds: ['shankara', 'suresvara', 'vacaspati-misra'],
    relatedDebates: ['debate-advaita-visistadvaita-maya', 'debate-advaita-dvaita-difference']
  },
  {
    id: 'visistadvaita',
    name: { english: 'Viśiṣṭādvaita Vedānta (Qualified Non-Dualism)', iast: 'Viśiṣṭādvaita', devanagari: 'विशिष्टाद्वैत' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 11th C. CE – Present',
    dateRange: 'Medieval to Contemporary',
    isAstika: true,
    astikaExplanation: 'Grounds its authority in the Upaniṣads, Brahma Sūtras, and Bhagavad Gītā, as well as the Tamil hymns of the Vaiṣṇava Āḻvārs (Ubhayavedānta).',
    foundationalThinker: { english: 'Rāmānuja', iast: 'Rāmānuja', devanagari: 'रामानुज' },
    primaryFoundationalText: { english: 'Śrī Bhāṣya', iast: 'Śrī Bhāṣya', devanagari: 'श्री भाष्य' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Brahman is personal (Nārāyaṇa/Viṣṇu), possessing infinite auspicious attributes (ananta-kalyāṇa-guṇa). Individual souls (Cit) and material nature (Acit) are real entities that form the "body" (Śarīra) of God.',
    coreEpistemology: 'Satkhyāti (All knowledge is of the real): even illusory perceptions like silver in a shell have an underlying physical constituent basis. Rejects Śaṅkara\'s ineffable Māyā.',
    coreEthics: 'Surrender to God (Prapatti / Śaraṇāgati) and steady loving remembrance (Bhakti) supersedes dry intellectual speculation.',
    liberationTheory: {
      term: { english: 'Communion / Attainment of God', iast: 'Mokṣa / Sāyujya', devanagari: 'मोक्ष / सायुज्य' },
      description: 'The soul attains the transcendent realm of God (Vaikuṇṭha), enjoying perpetual communion while retaining its individual distinctness.',
      natureOfLiberation: 'Individual soul remains distinct in ontological identity but united with God in bliss, knowledge, and love. No Jīvanmukti (body must fall).',
      means: ['Bhakti Yoga and total self-surrender (Prapatti)']
    },
    keyDoctrines: [
      {
        name: { english: 'Body-Soul Relation', iast: 'Śarīra-Śarīrī-bhāva', devanagari: 'शरीर-शरीरि-भाव' },
        description: 'Just as the physical body is completely sustained, controlled, and exists for the self, the universe of souls and matter is the body of God.',
        opposes: 'Śaṅkara\'s absolute identity and Madhva\'s absolute separation.'
      },
      {
        name: { english: 'Seven Great Untenables', iast: 'Saptavidha-anupapatti', devanagari: 'सप्तविध-अनुपपत्ति' },
        description: 'Seven devastating logical refutations demonstrating that Śaṅkara\'s concept of Māyā/Avidyā is self-contradictory.',
        opposes: 'Advaita Māyāvāda.'
      }
    ],
    quickSummary: 'Qualified Non-Dualism: Reality is unified, but internally differentiated: God is the supreme inner soul, while individual conscious souls and physical nature form His real cosmic body.',
    understandOverview: 'Rāmānuja mounted an epic intellectual counter-offensive against Advaita. He argued that consciousness is always of something, experienced by someone; "pure contentless consciousness without attributes" is a meaningless abstraction.',
    scholarDetails: {
      textualTradition: 'Formulated by Yāmunācārya, synthesized by Rāmānuja in his Śrī Bhāṣya and Vedārthasaṃgraha, and defended by the polymath Vedānta Deśika.',
      commentarialChain: ['Brahma Sūtra', 'Śrī Bhāṣya (Rāmānuja)', 'Tattvaṭīkā (Vedānta Deśika)', 'Śatadūṣaṇī (Vedānta Deśika)'],
      scholarlyControversies: ['Tengalai (Southern) vs Vadagalai (Northern) schools on the role of human effort in salvation (Cat vs Monkey analogy)'],
      sepCitations: [{ title: 'Rāmānuja (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/ramanuja/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Panentheism',
      historicalQualification: 'Viśiṣṭādvaita resembles Western panentheism ("all in God"), but its organic body-soul theology (Śarīra-Śarīrī) preserves eternal individual moral agency and theological devotion.'
    },
    representativeThinkerIds: ['ramanuja'],
    relatedDebates: ['debate-advaita-visistadvaita-maya']
  },
  {
    id: 'dvaita',
    name: { english: 'Dvaita Vedānta (Radical Dualism / Pluralism)', iast: 'Dvaita Vedānta', devanagari: 'द्वैत वेदान्त' },
    category: 'astika',
    traditionClassification: 'Brahmanical / Āstika',
    historicalPeriod: 'c. 13th C. CE – Present',
    dateRange: 'Medieval to Contemporary',
    isAstika: true,
    astikaExplanation: 'Rigorous Āstika system interpreting the Upaniṣads as declaring the eternal, unbridgeable distinction between Lord Viṣṇu and all creation.',
    foundationalThinker: { english: 'Madhvācārya', iast: 'Madhvācārya', devanagari: 'मध्वाचार्य' },
    primaryFoundationalText: { english: 'Anuvyākhyāna & Brahma Sūtra Bhāṣya', iast: 'Anuvyākhyāna', devanagari: 'अनुव्याख्यान' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Radical realism and unbending pluralism. Reality is divided into Independent (Svatantra: Viṣṇu alone) and Dependent (Paratantra: souls, matter). Difference (Bheda) is real, eternal, and inherent in the very nature of things.',
    coreEpistemology: 'Sākṣin (the witnessing inner faculty) is the supreme validating instrument of knowledge; truth is intrinsically apprehended.',
    coreEthics: 'Every soul possesses an eternal innate spiritual nature (Svarūpa) that determines its spiritual trajectory and capacity for devotion.',
    liberationTheory: {
      term: { english: 'Eternal Service & Divine Grace', iast: 'Mokṣa', devanagari: 'मोक्ष' },
      description: 'Liberation is attained solely through the sovereign, uncompelled grace (Prasāda) of God upon seeing one\'s eternal difference and dependence.',
      natureOfLiberation: 'Souls retain their distinct personality and inherent hierarchy of bliss in Vaikuṇṭha, serving the Lord eternally.',
      means: ['Bhakti', 'Study of scripture', 'Divine Grace (Prasāda)']
    },
    keyDoctrines: [
      {
        name: { english: 'Five-Fold Eternal Difference', iast: 'Pañca-bheda', devanagari: 'पञ्चभेद' },
        description: '1. God vs Soul; 2. God vs Matter; 3. Soul vs Matter; 4. Soul vs Soul; 5. Matter vs Matter.',
        opposes: 'All forms of non-dualism and monism.'
      },
      {
        name: { english: 'Inherent Particularity', iast: 'Viśeṣa', devanagari: 'विशेष' },
        description: 'A special metaphysical category explaining how an indivisible entity can possess diverse attributes without internal division.',
        opposes: 'Advaita superimposition and Nyāya relation of inherence.'
      }
    ],
    quickSummary: 'Uncompromising dualism and realism: God alone is fully independent; souls and physical reality are eternally distinct from God and from one another.',
    understandOverview: 'Madhva launched a furious dialectical campaign against Advaita, claiming that to call the self identical with God is the supreme blasphemous error. For Dvaita, difference is not an illusion; difference is the foundational fabric of reality.',
    scholarDetails: {
      textualTradition: 'Madhva (1238–1317 CE) composed 37 major works. His logic was carried to supreme dialectical heights by Jayatīrtha (Ṭīkācārya) and Vyāsatīrtha, whose Nyāyāmṛta sparked a 300-year intellectual duel with Advaitins.',
      commentarialChain: ['Brahma Sūtra', 'Anuvyākhyāna (Madhva)', 'Nyāyasudhā (Jayatīrtha)', 'Nyāyāmṛta (Vyāsatīrtha)'],
      scholarlyControversies: ['Doctrine of Soul Hierarchy (Tāratamya) and eternal damnation (Tamo-yogya), unique in Indian thought.'],
      sepCitations: [{ title: 'Madhva (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/madhva/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Seminal Theism / Calvinism',
      historicalQualification: 'While Madhva\'s emphasis on divine sovereignty and soul predispositions resembles Calvinist predestination, Dvaita grounds its cosmology in beginningless karma and the Upaniṣadic canon.'
    },
    representativeThinkerIds: ['madhva', 'jayatirtha'],
    relatedDebates: ['debate-advaita-dvaita-difference']
  },

  // --- ŚRAMAṆA & NĀSTIKA TRADITIONS ---
  {
    id: 'early-buddhism',
    name: { english: 'Early Buddhism & Theravāda', iast: 'Theravāda / Mūla-Bauddha', devanagari: 'थेरवाद / मूल-बौद्ध' },
    category: 'nastika',
    traditionClassification: 'Buddhist',
    historicalPeriod: 'c. 5th C. BCE – Present',
    dateRange: 'Ancient to Contemporary',
    isAstika: false,
    astikaExplanation: 'Explicitly Nāstika: rejects Vedic revelation, the authority of the Brahmanical priesthood, the validity of animal sacrifice, and the existence of an eternal creator God (Īśvara).',
    foundationalThinker: { english: 'Siddhārtha Gautama (The Buddha)', iast: 'Siddhārtha Gautama', devanagari: 'सिद्धार्थ गौतम' },
    primaryFoundationalText: { english: 'Pāli Tipiṭaka (Sutta, Vinaya, Abhidhamma)', iast: 'Tipiṭaka', devanagari: 'तिपिटक' },
    acceptedPramanas: ['pratyaksa', 'anumana'],
    coreMetaphysics: 'Pratītyasamutpāda (Dependent Origination): all phenomena arise in mutual dependence upon conditions; nothing has an uncaused independent core. Three Marks of Existence: Anicca (Impermanence), Dukkha (Suffering), Anattā (No-Self).',
    coreEpistemology: 'Empirical phenomenological analysis: experience is deconstructed into the Five Aggregates (khandhas: form, sensation, perception, mental formations, consciousness).',
    coreEthics: 'Noble Eightfold Path: Right View, Intention, Speech, Action, Livelihood, Effort, Mindfulness, and Concentration.',
    liberationTheory: {
      term: { english: 'Unbinding / Extinguishment', iast: 'Nibbāna / Nirvāṇa', devanagari: 'निब्बान / निर्वाण' },
      description: 'The complete extinguishment of the three fires of greed (lobha), hatred (dosa), and delusion (moha).',
      natureOfLiberation: 'Unconditioned peace beyond the cycle of birth and death; neither annihilation nor existence of an ego.',
      means: ['Vipassanā (Insight meditation into impermanence and no-self)', 'Śīla (Ethical conduct)', 'Samādhi (Mental tranquility)']
    },
    keyDoctrines: [
      {
        name: { english: 'No-Self / Not-Self', iast: 'Anātman / Anattā', devanagari: 'अनात्मन् / अनत्ता' },
        description: 'No permanent, unchanging, autonomous soul exists within or behind psychological and physical processes.',
        opposes: 'All Upaniṣadic, Nyāya, and Jain theories of an enduring Ātman/Jīva.'
      },
      {
        name: { english: 'Dependent Origination', iast: 'Pratītyasamutpāda', devanagari: 'प्रतीत्यसमुत्पाद' },
        description: '"When this exists, that comes to be; with the arising of this, that arises." Causation without an uncaused prime mover.',
        opposes: 'Theism, fatalism, and accidentalism.'
      }
    ],
    quickSummary: 'The revolutionary Śramaṇa path diagnosing suffering (Dukkha) as rooted in craving and the delusion of a permanent self (Anātman), pointing to ethical mastery and meditative liberation (Nirvāṇa).',
    understandOverview: 'Early Buddhist philosophy radically dismantles substantialism. What we call "a chariot" or "a person" is merely a nominal designation (paññatti) for a constantly flowing causal bundle of psychophysical events.',
    scholarDetails: {
      textualTradition: 'Preserved canonically in Pāli, translated and developed into detailed psychological Abhidhamma matrices (Dhammasaṅgaṇī, Kathāvatthu) and classical commentaries by Buddhaghosa (Visuddhimagga).',
      commentarialChain: ['Tipiṭaka', 'Milindapañha', 'Visuddhimagga (Buddhaghosa)', 'Atthasālinī'],
      scholarlyControversies: ['Did the Buddha teach an absolute negation of self or merely that empirical aggregates are not-self?', 'The ontological status of the unconditioned (Asaṅkhata) element of Nibbāna.'],
      sepCitations: [{ title: 'Buddha (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/buddha/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Humean Bundle Theory of Mind',
      historicalQualification: 'While Hume deconstructs the self into a "bundle of perceptions", the Buddhist teaching was not an abstract armchair epistemological skepticism, but an existential curative technology to eliminate suffering.'
    },
    representativeThinkerIds: ['siddhartha-gautama'],
    relatedDebates: ['debate-nyaya-buddhist-self']
  },
  {
    id: 'madhyamaka',
    name: { english: 'Madhyamaka (The Middle Way of Emptiness)', iast: 'Madhyamaka', devanagari: 'माध्यमक' },
    category: 'nastika',
    traditionClassification: 'Buddhist',
    historicalPeriod: 'c. 2nd C. CE – Present',
    dateRange: 'Classical to Mahāyāna Scholasticism',
    isAstika: false,
    astikaExplanation: 'Nāstika Mahāyāna tradition rejecting Vedic authority, substantialism, and all dogmatic metaphysical foundations.',
    foundationalThinker: { english: 'Nāgārjuna', iast: 'Nāgārjuna', devanagari: 'नागार्जुन' },
    primaryFoundationalText: { english: 'Mūlamadhyamakakārikā (Root Verses on the Middle Way)', iast: 'Mūlamadhyamakakārikā', devanagari: 'मूलमध्यमकारिका' },
    acceptedPramanas: ['pratyaksa', 'anumana'],
    coreMetaphysics: 'Śūnyatā (Emptiness): all things are devoid of inherent independent existence (niḥsvabhāva) because they arise dependently. Emptiness is not non-existence or nihilism; it is the openness that makes change and life possible.',
    coreEpistemology: 'Two Truths (Satyadvaya): Conventional Truth (Saṃvṛti-satya) where language, morality, and causation function pragmatically; and Ultimate Truth (Paramārtha-satya) which is beyond all conceptual proliferation (prapañcopaśama).',
    coreEthics: 'The Bodhisattva vow: universal compassion (Karuṇā) inseparable from insight into emptiness (Prajñā).',
    liberationTheory: {
      term: { english: 'Peace beyond Concepts / Nirvāṇa', iast: 'Prapañcopaśama', devanagari: 'प्रपञ्चोपशम' },
      description: 'The pacification of all conceptual fixations (dṛṣṭi). Saṃsāra and Nirvāṇa are not two physically separate realms, but two ways of experiencing reality.',
      natureOfLiberation: 'Freedom from the cognitive error of projecting intrinsic existence onto dynamic dependently arisen processes.',
      means: ['Dialectical deconstruction (Prasaṅga)', 'Prajñāpāramitā meditation']
    },
    keyDoctrines: [
      {
        name: { english: 'Identity of Dependent Arising and Emptiness', iast: 'Pratītyasamutpāda-Śūnyatā', devanagari: 'प्रतीत्यसमुत्पाद-शून्यता' },
        description: '"Whatever arises dependently is explained as emptiness; that is dependent designation; that is the middle way."',
        opposes: 'Essentialism (svabhāvavāda) and nihilism (ucchedavāda).'
      },
      {
        name: { english: 'The Catuṣkoṭi (Four-Cornered Negation)', iast: 'Catuṣkoṭi', devanagari: 'चतुष्कोटि' },
        description: 'Ultimate reality cannot be asserted as: 1. Existent; 2. Non-existent; 3. Both; 4. Neither.',
        opposes: 'Binary logic applied to the transcendent unconditioned.'
      }
    ],
    quickSummary: 'The profound philosophy of emptiness (Śūnyatā): showing through relentless dialectical deconstruction that nothing possesses independent intrinsic essence (svabhāva).',
    understandOverview: 'Nāgārjuna does not offer a new metaphysical thesis; rather, he uses reductio ad absurdum (prasaṅga) to show that any philosophical attempt to define an uncaused, eternal substance refutes itself.',
    scholarDetails: {
      textualTradition: 'Nāgārjuna\'s masterpiece MMK commented on by Buddhapālita, Bhāviveka, and Candrakīrti (Prāsaṅgika-Madhyamaka). Formed the intellectual bedrock of Tibetan scholasticism.',
      commentarialChain: ['Mūlamadhyamakakārikā (Nāgārjuna)', 'Vigrahavyāvartanī', 'Prasannapadā (Candrakīrti)', 'Madhyamakāvatāra (Candrakīrti)'],
      scholarlyControversies: ['Is Madhyamaka anti-realism, skepticism, quietism, or dialetheism (accepting true contradictions)?', 'Prāsaṅgika vs Svātantrika dispute over the use of independent syllogisms.'],
      sepCitations: [{ title: 'Nāgārjuna (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/nagarjuna/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Derridean Deconstruction & Anti-Foundationalism',
      historicalQualification: 'While Nāgārjuna anticipated Jacques Derrida\'s critique of presence and essentialism, Madhyamaka\'s deconstruction was explicitly harnessed to Buddhist ethical compassion and the cessation of suffering.'
    },
    representativeThinkerIds: ['nagarjuna', 'candrakirti'],
    relatedDebates: ['debate-buddhist-nyaya-causation']
  },
  {
    id: 'jainism',
    name: { english: 'Jain Philosophy (Pluralism & Non-Absolutism)', iast: 'Jaina Darśana', devanagari: 'जैन दर्शन' },
    category: 'nastika',
    traditionClassification: 'Jain',
    historicalPeriod: 'c. 6th C. BCE – Present',
    dateRange: 'Ancient to Contemporary',
    isAstika: false,
    astikaExplanation: 'Nāstika tradition rejecting Vedic revelation; accepts the authority of the 24 enlightened spiritual conquerors (Tīrthaṅkaras).',
    foundationalThinker: { english: 'Mahāvīra / Umāsvāti', iast: 'Mahāvīra / Umāsvāti', devanagari: 'महावीर / उमास्वाति' },
    primaryFoundationalText: { english: 'Tattvārtha Sūtra', iast: 'Tattvārtha Sūtra', devanagari: 'तत्त्वार्थ सूत्र' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Dynamic substance-dualism: reality is divided into Jīva (infinite, conscious living souls) and Ajīva (non-conscious matter, space, motion, rest, time). Substances endure through changes: they have permanence (dhrauvya), origination (utpāda), and destruction (vyaya).',
    coreEpistemology: 'Anekāntavāda (Non-Absolutism): Reality is complex, multifaceted, and infinite in attributes. Any human description captures only one partial standpoint (Naya). Syādvāda: 7-fold conditional predication (Saptabhaṅgī).',
    coreEthics: 'Ahiṃsā Paramo Dharmaḥ: Supreme non-violence in thought, speech, and physical action. The Five Great Vows (Mahāvratas).',
    liberationTheory: {
      term: { english: 'Omniscience & Isolation', iast: 'Mokṣa / Kevala Jñāna', devanagari: 'मोक्ष / केवल ज्ञान' },
      description: 'Total shedding of subtle material karmic particles that weigh down and cloud the soul.',
      natureOfLiberation: 'The Jīva ascends to the pinnacle of the cosmos (Siddhaśilā), possessing infinite knowledge, vision, energy, and unconditioned bliss.',
      means: ['Ratnatraya (Three Jewels): Right Faith (Samyag-darśana), Right Knowledge (Samyag-jñāna), and Right Conduct (Samyag-cāritra)']
    },
    keyDoctrines: [
      {
        name: { english: 'Many-Sidedness of Reality', iast: 'Anekāntavāda', devanagari: 'अनेकान्तवाद' },
        description: 'No single philosophical view can fully encompass the infinite manifold aspects of reality (The Blind Men and the Elephant).',
        opposes: 'One-sided absolutisms (Ekāntavāda) like Advaita monism or Buddhist momentariness.'
      },
      {
        name: { english: 'The Sevenfold Conditional Predication', iast: 'Syādvāda / Saptabhaṅgī', devanagari: 'स्याद्वाद / सप्तभङ्गी' },
        description: 'Every proposition must be qualified with "Syāt" (in a certain respect): 1. In a respect, it is; 2. In a respect, it is not; 3. In a respect, it is and is not; 4. In a respect, it is inexpressible, etc.',
        opposes: 'Dogmatic unconditioned claims.'
      }
    ],
    quickSummary: 'The profound philosophy of non-absolutism (Anekāntavāda) and radical non-violence (Ahiṃsā), teaching that reality is infinitely multifaceted and that dogmatic one-sidedness is the root of violence.',
    understandOverview: 'Jainism solves the classical debate between permanence (Brahmanism) and impermanence (Buddhism): from the standpoint of substance (Dravya), the soul is eternal; from the standpoint of modification (Paryāya), it changes continually.',
    scholarDetails: {
      textualTradition: 'Umāsvāti\'s Tattvārtha Sūtra (c. 2nd–5th C. CE) accepted by both Digambara and Śvetāmbara sects, with masterworks by Kundakunda, Siddhasena Divākara, and Haribhadra Sūri.',
      commentarialChain: ['Tattvārtha Sūtra (Umāsvāti)', 'Pravacanasāra (Kundakunda)', 'Sanmatitarka (Siddhasena)', 'Anekāntajayapatākā (Haribhadra)'],
      scholarlyControversies: ['Does Syādvāda lead to unprincipled relativism or epistemic humility?', 'Digambara vs Śvetāmbara debate over women\'s direct attainment of Mokṣa.'],
      sepCitations: [{ title: 'Jainism (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/jainism/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Epistemic Pluralism & Standpoint Theory',
      historicalQualification: 'Anekāntavāda anticipates modern perspectivism, but it is NOT postmodern subjectivism: Jains firmly believe reality exists objectively with real determinate properties, known fully by omniscient Kevalins.'
    },
    representativeThinkerIds: ['mahavira', 'umasvati', 'kundakunda', 'haribhadra'],
    relatedDebates: ['debate-jain-buddhist-anekanta']
  },
  {
    id: 'carvaka',
    name: { english: 'Cārvāka / Lokāyata (Radical Materialism & Empiricism)', iast: 'Cārvāka / Lokāyata', devanagari: 'चार्वाक / लोकायत' },
    category: 'nastika',
    traditionClassification: 'Cārvāka / Materialist',
    historicalPeriod: 'c. 6th C. BCE – 12th C. CE',
    dateRange: 'Ancient to Medieval',
    isAstika: false,
    astikaExplanation: 'The most radical Nāstika tradition: fiercely repudiated Vedic authority, priesthood, rituals, heaven, karma, and rebirth as fraudulent inventions of deceitful priests.',
    foundationalThinker: { english: 'Bṛhaspati', iast: 'Bṛhaspati', devanagari: 'बृहस्पति' },
    primaryFoundationalText: { english: 'Bṛhaspati Sūtra (lost) / Tattvopaplavasimha', iast: 'Tattvopaplavasiṃha', devanagari: 'तत्त्वोपप्लवसिंह' },
    acceptedPramanas: ['pratyaksa'],
    coreMetaphysics: 'Strict physicalism: the universe is composed solely of four material elements (Mahābhūtas: earth, water, fire, air). Consciousness is an emergent epiphenomenon arising from their organic combination, just as intoxicating power arises from fermenting grain.',
    coreEpistemology: 'Pure empiricism: direct perception (Pratyakṣa) is the ONLY valid instrument of knowledge. Inference (Anumāna) is rejected as unprovable because invariable concomitance (Vyāpti) can never be observed for all cases.',
    coreEthics: 'Enlightened hedonism and worldly pragmatism: since there is no soul, karma, or afterlife, the highest goal is to maximize joy and minimize pain in this single embodied life.',
    liberationTheory: {
      term: { english: 'Physical Death / Dissolution', iast: 'Deha-nāśa / Maraṇa', devanagari: 'देहनाश / मरण' },
      description: 'Liberation is simply the natural death and dissolution of the physical body into the elements.',
      natureOfLiberation: 'There is no spiritual realm, transmigration, or surviving consciousness.',
      means: ['Living wisely and pragmatically in the present embodied world']
    },
    keyDoctrines: [
      {
        name: { english: 'Embodied Self', iast: 'Dehātmavāda', devanagari: 'देहात्मवाद' },
        description: 'The conscious self is nothing other than the living physical body endowed with sentience.',
        opposes: 'All doctrines of an immortal soul (Ātman/Jīva/Puruṣa).'
      },
      {
        name: { english: 'Critique of Induction', iast: 'Vyāpti-khaṇḍana', devanagari: 'व्याप्तिखण्डन' },
        description: 'Universal causal laws cannot be proven by perception (which only observes particular past instances) or by inference (which leads to infinite regress).',
        opposes: 'Nyāya and Buddhist formal inference.'
      }
    ],
    quickSummary: 'Ancient India\'s fearless materialist tradition: arguing that consciousness is a biological product of matter, rejecting the afterlife and karma, and championing empirical science.',
    understandOverview: 'Most Cārvāka primary texts were destroyed; their sophisticated arguments survive almost entirely as objections quoted by opponents (Śaṅkara, Jayanta Bhaṭṭa, Mādhava). Jayarāśi Bhaṭṭa\'s Tattvopaplavasimha ("The Lion that Demolishes All Categories") extended Cārvāka skepticism to refute even perception.',
    scholarDetails: {
      textualTradition: 'Fragmentary quotations in the Sarvadarśanasaṃgraha, Arthaśāstra, and Jayarāśi Bhaṭṭa\'s unique 8th-century treatise Tattvopaplavasimha.',
      commentarialChain: ['Bṛhaspati Sūtra (fragments)', 'Tattvopaplavasimha (Jayarāśi Bhaṭṭa)'],
      scholarlyControversies: ['Did all Cārvākas reject inference completely, or only inference regarding metaphysical entities (afterlife, God)?'],
      sepCitations: [{ title: 'Cārvāka (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/early-modern-india/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Radical Physicalism & Humean Skepticism',
      historicalQualification: 'Cārvāka anticipated David Hume\'s famous problem of induction and modern neurobiological emergentism by over two millennia, but formulated it within the dialectical context of ancient Indian śramaṇa debates.'
    },
    representativeThinkerIds: ['brihaspati-carvaka'],
    relatedDebates: ['debate-carvaka-orthodoxy-epistemology']
  },

  // --- ŚAIVA & ŚĀKTA PHILOSOPHIES ---
  {
    id: 'kashmir-saivism',
    name: { english: 'Kashmir Śaivism (Trika & Pratyabhijñā Non-Dualism)', iast: 'Kāśmīra Śaiva / Pratyabhijñā', devanagari: 'कश्मीर शैव / प्रत्यभिज्ञा' },
    category: 'saiva-sakta',
    traditionClassification: 'Śaiva',
    historicalPeriod: 'c. 8th – 12th C. CE',
    dateRange: 'Medieval Classical Renaissance',
    isAstika: true,
    astikaExplanation: 'Accepts the Tantric Śaiva Āgamas alongside Vedic revelation, asserting the supremacy of divine non-dual consciousness.',
    foundationalThinker: { english: 'Vasugupta / Abhinavagupta', iast: 'Vasugupta / Abhinavagupta', devanagari: 'वसुगुप्त / अभिनवगुप्त' },
    primaryFoundationalText: { english: 'Śiva Sūtras & Tantrāloka', iast: 'Śiva Sūtras', devanagari: 'शिव सूत्र' },
    acceptedPramanas: ['pratyaksa', 'anumana', 'sabda'],
    coreMetaphysics: 'Paramasiva (Supreme Consciousness) is non-dual, omnipotent, and possessed of radical sovereign freedom (Svātantrya). The universe is not an illusion (as in Advaita), but the real, joyous, radiant self-manifestation (Ābhāsa) and dynamic pulsation (Spanda) of Śiva through His dynamic power, Śakti.',
    coreEpistemology: 'Recognition (Pratyabhijñā): liberating knowledge is not learning something new, but directly recognizing one\'s own already-present identity as the universal divine consciousness.',
    coreEthics: 'Transcendence of artificial dualities (pure vs impure); all reality is divinely vibrant.',
    liberationTheory: {
      term: { english: 'Recognition of Divine Identity', iast: 'Pratyabhijñā / Śivatva', devanagari: 'प्रत्यभिज्ञा / शिवत्व' },
      description: 'The individual soul recognizes that its own immediate awareness is none other than the cosmic play of Śiva.',
      natureOfLiberation: 'Liberation in life (Jīvanmukti) characterized by supreme sovereign freedom, aesthetic bliss (Camatkāra), and creative dynamism.',
      means: ['Pratyabhijñā (Direct recognition through insight)', 'Śāktopāya (Cognitive reorientation)', 'Śāmbhavopāya (Pure non-conceptual awareness)']
    },
    keyDoctrines: [
      {
        name: { english: 'Sovereign Freedom', iast: 'Svātantryavāda', devanagari: 'स्वातन्त्र्यवाद' },
        description: 'Consciousness is not passive or static, but inherently active, self-reflective, and sovereignly creative.',
        opposes: 'Advaita\'s passive witnessing consciousness and Sāṃkhya\'s inert Puruṣa.'
      },
      {
        name: { english: 'Theory of Universal Vibration', iast: 'Spandavāda', devanagari: 'स्पन्दवाद' },
        description: 'All cosmic manifestations, thoughts, and sensations are vibratory pulses of divine energy.',
        opposes: 'Static mechanistic atomism.'
      }
    ],
    quickSummary: 'The extraordinary non-dual Tantric philosophy of Kashmir: viewing all existence as the real, luminous, joyful self-expression (Spanda) and sovereign freedom (Svātantrya) of supreme consciousness.',
    understandOverview: 'Kashmir Śaivism offers a powerful critique of Advaita Vedānta: while Śaṅkara views the world as an illusion (Māyā) created by inexplicable ignorance, Abhinavagupta asserts that the world is real—an artistic masterpiece painted by Śiva on the canvas of Himself.',
    scholarDetails: {
      textualTradition: 'Inaugurated by the revelation of the Śiva Sūtras to Vasugupta, developed logically by Somānanda (Śivadṛṣṭi) and Utpaladeva (Īśvarapratyabhijñā Kārikā), and synthesized by the great genius Abhinavagupta in the Tantrāloka and Parātrīśikāviraṇa.',
      commentarialChain: ['Śiva Sūtras (Vasugupta)', 'Spandakārikā', 'Īśvarapratyabhijñākārikā (Utpaladeva)', 'Tantrāloka (Abhinavagupta)'],
      scholarlyControversies: ['Difference between the Spanda and Pratyabhijñā lineages within Trika Śaivism.'],
      sepCitations: [{ title: 'Kashmir Śaivism (Internet Encyclopedia of Philosophy)', url: 'https://iep.utm.edu/' }]
    },
    antiAnachronismNote: {
      modernComparison: 'Dynamic Hegelian Monism & Quantum Field Metaphors',
      historicalQualification: 'While modern thinkers draw parallels between Kashmir Śaivism\'s vibrating consciousness and dynamic field theory, Abhinavagupta\'s framework is fundamentally phenomenological and soteriological, rooted in Tantric meditative practice.'
    },
    representativeThinkerIds: ['abhinavagupta', 'utpaladeva'],
    relatedDebates: ['debate-advaita-visistadvaita-maya']
  }
];

// ==========================================
// 5. PHILOSOPHERS & COMMENTATORS
// ==========================================
export const INDIAN_PHILOSOPHERS: IndianPhilosopher[] = [
  {
    id: 'yajnavalkya',
    name: { english: 'Yājñavalkya', iast: 'Yājñavalkya', devanagari: 'याज्ञवल्क्य' },
    displayDates: 'c. 8th – 7th Century BCE',
    approxYearStart: -750,
    approxYearEnd: -650,
    dateEpistemicStatus: 'Contested Dating',
    datingNote: 'Traditional Vedic sage; relative linguistic dating places the Bṛhadāraṇyaka Upaniṣad prose layer around 700 BCE.',
    tradition: 'Vedic & Upaniṣadic',
    schoolId: 'advaita-vedanta',
    region: 'Mithila / Videha (Modern Bihar/Nepal border)',
    primaryTexts: [
      { english: 'Bṛhadāraṇyaka Upaniṣad (Dialogues)', iast: 'Bṛhadāraṇyaka Upaniṣad', devanagari: 'बृहदारण्यक उपनिषद्' }
    ],
    majorContributions: [
      'Earliest philosophical formulation of the witness-self (Sākṣin)',
      'Negative dialectics of the Absolute: neti, neti ("not this, not this")',
      'The dialogue on true love with his philosopher-wife Maitreyī',
      'The debate with Gārgī Vācaknavī on the ultimate unwarpable fabric of space'
    ],
    famousDebatesOrOpponents: ['Gārgī Vācaknavī (on the ground of reality)', 'Śākalya (on the number of gods)'],
    famousQuote: {
      iast: 'Sa eṣa neti nety ātmā; agṛhyo na hi gṛhyate...',
      english: 'That Self is "not this, not this." It is ungraspable, for it cannot be grasped; indestructible, for it cannot be destroyed...',
      source: 'Bṛhadāraṇyaka Upaniṣad 3.9.26'
    },
    summary: 'The titan sage of the early Upaniṣads, famous for his intellectual dominance in King Janaka\'s philosophical tournaments and the doctrine of the ungraspable inner witness (neti, neti).',
    understandBio: 'In the court of Janaka, Yājñavalkya faced challenging interrogations from rival thinkers, including the female philosopher Gārgī. He formulated the doctrine that the inner self is the unseen seer, unheard hearer, and unthought thinker.',
    scholarNotes: 'Yājñavalkya represents the pivotal transition from ritual sacrificial Brahmanism to introspective psychological metaphysics.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Early Indian Philosophy (SEP)'
  },
  {
    id: 'siddhartha-gautama',
    name: { english: 'Siddhārtha Gautama (The Buddha)', iast: 'Siddhārtha Gautama', devanagari: 'सिद्धार्थ गौतम' },
    displayDates: 'c. 5th Century BCE',
    approxYearStart: -480,
    approxYearEnd: -400,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Historical consensus dates his Parinirvāṇa between 410 and 400 BCE (Short Chronology) or c. 486 BCE (Long Chronology).',
    tradition: 'Buddhist',
    schoolId: 'early-buddhism',
    region: 'Kapilavastu / Magadha (India/Nepal border region)',
    primaryTexts: [
      { english: 'Discourses of the Buddha (Sutta Piṭaka)', iast: 'Sutta Piṭaka', devanagari: 'सुत्त पिटक' }
    ],
    majorContributions: [
      'Formulation of the Four Noble Truths and Noble Eightfold Path',
      'Dependent Origination (Pratītyasamutpāda) as universal causal law',
      'The doctrine of No-Self (Anātman) dismantling metaphysical essentialism',
      'Ethical radicalization of karma: intentional action (cetanā) determines destiny'
    ],
    famousDebatesOrOpponents: ['Vedic ritualists', 'Saccaka (Nigaṇṭha debater)', 'Kassapa'],
    famousQuote: {
      iast: 'Sabbe dhammā anattā ti.',
      english: 'All phenomena are devoid of an enduring, autonomous self.',
      source: 'Dhammapada v. 279'
    },
    summary: 'Founder of Buddhism; introduced the profound diagnostic framework of suffering, the radical denial of an unchanging soul (Anātman), and the middle path between sensual indulgence and mortification.',
    understandBio: 'Gautama renounced aristocratic life to investigate the existential problem of aging, sickness, and death. Rejecting both severe asceticism and ritualism, he attained enlightenment under the Bodhi tree at Bodh Gaya and spent 45 years teaching an empirical path to Nirvāṇa.',
    scholarNotes: 'Pāli canon discourses show the Buddha employing pedagogical skill (upāya), refusing to answer speculative metaphysical questions that do not tend toward liberation (the Unanswered Questions / Avyākata).',
    sepUrl: 'https://plato.stanford.edu/entries/buddha/',
    sepTitle: 'Buddha (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'mahavira',
    name: { english: 'Vardhamāna Mahāvīra', iast: 'Vardhamāna Mahāvīra', devanagari: 'वर्धमान महावीर' },
    displayDates: 'c. 6th – 5th Century BCE',
    approxYearStart: -599,
    approxYearEnd: -527,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Senior contemporary of the Buddha; traditional Jain date 527 BCE, modern scholarship places his Parinirvāṇa in the early 5th century BCE.',
    tradition: 'Jain',
    schoolId: 'jainism',
    region: 'Vaiśālī / Magadha (Modern Bihar)',
    primaryTexts: [
      { english: 'Jain Āgamas (Canonical Sermons)', iast: 'Jaina Āgama', devanagari: 'जैन आगम' }
    ],
    majorContributions: [
      'Revitalized and codified the 24th Tīrthaṅkara lineage of Jainism',
      'Absolute non-violence (Ahiṃsā) applied to all life forms',
      'Foundations of non-absolutist epistemology (Anekāntavāda)',
      'The Five Great Vows (Mahāvratas) for monastic liberation'
    ],
    famousDebatesOrOpponents: ['Makkhali Gosāla (Ājīvika founder)', 'Indrabhūti Gautama (chief disciple)'],
    famousQuote: {
      iast: 'Ahiṃsā paramo dharmaḥ.',
      english: 'Non-violence is the supreme moral law.',
      source: 'Jain Traditional Adage'
    },
    summary: 'The 24th Tīrthaṅkara of Jainism; championed radical non-violence (Ahiṃsā) and established the philosophical foundation for many-sided truth (Anekāntavāda).',
    understandBio: 'Mahāvīra practiced profound austerity for twelve years before attaining omniscience (Kevala Jñāna). He converted eleven learned Brahman scholars (the Gaṇadharas) by systematically resolving their philosophical doubts about the soul, karma, and liberation.',
    scholarNotes: 'Mahāvīra\'s dialogues preserve ancient debates with materialists, fatalists, and early Buddhists.',
    sepUrl: 'https://plato.stanford.edu/entries/jainism/',
    sepTitle: 'Jainism (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'nagarjuna',
    name: { english: 'Nāgārjuna', iast: 'Nāgārjuna', devanagari: 'नागार्जुन' },
    displayDates: 'c. 150 – 250 CE',
    approxYearStart: 150,
    approxYearEnd: 250,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Active during the Sātavāhana dynasty in southern/central India (Andhra/Vidarbha).',
    tradition: 'Buddhist',
    schoolId: 'madhyamaka',
    region: 'Andhra / Southern India (Nāgārjunakoṇḍa)',
    primaryTexts: [
      { english: 'Root Verses on the Middle Way', iast: 'Mūlamadhyamakakārikā', devanagari: 'मूलमध्यमकारिका' },
      { english: 'Dispeller of Disputes', iast: 'Vigrahavyāvartanī', devanagari: 'विग्रहव्यावर्तनी' }
    ],
    majorContributions: [
      'Philosophical formalization of Emptiness (Śūnyatā)',
      'Proof that Dependent Origination entails complete lack of intrinsic nature (Niḥsvabhāvatā)',
      'The Two Truths framework (Conventional vs Ultimate reality)',
      'The Catuṣkoṭi dialectic dismantling four-cornered assertions'
    ],
    famousDebatesOrOpponents: ['Abhidharma essentialists', 'Nyāya epistemologists (Vigrahavyāvartanī)'],
    famousQuote: {
      iast: 'Yaḥ pratītyasamutpādaḥ śūnyatāṃ tāṃ pracakṣmahe...',
      english: 'Whatever is dependently co-arisen, that is explained to be emptiness. That, being a dependent designation, is itself the middle way.',
      source: 'Mūlamadhyamakakārikā 24.18'
    },
    summary: 'Often regarded as the most formidable dialectician in Asian philosophy; founded Madhyamaka by demonstrating that all concepts and things are empty of intrinsic existence.',
    understandBio: 'Nāgārjuna took the Buddha\'s doctrine of Dependent Origination to its ultimate logical conclusion: if all things arise dependently, nothing possesses an independent, uncaused core (Svabhāva). Therefore, everything is "empty" (śūnya).',
    scholarNotes: 'In the Vigrahavyāvartanī, Nāgārjuna responds to the classic Nyāya objection: "If all words are empty, your thesis that all things are empty is also empty and proves nothing." Nāgārjuna masterfully demonstrates how emptiness functions without contradiction.',
    sepUrl: 'https://plato.stanford.edu/entries/nagarjuna/',
    sepTitle: 'Nāgārjuna (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'shankara',
    name: { english: 'Ādi Śaṅkarācārya', iast: 'Ādi Śaṅkara', devanagari: 'आदि शङ्कर' },
    displayDates: 'c. 788 – 820 CE',
    approxYearStart: 788,
    approxYearEnd: 820,
    dateEpistemicStatus: 'Contested Dating',
    datingNote: 'Traditional accounts place him in 509 BCE; modern historical consensus favors c. 700–750 CE or 788–820 CE.',
    tradition: 'Brahmanical / Āstika',
    schoolId: 'advaita-vedanta',
    region: 'Kalady (Kerala) / All-India Digvijaya',
    primaryTexts: [
      { english: 'Brahma Sūtra Commentary', iast: 'Śārīraka Bhāṣya', devanagari: 'शारीरक भाष्य' },
      { english: 'Commentaries on Principal Upaniṣads', iast: 'Daśopaniṣad Bhāṣya', devanagari: 'दशोपनिषद् भाष्य' },
      { english: 'Upadeśasāhasrī (The Thousand Teachings)', iast: 'Upadeśasāhasrī', devanagari: 'उपदेशसाहस्री' }
    ],
    majorContributions: [
      'Consolidation of Advaita (Non-Dual) Vedānta as a supreme intellectual system',
      'Rigorous formulation of superimposition (Adhyāsa) and cosmic illusion (Māyā)',
      'Subordination of ritual action (Karma) to pure liberating knowledge (Jñāna)',
      'Establishment of four cardinal monastic centers (Mathas) across India'
    ],
    famousDebatesOrOpponents: ['Maṇḍana Miśra (on Karma vs Jñāna)', 'Buddhist Vijñānavādins and Madhyamikas'],
    famousQuote: {
      iast: 'Brahma satyaṃ jagan mithyā jīvo brahmaiva nāparaḥ.',
      english: 'Brahman is real, the world is an apparent illusion, and the individual soul is non-different from Brahman.',
      source: 'Vivekacūḍāmaṇi v. 20'
    },
    summary: 'The brilliant consolidator of Advaita Vedānta; established that non-dual Brahman alone is the ultimate reality and that realizing one\'s true identity as Brahman brings instant liberation.',
    understandBio: 'Born in Kerala, Śaṅkara traveled across the length and breadth of the Indian subcontinent engaging in public debates with Mīmāṃsakas, Buddhists, and Jain masters. His commentaries on the Upaniṣads, Brahma Sūtras, and Bhagavad Gītā (Prasthānatrayī) set the benchmark for all future Vedāntic philosophy.',
    scholarNotes: 'Śaṅkara\'s introduction to the Brahma Sūtra Bhāṣya (the Adhyāsa Bhāṣya) is a masterpiece of epistemological psychology, diagnosing how human beings confuse the subjective witness with objective mental states.',
    sepUrl: 'https://plato.stanford.edu/entries/shankara/',
    sepTitle: 'Śaṅkara (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'ramanuja',
    name: { english: 'Rāmānujācārya', iast: 'Rāmānuja', devanagari: 'रामानुज' },
    displayDates: 'c. 1017 – 1137 CE',
    approxYearStart: 1017,
    approxYearEnd: 1137,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Traditional dates span 120 years; historical consensus places his primary scholarly maturity around 1080–1130 CE.',
    tradition: 'Brahmanical / Āstika',
    schoolId: 'visistadvaita',
    region: 'Tamil Nadu (Śrīperumbūdūr / Śrīraṅgam)',
    primaryTexts: [
      { english: 'Śrī Bhāṣya (Great Commentary on Brahma Sūtra)', iast: 'Śrī Bhāṣya', devanagari: 'श्री भाष्य' },
      { english: 'Vedārthasaṃgraha', iast: 'Vedārthasaṃgraha', devanagari: 'वेदार्थसंग्रह' }
    ],
    majorContributions: [
      'Foundational synthesis of Qualified Non-Dualism (Viśiṣṭādvaita)',
      'Theological organic model of God as the Soul and the universe as His Body (Śarīra-Śarīrī)',
      'Epic refutation of Śaṅkara\'s doctrine of Māyā in the Saptavidha-anupapatti',
      'Integration of devotional surrender (Prapatti) with rigorous Upaniṣadic scholarship'
    ],
    famousDebatesOrOpponents: ['Yādavaprakāśa (his early teacher)', 'Advaita dialecticians'],
    famousQuote: {
      iast: 'Aśeṣa-cid-acid-prakāraṃ brahmaikaṃ eva tattvam.',
      english: 'Brahman alone is the sole reality, qualified by the infinite modes of conscious souls and unconscious matter.',
      source: 'Śrī Bhāṣya 1.1.1'
    },
    summary: 'The great theologian-philosopher of Viśiṣṭādvaita; mounted a devastating systematic critique of Advaita and established a personal, loving God as the inner soul of all conscious beings and matter.',
    understandBio: 'Rāmānuja democratized spiritual philosophy in medieval South India, welcoming marginalized social strata into the devotional fold of Śrī Vaiṣṇavism and arguing that God\'s grace is universally accessible through self-surrender (Śaraṇāgati).',
    scholarNotes: 'Rāmānuja\'s Śrī Bhāṣya carefully exegetes every Brahma Sūtra to prove that the Upaniṣads never teach an attribute-less, impersonal reality, but consistently praise the supreme qualities of the divine.',
    sepUrl: 'https://plato.stanford.edu/entries/ramanuja/',
    sepTitle: 'Rāmānuja (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'madhva',
    name: { english: 'Madhvācārya (Ānandatīrtha)', iast: 'Madhvācārya', devanagari: 'मध्वाचार्य' },
    displayDates: 'c. 1238 – 1317 CE',
    approxYearStart: 1238,
    approxYearEnd: 1317,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Epigraphically corroborated dates in Karnataka (Udupi).',
    tradition: 'Brahmanical / Āstika',
    schoolId: 'dvaita',
    region: 'Udupi / Pajaka (Modern Karnataka)',
    primaryTexts: [
      { english: 'Anuvyākhyāna', iast: 'Anuvyākhyāna', devanagari: 'अनुव्याख्यान' },
      { english: 'Viṣṇutattvavinirṇaya', iast: 'Viṣṇutattvavinirṇaya', devanagari: 'विष्णुतत्त्वविनिर्णय' }
    ],
    majorContributions: [
      'Systematization of Dvaita (Strict Dualism) Vedānta',
      'The doctrine of Five Eternal Differences (Pañca-bheda)',
      'Classification of reality into Svatantra (Independent) and Paratantra (Dependent)',
      'Introduction of the metaphysical principle of Viśeṣa (inherent particularity)'
    ],
    famousDebatesOrOpponents: ['Advaita Vedāntins of Sṛṅgerī', 'Sobhana Bhaṭṭa (converted to become Padmanābha Tīrtha)'],
    famousQuote: {
      iast: 'Bhedo na kevalaṃ pratyakṣa-siddhaḥ, api tu sarva-pramāṇa-siddhaḥ.',
      english: 'Difference is not merely proven by perception; it is validated by all instruments of knowledge without exception.',
      source: 'Anuvyākhyāna'
    },
    summary: 'Founder of Dvaita Vedānta; fierce opponent of non-dualism who championed the eternal reality of difference, the supreme independence of God, and common-sense realism.',
    understandBio: 'Madhva established the eight Maṭhas in Udupi, Karnataka. Known for his legendary physical strength and dialectical acumen, he rejected all monistic readings of the Vedas, arguing that texts declaring "Thou art That" (Tat Tvam Asi) had been distorted by Advaitins.',
    scholarNotes: 'Madhva\'s epistemology introduced the concept of the Sākṣin (the innate epistemic witness) as the ultimate arbiter of truth, preventing the infinite regress of justification.',
    sepUrl: 'https://plato.stanford.edu/entries/madhva/',
    sepTitle: 'Madhva (Stanford Encyclopedia of Philosophy)'
  },
  {
    id: 'abhinavagupta',
    name: { english: 'Abhinavagupta', iast: 'Abhinavagupta', devanagari: 'अभिनवगुप्त' },
    displayDates: 'c. 950 – 1020 CE',
    approxYearStart: 950,
    approxYearEnd: 1020,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Exact dates determined from the colophons of his dated works in Kashmir.',
    tradition: 'Śaiva',
    schoolId: 'kashmir-saivism',
    region: 'Kashmir Valley',
    primaryTexts: [
      { english: 'Tantrāloka (Light on the Tantras)', iast: 'Tantrāloka', devanagari: 'तन्त्रालोक' },
      { english: 'Īśvarapratyabhijñāvimarśinī', iast: 'Īśvarapratyabhijñāvimarśinī', devanagari: 'ईश्वरप्रत्यभिज्ञाविमर्शिनी' },
      { english: 'Abhinavabhāratī (Philosophy of Aesthetic Rasa)', iast: 'Abhinavabhāratī', devanagari: 'अभिनवभारती' }
    ],
    majorContributions: [
      'Grand synthesis of Kashmir Śaivism (Trika, Krama, Kula, and Pratyabhijñā)',
      'Metaphysics of divine sovereign freedom (Svātantrya) and dynamic pulsation (Spanda)',
      'Revolutionary aesthetic theory of Rasa: artistic experience as a tasting of spiritual non-duality',
      'Mastery across philosophy, dramaturgy, linguistics, and esoteric Tantra'
    ],
    famousDebatesOrOpponents: ['Buddhist logicians', 'Dualistic Śaiva Siddhānta theologians'],
    famousQuote: {
      iast: 'Prakāśasya ātmaviśrāntiḥ ahaṃbhāvaḥ.',
      english: 'The resting of pure luminosity within itself is the supreme I-consciousness.',
      source: 'Īśvarapratyabhijñāvimarśinī'
    },
    summary: 'The universal genius of medieval Kashmir; unified Tantric metaphysics, aesthetic philosophy (Rasa), and non-dual recognition (Pratyabhijñā) into an unrivaled spiritual system.',
    understandBio: 'Abhinavagupta studied under teachers across diverse traditions in the culturally flourishing Kashmir valley. His masterwork Tantrāloka harmonizes all prior philosophical streams, showing that the physical universe is the vibrant play of consciousness delighting in its own freedom.',
    scholarNotes: 'Abhinavagupta\'s commentary on Bharata\'s Nāṭyaśāstra (the Abhinavabhāratī) introduced the concept of Sādhāraṇīkaraṇa (aesthetic universalization), connecting artistic contemplation directly with spiritual liberation.',
    sepUrl: 'https://iep.utm.edu/',
    sepTitle: 'Kashmir Śaivism (Internet Encyclopedia of Philosophy)'
  },
  {
    id: 'gangesa',
    name: { english: 'Gaṅgeśa Upādhyāya', iast: 'Gaṅgeśa Upādhyāya', devanagari: 'गङ्गेश उपाध्याय' },
    displayDates: 'c. 14th Century CE (fl. c. 1325 CE)',
    approxYearStart: 1300,
    approxYearEnd: 1360,
    dateEpistemicStatus: 'Scholarly Consensus',
    datingNote: 'Lived in Mithila; text establishes the terminus post quem for the Navya-Nyāya revolution.',
    tradition: 'Brahmanical / Āstika',
    schoolId: 'nyaya',
    region: 'Mithila (Modern Bihar)',
    primaryTexts: [
      { english: 'Tattvacintāmaṇi (The Jewel of Reflection on Reality)', iast: 'Tattvacintāmaṇi', devanagari: 'तत्त्वचिन्तामणि' }
    ],
    majorContributions: [
      'Founder of Navya-Nyāya (New Logic)',
      'Invented an unambiguous formal metalanguage to specify logical relations without variables',
      'Systematized exact definitions of Vyāpti (invariable concomitance) through the rejection of defective definitions',
      'Shifted Indian philosophy toward rigorous formal semantic analysis'
    ],
    famousDebatesOrOpponents: ['Śrīharṣa (Advaitin author of Khaṇḍanakhaṇḍakhādya)', 'Buddhist epistemologists'],
    famousQuote: {
      iast: 'Yat-sambandhena yena rūpeṇa...',
      english: 'By which relation, in which form, delimited by which limiter...',
      source: 'Navya-Nyāya Analytical Formula'
    },
    summary: 'Founder of Navya-Nyāya (New Logic); revolutionized Indian scholasticism by creating a hyper-precise technical language for epistemological definitions.',
    understandBio: 'Working in Mithila, Gaṅgeśa wrote the 4-part Tattvacintāmaṇi analyzing the four Pramāṇas. His method was so rigorous that for the next four centuries, every Indian philosophical school (including Vedānta, Grammar, and Law) was forced to adopt his Navya-Nyāya technical vocabulary to remain academically credible.',
    scholarNotes: 'Gaṅgeśa formulated fourteen distinct definitions of Vyāpti before arriving at his canonical definition, demonstrating an awareness of logical rigor that rivals modern mathematical logic.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Early Modern Indian Philosophy (SEP)'
  },
  {
    id: 'vivekananda',
    name: { english: 'Swami Vivekananda', iast: 'Svāmī Vivekānanda', devanagari: 'स्वामी विवेकानन्द' },
    displayDates: '1863 – 1902 CE',
    approxYearStart: 1863,
    approxYearEnd: 1902,
    dateEpistemicStatus: 'Established Fact',
    datingNote: 'Modern historical biography.',
    tradition: 'Modern & Contemporary',
    schoolId: 'advaita-vedanta',
    region: 'Kolkata (Bengal) / Global',
    primaryTexts: [
      { english: 'Jnana Yoga, Karma Yoga, Bhakti Yoga, Raja Yoga', iast: 'Catur-Yoga', devanagari: 'चतुर्योग' }
    ],
    majorContributions: [
      'Pioneered "Practical Vedānta" (transforming metaphysics into social service)',
      'Presented Indian philosophy at the 1893 World\'s Parliament of Religions in Chicago',
      'Formulated a fourfold synthesis of Yogas (Knowledge, Action, Devotion, Meditation)',
      'Asserted the harmony of ancient spiritual wisdom with modern empirical science'
    ],
    famousDebatesOrOpponents: ['Colonial missionary caricatures', 'Orthodox social rigidity'],
    famousQuote: {
      iast: 'Uttiṣṭhata jāgrata prāpya varān nibodhata.',
      english: 'Arise, awake, and stop not till the goal is reached.',
      source: 'Address citing Kaṭha Upaniṣad'
    },
    summary: 'A towering figure in modern global philosophy; articulated Practical Vedānta, showing that realizing universal divine non-duality demands compassionate social action and service to humanity.',
    understandBio: 'Chief disciple of Sri Ramakrishna, Vivekananda modernized Vedānta to confront poverty, scientific materialism, and colonial self-doubt, proving that Advaita is an empowering universal human heritage.',
    scholarNotes: 'Scholars note that Vivekananda\'s synthesis harmonized traditional Śaṅkarian Advaita with modern universalism, creating the template for global cross-cultural philosophy.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Modern Indian Philosophy (SEP)'
  },
  {
    id: 'aurobindo',
    name: { english: 'Sri Aurobindo', iast: 'Śrī Aurobindo', devanagari: 'श्री अरविन्द' },
    displayDates: '1872 – 1950 CE',
    approxYearStart: 1872,
    approxYearEnd: 1950,
    dateEpistemicStatus: 'Established Fact',
    datingNote: 'Modern historical biography.',
    tradition: 'Modern & Contemporary',
    schoolId: 'advaita-vedanta',
    region: 'Kolkata / Pondicherry',
    primaryTexts: [
      { english: 'The Life Divine', iast: 'The Life Divine', devanagari: 'द लाइफ डिवाइन' },
      { english: 'The Synthesis of Yoga', iast: 'The Synthesis of Yoga', devanagari: 'द सिंथेसिस ऑफ योग' }
    ],
    majorContributions: [
      'Evolutionary spiritual metaphysics (Matter evolving toward Mind, Overmind, and Supermind)',
      'Rejection of world-denying illusionism: the world is an evolutionary manifestation of the Divine',
      'Integral Yoga (Pūrṇa Yoga): divine transformation of life on earth rather than escape',
      'Mastery of comparative classical Western and Indian philosophical canons'
    ],
    famousDebatesOrOpponents: ['Traditional ascetic world-denying illusionism', 'Western mechanistic materialism'],
    famousQuote: {
      iast: 'Matter is the body of the spirit; spirit is the soul of matter.',
      english: 'An involution of the spirit in matter is the indispensable prior condition for an evolution of matter to spirit.',
      source: 'The Life Divine'
    },
    summary: 'Revolutionary philosopher-poet who constructed an evolutionary cosmology (The Life Divine), asserting that human consciousness is evolving toward a supramental divinization of earthly life.',
    understandBio: 'Educated at Cambridge, Aurobindo was initially a leader in India\'s anti-colonial freedom movement before withdrawing to Pondicherry for deep spiritual and philosophical contemplation.',
    scholarNotes: 'Aurobindo\'s thought represents a creative dialectical synthesis of Hegelian-Bergsonian evolutionism with ancient Upaniṣadic and Tantric non-dualism.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Modern Indian Philosophy (SEP)'
  },
  {
    id: 'ambedkar',
    name: { english: 'Dr. B. R. Ambedkar', iast: 'B. R. Āmbeḍkar', devanagari: 'बी. आर. आम्बेडकर' },
    displayDates: '1891 – 1956 CE',
    approxYearStart: 1891,
    approxYearEnd: 1956,
    dateEpistemicStatus: 'Established Fact',
    datingNote: 'Chief Architect of the Constitution of India; Columbia PhD, DSc from LSE.',
    tradition: 'Modern & Contemporary',
    schoolId: 'early-buddhism',
    region: 'Maharashtra / New Delhi / Nagpur',
    primaryTexts: [
      { english: 'The Buddha and His Dhamma', iast: 'The Buddha and His Dhamma', devanagari: 'द बुद्ध ऐण्ड हिज धम्म' },
      { english: 'Annihilation of Caste', iast: 'Annihilation of Caste', devanagari: 'एनिहिलेशन ऑफ कास्ट' },
      { english: 'Philosophy of Hinduism', iast: 'Philosophy of Hinduism', devanagari: 'फिलॉसफी ऑफ हिन्दुइज्म' }
    ],
    majorContributions: [
      'Reconstructed Buddhism as a modern egalitarian moral philosophy of social emancipation (Navayāna)',
      'Rigorous philosophical critique of the Brahmanical caste hierarchy and social injustice',
      'Integrated liberty, equality, and fraternity into an indigenous moral-spiritual framework',
      'Led the mass conversion of millions of Dalits to Buddhism in 1956'
    ],
    famousDebatesOrOpponents: ['Mahatma Gandhi (on caste, village republics, and separate electorates)', 'Traditional orthodox social order'],
    famousQuote: {
      iast: 'Dhamma is morality. What is morality in Dhamma? It is love for all human beings.',
      english: 'Religion must be judged by social utility and justice. If a religion teaches inequality, it is an outrage against humanity.',
      source: 'The Buddha and His Dhamma'
    },
    summary: 'Pioneering social philosopher and chief architect of the Indian Constitution; revitalized Buddhism as Navayāna ("The New Vehicle"), centering philosophy on social equality, human dignity, and rational justice.',
    understandBio: 'Overcoming brutal untouchability, Ambedkar attained doctorates from Columbia University and the London School of Economics. His philosophical writings systematically dismantle hereditary social hierarchies, establishing that true morality (Dhamma) must be grounded in social justice and rational scrutiny.',
    scholarNotes: 'Ambedkar\'s Navayāna intentionally strips away supernatural cosmology, karma-fatalism, and monastic quietism from classical Buddhism to emphasize social compassion and institutional reform.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Modern Indian Philosophy (SEP)'
  },
  {
    id: 'matilal',
    name: { english: 'Bimal Krishna Matilal', iast: 'Bimal Krishna Matilal', devanagari: 'बिमल कृष्ण मतिलाल' },
    displayDates: '1935 – 1991 CE',
    approxYearStart: 1935,
    approxYearEnd: 1991,
    dateEpistemicStatus: 'Established Fact',
    datingNote: 'Spalding Professor of Eastern Religions and Ethics at Oxford University.',
    tradition: 'Modern & Contemporary',
    schoolId: 'nyaya',
    region: 'Kolkata / Harvard / Oxford University',
    primaryTexts: [
      { english: 'Epistemology, Logic, and Grammar in Indian Philosophical Analysis', iast: 'Epistemology, Logic, and Grammar', devanagari: 'एपिस्टेमोलॉजी, लॉजिक, ऐण्ड ग्रामर' },
      { english: 'Perception: An Essay on Classical Indian Theories of Knowledge', iast: 'Perception', devanagari: 'पर्सैप्शन' },
      { english: 'The Character of Logic in India', iast: 'The Character of Logic in India', devanagari: 'द कैरेक्टर ऑफ लॉजिक इन इण्डिया' }
    ],
    majorContributions: [
      'Bridge-builder between classical Indian logic (Nyāya, Buddhist Epistemology) and Anglo-American analytic philosophy',
      'Demonstrated that classical Indian debates were intensely analytical, logical, and rigorous (not merely "mystical")',
      'Pioneered comparative analysis of Indian realism against Quine, Strawson, and Kripke',
      'Trained an entire generation of modern scholars in rigorous Sanskrit philosophical hermeneutics'
    ],
    famousDebatesOrOpponents: ['Orientalist stereotypes of Indian thought as irrational/mystical', 'Western analytic parochialism'],
    famousQuote: {
      iast: 'Logic in India was not an isolated formal calculus; it was part of an overarching inquiry into the nature of knowledge, debate, and reality.',
      english: 'Classical Indian thinkers were rigorous analytic philosophers whose arguments deserve to sit at the same table as Russell, Frege, and Wittgenstein.',
      source: 'The Character of Logic in India'
    },
    summary: 'The pre-eminent scholar who dismantled orientalist myths by showing that classical Indian philosophy possesses a logic and epistemology as rigorous and analytical as modern Western philosophy.',
    understandBio: 'Trained traditionally as a Naiyāyika in Bengal and analytically at Harvard under W.V.O. Quine, Matilal served as Spalding Professor at Oxford. His groundbreaking books introduced Nyāya theories of perception, negation, and reference to international philosophy.',
    scholarNotes: 'Matilal\'s work on the problem of "absence" (abhāva) and empty terms remains a standard reference in contemporary international analytic epistemology.',
    sepUrl: 'https://plato.stanford.edu/entries/early-modern-india/',
    sepTitle: 'Indian Epistemology (SEP)'
  }
];

// ==========================================
// 6. VEDĀNTA DEBATE MATRIX (7 SYSTEMS COMPARED)
// ==========================================
export const VEDANTA_COMPARISON_MATRIX: VedantaComparisonRow[] = [
  {
    doctrine: 'Ultimate Reality (Brahman)',
    description: 'The nature, ontological status, and attributes of the supreme absolute ground of existence.',
    advaita: {
      position: 'Nirguṇa Brahman: unconditioned, qualityless, non-dual, pure consciousness without internal parts (Svajātīya-Vijātīya-Svagata-bheda-rahita).',
      technicalTerm: { english: 'Qualityless Non-Duality', iast: 'Nirguṇa Kevalādvaita', devanagari: 'निर्गुण केवलाद्वैत' },
      argumentAgainstOthers: 'Any positive attribute limits the Infinite; attributes belong only to empirical appearance (Māyā).'
    },
    visistadvaita: {
      position: 'Saguṇa Brahman: Narayana, possessed of infinite glorious attributes, having souls and matter as His real cosmic body.',
      technicalTerm: { english: 'Qualified Non-Duality', iast: 'Saguṇa Viśiṣṭādvaita', devanagari: 'सगुण विशिष्टाद्वैत' },
      argumentAgainstOthers: 'An attribute-less reality is a logical impossibility; whatever is known is known through qualities.'
    },
    dvaita: {
      position: 'Saguṇa Brahman (Vishnu): completely independent (Svatantra), absolute sovereign Lord, forever distinct from all souls and matter.',
      technicalTerm: { english: 'Independent Divine Dualism', iast: 'Svatantra-Tattva', devanagari: 'स्वतन्त्र-तत्त्व' },
      argumentAgainstOthers: 'To equate the finite, suffering soul with the omnipotent, perfect Lord is the ultimate blasphemy.'
    },
    otherSystems: [
      {
        systemName: 'Bhedābheda (Bhāskara)',
        position: 'Brahman is simultaneously identical with and different from the world (inherent non-dual cause, modified as finite effects).',
        technicalTerm: { english: 'Identity-in-Difference', iast: 'Bhedābheda', devanagari: 'भेदाभेद' }
      },
      {
        systemName: 'Śuddhādvaita (Vallabha)',
        position: 'Pure Non-Dualism: Brahman is Krishna, who manifests souls and matter without the mediation of illusory Māyā.',
        technicalTerm: { english: 'Pure Non-Dualism', iast: 'Śuddhādvaita', devanagari: 'शुद्धाद्वैत' }
      },
      {
        systemName: 'Acintya-bhedābheda (Caitanya / Jīva Gosvāmī)',
        position: 'Inconceivable simultaneous difference and non-difference between God (the Energetic) and creation (His Energies).',
        technicalTerm: { english: 'Inconceivable Difference/Non-Difference', iast: 'Acintya-bhedābheda', devanagari: 'अचिन्त्यभेदाभेद' }
      }
    ]
  },
  {
    doctrine: 'Nature of the Self (Ātman / Jīva)',
    description: 'The ontological status, multiplicity, and agency of individual conscious beings.',
    advaita: {
      position: 'The Jīva is strictly identical with Brahman; its apparent individuality is a false superimposition (Upādhi) of the mind-body complex.',
      technicalTerm: { english: 'Universal Witness Self', iast: 'Ātmaiva Brahma', devanagari: 'आत्मैव ब्रह्म' },
      argumentAgainstOthers: 'If souls were genuinely multiple and limited, they would be subject to destruction and could never attain eternal liberation.'
    },
    visistadvaita: {
      position: 'Individual souls (Jīvas) are real, atomic (aṇu), infinite in number, and eternal distinct modes forming the body of God.',
      technicalTerm: { english: 'Real Dependent Soul', iast: 'Aṇu-Jīva / Śeṣa', devanagari: 'अणु-जीव / शेष' },
      argumentAgainstOthers: 'If the soul were identical with Brahman, Brahman would suffer the agony, delusion, and karma of every embodied creature.'
    },
    dvaita: {
      position: 'Souls are eternally distinct from God and from one another; each soul has an innate, unalterable spiritual capacity (Svarūpa).',
      technicalTerm: { english: 'Eternal Plural Souls', iast: 'Jīva-bheda', devanagari: 'जीव-भेद' },
      argumentAgainstOthers: 'Scripture, memory, and personal identity directly prove that souls are forever individual and never become God.'
    },
    otherSystems: [
      {
        systemName: 'Śuddhādvaita',
        position: 'Souls are sparks of God from which divine bliss (Ānanda) is temporarily concealed.',
        technicalTerm: { english: 'Sparks of the Divine', iast: 'Aṃśa-Jīva', devanagari: 'अंश-जीव' }
      }
    ]
  },
  {
    doctrine: 'Status of the Empirical World (Jagat)',
    description: 'Is the physical universe ultimately real, a real transformation, or an illusory projection?',
    advaita: {
      position: 'Mithyā (Anirvacanīya): the world is empirically real (Vyāvahārika) but sublated upon awakening to absolute Brahman.',
      technicalTerm: { english: 'Apparent Superimposition', iast: 'Vivarta / Mithyā', devanagari: 'विवर्त / मिथ्या' },
      argumentAgainstOthers: 'Change implies imperfection; if the world were a real physical transformation of Brahman, Brahman would undergo decay.'
    },
    visistadvaita: {
      position: 'Fully real: the universe is a genuine physical modification (Pariṇāma) of God\'s subtle material energy (Acit).',
      technicalTerm: { english: 'Real Cosmic Body', iast: 'Brahma-Pariṇāma', devanagari: 'ब्रह्म-परिणाम' },
      argumentAgainstOthers: 'Calling God\'s creation a false illusion slanders divine power and contradicts empirical perception.'
    },
    dvaita: {
      position: 'Eternally real (Satya): the physical universe is an independent material principle (Prakṛti) energized and commanded by Viṣṇu.',
      technicalTerm: { english: 'Eternal Real World', iast: 'Jagat-Satyam', devanagari: 'जगत्-सत्यम्' },
      argumentAgainstOthers: 'To declare the world illusory is indistinguishable from Buddhist nihilism (Śūnyavāda).'
    },
    otherSystems: [
      {
        systemName: 'Acintya-bhedābheda',
        position: 'The world is the real transformation of God\'s external energy (Māyā-śakti), existing as a real field for divine play.',
        technicalTerm: { english: 'Transformation of Energy', iast: 'Śakti-Pariṇāmavāda', devanagari: 'शक्ति-परिणामवाद' }
      }
    ]
  },
  {
    doctrine: 'Nature of Liberation (Mokṣa) & Means',
    description: 'What happens at liberation and what primary path delivers it?',
    advaita: {
      position: 'Realization of non-duality right here in this body (Jīvanmukti); attained solely through pure intellectual-spiritual insight (Jñāna).',
      technicalTerm: { english: 'Liberation through Insight', iast: 'Jñānān Mokṣaḥ', devanagari: 'ज्ञानान् मोक्षः' },
      argumentAgainstOthers: 'Action (Karma) cannot remove ignorance; only knowledge dispels the darkness of false identification.'
    },
    visistadvaita: {
      position: 'Entry into the divine presence of Narayana (Videhamukti); attained through loving devotion (Bhakti) and total self-surrender (Prapatti).',
      technicalTerm: { english: 'Liberation through Surrender', iast: 'Prapatti / Śaraṇāgati', devanagari: 'प्रपत्ति / शरणागति' },
      argumentAgainstOthers: 'Mere intellectual contemplation without divine grace and loving relationship is cold and impotent.'
    },
    dvaita: {
      position: 'Residing in Vaikuṇṭha in eternal blissful service; granted exclusively by the sovereign, uncompelled grace (Prasāda) of Viṣṇu.',
      technicalTerm: { english: 'Liberation through Divine Grace', iast: 'Viṣṇu-Prasāda', devanagari: 'विष्णु-प्रसाद' },
      argumentAgainstOthers: 'No amount of human effort or meditation can force liberation without the sovereign delight of God.'
    },
    otherSystems: [
      {
        systemName: 'Śuddhādvaita',
        position: 'Pushti-marga (The Path of Grace): participating in the eternal, loving divine play (Rāsa-līlā) of Krishna.',
        technicalTerm: { english: 'Path of Divine Nourishment', iast: 'Puṣṭi-Mārga', devanagari: 'पुष्टि-मार्ग' }
      }
    ]
  }
];

// ==========================================
// 7. THE PROBLEMS OF INDIAN PHILOSOPHY ("EXPLORE BY QUESTION")
// ==========================================
export const INDIAN_PROBLEMS: IndianProblem[] = [
  {
    id: 'problem-self',
    question: 'Is there an eternal, permanent self?',
    sanskritQuestion: {
      english: 'Inquiry into the Permanent Self',
      iast: 'Kiṃ nityo\'yaṃ ātmā?',
      devanagari: 'किं नित्योऽयं आत्मा?'
    },
    domain: 'Metaphysics',
    theDilemma: 'If there is a permanent self, how does it undergo changes, experience suffering, and interact with an impermanent body? If there is no self, what transmigrates, remembers, and bears the moral consequences of karma?',
    historicalSignificance: 'The supreme battleground dividing Brahmanical orthodoxy (Āstika) from Buddhist heterodoxy (Nāstika), driving over a millennium of rigorous epistemology.',
    stances: [
      {
        schoolId: 'nyaya',
        schoolName: { english: 'Nyāya-Vaiśeṣika', iast: 'Nyāya-Vaiśeṣika', devanagari: 'न्याय-वैशेषिक' },
        stanceType: 'YES',
        conciseFormula: 'Yes: Ātman is an eternal, real, plural substance.',
        coreArgument: 'Recognition (pratyabhijñā) and memory prove that the entity experiencing today must be identical with the entity that experienced yesterday.',
        keyConcepts: ['Ātman', 'Substance (Dravya)', 'Recognition'],
        citationOrSutra: 'Nyāya Sūtra 1.1.10'
      },
      {
        schoolId: 'early-buddhism',
        schoolName: { english: 'Buddhism', iast: 'Bauddha', devanagari: 'बौद्ध' },
        stanceType: 'NO',
        conciseFormula: 'No: Anātman (No-Self). The self is an illusion.',
        coreArgument: 'Careful phenomenological inspection reveals only changing physical and mental aggregates (skandhas). Positing an unobservable permanent soul behind experience is a dogmatic hallucination.',
        keyConcepts: ['Anātman', 'Five Aggregates (Skandhas)', 'Dependent Origination'],
        citationOrSutra: 'Anattalakkhaṇa Sutta (SN 22.59)'
      },
      {
        schoolId: 'advaita-vedanta',
        schoolName: { english: 'Advaita Vedānta', iast: 'Advaita', devanagari: 'अद्वैत' },
        stanceType: 'YES',
        conciseFormula: 'Yes: but Ātman is one, non-dual, and identical with Brahman.',
        coreArgument: 'The self is the self-illuminating witness (Sākṣin). You can doubt any object, but you cannot doubt the existence of the doubter.',
        keyConcepts: ['Ātman-Brahman Identity', 'Sākṣin (Witness)', 'Self-Luminosity (Svayaṃprakāśa)'],
        citationOrSutra: 'Brahma Sūtra Bhāṣya 1.1.1'
      },
      {
        schoolId: 'jainism',
        schoolName: { english: 'Jainism', iast: 'Jaina', devanagari: 'जैन' },
        stanceType: 'QUALIFIED',
        conciseFormula: 'Both Yes and No: Jīva is eternal as substance, changing as mode.',
        coreArgument: 'From the standpoint of substance (Dravyāstika-naya), the soul is eternal and unchanging; from the standpoint of modification (Paryāyāstika-naya), it contracts, expands, and changes with its embodiment.',
        keyConcepts: ['Jīva', 'Anekāntavāda', 'Standpoint Theory (Nayavāda)'],
        citationOrSutra: 'Tattvārtha Sūtra 5.29'
      },
      {
        schoolId: 'carvaka',
        schoolName: { english: 'Cārvāka / Lokāyata', iast: 'Cārvāka', devanagari: 'चार्वाक' },
        stanceType: 'REJECTS_FRAMEWORK',
        conciseFormula: 'Rejects: The self is nothing other than the living body (Dehātmavāda).',
        coreArgument: 'No soul is ever observed detached from a physical body. When the body dies, consciousness dissolves forever.',
        keyConcepts: ['Dehātmavāda', 'Emergent Consciousness', 'Physicalism'],
        citationOrSutra: 'Sarvadarśanasaṃgraha Ch. 1'
      }
    ]
  },
  {
    id: 'problem-reality',
    question: 'Is the external world ultimately real?',
    sanskritQuestion: {
      english: 'Inquiry into External Reality',
      iast: 'Kiṃ satyaṃ bāhyam jagat?',
      devanagari: 'किं सत्यं बाह्यं जगत्?'
    },
    domain: 'Metaphysics',
    theDilemma: 'Do physical objects exist independently of mental awareness, or is the perceived universe a projection of mind or cosmic illusion?',
    historicalSignificance: 'Formulated the spectrum from direct realism to representationalism, subjective idealism, and non-dual illusionism.',
    stances: [
      {
        schoolId: 'nyaya',
        schoolName: { english: 'Nyāya-Vaiśeṣika', iast: 'Nyāya', devanagari: 'न्याय' },
        stanceType: 'YES',
        conciseFormula: 'Yes: Direct Realism (Bāhyārtha-pratyakṣatva).',
        coreArgument: 'We perceive external objects directly. If mind created objects, we could not distinguish between a dream pot and a physical pot that holds water.',
        keyConcepts: ['External Realism', 'Correspondence', 'Atomic Composition'],
        citationOrSutra: 'Nyāya Bhāṣya 4.2.33'
      },
      {
        schoolId: 'yogacara',
        schoolName: { english: 'Yogācāra Buddhism', iast: 'Yogācāra / Vijñaptimātra', devanagari: 'योगाचार / विज्ञप्तिमात्र' },
        stanceType: 'NO',
        conciseFormula: 'No: Mind-Only (Vijñaptimātratā).',
        coreArgument: 'Consciousness and the perceived object are never observed separately (sahopalambha-niyama). External atoms cannot be logically combined into composite wholes.',
        keyConcepts: ['Vijñaptimātra', 'Storehouse Consciousness (Ālayavijñāna)', 'Simultaneous Apprehension'],
        citationOrSutra: 'Viṃśatikā Kārikā (Vasubandhu) v. 1'
      },
      {
        schoolId: 'advaita-vedanta',
        schoolName: { english: 'Advaita Vedānta', iast: 'Advaita', devanagari: 'अद्वैत' },
        stanceType: 'QUALIFIED',
        conciseFormula: 'Mithyā: empirically real, but ultimately an apparent superimposition.',
        coreArgument: 'The world is not non-existent like a square circle (asat); it is experienced as real until sublated by the knowledge of non-dual Brahman.',
        keyConcepts: ['Vivartavāda', 'Māyā', 'Three Levels of Reality'],
        citationOrSutra: 'Śārīraka Bhāṣya 2.1.14'
      },
      {
        schoolId: 'madhyamaka',
        schoolName: { english: 'Madhyamaka', iast: 'Madhyamaka', devanagari: 'माध्यमक' },
        stanceType: 'TRANSCENDED',
        conciseFormula: 'Neither real nor unreal: Emptiness (Śūnyatā).',
        coreArgument: 'To claim the world is "real" asserts an uncaused essence (svabhāva); to claim it is "unreal" denies conventional dependent experience.',
        keyConcepts: ['Niḥsvabhāva', 'Two Truths (Satyadvaya)', 'Middle Way'],
        citationOrSutra: 'Mūlamadhyamakakārikā 24.18'
      }
    ]
  },
  {
    id: 'problem-god',
    question: 'Does an omnipotent Creator God (Īśvara) exist?',
    sanskritQuestion: {
      english: 'Inquiry into Īśvara\'s Existence',
      iast: 'Kiṃ asti jagat-kartā Īśvaraḥ?',
      devanagari: 'किं अस्ति जगत्कर्ता ईश्वरः?'
    },
    domain: 'Philosophy of Religion',
    theDilemma: 'If God is all-powerful and compassionate, why is the universe filled with suffering and evil? If the universe runs by beginningless karma and atomic laws, what need is there for God?',
    historicalSignificance: 'Pitted theistic schools (Nyāya, Vedānta) against non-theistic orthodox schools (Sāṃkhya, Mīmāṃsā) and heterodox traditions (Buddhism, Jainism, Cārvāka).',
    stances: [
      {
        schoolId: 'nyaya',
        schoolName: { english: 'Nyāya (Udayana)', iast: 'Nyāya', devanagari: 'न्याय' },
        stanceType: 'YES',
        conciseFormula: 'Yes: God is rationally proven as the cosmic architect.',
        coreArgument: 'Kāryatvāt: The physical universe is composite like a clay pot, and therefore requires an intelligent, conscious agent (Īśvara) to combine atoms and dispense moral karma.',
        keyConcepts: ['Cosmological Argument', 'Teleological Proof', 'Udayana\'s Kusumāñjali'],
        citationOrSutra: 'Nyāyakusumāñjali 5.1'
      },
      {
        schoolId: 'purva-mimamsa',
        schoolName: { english: 'Mīmāṃsā (Kumārila)', iast: 'Mīmāṃsā', devanagari: 'मीमांसा' },
        stanceType: 'NO',
        conciseFormula: 'No: The universe was never created and needs no God.',
        coreArgument: 'If God had no physical body, how could He act upon matter? If He had a body, that body would require a creator. Furthermore, creating a world of agony would make God cruel or incompetent.',
        keyConcepts: ['Beginningless Universe', 'Karma Sufficiency', 'Atheistic Realism'],
        citationOrSutra: 'Ślokavārttika Sambandhākṣepaparihāra'
      },
      {
        schoolId: 'early-buddhism',
        schoolName: { english: 'Buddhism', iast: 'Bauddha', devanagari: 'बौद्ध' },
        stanceType: 'NO',
        conciseFormula: 'No: Dependent Origination explains all without a prime mover.',
        coreArgument: 'If everything arises from God, then virtue and crime both arise from God, destroying moral accountability. Creation from nothing is logically impossible.',
        keyConcepts: ['Dependent Origination', 'Moral Autonomy', 'Critique of Īśvara'],
        citationOrSutra: 'Brahmajāla Sutta (DN 1)'
      },
      {
        schoolId: 'visistadvaita',
        schoolName: { english: 'Viśiṣṭādvaita (Rāmānuja)', iast: 'Viśiṣṭādvaita', devanagari: 'विशिष्टाद्वैत' },
        stanceType: 'YES',
        conciseFormula: 'Yes: God is known solely through scripture, not dry inference.',
        coreArgument: 'Rāmānuja refutes Nyāya\'s rational proofs for God, demonstrating that God\'s infinite nature can only be established through Vedic revelation (Śabda), not empirical inference.',
        keyConcepts: ['Śabda-Pramāṇa for God', 'Nārāyaṇa', 'Divine Grace'],
        citationOrSutra: 'Śrī Bhāṣya 1.1.3'
      }
    ]
  }
];

// ==========================================
// 8. CONCEPT LEXICON & CROSS-SCHOOL GRAPH
// ==========================================
export const INDIAN_CONCEPTS: IndianConcept[] = [
  {
    id: 'atman',
    name: { english: 'The Self / Soul', iast: 'Ātman', devanagari: 'आत्मन्' },
    category: 'Metaphysics',
    definition: 'The innermost spiritual essence, subject of experience, and enduring core of conscious beings.',
    thePhilosophicalProblem: 'What is the subject that unifies perceptions across time, remembers past experiences, and attains liberation?',
    schoolsUsingConcept: [
      { schoolId: 'advaita-vedanta', interpretation: 'Identical with unconditioned non-dual Brahman; the universal witness (Sākṣin).' },
      { schoolId: 'nyaya', interpretation: 'An enduring individual substance that is the substrate of qualities like cognition, desire, and pain.' },
      { schoolId: 'visistadvaita', interpretation: 'An individual, atomic, conscious mode forming the real body of God.' }
    ],
    schoolsRejectingOrRedefining: [
      { schoolId: 'early-buddhism', critique: 'Rejected as Anātman (No-Self): an illusion generated by craving and grasping onto the five impermanent aggregates.' },
      { schoolId: 'carvaka', critique: 'Rejected: consciousness is merely an emergent byproduct of the living physical body.' }
    ],
    historicalTrajectory: [
      { epoch: 'Early Upaniṣads (c. 750 BCE)', development: 'Yājñavalkya identifies Ātman as the true immortal ground beyond death.' },
      { epoch: 'Śramaṇa Period (c. 500 BCE)', development: 'Buddha directly negates the existence of an independent Ātman.' },
      { epoch: 'Classical Scholasticism (c. 800 CE)', development: 'Śaṅkara establishes Ātman as non-dual awareness; Rāmānuja and Madhva defend its permanent individuality.' }
    ],
    primarySources: ['Bṛhadāraṇyaka Upaniṣad 4.4', 'Brahma Sūtra 1.1.1', 'Nyāya Sūtra 1.1.10'],
    antiAnachronismNote: {
      modernComparison: 'Cartesian Soul / Ego',
      historicalQualification: 'Ātman in classical Indian thought is not the psychological ego (Ahaṃkāra) or intellect; it is the ontological witness that observes mental activity.'
    }
  },
  {
    id: 'pratityasamutpada',
    name: { english: 'Dependent Origination', iast: 'Pratītyasamutpāda', devanagari: 'प्रतीत्यसमुत्पाद', paliPrakrit: 'Paṭiccasamuppāda' },
    category: 'Metaphysics',
    definition: 'The universal principle that all phenomena arise conditionally in dependence upon prior causes, without an uncaused first cause.',
    thePhilosophicalProblem: 'How does change, suffering, and moral causality occur without requiring an eternal prime mover or falling into nihilistic accidentalism?',
    schoolsUsingConcept: [
      { schoolId: 'early-buddhism', interpretation: 'The 12-link causal chain (Nidānas) explaining rebirth and the cessation of suffering.' },
      { schoolId: 'madhyamaka', interpretation: 'Identified with Emptiness (Śūnyatā): because all things arise dependently, they lack intrinsic essence.' },
      { schoolId: 'yogacara', interpretation: 'The dependent nature (paratantra-svabhāva) of consciousness streams.' }
    ],
    schoolsRejectingOrRedefining: [
      { schoolId: 'nyaya', critique: 'Objects that are composite require a conscious overseer (Īśvara) to coordinate atomic interactions.' },
      { schoolId: 'advaita-vedanta', critique: 'Causality itself is an empirical illusion; nothing is truly born (Ajātivāda).' }
    ],
    historicalTrajectory: [
      { epoch: 'Early Buddhism (c. 5th C. BCE)', development: 'Formulated by the Buddha upon enlightenment as the middle path between eternalism and annihilationism.' },
      { epoch: 'Madhyamaka (c. 2nd C. CE)', development: 'Nāgārjuna equates Dependent Origination with Emptiness (MMK 24.18).' }
    ],
    primarySources: ['Maha-nidāna Sutta (DN 15)', 'Mūlamadhyamakakārikā Ch. 1 & 24'],
    antiAnachronismNote: {
      modernComparison: 'Universal Determinism / Systems Theory',
      historicalQualification: 'Unlike Newtonian physical determinism, Pratītyasamutpāda incorporates moral phenomenology and is designed specifically to dismantle existential suffering.'
    }
  },
  {
    id: 'anekantavada',
    name: { english: 'Many-Sidedness of Reality', iast: 'Anekāntavāda', devanagari: 'अनेकान्तवाद' },
    category: 'Epistemology',
    definition: 'The doctrine that reality possesses infinite facets and cannot be exhausted by any single dogmatic philosophical description.',
    thePhilosophicalProblem: 'How can contradictory assertions (permanence vs change, one vs many, identity vs difference) both capture aspects of the same reality?',
    schoolsUsingConcept: [
      { schoolId: 'jainism', interpretation: 'Supreme epistemological methodology: reality is complex (anekānta); every statement must be conditional (syādvāda).' }
    ],
    schoolsRejectingOrRedefining: [
      { schoolId: 'advaita-vedanta', critique: 'Śaṅkara argues that contradictory qualities cannot exist in the same substance at the same time.' },
      { schoolId: 'buddhist-epistemology', critique: 'Dharmakīrti argues that non-committal predication paralyzes rational inference.' }
    ],
    historicalTrajectory: [
      { epoch: 'Ancient Jain Canon', development: 'Mahāvīra uses contextual analysis to resolve metaphysical dilemmas.' },
      { epoch: 'Classical Jain Scholasticism (c. 5th–8th C. CE)', development: 'Umāsvāti, Siddhasena, and Haribhadra construct the formal logic of Syādvāda and Nayavāda.' }
    ],
    primarySources: ['Tattvārtha Sūtra 5.29', 'Sanmatitarka (Siddhasena)', 'Anekāntajayapatākā (Haribhadra)'],
    antiAnachronismNote: {
      modernComparison: 'Epistemic Pluralism & Quantum Complementarity',
      historicalQualification: 'Anekāntavāda is not subjective relativism; it asserts that reality possesses real, objective, complex facets that require intellectual humility.'
    }
  },
  {
    id: 'sunyata',
    name: { english: 'Emptiness / Openness', iast: 'Śūnyatā', devanagari: 'शून्यता', paliPrakrit: 'Suññatā' },
    category: 'Metaphysics',
    definition: 'The profound absence of independent, uncaused, permanent intrinsic existence (svabhāva) in all entities.',
    thePhilosophicalProblem: 'How can anything exist or change if things have fixed, eternal identities?',
    schoolsUsingConcept: [
      { schoolId: 'madhyamaka', interpretation: 'The ultimate truth: all dharmas are empty because they arise dependently.' },
      { schoolId: 'yogacara', interpretation: 'The absence of subject-object duality in pure consciousness.' }
    ],
    schoolsRejectingOrRedefining: [
      { schoolId: 'nyaya', critique: 'Rejected as nihilism: if things were empty, fire would not burn and pots would not hold water.' },
      { schoolId: 'visistadvaita', critique: 'Rejected: emptiness cannot be an ontological foundation.' }
    ],
    historicalTrajectory: [
      { epoch: 'Prajñāpāramitā Sūtras (c. 100 BCE)', development: 'Earliest expressions: "Form is emptiness, emptiness is form."' },
      { epoch: 'Nāgārjuna (c. 200 CE)', development: 'Philosophical formalization: Śūnyatā = Pratītyasamutpāda.' }
    ],
    primarySources: ['Heart Sūtra (Prajñāpāramitā Hṛdaya)', 'Mūlamadhyamakakārikā Ch. 24'],
    antiAnachronismNote: {
      modernComparison: 'Nihilism / Void',
      historicalQualification: 'Śūnyatā is NOT nihilism (nothingness). As Nāgārjuna famously stated: "For whom emptiness is possible, all things are possible."'
    }
  },
  {
    id: 'brahman',
    name: { english: 'The Ultimate Ground of Being', iast: 'Brahman', devanagari: 'ब्रह्मन्' },
    category: 'Metaphysics',
    definition: 'The infinite, eternal, uncaused source, ground, and goal of the entire universe (Sat-Cit-Ānanda).',
    thePhilosophicalProblem: 'What is the ultimate, non-contingent fabric and origin of all reality?',
    schoolsUsingConcept: [
      { schoolId: 'advaita-vedanta', interpretation: 'Pure, qualityless, non-dual consciousness (Nirguṇa Brahman); the sole absolute reality.' },
      { schoolId: 'visistadvaita', interpretation: 'Supreme personal Lord (Saguṇa Brahman / Nārāyaṇa) endowed with infinite auspicious qualities.' },
      { schoolId: 'dvaita', interpretation: 'Lord Viṣṇu, completely independent, sovereign creator and sustainer.' }
    ],
    schoolsRejectingOrRedefining: [
      { schoolId: 'early-buddhism', critique: 'Rejected: all reality is conditioned and momentary; an eternal cosmic ground is unproven.' },
      { schoolId: 'jainism', critique: 'Rejected: reality consists of beginningless independent souls and matter.' },
      { schoolId: 'carvaka', critique: 'Rejected: only material elements exist.' }
    ],
    historicalTrajectory: [
      { epoch: 'Rigveda (c. 1200 BCE)', development: 'Originally prayer or sacred speech; develops in Upaniṣads into the supreme metaphysical ground.' },
      { epoch: 'Brahma Sūtra (c. 200 BCE)', development: 'Synthesized into aphoristic system.' },
      { epoch: 'Vedānta Dialectics (800–1600 CE)', development: 'Debated as either impersonal non-dual consciousness or supreme personal God.' }
    ],
    primarySources: ['Chāndogya Upaniṣad 3.14.1 (Sarvaṃ khalv idaṃ brahma)', 'Taittirīya Upaniṣad 3.1', 'Brahma Sūtra 1.1.2'],
    antiAnachronismNote: {
      modernComparison: 'Spinoza\'s Substance (Deus sive Natura)',
      historicalQualification: 'Brahman in Advaita is not mere nature or physical pantheism, but pure transcendental awareness beyond subject-object division.'
    }
  }
];

// ==========================================
// 9. HISTORICAL DEBATES (INTER-SCHOOL DIALECTICS)
// ==========================================
export const INDIAN_DEBATES: IndianDebate[] = [
  {
    id: 'debate-nyaya-buddhist-self',
    title: 'The Great Self Debate: Nyāya vs. Buddhist Epistemology',
    corePhilosophicalIssue: 'Does an enduring, unitary conscious self (Ātman) exist, or is the self merely an illusion constructed by momentary mental states (Anātman)?',
    parties: {
      sideA: {
        schoolId: 'nyaya',
        name: { english: 'Nyāya Realists', iast: 'Naiyāyika', devanagari: 'नैयायिक' },
        representativeThinker: { english: 'Uddyotakara / Vācaspati Miśra', iast: 'Uddyotakara', devanagari: 'उद्योतकर' },
        thesis: 'The self is an enduring, substantial entity distinct from physical and mental states.',
        coreArguments: [
          'Recognition (Pratyabhijñā): The experience "I who saw yesterday am touching today" requires an identical continuing subject across time.',
          'Memory and moral accountability: If all states are momentary, one person acts and another suffers the karmic consequence, destroying moral law.',
          'Desire (Icchā) and synthesis: A visual sense-organ cannot desire what an auditory sense-organ experienced; only a central soul synthesizing both can explain desire.'
        ]
      },
      sideB: {
        schoolId: 'buddhist-epistemology',
        name: { english: 'Buddhist Epistemologists', iast: 'Bauddha Pramāṇavādin', devanagari: 'बौद्ध प्रमाणवादिन्' },
        representativeThinker: { english: 'Dharmakīrti / Vasubandhu', iast: 'Dharmakīrti', devanagari: 'धर्मकीर्ति' },
        thesis: 'There is no substantial self; personal identity is a causal continuum (Santāna) of momentary events.',
        coreArguments: [
          'Causal efficacy (Arthakriyākāritva) is the criterion of reality. An unchanging eternal self cannot act or change; therefore it is causally inert and unreal.',
          'Memory and recognition are explained by the unbroken causal transmission of impression-seeds (Vāsanās) along the mind-stream, like a flame passing heat to a wick.',
          'The illusion of a self is the root cause of selfish grasping, hatred, and saṃsāric suffering.'
        ]
      }
    },
    historicalLocusAndTexts: 'Spanned from the 5th to the 11th century CE; articulated in Vasubandhu\'s Abhidharmakośa, Uddyotakara\'s Nyāyavārttika, Dharmakīrti\'s Pramāṇavārttika, and Śāntarakṣita\'s Tattvasaṅgraha.',
    dialecticalResolutionOrLegacy: 'Forced Nyāya to refine its theories of memory and relation, while compelling Buddhists to develop sophisticated theories of causal continuity (Citta-santāna) and conceptual exclusion (Apoha).'
  },
  {
    id: 'debate-advaita-visistadvaita-maya',
    title: 'The Great Vedānta Duel: Śaṅkara vs. Rāmānuja on Māyā',
    corePhilosophicalIssue: 'Is the empirical world an inexplicable illusory superimposition (Māyā), or is it a real divine transformation (Pariṇāma) forming the body of God?',
    parties: {
      sideA: {
        schoolId: 'advaita-vedanta',
        name: { english: 'Advaita Vedāntins', iast: 'Advaitin', devanagari: 'अद्वैतिन्' },
        representativeThinker: { english: 'Ādi Śaṅkara', iast: 'Śaṅkara', devanagari: 'शङ्कर' },
        thesis: 'Brahman alone is real; the differentiated world is an illusory projection of ineffable cosmic ignorance (Māyā/Avidyā).',
        coreArguments: [
          'Upaniṣads declare: "There is no diversity here at all" (Neho nānāsti kiñcana). Multiplicity is sublated upon awakening to non-dual Brahman.',
          'If the world were a real physical modification of Brahman, the changeless, partless Absolute would undergo literal mutilation and decay.',
          'Māyā is Anirvacanīya: neither real (since it is sublated) nor unreal (since it is experienced).'
        ]
      },
      sideB: {
        schoolId: 'visistadvaita',
        name: { english: 'Viśiṣṭādvaita Vedāntins', iast: 'Viśiṣṭādvaitin', devanagari: 'विशिष्टाद्वैतिन्' },
        representativeThinker: { english: 'Rāmānuja', iast: 'Rāmānuja', devanagari: 'रामानुज' },
        thesis: 'The world and individual souls are completely real modifications of God\'s energy; Māyā as an ineffable illusion is logically absurd.',
        coreArguments: [
          'The Seven Great Untenables (Saptavidha-anupapatti): Where does this ignorance reside? Not in Brahman (who is pure light), nor in the Jīva (which does not yet exist prior to ignorance).',
          'Consciousness is always intentional and relational. "Attribute-less contentless consciousness" is a fictitious absurdity.',
          'Scripture calls God\'s power "Māyā" to mean wonderful divine creative potency (Vicitra-śakti), not an illusion.'
        ]
      }
    },
    historicalLocusAndTexts: 'Crystallized in Rāmānuja\'s Śrī Bhāṣya and Vedārthasaṃgraha, counter-defended by Advaitins like Śrīharṣa and Madhusūdana Sarasvatī.',
    dialecticalResolutionOrLegacy: 'Divided Vedānta permanently into non-dual intellectualist and theistic devotional traditions, fundamentally shaping the religious landscape of medieval and modern India.'
  },
  {
    id: 'debate-jain-buddhist-anekanta',
    title: 'The Logic of Reality: Jain Anekāntavāda vs. Buddhist / Nyāya Absolutism',
    corePhilosophicalIssue: 'Can a single entity simultaneously possess contradictory characteristics (permanence and change, existence and non-existence)?',
    parties: {
      sideA: {
        schoolId: 'jainism',
        name: { english: 'Jain Non-Absolutists', iast: 'Anekāntavādin', devanagari: 'अनेकान्तवादिन्' },
        representativeThinker: { english: 'Siddhasena Divākara / Haribhadra Sūri', iast: 'Siddhasena', devanagari: 'सिद्धसेन' },
        thesis: 'Reality is multifaceted (anekānta); every entity is permanent as substance, changing as mode, existing in its own form, non-existing in other forms.',
        coreArguments: [
          'Experience demonstrates that gold remains gold (permanent substance) while changing from a ring to a bracelet (impermanent modification).',
          'One-sided philosophies capture only a single standpoint (Naya) and mistake the part for the whole, like the blind men describing the elephant.',
          'Dogmatic absolutism (Ekāntavāda) leads directly to intellectual arrogance and philosophical conflict.'
        ]
      },
      sideB: {
        schoolId: 'buddhist-epistemology',
        name: { english: 'Buddhist Logicians', iast: 'Bauddha Nyāyika', devanagari: 'बौद्ध नैयायिक' },
        representativeThinker: { english: 'Dharmakīrti / Śāntarakṣita', iast: 'Dharmakīrti', devanagari: 'धर्मकीर्ति' },
        thesis: 'Contradictory properties cannot co-exist in one entity; Anekāntavāda dissolves logical determinacy.',
        coreArguments: [
          'Law of Non-Contradiction: If an entity is both blue and non-blue, or changing and non-changing, the definition of identity collapses.',
          'Syādvāda makes rational action impossible: if a medicine is "in a sense curative and in a sense poisonous", a doctor cannot prescribe it.',
          'Things are momentary point-instants (Kṣaṇa); permanence is a false mental projection.'
        ]
      }
    },
    historicalLocusAndTexts: 'Sanmatitarka (Siddhasena), Pramāṇavārttika (Dharmakīrti), Anekāntajayapatākā (Haribhadra Sūri), Tattvasaṅgraha (Śāntarakṣita).',
    dialecticalResolutionOrLegacy: 'Established Jain logic as one of the world\'s most sophisticated early systems of non-binary, many-valued epistemic tolerance.'
  }
];

// ==========================================
// 10. PRIMARY TEXTS & COMMENTARIAL LINEAGES
// ==========================================
export const INDIAN_PRIMARY_TEXTS: PrimaryTextTree[] = [
  {
    id: 'text-tree-brahma-sutra',
    traditionOrSchool: 'Vedānta (All Sub-Schools)',
    rootText: {
      english: 'Brahma Sūtras (Aphorisms on the Absolute)',
      iast: 'Brahma Sūtra',
      devanagari: 'ब्रह्म सूत्र'
    },
    summary: 'The master synthesis of the Upaniṣads attributed to Bādarāyaṇa (c. 2nd C. BCE–2nd C. CE), consisting of 555 cryptic aphorisms in four chapters (Adhyāyas). Every major Vedāntic school defined its philosophical legitimacy by composing a commentary (Bhāṣya) on this text.',
    lineage: [
      {
        title: { english: 'Śārīraka Bhāṣya (Non-Dualism)', iast: 'Śārīraka Bhāṣya', devanagari: 'शारीरक भाष्य' },
        author: { english: 'Ādi Śaṅkara', iast: 'Śaṅkara', devanagari: 'शङ्कर' },
        approxDate: 'c. 800 CE',
        type: 'Bhāṣya (Primary Commentary)',
        description: 'Interprets the sūtras as teaching absolute non-duality (Advaita) and the illusory nature of empirical duality.',
        children: [
          {
            title: { english: 'Pañcapādikā', iast: 'Pañcapādikā', devanagari: 'पञ्चपादिका' },
            author: { english: 'Padmapādācārya', iast: 'Padmapāda', devanagari: 'पद्मपाद' },
            approxDate: 'c. 820 CE',
            type: 'Ṭīkā (Sub-Commentary)',
            description: 'Founded the Vivaraṇa lineage, analyzing the locus of cosmic ignorance (Avidyā).'
          },
          {
            title: { english: 'Bhāmatī', iast: 'Bhāmatī', devanagari: 'भामती' },
            author: { english: 'Vācaspati Miśra', iast: 'Vācaspati Miśra', devanagari: 'वाचस्पति मिश्र' },
            approxDate: 'c. 950 CE',
            type: 'Ṭīkā (Sub-Commentary)',
            description: 'Founded the Bhāmatī lineage, arguing that ignorance resides in the individual soul (Jīva).'
          }
        ]
      },
      {
        title: { english: 'Śrī Bhāṣya (Qualified Non-Dualism)', iast: 'Śrī Bhāṣya', devanagari: 'श्री भाष्य' },
        author: { english: 'Rāmānujācārya', iast: 'Rāmānuja', devanagari: 'रामानुज' },
        approxDate: 'c. 1100 CE',
        type: 'Bhāṣya (Primary Commentary)',
        description: 'Refutes Śaṅkara; interprets the sūtras as describing personal Brahman (Viṣṇu) possessing all souls and matter as His real cosmic body.'
      },
      {
        title: { english: 'Anuvyākhyāna / Sūtra Bhāṣya (Strict Dualism)', iast: 'Anuvyākhyāna', devanagari: 'अनुव्याख्यान' },
        author: { english: 'Madhvācārya', iast: 'Madhva', devanagari: 'मध्व' },
        approxDate: 'c. 1260 CE',
        type: 'Bhāṣya (Primary Commentary)',
        description: 'Establishes Dvaita: interpreting the sūtras as teaching the eternal real difference (Bheda) between God and creation.'
      }
    ]
  },
  {
    id: 'text-tree-nyaya-sutra',
    traditionOrSchool: 'Nyāya (Classical & Navya)',
    rootText: {
      english: 'Nyāya Sūtra (Aphorisms on Logic)',
      iast: 'Nyāya Sūtra',
      devanagari: 'न्याय सूत्र'
    },
    summary: 'Foundational codification of Indian logic, epistemology, debate categories, and direct realism composed by Akṣapāda Gautama (c. 2nd C. CE).',
    lineage: [
      {
        title: { english: 'Nyāyabhāṣya', iast: 'Nyāyabhāṣya', devanagari: 'न्यायभाष्य' },
        author: { english: 'Vātsyāyana', iast: 'Vātsyāyana', devanagari: 'वात्स्यायन' },
        approxDate: 'c. 450 CE',
        type: 'Bhāṣya (Primary Commentary)',
        description: 'First comprehensive systematic commentary on Gautama\'s aphorisms, defending direct realism against early Buddhist skepticism.',
        children: [
          {
            title: { english: 'Nyāyavārttika', iast: 'Nyāyavārttika', devanagari: 'न्यायवार्त्तिका' },
            author: { english: 'Uddyotakara', iast: 'Uddyotakara', devanagari: 'उद्योतकर' },
            approxDate: 'c. 600 CE',
            type: 'Vārttika (Explanatory Commentary)',
            description: 'Vigorous counter-defense of Nyāya logic against the devastating critiques of Buddhist master Dignāga.'
          }
        ]
      }
    ]
  }
];

// ==========================================
// 11. COMPARATIVE WORLD PHILOSOPHY
// ==========================================
export const INDIAN_COMPARATIVE_PAIRS: ComparativePhilosophyCard[] = [
  {
    id: 'comp-nagarjuna-derridean-skepticism',
    title: 'Nāgārjuna & Western Anti-Foundationalism (Sextus Empiricus / Jacques Derrida)',
    indianSide: {
      thinkerOrSchool: { english: 'Nāgārjuna (Madhyamaka)', iast: 'Nāgārjuna', devanagari: 'नागार्जुन' },
      doctrine: 'Śūnyatā (Emptiness): all concepts and entities lack intrinsic essence (svabhāva); all definitions deconstruct themselves upon analysis.',
      keyTexts: 'Mūlamadhyamakakārikā, Vigrahavyāvartanī'
    },
    westernSide: {
      thinkerOrSchool: 'Pyrrhonian Skepticism (Sextus Empiricus) & Deconstruction (Jacques Derrida)',
      doctrine: 'Suspension of judgment (Epoché) and Différance: the endless deferral of fixed self-contained meaning and critique of the metaphysics of presence.',
      keyTexts: 'Outlines of Pyrrhonism, Of Grammatology'
    },
    philosophicalComparison: 'Both traditions deploy relentless negative dialectics to show that any attempt to establish an unconditioned, self-grounded foundation (a "transcendental signified" or "svabhāva") generates internal contradictions and circularities.',
    historicalRelationship: 'None (Parallel Independent Inquiry)',
    antiAnachronismWarning: 'Historical qualification: While Western deconstruction often leads to literary ambiguity or political critique, Nāgārjuna\'s emptiness is an existential curative practice aimed directly at uprooting psychological craving, suffering, and achieving Nirvāṇa.'
  },
  {
    id: 'comp-anattman-hume-parfit',
    title: 'Buddhist Anātman & Humean Bundle Theory / Derek Parfit',
    indianSide: {
      thinkerOrSchool: { english: 'Early Buddhism & Vasubandhu', iast: 'Bauddha Anātman', devanagari: 'बौद्ध अनात्मन्' },
      doctrine: 'No-Self (Anātman): The person is not an enduring substance, but a dynamic causal continuum (santāna) of five psychophysical aggregates (skandhas).',
      keyTexts: 'Anattalakkhaṇa Sutta, Abhidharmakośa Ch. 9'
    },
    westernSide: {
      thinkerOrSchool: 'David Hume & Derek Parfit (Reductionism on Personal Identity)',
      doctrine: 'Bundle Theory: When introspecting, we never encounter a simple unified self, but only fleeting perceptions; personal identity is a matter of degree.',
      keyTexts: 'A Treatise of Human Nature, Reasons and Persons'
    },
    philosophicalComparison: 'Both conclude that the "self" is a linguistic fiction or convenient designator for a series of causally connected psychological events across time.',
    historicalRelationship: 'Uncertain / Indirect Transmission',
    antiAnachronismWarning: 'Historical qualification: Some scholars hypothesize Hume may have heard of Buddhist concepts through Jesuit travelers in France, but Hume formulated his bundle theory within British empiricism, whereas Buddhism embeds it in moral karma and monastic meditation.'
  },
  {
    id: 'comp-nyaya-analytic-epistemology',
    title: 'Nyāya Realism & Modern Analytic Epistemology',
    indianSide: {
      thinkerOrSchool: { english: 'Nyāya (Gautama, Udayana, Gaṅgeśa)', iast: 'Nyāya-Śāstra', devanagari: 'न्याय-शास्त्र' },
      doctrine: 'Pramāṇa theory: knowledge is true belief produced by a non-defective, reliable cognitive mechanism; external objects exist independently of mind.',
      keyTexts: 'Nyāya Sūtra, Tattvacintāmaṇi'
    },
    westernSide: {
      thinkerOrSchool: 'Epistemic Externalism, Reliabilism & Direct Realism (Alvin Goldman, John McDowell)',
      doctrine: 'A belief constitutes knowledge if it is generated by a reliable cognitive process; rejection of Cartesian subjective veil of ideas.',
      keyTexts: 'Epistemology and Cognition, Mind and World'
    },
    philosophicalComparison: 'Both dismiss Cartesian skepticism by grounding knowledge directly in successful interaction with external reality and reliable epistemic causal instruments.',
    historicalRelationship: 'Documented Modern Reception',
    antiAnachronismWarning: 'Historical qualification: Nyāya epistemology was explicitly recovered and demonstrated to the international philosophical community by B.K. Matilal and J.N. Mohanty in the late 20th century.'
  }
];
