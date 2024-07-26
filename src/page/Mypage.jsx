import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import KingKrabLogo from "../images/fluent-emoji-high-contrast_crab.png";
import Write from "../images/jam_write-f.png";

const MyPage = () => {
  return (
    <>
      <Header>
        <Logo>
          <img src={KingKrabLogo} alt="대게 로고" width={56} height={56} />
          <p>대게</p>
        </Logo>
        <p>dodowind_</p>
      </Header>
      <StyledDiv>
        <Body>
          <img src={Write} alt="수정" width={48} height={48} />

          <Circle>+</Circle>
          <h1>dodowind_</h1>
        </Body>
      </StyledDiv>
    </>
  );
};

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
  background-color: ${theme.color.main[50]};
  width: 690px;
  height: 450px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 252px 0px 0px 0px;
  padding: 39px 0px 0px 0px;
  font-size: 18px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray[200]};
  width: 218px;
  height: 218px;
  border-radius: 50%;
  font-size: 104px;
  color: ${theme.color.gray[700]};
`;

export default MyPage;
