import * as ActionTypes from './types';

export const counterIncrease = () => ({
  type: ActionTypes.INCREASE,
});
export const counterIncreaseAsync = () => ({
  type: ActionTypes.INCREASE_ASYNC,
});

export const counterDecrease = () => ({
  type: ActionTypes.DECREASE,
});
export const counterDecreaseAsync = () => ({
  type: ActionTypes.DECREASE_ASYNC,
});
