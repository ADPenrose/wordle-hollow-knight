import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "./WordInput";
import GuessList from "./GuessList";
import Banner from "./Banner";
import Keyboard from "./Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  let gameOver = guesses.length === 6;
  let isWinner = false;

  // If the current guess list includes the answer, the game is over.
  if (guesses.includes(answer)) {
    gameOver = true;
    isWinner = true;
  }

  function handleGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <WordInput handleGuess={handleGuess} gameOver={gameOver} />
      {gameOver && (
        <Banner
          type={isWinner ? "happy" : "sad"}
          answer={answer}
          numGuesses={guesses.length}
        />
      )}
      <Keyboard />
    </>
  );
}

export default Game;
