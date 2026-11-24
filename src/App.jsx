
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  return (
    <div className={styles.app}>
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />

      <div className={styles.mainArea}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={
              isSidebarOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isSidebarOpen}
            onClick={handleToggleSidebar}
          >
            <span />
            <span />
            <span />
          </button>

          <div>
            <h1>Operations Overview</h1>
            <p>CLICK Ecommerce Admin</p>
          </div>

          <div className={styles.headerDate}>
            {new Date().toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})}
          </div>
        </header>

        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
