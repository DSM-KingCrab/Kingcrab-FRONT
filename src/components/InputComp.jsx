import { theme } from "../styles/theme";
import styled from "styled-components";

const Input = ({width="100%", ...props}) => {
  return (
    <InputContainer>
      <StyledP>{props.label}</StyledP>
      <StyledInput
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoFocus
        width={width}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  
`

const StyledInput = styled.input`
  padding: 16px;
  width: ${({width})=> width};
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
`;

export default Input;
