// All app content lives here: the six IP types and the quiz questions.

export const IP_TYPES = [
  {
    id: 'patent',
    emoji: '💡',
    title: 'Patent',
    color: '#FFE08A',
    definition:
      'Protects a new invention, so only the inventor can make or sell it for about 20 years.',
    example: 'A new kind of battery that charges in one minute can be patented.',
  },
  {
    id: 'copyright',
    emoji: '🎵',
    title: 'Copyright',
    color: '#A8E6CF',
    definition:
      'Protects creative work such as songs, books, films, drawings and computer code.',
    example: 'Your favourite song is copyrighted, so others cannot copy and sell it.',
  },
  {
    id: 'trademark',
    emoji: '™️',
    title: 'Trademark',
    color: '#FFB3BA',
    definition:
      'Protects a brand name, logo or slogan that tells you who made a product.',
    example: 'The Nike tick and the name "Amul" are trademarks.',
  },
  {
    id: 'design',
    emoji: '🎨',
    title: 'Industrial Design',
    color: '#BAE1FF',
    definition:
      'Protects the shape, pattern or look of a product, not how it works.',
    example: 'The special curvy shape of a Coca-Cola bottle is a protected design.',
  },
  {
    id: 'gi',
    emoji: '🗺️',
    title: 'Geographical Indication',
    color: '#D7BDE2',
    definition:
      'Shows that a product comes from a certain place and has qualities linked to that place.',
    example: 'Only tea grown in Darjeeling can be sold as "Darjeeling Tea".',
  },
  {
    id: 'secret',
    emoji: '🔒',
    title: 'Trade Secret',
    color: '#FFD8B1',
    definition:
      'Secret business information, like a recipe or method, that a company keeps hidden.',
    example: 'The secret recipe of a famous cola drink is a trade secret.',
  },
];

export const QUESTIONS = [
  {
    question: 'Which IP protects a brand-new invention?',
    options: ['Copyright', 'Patent', 'Trademark', 'Trade Secret'],
    answer: 1,
    explanation: 'A patent protects new inventions and gives the inventor rights for about 20 years.',
  },
  {
    question: 'You wrote a new story. Which IP protects it automatically?',
    options: ['Patent', 'Geographical Indication', 'Copyright', 'Industrial Design'],
    answer: 2,
    explanation: 'Copyright protects creative work like stories, songs and drawings as soon as you make them.',
  },
  {
    question: 'The Nike "tick" logo is an example of a…',
    options: ['Trademark', 'Patent', 'Copyright', 'Trade Secret'],
    answer: 0,
    explanation: 'Logos and brand names that identify a company are trademarks.',
  },
  {
    question: '"Darjeeling Tea" can only come from Darjeeling. This is a…',
    options: ['Trademark', 'Industrial Design', 'Patent', 'Geographical Indication'],
    answer: 3,
    explanation: 'A Geographical Indication (GI) links a product to the place it comes from.',
  },
  {
    question: 'A company keeps its drink recipe hidden from everyone. This is a…',
    options: ['Trade Secret', 'Copyright', 'Patent', 'Trademark'],
    answer: 0,
    explanation: 'Secret recipes and methods a business keeps hidden are trade secrets.',
  },
  {
    question: 'The unique shape of a bottle is protected by…',
    options: ['Copyright', 'Industrial Design', 'Geographical Indication', 'Trade Secret'],
    answer: 1,
    explanation: 'Industrial design protects how a product looks: its shape and pattern.',
  },
  {
    question: 'Is it okay to copy a whole movie and sell it on DVDs?',
    options: ['Yes, if you bought it', 'Yes, it is free', 'No, it breaks copyright', 'Only on weekends'],
    answer: 2,
    explanation: 'Copying and selling a movie without permission is piracy and breaks copyright law.',
  },
  {
    question: 'About how long does a patent usually last?',
    options: ['1 year', '5 years', '20 years', 'Forever'],
    answer: 2,
    explanation: 'Most patents last about 20 years, then anyone can use the invention.',
  },
  {
    question: 'Which of these is a Geographical Indication from India?',
    options: ['Nike shoes', 'Mysore Silk', 'Harry Potter', 'iPhone'],
    answer: 1,
    explanation: 'Mysore Silk is a GI: it is made in Karnataka with special local skills.',
  },
  {
    question: 'Why do we have Intellectual Property laws?',
    options: [
      'To stop people from learning',
      'To reward creators and inventors for their ideas',
      'To make things costly',
      'To ban new inventions',
    ],
    answer: 1,
    explanation: 'IP laws reward creators and inventors, which encourages new ideas and inventions.',
  },
];
