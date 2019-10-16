import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MessageInput from './components/MessageInput';
import Newsfeed from './components/Newsfeed';
import CircularProgress from '@material-ui/core/CircularProgress';
import twittericon from './images/twittericon.png';

import { firebaseMessages } from './firebase.js';

import './App.css';

const Heading = styled.h1`
  font-size: 20px;
  color: white;
  border: 1px solid ${props => props.theme.borderColor};
  border-top: none;
  margin: 0;
  padding: 20px;
  display: flex;
  align-items: center;
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

  const handleSubmit = ({ user, message, color }) => {
    if (user && message) {
      firebaseMessages
        .push()
        .set({
          user,
          message,
          date: new Date().toString(),
          color
        })
        .then(() => refreshMessages());
    }
  };

  return (
    <div>
      <header>
        <Heading>
          <img
            src={twittericon}
            style={{ borderRadius: '50%', height: 50, marginRight: 20 }}
            alt="twitter icon"
          />
          Twotter - Twitter for animals
        </Heading>
        <MessageInput onSubmit={handleSubmit} />
        {isLoading ? (
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Newsfeed messages={messages} />
        )}
      </header>
    </div>
  );
};

export default App;
