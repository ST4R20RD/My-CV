import styled from "styled-components";
import { PROJECTS } from "../../lib/data";
import { Card } from "./Card";

export function Cards() {
  return (
    <Container>
      <h1>Projects</h1>
      <TextBox>
        Welcome to my project page!
        <br />
        Here you'll find a selection of my most recent and notable work.
        <br />
        Take a look around and let me know what you think.
        <br />
      </TextBox>
      <Wrapper>
        {PROJECTS.map((project, index) => {
          return <Card key={index} index={index} {...project} />;
        })}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h1 {
    margin-top: 50px;
    font-size: calc(10px + min(5vw, 48px));
  }
`;

const TextBox = styled.p`
  text-align: center;
  max-width: 820px;
  margin-bottom: 20px;
  font-size: calc(8px + min(1vw, 24px));
  /* @media (max-width: 722px) {
    font-size: smaller;
  }
  @media (max-width: 495px) {
    font-size: x-small;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`;
