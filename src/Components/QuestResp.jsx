import React from 'react';
import Checkbox from './Checkbox';
import '../Styles/Quiz.css';

const QuestResp = () => {
  const responseItems = [
    {
      id: '',
      value: '',
      label: 'Réponse1',
    },
    {
      id: '',
      value: '',
      label: 'Réponse2',
    },
    {
      id: '',
      value: '',
      label: 'Réponse3',
    },
  ];
  return (
    <div className="quiz-container">
      <div className="quiz-question">
        <h1>Question</h1>
      </div>
      <div className="quiz-reponses">
        {responseItems.map((responseItem) => (
          <Checkbox responseItems={responseItem} key={responseItem.label} />
        ))}
      </div>
    </div>
  );
};
export default QuestResp;
