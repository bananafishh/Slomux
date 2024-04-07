import { useContext, useEffect, useState } from 'react';
import { Context } from '../app';

export const useSelector = selector => {
  const { getState, subscribe } = useContext(Context);
  
  const [, updateState] = useState();
  const forceUpdate = () => updateState({});

  useEffect(() => {
    const unsubscribe = subscribe(forceUpdate);
    
    return unsubscribe;
  }, [subscribe]);
  
  return selector(getState());
};
