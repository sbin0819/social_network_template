import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InnerContainer = styled.div`
  background: #c7bcbc;
  height: 60px;
`;

const index = () => {
  return (
    <Container>
      <div>Rest Contents</div>
      <InnerContainer></InnerContainer>
      <InnerContainer></InnerContainer>
      <InnerContainer></InnerContainer>
      <InnerContainer></InnerContainer>
    </Container>
  );
};

export default index;
