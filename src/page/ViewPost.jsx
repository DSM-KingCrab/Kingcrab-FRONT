import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Title from "../components/TitleComp";
import Detail from "../components/Detail";
import Comment from "../components/comentComp";
import DtComment from "../components/DtComment";


const ViewPost = () => {
  return (
    <>
      <HeaderLog />
      <StyledSpan>
        <MainDiv>
          <InfoComp />
          <Title />
          <Detail />
          <CommentSection>
            <Comment placeholder="댓글 달기"/>
            <DtComment Id="bbyongun_"/>
            <DtComment Id="bbyongun_"/>
          </CommentSection>
        </MainDiv>
      </StyledSpan>
    </>
  );
};

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

export default ViewPost;
