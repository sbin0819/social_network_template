import React from 'react';
import Header from './header';
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
  return (
    <Container>
      <LeftContainer>hi</LeftContainer>
      <CenterContainer>
        <Header />
        {children}
      </CenterContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default layout;
