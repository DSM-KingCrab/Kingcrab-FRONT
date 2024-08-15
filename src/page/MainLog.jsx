import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLog from "../components/HeaderCompLog";
import Post from "../components/PostComp";
import { theme } from "../styles/theme";
import plusImg from "../images/ic_round-plus.png";
import instance from "../api/index";

const MainLog = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    instance.get("http://172.20.10.3:8080/read").then((Response) => {
      setBoardList(Response.data);
    });
  }, []);

  return (
    <div>
      {boardList.map((e) => (
        <>
          <HeaderLog Id={e.name} />
          <StyledDiv>
            <Styledsection>
              <Post />
              <Post />
              <Post />
              <Post />
            </Styledsection>
          </StyledDiv>
          <Plus>
            <AddPost>
              <StyledImg src={plusImg} alt="추가" />
            </AddPost>
          </Plus>
        </>
      ))}
    </div>
  );
};

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
const Plus = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const AddPost = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 500px;
  border: none;
  background-color: ${theme.color.main[500]};
  float: right;
  z-index: 10;
  right: 72px;
  bottom: 72px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Styledsection = styled.section`
  width: 1044px;
  height: 100%;
  margin-top: 48px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default MainLog;
