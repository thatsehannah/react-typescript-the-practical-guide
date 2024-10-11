export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

//discriminated union
export type TimerAction =
  | { type: 'START_TIMERS' }
  | { type: 'STOP_TIMERS' }
  | { type: 'ADD_TIMER'; payload: Timer };

export type TimersContextType = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
