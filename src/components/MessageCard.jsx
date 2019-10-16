import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  border-bottom: none;
  padding: 10px;
  color: white;
  &:first-child {
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;

const UserName = styled.h2`
  color: white;
  margin: 0;
  font-size: 18px;
`;

const MessageText = styled.p`
  font-size: 24px;
`;

const DateText = styled.p`
  font-size: 14px;
`;

const MessageCard = ({ user, message, date }) => {
  return (
    <Card>
      <UserName>@{user}</UserName>
      <MessageText>{message}</MessageText>
      <DateText>{date}</DateText>
    </Card>
  );
};

export default MessageCard;
