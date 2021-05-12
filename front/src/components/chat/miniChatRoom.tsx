import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 400px;
  background: #8a7575;
`;

const ChatIconContainer = styled.div`
  background: #94b9d6;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 40px;
  .icon {
    margin-left: 15px;
    color: #eee;
  }
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const index = () => {
  return <Container></Container>;
};

export default index;
