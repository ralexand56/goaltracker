import { Reducer } from 'redux';
import { Actions } from './Actions';
import { BudgetItem } from '../../types';

interface State {
  allIds: string[];
  byId: { [key: string]: BudgetItem };
}
export const initialState: State = { allIds: [], byId: {} };

const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case '[budgetItems] Receive':
      return { ...state, allIds: action.items.map(x => x.id) };

    default:
      return { ...state };
  }
};

export default reducer;
