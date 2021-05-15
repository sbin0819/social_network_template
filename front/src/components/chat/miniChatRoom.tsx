import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlinePhone, AiOutlineVideoCamera } from 'react-icons/ai';

// 실험
import { range } from '../../utils/helperF';

const Container = styled.div`
  width: 350px;
  height: 400px;
  background: #d2e5ee;
  display: flex;
  flex-direction: column;
  .header {
    height: 50px;
    border-bottom: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    .controller {
      font-size: 24px;
      svg {
        margin: 0 5px;
      }
    }
  }
  .content {
    flex: 1 0 0;
    border-bottom: 1px solid #fff;
    overflow: scroll;
  }
  .footer {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 24px;
  gap: 6px;
  .username {
    font-size: 14px;
  }
  :hover {
    background: rgba(1, 1, 1, 0.2);
    cursor: pointer;
  }
`;

const index = () => {
  return (
    <Container>
      <div className="header">
        <UserInfoContainer>
          <Icon size="35" />
          <div className="username">Subin Park</div>
        </UserInfoContainer>
        <div className="controller">
          <AiOutlineVideoCamera />
          <AiOutlinePhone />
          <IoCloseSharp />
        </div>
      </div>
      <div className="content">
        {[...range(0, 10)].map((i) => (
          <div key={i}>message {i + 1}</div>
        ))}
      </div>
      <div className="footer"></div>
    </Container>
  );
};

export default index;
