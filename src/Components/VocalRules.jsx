function VocalRules({ gameInformation }) {
  const utterance = new SpeechSynthesisUtterance(gameInformation.rules);
  utterance.lang = 'fr-FR';
  utterance.rate = 1.2;
  utterance.pitch = 2;

  return (
    <div>
      <button type="button" onClick={() => speechSynthesis.speak(utterance)}>
        Clic pour connaître les règles
      </button>
    </div>
  );
}

export default VocalRules;
