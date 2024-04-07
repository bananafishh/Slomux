import { useSelector } from '../custom-hooks/use-selector'
import { useDispatch } from '../custom-hooks/use-dispatch';
import { updateCounter } from '../action-creators/update-counter';

export const Counter = () => {
  const { counter, stepSize } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(updateCounter(-stepSize))}>-</button>
      <span> {counter} </span>
      <button onClick={() => dispatch(updateCounter(stepSize))}>+</button>
    </div>
  );
};
