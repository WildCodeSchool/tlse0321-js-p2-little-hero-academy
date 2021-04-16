import React from 'react';
import ResponseCheckbox from './ResponseCheckbox';
import '../Styles/Quiz.css';
import QuestionTitle from './QuestionTitle';

const Question = () => {
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
      <QuestionTitle title="Je suis le titre" />
      <div className="quiz-responses">
        {responseItems.map((responseItem) => (
          <ResponseCheckbox
            responseItems={responseItem}
            key={responseItem.label}
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
