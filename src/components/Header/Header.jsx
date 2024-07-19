import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);

  & .side {
    width: var(--header-height);
    display: grid;
    place-content: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: end;
`;

const H1 = styled.h1`
  flex: 1;
  font-size: 2rem;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 50px;
`;

function Header() {
  return (
    <StyledHeader>
      <TitleWrapper>
        <H1>Hollow-Wordle</H1>
        <Img src="/hollow.png" alt="Logo" />
      </TitleWrapper>
      <span>A really simple, Hollow Knight inspired wordle!</span>
    </StyledHeader>
  );
}

export default Header;
