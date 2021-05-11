import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BiHome, BiChat } from 'react-icons/bi';
import {
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  margin: 6px auto;
  padding: 0 30px;
  font-size: 24px;
  background: #b8d8f6;
  width: 450px;
  height: 55px;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 5px;
    border-radius: 8px;
    :hover {
      background: blue;
      color: gold;
    }
  }
`;

const header = () => {
  return (
    <Container>
      <Link to="/">
        <BiHome />
      </Link>
      <Link to="/">
        <AiOutlineHeart />
      </Link>
      <Link to="/">
        <FaUserFriends />
      </Link>
      <Link to="/">
        <BiChat />
      </Link>
      <Link to="/">
        <AiOutlineShoppingCart />
      </Link>
      <Link to="/">
        <AiOutlineSetting />
      </Link>
    </Container>
  );
};

export default header;
