import { useState, useEffect } from "react";
import styled from "styled-components";

interface CountUpProps {
  startTime: Date;
  isFinished: boolean;
}

export function Counter({ startTime, isFinished }: CountUpProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeDifference = (currentTime.getTime() - startTime.getTime()) as number;

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <Container>
      <Wrapper>
        <h3>Time since start: </h3>
        <div>
          <p>{days}</p>
          <p>days</p>
        </div>
        <div>
          <p>{hours}</p>
          <p>hours</p>
        </div>
        <div>
          <p>{minutes}</p>
          <p>minutes</p>
        </div>
        <div>
          <p>{seconds}</p>
          <p>seconds</p>
        </div>
        <div>{!isFinished ? ", still in development." : ", now finished."}</div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    margin: 0 10px;
  }
`;
