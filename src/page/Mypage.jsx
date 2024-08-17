import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import HeaderLog from "../components/HeaderCompLog";
import Write from "../images/jam_write-f.png";

const MyPage = () => {
  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <Body>
          <a href="/Mypage2" style={{ textDecoration: "none" }}>
            <img src={Write} alt="수정" width={48} height={48} />
          </a>
          <Circle>
            <label htmlFor="+">
              +
              <Imginput type="file" id="+" />
            </label>
          </Circle>
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

const Imginput = styled.input`
  display: none;
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
  margin-top: 252px;
  font-size: 18px;
  & img {
    position: relative;
    left: 290px;
    top: 24px;
  }
`;

const Circle = styled.label`
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
