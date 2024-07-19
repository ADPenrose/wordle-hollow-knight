import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { KEYBOARD_STATUS } from "../../constants";
import WordInput from "./WordInput";
import GuessList from "./GuessList";
import Banner from "./Banner";
import Keyboard from "./Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game({ answer, setAnswer }) {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  let gameOver = guesses.length === 6;
  let isWinner = false;

  // This ref will be updated with the status of each key as the user enters guesses.
  const usedLetters = React.useRef(Object.assign({}, KEYBOARD_STATUS));

  // If the current guess list includes the answer, the game is over.
  if (guesses.includes(answer)) {
    gameOver = true;
    isWinner = true;
  }

  function handleNewGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  function handleGuess(e) {
    console.log(e.target.innerText);
    setGuess(guess + e.target.innerText);
  }

  function handleRestart() {
    setGuess("");
    setGuesses([]);
    usedLetters.current = Object.assign({}, KEYBOARD_STATUS);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <WordInput
        guess={guess}
        setGuess={setGuess}
        handleNewGuess={handleNewGuess}
        gameOver={gameOver}
      />
      {gameOver && (
        <Banner
          type={isWinner ? "happy" : "sad"}
          answer={answer}
          numGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      <Keyboard
        guess={guesses[guesses.length - 1]}
        answer={answer}
        handleGuess={handleGuess}
        usedLetters={usedLetters}
      />
    </>
  );
}

export default Game;
