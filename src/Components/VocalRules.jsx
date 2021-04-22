import React from 'react';

function VocalRules(props) {
  const utterance = new SpeechSynthesisUtterance(props.rules);
  utterance.lang = 'fr-FR';
  utterance.rate = 1.2;
  utterance.pitch = 0;

  return (
    <div>
      <button type="button" onClick={() => speechSynthesis.speak(utterance)}>
        Clic pour connaître les règles
      </button>
    </div>
  );
}

export default VocalRules;
