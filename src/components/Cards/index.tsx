import styled from "styled-components";
import { PROJECTS } from "../../lib/data";
import { Card } from "./Card";

export function Cards() {
  return (
    <Wrapper>
      {PROJECTS.map((project, index) => {
        return <Card key={index} index={index} {...project} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`;
