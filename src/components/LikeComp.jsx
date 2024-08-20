import styled from "styled-components";
import heartFilled from "../images/ph_heart-fill.png";
import heartBlank from "../images/octicon_heart-16.png";
import React, { useEffect, useState } from "react";
import { theme } from "../styles/theme";
import axios from "axios";

const LikeComp = () => {
  const [data, setData] = useState({
    count: 0,
    click: false,
  });

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getData = () => {
    const count = axios.post(`${BASE_URL}post/like{postId}`, data);
    setData(count);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    getData();
  });

  return (
    <LikeDiv onClick={handleCheck}>
      {isChecked ? (
        <Num style={{ color: "#ff2f54" }}>{setData(data.count + 1)}</Num>
      ) : (
        <Num style={{ color: "#8c8a8f" }}>{data.count}</Num>
      )}

      {isChecked ? (
        <StyledImg1 src={heartFilled} onClick={handleCheck} />
      ) : (
        <StyledImg2
          src={heartBlank}
          style={{ fontSize: "36px" }}
          onClick={handleCheck}
        />
      )}
    </LikeDiv>
  );
};

const Num = styled.p`
  font-size: 24px;
  margin-right: 8px;
  font-weight: bold;
  display: inline;
  color: ${theme.color.gray[500]};
`;
const LikeDiv = styled.div`
  float: right;
  margin-right: 12px;
  display: flex;
  align-items: flex-end;
  display: inline;
`;
const StyledImg1 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledImg2 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  cursor: pointer;
`;

export default LikeComp;
