import { CHANGE_STEP_SIZE } from '../actions';

export const changeStepSize = value => ({
  type: CHANGE_STEP_SIZE,
  payload: value,
});