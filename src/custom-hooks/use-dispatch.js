import { useContext } from 'react';
import { Context } from '../app';

export const useDispatch = () => {
  const { dispatch } = useContext(Context);

  return dispatch;
};