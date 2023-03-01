import React from "react";

function GuessInput({ handleAddGuess, gamesStatus}) {
  const [label, setLabel] = React.useState("");

  return (
    <form
      name="guessForm"
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddGuess(label);
        setLabel("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        className={label.length < 5 ? "guess-input" : ""}
        type="text"
        value={label}
        disabled={gamesStatus !== 'running' }
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setLabel(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
