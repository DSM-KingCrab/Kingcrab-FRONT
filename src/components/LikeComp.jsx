import { theme } from "../styles/theme";
import styled from "styled-components";
import Heart from "../images/ph_heart-fill.png"

function LikeComp() {
  return (
    <LikeDiv>
      <LikeNum>30</LikeNum>
      <StyledImg src={Heart} />
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
  color: ${theme.color.main[500]};
  margin-right: 4px;
`;
const StyledImg = styled.img`
  width: 36px;
  height: 36px;
  display: inline;
  float: right;
`;

export default LikeComp;