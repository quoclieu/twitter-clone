import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  border: 1px solid ${props => props.theme.borderColor};
  border-bottom: 5px solid ${props => props.theme.borderColor};
  padding: 10px;
`;

const TextField = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: white;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.primaryColor};
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

const ADJECTIVE = [
  'Fluffy',
  'Smol',
  'Spotty',
  'Stripey',
  'Plump',
  'Silly',
  'Happy',
  'Terrible'
];
const ANIMAL = [
  'Cat',
  'Dog',
  'Cow',
  'Goat',
  'Emu',
  'Koala',
  'Lizard',
  'Monkey'
];

const MessageInput = props => {
  const generateRandomName = () => {
    const name =
      ADJECTIVE[Math.floor(Math.random() * ADJECTIVE.length)] +
      ANIMAL[Math.floor(Math.random() * ANIMAL.length)] +
      Math.floor(Math.random() * 501);
    return name;
  };

  const [user, setUser] = useState(generateRandomName());
  const [message, setMessage] = useState('');

  return (
    <Form
      {...props}
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit({ message, user });
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        @
        <TextField
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Enter a name"
          style={{ fontWeight: 'bold' }}
        />
      </div>
      <TextField
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="What's happening?"
      />
      <Button type="submit" variant="contained" color="primary">
        Twoot
      </Button>
    </Form>
  );
};

export default MessageInput;
