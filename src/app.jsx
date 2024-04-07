import { createContext } from 'react';
import { createStore } from './create-store';
import { reducer } from './reducer';

import { Step } from './components/step';
import { Counter } from './components/counter';

const DEFAULT_STATE = {
  counter: 1,
  stepSize: 1,
};

export const Context = createContext(null);

export const App = () => (
  <Context.Provider value={createStore(reducer, DEFAULT_STATE)}>
    <Step />
    <Counter />
  </Context.Provider>
);
