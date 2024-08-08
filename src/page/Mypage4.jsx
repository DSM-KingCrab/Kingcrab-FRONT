import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import KingKrabLogo from "../images/KingCrab.png";
import Camera from "../images/Camera.png";
import ButtonTest from "../components/ButtonComp";
import Profile from "../images/length-landscape-2011238_1280 1.png";
import "../fonts/font.css";

const MyPage4 = () => {
  return (
    <All>
      <Header>
        <Logo>
          <img src={KingKrabLogo} alt="대게 로고" width={56} height={56} />
          <p>대게</p>
        </Logo>
        <p>dodowind_</p>
      </Header>
      <StyledDiv>
        <Body>
          <Div>
            <Circle img src={Profile} alt="프로필 사진" />
            <CameraImg img src={Camera} alt="프로필" width={100} height={88} />
          </Div>
          <DivDiv>
            <SmallButton>
              <ButtonTest onClick={() => {}} size={"Small"}>
                저장
              </ButtonTest>
            </SmallButton>
          </DivDiv>
          <Input>
            <Id>
              <p>아이디</p>
              <input type="text" placeholder="dodobird" />
            </Id>
          </Input>
        </Body>
      </StyledDiv>
    </All>
  );
};

const All = styled.div`
  background-color: ${theme.color.gray[100]};
  height: 100dvh;
`;

const StyledDiv = styled.div`
  background-color: ${theme.color.main[100]};
  height: 420px;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 40px;
  font-size: 32px;
  background-color: ${theme.color.main[100]};
  color: ${theme.color.white};
`;

const Logo = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
`;

const Body = styled.div`
  background-color: ${theme.color.white};
  width: 1064px;
  height: 692px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 252px;
  padding-top: 39px;
`;

const Circle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray[100]};
  width: 218px;
  height: 218px;
  border-radius: 50%;
  opacity: 0.5;
  position: relative;
  margin-bottom: 80px;
`;

const CameraImg = styled.img`
  position: absolute;
  top: 33%;
  left: 48%;
`;

const SmallButton = styled.div`
  font-size: 24px;
  display: flex;
  align-self: flex-end;
  margin-right: 32px;
  position: relative;
  bottom: 10px;
  left: 320%;
`;

const Id = styled.div``;

const Input = styled.div`
  & input {
    width: 720px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    padding: 13px 12px;
    border: 1px solid ${theme.color.gray[700]};
  }
  & p {
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
  }
`;

const Div = styled.div``;
const DivDiv = styled.div`
  position: absolute;
`;
export default MyPage4;
