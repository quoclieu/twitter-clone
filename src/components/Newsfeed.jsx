import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Newsfeed = props => {
  console.log();
  return (
    <Container>
      {Object.keys(props.messages).map(key => {
        const { date, message, user } = props.messages[key];
        return (
          <MessageCard key={date} message={message} user={user} date={date} />
        );
      })}
    </Container>
  );
};

export default Newsfeed;
