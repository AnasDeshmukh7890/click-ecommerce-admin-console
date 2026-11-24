
import React from 'react';
import StatsCard from './statsCard';
import TransactionTable from './TransactionTable';
import SalesOverview from './SalesOverview';
import styles from '../App.module.css';
import summary from '../data/summary.json';

function MainContent({ activeSection }) {
  const sectionTitles = {
    dashboard: 'Dashboard',
    sales: 'Sales',
    transactions: 'Transactions',
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: summary.currency,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <main className={styles.content}>
      <div className={styles.pageHeading}>
        <h2>{sectionTitles[activeSection]}</h2>
        <p>
          Monitor commerce performance and transaction activity
        </p>
      </div>

      {activeSection === 'dashboard' && (
        <>
          <div className={styles.statsGrid}>
            <StatsCard
              title="Net Paid Sales"
              value={formatCurrency(summary.net_paid_sales_inr)}
              trend="+8.2%"
            />

            <StatsCard
              title="Transactions"
              value={summary.total_transactions}
              trend="+12.3%"
            />

            <StatsCard
              title="Paid Orders"
              value={summary.paid_orders}
              trend="+5.4%"
            />

            <StatsCard
              title="Processing"
              value={summary.processing_orders}
              note="Needs review"
            />
          </div>

          <TransactionTable limit={5} />
        </>
      )}

      {activeSection === 'sales' && <SalesOverview />}

      {activeSection === 'transactions' && <TransactionTable />}
    </main>
  );
}

export default MainContent;
