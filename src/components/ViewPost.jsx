import React from "react";
import styled from "styled-components";
import HeaderLog from "./HeaderCompLog";
import InfoComp from "./InfoComp";
import Title from "./TitleComp";
import Detail from "./Detail";
import Comment from "./comentComp";
import DtComment from "./DtComment";

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
            <Comment />
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
