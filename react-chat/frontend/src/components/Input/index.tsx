import { FormEvent } from 'react';
import './style.css';

interface InputProps {
  setMessage: (value: string) => void; 
  sendMessage: (event: FormEvent) => void; 
  message: string;
}

export const Input: React.FC<InputProps> = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)