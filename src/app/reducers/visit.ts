import { VisitGroup } from '../models/visit-group';
import * as visit from '../actions/visit';


export interface State {
  total: number;
  visitGroup: VisitGroup;
}

const initialState: State = {
  total: 0,
  visitGroup: null
};

export function reducer(state = initialState, action: visit.Actions): State {
  switch (action.type) {
    case visit.ActionTypes.ON_VISIT:
      return {
        total: state.total + 1
      };

    default:
      return state;
  }
}

export const getTotal = (state: State) => state.total;
