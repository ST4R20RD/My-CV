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
`;

const Logo = styled(Link)``;
