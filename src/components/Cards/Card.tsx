import styled, { css } from "styled-components";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { Counter } from "../Counter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface CardProps {
  index: number;
  dateSince: string;
  isFinished: boolean;
  image: string;
  name: string;
  subTitle: string;
  description: string;
  techs: Array<{ name: string; color: string; link: string }>;
  github: string;
  live: string;
  warning?: string;
}

export function Card({
  index,
  dateSince,
  isFinished,
  image,
  name,
  subTitle,
  description,
  techs,
  github,
  live,
  warning,
}: CardProps) {
  const [showMoreDesc, setShowMoreDesc] = useState<boolean>(false);
  const { lightMode } = useContext(ThemeContext);
  const sliceTheFirstPhrase = description.slice(0, description.indexOf(".") + 1);
  return (
    <Container index={index} lightMode={lightMode}>
      <SideBox>
        <a href={live} target="_blank" rel="noreferrer">
          <Image src={image} />
        </a>
      </SideBox>
      <Wrapper>
        <CenterBox>
          <h2>{name}</h2>
          <Techs>
            {"{"}
            {techs.map((tech, index) => {
              return (
                <Tech
                  key={index}
                  style={{ color: tech.color }}
                  href={tech.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tech.name} ,
                </Tech>
              );
            })}
            {"}"}
          </Techs>
          <p>{subTitle}</p>
          {warning && <Warning>{warning}</Warning>}
          <DescriptionBox showMoreDesc={showMoreDesc}>
            <Description>
              {description.length > 350 ? (
                <span>{!showMoreDesc ? sliceTheFirstPhrase : description}</span>
              ) : (
                description
              )}
            </Description>
            <DescriptionButton onClick={() => setShowMoreDesc(!showMoreDesc)}>
              {!showMoreDesc ? "Read more" : "less"}
            </DescriptionButton>
          </DescriptionBox>
        </CenterBox>
        <Counter startTime={new Date(dateSince)} isFinished={isFinished} />
      </Wrapper>
      <Links>
        <a href={github} target="_blank" rel="noreferrer">
          <TbBrandGithub className="mx-4" />
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          <MdOpenInNew className="mx-4" />
        </a>
      </Links>
    </Container>
  );
}

type ContainerProps = {
  index: number;
  lightMode: boolean;
};

const Container = styled.div<ContainerProps>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  border-radius: 10px;
  @media (min-width: 980px) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
    height: 50vh;
  }
  @media (max-width: 980px) {
    align-items: flex-start;
    max-width: 600px;
    width: 65vw;
  }
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 180px;
  @media (max-width: 980px) {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 980px) {
    width: 65vw;
    height: 110px;
    max-width: 600px;
    object-position: 50% -0%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
  & > * {
    margin: 10px 0;
  }
  @media (max-width: 980px) {
    h2 {
      font-size: 5vw;
    }
  }
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 620px;
  @media (max-width: 980px) {
    font-size: calc(5px + min(1vw, 20px));
  }
`;

const Techs = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > * {
    margin: 0 5px;
  }
  @media (max-width: 980px) {
    font-size: calc(5px + min(2vw, 12px));
  }
`;

const Tech = styled.a`
  color: gray;
`;

const Warning = styled.p`
  color: #c20000;
  font-size: 0.8rem;
`;

const DescriptionBox = styled.div<{
  showMoreDesc: boolean;
}>`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 980px) {
    width: 60vw;
    padding-right: 10px;
  }
`;

const Description = styled.p`
  height: 100%;
  width: 100%;
  margin-right: 10px;
  overflow-y: hidden;
  overflow-y: scroll;
  @media (max-width: 980px) {
    font-size: calc(5px + min(1.8vw, 20px));
  }
`;

const DescriptionButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0 0.5rem;
  color: gray;
`;

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  ${Tech} {
    color: rgb(13, 16, 23);
  }
  ${DescriptionButton} {
    color: rgb(200, 200, 200);
  }
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 2.5rem;
  & > * {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 980px) {
    flex-direction: column;
  }
`;
