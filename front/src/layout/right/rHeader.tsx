import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { Icon } from '../../components/common';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 8px auto;
  padding-right: 40px;
  font-size: 24px;
  height: 55px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const NotificationContainer = styled.div`
  position: relative;
  padding: 4px;
  border-radius: 50%;
  .noti {
    position: absolute;
    top: 4px;
    right: 4px;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  :hover {
    background: rgba(1, 1, 1, 0.2);
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 24px;
  gap: 6px;
  .username {
    font-size: 18px;
  }
  :hover {
    background: rgba(1, 1, 1, 0.2);
  }
`;

const rHeader = () => {
  return (
    <>
      <Container>
        <NotificationContainer>
          <AiOutlineBell />
          {true && <div className="noti" />}
        </NotificationContainer>
        <UserInfoContainer>
          <Icon userImg={false} />
          <div className="username">subin ha</div>
        </UserInfoContainer>
      </Container>
    </>
  );
};

export default rHeader;
