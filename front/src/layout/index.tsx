import React from 'react';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';
import MiniChatRoom from '../components/chat/miniChatRoom';
import useViewOptions from '../hooks/useViewOptions';
import useWindowSize from '../hooks/useWindowSize';
import { Button } from '../components/common';
import styled from 'styled-components';
import { FaRegWindowClose, FaRegPaperPlane } from 'react-icons/fa';

//userInfo
const layout = ({ children }) => {
  const {
    options: { onLeft, onRight, onChat },
    onClick,
  } = useViewOptions();
  const { width } = useWindowSize();
  const minSize = typeof width === 'number' && width > 700;
  const fullSize = typeof width === 'number' && width > 900;

  return (
    <Container>
      {onLeft && minSize && (
        <LeftContainer>
          <LeftBar />
          <Button onClick={() => onClick.onCloseLeftLayout()}>
            <FaRegWindowClose />
          </Button>
        </LeftContainer>
      )}
      <CenterContainer>
        <Header />
        {!onLeft && (
          <Button onClick={() => onClick.onOpenLeftLayout()}>L-open</Button>
        )}
        {!onRight && (
          <Button onClick={() => onClick.onOpenRightLayout()}>R-open</Button>
        )}
        {children}
      </CenterContainer>
      {onRight && fullSize && (
        <RightContainer>
          <RightBar />
          <Button onClick={() => onClick.onCloseRightLayout()}>
            <FaRegWindowClose />
          </Button>
        </RightContainer>
      )}
      {minSize && (
        <ChatContainer>
          {/* TODO: overlay onCloseChat() */}
          {!onChat && (
            <ChatIconContainer onClick={() => onClick.onOpenChat()}>
              <FaRegPaperPlane className="icon" />
            </ChatIconContainer>
          )}
          {onChat && <MiniChatRoom />}
        </ChatContainer>
      )}
    </Container>
  );
};

export default layout;

//TODO: media query
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 0.8 0 0;
  background: #f2f6f9;
`;

const CenterContainer = styled.div`
  flex: 2 0 0;
`;

const RightContainer = styled.div`
  position: relative;
  flex: 1 0 0;
  background: #f2f6f9;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
`;

const ChatIconContainer = styled.div`
  background: #94b9d6;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 40px;
  .icon {
    margin-left: 15px;
    color: #eee;
  }
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
  }
`;
