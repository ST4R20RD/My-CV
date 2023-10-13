import styled, { css } from "styled-components";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router";
import { Toggle } from "../Header/Toggle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Footer() {
  const location = useLocation();
  const pathname = location.pathname;
  const { lightMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Container lightMode={lightMode}>
      <Wrapper>
        <Signature>
          @{new Date().getFullYear()} -{" "}
          <a
            href="
          https://www.linkedin.com/in/goncaloestrelado/
          "
            target="_blank"
            rel="noreferrer"
          >
            Gonçalo Estrelado
          </a>
        </Signature>
        {pathname === "/contact" ? null : (
          <Links>
            {pathname === "/" ? <Toggle checked={lightMode} onToggle={toggleTheme} /> : null}
            <Link href="https://github.com/ST4R20RD" target="_blank" rel="noreferrer">
              <FiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/goncaloestrelado/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </Link>
            <Link href="mailto:goncalo.estrelado@hotmail.com">
              <FiMail />
            </Link>
          </Links>
        )}
      </Wrapper>
    </Container>
  );
}

interface ContainerProps {
  lightMode: boolean;
}

const Container = styled.footer<ContainerProps>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
`;

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(90, 90, 90, 0) 0%, rgba(90, 90, 90, 0.85) 100%);
`;

const darkThemeStyles = css`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.03) 100%
  );
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 5px;
  border-radius: 10%;
  background: #fff;
  svg {
    color: black;
  }
  @media (min-width: 465px) {
    font-size: 1.5rem;
    padding: 10px;
    margin: 0 1rem;
  }
`;

const Signature = styled.span`
  font-size: 0.6rem;
  @media (min-width: 411px) {
    font-size: 1rem;
  }
`;
