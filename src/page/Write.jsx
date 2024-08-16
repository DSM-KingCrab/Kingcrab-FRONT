import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoWrite from "../components/InfoWrite";
import TitleWrite from "../components/TitleWrite";
import Textarea from "../components/Textarea";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";
import { useState } from "react";
import instance from "../api";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const router = useNavigate();

  const onClick = async () => {
    await instance.post("/post/create", Posts).then(console.log("성공"), router("/ViewPost"));
  };

  const OnChange = (e) => {
    const { name, value } = e.target;
    setPosts({ ...Posts, [name]: value });
    console.log(Posts);
  };

  const [Posts, setPosts] = useState({
    title: "",
    content: "",
  });

  return (
    <>
      <HeaderLog />
      <StyledDiv>
        <MainDiv>
          <InfoWrite />
          <TitleWrite name="title" value={Posts.title} OnChange={OnChange} />
          <Textarea name="content" value={Posts.content} OnChange={OnChange} />
          <Buttons>
            <a href="/MainLog" style={{ textDecoration: "none" }}>
              <CancelComp />
            </a>
            <ConfirmComp text="완료" onClick={onClick} />
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

export default Write;
