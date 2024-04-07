import { UPDATE_COUNTER, CHANGE_STEP_SIZE } from './actions';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_COUNTER:
      return { ...state, counter: state.counter + payload };

    case CHANGE_STEP_SIZE:
      return { ...state, stepSize: payload };

    default:
      return state;
  }
};
