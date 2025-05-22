import React from 'react';
import styles from '../../styles/Inbox.module.css';

const DetailsPanel = ({ chat }) => {
  if (!chat) return <div className={styles.detailsPanel}>No conversation selected.</div>;

  return (
    <div className={styles.detailsPanel}>
      <h4>Conversation Details</h4>
      <p>User: {chat.name}</p>
      <p>Email: {chat.name.toLowerCase().replace(' ', '.')}@example.com</p>
      {/* Add more details here if desired */}
    </div>
  );
};

export default DetailsPanel;
