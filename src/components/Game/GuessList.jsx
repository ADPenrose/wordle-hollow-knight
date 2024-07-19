import styled from "styled-components";

import Guess from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const StyledGuessList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function GuessList({ guesses, answer }) {
  return (
    <StyledGuessList>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} guess={guesses[index]} answer={answer} />
      ))}
    </StyledGuessList>
  );
}

export default GuessList;
