import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Inbox', path: '/inbox', icon: '📥' },
    { label: 'Bot Settings', path: '/bot-settings', icon: '🤖' },
    { label: 'Workflows', path: '/workflows', icon: '🔧' },
    { label: 'Help Center', path: '/help-center', icon: '📚' },
    { label: 'Team', path: '/team', icon: '👥' },
  ];

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
      <div className={styles.logo}>🧠 InterClone</div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            onClick={closeSidebar}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.text}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
