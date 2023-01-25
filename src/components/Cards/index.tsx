import styled from "styled-components";
import { PROJECTS } from "../../lib/data";
import { Card } from "./Card";

export function Cards() {
  return (
    <Container>
      <h1>Projects</h1>
      <TextBox>
        Welcome to my project page! Here you'll find a selection of my most recent and notable work.
        <br /> Take a look around and let me know what you think. I'd be happy to discuss any of the
        projects in more detail.
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
    margin-top: 30px;
  }
`;

const TextBox = styled.p`
  text-align: center;
  max-width: 820px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`;
