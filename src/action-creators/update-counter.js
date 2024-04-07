import { UPDATE_COUNTER } from '../actions';

export const updateCounter = value => ({
  type: UPDATE_COUNTER,
  payload: value,
});
