import { TimerAction, TimersState } from '../types/Timer';

export const timersReducer = (
  state: TimersState,
  action: TimerAction
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
