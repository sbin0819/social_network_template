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

const PostContainer = styled.div`
  display: flex;
  border: 2px solid #eee;
  border-radius: 12px;
  height: 310px;
  width: 90%;
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

const Post = () => {
  return (
    <PostContainer>
      <div className="img">
        <img src="http://placeimg.com/640/480/nature" />
      </div>
      <InfoContainer>
        <div className="header">
          <div className="date">
            <div className="date_top">MAY</div>
            <div className="date_bottom">08</div>
          </div>
          <div className="title">
            <div className="title_main">
              How To Manage Your Time & Get More Done
            </div>
            <div className="title_sub">Thu 10:00 - Zoom Meeting</div>
          </div>
        </div>
        <div className="body">
          It may not be possible to squeeze more time in the day without
          sacrificing sleep. So how to you achieve
        </div>
        <div className="footer">
          <div className="footer_left">
            <Icon size="50" />
            <div>
              <div>Alva Lousia</div>
              <div>Product Manager</div>
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
