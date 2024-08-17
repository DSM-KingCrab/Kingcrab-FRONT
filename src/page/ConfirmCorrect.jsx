import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Textarea from "../components/Textarea";
import TitleWrite from "../components/TitleWrite";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";
import NoticeCorrect from "../components/NoticeCorrect";

const ConfirmCorrect = () => {
  return (
    <>
      <Cover>
        <NoticeCorrect
          title="게시물을 수정하시겠습니까?"
          describe="게시물을 수정하면 복구할 수 없습니다."
          des="정말로 수정하시겠습니까?"
        />
      </Cover>
      <HeaderLog />
      <StyledDiv>
        <MainDiv>
          <InfoComp />
          <TitleWrite />
          <Textarea />
          <Buttons>
            <CancelComp />
            <a href="/ConfirmCorrect" style={{ textDecoration: "none" }}>
              <ConfirmComp text="수정" />
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
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Cover = styled.div`
  background-color: rgba(157, 156, 160, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 1044px;
  margin-top: 36px;
`;

export default ConfirmCorrect;
