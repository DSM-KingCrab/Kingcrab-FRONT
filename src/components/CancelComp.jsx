import { theme } from "../styles/theme";
import styled from "styled-components";

const CancelComp = () => {
  return (
    <>
      <MainDiv>취소</MainDiv>
    </>
  );
};

const MainDiv = styled.button`
  width: 140px;
  height: 56px;
  background-color: ${theme.color.gray[300]};
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  display: inline;
  margin-right: 24px;
`;
export default CancelComp;