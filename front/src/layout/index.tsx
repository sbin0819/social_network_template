import React from 'react';
import useViewOptions from '../hooks/useViewOptions';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';

import { Button } from '../components/common';
import styled from 'styled-components';

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
  const { options, onClick } = useViewOptions();
  const { onLeft, onRight } = options;

  return (
    <Container>
      {onLeft && (
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
      {onRight && (
        <RightContainer>
          <RightBar />
          <Button onClick={() => onClick.onCloseRightLayout()}>close</Button>
        </RightContainer>
      )}
    </Container>
  );
};

export default layout;
