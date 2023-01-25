import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import styled from "styled-components";

export function Contact() {
  return (
    <Container>
      <Wrapper>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
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
