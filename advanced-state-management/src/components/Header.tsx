import ClickableElement from './ui/ClickableElement.tsx';
import { useTimersContext } from '../state/timers-context.tsx';

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <ClickableElement
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
      </ClickableElement>
    </header>
  );
}
