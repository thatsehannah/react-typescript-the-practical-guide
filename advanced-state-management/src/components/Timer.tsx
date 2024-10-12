import { useEffect, useState } from 'react';
import { Timer as TimerProps } from '../types/Timer.ts';
import Container from './ui/Container.tsx';

const Timer = ({ name, duration }: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000); //converts duration to milliseconds

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress
          max={duration * 1000}
          value={remainingTime}
        ></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
};

export default Timer;
