import React from "react";
import ButtonTest from "../components/button";
import styled from "styled-components";
import { theme } from "../styles/theme";
import KingCrabLogo from "../images/fluent-emoji-high-contrast_crab.png";
import Eyes from "../images/mdi_eye.png";

const Login = () => {
  return (
    <StyledDiv>
      <StyledImage src={KingCrabLogo} alt="대게 로고" />
      <Body>
        <h1>
          <Span>대게</Span>
        </h1>
        <H1>
          <h1>
            <Span>대</Span>마고 <Span>게</Span>시판에 로그인 하세요
          </h1>
        </H1>
        <Input>
          <Id>
            <p>아이디</p>
            <input type="text" placeholder="아이디를 입력하세요" />
          </Id>
          <p>비밀번호</p>
          <input type="text" placeholder="비밀번호를 입력하세요" />
          <Password src={Eyes} alt="비밀번호" />
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
  margin-top: 60px;
  width: 200px;
  height: 200px;
`;
const Body = styled.div`
  flex-direction: column;
  background-color: ${theme.color.white};
  width: 1344px;
  height: 692px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  margin: 22px 0px;
  padding: 90px 0px 78px 0px;
  & h1 {
    line-height: 70px;
  }
`;

const H1 = styled.div`
  margin-bottom: 50px;
`;

const Span = styled.div`
  color: ${theme.color.main[500]};
  display: inline;
`;
const Input = styled.div`
  & input {
    width: 600px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    padding: 0px 8px;
    border: 1px solid ${theme.color.gray[700]};
  }
  & p {
    margin: 0px 0px 20px 374px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
  }
`;

const Password = styled.div`
  width: 30px;
  height: 30px;
  color: ${theme.color.gray[100]};
`;

const Id = styled.div`
  margin-bottom: 28px;
`;

const LargeButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0px 35px 0px;
`;

const SignUp = styled.div`
  font-size: 14px;
`;

export default Login;
