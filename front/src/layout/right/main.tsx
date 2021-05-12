import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineEye } from 'react-icons/ai';

const Container = styled.div``;
const ContenstContainer = styled.div`
  position: relative;
  background: #eee;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  img {
    opacity: 0.7;
  }
  .type-live {
    position: absolute;
    top: 8px;
    left: 14px;
    background: #d26565;
    color: white;
    letter-spacing: 1.5px;
    padding: 4px 8px;
    border-radius: 6px;
    z-index: 10;
  }
  .watching {
    position: absolute;
    top: 8px;
    left: 80px;
    background: rgba(1, 1, 1, 0.4);
    color: white;
    letter-spacing: 1px;
    padding: 4px 8px;
    border-radius: 6px;
    z-index: 10;
    display: flex;
    gap: 4px;
  }
  @media (max-width: 1280px) {
    height: 230px;
  }
`;
const BottomContainer = styled.div`
  position: relative;
  top: -35px;
  background: #142853;
  margin: 0 45px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #35a7c0;
  .info {
    .info-body {
      font-size: 14px;
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }
  .controller {
    font-size: 24px;
    font-weight: bold;
    .close {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const index = () => {
  return (
    <Container>
      <ContenstContainer>
        {/* TODO: content data */}
        <div className="type-live">LIVE</div>
        <div className="watching">
          <AiOutlineEye />
          3023
        </div>
        <img src={require('./content.jpg')} />
      </ContenstContainer>
      <BottomContainer>
        <div className="info">
          <div className="info-header">Live Chat</div>
          <div className="info-body">
            <AiOutlineUser />
            <span>1.5k Peoples</span>
          </div>
        </div>
        <div className="controller">
          <IoCloseSharp className="close" />
        </div>
      </BottomContainer>
    </Container>
  );
};

export default index;
