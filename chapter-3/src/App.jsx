import { useSelector } from 'react-redux';

import { Bonus } from './components/Bonus';
import { Reward } from './components/Reward';
import { Account } from './components/Account';

import './App.css';

export default function App() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  return (
    <div className='App'>
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account />
      <Bonus />
      <Reward />
    </div>
  );
}
