import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoWrite from "../components/InfoWrite";
import TitleWrite from "../components/TitleWrite";
import Textarea from "../components/Textarea";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";

const Write = () => {
  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <MainDiv>
          <InfoWrite />
          <TitleWrite />
          <Textarea />
          <Buttons>
            <a href="/MainLog" style={{ textDecoration: "none" }}>
              <CancelComp />
            </a>
            <a href="/ViewPost" style={{ textDecoration: "none" }}>
              <ConfirmComp text="완료" />
            </a>
          </Buttons>
        </MainDiv>
      </StyledDiv>
    </>
  );
};

const Buttons = styled.div`
  margin-top: 32px;
  float: right;
`;
const MainDiv = styled.div`
  width: 1044px;
  margin-top: 36px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default Write;
