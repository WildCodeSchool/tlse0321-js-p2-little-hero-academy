function VocalRules({ gameInformation }) {
  const utterance = new SpeechSynthesisUtterance(gameInformation.rules);
  utterance.lang = 'fr-FR';
  utterance.rate = 1.2;
  utterance.pitch = 2;

  return (
    <div className="vocal-rules">
      <button type="button" onClick={() => speechSynthesis.speak(utterance)}>
        Clique pour connaître les règles
      </button>
    </div>
  );
}

export default VocalRules;
