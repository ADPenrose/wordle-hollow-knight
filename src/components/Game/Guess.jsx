import styled, { css } from "styled-components";

import { range } from "../../utils";
import { checkGuess } from "../../helpers/game-helpers";

const StyledGuess = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`;

const GuessCell = styled.span`
  position: relative;
  width: 20%;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  border: 2px solid var(--color-gray-700);
  border-radius: var(--radius);
  font-size: 2rem;

  ${(props) =>
    props.$status === "correct" &&
    css`
      background: var(--color-success);
      border-color: var(--color-success);
      color: white;
    `}

  ${(props) =>
    props.$status === "incorrect" &&
    css`
      background: var(--color-gray-300);
      border-color: var(--color-gray-300);
      color: white;
    `}

  ${(props) =>
    props.$status === "misplaced" &&
    css`
      background: var(--color-warning);
      border-color: var(--color-warning);
      color: white;
    `}
`;

function Guess({ guess, answer }) {
  // I need to know if the guess is correct or not.
  const checkedGuess = checkGuess(guess, answer);

  return (
    <StyledGuess>
      {range(5).map((_, index) => (
        <GuessCell
          $status={checkedGuess && checkedGuess[index].status}
          key={index}
        >
          {guess && guess[index]}
        </GuessCell>
      ))}
    </StyledGuess>
  );
}

export default Guess;
