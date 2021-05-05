const questions = [
  {
    questionText: 'Qui est ce personnage?',
    answerOptions: [
      { answerText: 'Robin', isCorrect: false },
      { answerText: 'Godzilla', isCorrect: false },
      { answerText: 'Iron-man', isCorrect: true },
      { answerText: 'Elastigirl', isCorrect: false },
    ],
  },
  {
    questionText: 'Quel est le vrai nom de ce personnage?',
    answerOptions: [
      { answerText: 'Bruce Wayne', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: true },
      { answerText: 'Luke Skywalker', isCorrect: false },
      { answerText: 'Harry potter', isCorrect: false },
    ],
  },
  {
    questionText: 'Ce personnage est :',
    answerOptions: [
      { answerText: 'Un Homme', isCorrect: true },
      { answerText: 'Une Femme', isCorrect: false },
    ],
  },
  {
    questionText: 'Ce personnage est-il: ',
    answerOptions: [
      { answerText: 'Un Super-Héro', isCorrect: true },
      { answerText: 'Un Super-Méchant', isCorrect: false },
    ],
  },
  {
    questionText: 'Ce personnage est:',
    answerOptions: [
      { answerText: 'Un Humain', isCorrect: true },
      { answerText: 'Un Extraterrestre ', isCorrect: false },
      { answerText: 'Un Magicien', isCorrect: false },
      { answerText: 'Un Homme-Poisson', isCorrect: false },
    ],
  },
  {
    questionText: 'Où ce personnage est-il né?',
    answerOptions: [
      { answerText: 'Sur la Lune', isCorrect: false },
      { answerText: 'À Tokyo', isCorrect: false },
      { answerText: 'À Paris', isCorrect: false },
      { answerText: 'À Londre', isCorrect: true },
    ],
  },
  {
    questionText: 'Qui à créé ce personnage?',
    answerOptions: [
      { answerText: 'Tolken', isCorrect: false },
      { answerText: 'J.K. Rowling', isCorrect: false },
      { answerText: 'Marvel Comics', isCorrect: true },
      { answerText: 'George Lucas', isCorrect: false },
    ],
  },
  {
    questionText: 'Où a-t-on pu voir ce personnage pour la première fois?',
    answerOptions: [
      { answerText: 'Star Wars : Un nouvel espoir', isCorrect: false },
      { answerText: 'Birdman and the Galaxy Trio (1967)', isCorrect: false },
      {
        answerText: 'Le Seigneur des anneaux : Les Deux Tours',
        isCorrect: false,
      },
      { answerText: 'Tales of Suspence #39 (March, 1963)', isCorrect: true },
    ],
  },
];

export default questions;
