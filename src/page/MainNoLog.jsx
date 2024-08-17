import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import Post from "../components/PostComp";

const MainNoLog = () => {
  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <Styledsection>
          <Post />
          <Post />
          <Post />
        </Styledsection>
      </StyledDiv>
    </>
  );
};

const Styledsection = styled.section`
  width: 1044px;
  height: 920px;
  margin-top: 48px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default MainNoLog;
