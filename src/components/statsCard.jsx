
import React from 'react';
import styles from './statsCard.module.css';

function StatsCard({ title, value, trend, note }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.value}>{value}</p>

      {trend && (
        <p className={styles.trend}>{trend}</p>
      )}

      {note && (
        <p className={styles.note}>{note}</p>
      )}
    </article>
  );
}

export default StatsCard;
