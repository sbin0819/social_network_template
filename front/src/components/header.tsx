import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: 36px;
  gap: 20px;
  a {
    :hover {
      color: blue;
    }
  }
`;

const header = () => {
  return (
    <Container>
      <Link to="/home">HOME</Link>
      <Link to="/write">WRITE</Link>
      <Link to="/profile">PROFILE</Link>
    </Container>
  );
};

export default header;
