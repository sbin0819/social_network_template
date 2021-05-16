import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Posts from './posts';

const Container = styled.div``;

const index = () => {
  return (
    <Container>
      <Header />
      <Posts />
    </Container>
  );
};

export default index;
