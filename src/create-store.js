export const createStore = (reducer, initialState) => {
  let currentState = initialState;
  let listeners = [];
  
  const getState = () => currentState;
  
  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(item => item !== listener);
    }
  };

  return { getState, dispatch, subscribe };
};
