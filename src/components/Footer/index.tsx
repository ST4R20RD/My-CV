import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
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
        <Links>
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
        </Links>
      </Wrapper>
    </Container>
  );
}

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.03) 100%
  );
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1rem;
  padding: 10px;
  border: solid 1px;
  border-radius: 10%;
  background: #fff;
  svg {
    color: black;
  }
`;

const Signature = styled.span``;
