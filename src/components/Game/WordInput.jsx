import React from "react";
import styled from "styled-components";

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 6.75rem;

  & label {
    font-size: 1.25rem;
  }

  & input {
    display: block;
    width: 100%;
    font-size: 2rem;
    border: 2px solid var(--color-gray-300);
    border-radius: 4px;
    padding: 8px 16px;
    outline-offset: 4px;
  }
`;

function WordInput({ handleGuess, gameOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleGuess(guess);
    setGuess("");
  }

  return (
    <InputWrapper onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={gameOver}
      />
    </InputWrapper>
  );
}

export default WordInput;
