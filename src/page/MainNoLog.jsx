import React from "react";
import styled from "styled-components";
import HeaderNoLog from "../components/HeaderCompNoLog";
import Post from "../components/PostComp";
import { useState, useEffect } from "react";
import instance from "../api";

const MainNoLog = () => {
  const [data, setData] = useState([]);

  const PostApi = async () => {
    await instance
      .get("/post/read")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    PostApi();
  }, []);
  return (
    <>
      <HeaderNoLog />
      <StyledDiv>
        <Styledsection>
          {data?.map((item, index) => (
            <Post
              key={index}
              name={item.name}
              now={item.now.slice(0, 10)}
              content={item.content}
              postId={item.postId}
            />
          ))}
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
