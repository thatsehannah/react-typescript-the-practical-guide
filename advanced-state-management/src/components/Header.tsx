import Button from './ui/ClickableElement.tsx';
import { useTimersContext } from '../state/timers-context.tsx';

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
