import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { Counter } from "../Counter";

interface CardProps {
  index: number;
  dateSince: string;
  isFinished: boolean;
  image: string;
  name: string;
  subTitle: string;
  description: string;
  techs: Array<string>;
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
  return (
    <Container index={index}>
      <SideBox>
        <Image src={image} />
        <Links>
          <a href={github} target="_blank" rel="noreferrer">
            <TbBrandGithub className="mx-4" />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <MdOpenInNew className="mx-4" />
          </a>
        </Links>
      </SideBox>
      <Wrapper>
        <h2>{name}</h2>
        <p>{subTitle}</p>
        {warning && <Warning>{warning}</Warning>}
        <Description>{description}</Description>
        <Techs>
          {techs.map((tech, index) => {
            return <Tech key={index}>{tech}</Tech>;
          })}
        </Techs>
        <Counter startTime={new Date(dateSince)} isFinished={isFinished} />
      </Wrapper>
    </Container>
  );
}

type ContainerProps = {
  index: number;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
  border-radius: 10px;
  & > * {
    margin: 20px;
  }
  @media (min-width: 660px) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Image = styled.img`
  max-height: 200px;
  height: 60%;
  max-width: 100px;
  object-fit: cover;
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 2.5rem;
`;

const Warning = styled.p`
  color: red;
  font-size: 0.7rem;
`;

const Description = styled.p`
  max-height: 50%;
  margin-right: 10px;
  overflow-y: hidden;
  :hover {
    overflow-y: overlay;
  }
`;

const Techs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 0 20px;
  }
`;

const Tech = styled.p`
  color: gray;
`;
