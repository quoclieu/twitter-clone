import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MessageInput from './components/MessageInput';
import Newsfeed from './components/Newsfeed';
import LoadingSpinner from './components/LoadingSpinner';

import { firebaseMessages } from './firebase.js';

import './App.css';

const Heading = styled.h1`
  font-size: 20px;
  color: white;
  border: 1px solid ${props => props.theme.borderColor};
  border-top: none;
  margin: 0;
  padding: 20px;
`;

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const refreshMessages = () => {
    firebaseMessages.on('value', snapshot => {
      setLoading(false);
      setMessages(snapshot.val());
    });
  };

  useEffect(() => {
    refreshMessages();
  }, []);

  const handleSubmit = ({ user, message }) => {
    if (user && message) {
      firebaseMessages
        .push()
        .set({
          user,
          message,
          date: new Date().toString()
        })
        .then(() => refreshMessages());
    }
  };

  return (
    <div>
      <header>
        <Heading>Home</Heading>
        <MessageInput onSubmit={handleSubmit} />
        {isLoading ? <LoadingSpinner /> : <Newsfeed messages={messages} />}
      </header>
    </div>
  );
};

export default App;
