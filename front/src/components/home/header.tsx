import React from 'react';
import { Icon } from '../common';
import styled from 'styled-components';
import faker from 'faker';
import { setDataList } from '../../utils/helperF';

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

export default Frineds;
