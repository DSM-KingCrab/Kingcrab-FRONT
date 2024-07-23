import { theme } from "../styles/theme";
import styled from "styled-components";
import eyeImg from "../images/mdi_eye.png"

function Password(props) {
  const propName = props.placeholder;
  return (
    <>
      <InputBox>
        <StyledInput type="password" placeholder={props.placeholder} />
        <StyledImg src={eyeImg}/>
      </InputBox>
    </>
  );
}

const InputBox = styled.div`
  width: 100%;
  height: 48px;
  border: 2px solid ${theme.color.gray[100]};
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
`
const StyledInput = styled.input`
  &::placeholder {
    color: ${theme.color.gray[500]};
    font-size: 18px;
  }
  border: none;
  margin-top: 13px;
  margin-bottom: 14px;
  float: left;
  line-height: 21px;
  width: 500px;
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  float: right;
  margin-top: 8px;
`

export default Password;
