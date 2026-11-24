
import React from 'react';
import styles from './Sidebar.module.css';
import navigation from '../data/navigation.json';

function Sidebar({ activeSection, onNavigate, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Close navigation menu"
          onClick={onClose}
        />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        aria-label="Main sidebar"
      >
        <div className={styles.brand}>
          <img
            src="/click_logo.svg"
            alt="CLICK"
            className={styles.logo}
          />
          <span className={styles.brandSubtitle}>
            ECOMMERCE ADMIN
          </span>
        </div>

        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.navItem} ${
                activeSection === item.id ? styles.active : ''
              }`}
              aria-label={item.aria_label}
              aria-current={activeSection === item.id ? 'page' : undefined}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.footer}>
          <span>Operations Workspace</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
