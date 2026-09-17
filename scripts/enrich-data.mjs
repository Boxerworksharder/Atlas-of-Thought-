import fs from 'fs';

const meta = {
  'socrates': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['nietzsche'],
    relatedQuestions: ['q-action-good', 'q-can-we-know', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'Apology', originalTitle: 'Ἀπολογία Σωκράτους', approxYear: 'c. 399 BCE', language: 'Ancient Greek', description: 'Platonic defense speech of Socrates facing trial for impiety and corrupting youth.', significance: 'Foundational text of Western intellectual autonomy and moral conscience.' }
    ]
  },
  'plato': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['aristotle', 'nietzsche'],
    relatedQuestions: ['q-reality', 'q-can-we-know', 'q-justice'],
    primaryTexts: [
      { title: 'The Republic', originalTitle: 'Πολιτεία (Politeia)', approxYear: 'c. 375 BCE', language: 'Ancient Greek', description: 'Master dialogue on the definition of justice, the tripartite soul, and the Allegory of the Cave.', significance: 'Inaugurated political philosophy and metaphysical idealism.' }
    ]
  },
  'aristotle': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['descartes', 'bacon'],
    relatedQuestions: ['q-reality', 'q-action-good', 'q-free-will'],
    primaryTexts: [
      { title: 'Nicomachean Ethics', originalTitle: 'Ἠθικὰ Νικομάχεια', approxYear: 'c. 350 BCE', language: 'Ancient Greek', description: 'Systematic treatise on eudaimonia, virtue as the golden mean, and friendship.', significance: 'Foundational cornerstone of teleological virtue ethics.' }
    ]
  },
  'epicurus': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['seneca', 'epictetus'],
    relatedQuestions: ['q-meaningful-life', 'q-reality', 'q-god'],
    primaryTexts: [
      { title: 'Principal Doctrines', originalTitle: 'Κύριαι Δόξαι', approxYear: 'c. 300 BCE', language: 'Ancient Greek', description: 'Forty concise maxims designed to dispel fear of gods and death.', significance: 'Canon of therapeutic tranquility (ataraxia).' }
    ]
  },
  'zeno-of-citium': {
    dateUncertainty: 'PROBABLE',
    critics: ['epicurus'],
    relatedQuestions: ['q-meaningful-life', 'q-free-will'],
    primaryTexts: [
      { title: 'The Republic (Fragmentary)', originalTitle: 'Πολιτεία', approxYear: 'c. 300 BCE', language: 'Ancient Greek', description: 'Early Stoic utopian portrait of a world-cosmopolis governed by reason.', significance: 'Inception of cosmopolitan ethics.' }
    ]
  },
  'seneca': {
    dateUncertainty: 'ESTABLISHED',
    critics: [],
    relatedQuestions: ['q-meaningful-life', 'q-free-will'],
    primaryTexts: [
      { title: 'Letters from a Stoic', originalTitle: 'Epistulae Morales ad Lucilium', approxYear: 'c. 65 CE', language: 'Latin', description: '124 moral epistles offering practical counsel on mortality, anger, and virtue.', significance: 'Pinnacle of Roman practical Stoicism.' }
    ]
  },
  'epictetus': {
    dateUncertainty: 'PROBABLE',
    dateUncertaintyNote: 'Birth date c. 50 CE estimated from Roman manumission records.',
    critics: [],
    relatedQuestions: ['q-free-will', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'Discourses & Enchiridion', originalTitle: 'Ἐγχειρίδιον', approxYear: 'c. 108 CE', language: 'Koine Greek', description: 'Recorded lectures on the dichotomy of control and inner freedom.', significance: 'Central manual for late Stoic spiritual discipline.' }
    ]
  },
  'marcus-aurelius': {
    dateUncertainty: 'ESTABLISHED',
    critics: [],
    relatedQuestions: ['q-meaningful-life', 'q-free-will'],
    primaryTexts: [
      { title: 'Meditations', originalTitle: 'Τὰ εἰς ἑαυτόν', approxYear: 'c. 170–180 CE', language: 'Koine Greek', description: 'Private spiritual journals penned on imperial military campaigns along the Danube.', significance: 'Universal exemplar of philosophical self-examination.' }
    ]
  },
  'confucius': {
    dateUncertainty: 'ESTABLISHED',
    dateUncertaintyNote: 'Traditional birth date 551 BCE recorded in Sima Qian’s Shiji.',
    critics: ['laozi', 'zhuangzi'],
    relatedQuestions: ['q-action-good', 'q-justice', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'The Analects', originalTitle: '論語 (Lúnyǔ)', approxYear: 'c. 475–221 BCE', language: 'Classical Chinese', description: 'Aphorisms and dialogues compiled by disciples emphasizing Ren (benevolence) and Li (ritual).', significance: 'The ethical foundation of East Asian civilization.' }
    ]
  },
  'laozi': {
    dateUncertainty: 'DISPUTED',
    dateUncertaintyNote: 'Scholarly consensus debates whether Laozi was a 6th-century BCE historical elder or a Warring States composite attribution.',
    critics: ['confucius'],
    relatedQuestions: ['q-reality', 'q-meaningful-life', 'q-can-we-know'],
    primaryTexts: [
      { title: 'Daodejing', originalTitle: '道德經', approxYear: 'c. 4th Century BCE', language: 'Classical Chinese', description: '81 poetic chapters on the ineffable Dao and the practice of non-contending action (Wu Wei).', significance: 'Foundational canon of philosophical Daoism.' }
    ]
  },
  'zhuangzi': {
    dateUncertainty: 'PROBABLE',
    dateUncertaintyNote: 'Late 4th-century BCE dates derived from historical interactions with King Hui of Liang.',
    critics: ['confucius'],
    relatedQuestions: ['q-reality', 'q-can-we-know', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'Zhuangzi (Inner Chapters)', originalTitle: '莊子 (內篇)', approxYear: 'c. 300 BCE', language: 'Classical Chinese', description: 'Wild allegories, humor, and epistemological paradoxes liberating the mind from rigid conventions.', significance: 'Pinnacle of Daoist relativistic epistemology.' }
    ]
  },
  'gautama-buddha': {
    dateUncertainty: 'DISPUTED',
    dateUncertaintyNote: 'Long chronology dates Parinirvāṇa to c. 486 BCE; modern short chronology consensus places it c. 404–380 BCE.',
    critics: ['adi-shankara'],
    relatedQuestions: ['q-reality', 'q-meaningful-life', 'q-consciousness'],
    primaryTexts: [
      { title: 'Dhammacakkappavattana Sutta', originalTitle: 'धम्मचक्कप्पवत्तन सुत्त', approxYear: 'c. 5th Century BCE', language: 'Pali', description: 'The first sermon expounding the Four Noble Truths and the Eightfold Noble Path.', significance: 'Inauguration of the Buddhist philosophical lineage.' }
    ]
  },
  'nagarjuna': {
    dateUncertainty: 'UNCERTAIN',
    dateUncertaintyNote: 'Historiographical dating spans mid-2nd to early 3rd century CE; synchronous with late Sātavāhana rulers.',
    critics: ['adi-shankara'],
    relatedQuestions: ['q-reality', 'q-can-we-know'],
    primaryTexts: [
      { title: 'Mūlamadhyamakakārikā', originalTitle: 'मूलमध्यमककारिका', approxYear: 'c. 150–200 CE', language: 'Sanskrit', description: 'Fundamental dialectical stanzas on the Middle Way, demonstrating all phenomena lack intrinsic essence (Śūnyatā).', significance: 'Masterwork of Madhyamaka Buddhist dialectic.' }
    ]
  },
  'adi-shankara': {
    dateUncertainty: 'DISPUTED',
    dateUncertaintyNote: 'Traditional monastic chronicles claim 509 BCE; modern academic consensus establishes c. 700–750 CE.',
    critics: ['nagarjuna', 'gautama-buddha'],
    relatedQuestions: ['q-reality', 'q-can-we-know', 'q-consciousness'],
    primaryTexts: [
      { title: 'Brahmasūtrabhāṣya', originalTitle: 'ब्रह्मसूत्रभाष्यम्', approxYear: 'c. 720 CE', language: 'Sanskrit', description: 'Monumental non-dual commentary demonstrating the identity of individual Self (Ātman) and Brahman.', significance: 'Foundational magnum opus of Advaita Vedānta.' }
    ]
  },
  'descartes': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['spinoza', 'locke', 'hume'],
    relatedQuestions: ['q-can-we-know', 'q-consciousness', 'q-god'],
    primaryTexts: [
      { title: 'Meditations on First Philosophy', originalTitle: 'Meditationes de Prima Philosophia', approxYear: '1641 CE', language: 'Latin', description: 'Method of radical doubt leading to the cogito and dualism of res cogitans and res extensa.', significance: 'Inaugural text of modern Western philosophy.' }
    ]
  },
  'spinoza': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['leibniz'],
    relatedQuestions: ['q-reality', 'q-free-will', 'q-god'],
    primaryTexts: [
      { title: 'Ethics', originalTitle: 'Ethica, ordine geometrico demonstrata', approxYear: '1677 CE', language: 'Latin', description: 'Geometric deduction of reality as a single infinite Substance (Deus sive Natura).', significance: 'Supreme masterwork of monistic rationalism.' }
    ]
  },
  'hume': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['kant'],
    relatedQuestions: ['q-can-we-know', 'q-free-will', 'q-god'],
    primaryTexts: [
      { title: 'A Treatise of Human Nature', approxYear: '1739 CE', language: 'English', description: 'Radical empirical critique of substance, the permanent self, and necessary causal connection.', significance: 'Awakened Kant from his dogmatic slumber.' }
    ]
  },
  'kant': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['hegel', 'schopenhauer', 'nietzsche'],
    relatedQuestions: ['q-can-we-know', 'q-action-good', 'q-reality'],
    primaryTexts: [
      { title: 'Critique of Pure Reason', originalTitle: 'Kritik der reinen Vernunft', approxYear: '1781 CE', language: 'German', description: 'Transcendental idealism synthesising rationalism and empiricism through synthetic a priori knowledge.', significance: 'The Copernican revolution in modern philosophy.' }
    ]
  },
  'hegel': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['schopenhauer', 'kierkegaard', 'marx', 'russell'],
    relatedQuestions: ['q-reality', 'q-justice', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'Phenomenology of Spirit', originalTitle: 'Phänomenologie des Geistes', approxYear: '1807 CE', language: 'German', description: 'Dialectical development of human consciousness through history toward Absolute Knowing.', significance: 'Culmination of German Idealism.' }
    ]
  },
  'marx': {
    dateUncertainty: 'ESTABLISHED',
    critics: ['popper'],
    relatedQuestions: ['q-justice', 'q-meaningful-life'],
    primaryTexts: [
      { title: 'Das Kapital', originalTitle: 'Das Kapital: Kritik der politischen Ökonomie', approxYear: '1867 CE', language: 'German', description: 'Historical materialist analysis of political economy, commodity fetishism, and surplus value.', significance: 'Foundational text of modern social and economic critique.' }
    ]
  },
  'nietzsche': {
    dateUncertainty: 'ESTABLISHED',
    critics: [],
    relatedQuestions: ['q-meaningful-life', 'q-action-good', 'q-can-we-know'],
    primaryTexts: [
      { title: 'On the Genealogy of Morality', originalTitle: 'Zur Genealogie der Moral', approxYear: '1887 CE', language: 'German', description: 'Polemical deconstruction of master versus slave morality, ressentiment, and ascetic ideals.', significance: 'Radical turning point in 19th-century ethical philosophy.' }
    ]
  }
};

let code = fs.readFileSync('src/data/philosophyData.ts', 'utf-8');

for (const [id, data] of Object.entries(meta)) {
  const needle = `id: '${id}',\n`;
  if (code.includes(needle)) {
    let insertString = `    dateUncertainty: '${data.dateUncertainty}',\n`;
    if (data.dateUncertaintyNote) {
      insertString += `    dateUncertaintyNote: '${data.dateUncertaintyNote.replace(/'/g, "\\'")}',\n`;
    }
    if (data.critics && data.critics.length > 0) {
      insertString += `    critics: ${JSON.stringify(data.critics)},\n`;
    }
    if (data.relatedQuestions && data.relatedQuestions.length > 0) {
      insertString += `    relatedQuestions: ${JSON.stringify(data.relatedQuestions)},\n`;
    }
    if (data.primaryTexts && data.primaryTexts.length > 0) {
      insertString += `    primaryTexts: ${JSON.stringify(data.primaryTexts, null, 6).replace(/\n/g, '\n    ')},\n`;
    }

    code = code.replace(needle, needle + insertString);
    console.log('Enriched:', id);
  }
}

fs.writeFileSync('src/data/philosophyData.ts', code);
console.log('Enrichment complete!');
