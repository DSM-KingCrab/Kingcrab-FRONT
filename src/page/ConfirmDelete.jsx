import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Title from "../components/TitleComp";
import Detail from "../components/Detail";
import Comment from "../components/comentComp";
import DtComment from "../components/DtComment";
import NoticeDelete from "../page/NoticeDelete";


const ConfirmDelete = () => {
  return (
    <>
      <Cover>
        <NoticeDelete
          title="게시물을 삭제하시겠습니까?"
          describe="게시물을 삭제하면 복구할 수 없습니다."
          des="정말로 삭제하시겠습니까?"
          />
      </Cover>
      <HeaderLog />
      <StyledSpan>
          <MainDiv>
            <InfoComp />
            <Title />
            <Detail />
            <CommentSection>
              <Comment placeholder="댓글 달기" />
              <DtComment Id="bbyongun_"  />
              <DtComment Id="bbyongun_" />
            </CommentSection>
          </MainDiv>
        
      </StyledSpan>
    </>
  );
};

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
  backdrop-filter: blur(10px);
`;
const MainDiv = styled.div`
  width: 1044px;
  display: flex;
  justify-self: center;
  flex-wrap: wrap;
  margin-top: 36px;
`;

export default ConfirmDelete;
