import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { DownloadCV } from "./DownloadCV";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  bounceInTop,
  flipInHorBottom,
  puffOutCenter,
  slideInBottom,
  slideInLeft,
  slideInRight,
  swirlInFwd,
} from "./animations";

const LINKLIST = ["Projects", "About", "Contact"];

export function Home() {
  const { lightMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLinkClick = (to: string, index: number) => {
    const button = document.getElementById(`styledButton ${index}`);
    button?.classList.add("clicked");
    setTimeout(() => {
      button?.classList.remove("clicked");
      navigate(to);
    }, 400);
  };
  return (
    <Container>
      <Presentation>
        <h3>Hi, I am</h3>
        <Name>Gonçalo</Name>
        <JobPosition>
          <h2>Junior Web Developer</h2>
          <p>
            Thank you for visiting my page,
            <br /> check out more about me and my work
          </p>
        </JobPosition>
      </Presentation>
      <Navigation>
        {LINKLIST.map((label, index) => {
          return (
            <NavLink
              id={`styledButton ${index}`}
              lightMode={lightMode}
              onClick={() => handleLinkClick(label.toLowerCase(), index)}
            >
              <h3>{label}</h3>
            </NavLink>
          );
        })}
      </Navigation>
      <DownloadCV />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Presentation = styled.div`
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    animation: ${swirlInFwd} 0.6s ease-out both;
  }
`;

const Name = styled.h1`
  animation: ${bounceInTop} 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.5s both;
`;

const JobPosition = styled.div`
  animation: ${flipInHorBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
`;

const Navigation = styled.div`
  text-align: center;
  width: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:nth-child(1) {
    animation: ${slideInLeft} 0.8s 1.2s both;

    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  & > *:nth-child(2) {
    animation: ${slideInBottom} 0.8s 1.6s both;
    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  & > *:nth-child(3) {
    animation: ${slideInRight} 0.8s 2s both;
    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  @media (min-width: 495px) {
    min-width: 300px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const NavLink = styled.a<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)};
  padding: 10px 30px;
  border-radius: 30px;
  margin: 5px;
`;
