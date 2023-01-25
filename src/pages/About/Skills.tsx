import { FaNodeJs, FaHtml5, FaGithub, FaFigma, FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript, IoLogoNpm } from "react-icons/io5";
import {
  SiFirebase,
  SiJson,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

import styled from "styled-components";

export function Skills() {
  return (
    <Container>
      <Wrapper>
        <FaNodeJs />
        <IoLogoJavascript />
        <SiTypescript />
        <GrReactjs />
        <SiMongodb />
        <SiFirebase />
        <FaHtml5 />
        <IoLogoCss3 />
        <SiTailwindcss />
        <FaSass />
        <SiStyledcomponents />
        <IoLogoNpm />
        <DiGit />
        <FaGithub />
        <SiJson />
        <FaFigma />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 300px;
  font-size: 3rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
  & > * {
    margin: 10px;
  }
`;
