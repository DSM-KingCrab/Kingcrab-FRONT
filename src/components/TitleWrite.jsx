import { theme } from "../styles/theme";
import styled from "styled-components";

const TitleWrite = (Props) => {
  return (
    <MainDiv>
      <StyledSpan>
        <StyledP>제목</StyledP>
        <StyledDiv />
        <StyledInput
          type="text"
          placeholder={Props.placeholder}
          onChange={Props.OnChange}
          name={Props.name}
          value={Props.value}
        />
      </StyledSpan>
    </MainDiv>
  );
};

const StyledInput = styled.input`
  font-size: 24px;
  color: black;
  font-weight: bold;
  line-height: 29px;
  display: inline;
  outline: none;
  border: none;
`;
const StyledSpan = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
`;
const StyledDiv = styled.div`
  width: 0;
  height: 40px;
  border-left: 2px solid ${theme.color.gray[300]};
  display: inline;
  margin: 0 56px 0 56px;
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
  justify-content: space-between;
`;

export default TitleWrite;
