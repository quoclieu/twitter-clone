import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Newsfeed = props => {
  console.log(props);
  console.log();
  return (
    <Container>
      {Object.keys(props.messages).map(key => {
        const { date, message, user, color } = props.messages[key];
        return (
          <MessageCard
            key={key}
            message={message}
            color={color}
            user={user}
            date={date}
          />
        );
      })}
    </Container>
  );
};

export default Newsfeed;
