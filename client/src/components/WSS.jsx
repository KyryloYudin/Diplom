import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const WSS = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [connected, setConnected] = useState(false); // Добавленное состояние

  const socket = useRef(null);

  useEffect(() => {
    const username = prompt('Please enter your username:');
    setUsername(username);

    // Инициализация WebSocket соединения
    socket.current = new WebSocket('ws://localhost:5000');

    // Обработчик открытия соединения
    socket.current.onopen = () => {
      console.log('WebSocket connected');
      setConnected(true);
    };

    // Обработчик закрытия соединения
    socket.current.onclose = () => {
      console.log('WebSocket disconnected');
      setConnected(false);
    };

    // Обработчик получения сообщения
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      // Закрытие WebSocket соединения при размонтировании компонента
      socket.current.close();
    };
  }, []);

  const sendMessage = () => {
    // Отправка сообщения через WebSocket
    const message = {
      username,
      message: value,
      date: new Date().toISOString(),
    };
    socket.current.send(JSON.stringify(message));
    setValue('');
  };

  return (
    <div className="center">
      <div className="form1">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage} disabled={!connected}>
          Send
        </button>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <strong>{msg.username}: </strong>
            {msg.message} ({msg.date})
          </div>
        ))}
      </div>
    </div>
  );
};

export default WSS;
