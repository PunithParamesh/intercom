import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatView from './ChatView';
import DetailsPanel from './DetailsPanel';
import styles from '../../styles/Inbox.module.css';

const initialChats = [
  {
    id: 1,
    name: 'John Doe',
    lastMsg: 'Hey, I need help',
    messages: [
      { from: 'user', text: 'Hey, I need help' },
      { from: 'bot', text: 'Sure! How can I assist?' },
    ],
  },
  {
    id: 2,
    name: 'Alice Smith',
    lastMsg: 'Is the bot live?',
    messages: [
      { from: 'user', text: 'Is the bot live?' },
      { from: 'bot', text: 'Yes! It is live 24/7' },
    ],
  },
  {
    id: 3,
    name: 'Sam Patel',
    lastMsg: 'Thanks for the update!',
    messages: [
      { from: 'user', text: 'Thanks for the update!' },
      { from: 'bot', text: 'You’re welcome!' },
    ],
  },
];

const InboxPage = () => {
  const [chats, setChats] = useState(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(initialChats[0].id);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  // Handler to add a new user message to the selected chat
  const sendMessage = (text) => {
    if (!text.trim()) return;

    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === selectedChatId) {
          const updatedMessages = [
            ...chat.messages,
            { from: 'user', text },
            // Simulate bot response after a delay below
          ];
          return {
            ...chat,
            messages: updatedMessages,
            lastMsg: text,
          };
        }
        return chat;
      })
    );

    // Simulate bot reply after 1 second
    setTimeout(() => {
      setChats((prevChats) =>
        prevChats.map((chat) => {
          if (chat.id === selectedChatId) {
            const botReply = { from: 'bot', text: 'Thanks for your message!' };
            return {
              ...chat,
              messages: [...chat.messages, botReply],
              lastMsg: botReply.text,
            };
          }
          return chat;
        })
      );
    }, 1000);
  };

  return (
    <div className={styles.inboxContainer}>
      <ChatList chats={chats} selectedId={selectedChatId} onSelect={setSelectedChatId} />
      <ChatView chat={selectedChat} onSendMessage={sendMessage} />
      <DetailsPanel chat={selectedChat} />
    </div>
  );
};

export default InboxPage;
