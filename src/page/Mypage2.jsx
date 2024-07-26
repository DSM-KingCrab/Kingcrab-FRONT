import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import KingKrabLogo from "../images/fluent-emoji-high-contrast_crab.png";
import Camera from "../images/Vector.png";
import ButtonTest from "../components/button";

const MyPage2 = () => {
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
          <Circle>
            <img src={Camera} alt="프로필" width={100} height={88} />
          </Circle>
          <SmallButton>
            <ButtonTest onClick={() => {}} size={"Small"}>
              저장
            </ButtonTest>
          </SmallButton>
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
  margin: 252px 0px 0px 0px;
  padding: 39px 0px 0px 0px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray[100]};
  width: 218px;
  height: 218px;
  border-radius: 50%;
`;

const SmallButton = styled.div`
  font-size: 24px;
`;

const Id = styled.div``;

const Input = styled.div`
  & input {
    width: 720px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    padding: 30px 12px;
    border: 1px solid ${theme.color.gray[700]};
  }
  & p {
    margin: 0px 0px 10px 0px;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
  }
`;

export default MyPage2;
