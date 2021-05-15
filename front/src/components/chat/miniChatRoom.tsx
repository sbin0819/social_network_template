import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlinePhone, AiOutlineVideoCamera } from 'react-icons/ai';

import faker from 'faker';

const Container = styled.div`
  width: 350px;
  height: 400px;
  background: #d2e5ee;
  display: flex;
  flex-direction: column;
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
  flex-direction: column-reverse;
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

const FooterContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
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
  background: #35a7c0;
  color: white;
  padding: 12px 10px;
  border-radius: 16px;
`;

//TODO recursive or generator 로 수정가능
const setMessages = (num: number) => {
  const result: any[] = [];
  for (let i = 0; i < num; i++) {
    let type = Math.floor(Math.random() * 2) + 1 === 1 ? 'left' : 'right';
    let username = type === 'left' ? 'anna kim' : 'subin ha';
    let message: any;
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
  return dataList.map(
    (
      item: {
        type: string | undefined;
        message:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined;
      },
      i: React.Key | null | undefined,
    ) => (
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
    ),
  );
};

const index = ({ onClose }) => {
  const fakeMessages = setMessages(8);
  const handleOnClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };
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
          <IoCloseSharp onClick={handleOnClose} />
        </div>
      </HeaderContainer>
      <ContentContainer>
        <div>
          <FakeMessage dataList={fakeMessages} />
        </div>
      </ContentContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
};

export default index;
