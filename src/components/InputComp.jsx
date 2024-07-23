import { theme } from "../styles/theme";
import styled from "styled-components";

function Input(props) {
  const propName = props.placeholder;
  return(
    <>
      <StyledInput type="text" placeholder={props.placeholder}/>
    </>
  )
}

const StyledInput = styled.input`
  padding: 16px;
  width: 100%;
  height: 48px;
  border: 2px solid ${theme.color.gray[100]};
  border-radius: 10px;
  &::placeholder{
    color: ${theme.color.gray[500]};
    font-size: 18px;
  }
`

//

export default Input;