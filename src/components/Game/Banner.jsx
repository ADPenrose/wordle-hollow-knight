import styled, { css } from "styled-components";

const StyledBanner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  animation: slideUp 750ms cubic-bezier(0, 0.72, 0.24, 1.02);
  border-radius: 4px 4px 0px 0px;
  will-change: transform;

  ${(props) =>
    props.$type === "happy" &&
    css`
      background: var(--color-success);
      color: white;
    `}

  ${(props) =>
    props.$type === "sad" &&
    css`
      background: var(--color-error);
      color: white;
    `}
`;

function Banner({ type, answer, numGuesses }) {
  return (
    <StyledBanner $type={type}>
      <p>
        {type === "happy" ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </StyledBanner>
  );
}

export default Banner;
