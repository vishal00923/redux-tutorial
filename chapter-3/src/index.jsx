import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rewardReducer from './reducers/reward';
import bonusRedcuer from './slices/bonusSlice';
import accountReducer from './slices/accountSlice';

import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    bonus: bonusRedcuer,
    reward: rewardReducer,
    account: accountReducer,
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
