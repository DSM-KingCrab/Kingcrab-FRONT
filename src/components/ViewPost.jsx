import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import HeaderLog from "./HeaderCompLog";
import InfoComp from "./InfoComp";


function ViewPost() {
  return (
    <>
      <HeaderLog />
      <MainDiv>
        <InfoComp />
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`

export default ViewPost;
