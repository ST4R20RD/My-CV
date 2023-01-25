import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { Toggle } from "./Toggle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LINKLIST = ["Projects", "About", "Contact"];

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  isMobile: boolean;
}

export default function MenuItems({ setIsOpen, isMobile }: Props) {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const { lightMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      {LINKLIST.filter((label) => {
        if (label.toLocaleLowerCase() === pathname) {
          return false;
        }
        return true;
      }).map((label) => {
        return (
          <MenuItem
            to={label.toLowerCase()}
            label={label}
            handleOpen={() => {
              isMobile && setIsOpen(false);
            }}
          />
        );
      })}
      <Toggle checked={lightMode} onToggle={toggleTheme} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  & > * {
    margin: 0 30px 0 0;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #34495e;
    width: 80vw;
    height: 100vh;
  }
  @media (min-width: 990px) {
    font-size: 2rem;
  }
  @media (min-width: 1325px) {
    font-size: 3rem;
  }
`;
