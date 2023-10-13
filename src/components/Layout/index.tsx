import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container lightMode={lightMode}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </div>
      {pathname === "/" ? null : <Header />}
      <Footer />
    </Container>
  );
}

const lightThemeStyles = css`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url("/images/block-texture-white.png");
`;

const darkThemeStyles = css`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/images/block-texture.png");
`;

const OutletWrapper = styled.div`
  position: absolute;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  ${OutletWrapper} {
    ${({ lightMode }) => css`
      color: ${lightMode ? "white" : "black"};
    `}
  }
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
