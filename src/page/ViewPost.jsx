import React, { useState } from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Title from "../components/TitleComp";
import Detail from "../components/Detail";
import Comment from "../components/comentComp";
//import DtComment from "../components/DtComment";
import axios from "axios";
import Swal from "sweetalert2";

const ViewPost = () => {
  const [data, setData] = useState({
    comment: "",
    id: "",
  });

  const [content, setContent] = useState("");

  const onEnter = () => {
    if (data.comment === "") {
      Swal.fire({
        toast: "댓글 내용을 입력해주세요.",
      });
    } else {
      axios.post("http://172.20.10.3:8080/create", data);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <HeaderLog />
      <StyledSpan>
        <MainDiv>
          <InfoComp />
          <Title />
          <Detail />
          <CommentSection>
            <Comment
              value={data.comment}
              name="comment"
              onChange={handleChange}
              placeholder="댓글 달기"
            />
            {/* <DtComment Id={} propDate={} propComment={} />
            <DtComment Id={} propDate={} propComment={} /> */}
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
  flex-wrap: wrap;
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
