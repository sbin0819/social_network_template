import React from 'react';
import styled from 'styled-components';

interface IStyledProps {}
const Container = styled.button<IStyledProps>`
  border: 1px solid #777;
  border-radius: 12px;
  min-width: 80px;
  height: 50px;
  background: #eee;
  font-size: 20px;
`;

interface IProps {
  children?: React.ReactNode;
  onClick?: any;
}
const button: React.FC<IProps> = ({ children, onClick, ...props }) => {
  return (
    <Container {...props} onClick={onClick}>
      {children}
    </Container>
  );
};

export default button;
