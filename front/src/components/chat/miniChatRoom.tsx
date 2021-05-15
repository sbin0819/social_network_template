import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlinePhone, AiOutlineVideoCamera } from 'react-icons/ai';

// 실험
// import { range } from '../../utils/helperF';
import faker from 'faker';

const Container = styled.div`
  width: 350px;
  height: 400px;
  background: #d2e5ee;
  display: flex;
  flex-direction: column;

  .footer {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;

const HeaderContainer = styled.div`
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
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 0 0;
  border-bottom: 1px solid #fff;
  overflow: scroll;
  padding: 0 12px;
  .left {
    display: flex;
    align-items: center;
    width: 60%;
    min-height: 40px;
    gap: 8px;
    margin-bottom: 12px;
  }
  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
    max-width: 60%;
    min-height: 40px;
    margin-bottom: 12px;
    div {
      margin-left: auto;
    }
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

const ChatContainer = styled.div`
  background: pink;
  padding: 12px 10px;
  border-radius: 16px;
`;

// recursive or generator 로 수정가능
const setMessages = (num) => {
  const result: any[] = [];
  for (let i = 0; i < num; i++) {
    let type = Math.floor(Math.random() * 2) + 1 === 1 ? 'left' : 'right';
    let username = type === 'left' ? 'anna kim' : 'subin ha';
    let message;
    if (i % 2 === 0) {
      message = faker.lorem.words();
    }
    if (i % 2 === 1) {
      message = faker.lorem.sentence();
    }
    result.push({ type, username, message });
  }
  return result;
};

const FakeMessage = ({ dataList }) => {
  return dataList.map((item, i) => (
    <div className={item.type} key={i}>
      {item.type === 'left' && (
        <div>
          <Icon size="30" />
        </div>
      )}
      <div>
        <ChatContainer>{item.message}</ChatContainer>
      </div>
    </div>
  ));
};

const index = () => {
  const fakeMessages = setMessages(2);
  return (
    <Container>
      <HeaderContainer>
        <UserInfoContainer>
          <Icon size="35" />
          <div className="username">Subin Park</div>
        </UserInfoContainer>
        <div className="controller">
          <AiOutlineVideoCamera />
          <AiOutlinePhone />
          <IoCloseSharp />
        </div>
      </HeaderContainer>
      <ContentContainer>
        <FakeMessage dataList={fakeMessages} />
      </ContentContainer>
      <div className="footer"></div>
    </Container>
  );
};

export default index;
