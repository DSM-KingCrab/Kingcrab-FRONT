import { theme } from "../styles/theme";
import styled from "styled-components";
import LikeComp from "./LikeComp";
import dots from "../images/Frame 2080013184.png";
import React, { useEffect, useRef, useState } from "react";
import Comment from "./comentComp";
import instance from "../api";

const DtComment = (props) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [isFixModalOpen, setIsFixModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [data, setData] = useState({
    comment: props.content,
    id: props.Id,
  });
  const userName = localStorage.getItem("userName");

  //캐밥 열고 닫기
  const HandleKebabTogle = () => {
    setIsKebabOpen((prevValue) => !prevValue);
  };

  const optionsRef = useRef(null);

  // 수정하기 모달
  const HandleFixModalToggle = () => {
    setIsFixModalOpen(true);
  };
  const commentPatch = (e) => {
    if (e.key === "Enter") {
      instance.patch("/update", data);
      setIsFixModalOpen(false);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // 삭제하기 모달
  const HandleDeleteModalToggle = () => {
    setIsDeleteModalOpen((prevValue) => !prevValue);
  };

  const [checkUser, setCheckUser] = useState(false);
  const isUserLog = () => {
    if (data.id === userName) {
      setCheckUser(true);
    } else {
      setCheckUser(false);
    }
  };

  useEffect(() => {
    isUserLog();
  }, []);

  return (
    <MainDiv>
      <StyledDiv>
        <Info>
          <StyledP>{props.Id}</StyledP>
          <StyledDate>
            {props.time.toISOString.replace("T", " ").slice(0, -5)}
          </StyledDate>{" "}
        </Info>

        <Icon>
          <LikeComp />
          {checkUser ? (
            <StyledImg onClick={HandleKebabTogle} src={dots} alt="더보기" />
          ) : (
            <></>
          )}
          {isKebabOpen && (
            <KebabDiv ref={optionsRef}>
              <StyledButton
                onClick={() => (HandleFixModalToggle(), setIsKebabOpen(false))}
              >
                수정하기
              </StyledButton>
              <StyledHr />
              <StyledButton
                onClick={() => (
                  HandleDeleteModalToggle(), setIsKebabOpen(false)
                )}
              >
                삭제하기
              </StyledButton>
            </KebabDiv>
          )}
        </Icon>
      </StyledDiv>
      {isFixModalOpen ? (
        <Comment
          onChange={handleChange}
          onKeyDown={commentPatch}
          name="comment"
          value={data.comment}
        />
      ) : (
        <Contents>{data.comment}</Contents>
      )}
    </MainDiv>
  );
};

const StyledHr = styled.hr`
  width: 69px;
  border: 1px solid ${theme.color.gray[300]};
  margin: 4px 0 4px 0;
`;
const StyledButton = styled.button`
  color: ${theme.color.gray[500]};
  font-size: 12px;
  width: 69px;
  height: 13px;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${theme.color.main[500]};
  }
`;
const KebabDiv = styled.div`
  width: 85px;
  height: 49px;
  border: 1px solid ${theme.color.gray[500]};
  border-radius: 5px;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 6px;
  position: fixed;
  margin: 80px 90px 0 0;
`;
const Info = styled.div``;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  justify-content: space-between;
  margin-right: 8px;
`;
const StyledImg = styled.img`
  width: 6px;
  height: 26px;
  display: inline;
  cursor: pointer;
`;
const Contents = styled.p`
  display: block;
  font-size: 20px;
  font-weight: lighter;
  margin: 12px 0;
`;
const StyledP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-right: 18px;
  display: inline;
  line-height: 29px;
`;
const StyledDate = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color.main[500]};
  display: inline;
  margin-top: 5px;
  line-height: 24px;
`;
const MainDiv = styled.div`
  width: 100%;
  border-bottom: 2px solid ${theme.color.gray[300]};
  margin-top: 20px;
  display: inline;
  padding: 0 0 16px 0;
`;

export default DtComment;
