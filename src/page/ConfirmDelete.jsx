import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Title from "../components/TitleComp";
import Detail from "../components/Detail";
import Comment from "../components/comentComp";
import DtComment from "../components/DtComment";
import { theme } from "../styles/theme";

const ConfirmDelete = () => {
  return (
    <>
      <Cover>
        {" "}
        <Notice></Notice>
      </Cover>
      <HeaderLog />
      <StyledSpan>
        <MainDiv>
          <InfoComp />
          <Title />
          <Detail />
          <CommentSection>
            <Comment placeholder="댓글 달기" />
            <DtComment Id="bbyongun_" />
            <DtComment Id="bbyongun_" />
          </CommentSection>
        </MainDiv>
      </StyledSpan>
    </>
  );
};

const Notice = styled.div`
  width: 560px;
  height: 336px;
  border-radius: 20px;
  z-index: 100;
  position: absolute;
  background-color: white;
  display: flex;
  opacity: 1;
`;
const Cover = styled.div`
  box-shadow: ${theme.color.gray[400]} 0 0 0 9999px;
  z-index: 5;
  position: fixed;
  opacity: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentSection = styled.section`
  width: 1044px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
`;
const MainDiv = styled.div`
  width: 1044px;
  display: flex;
  justify-self: center;
  flex-wrap: wrap;
  margin-top: 36px;
`;

export default ConfirmDelete;
