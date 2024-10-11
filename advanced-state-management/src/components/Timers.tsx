import { useTimersContext } from '../state/timers-context';
import Timer from './Timer';

const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer
            name={timer.name}
            duration={timer.duration}
          />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
