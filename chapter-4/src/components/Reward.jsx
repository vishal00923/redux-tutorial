import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../reducers/reward';

export const Reward = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);

  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total point : {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <input type='text' onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
};
