import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <Link>
          <FiGithub />
        </Link>
        <Link>
          <FaLinkedinIn />
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
