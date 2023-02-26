import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [solved, setSolved] = React.useState(false); 

  function correctAnswer(arr) {
    let copyArr = [...arr];

   let answer = copyArr
      .map((obj) => {
        return obj.status;
      })
      .every((status) => {
        return status === "correct";
      });

      setSolved(answer) ;
  }

  function handleAddGuess(label) {
    let guess = label;
    let formattedGuess = checkGuess(guess, answer);
    let newArr = [...guesses, formattedGuess];
    if (newArr.length <= NUM_OF_GUESSES_ALLOWED) {
      setGuesses(newArr);
      correctAnswer(formattedGuess);
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
      {
        solved &&  <Banner status='happy' guesses={guesses} answer={answer} />
      }

      {
        !solved  &&  guesses.length === NUM_OF_GUESSES_ALLOWED  ?  <Banner  guesses={guesses} answer={answer} />  : null
      }

    </>
  );
}

export default Game;
