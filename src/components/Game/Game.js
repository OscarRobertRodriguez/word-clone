import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import Keyboard from "../Keyboard/Keyboard";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";



function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS)); 
  const [guesses, setGuesses] = React.useState([]);
  const [solved, setSolved] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("running");


  function handleAddGuess(label) {

    let newArr = [...guesses, label];
    if (newArr.length <= NUM_OF_GUESSES_ALLOWED) {
      setGuesses(newArr);
    }
    if (label.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newArr.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const validatedGuesses = guesses.map(guess => checkGuess(guess, answer)); 


  function handleRestart() {
    const newAnswer = sample(WORDS); 
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }
  return (
    <>
      <GuessResults guesses={guesses} validatedGuesses={validatedGuesses} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        gamesStatus={gameStatus}
      />

      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />}

      {gameStatus === "lost" && <LostBanner answer={answer} handleRestart={handleRestart} />}

      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
