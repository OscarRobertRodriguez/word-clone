import React from "react";

function GuessInput({handleAddGuess, guesses}) {

  const [label, setLabel] = React.useState(''); 

  return (
    <form
      name="guessForm"
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (label.length < 5) {
          return;
        }
        handleAddGuess(label);
        setLabel("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        className={label.length < 5 ? "guess-input" : ""}
        type="text"
        maxLength={5}
        value={label}
        disabled={guesses.length === 6}
        onChange={(e) => setLabel(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
