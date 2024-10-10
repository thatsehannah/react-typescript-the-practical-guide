import { createContext, ReactNode, useContext, useReducer } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

type TimersContextType = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

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

type TimersContextProviderProps = {
  children: ReactNode;
};

//discriminated union
type ReducerAction =
  | { type: 'START_TIMERS' }
  | { type: 'STOP_TIMERS' }
  | { type: 'ADD_TIMER'; payload: Timer };

const timersReducer = (
  state: TimersState,
  action: ReducerAction
): TimersState => {
  switch (action.type) {
    case 'START_TIMERS': {
      return {
        ...state,
        isRunning: true,
      };
    }
    case 'STOP_TIMERS': {
      return {
        ...state,
        isRunning: false,
      };
    }
    case 'ADD_TIMER': {
      const newTimer = action.payload;
      return {
        ...state,
        timers: [...state.timers, newTimer],
      };
    }
    default:
      return state;
  }
};

export const TimersContextProvider = ({
  children,
}: TimersContextProviderProps) => {
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
