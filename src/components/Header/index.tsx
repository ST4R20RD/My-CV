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
  font-size: 50px;
  height: 80px;
  padding: 0 20px;
  position: sticky;
  top: 0;
`;

const Logo = styled(Link)`
  font-size: 1rem;
  @media (min-width: 532px) {
    font-size: 2rem;
  }
  @media (min-width: 802px) {
    font-size: 4rem;
  }
`;
