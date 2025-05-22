import React, { useState, useEffect } from 'react';
import styles from '../../styles/Inbox.module.css';

const ChatView = ({ chat, onSendMessage }) => {
  const [input, setInput] = useState('');
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    // Reset input and trigger re-animation by changing key when chat changes
    setInput('');
    setAnimKey((prev) => prev + 1);
  }, [chat?.id]);

  if (!chat) return <div className={styles.chatView}>No conversation selected.</div>;

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div key={animKey} className={styles.chatView}>
      <div className={styles.messages}>
        {chat.messages.map((msg, i) => (
          <div
            key={i}
            className={msg.from === 'bot' ? styles.messageBot : styles.message}
          >
            {msg.from === 'bot' ? 'Bot: ' : 'User: '}
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.messageInput}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatView;
