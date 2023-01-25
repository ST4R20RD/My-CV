import styled from "styled-components";
import { Skills } from "./Skills";

export function About() {
  return (
    <Container>
      <Wrapper>
        <Box>
          <ProfilePic src="images/GonçaloEstrelado.JPEG" />
          <Skills />
        </Box>
        <TextBox>
          <h1>About Me</h1>I am a highly skilled front-end developer with expertise in full stack
          development using the MERN stack (MongoDB, Express, React, NodeJS) and a passion for UX/UI
          design. I have completed a Full Stack Developer Bootcamp with Ironhack, which has given me
          a solid understanding of web development best practices and the ability to create dynamic
          and responsive user interfaces. My proficiency in HTML, CSS, and JavaScript allows me to
          write clean, efficient code that meets the latest web standards. I am well-versed in the
          latest web development technologies and have a solid understanding of the entire web
          development process, from design to deployment. I am a team player and have excellent
          problem-solving and communication skills, and I am always eager to learn and stay current
          with the latest industry trends and developments.
        </TextBox>
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  padding: 30px;
  border-radius: 30px;
  margin: 3rem 0;
  & > * {
    margin: 1rem;
  }
  @media (min-width: 940px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 20px 0;
  }
`;

const ProfilePic = styled.img`
  max-height: 20rem;
  max-width: 240px;
  border-radius: 30px;
`;

const TextBox = styled.p`
  max-width: 500px;
  margin-bottom: 10rem;
`;
