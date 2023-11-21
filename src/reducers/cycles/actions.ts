import { Cycle } from './reducer';

export enum ActionTypes {
  addNewCycle = 'addNewCycle',
  interruptCurrentCycle = 'interruptCurrentCycle',
  markCurrentCycleAsFinished = 'markCurrentCycleAsFinished',
}

export type ActionTypesProps =
  | { type: ActionTypes.addNewCycle; payload: { newCycle: Cycle } }
  | { type: ActionTypes.interruptCurrentCycle }
  | { type: ActionTypes.markCurrentCycleAsFinished };

export function addNewCycleAction(newCycle: Cycle): ActionTypesProps {
  return {
    type: ActionTypes.addNewCycle,
    payload: { newCycle: newCycle },
  };
}

export function markCurrentCycleAsFinishedAction(): ActionTypesProps {
  return {
    type: ActionTypes.markCurrentCycleAsFinished,
  };
}

export function interruptCurrentCycleAction(): ActionTypesProps {
  return {
    type: ActionTypes.interruptCurrentCycle,
  };
}
