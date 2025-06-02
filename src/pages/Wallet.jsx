import React, { useState } from 'react';

function Wallet() {
  const [balance, setBalance] = useState(100);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'credit', amount: 50, description: 'Referral reward' },
    { id: 2, type: 'debit', amount: 30, description: 'Session booked' },
  ]);

  const addCredit = () => {
    const amount = 20;
    setBalance(balance + amount);
    setTransactions([{ id: Date.now(), type: 'credit', amount, description: 'Bonus credits' }, ...transactions]);
  };

  return (
    <main className="wallet-page">
      <h2>Wallet</h2>
      <p>Your current barter credit balance:</p>
      <div className="balance">{balance} Credits</div>

      <button onClick={addCredit} className="btn-submit" style={{ marginBottom: '1rem' }}>
        Add 20 Credits
      </button>

      <section className="transactions">
        <h3>Transaction History</h3>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map(({ id, type, amount, description }) => (
              <li key={id} className={type}>
                <span>{description}</span>
                <span>{type === 'credit' ? '+' : '-'}{amount} Credits</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Wallet;


