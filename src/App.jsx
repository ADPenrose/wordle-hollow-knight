import React from "react";
import styled from "styled-components";

import { sample } from "./utils";
import { WORDS } from "./data";
import Header from "./components/Header";
import Game from "./components/Game";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const GameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--game-spacing);
  padding: var(--game-spacing) 32px;
  margin: 0 auto;
  min-width: 250px;
  max-width: min(500px, 58vh, 100%);
`;

function App() {
  // NOTE: This would be better on a useEffect hook.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.dir({ answer });
  return (
    <Wrapper>
      <Header />
      <GameWrapper>
        <Game answer={answer} setAnswer={setAnswer} />
      </GameWrapper>
    </Wrapper>
  );
}

export default App;
