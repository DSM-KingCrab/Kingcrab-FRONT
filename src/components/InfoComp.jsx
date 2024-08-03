import styled from "styled-components";
import { theme } from "../styles/theme";
import SmallLike from "./SmallLike";

const InfoComp = () => {
  return (
    <MainDiv>
      <StyledSpan>
        <StyledP>작성자</StyledP>
        <StyledHr/>
        <StyledP>dodowind_</StyledP>
      </StyledSpan>
      <StyledSpan >
        <StyledP>작성일</StyledP>
        <StyledHr/>
        <StyledP>2024.07.07</StyledP>
      </StyledSpan>
      <SmallLike/>
    </MainDiv>
  );
}

const StyledSpan = styled.span`
  height: 28px;
  display: flex;
  align-items: center;
`
const StyledHr = styled.div`
  border-left: 2px solid ${theme.color.gray[300]};
  width: 0;
  height: 28px;
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
`
const StyledP = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  line-height: 24px;
  display: inline;
`;
const MainDiv = styled.div`
  width: 1044px;
  height: 60px;
  background-color: ${theme.color.gray[50]};
  border-top: 2px solid ${theme.color.gray[300]};
  border-bottom: 2px solid ${theme.color.gray[300]};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 0 149px 0 150px;
`;

export default InfoComp;
