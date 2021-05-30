import React from 'react';
import faker from 'faker';
import styled from 'styled-components';
import { setDataList } from '../../utils/helperF';

import { Icon } from '../common';
import { AiFillFire } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';

const Container = styled.div`
  margin-top: 40px;
`;

//TODO 사이즈 sm, md, lg
const PostContainer = styled.div`
  display: flex;
  border: 2px solid #eee;
  border-radius: 12px;
  height: 310px;
  width: 650px;
  margin: 18px auto;
  .img {
    flex: 1.5 0 0;
    img {
      border-radius: 12px;
    }
  }
`;

const InfoContainer = styled.div`
  flex: 2 0 0;
  padding: 10px 18px;
  .header {
    display: flex;
    height: 80px;
    .date {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90px;
      background: #35a7c0;
      color: #fff;
      border-radius: 8px;
      gap: 6px;
      .date_top {
        font-size: 22px;
      }
      .date_bottom {
        font-size: 20px;
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4px 0px 6px 10px;
      .title_main {
        font-size: 22px;
        color: #142853;
      }
      .title_sub {
        color: #999;
      }
    }
  }
  .body {
    margin-top: 20px;
    padding-bottom: 18px;
    font-size: 18px;
    color: #999;
    line-height: normal;
    border-bottom: 2px dashed #999;
  }
  .footer {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    .footer_left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .footer_right {
      padding-top: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
    }
  }
`;

const Post: React.FC<{ post: any }> = ({ post }) => {
  return (
    <PostContainer>
      <div className="img">
        <img src={post.image.image()} />
      </div>
      <InfoContainer>
        <div className="header">
          <div className="date">
            <div className="date_top">{post.date.month().slice(0, 3)}</div>
            <div className="date_bottom">08</div>
          </div>
          <div className="title">
            <div className="title_main">
              {post.lorem.sentence().slice(0, 35)}
            </div>
            <div className="title_sub">Thu 10:00 - Zoom Meeting</div>
          </div>
        </div>
        <div className="body">
          {post.lorem.sentences().slice(0, 100) + '...'}
        </div>
        <div className="footer">
          <div className="footer_left">
            <Icon size="50" userImg={post.internet.avatar()} />
            <div>
              <div>{post.internet.userName().slice(0, 8)}</div>
              <div>{post.name.jobTitle().split(' ')[1]}</div>
            </div>
          </div>
          <div className="footer_right">
            <div>
              <AiFillFire size="32" fill="#f04343" />
            </div>
            <div>0</div>
            <div>
              <FaShare size="32" fill="#294eab" />
            </div>
            <div>0</div>
          </div>
        </div>
      </InfoContainer>
    </PostContainer>
  );
};

const index = () => {
  const postList = setDataList(faker, 5);
  return (
    <Container>
      {postList.map((el, i) => (
        <div key={i}>
          <Post post={el} />
        </div>
      ))}
    </Container>
  );
};

export default index;
