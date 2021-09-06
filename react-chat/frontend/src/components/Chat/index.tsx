import { FormEvent, useEffect, useState } from "react"
import queryString from 'query-string';
import { io, Socket } from 'socket.io-client'
import { useLocation } from 'react-router-dom'

import './style.css'
import { InfoBar } from "../InfoBar";
import { Input } from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";

let socket: Socket;

export const Chat: React.FC = () => {
  const { search } = useLocation()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState<Array<Record<"text" | "user", string>>>([])
  const [message, setMessage] = useState("")
  
  useEffect(() => {
    const { name, room } = queryString.parse(search);

    socket = io("localhost:3333", {transports: ['websocket'], upgrade: false});
    
    setName(String(name));
    setRoom(String(room));

    socket.emit("join", { name, room }, (error: any) => {
      if(error) {
        alert(error);
      }
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  )
}