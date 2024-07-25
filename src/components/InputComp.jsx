import { theme } from "../styles/theme";
import styled from "styled-components";

function Input(props) {
  return (
    <>
      <StyledP>{props.label}</StyledP>
      <StyledInput type="text" placeholder={props.placeholder} autoFocus/>
    </>
  );
}

const StyledInput = styled.input`
  padding: 16px;
  width: 100%;
  height: 48px;
  border: 2px solid ${theme.color.gray[100]};
  border-radius: 10px;
  &::placeholder {
    color: ${theme.color.gray[500]};
    font-size: 18px;
  }
  font-size: 18px;
  outline: none;
`;
const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  margin-bottom: 12px;
  margin-top: 32px;
`

export default Input;
