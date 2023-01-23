import styled from "styled-components";
import { PROJECTS } from "../../lib/data";
import { Card } from "./Card";

export function Cards() {
  return (
    <Container>
      <h1>Projects</h1>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 0 10px;
  }
`;
