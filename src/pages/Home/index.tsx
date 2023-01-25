import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownloadCV } from "./DownloadCV";

const LINKLIST = ["Projects", "About", "Contact"];

export function Home() {
  return (
    <Container>
      <Presentation>
        <h3>Hi, I am</h3>
        <h1>Gonçalo</h1>
        <h2>Junior Web Developer</h2>
        <p>
          Thank you for visiting my page,
          <br /> check out more about me and my work
        </p>
      </Presentation>
      <Navigation>
        {LINKLIST.map((label) => {
          return (
            <NavLink to={label.toLowerCase()}>
              <h2>{label}</h2>
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
  padding: 30px 0;
`;

const Presentation = styled.div`
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation = styled.div`
  text-align: center;
  width: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 495px) {
    min-width: 300px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavLink = styled(Link)`
  padding: 10px 30px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
`;
