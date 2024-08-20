import React from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import TitleWrite from "../components/TitleWrite";
import Textarea from "../components/Textarea";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";
import { useNavigate } from "react-router-dom";
import instance from "../api";
import { useState } from "react";

const Correction = (props) => {
  const router = useNavigate();
  const CorrectionApi = () => {
    const userName = localStorage.getItem(`userName`);
    if (userName === props.name) {
      instance.patch(`/post/update/${props.postId}`).then(router("/mainLog"));
    } else {
      alert("타인의 게시물은 수정할 수 없습니다.");
    }
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
          <InfoComp />
          <TitleWrite name="title" value={Posts.title} OnChange={OnChange} />
          <Textarea name="content" value={Posts.content} OnChange={OnChange} />
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
