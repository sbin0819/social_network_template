import React from 'react';
import { Icon } from '../common';
import styled from 'styled-components';
import faker from 'faker';
import { setDataList } from '../../utils/helperF';

const Container = styled.div`
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

const index = () => {
  const userList = setDataList(faker.internet, 8);
  return (
    <Container>
      {userList.map((d, i) => (
        <UserIconContainer key={i}>
          <Icon size="60" userImg={d.avatar()} />
          <div>{d.userName().slice(0, 6)}</div>
        </UserIconContainer>
      ))}
    </Container>
  );
};

export default index;
