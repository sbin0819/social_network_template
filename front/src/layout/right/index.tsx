import React from 'react';
import Header from './rHeader';
import Main from './main';
import RestContent from './restContent';

import styled from 'styled-components';
const Container = styled.div`
  margin: 8px auto;
  padding: 0 12px;
`;

const right = () => {
  return (
    <Container>
      <Header />
      <Main />
      <RestContent />
    </Container>
  );
};

export default right;
