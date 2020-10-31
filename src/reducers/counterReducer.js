import * as ActionTypes from '../actions/types';

const initialState = 0;

export default (state = initialState, {type}) => {
  switch (type) {
    case ActionTypes.INCREASE:
      return state + 1;

    case ActionTypes.DECREASE:
      return state - 1;

    default:
      return state;
  }
};
