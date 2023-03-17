import { useSelector } from 'react-redux';

import './App.css';

import Bonus from './components/Bonus';
import Account from './components/Account';

export default function App() {
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  return (
    <div className='App'>
      <h4>App</h4>
      {account.pending ? (
        <p>loading....</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount} </h3>
      )}
      <h3>Total Bonus : {points}</h3>

      <Account />
      <Bonus />
    </div>
  );
}
