import React from 'react';

const Checkbox = ({ responseItems }) => (
  <div className="quiz-reponse">
    <label htmlFor={responseItems.name}>
      <input
        type="radio"
        id={responseItems.id}
        name="response"
        value={responseItems.value}
      />
      {responseItems.label}
    </label>
  </div>
);
export default Checkbox;
