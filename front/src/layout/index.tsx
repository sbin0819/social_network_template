import React from 'react';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';

import { Button } from '../components/common';
import styled from 'styled-components';
import useViewOptions from '../hooks/useViewOptions';
import useWindowSize from '../hooks/useWindowSize';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 0.8 0 0;
  background: gold;
`;

const CenterContainer = styled.div`
  flex: 2 0 0;
`;

const RightContainer = styled.div`
  flex: 1 0 0;
  background: pink;
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
          <Button onClick={() => onClick.onCloseLeftLayout()}>close</Button>
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
          <Button onClick={() => onClick.onCloseRightLayout()}>close</Button>
        </RightContainer>
      )}
    </Container>
  );
};

export default layout;
