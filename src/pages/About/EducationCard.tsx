import styled from "styled-components";
import { IoMdSchool } from "react-icons/io";

export function EducationCard() {
  return (
    <Container>
      <Content>
        <Text>
          <Icon>
            <IoMdSchool />
          </Icon>
          <P>Education</P>
        </Text>
        <Span>
          400+ hours <br /> Ironhack Bootcamp
        </Span>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  border-radius: 9999px;
  margin-bottom: 10px;
  width: 15rem;
  height: 4rem;
  @media (min-width: 430px) {
    width: 24rem;
    height: 6rem;
  }
`;

const Content = styled.div`
  height: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  @media (min-width: 430px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const Icon = styled.span`
  display: inline-block;
  margin-left: 0.5rem /* 8px */;
  margin-right: 0.5rem /* 8px */;
`;

const P = styled.p`
  display: inline-block;
`;

const Span = styled.span`
  font-size: 10px;
  @media (min-width: 430px) {
    font-size: 16px;
  }
`;
