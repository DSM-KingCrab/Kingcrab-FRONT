import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import InfoComp from "../components/InfoComp";
import Title from "../components/TitleComp";
import Detail from "../components/Detail";
import Comment from "../components/comentComp";
import DtComment from "../components/DtComment";
import instance from "../api";
import Swal from "sweetalert2";

const ViewPost = () => {
  const [viewData, setViewData] = useState([]);

  const getData = () => {
    instance.get("/comment/read{postId}").then((res) => {
      console.log(res.data);

      setViewData(res.data);
    });
  };

  const [data, setData] = useState({
    comment: "",
    id: "",
  });

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (data.comment === "") {
        Swal.fire({
          icon: "error",
          title: "내용이 없습니다!",
          text: "댓글 내용을 입력해주세요.",
          timer: 1500,
        });
      } else {
        instance.post("/create", data);
        setData({ comment: "" });
        getData();
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderLog Id="Hi"/>
      <StyledSpan>
        <MainDiv>
          <InfoComp />
          <Title />
          <Detail />
          <CommentSection id="commentSection">
            <Comment
              value={data.comment}
              name="comment"
              onChange={handleChange}
              onKeyDown={onEnter}
              placeholder="댓글 달기"
            />
            {viewData.map((e) => (
              <DtComment Id={e.comment} time={e.now} content={e.comment} />
            ))}
            <DtComment Id="test" time="test" content="test" />
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
