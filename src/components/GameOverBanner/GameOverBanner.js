import React from "react";

function GameOverBanner({  numOfGuesses, answer, gameStatus}) {

  let status = gameStatus === 'won' ? 'happy' : 'sad' ;
  return (
   
    <div className={`${status} banner`}>
      { gameStatus === "won" ? (
        <p>
          <strong>Congratulations!</strong>
          {' '}
           Got it in <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOverBanner;

