import React from 'react';
import PropTypes from 'prop-types';

const ResponseCheckbox = ({ responseItems }) => (
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

ResponseCheckbox.propTypes = {
  responseItems: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default ResponseCheckbox;
