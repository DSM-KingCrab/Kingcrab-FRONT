import { theme } from "../styles/theme";
import styled from "styled-components";

const Textarea = () => {
  return (
    <>
      <MainText placeholder="내용을 입력하세요."/>
    </>
  )
}

const MainText = styled.textarea`
  width: 1044px;
  height: 600px;
  border: none;
  resize: none;
  overflow: scroll;
  border-bottom: 2px solid ${theme.color.gray[300]};
  padding: 24px 72px 0 72px;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default Textarea;