import { theme } from "../styles/theme";
import styled from "styled-components";

function Comment(props) {
  const propName = props.placeholder;
  return(
    <>
      <StyledComment type="text" placeholder={props.placeholder}/>
    </>
  )
}

const StyledComment = styled.input`
  padding: 12px 16px;
  width: 940px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.gray[100]};
  &::placeholder{
    color: ${theme.color.gray[300]};
    font-size: 20px;
    line-height: 24px;
  }
`

export default Comment;