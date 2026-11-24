
import React, { useMemo, useState } from 'react';
import transactions from '../data/transactions.json';
import styles from './TransactionTable.module.css';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

function TransactionTable({ limit }) {
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredTransactions = useMemo(() => {
    const sortedTransactions = [...transactions].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const filtered = statusFilter === 'All'
      ? sortedTransactions
      : sortedTransactions.filter(
        (transaction) => transaction.status === statusFilter
      );

    return limit ? filtered.slice(0, limit) : filtered;
  }, [statusFilter, limit]);

  return (
    <section className={styles.container}>
      <div className={styles.tableHeader}>
        <div>
          <h3 className={styles.title}>Recent Transactions</h3>
          <p className={styles.subtitle}>
            Transaction activity and payment status
          </p>
        </div>

        <label className={styles.filterLabel}>
          <span>Filter by status</span>
          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Processing">Processing</option>
            <option value="Refunded">Refunded</option>
            <option value="Failed">Failed</option>
          </select>
        </label>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Channel</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.transaction_id}>
                  <td className={styles.transactionId}>
                    {transaction.transaction_id}
                  </td>
                  <td>{formatDate(transaction.date)}</td>
                  <td>{transaction.customer}</td>
                  <td className={styles.amount}>
                    {formatCurrency(transaction.amount_inr)}
                  </td>
                  <td>{transaction.channel}</td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        styles[transaction.status.toLowerCase()]
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.empty}>
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.tableFooter}>
        Showing {filteredTransactions.length}
        {limit ? ' recent' : ' of 64'} transactions
      </div>
    </section>
  );
}

export default TransactionTable;
