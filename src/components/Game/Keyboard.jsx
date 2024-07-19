import styled from "styled-components";

import { QWERTY_KEYBOARD } from "../../constants";

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
`;

function Keyboard() {
  return (
    <div>
      {QWERTY_KEYBOARD.map((row, index) => (
        <KeyboardRow className="keyboard-row" key={index}>
          {row.map((key) => (
            <KeyWrapper key={key}>{key}</KeyWrapper>
          ))}
        </KeyboardRow>
      ))}
    </div>
  );
}

export default Keyboard;
