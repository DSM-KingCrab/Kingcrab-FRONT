import React from "react";
import ButtonTest from "../components/button";
import styled from "styled-components";
import { theme } from "../styles/theme";
import KingCrabLogo from "../images/fluent-emoji-high-contrast_crab.png";
import Eyes from "../images/mdi_eye.png";

const Test = () => {
  return (
    <StyledDiv>
      <StyledImage src={KingCrabLogo} alt="대게 로고" />
      <Body>
        <h1>
          <Span>대게</Span>
        </h1>
        <h1>
          <Span>대</Span>마고 <Span>게</Span>시판에 로그인 하세요
        </h1>
        <Input>
          <p>아이디</p>
          <input type="text" placeholder="아이디를 입력하세요" />
          <p>비밀번호</p>
          <input type="text" placeholder="비밀번호를 입력하세요" />
          <Password src={Eyes} alt="눈" />
        </Input>
        <LargeButton>
          <ButtonTest onClick={() => {}} size={"Large"}>
            로그인
          </ButtonTest>
        </LargeButton>
        <SignUp>
          <b>
            계정이 없으신가요? 대게에 <Span>회원가입</Span>하세요.
          </b>
        </SignUp>
      </Body>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: ${theme.color.main[100]};
  height: 100dvh;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
const Body = styled.div`
  background-color: ${theme.color.white};
  width: 1344px;
  height: 692px;
  border-radius: 12px;
  position: relative;
  top: 22px;
  text-align: center;
  font-size: 20px;
  & h1 {
    position: relative;
    top: 50px;
  }
`;
const Span = styled.div`
  color: ${theme.color.main[500]};
  display: inline;
  position: relative;
`;
const Input = styled.div`
  & input {
    width: 600px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    padding: 0px 8px;
    border: 1px solid ${theme.color.gray[700]};
    margin: 0px 0px 28px 0px;
  }
  & p {
    margin: 0px 0px 20px 0px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    right: 278px;
  }

  & p,
  input {
    position: relative;
    top: 80px;
  }
`;

const LargeButton = styled.div`
  position: absolute;
  top: 510px;
  left: 364px;
`;

const Password = styled.div`
  width: 30px;
  height: 30px;
`;

const SignUp = styled.div`
  font-size: 14px;
  position: relative;
  top: 146px;
`;
export default Test;
