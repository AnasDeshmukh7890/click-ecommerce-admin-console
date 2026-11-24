
import React, { useMemo } from 'react';
import transactions from '../data/transactions.json';
import styles from './SalesOverview.module.css';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

function SalesOverview() {
  const salesData = useMemo(() => {
    const paidTransactions = transactions.filter(
      (transaction) => transaction.status === 'Paid'
    );

    const totalSales = paidTransactions.reduce(
      (total, transaction) => total + transaction.amount_inr,
      0
    );

    const totalOrders = paidTransactions.length;

    const averageOrderValue =
      totalOrders > 0 ? totalSales / totalOrders : 0;

    const channelData = Object.values(
      paidTransactions.reduce((result, transaction) => {
        const channel = transaction.channel;

        if (!result[channel]) {
          result[channel] = {
            name: channel,
            sales: 0,
            orders: 0,
          };
        }

        result[channel].sales += transaction.amount_inr;
        result[channel].orders += 1;

        return result;
      }, {})
    ).sort((a, b) => b.sales - a.sales);

    return {
      totalSales,
      totalOrders,
      averageOrderValue,
      channelData,
    };
  }, []);

  const highestChannelSales = Math.max(
    ...salesData.channelData.map((channel) => channel.sales),
    1
  );

  return (
    <div className={styles.container}>
      <section className={styles.summaryGrid}>
        <article className={styles.summaryCard}>
          <p className={styles.cardLabel}>Total Paid Sales</p>
          <h3>{formatCurrency(salesData.totalSales)}</h3>
          <span>Revenue from paid transactions</span>
        </article>

        <article className={styles.summaryCard}>
          <p className={styles.cardLabel}>Paid Orders</p>
          <h3>{salesData.totalOrders}</h3>
          <span>Successfully paid transactions</span>
        </article>

        <article className={styles.summaryCard}>
          <p className={styles.cardLabel}>Average Order Value</p>
          <h3>{formatCurrency(salesData.averageOrderValue)}</h3>
          <span>Average amount per paid order</span>
        </article>
      </section>

      <section className={styles.channelSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h3>Sales by Channel</h3>
            <p>Paid sales performance across channels</p>
          </div>
        </div>

        {salesData.channelData.map((channel) => (
          <div className={styles.channelItem} key={channel.name}>
            <div className={styles.channelInfo}>
              <strong>{channel.name}</strong>
              <span>{formatCurrency(channel.sales)}</span>
            </div>

            <progress
              className={styles.progressTrack}
              value={channel.sales}
              max={highestChannelSales}
              aria-label={`${channel.name} sales contribution`}
            />

            <p className={styles.orderCount}>
              {channel.orders} paid orders
            </p>
          </div>
        ))}

        {salesData.channelData.length === 0 && (
          <p className={styles.empty}>
            No paid sales data available.
          </p>
        )}
      </section>
    </div>
  );
}

export default SalesOverview;
