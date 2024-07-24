import React from "react";
import Input from "./InputComp";
import styled from "styled-components";
import KingCrabLogo from "../images/fluent-emoji-high-contrast_crab.png";
import { theme } from "../styles/theme";
import Password from "./PassComp";

function SignIn() {
  return (
    <StyledDiv>
      <StyledSection>
        <StyledImage src={KingCrabLogo} alt="대게 로고" />
        <StyledH1>대게</StyledH1>
        <StyledDiv>
          <StyledH11>
            <StyledH1>대</StyledH1>
            <p>마고</p> <StyledH1>게</StyledH1>시판에 회원가입 하세요
          </StyledH11>
        </StyledDiv>
        <Input label="아이디" type="text" placeholder="6자 이상 작성하세요" />
        <Password label="비밀번호" type="text" placeholder="비밀번호를 입력하세요" />
        <StyledP2>알파벳 소문자, 대문자, 특수문자 포함 8자 이상</StyledP2>
        <Password label="비밀번호 확인" type="text" placeholder="비밀번호를 한 번 더 입력하세요" />
        <StyledP2>비밀번호를 정확하게 입력하세요</StyledP2>
      </StyledSection>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 846px;
  margin: 88px auto;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  display: flex;
  align-self: center;
`;
const StyledH1 = styled.span`
  font-size: 42px;
  color: ${theme.color.main[500]};
  display: flex;
  align-self: center;
`;
const StyledH11 = styled.span`
  font-size: 42px;
  color: ${theme.color.black};
  display: flex;
  align-self: center;
`;
const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  margin-bottom: 12px;
  margin-top: 32px;
`;
const StyledP2 = styled.p`
  font-size: 16px;
  margin-top: 4px;
  margin-left: 4px;
`;
export default SignIn;
