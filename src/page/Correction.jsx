import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import TitleWrite from "../components/TitleWrite";
import Textarea from "../components/Textarea";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";
import instance from "../api";

const Correction = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const contentPatch = () => {
    instance.patch("/update/{postId}", data);
  };
  const handleContent = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <MainDiv>
          <InfoComp />
          <TitleWrite
            name="title"
            value={data.title}
            onChange={handleContent}
            placeholder={data.title}
          />
          <Textarea
            onChange={handleContent}
            placeholder={data.content}
            name="content"
            value={data.content}
          />
          <Buttons>
            <a href="/ViewPost" style={{ textDecoration: "none" }}>
              <CancelComp />
            </a>
            <ConfirmComp onClick={CorrectionApi} text="수정" />
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
const MainDiv = styled.div`
  width: 1044px;
  margin-top: 36px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default Correction;
