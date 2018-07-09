import { BudgetItem } from '../../types';
import { ActionCreatorsMapObject } from 'redux';

export enum ActionsKeys {
  BUDGETITEMS_RECEIVE = '[budgetItems] Receive'
}

export const Actions = {
    receiveBudgetItems: 
}

export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

function createAction<T extends string>(type: T): Action<T>;
function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export type Actions = ActionsUnion<typeof Actions>;
