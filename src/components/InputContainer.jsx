import React from "react";
import Input from "./InputComp";
import styled from "styled-components";
import KingCrabLogo from "../images/fluent-emoji-high-contrast_crab.png"
import { theme } from "../styles/theme";

function InputContainer() {
  return (
    <StyledDiv>
      <StyledSection>
        <StyledImage src={KingCrabLogo} alt="대게 로고"/>
        <StyledH1>대게</StyledH1>
        <StyledDiv><StyledH11><StyledH1>대</StyledH1>마고 <StyledH1>게</StyledH1>시판에 회원가입 하세요</StyledH11></StyledDiv>
        <Input type="text" placeholder="6자 이상 작성하세요"/>
      </StyledSection>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 846px;
  margin: 88px auto;
`
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
`
const StyledH1 = styled.span`
  font-size: 42px;
  color: ${theme.color.main[500]};
`
const StyledH11 = styled.h1`
  display: flex;
  font-size: 42px;
  color: ${theme.color.black};
  flex-direction: row;
  margin-bottom: 20px;
`

export default InputContainer