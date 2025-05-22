import React from 'react';
import styles from '../../styles/Inbox.module.css';

const ChatList = ({ chats, selectedId, onSelect }) => {
  return (
    <div className={styles.chatList}>
      <h3 className={styles.sectionTitle}>Inbox</h3>
      <ul className={styles.chatItems}>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`${styles.chatItem} ${
              chat.id === selectedId ? styles.activeChat : ''
            }`}
            onClick={() => onSelect(chat.id)}
          >
            <div className={styles.chatName}>{chat.name}</div>
            <div className={styles.lastMsg}>{chat.lastMsg}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
