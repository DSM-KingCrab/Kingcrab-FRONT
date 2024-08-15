import { theme } from "../styles/theme";
import styled from "styled-components";

const Comment = (props) => {
  return (
    <>
      <StyledComment
        type="text"
        placeholder={props.placeholder}
        postId={props.postId}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};

const StyledComment = styled.input`
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.gray[100]};
  &::placeholder {
    color: ${theme.color.gray[300]};
    font-size: 20px;
    line-height: 24px;
  }
  font-size: 20px;
  color: black;
  outline: none;
`;

export default Comment;
