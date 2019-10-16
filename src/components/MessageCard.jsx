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

const ProfileColor = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${props => props.color};
`;

const NameAndIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MessageCard = ({ user, message, date, color }) => {
  return (
    <Card>
      <NameAndIconContainer>
        <ProfileColor color={color} />
        <UserName>@{user}</UserName>
      </NameAndIconContainer>
      <MessageText>{message}</MessageText>
      <DateText>{date}</DateText>
    </Card>
  );
};

MessageCard.defaultProps = {
  color: 'red'
};

export default MessageCard;
