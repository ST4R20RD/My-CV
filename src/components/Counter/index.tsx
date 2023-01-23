import { useState, useEffect } from "react";

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

  const formattedTime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  return (
    <div>
      <h3>
        Time since start: {formattedTime}{" "}
        {!isFinished ? ", still in development." : ", now finished."}
      </h3>
    </div>
  );
}
