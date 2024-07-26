import { theme } from "../styles/theme";
import styled from "styled-components";

const Title = () => {
  return (
    <MainDiv>
      <div>
        <StyledP>제목</StyledP>
        <StyledDiv/>
      </div>
    </MainDiv>
  );
};

const StyledDiv = styled.div`
  width: 0;
  height: 40px;
  border-left: 2px solid ${theme.color.gray[300]};
  display: inline;
`;
const StyledP = styled.p`
  font-size: 24px;
  color: black;
  font-weight: bold;
  line-height: 29px;
  display: inline;
`;
const MainDiv = styled.div`
  width: 1044px;
  height: 68px;
  border-top: 2px solid ${theme.color.gray[300]};
  border-bottom: 2px solid ${theme.color.gray[300]};
  margin-top: 20px;
  padding: 0 24px 0 52px;
  display: flex;
  align-items: center;
`;

export default Title;
