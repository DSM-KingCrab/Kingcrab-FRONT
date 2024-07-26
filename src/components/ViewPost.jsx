import React from "react";
import styled from "styled-components";
import HeaderLog from "./HeaderCompLog";
import InfoComp from "./InfoComp";
import Title from "./TitleComp";

const ViewPost = () => {
  return (
    <>
      <HeaderLog />
      <StyledSpan>
        <MainDiv>
          <InfoComp />
          <Title />
        </MainDiv>
      </StyledSpan>
    </>
  );
};

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
