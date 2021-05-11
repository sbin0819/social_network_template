import React, { useState } from 'react';
import Header from './header';
import LeftBar from './left';
import RightBar from './right';
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
  const [options, setOptions] = useState({ onLeft: true, onRight: true });
  const { onLeft, onRight } = options;
  return (
    <Container>
      {onLeft && (
        <LeftContainer>
          <LeftBar />
        </LeftContainer>
      )}
      <CenterContainer>
        <Header />
        {children}
      </CenterContainer>
      {onRight && (
        <RightContainer>
          <RightBar />
        </RightContainer>
      )}
    </Container>
  );
};

export default layout;
