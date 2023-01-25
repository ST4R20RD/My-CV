import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">Gonçalo Estrelado</Logo>
      <Menu />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);

  font-size: 50px;
  height: 80px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-size: 1rem;
  @media (min-width: 542px) {
    font-size: 2rem;
  }
  @media (min-width: 815px) {
    font-size: 4rem;
  }
`;
