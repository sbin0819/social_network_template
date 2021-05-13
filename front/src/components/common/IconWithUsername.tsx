import React from 'react';
import styled from 'styled-components'
import { Icon } from './'

// sm, md, lg
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 24px;
  gap: 6px;
  .username {
    font-size: 18px;
  }
  :hover {
    background: rgba(1, 1, 1, 0.2);
    cursor: pointer;
  }
`;

const index = () => {
    return (
        <Container>
            <Icon size='35'/>
            <div className="username">Subin Park</div>
        </Container>
    );
};

export default index;