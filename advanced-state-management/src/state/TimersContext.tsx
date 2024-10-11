import { createContext, ReactNode, useContext, useReducer } from 'react';
import { TimersContextType, TimersState } from '../types/Timer';
import { timersReducer } from './TimersReducer';

//Context
const TimersContext = createContext<TimersContextType | null>(null);

//custom hook for components to use the TimersContext
//abstracts the checking of checking if the TimersContext is null or not
export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error(
      'TimersContext is must be used within an TimersContextProvider.'
    );
  }

  return timersCtx;
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

export const TimersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextType = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
