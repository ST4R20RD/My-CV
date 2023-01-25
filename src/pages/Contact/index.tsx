import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import styled, { css } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Contact() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper lightMode={lightMode}>
        <h1>Contact Me!</h1>
        <GreetBox>
          Thank you for visiting my portfolio! I hope you find my work interesting and relevant to
          your needs. <br />
          If you have any questions or would like to discuss a potential project, please don't
          hesitate to contact me. <br />I look forward to hearing from you!
        </GreetBox>
        <Links>
          <Link href="https://github.com/ST4R20RD" target="_blank" rel="noreferrer">
            <FiGithub />
            /ST4R20RD
          </Link>
          <Link
            href="https://www.linkedin.com/in/goncaloestrelado/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            /goncaloestrelado
          </Link>
          <Link href="mailto:goncalo.estrelado@hotmail.com">
            <FiMail />
            goncalo.estrelado@hotmail.com
          </Link>
        </Links>
      </Wrapper>
    </Container>
  );
}

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 30px;
`;

const GreetBox = styled.p`
  width: 100%;
  text-align: center;
  margin: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1rem;
  padding: 10px;
  border: solid 1px;
  border-radius: 20px;
  background: #fff;
  color: black;
  svg {
    margin-right: 10px;
  }
`;
