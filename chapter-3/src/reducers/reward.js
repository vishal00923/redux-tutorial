import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  points: 15,
};

export const increment = createAction('reward/increment');
export const incrementByAmount = createAction('reward/incrementByAmount');

const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.points++;
  });
  builder.addCase(incrementByAmount, (state, action) => {
    state.points += action.payload;
  });
});

export default rewardReducer;
