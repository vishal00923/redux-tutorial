import {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from '../api/adminSlice';

export const Admin = () => {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();

  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Admin Component</b>
        </h4>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data &&
          data.map((account, idx) => (
            <p key={idx}>
              {account.id} : {account.amount}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account -
              </button>
              <button
                onClick={() => updateAccount({ amount: 108, id: account.id })}
              >
                Update Account
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account +
        </button>
      </div>
    </div>
  );
};
