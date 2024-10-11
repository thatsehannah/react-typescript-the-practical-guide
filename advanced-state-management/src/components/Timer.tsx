import { Timer as TimerProps } from '../types/Timer.ts';
import Container from './ui/Container.tsx';

const Timer = ({ name, duration }: TimerProps) => {
  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>Duration: {duration} seconds</p>
    </Container>
  );
};

export default Timer;
