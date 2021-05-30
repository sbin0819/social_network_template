import React from 'react';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';
import MiniChatRoom from '../components/chat/miniChatRoom';
import useWindowSize from '../hooks/useWindowSize';
import { Button } from '../components/common';
import styled from 'styled-components';
import { FaRegWindowClose, FaRegPaperPlane } from 'react-icons/fa';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions } from '../store/slice/option';

//userInfo
const layout = ({ children }) => {
  const { onLeft, onRight, onChat } = useAppSelector(({ option }) => option);
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const minSize = typeof width === 'number' && width > 700;
  const fullSize = typeof width === 'number' && width > 900;

  return (
    <Container>
      {onLeft && minSize && (
        <LeftContainer>
          <LeftBar />
          <Button
            onClick={() => {
              // onClick.onCloseLeftLayout();
              dispatch(actions.onCloseLeftLayout());
            }}
          >
            <FaRegWindowClose />
          </Button>
        </LeftContainer>
      )}
      <CenterContainer>
        <Header />
        {!onLeft && (
          <Button onClick={() => dispatch(actions.onOpenLeftLayout())}>
            L-open
          </Button>
        )}
        {!onRight && (
          <Button onClick={() => dispatch(actions.onOpenRightLayout())}>
            R-open
          </Button>
        )}
        {children}
      </CenterContainer>
      {onRight && fullSize && (
        <RightContainer>
          <RightBar />
          <Button onClick={() => dispatch(actions.onCloseRightLayout())}>
            <FaRegWindowClose />
          </Button>
        </RightContainer>
      )}
      {minSize && (
        <ChatContainer>
          {!onChat && (
            <ChatIconContainer onClick={() => dispatch(actions.onOpenChat())}>
              <FaRegPaperPlane className="icon" />
            </ChatIconContainer>
          )}
          {onChat && (
            <MiniChatRoom onClose={() => dispatch(actions.onCloseChat())} />
          )}
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
  overflow: hidden;
`;

const LeftContainer = styled.div`
  flex: 0.8 0 0;
  background: #f2f6f9;
`;

const CenterContainer = styled.div`
  position: relative;
  flex: 2 0 0;
  overflow: scroll;
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
