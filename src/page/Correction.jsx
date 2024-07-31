import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import TitleWrite from "../components/TitleWrite";
import Textarea from "../components/Textarea";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";

const Correction = () => {
  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <MainDiv>
          <InfoComp />
          <TitleWrite />
          <Textarea />
          <Buttons>
            <CancelComp />
            <ConfirmComp text="완료"/>
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

export default Correction;
