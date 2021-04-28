import React from 'react';
import '../Styles/Quiz.css';
import Gamepage from './Gamepage';
import Quiz from './quiz-components/Quiz';

const QuizGame = () => {
  // const [modifyQuestion, setModifyQuestion] = useState([...questions]);
  // const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${346}`;
  // const [imgPersonnage, setImgPersonnage] = useState('');
  // const [characterName, setCharacterName] = useState('');
  // const [characterFullName, setCharacterFullName] = useState('');
  // ********=>virer les variable de state il n'en reste qu'une seul********<===
  // const [characterGender, setCharacterGender] = useState('');
  // const [characterAlignment, setCharacterAlignment] = useState('');
  // const [characterRace, setCharacterRace] = useState('');
  // const [characterPlaceOfBirth, setCharacterPlaceOfBirth] = useState('');
  // const [characterPublisher, setCharacterPublisher] = useState('');
  // const [characterFirstAppearance, setCharacterFirstAppearance] = useState('');
  // useEffect(() => {
  // *********=>boucle chaque question is true => changer par state(dones axios) meme [i]
  //   const newQuestion = [...questions];
  //   newQuestion[0].answerOptions[2].answerText = characterName; // exemple(dones.name......)
  //   newQuestion[1].answerOptions[1].answerText = characterFullName;
  //   newQuestion[2].answerOptions[1].answerText = characterGender;
  //   newQuestion[3].answerOptions[0].answerText = characterAlignment;
  //   newQuestion[4].answerOptions[0].answerText = characterRace;
  //   newQuestion[5].answerOptions[3].answerText = characterPlaceOfBirth;
  //   newQuestion[6].answerOptions[2].answerText = characterPublisher;
  //   newQuestion[7].answerOptions[3].answerText = characterFirstAppearance;
  //   setModifyQuestion(newQuestion);
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(urlHero)
  //     .then((results) => results.data)
  //     .then((data) => {
  //       setImgPersonnage(data.image.url);
  //       setCharacterName(data.name);
  //       setCharacterFullName(data.biography['full.name']);
  //       setCharacterGender(data.appearance.gender);
  //       setCharacterAlignment(data.biography.alignment);
  //       setCharacterRace(data.biography.race);
  //       setCharacterPlaceOfBirth(data.biography['place-of-birth']);
  //       setCharacterPublisher(data.biography.publisher);
  //       setCharacterFirstAppearance(data.biography['first-appearance']);
  //     });
  // }, []);

  // 1 seul requete api pour requperer les donnes

  const gameInformation = {
    name: 'Quiz',
    rules:
      'Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 8 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! ',
  };
  return (
    <div className="game">
      <Gamepage gameInformation={gameInformation} />
      <Quiz />
    </div>
  );
};

export default QuizGame;
