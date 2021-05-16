import React from 'react';
import faker from 'faker';
import styled from 'styled-components';
import { setDataList } from '../../utils/helperF';

const Container = styled.div`
  margin-top: 40px;
`;

const PostContainer = styled.div`
  display: flex;
  border: 2px solid #eee;
  border-radius: 12px;
  height: 280px;
  width: 90%;
  margin: 18px auto;
  .img {
    flex: 1 0 0;
    img {
      border-radius: 12px;
    }
  }
  .info {
    flex: 1 0 0;
    padding: 0 18px;
  }
`;

const Post = () => {
  return (
    <PostContainer>
      <div className="img">
        <img src="http://placeimg.com/640/480/nature" />
      </div>
      <div className="info">
        <div>header</div>
        <div>body</div>
        <div>footer</div>
      </div>
    </PostContainer>
  );
};

const index = () => {
  // const img = faker.random.image();
  return (
    <Container>
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <Post />
        </div>
      ))}
    </Container>
  );
};

export default index;
