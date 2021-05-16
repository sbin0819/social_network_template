import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

// sm, md, lg
const Container = styled.div<{ size: string }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ddd !important;
  img {
    border: 3px solid #35a7c0;
    border-radius: 50%;
  }
`;

interface IProps {
  userImg?: any;
  size?: string;
}
const index: React.FC<IProps> = ({ userImg = false, size = '40' }) => {
  return (
    <Container size={size}>
      {userImg ? <img src={userImg} /> : <AiOutlineUser />}
    </Container>
  );
};

export default index;
