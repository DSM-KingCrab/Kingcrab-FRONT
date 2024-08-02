import React from "react";
import styled from "styled-components";
import HeaderNoLog from "../components/HeaderCompNoLog";
import Post from "../components/PostComp";

const MainNoLog = () => {
  return (
    <>
      <HeaderNoLog></HeaderNoLog>
      <StyledDiv>
        <Styledsection>
          <Post/>
          <Post/>
          <Post/>
        </Styledsection>
      </StyledDiv>
    </>
  );
}

const Styledsection = styled.section`
  width: 1044px;
  height: 920px;
  margin-top: 48px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

export default MainNoLog;