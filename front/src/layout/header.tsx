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
// import useViewOptions from '../hooks/useViewOptions';

const Container = styled.div`
  display: flex;
  margin: 8px auto;
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
    :active {
      display: block;
    }
  }
`;

const header = () => {
  return (
    <Container>
      <Link to="/" title="홈">
        <BiHome />
      </Link>
      <Link to="/like" title="좋아요">
        <AiOutlineHeart />
      </Link>
      <Link to="/" title="친구">
        <FaUserFriends />
      </Link>
      <Link to="/chat" title="채팅">
        <BiChat />
      </Link>
      <Link to="/shop" title="쇼핑">
        <AiOutlineShoppingCart />
      </Link>
      <Link to="/settings" title="세팅">
        <AiOutlineSetting />
      </Link>
    </Container>
  );
};

export default header;
