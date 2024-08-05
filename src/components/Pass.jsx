import { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import openEye from "../images/mdi_eye.png";
import closeEye from "../images/mdi_eye-off.png";

const Password = (props) => {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = () => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <>
      <StyledP>{props.label}</StyledP>
      <InputBox>
        <StyledInput type={pwType.type} placeholder={props.placeholder} />
        <StyledSpan onClick={handlePasswordType}>
          {pwType.visible ? <img src={openEye} alt="비밀번호 보이기" /> : <img src={closeEye} alt="비밀번호 숨기기" />}
        </StyledSpan>
      </InputBox>
    </>
  );
};

const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  margin: 0px 0px 20px 374px;
  font-weight: bold;
`;
const InputBox = styled.div`
  width: 600px;
  height: 48px;
  border: 1px solid ${theme.color.gray[700]};
  border-radius: 8px;
  padding: 0px 8px;
  margin-left: 372px;
  margin-bottom: 35px;
`;
const StyledInput = styled.input`
  &::placeholder {
    color: ${theme.color.gray[600]};
    font-size: 16px;
  }
  outline: none;
  border: none;
  margin-top: 13px;
  margin-bottom: 14px;
  float: left;
  line-height: 21px;
  width: 500px;
`;

const StyledSpan = styled.span`
  width: 30px;
  height: 30px;
  float: right;
  margin-top: 8px;
`;

export default Password;
