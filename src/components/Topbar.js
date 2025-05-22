// src/components/Topbar.jsx
import React from 'react';
import styles from '../styles/Topbar.module.css';

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={toggleSidebar}>
          ☰
        </button>
        <div className={styles.pageTitle}>Welcome back 👋</div>
      </div>
      <div className={styles.rightSection}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search anything..."
        />
        <div className={styles.avatar}>
          <img src="https://i.pravatar.cc/40" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
