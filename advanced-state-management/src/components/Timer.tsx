import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps } from '../types/Timer.ts';
import Container from './ui/Container.tsx';
import { useTimersContext } from '../state/TimersContext.tsx';

const Timer = ({ name, duration }: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000); //converts duration to milliseconds
  const intervalRef = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  // if (remainingTime <= 0 && intervalRef.current) {
  //   clearInterval(intervalRef.current);
  // }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

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
