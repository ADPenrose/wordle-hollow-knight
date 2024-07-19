import styled from "styled-components";

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
  return (
    <Wrapper>
      <Header />
      <GameWrapper>
        <Game />
      </GameWrapper>
    </Wrapper>
  );
}

export default App;
