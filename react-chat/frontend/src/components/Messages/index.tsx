
import React from 'react';

// import ScrollToBottom from 'react-scroll-to-bottom';

import { Message } from './Message';

import './style.css';

interface MessagesProps {
  messages: Array<Record<"text" | "user", string>>;
  name: string;
}

export const Messages: React.FC<MessagesProps> = ({ messages, name }) => (
  <div className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </div>
);

export default Messages;