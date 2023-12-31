import { produce } from 'immer';

import { ActionTypes, ActionTypesProps } from './actions';

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

interface CyclesInitialState {
  cycles: Cycle[];
  activeCycleId: null;
}

export function cyclesInitializer(
  initialState: CyclesInitialState,
): CyclesState | CyclesInitialState {
  const storageStateAsJSON = localStorage.getItem(
    '@ignite-timer:cycles-state-1.0.0',
  );

  if (storageStateAsJSON !== null) {
    return JSON.parse(storageStateAsJSON) as CyclesState;
  }

  return initialState;
}

export function cyclesReducer(
  state: CyclesState,
  action: ActionTypesProps,
): CyclesState {
  switch (action.type) {
    case ActionTypes.addNewCycle:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionTypes.interruptCurrentCycle: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }
    case ActionTypes.markCurrentCycleAsFinished: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }
    default:
      return state;
  }
}
