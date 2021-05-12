import React from 'react';
import Header from './rHeader';
import Content from './content';
import styled from 'styled-components';
const Container = styled.div`
  margin: 8px auto;
`;

const right = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default right;
