import styled from "styled-components";
import { theme } from "../styles/theme";
import SmallLike from "./SmallLike";

function InfoComp() {
  return (
    <MainDiv>
      <SubDiv>
        <StyledP>작성자</StyledP>
        <StyledHr/>
        <StyledP>dodowind_</StyledP>
      </SubDiv>
      <SubDiv>
        <StyledP>작성일</StyledP>
        <StyledHr/>
        <StyledP>2024.07.07</StyledP>
      </SubDiv>
      <SmallLike/>
    </MainDiv>
  );
}

const SubDiv = styled.div``

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
  justify-content: space-around;
  align-items: center;
`;

export default InfoComp;
