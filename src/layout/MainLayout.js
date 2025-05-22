import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import styles from '../styles/Layout.module.css';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <div className={styles.main}>
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
 ;
