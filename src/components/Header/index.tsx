import styled from "styled-components";
import Menu from "./Menu";

export function Header() {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <Menu />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #34495e;
  color: #fff;
  padding: 0 20px;
`;
