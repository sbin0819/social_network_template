import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../components/common';
import { setDataList } from '../utils/helperF';
import faker from 'faker';

import {
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiHome, BiChat } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';

//TODO header fixed
const Conatiner = styled.div`
  /* position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: red; */
`;

const NavigatorContainer = styled.div`
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
const FriendsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;

const UserIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Navigator = () => (
  <NavigatorContainer>
    <Link to="/" title="홈">
      <BiHome />
    </Link>
    <Link to="/like" title="좋아요">
      <AiOutlineHeart />
    </Link>
    <Link to="/friends" title="친구">
      <FaUserFriends />
    </Link>
    <Link to="/write" title="채팅">
      <BiChat />
    </Link>
    <Link to="/shop" title="쇼핑">
      <AiOutlineShoppingCart />
    </Link>
    <Link to="/settings" title="세팅">
      <AiOutlineSetting />
    </Link>
  </NavigatorContainer>
);

const Frineds = () => {
  const userList = setDataList(faker.internet, 8);
  return (
    <FriendsContainer>
      {userList.map((d, i) => (
        <UserIconContainer key={i}>
          <Icon size="60" userImg={d.avatar()} />
          <div>{d.userName().slice(0, 6)}</div>
        </UserIconContainer>
      ))}
    </FriendsContainer>
  );
};

const header = () => {
  return (
    <Conatiner>
      <Navigator />
      <Frineds />
    </Conatiner>
  );
};

export default header;
