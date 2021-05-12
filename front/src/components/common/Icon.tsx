import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ddd !important;
`;

interface IProps {
  userImg?: any;
}
const index: React.FC<IProps> = ({ userImg = false }) => {
  return <Container>{userImg ? 'U' : <AiOutlineUser />}</Container>;
};

export default index;
