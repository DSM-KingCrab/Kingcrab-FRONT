import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Camera from "../images/Camera.png";
import ButtonTest from "../components/ButtonComp";
import "../fonts/font.css";
import { useNavigate } from "react-router-dom";
import HeaderLog from "../components/HeaderCompLog";

const MyPage2 = () => {
  const router = useNavigate();
  return (
    <All>
      <HeaderLog Id="Hi" />
      <StyledDiv>
        <Body>
          <SmallButton>
            <ButtonTest
              onClick={() => {
                router("/Mypage3");
              }}
              size={"Small"}
            >
              저장
            </ButtonTest>
          </SmallButton>
          <Circle>
            <label htmlFor="Camera">
              <Camerainput type="file" id="Camera" />
              <img src={Camera} alt="프로필" width={100} height={88} />
            </label>
          </Circle>
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

const Camerainput = styled.input`
  display: none;
`;

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
  align-self: flex-end;
  margin-right: 36px;
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
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
  }
`;

export default MyPage2;
