import React from 'react';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';

import { Button } from '../components/common';
import styled from 'styled-components';

import { FaRegWindowClose } from 'react-icons/fa';

import useViewOptions from '../hooks/useViewOptions';
import useWindowSize from '../hooks/useWindowSize';
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
  flex: 1 0 0;
  background: #f2f6f9;
`;

//userInfo
const layout = ({ children }) => {
  const {
    options: { onLeft, onRight },
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
    </Container>
  );
};

export default layout;
