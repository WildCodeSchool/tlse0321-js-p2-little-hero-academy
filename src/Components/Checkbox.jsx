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
//   <div>
//     <div className="quiz-reponse">
//       <label htmlFor="reponse">
//         <input
//           type="radio"
//           id="proposition1"
//           name="réponse"
//           value="proposition1"
//         />
//         Réponse1
//       </label>
//     </div>

//     <div className="quiz-reponse">
//       <label htmlFor="reponse">
//         <input
//           type="radio"
//           id="proposition2"
//           name="réponse"
//           value="proposition2"
//         />
//         Réponse2
//       </label>
//     </div>

//     <div className="quiz-reponse">
//       <label htmlFor="reponse">
//         <input
//           type="radio"
//           id="proposition2"
//           name="réponse"
//           value="proposition2"
//         />
//         Réponse3
//       </label>
//     </div>
//   </div>
// );

export default Checkbox;
