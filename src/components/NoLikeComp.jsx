import { theme } from "../styles/theme";
import styled from "styled-components";
import BlankHeart from "../images/octicon_heart-16.png"

const NoLikeComp = () => {
  return (
    <LikeDiv>
      <LikeNum>30</LikeNum>
      <StyledImg src={BlankHeartHeart} />
    </LikeDiv>
  );
}

const LikeDiv = styled.div`
  float: right;
  margin-right: 12px;
  width: 71px;
  height: 36px;
  display: flex;
  align-items: center;
`;
const LikeNum = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.gray[300]};
  margin-right: 4px;
`;
const StyledImg = styled.img`
  width: 36px;
  height: 36px;
  display: inline;
  float: right;
`;

export default NoLikeComp;