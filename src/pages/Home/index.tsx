import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DownloadCV } from "./DownloadCV";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  flipInHorBottom,
  puffOutCenter,
  slideInBottom,
  slideInLeft,
  slideInRight,
  swirlInFwd,
  trackingInContract,
} from "./animations";
import { darkThemeStyles, lightThemeStyles } from "./ThemeStyles";

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
          <h3>Front End Developer</h3>
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
  animation: ${trackingInContract} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s both;
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

const NavLink = styled.a<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)};
  padding: 6px 30px;
  border-radius: 20px;
  margin: 5px;
  :hover {
    cursor: pointer;
  }
`;
