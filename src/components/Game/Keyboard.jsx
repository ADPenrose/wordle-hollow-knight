import React from "react";
import styled, { css } from "styled-components";

import { checkGuess } from "../../helpers/game-helpers";
import { KEYBOARD_STATUS } from "../../constants";

const KeyboardRow = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
  justify-content: center;
`;

const KeyWrapper = styled.button`
  background-color: var(--color-gray-900);
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;

  ${(props) =>
    props.$status === "correct" &&
    css`
      background-color: var(--color-success);
      color: white;
    `}

  ${(props) =>
    props.$status === "misplaced" &&
    css`
      background-color: var(--color-warning);
      color: white;
    `}

  ${(props) =>
    props.$status === "incorrect" &&
    css`
      background-color: var(--color-gray-300);
      color: white;
    `}
`;

function Keyboard({ guess, answer }) {
  // This ref will be updated with the status of each key as the user enters guesses.
  const usedLetters = React.useRef(KEYBOARD_STATUS);
  // I need to know the state of each key, but only for the current guess.
  const checkedGuess = checkGuess(guess, answer);
  // Then, I need to add those letters and their state to the usedLetters ref.
  // NOTE: This maybe better with a useEffect, but I'm not sure yet.
  checkedGuess?.map((key) => {
    usedLetters.current[key.letter] = key.status;
  });

  // Rows
  const firstRow = Object.entries(usedLetters.current).slice(0, 10);
  const secondRow = Object.entries(usedLetters.current).slice(10, 19);
  const thirdRow = Object.entries(usedLetters.current).slice(19, 26);

  const rows = [firstRow, secondRow, thirdRow];

  // console.log(rows.map((row) => row.map(([key, value]) => value)));

  return (
    <div>
      {rows.map((row, index) => (
        <KeyboardRow key={index}>
          {row.map(([label, status]) => (
            <KeyWrapper $status={status} key={label}>
              {label}
            </KeyWrapper>
          ))}
        </KeyboardRow>
      ))}
    </div>
  );
}

export default Keyboard;
