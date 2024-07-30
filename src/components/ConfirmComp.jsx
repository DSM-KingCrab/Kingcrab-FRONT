import { theme } from "../styles/theme";
import styled from "styled-components";

const ConfirmComp = (props) => {
  return (
    <>
      <MainDiv>{props.text}</MainDiv>
    </>
  );
};

const MainDiv = styled.button`
  width: 140px;
  height: 56px;
  background-color: ${theme.color.main[300]};
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  display: inline;
`;

export default ConfirmComp;