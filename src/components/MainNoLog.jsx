import React from "react";
import Header from "./HeaderCompLog";
import styled from "styled-components";
import { theme } from "../styles/theme";
import HeaderNoLog from "./HeaderCompNoLog";
import Comment from "./comentComp";
import Post from "./PostComp";

function MainNoLog() {
  return (
    <>
      <HeaderNoLog></HeaderNoLog>
      <StyledDiv>
        <Styledsection>
          <Post></Post>
          <Post></Post>
          <Post></Post>
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
